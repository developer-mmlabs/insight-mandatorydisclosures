import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the mandatory disclosure page", async () => {
  const response = await render("/mandatory");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>CBSE Mandatory Disclosure \| Insight Academy<\/title>/i);
  assert.match(html, /Mandatory public disclosures/);
  assert.match(html, /Affiliation &amp; registration/);
  assert.match(html, /Safety &amp; sanitation/);
  assert.match(html, /Academics &amp; governance/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);

  const documentLinks = html.match(/href="\/documents\/[^"]+\.pdf"/g) ?? [];
  assert.equal(documentLinks.length, 15);
});

test("all disclosure PDFs are included in the public bundle", async () => {
  const documentRoot = new URL("../public/documents/", import.meta.url);
  const files = (await readdir(documentRoot)).filter((file) =>
    file.endsWith(".pdf"),
  );

  assert.equal(files.length, 15);
  assert.deepEqual(files, [...files].sort());
});

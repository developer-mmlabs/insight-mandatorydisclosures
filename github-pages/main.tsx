import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DisclosurePage } from "../app/disclosure-page";
import "../app/globals.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Missing page root");
}

createRoot(root).render(
  <StrictMode>
    <DisclosurePage assetBase={import.meta.env.BASE_URL} />
  </StrictMode>,
);

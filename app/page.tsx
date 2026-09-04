import type { Metadata } from "next";
import { DisclosurePage } from "./disclosure-page";

export const metadata: Metadata = {
  title: "CBSE Mandatory Disclosure | Insight Academy",
  description:
    "View and download the mandatory disclosure documents for Insight Academy.",
};

export { DisclosurePage };

export default function Home() {
  return <DisclosurePage />;
}

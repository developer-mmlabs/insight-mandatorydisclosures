import type { Metadata } from "next";
import { Lato, Montserrat } from "next/font/google";
import "./globals.css";

const bodyFont = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const headingFont = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "CBSE Mandatory Disclosure | Insight Academy",
  description:
    "View and download the mandatory disclosure documents for Insight Academy.",
  openGraph: {
    title: "CBSE Mandatory Disclosure | Insight Academy",
    description:
      "View and download the mandatory disclosure documents for Insight Academy.",
    images: [
      {
        url: "/og.png",
        width: 1731,
        height: 909,
        alt: "CBSE Mandatory Disclosure — Insight Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CBSE Mandatory Disclosure | Insight Academy",
    description:
      "View and download the mandatory disclosure documents for Insight Academy.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        {children}
      </body>
    </html>
  );
}

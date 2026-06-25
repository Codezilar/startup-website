import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bermard AI - Intelligent Product Platform",
  description:
    "A premium AI SaaS landing page for intelligent products, real-time analytics, automation, and enterprise AI infrastructure.",
  openGraph: {
    title: "Bermard AI - Intelligent Product Platform",
    description:
      "Build smarter products with secure AI infrastructure, predictive insights, and high-accuracy automation.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

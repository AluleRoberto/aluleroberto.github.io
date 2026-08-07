import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Alule Robert | Biology, Research & Opportunities",
    template: "%s | Alule Robert",
  },
  description:
    "Alule Robert — MSc Biochemistry researcher and biological sciences educator in Uganda. Research, learning resources and bioscience opportunities.",
  metadataBase: new URL("https://alulerobert.me"),
  openGraph: {
    type: "website",
    locale: "en_UG",
    siteName: "Alule Robert",
    title: "Alule Robert | Biology, Research & Opportunities",
    description: "Research, learning resources and practical routes into biological sciences — built from Uganda, connected to the world.",
    url: "https://alulerobert.me",
  },
  twitter: {
    card: "summary",
    title: "Alule Robert | Biology, Research & Opportunities",
    description: "Research, learning resources and practical routes into biological sciences from Uganda.",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

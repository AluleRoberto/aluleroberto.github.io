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
  authors: [{ name: "Alule Robert", url: "https://alulerobert.me" }],
  creator: "Alule Robert",
  publisher: "Alule Robert",
  category: "science and education",
  keywords: [
    "Alule Robert",
    "biochemistry Uganda",
    "biology education Uganda",
    "bioscience opportunities Uganda",
    "Makerere University",
    "Biochemical Society",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_UG",
    siteName: "Alule Robert",
    title: "Alule Robert | Biology, Research & Opportunities",
    description: "Research, learning resources and practical routes into biological sciences — built from Uganda, connected to the world.",
  },
  twitter: {
    card: "summary",
    title: "Alule Robert | Biology, Research & Opportunities",
    description: "Research, learning resources and practical routes into biological sciences from Uganda.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alule Robert",
  url: "https://alulerobert.me",
  jobTitle: "Biological sciences educator and MSc Biochemistry researcher",
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "Makerere University",
    url: "https://www.mak.ac.ug/",
  },
  knowsAbout: ["Biochemistry", "Malaria", "Systems biology", "Biology education"],
  sameAs: [
    "https://orcid.org/0009-0002-9314-008X",
    "https://github.com/AluleRoberto",
    "https://www.linkedin.com/in/AluleRobert",
    "https://www.biochemistry.org/membership-and-communities/biochemical-society-ambassadors/our-student-ambassadors/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-UG">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}

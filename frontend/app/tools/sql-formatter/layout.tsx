import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SQL Formatter: Beautify & Format SQL Queries Online",
  description: "Format, beautify, and indent complex SQL queries instantly in your browser. Supports customizable keyword casing, tab spacing, and minification securely.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/sql-formatter",
  },
  openGraph: {
    title: "SQL Formatter: Beautify & Format SQL Queries Online",
    description: "Format, beautify, and indent complex SQL queries instantly in your browser. Supports customizable keyword casing, tab spacing, and minification securely.",
    url: "https://www.astonishbuddy.com/tools/sql-formatter",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SQL Formatter: Beautify & Format SQL Queries Online",
    description: "Format, beautify, and indent complex SQL queries instantly in your browser. Supports customizable keyword casing, tab spacing, and minification securely.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.astonishbuddy.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tools",
        item: "https://www.astonishbuddy.com/#tools",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "SQL Formatter",
        item: "https://www.astonishbuddy.com/tools/sql-formatter",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SQL Formatter",
    url: "https://www.astonishbuddy.com/tools/sql-formatter",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Format, beautify, and indent complex SQL queries instantly in your browser. Supports customizable keyword casing, tab spacing, and minification securely.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      {children}
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text Sorter Online: Sort Lines A-Z & Deduplicate Free",
  description: "Sort text lines alphabetically A-Z or Z-A, organize numerical lists, and remove duplicate entries instantly. Free browser-based text utility for clean data.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/text-sorter",
  },
  openGraph: {
    title: "Text Sorter Online: Sort Lines A-Z & Deduplicate Free",
    description: "Sort text lines alphabetically A-Z or Z-A, organize numerical lists, and remove duplicate entries instantly. Free browser-based text utility for clean data.",
    url: "https://www.astonishbuddy.com/tools/text-sorter",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Sorter Online: Sort Lines A-Z & Deduplicate Free",
    description: "Sort text lines alphabetically A-Z or Z-A, organize numerical lists, and remove duplicate entries instantly. Free browser-based text utility for clean data.",
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
        name: "Text Sorter",
        item: "https://www.astonishbuddy.com/tools/text-sorter",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Text Sorter",
    url: "https://www.astonishbuddy.com/tools/text-sorter",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Sort text lines alphabetically A-Z or Z-A, organize numerical lists, and remove duplicate entries instantly. Free browser-based text utility for clean data.",
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

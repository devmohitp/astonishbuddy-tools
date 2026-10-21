import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UUID Generator: Create Secure UUID v4 & GUIDs Online",
  description: "Generate cryptographically secure Universally Unique Identifiers (UUID v4) and GUIDs in bulk or individually. Runs locally in your browser for absolute privacy.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/uuid-generator",
  },
  openGraph: {
    title: "UUID Generator: Create Secure UUID v4 & GUIDs Online",
    description: "Generate cryptographically secure Universally Unique Identifiers (UUID v4) and GUIDs in bulk or individually. Runs locally in your browser for absolute privacy.",
    url: "https://www.astonishbuddy.com/tools/uuid-generator",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UUID Generator: Create Secure UUID v4 & GUIDs Online",
    description: "Generate cryptographically secure Universally Unique Identifiers (UUID v4) and GUIDs in bulk or individually. Runs locally in your browser for absolute privacy.",
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
        name: "UUID Generator",
        item: "https://www.astonishbuddy.com/tools/uuid-generator",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "UUID Generator",
    url: "https://www.astonishbuddy.com/tools/uuid-generator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Generate cryptographically secure Universally Unique Identifiers (UUID v4) and GUIDs in bulk or individually. Runs locally in your browser for absolute privacy.",
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

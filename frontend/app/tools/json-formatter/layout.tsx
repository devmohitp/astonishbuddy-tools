import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator: Beautify JSON Data Online",
  description: "Format, beautify, and validate JSON data instantly with syntax highlighting and tree inspection. Detect syntax errors quickly with 100% client-side privacy.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/json-formatter",
  },
  openGraph: {
    title: "JSON Formatter & Validator: Beautify JSON Data Online",
    description: "Format, beautify, and validate JSON data instantly with syntax highlighting and tree inspection. Detect syntax errors quickly with 100% client-side privacy.",
    url: "https://www.astonishbuddy.com/tools/json-formatter",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter & Validator: Beautify JSON Data Online",
    description: "Format, beautify, and validate JSON data instantly with syntax highlighting and tree inspection. Detect syntax errors quickly with 100% client-side privacy.",
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
        name: "JSON Formatter",
        item: "https://www.astonishbuddy.com/tools/json-formatter",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "JSON Formatter",
    url: "https://www.astonishbuddy.com/tools/json-formatter",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Format, beautify, and validate JSON data instantly with syntax highlighting and tree inspection. Detect syntax errors quickly with 100% client-side privacy.",
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

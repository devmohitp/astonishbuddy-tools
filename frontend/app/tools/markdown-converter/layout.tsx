import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Markdown to HTML Converter: Fast Two-Way Online Tool",
  description: "Convert Markdown to clean HTML or turn HTML back into Markdown instantly. Free online two-way converter with live real-time split preview and quick copying.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/markdown-converter",
  },
  openGraph: {
    title: "Markdown to HTML Converter: Fast Two-Way Online Tool",
    description: "Convert Markdown to clean HTML or turn HTML back into Markdown instantly. Free online two-way converter with live real-time split preview and quick copying.",
    url: "https://www.astonishbuddy.com/tools/markdown-converter",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Markdown to HTML Converter: Fast Two-Way Online Tool",
    description: "Convert Markdown to clean HTML or turn HTML back into Markdown instantly. Free online two-way converter with live real-time split preview and quick copying.",
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
        name: "Markdown Converter",
        item: "https://www.astonishbuddy.com/tools/markdown-converter",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Markdown Converter",
    url: "https://www.astonishbuddy.com/tools/markdown-converter",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Convert Markdown to clean HTML or turn HTML back into Markdown instantly. Free online two-way converter with live real-time split preview and quick copying.",
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

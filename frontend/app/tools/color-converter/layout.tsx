import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Color Code Converter: Convert HEX, RGB & HSL Online",
  description: "Convert colors instantly between HEX, RGB, and HSL color models. Free online color converter with real-time preview, copy buttons, and CSS-ready code snippets.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/color-converter",
  },
  openGraph: {
    title: "Color Code Converter: Convert HEX, RGB & HSL Online",
    description: "Convert colors instantly between HEX, RGB, and HSL color models. Free online color converter with real-time preview, copy buttons, and CSS-ready code snippets.",
    url: "https://www.astonishbuddy.com/tools/color-converter",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Color Code Converter: Convert HEX, RGB & HSL Online",
    description: "Convert colors instantly between HEX, RGB, and HSL color models. Free online color converter with real-time preview, copy buttons, and CSS-ready code snippets.",
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
        name: "Color Code Converter",
        item: "https://www.astonishbuddy.com/tools/color-converter",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Color Code Converter",
    url: "https://www.astonishbuddy.com/tools/color-converter",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Convert colors instantly between HEX, RGB, and HSL color models. Free online color converter with real-time preview, copy buttons, and CSS-ready code snippets.",
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

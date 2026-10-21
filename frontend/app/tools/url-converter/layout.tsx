import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "URL Encoder & Decoder: Fast Online Percent-Encoding",
  description: "Encode and decode URLs, query strings, and special characters using standard percent-encoding. Clean, instant, and private conversion directly in your browser.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/url-converter",
  },
  openGraph: {
    title: "URL Encoder & Decoder: Fast Online Percent-Encoding",
    description: "Encode and decode URLs, query strings, and special characters using standard percent-encoding. Clean, instant, and private conversion directly in your browser.",
    url: "https://www.astonishbuddy.com/tools/url-converter",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "URL Encoder & Decoder: Fast Online Percent-Encoding",
    description: "Encode and decode URLs, query strings, and special characters using standard percent-encoding. Clean, instant, and private conversion directly in your browser.",
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
        name: "URL Converter",
        item: "https://www.astonishbuddy.com/tools/url-converter",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "URL Converter",
    url: "https://www.astonishbuddy.com/tools/url-converter",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Encode and decode URLs, query strings, and special characters using standard percent-encoding. Clean, instant, and private conversion directly in your browser.",
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

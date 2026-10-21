import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulk Image Converter: Convert Multiple Images for Free",
  description: "Convert multiple PNG, JPG, WebP, AVIF, and BMP images simultaneously in your browser. Fast, batch-processing converter with zero server uploads or file limits.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/bulk-image-converter",
  },
  openGraph: {
    title: "Bulk Image Converter: Convert Multiple Images for Free",
    description: "Convert multiple PNG, JPG, WebP, AVIF, and BMP images simultaneously in your browser. Fast, batch-processing converter with zero server uploads or file limits.",
    url: "https://www.astonishbuddy.com/tools/bulk-image-converter",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk Image Converter: Convert Multiple Images for Free",
    description: "Convert multiple PNG, JPG, WebP, AVIF, and BMP images simultaneously in your browser. Fast, batch-processing converter with zero server uploads or file limits.",
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
        name: "Bulk Image Converter",
        item: "https://www.astonishbuddy.com/tools/bulk-image-converter",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Bulk Image Converter",
    url: "https://www.astonishbuddy.com/tools/bulk-image-converter",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Convert multiple PNG, JPG, WebP, AVIF, and BMP images simultaneously in your browser. Fast, batch-processing converter with zero server uploads or file limits.",
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

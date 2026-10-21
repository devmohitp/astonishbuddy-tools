import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulk QR Code Generator: Create Batch QR Codes Free",
  description: "Generate multiple custom QR codes in seconds from URLs or text lists. Download batch QR codes instantly as a ZIP archive or print-ready PDF document.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/bulk-qrcode-generator",
  },
  openGraph: {
    title: "Bulk QR Code Generator: Create Batch QR Codes Free",
    description: "Generate multiple custom QR codes in seconds from URLs or text lists. Download batch QR codes instantly as a ZIP archive or print-ready PDF document.",
    url: "https://www.astonishbuddy.com/tools/bulk-qrcode-generator",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk QR Code Generator: Create Batch QR Codes Free",
    description: "Generate multiple custom QR codes in seconds from URLs or text lists. Download batch QR codes instantly as a ZIP archive or print-ready PDF document.",
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
        name: "Bulk QR Code Generator",
        item: "https://www.astonishbuddy.com/tools/bulk-qrcode-generator",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Bulk QR Code Generator",
    url: "https://www.astonishbuddy.com/tools/bulk-qrcode-generator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Generate multiple custom QR codes in seconds from URLs or text lists. Download batch QR codes instantly as a ZIP archive or print-ready PDF document.",
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free PDF Compressor: Reduce PDF File Size Online Fast",
  description: "Compress PDF documents in your browser securely without uploading sensitive files to external servers. Quick, private, and 100% free with no file limits.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/pdf-compressor",
  },
  openGraph: {
    title: "Free PDF Compressor: Reduce PDF File Size Online Fast",
    description: "Compress PDF documents in your browser securely without uploading sensitive files to external servers. Quick, private, and 100% free with no file limits.",
    url: "https://www.astonishbuddy.com/tools/pdf-compressor",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free PDF Compressor: Reduce PDF File Size Online Fast",
    description: "Compress PDF documents in your browser securely without uploading sensitive files to external servers. Quick, private, and 100% free with no file limits.",
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
        name: "PDF Compressor",
        item: "https://www.astonishbuddy.com/tools/pdf-compressor",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "PDF Compressor",
    url: "https://www.astonishbuddy.com/tools/pdf-compressor",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Compress PDF documents in your browser securely without uploading sensitive files to external servers. Quick, private, and 100% free with no file limits.",
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

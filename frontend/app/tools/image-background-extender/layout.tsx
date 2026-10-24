import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Background Extender: Expand Canvas & Photo Margins Free",
  description: "Extend photo backgrounds to 16:9, 4:5, or custom aspect ratios using edge mirroring, blur expansion, or color gradients. Free browser-based uncrop tool.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/image-background-extender",
  },
  openGraph: {
    title: "Image Background Extender: Expand Canvas & Photo Margins Free",
    description: "Extend photo backgrounds to 16:9, 4:5, or custom aspect ratios using edge mirroring, blur expansion, or color gradients. Free browser-based uncrop tool.",
    url: "https://www.astonishbuddy.com/tools/image-background-extender",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Background Extender: Expand Canvas & Photo Margins Free",
    description: "Extend photo backgrounds to 16:9, 4:5, or custom aspect ratios using edge mirroring, blur expansion, or color gradients. Free browser-based uncrop tool.",
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
        name: "Image Background Extender",
        item: "https://www.astonishbuddy.com/tools/image-background-extender",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Image Background Extender",
    url: "https://www.astonishbuddy.com/tools/image-background-extender",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Extend photo backgrounds to 16:9, 4:5, or custom aspect ratios using edge mirroring, blur expansion, or color gradients. Free browser-based uncrop tool.",
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

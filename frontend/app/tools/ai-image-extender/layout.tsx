import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Image Extender: Uncrop & Outpaint Photos Online Free",
  description: "Extend photo backgrounds to 16:9, 4:5, or custom aspect ratios. Free online AI uncrop tool that processes images directly in your browser for privacy.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/ai-image-extender",
  },
  openGraph: {
    title: "AI Image Extender: Uncrop & Outpaint Photos Online Free",
    description: "Extend photo backgrounds to 16:9, 4:5, or custom aspect ratios. Free online AI uncrop tool that processes images directly in your browser for privacy.",
    url: "https://www.astonishbuddy.com/tools/ai-image-extender",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Image Extender: Uncrop & Outpaint Photos Online Free",
    description: "Extend photo backgrounds to 16:9, 4:5, or custom aspect ratios. Free online AI uncrop tool that processes images directly in your browser for privacy.",
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
        name: "AI Image Extender",
        item: "https://www.astonishbuddy.com/tools/ai-image-extender",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI Image Extender",
    url: "https://www.astonishbuddy.com/tools/ai-image-extender",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Extend photo backgrounds to 16:9, 4:5, or custom aspect ratios. Free online AI uncrop tool that processes images directly in your browser for privacy.",
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

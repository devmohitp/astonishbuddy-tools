import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Quality Enhancer: Upscale & Sharpen Photos Online",
  description: "Improve photo clarity, reduce noise, sharpen blurry details, and upscale images up to 4×. Free browser-based image enhancer with zero server uploads.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/image-quality-enhancer",
  },
  openGraph: {
    title: "Image Quality Enhancer: Upscale & Sharpen Photos Online",
    description: "Improve photo clarity, reduce noise, sharpen blurry details, and upscale images up to 4×. Free browser-based image enhancer with zero server uploads.",
    url: "https://www.astonishbuddy.com/tools/image-quality-enhancer",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Quality Enhancer: Upscale & Sharpen Photos Online",
    description: "Improve photo clarity, reduce noise, sharpen blurry details, and upscale images up to 4×. Free browser-based image enhancer with zero server uploads.",
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
        name: "Image Quality Enhancer",
        item: "https://www.astonishbuddy.com/tools/image-quality-enhancer",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Image Quality Enhancer",
    url: "https://www.astonishbuddy.com/tools/image-quality-enhancer",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Improve photo clarity, reduce noise, sharpen blurry details, and upscale images up to 4×. Free browser-based image enhancer with zero server uploads.",
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Image Compressor: Reduce Image Size Without Loss",
  description: "Reduce JPG, PNG, and WebP image file sizes without noticeable quality loss. Fast client-side image compression in your browser with zero server uploads.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/image-compressor",
  },
  openGraph: {
    title: "Free Image Compressor: Reduce Image Size Without Loss",
    description: "Reduce JPG, PNG, and WebP image file sizes without noticeable quality loss. Fast client-side image compression in your browser with zero server uploads.",
    url: "https://www.astonishbuddy.com/tools/image-compressor",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Compressor: Reduce Image Size Without Loss",
    description: "Reduce JPG, PNG, and WebP image file sizes without noticeable quality loss. Fast client-side image compression in your browser with zero server uploads.",
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
        name: "Image Compressor",
        item: "https://www.astonishbuddy.com/tools/image-compressor",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Image Compressor",
    url: "https://www.astonishbuddy.com/tools/image-compressor",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Reduce JPG, PNG, and WebP image file sizes without noticeable quality loss. Fast client-side image compression in your browser with zero server uploads.",
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

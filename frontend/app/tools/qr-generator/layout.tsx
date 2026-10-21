import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free QR Code Generator: Create Custom QR Codes Online",
  description: "Create custom high-resolution QR codes for website URLs, contact info, WiFi access, and text. Download crisp SVG or PNG QR codes instantly without watermarks.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/qr-generator",
  },
  openGraph: {
    title: "Free QR Code Generator: Create Custom QR Codes Online",
    description: "Create custom high-resolution QR codes for website URLs, contact info, WiFi access, and text. Download crisp SVG or PNG QR codes instantly without watermarks.",
    url: "https://www.astonishbuddy.com/tools/qr-generator",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free QR Code Generator: Create Custom QR Codes Online",
    description: "Create custom high-resolution QR codes for website URLs, contact info, WiFi access, and text. Download crisp SVG or PNG QR codes instantly without watermarks.",
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
        name: "QR Code Generator",
        item: "https://www.astonishbuddy.com/tools/qr-generator",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "QR Code Generator",
    url: "https://www.astonishbuddy.com/tools/qr-generator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Create custom high-resolution QR codes for website URLs, contact info, WiFi access, and text. Download crisp SVG or PNG QR codes instantly without watermarks.",
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

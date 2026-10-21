import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Base64 Encoder & Decoder: Fast & Secure String Converter",
  description: "Encode text and files to Base64 or decode Base64 strings to readable text instantly. Runs entirely in your browser with no server uploads or data logging.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/base64-converter",
  },
  openGraph: {
    title: "Base64 Encoder & Decoder: Fast & Secure String Converter",
    description: "Encode text and files to Base64 or decode Base64 strings to readable text instantly. Runs entirely in your browser with no server uploads or data logging.",
    url: "https://www.astonishbuddy.com/tools/base64-converter",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Base64 Encoder & Decoder: Fast & Secure String Converter",
    description: "Encode text and files to Base64 or decode Base64 strings to readable text instantly. Runs entirely in your browser with no server uploads or data logging.",
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
        name: "Base64 Encoder & Decoder",
        item: "https://www.astonishbuddy.com/tools/base64-converter",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Base64 Encoder & Decoder",
    url: "https://www.astonishbuddy.com/tools/base64-converter",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Encode text and files to Base64 or decode Base64 strings to readable text instantly. Runs entirely in your browser with no server uploads or data logging.",
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

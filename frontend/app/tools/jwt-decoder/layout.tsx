import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JWT Decoder: Decode & Inspect JSON Web Tokens Online",
  description: "Decode and inspect JSON Web Tokens (JWT) instantly in your browser. View encoded headers, payload claims, and expiration timestamps with total data security.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/jwt-decoder",
  },
  openGraph: {
    title: "JWT Decoder: Decode & Inspect JSON Web Tokens Online",
    description: "Decode and inspect JSON Web Tokens (JWT) instantly in your browser. View encoded headers, payload claims, and expiration timestamps with total data security.",
    url: "https://www.astonishbuddy.com/tools/jwt-decoder",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JWT Decoder: Decode & Inspect JSON Web Tokens Online",
    description: "Decode and inspect JSON Web Tokens (JWT) instantly in your browser. View encoded headers, payload claims, and expiration timestamps with total data security.",
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
        name: "JWT Decoder",
        item: "https://www.astonishbuddy.com/tools/jwt-decoder",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "JWT Decoder",
    url: "https://www.astonishbuddy.com/tools/jwt-decoder",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Decode and inspect JSON Web Tokens (JWT) instantly in your browser. View encoded headers, payload claims, and expiration timestamps with total data security.",
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

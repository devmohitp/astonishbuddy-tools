import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strong Password Generator: Create Secure Passwords Free",
  description: "Generate strong, cryptographically secure random passwords to protect online accounts. Customize length, symbols, numbers, and case right in your browser.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/password-generator",
  },
  openGraph: {
    title: "Strong Password Generator: Create Secure Passwords Free",
    description: "Generate strong, cryptographically secure random passwords to protect online accounts. Customize length, symbols, numbers, and case right in your browser.",
    url: "https://www.astonishbuddy.com/tools/password-generator",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strong Password Generator: Create Secure Passwords Free",
    description: "Generate strong, cryptographically secure random passwords to protect online accounts. Customize length, symbols, numbers, and case right in your browser.",
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
        name: "Password Generator",
        item: "https://www.astonishbuddy.com/tools/password-generator",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Password Generator",
    url: "https://www.astonishbuddy.com/tools/password-generator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Generate strong, cryptographically secure random passwords to protect online accounts. Customize length, symbols, numbers, and case right in your browser.",
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

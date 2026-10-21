import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text Case Converter: UPPERCASE, lowercase, Title Case",
  description: "Convert text between uppercase, lowercase, title case, camelCase, snake_case, and kebab-case instantly. Fast client-side text manipulation with one-click copy.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/text-case-converter",
  },
  openGraph: {
    title: "Text Case Converter: UPPERCASE, lowercase, Title Case",
    description: "Convert text between uppercase, lowercase, title case, camelCase, snake_case, and kebab-case instantly. Fast client-side text manipulation with one-click copy.",
    url: "https://www.astonishbuddy.com/tools/text-case-converter",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Case Converter: UPPERCASE, lowercase, Title Case",
    description: "Convert text between uppercase, lowercase, title case, camelCase, snake_case, and kebab-case instantly. Fast client-side text manipulation with one-click copy.",
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
        name: "Text Case Converter",
        item: "https://www.astonishbuddy.com/tools/text-case-converter",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Text Case Converter",
    url: "https://www.astonishbuddy.com/tools/text-case-converter",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Convert text between uppercase, lowercase, title case, camelCase, snake_case, and kebab-case instantly. Fast client-side text manipulation with one-click copy.",
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

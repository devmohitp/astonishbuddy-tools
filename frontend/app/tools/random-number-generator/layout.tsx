import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Number Generator: Fast & Fair RNG Picker Online",
  description: "Generate cryptographically random numbers within custom ranges instantly. Perfect for giveaways, contests, statistics, and games with zero bias or login.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/random-number-generator",
  },
  openGraph: {
    title: "Random Number Generator: Fast & Fair RNG Picker Online",
    description: "Generate cryptographically random numbers within custom ranges instantly. Perfect for giveaways, contests, statistics, and games with zero bias or login.",
    url: "https://www.astonishbuddy.com/tools/random-number-generator",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Number Generator: Fast & Fair RNG Picker Online",
    description: "Generate cryptographically random numbers within custom ranges instantly. Perfect for giveaways, contests, statistics, and games with zero bias or login.",
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
        name: "Random Number Generator",
        item: "https://www.astonishbuddy.com/tools/random-number-generator",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Random Number Generator",
    url: "https://www.astonishbuddy.com/tools/random-number-generator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Generate cryptographically random numbers within custom ranges instantly. Perfect for giveaways, contests, statistics, and games with zero bias or login.",
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

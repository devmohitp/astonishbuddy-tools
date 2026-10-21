import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Word Counter Online: Count Words, Characters & Lines",
  description: "Count words, characters, sentences, and paragraphs in real time. Calculate reading time and speaking speed with detailed text statistics in your browser.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/word-counter",
  },
  openGraph: {
    title: "Word Counter Online: Count Words, Characters & Lines",
    description: "Count words, characters, sentences, and paragraphs in real time. Calculate reading time and speaking speed with detailed text statistics in your browser.",
    url: "https://www.astonishbuddy.com/tools/word-counter",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Word Counter Online: Count Words, Characters & Lines",
    description: "Count words, characters, sentences, and paragraphs in real time. Calculate reading time and speaking speed with detailed text statistics in your browser.",
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
        name: "Word Counter",
        item: "https://www.astonishbuddy.com/tools/word-counter",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Word Counter",
    url: "https://www.astonishbuddy.com/tools/word-counter",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Count words, characters, sentences, and paragraphs in real time. Calculate reading time and speaking speed with detailed text statistics in your browser.",
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

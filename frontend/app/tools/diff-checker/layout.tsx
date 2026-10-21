import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Text Diff Checker: Compare Text Differences Online Free",
  description: "Compare two text files side by side and detect code or word changes instantly. Highlights additions, deletions, and line modifications with complete privacy.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/diff-checker",
  },
  openGraph: {
    title: "Text Diff Checker: Compare Text Differences Online Free",
    description: "Compare two text files side by side and detect code or word changes instantly. Highlights additions, deletions, and line modifications with complete privacy.",
    url: "https://www.astonishbuddy.com/tools/diff-checker",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Text Diff Checker: Compare Text Differences Online Free",
    description: "Compare two text files side by side and detect code or word changes instantly. Highlights additions, deletions, and line modifications with complete privacy.",
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
        name: "Text Diff Checker",
        item: "https://www.astonishbuddy.com/tools/diff-checker",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Text Diff Checker",
    url: "https://www.astonishbuddy.com/tools/diff-checker",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Compare two text files side by side and detect code or word changes instantly. Highlights additions, deletions, and line modifications with complete privacy.",
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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lorem Ipsum Generator: Create Placeholder Text Online",
  description: "Generate customizable dummy Lorem Ipsum paragraphs, sentences, and words for web designers and developers. Copy mock text instantly with one simple click.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/tools/lorem-ipsum-generator",
  },
  openGraph: {
    title: "Lorem Ipsum Generator: Create Placeholder Text Online",
    description: "Generate customizable dummy Lorem Ipsum paragraphs, sentences, and words for web designers and developers. Copy mock text instantly with one simple click.",
    url: "https://www.astonishbuddy.com/tools/lorem-ipsum-generator",
    siteName: "Astonishbuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lorem Ipsum Generator: Create Placeholder Text Online",
    description: "Generate customizable dummy Lorem Ipsum paragraphs, sentences, and words for web designers and developers. Copy mock text instantly with one simple click.",
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
        name: "Lorem Ipsum Generator",
        item: "https://www.astonishbuddy.com/tools/lorem-ipsum-generator",
      },
    ],
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Lorem Ipsum Generator",
    url: "https://www.astonishbuddy.com/tools/lorem-ipsum-generator",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Generate customizable dummy Lorem Ipsum paragraphs, sentences, and words for web designers and developers. Copy mock text instantly with one simple click.",
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

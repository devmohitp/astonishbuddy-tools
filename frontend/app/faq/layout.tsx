import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) - Astonishbuddy Help",
  description:
    "Find clear answers about Astonishbuddy tools, browser-based file processing, client-side data privacy, supported formats, and common troubleshooting tips.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQ) - Astonishbuddy Help",
    description:
      "Find clear answers about Astonishbuddy tools, browser-based file processing, client-side data privacy, supported formats, and common troubleshooting tips.",
    url: "https://www.astonishbuddy.com/faq",
    siteName: "Astonishbuddy",
    type: "website",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbJsonLd = {
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
        name: "Frequently Asked Questions",
        item: "https://www.astonishbuddy.com/faq",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}


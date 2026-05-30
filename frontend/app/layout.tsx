import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.astonishbuddy.com"),

  title: {
    default: "Astonishbuddy",
    template: "%s | Astonishbuddy",
  },

  description:
    "A collection of free online tools: image compressor, text case converter, password generator, JSON formatter, word counter, and QR code generator.",

  keywords:
    "free online tools, image compressor, text converter, password generator, JSON formatter, word counter, QR code generator",

  alternates: {
    canonical: "/", // 👈 homepage canonical
  },

  openGraph: {
    title: "Astonishbuddy",
    description:
      "Free online tools for image compression, text conversion, password generation and more.",
    url: "https://www.astonishbuddy.com",
    siteName: "Astonishbuddy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Script
          async
          strategy="lazyOnload"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3280584684265213"
          crossOrigin="anonymous"
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E2KTZ2878L"
          strategy="lazyOnload"
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E2KTZ2878L');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
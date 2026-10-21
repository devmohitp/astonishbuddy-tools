import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import ThirdPartyScripts from "./components/ThirdPartyScripts";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
  weight: ["400", "600", "800", "900"],
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
    default: "Astonishbuddy | Free Online Developer & Productivity Tools",
    template: "%s | Astonishbuddy",
  },

  description:
    "Free, fast, and secure online browser tools: image compressor, PDF tools, code formatters, converters, and generators. 100% private with no sign-up required.",

  openGraph: {
    title: "Astonishbuddy | Free Online Developer & Productivity Tools",
    description:
      "Free, fast, and secure online browser tools: image compressor, PDF tools, code formatters, converters, and generators. 100% private with no sign-up required.",
    siteName: "Astonishbuddy",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <ThirdPartyScripts />
        {children}
      </body>
    </html>
  );
}
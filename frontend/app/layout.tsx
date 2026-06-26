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
        <ThirdPartyScripts />
        {children}
      </body>
    </html>
  );
}
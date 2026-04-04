import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Astonishbuddy",
  description:
    "A collection of free online tools: image compressor, text case converter, password generator, JSON formatter, word counter, and QR code generator.",
  keywords: "free online tools, image compressor, text converter, password generator, JSON formatter, word counter, QR code generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E2KTZ2878L"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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

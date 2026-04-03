import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Free Online Tools – Compress, Convert, Generate & More",
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
      <body>{children}</body>
    </html>
  );
}

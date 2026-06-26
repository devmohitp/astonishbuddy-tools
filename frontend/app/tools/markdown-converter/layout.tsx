import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Markdown ↔ HTML Converter (Free & Instant Online)",
    description: "Convert Markdown to HTML and HTML back to Markdown instantly in your browser. Fast, secure, and 100% free with live preview.",
    alternates: {
        canonical: "/tools/markdown-converter",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

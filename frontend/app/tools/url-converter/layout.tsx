import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "URL Encoder & Decoder Online (Encode URLs Instantly)",
    description: "Encode or decode URLs and special characters instantly.",
    alternates: {
        canonical: "/tools/url-converter",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

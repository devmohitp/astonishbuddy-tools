import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "AI Image Extender - Uncrop & Outpaint Photos Online Free",
    description: "Extend photo backgrounds to standard aspect ratios (16:9, 4:5, 1:1) or custom ratios instantly. Free online AI uncrop tool that runs 100% in your browser for maximum privacy.",
    alternates: {
        canonical: "/tools/ai-image-extender",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

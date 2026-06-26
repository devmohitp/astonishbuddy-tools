import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Image Quality Enhancer (Upscale & Sharpen Photos Online)",
    description: "Improve photo clarity, reduce noise, enhance colors, and upscale images up to 4×. A free online utility that runs entirely in your browser.",
    alternates: {
        canonical: "/tools/image-quality-enhancer",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

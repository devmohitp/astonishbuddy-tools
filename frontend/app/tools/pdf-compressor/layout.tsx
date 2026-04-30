import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free PDF Compressor Online — Reduce PDF File Size Instantly",
    description: "Compress PDF files in your browser securely without uploading to servers.",
    alternates: {
        canonical: "/tools/pdf-compressor",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

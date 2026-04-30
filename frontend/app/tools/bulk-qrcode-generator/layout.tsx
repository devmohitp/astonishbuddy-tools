import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bulk QR Code Generator",
    description: "Generate multiple QR codes instantly and download as PDF or ZIP.",
    alternates: {
        canonical: "/tools/bulk-qrcode-generator",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free QR Code Generator Online (Create QR Codes Instantly)",
    description: "Create customizable QR codes for URLs, text, email, and more instantly.",
    alternates: {
        canonical: "/tools/qr-generator",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

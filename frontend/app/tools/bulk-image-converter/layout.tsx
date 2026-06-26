import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bulk Image Converter (Convert Multiple Images Online Free)",
    description: "Convert multiple PNG, JPG, JPEG, WebP, AVIF, BMP, TIFF images simultaneously in your browser. Fast, secure, and 100% free with no file limits.",
    alternates: {
        canonical: "/tools/bulk-image-converter",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

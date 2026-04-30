import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free Image Compressor Online (Reduce Image Size Without Losing Quality)",
    description: "Reduce image file size without losing quality. Support for JPG, PNG, WebP.",
    alternates: {
        canonical: "/tools/image-compressor",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

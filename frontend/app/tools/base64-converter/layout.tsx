import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Base64 Encoder & Decoder Online",
    description: "Encode to Base64 or decode Base64 strings instantly with this free online tool.",
    alternates: {
        canonical: "/tools/base64-converter",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

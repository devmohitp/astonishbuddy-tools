import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "JWT Decoder (Decode & Inspect JSON Web Tokens Online Free)",
    description: "Decode and inspect JSON Web Tokens (JWT) instantly in your browser. View encoded header, payload, and claims locally for maximum privacy.",
    alternates: {
        canonical: "/tools/jwt-decoder",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

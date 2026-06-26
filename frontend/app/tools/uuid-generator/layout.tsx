import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "UUID / GUID Generator (Free, Secure & Instant Online)",
    description: "Generate cryptographically secure, random Universally Unique Identifiers (UUID v4) and Globally Unique Identifiers (GUID) locally in your browser. 100% private.",
    alternates: {
        canonical: "/tools/uuid-generator",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

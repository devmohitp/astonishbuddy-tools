import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lorem Ipsum Generator (Generate Dummy Text Online Free)",
    description: "Generate dummy text for your designs and layouts instantly.",
    alternates: {
        canonical: "/tools/lorem-ipsum-generator",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

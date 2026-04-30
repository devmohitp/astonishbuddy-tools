import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free Text Case Converter Online (Uppercase, Lowercase, Title Case)",
    description: "Convert text between uppercase, lowercase, title case, and more instantly.",
    alternates: {
        canonical: "/tools/text-case-converter",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

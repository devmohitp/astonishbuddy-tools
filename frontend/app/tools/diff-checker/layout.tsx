import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Text Diff Checker (Compare Text & Find Differences Online Free)",
    description: "Compare two pieces of text side by side and instantly find differences. Highlight additions, deletions, and modifications. Fast, secure, and free.",
    alternates: {
        canonical: "/tools/diff-checker",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

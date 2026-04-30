import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Word Counter Online (Count Words, Characters & Sentences)",
    description: "Count words, characters, and estimate reading time for your text instantly.",
    alternates: {
        canonical: "/tools/word-counter",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

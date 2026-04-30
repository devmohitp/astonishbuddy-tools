import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Text Sorter Online (Sort Text Alphabetically A-Z, Z-A)",
    description: "Sort text lines alphabetically or numerically, and remove duplicates instantly.",
    alternates: {
        canonical: "/tools/text-sorter",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

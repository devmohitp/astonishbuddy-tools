import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Random Number Generator (Generate Numbers Online Free)",
    description: "Generate random numbers instantly in any range.",
    alternates: {
        canonical: "/tools/random-number-generator",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

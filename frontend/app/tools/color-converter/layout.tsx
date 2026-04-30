import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Color Code Converter (HEX to RGB, HSL Converter Online)",
    description: "Convert colors between HEX, RGB, and HSL formats instantly with this free online tool.",
    alternates: {
        canonical: "/tools/color-converter",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "JSON Formatter Online (Format, Beautify & Validate JSON Free)",
    description: "Format, beautify, and validate JSON data instantly with syntax highlighting.",
    alternates: {
        canonical: "/tools/json-formatter",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "SQL Formatter (Format & Beautify SQL Queries Online Free)",
    description: "Format, beautify, highlight, and minify SQL queries instantly in your browser. Supports customizable indentation and keyword casing. 100% secure and free.",
    alternates: {
        canonical: "/tools/sql-formatter",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

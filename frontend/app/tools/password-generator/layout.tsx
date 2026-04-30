import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Free Strong Password Generator (Secure & Random Passwords Online)",
    description: "Generate strong, secure, and random passwords instantly to protect your accounts.",
    alternates: {
        canonical: "/tools/password-generator",
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

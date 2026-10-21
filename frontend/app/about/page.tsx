import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Astonishbuddy - Free Online Tools & Mission Story",
  description:
    "Learn about Astonishbuddy, our mission to build fast, private, free developer and productivity tools, our editorial standards, and who runs the site.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/about",
  },
  openGraph: {
    title: "About Astonishbuddy - Free Online Tools & Mission Story",
    description:
      "Learn about Astonishbuddy, our mission to build fast, private, free developer and productivity tools, our editorial standards, and who runs the site.",
    url: "https://www.astonishbuddy.com/about",
    siteName: "Astonishbuddy",
    type: "website",
  },
};

export default function About() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.astonishbuddy.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://www.astonishbuddy.com/about",
      },
    ],
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <div
        style={{
          flex: 1,
          padding: "clamp(40px, 8vw, 80px) clamp(16px, 4vw, 24px)",
          maxWidth: "880px",
          margin: "0 auto",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 6vw, 3.2rem)",
              fontWeight: 800,
              marginBottom: "14px",
              fontFamily: "var(--font-outfit), sans-serif",
            }}
          >
            About Astonishbuddy
          </h1>
          <p
            style={{
              fontSize: "clamp(16px, 3vw, 18px)",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Fast, secure, and privacy-respecting browser utilities created to simplify your everyday digital tasks without paywalls or forced logins.
          </p>
        </div>

        <div
          style={{
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid var(--border)",
            borderRadius: "20px",
            padding: "clamp(24px, 6vw, 48px)",
            fontSize: "15px",
            lineHeight: 1.8,
            color: "var(--text-secondary)",
            boxSizing: "border-box",
          }}
        >
          {/* Section 1: Who Runs the Site */}
          <section style={{ marginBottom: "36px" }}>
            <h2 style={{ fontSize: "22px", color: "var(--text-primary)", marginBottom: "14px", fontWeight: 700 }}>
              Who Runs Astonishbuddy
            </h2>
            <p style={{ marginBottom: "14px" }}>
              Astonishbuddy is founded, developed, and maintained by{" "}
              <strong style={{ color: "var(--text-primary)" }}>
                {/* TODO: Fill in your full name here (e.g. Mohit Patel) */}
                Mohit Patel [TODO: Founder & Lead Developer]
              </strong>
              , an enthusiastic web developer and technology advocate with a passion for high-performance web applications and software engineering.
            </p>
            <div
              style={{
                background: "rgba(108, 99, 255, 0.06)",
                border: "1px solid rgba(108, 99, 255, 0.2)",
                borderRadius: "14px",
                padding: "20px",
                marginBottom: "14px",
              }}
            >
              <h3 style={{ fontSize: "16px", color: "var(--accent-1)", margin: "0 0 8px 0", fontWeight: 600 }}>
                Author & Founder Bio [TODO: Edit with your bio]
              </h3>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.7 }}>
                Mohit is a full-stack engineer specializing in Next.js, modern JavaScript, and web performance optimization. Having spent years building and debugging web applications, he launched Astonishbuddy to provide a clean, ad-clutter-free suite of everyday utilities that developers, creators, students, and digital professionals can rely on without risking their privacy.
              </p>
            </div>
          </section>

          {/* Section 2: Why We Built This Site */}
          <section style={{ marginBottom: "36px" }}>
            <h2 style={{ fontSize: "22px", color: "var(--text-primary)", marginBottom: "14px", fontWeight: 700 }}>
              Why We Built Astonishbuddy
            </h2>
            <p style={{ marginBottom: "14px" }}>
              Have you ever needed to compress an image, decode a JWT token, or format a messy SQL query quickly, only to land on websites cluttered with pop-up banners, forced registrations, slow upload queues, or subscriptions?
            </p>
            <p style={{ marginBottom: "14px" }}>
              We experienced that exact frustration. Most traditional file conversion websites upload your personal documents to remote servers, process them in an opaque cloud queue, and require you to give away your email address to download the result.
            </p>
            <p style={{ marginBottom: "14px" }}>
              We believed there had to be a better way. Modern web browsers are equipped with powerful client-side computational capabilities — including WebAssembly, Web Workers, HTML5 Canvas, and native Crypto APIs. Astonishbuddy was built from the ground up to harness these modern web capabilities, running heavy computations directly on your device rather than sending your data across the internet.
            </p>
          </section>

          {/* Section 3: What Our Tools Do */}
          <section style={{ marginBottom: "36px" }}>
            <h2 style={{ fontSize: "22px", color: "var(--text-primary)", marginBottom: "14px", fontWeight: 700 }}>
              What Our Tools Do
            </h2>
            <p style={{ marginBottom: "14px" }}>
              Astonishbuddy is organized into specialized categories designed to solve practical problems in seconds:
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "14px" }}>
              <li style={{ marginBottom: "10px" }}>
                <strong>Image & Media Utilities:</strong> Client-side Image Compressor, Bulk Image Converter, Image Quality Enhancer, and AI Image Extender that resize, convert, sharpen, and compress images directly in browser RAM without server uploads.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>PDF Tools:</strong> Browser-based PDF Compressor that optimizes embedded imagery and reduces file footprint securely using client-side rendering.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Developer & Code Utilities:</strong> JSON Formatter and Minifier, SQL Formatter, Diff Checker, JWT Decoder, Markdown to HTML Converter, Base64 Encoder/Decoder, and URL Encoder/Decoder.
              </li>
              <li style={{ marginBottom: "10px" }}>
                <strong>Security & Productivity:</strong> Cryptographically secure Password Generator, UUID v4 Generator, Word & Character Counter, Text Case Converter, Text Sorter, Random Number Generator, and custom QR Code Generators.
              </li>
            </ul>
          </section>

          {/* Section 4: Privacy & Client-First Architecture */}
          <section style={{ marginBottom: "36px" }}>
            <h2 style={{ fontSize: "22px", color: "var(--text-primary)", marginBottom: "14px", fontWeight: 700 }}>
              Our Client-First Privacy Commitment
            </h2>
            <p style={{ marginBottom: "14px" }}>
              Your confidential data, source code, passwords, and images belong to you alone. Whenever you compress an image, inspect an authentication token, or generate a sensitive password on Astonishbuddy, that data is processed solely within your browser&apos;s isolated execution sandbox.
            </p>
            <p style={{ marginBottom: "14px" }}>
              We do not store your files on any disks. We do not sell user data. When you close or refresh your browser tab, the temporary memory buffer is automatically destroyed by your operating system. For complete details, explore our transparent{" "}
              <Link href="/privacy-policy" style={{ color: "var(--accent-1)", textDecoration: "underline" }}>
                Privacy Policy
              </Link>.
            </p>
          </section>

          {/* Section 5: Editorial Standards & Review */}
          <section style={{ marginBottom: "36px" }}>
            <h2 style={{ fontSize: "22px", color: "var(--text-primary)", marginBottom: "14px", fontWeight: 700 }}>
              How Our Content Is Researched and Reviewed
            </h2>
            <p style={{ marginBottom: "14px" }}>
              We publish comprehensive step-by-step guides, technical articles, and tool documentation in our{" "}
              <Link href="/blog" style={{ color: "var(--accent-1)", textDecoration: "underline" }}>
                Blog
              </Link>{" "}
              and{" "}
              <Link href="/guides" style={{ color: "var(--accent-1)", textDecoration: "underline" }}>
                Guides
              </Link>{" "}
              sections.
            </p>
            <p style={{ marginBottom: "14px" }}>
              Every article is written from real engineering experience, thoroughly researched against RFC standards (such as RFC 4648 for Base64 or RFC 4122 for UUIDs), and verified with real code examples. We test every recommended workflow across Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge to ensure instructions are accurate, reliable, and up to date.
            </p>
          </section>

          {/* Section 6: Contact & Support */}
          <section style={{ borderTop: "1px solid var(--border)", paddingTop: "32px", textAlign: "center" }}>
            <h2 style={{ fontSize: "24px", color: "var(--text-primary)", marginBottom: "14px", fontWeight: 800 }}>
              Get in Touch with Us
            </h2>
            <p style={{ marginBottom: "20px", fontSize: "15px", color: "var(--text-secondary)" }}>
              We love hearing from our community! Whether you want to suggest a new tool, report a glitch, or request an improvement, feel free to reach out:
            </p>
            <div
              style={{
                padding: "24px",
                background: "rgba(16, 185, 129, 0.05)",
                border: "1px solid rgba(16, 185, 129, 0.2)",
                borderRadius: "14px",
                display: "inline-block",
                width: "100%",
                maxWidth: "460px",
                boxSizing: "border-box",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <span style={{ fontSize: "13px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600 }}>Primary Support Email</span>
                <a
                  href="mailto:astonishbuddy@gmail.com"
                  style={{ color: "#34d399", fontSize: "20px", textDecoration: "none", fontWeight: 700, display: "block", marginTop: "4px" }}
                >
                  astonishbuddy@gmail.com
                </a>
              </div>
              <div style={{ borderTop: "1px solid rgba(16, 185, 129, 0.15)", paddingTop: "12px", marginTop: "12px" }}>
                <p style={{ margin: "0 0 6px 0", fontSize: "14px", color: "var(--text-secondary)" }}>
                  You can also submit inquiries via our{" "}
                  <Link href="/contact" style={{ color: "#34d399", fontWeight: 600, textDecoration: "underline" }}>
                    Contact Form
                  </Link>.
                </p>
                <p style={{ margin: 0, fontSize: "13px", color: "var(--text-muted)" }}>
                  Expected response time: 24 to 48 business hours.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

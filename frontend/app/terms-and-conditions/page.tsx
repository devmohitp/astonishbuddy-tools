import React from "react";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions - Astonishbuddy Service & Use Rules",
  description:
    "Review the terms, conditions, acceptable use policies, and liability disclaimers for using free developer and productivity tools on Astonishbuddy.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions - Astonishbuddy Service & Use Rules",
    description:
      "Review the terms, conditions, acceptable use policies, and liability disclaimers for using free developer and productivity tools on Astonishbuddy.",
    url: "https://www.astonishbuddy.com/terms-and-conditions",
    siteName: "Astonishbuddy",
    type: "website",
  },
};

export default function TermsAndConditions() {
  const lastUpdated = "October 17, 2026";

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
        name: "Terms and Conditions",
        item: "https://www.astonishbuddy.com/terms-and-conditions",
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
              marginBottom: "12px",
              fontFamily: "var(--font-outfit), sans-serif",
            }}
          >
            Terms & Conditions
          </h1>
          <p style={{ color: "var(--text-muted)", fontSize: "14px" }}>
            Last updated: <strong style={{ color: "var(--text-primary)" }}>{lastUpdated}</strong>
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
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              1. Acceptance of Terms
            </h2>
            <p style={{ marginBottom: "12px" }}>
              Welcome to Astonishbuddy (<a href="https://www.astonishbuddy.com" style={{ color: "var(--accent-1)" }}>www.astonishbuddy.com</a>). By accessing, browsing, or using our website and browser utilities, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              2. Use of Online Tools & Services
            </h2>
            <p style={{ marginBottom: "12px" }}>
              Astonishbuddy provides free utilities for image compression, PDF optimization, code formatting, text conversion, and related digital productivity tasks.
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "12px" }}>
              <li style={{ marginBottom: "8px" }}>
                All tools are provided completely free of charge for personal, commercial, academic, and non-commercial use.
              </li>
              <li style={{ marginBottom: "8px" }}>
                Tools run predominantly inside your local web browser environment without transmitting files to our servers.
              </li>
              <li style={{ marginBottom: "8px" }}>
                You agree not to use our tools to process unlawful, malicious, abusive, or copyrighted material without authorization.
              </li>
              <li style={{ marginBottom: "8px" }}>
                You agree not to attempt to reverse engineer, disrupt, overload, or launch denial-of-service attacks against our infrastructure.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              3. Intellectual Property Rights
            </h2>
            <p style={{ marginBottom: "12px" }}>
              <strong>Your Data:</strong> You retain 100% full ownership, copyright, and intellectual property rights to any text, images, files, or data you input, convert, or generate through our tools. We claim no ownership rights over your content.
            </p>
            <p style={{ marginBottom: "12px" }}>
              <strong>Our Platform:</strong> The Astonishbuddy website, custom UI layouts, graphics, branding, software codebase, and editorial articles are the property of Astonishbuddy and are protected by applicable intellectual property laws. You may not scrape, republish, or redistribute our written content or interface without prior written permission.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              4. Disclaimer of Warranties
            </h2>
            <p style={{ marginBottom: "12px" }}>
              All tools, articles, code formatters, and utilities on Astonishbuddy are provided on an <strong>&ldquo;as is&rdquo;</strong> and <strong>&ldquo;as available&rdquo;</strong> basis without warranties of any kind, whether express, statutory, or implied.
            </p>
            <p style={{ marginBottom: "12px" }}>
              While we test every tool rigorously across major browsers, we make no guarantees that tool calculations, conversions, or image compression outputs will meet every specific business requirement, be error-free, or remain uninterrupted. We strongly advise keeping local backup copies of important original files prior to converting or compressing them.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              5. Limitation of Liability
            </h2>
            <p style={{ marginBottom: "12px" }}>
              To the fullest extent permitted by law, Astonishbuddy, its creators, and contributors shall not be liable for any direct, indirect, incidental, consequential, special, or exemplary damages resulting from the use or inability to use our tools, loss of data, corrupted files, or unauthorized access.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              6. Third-Party Services & Advertising
            </h2>
            <p style={{ marginBottom: "12px" }}>
              Our site displays advertisements provided by Google AdSense and third-party advertising partners. These third parties may utilize cookies subject to your cookie preferences and their own privacy terms. Astonishbuddy does not endorse and is not responsible for the products, services, or claims advertised by third-party links or sponsors.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              7. Changes to Terms
            </h2>
            <p style={{ marginBottom: "12px" }}>
              We reserve the right to revise or modify these Terms & Conditions at any time. When updates occur, the &ldquo;Last updated&rdquo; date at the top of this page will be revised accordingly. Your continued use of the website following any changes signifies your acceptance of the updated terms.
            </p>
          </section>

          <section style={{ marginBottom: "10px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              8. Contact & Legal Inquiries
            </h2>
            <p style={{ marginBottom: "16px" }}>
              If you have any questions or legal inquiries regarding these Terms and Conditions, please contact us:
            </p>
            <div
              style={{
                background: "rgba(108, 99, 255, 0.05)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "20px",
                display: "inline-block",
                width: "100%",
                maxWidth: "460px",
                boxSizing: "border-box",
              }}
            >
              <p style={{ margin: "0 0 8px 0" }}>
                <strong>Support Email:</strong>{" "}
                <a href="mailto:astonishbuddy@gmail.com" style={{ color: "var(--accent-1)", textDecoration: "none", fontWeight: 600 }}>
                  astonishbuddy@gmail.com
                </a>
              </p>
              <p style={{ margin: "0 0 8px 0" }}>
                <strong>Business Email : </strong>{" "}
                <a href="mailto:astonishbuddy@gmail.com" style={{ color: "var(--accent-1)", textDecoration: "none", fontWeight: 600 }}>
                  astonishbuddy@gmail.com
                </a>
              </p>
              <p style={{ margin: 0, fontSize: "13px", color: "var(--text-muted)" }}>
                Expected Response Time: 24 to 48 business hours
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

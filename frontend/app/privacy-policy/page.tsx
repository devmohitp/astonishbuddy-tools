import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - Astonishbuddy Data & Privacy Rights",
  description:
    "Learn how Astonishbuddy handles user data, browser-based processing, cookies, and privacy compliance. Read our full transparent privacy policy.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy - Astonishbuddy Data & Privacy Rights",
    description:
      "Learn how Astonishbuddy handles user data, browser-based processing, cookies, and privacy compliance. Read our full transparent privacy policy.",
    url: "https://www.astonishbuddy.com/privacy-policy",
    siteName: "Astonishbuddy",
    type: "website",
  },
};

export default function PrivacyPolicy() {
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
        name: "Privacy Policy",
        item: "https://www.astonishbuddy.com/privacy-policy",
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
            Privacy Policy
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
              1. Overview & Core Philosophy
            </h2>
            <p style={{ marginBottom: "12px" }}>
              At <strong>Astonishbuddy</strong> (accessible via{" "}
              <a href="https://www.astonishbuddy.com" style={{ color: "var(--accent-1)" }}>
                https://www.astonishbuddy.com
              </a>
              ), we prioritize transparency, data privacy, and minimal data collection. This Privacy Policy outlines what information we collect, how your files and data are processed, how cookies and third-party advertising partners function, and your privacy rights under applicable regulations including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              2. Information We Collect
            </h2>
            <p style={{ marginBottom: "12px" }}>
              We do not require user accounts, logins, or credit card information to use our tools. Information collected is limited to:
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "12px" }}>
              <li style={{ marginBottom: "8px" }}>
                <strong>Server Log Data:</strong> Like most web platforms, our servers automatically log standard network requests, including IP address, browser user-agent, operating system, referring URL, pages requested, and timestamp. This data is used solely for traffic diagnostics, security monitoring, and server maintenance.
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong>Contact Form Submissions:</strong> If you voluntarily reach out via our contact page or email, we receive your name, email address, message contents, and any optional attachments you provide in order to reply to your inquiry.
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong>Cookies & Local Storage:</strong> Technical identifiers stored on your device to remember user interface preferences and consent choices, as detailed in Section 4.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              3. Tool & File Data Handling: Client-Side vs. Server-Side
            </h2>
            <p style={{ marginBottom: "14px" }}>
              We believe your private files should remain private. We have engineered our architecture so that the vast majority of processing occurs directly inside your web browser:
            </p>

            <div style={{ background: "rgba(16, 185, 129, 0.05)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "12px", padding: "18px", marginBottom: "18px" }}>
              <h3 style={{ fontSize: "16px", color: "#34d399", margin: "0 0 8px 0", fontWeight: 600 }}>
                ✓ Client-Side Tools (100% Browser Local)
              </h3>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.7 }}>
                The following tools execute entirely within your device&apos;s memory using client-side JavaScript, WebAssembly, and HTML5 Canvas. Your files, passwords, and text inputs are never transmitted across the network:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", marginBottom: 0, fontSize: "14px" }}>
                <li><strong>Image Compressor:</strong> Runs via browser Web Workers; images are compressed locally.</li>
                <li><strong>PDF Compressor:</strong> Processes and re-encodes PDF streams locally using client-side PDF rendering.</li>
                <li><strong>AI Image Extender:</strong> Performs canvas bounding, feathering, and blur passes directly in your browser.</li>
                <li><strong>Image Quality Enhancer:</strong> Applies sharpening algorithms and unsharp mask filters locally on HTML5 Canvas.</li>
                <li><strong>Bulk Image Converter:</strong> Converts PNG, JPG, and WebP images client-side.</li>
                <li><strong>Text & Developer Tools:</strong> Word Counter, Text Case Converter, Text Sorter, Diff Checker, Markdown Converter, JSON Formatter, SQL Formatter, JWT Decoder, Base64 Converter, URL Converter, UUID Generator, Password Generator, Random Number Generator, and Lorem Ipsum Generator all execute purely in browser runtime.</li>
              </ul>
            </div>

            <div style={{ background: "rgba(108, 99, 255, 0.05)", border: "1px solid rgba(108, 99, 255, 0.2)", borderRadius: "12px", padding: "18px" }}>
              <h3 style={{ fontSize: "16px", color: "var(--accent-1)", margin: "0 0 8px 0", fontWeight: 600 }}>
                ⚡ Server-Assisted Endpoints (Volatile Memory Only)
              </h3>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.7 }}>
                Only selected tools communicate with backend endpoints:
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "10px", marginBottom: 0, fontSize: "14px" }}>
                <li><strong>QR Code Generator:</strong> Sends the specified text or URL string to our API to generate a QR image. The image is generated in volatile RAM and returned as a Base64 string. No text or image files are written to disk or saved to any database.</li>
                <li><strong>Server-Side Image Processing Endpoints (API):</strong> When using backend compression endpoints, images are accepted solely into temporary memory buffers (<code style={{ color: "var(--accent-1)" }}>multer.memoryStorage</code>), transformed in RAM, and immediately deleted from memory as soon as the HTTP response terminates. Storage duration: <strong>0 seconds</strong>.</li>
              </ul>
            </div>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              4. Cookies & Tracking Technologies
            </h2>
            <p style={{ marginBottom: "12px" }}>
              Cookies are small data files placed on your browser. We categorize cookies into three groups:
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "12px" }}>
              <li style={{ marginBottom: "8px" }}>
                <strong>Strictly Necessary Cookies:</strong> Essential for page routing, security, and storing your consent preferences in local storage. These cannot be disabled.
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong>Performance & Analytics Cookies:</strong> Used by Google Analytics 4 (GA4) with IP anonymization enabled. These cookies help us understand page popularity, device types, and bounce rates. These cookies load <strong>only after explicit user consent</strong>.
              </li>
              <li style={{ marginBottom: "8px" }}>
                <strong>Advertising Cookies:</strong> Used by Google AdSense and third-party advertising vendors to display relevant advertising based on your prior browsing history. These cookies load <strong>only after explicit user consent</strong>.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              5. Google AdSense & Third-Party Advertising
            </h2>
            <p style={{ marginBottom: "12px" }}>
              We partner with Google AdSense to serve advertisements on our website. As a third-party vendor, Google uses cookies to serve ads to users based on their visits to Astonishbuddy and other sites across the internet:
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "12px" }}>
              <li style={{ marginBottom: "8px" }}>
                Google uses the <strong>DoubleClick cookie</strong> to show personalized ads.
              </li>
              <li style={{ marginBottom: "8px" }}>
                Users may opt out of personalized advertising by visiting Google&apos;s Ads Settings at{" "}
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-1)", textDecoration: "underline" }}>
                  https://adssettings.google.com
                </a>.
              </li>
              <li style={{ marginBottom: "8px" }}>
                Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
                <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-1)", textDecoration: "underline" }}>
                  https://www.aboutads.info
                </a>.
              </li>
              <li style={{ marginBottom: "8px" }}>
                To learn more about how Google uses information when you visit partner sites, see{" "}
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-1)", textDecoration: "underline" }}>
                  https://policies.google.com/technologies/ads
                </a>.
              </li>
            </ul>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              6. Consent & Geographic Rights (EEA, UK, Switzerland)
            </h2>
            <p style={{ marginBottom: "12px" }}>
              If you visit Astonishbuddy from the European Economic Area (EEA), United Kingdom, or Switzerland:
            </p>
            <p style={{ marginBottom: "12px" }}>
              We implement Google Consent Mode v2. Non-essential cookies (including analytics and advertising cookies) are denied by default until you actively grant consent via our Cookie Consent banner. You can review, modify, or revoke your consent at any time by clicking the <strong>Cookie Settings</strong> link located in the footer of every page.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              7. User Rights (GDPR & CCPA/CPRA)
            </h2>
            <p style={{ marginBottom: "12px" }}>
              Depending on your jurisdiction, you have specific privacy rights regarding personal data:
            </p>
            <ul style={{ paddingLeft: "24px", marginBottom: "12px" }}>
              <li style={{ marginBottom: "8px" }}><strong>Right to Access:</strong> Request details on any personal data we hold about you.</li>
              <li style={{ marginBottom: "8px" }}><strong>Right to Erasure / Deletion:</strong> Request the deletion of communications or log data associated with your inquiries.</li>
              <li style={{ marginBottom: "8px" }}><strong>Right to Restrict or Object to Processing:</strong> Object to specific forms of processing, including marketing profiling.</li>
              <li style={{ marginBottom: "8px" }}><strong>Right to Non-Discrimination:</strong> We do not discriminate against users who exercise their privacy rights.</li>
            </ul>
            <p style={{ marginBottom: "12px" }}>
              To exercise any of these rights, email us at{" "}
              <a href="mailto:astonishbuddy@gmail.com" style={{ color: "var(--accent-1)" }}>
                astonishbuddy@gmail.com
              </a>. We respond to all verified inquiries within 30 days.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              8. Children&apos;s Privacy (Under 13)
            </h2>
            <p style={{ marginBottom: "12px" }}>
              Astonishbuddy is a general audience utility platform and does not knowingly collect personally identifiable information from children under the age of 13. If you believe a child has provided us with personal information via email or contact forms, please contact us immediately, and we will delete the record from our systems.
            </p>
          </section>

          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              9. External Links & Data Security
            </h2>
            <p style={{ marginBottom: "12px" }}>
              Our site may include links to external websites, documentation, or social platforms. We are not responsible for the privacy practices or content of third-party websites. We encourage you to review their respective policies.
            </p>
            <p style={{ marginBottom: "12px" }}>
              We employ strict transport security (HTTPS/TLS 1.3), memory-only stream handling, and secure server headers to safeguard communications between your browser and our website.
            </p>
          </section>

          <section style={{ marginBottom: "10px" }}>
            <h2 style={{ fontSize: "21px", color: "var(--text-primary)", marginBottom: "12px", fontWeight: 700 }}>
              10. Contact Us
            </h2>
            <p style={{ marginBottom: "16px" }}>
              If you have questions, feedback, or concerns regarding this Privacy Policy, please contact our team:
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
                <strong>Platform:</strong> Astonishbuddy (<a href="https://www.astonishbuddy.com" style={{ color: "var(--accent-1)" }}>www.astonishbuddy.com</a>)
              </p>
              <p style={{ margin: "0 0 8px 0" }}>
                <strong>Support Email:</strong>{" "}
                <a href="mailto:astonishbuddy@gmail.com" style={{ color: "var(--accent-1)", textDecoration: "none", fontWeight: 600 }}>
                  astonishbuddy@gmail.com
                </a>
              </p>
              <p style={{ margin: "0 0 8px 0" }}>
                <strong>Business Email [TODO]:</strong>{" "}
                <span style={{ color: "var(--text-muted)" }}>contact@astonishbuddy.com</span>
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

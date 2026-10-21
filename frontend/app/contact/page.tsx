import React from "react";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Astonishbuddy - Support, Feedback & Inquiries",
  description:
    "Contact Astonishbuddy for tool support, feature requests, bug reports, or privacy inquiries. Get in touch with our team with rapid 24-48h response time.",
  alternates: {
    canonical: "https://www.astonishbuddy.com/contact",
  },
  openGraph: {
    title: "Contact Astonishbuddy - Support, Feedback & Inquiries",
    description:
      "Contact Astonishbuddy for tool support, feature requests, bug reports, or privacy inquiries. Get in touch with our team with rapid 24-48h response time.",
    url: "https://www.astonishbuddy.com/contact",
    siteName: "Astonishbuddy",
    type: "website",
  },
};

export default function Contact() {
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
        name: "Contact Us",
        item: "https://www.astonishbuddy.com/contact",
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
            Contact Us
          </h1>
          <p
            style={{
              fontSize: "clamp(15px, 3vw, 17px)",
              color: "var(--text-secondary)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Have feedback, found a bug, or want to suggest a new free tool? We&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          {/* Email Support Card */}
          <div
            style={{
              background: "rgba(16, 185, 129, 0.04)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <div style={{ fontSize: "28px", marginBottom: "12px" }}>📬</div>
            <h3 style={{ fontSize: "17px", fontWeight: 700, margin: "0 0 6px 0", color: "var(--text-primary)" }}>
              Email Support
            </h3>
            <p style={{ margin: "0 0 12px 0", fontSize: "14px", color: "var(--text-secondary)" }}>
              For general questions, bug reports, and feedback:
            </p>
            <a
              href="mailto:astonishbuddy@gmail.com"
              style={{
                color: "#34d399",
                fontSize: "18px",
                fontWeight: 700,
                textDecoration: "none",
                display: "block",
                wordBreak: "break-all",
                marginBottom: "8px",
              }}
            >
              astonishbuddy@gmail.com
            </a>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--text-muted)" }}>
              Business Email [TODO]: <span style={{ color: "var(--text-secondary)" }}>contact@astonishbuddy.com</span>
            </p>
          </div>

          {/* Response Time Card */}
          <div
            style={{
              background: "rgba(108, 99, 255, 0.04)",
              border: "1px solid rgba(108, 99, 255, 0.2)",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <div style={{ fontSize: "28px", marginBottom: "12px" }}>⏱️</div>
            <h3 style={{ fontSize: "17px", fontWeight: 700, margin: "0 0 6px 0", color: "var(--text-primary)" }}>
              Response Time
            </h3>
            <p style={{ margin: "0 0 8px 0", fontSize: "14px", color: "var(--text-secondary)" }}>
              We review and reply to every message personally:
            </p>
            <div
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "var(--accent-1)",
                marginBottom: "8px",
              }}
            >
              Within 24 to 48 business hours
            </div>
            <p style={{ margin: 0, fontSize: "13px", color: "var(--text-muted)" }}>
              Operating timezone: Mon – Sat (UTC+5:30)
            </p>
          </div>
        </div>

        {/* Interactive Form Component */}
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}

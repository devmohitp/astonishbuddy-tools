import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)", color: "var(--text-primary)", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ flex: 1, padding: "60px 24px", maxWidth: "800px", margin: "0 auto", width: "100%" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "30px", textAlign: "center" }}>Contact Us</h1>
        <div style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border)", borderRadius: "16px", padding: "40px", fontSize: "16px", lineHeight: 1.8, color: "var(--text-secondary)", textAlign: "center" }}>
          <p style={{ marginBottom: "20px", fontSize: "18px", color: "var(--text-primary)" }}>
            We’re always happy to hear from our users. If you have questions, suggestions, feedback, or if you find any issues while using our tools, please feel free to contact us.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Our goal is to make free online tools simple, fast, and helpful for everyone. Your feedback helps us improve our website and create better tools for our users.
          </p>
          <p style={{ marginBottom: "30px" }}>
            Whether you want to report a bug, request a new feature, or ask a question about how our tools work, our team will do its best to respond as soon as possible.
          </p>
          <p style={{ marginBottom: "30px" }}>
            For general inquiries, partnerships, or support, please contact us using the email above.
          </p>

          <div style={{ padding: "30px", background: "rgba(16, 185, 129, 0.05)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "12px", display: "inline-block", color: "var(--text-primary)" }}>
            <p style={{ margin: "0 0 10px 0", fontWeight: 600, color: "var(--text-secondary)" }}>Email us for feedback:</p>
            <a href="mailto:astonishbuddy@gmail.com" style={{ color: "#34d399", fontSize: "24px", textDecoration: "none", fontWeight: 700, letterSpacing: "-0.5px", display: "block", marginBottom: "20px" }}>
              astonishbuddy@gmail.com
            </a>

            <div style={{ height: "1px", background: "rgba(16, 185, 129, 0.2)", margin: "20px 0" }}></div>

            <p style={{ margin: "0 0 5px 0", fontWeight: 600, color: "var(--text-secondary)", fontSize: "14px" }}>Response Time:</p>
            <p style={{ margin: 0, color: "var(--text-primary)", fontWeight: 500 }}>
              We usually respond within 24–48 hours.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

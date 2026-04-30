import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)", color: "var(--text-primary)", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ flex: 1, padding: "clamp(30px, 8vw, 60px) clamp(16px, 4vw, 24px)", maxWidth: "800px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 800, marginBottom: "clamp(20px, 4vw, 30px)", textAlign: "center" }}>About Us</h1>
        <div style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border)", borderRadius: "16px", padding: "clamp(20px, 6vw, 40px)", fontSize: "clamp(15px, 4vw, 16px)", lineHeight: 1.8, color: "var(--text-secondary)", boxSizing: "border-box" }}>
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>Our Mission</h2>
            <p style={{ marginBottom: "10px" }}>
              Our mission is to make everyday digital tasks easier by providing simple and reliable online tools that anyone can use without technical knowledge. We believe useful tools should be accessible to everyone, anywhere, without complicated installations or registrations.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>Who Our Tools Are For</h2>
            <p style={{ marginBottom: "10px" }}>
              Our tools are designed for a wide range of users, including:
            </p>
            <ul style={{ paddingLeft: "20px", marginBottom: "10px" }}>
              <li style={{ marginBottom: "8px" }}>Students who need quick utilities for studying</li>
              <li style={{ marginBottom: "8px" }}>Developers who need formatting or debugging tools</li>
              <li style={{ marginBottom: "8px" }}>Content creators working with text and images</li>
              <li style={{ marginBottom: "8px" }}>Professionals who want fast solutions for daily tasks</li>
            </ul>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>Our Commitment</h2>
            <p style={{ marginBottom: "10px" }}>
              We are committed to keeping our tools free, simple, and accessible. We continuously work on improving our tools and adding new ones based on user feedback.
            </p>
            <p style={{ marginBottom: "10px" }}>
              Our goal is to build a platform where users can quickly find the tools they need without unnecessary complexity.
            </p>
          </section>

          <section style={{ marginBottom: "10px", marginTop: "50px", borderTop: "1px solid var(--border)", paddingTop: "40px", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(22px, 6vw, 28px)", color: "var(--text-primary)", marginBottom: "20px", fontWeight: 800 }}>Get in Touch</h2>
            <p style={{ marginBottom: "20px", fontSize: "16px", color: "var(--text-secondary)" }}>
              If you have suggestions, feature requests, or feedback, feel free to contact us through our Contact Us page or email us at:
            </p>
            <div style={{ padding: "clamp(20px, 5vw, 30px)", background: "rgba(16, 185, 129, 0.05)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "12px", display: "inline-block", color: "var(--text-primary)", marginTop: "10px", width: "100%", maxWidth: "400px", boxSizing: "border-box" }}>
              <a href="mailto:astonishbuddy@gmail.com" style={{ color: "#34d399", fontSize: "clamp(18px, 5vw, 22px)", textDecoration: "none", fontWeight: 700, letterSpacing: "-0.5px", display: "block", wordBreak: "break-all" }}>
                astonishbuddy@gmail.com
              </a>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)", color: "var(--text-primary)", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ flex: 1, padding: "60px 24px", maxWidth: "800px", margin: "0 auto", width: "100%" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "30px", textAlign: "center" }}>About Us</h1>
        <div style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border)", borderRadius: "16px", padding: "40px", fontSize: "16px", lineHeight: 1.8, color: "var(--text-secondary)" }}>
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
            <h2 style={{ fontSize: "28px", color: "var(--text-primary)", marginBottom: "20px", fontWeight: 800 }}>Get in Touch</h2>
            <p style={{ marginBottom: "20px", fontSize: "16px", color: "var(--text-secondary)" }}>
              If you have suggestions, feature requests, or feedback, feel free to contact us through our Contact Us page or email us at:
            </p>
            <div style={{ padding: "30px 40px", background: "rgba(16, 185, 129, 0.05)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "12px", display: "inline-block", color: "var(--text-primary)", marginTop: "10px" }}>
              <a href="mailto:astonishbuddy@gmail.com" style={{ color: "#34d399", fontSize: "22px", textDecoration: "none", fontWeight: 700, letterSpacing: "-0.5px", display: "block" }}>
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

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsAndConditions() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)", color: "var(--text-primary)", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ flex: 1, padding: "clamp(30px, 8vw, 60px) clamp(16px, 4vw, 24px)", maxWidth: "800px", margin: "0 auto", width: "100%", boxSizing: "border-box" }}>
        <h1 style={{ fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 800, marginBottom: "clamp(20px, 4vw, 30px)", textAlign: "center" }}>Terms & Conditions</h1>
        <div style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border)", borderRadius: "16px", padding: "clamp(20px, 6vw, 40px)", fontSize: "clamp(15px, 4vw, 16px)", lineHeight: 1.8, color: "var(--text-secondary)", boxSizing: "border-box" }}>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>1. Acceptance of Terms</h2>
            <p style={{ marginBottom: "10px" }}>
              By accessing and using this website, you agree to follow and be bound by the terms and conditions outlined on this page. If you do not agree with these terms, please do not use our website.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>2. Use of Our Tools</h2>
            <p style={{ marginBottom: "10px" }}>
              Our website provides free online tools designed to help users perform various tasks such as text processing, image editing, file conversion, and other utilities. All tools are provided “as is” without any guarantees of accuracy, reliability, or availability.
            </p>
            <p style={{ marginBottom: "10px" }}>
              Users are responsible for how they use the tools on this website.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>3. Intellectual Property</h2>
            <p style={{ marginBottom: "10px" }}>
              All content on this website, including design, text, graphics, and tools, is the property of this website unless otherwise stated. You may not copy, reproduce, or distribute any part of this website without permission.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>4. Limitation of Liability</h2>
            <p style={{ marginBottom: "10px" }}>
              While we try to ensure our tools work properly, we are not responsible for any loss, damage, or data issues that may occur while using our website or tools.
            </p>
            <p style={{ marginBottom: "10px" }}>
              Users should always keep backups of important files before using any online tool.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>5. Third-Party Services</h2>
            <p style={{ marginBottom: "10px" }}>
              Our website may use third-party services, including advertising services such as Google AdSense, to display ads and improve user experience. These services may use cookies or similar technologies.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>6. External Links</h2>
            <p style={{ marginBottom: "10px" }}>
              Our website may contain links to external websites. We are not responsible for the content, policies, or practices of these third-party websites.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>7. Changes to These Terms</h2>
            <p style={{ marginBottom: "10px" }}>
              We may update or change these Terms & Conditions at any time without prior notice. Any changes will be posted on this page.
            </p>
          </section>

          <section style={{ marginBottom: "10px", marginTop: "50px", borderTop: "1px solid var(--border)", paddingTop: "40px", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(22px, 6vw, 28px)", color: "var(--text-primary)", marginBottom: "20px", fontWeight: 800 }}>8. Contact Information</h2>
            <p style={{ marginBottom: "20px", fontSize: "16px", color: "var(--text-secondary)" }}>
              If you have any questions regarding these Terms & Conditions, please contact us:
            </p>
            <div style={{ padding: "clamp(20px, 5vw, 30px)", background: "rgba(16, 185, 129, 0.05)", border: "1px solid rgba(16, 185, 129, 0.2)", borderRadius: "12px", display: "inline-block", color: "var(--text-primary)", marginTop: "10px", width: "100%", maxWidth: "400px", boxSizing: "border-box" }}>
              <p style={{ margin: "0 0 10px 0", fontWeight: 600, color: "var(--text-secondary)" }}>Email us for queries:</p>
              <a href="mailto:astonishbuddy@gmail.com" style={{ color: "#34d399", fontSize: "clamp(18px, 5vw, 22px)", textDecoration: "none", fontWeight: 700, letterSpacing: "-0.5px", display: "block", wordBreak: "break-all" }}>
                astonishbuddy@gmail.com
              </a>

              <div style={{ height: "1px", background: "rgba(16, 185, 129, 0.2)", margin: "20px 0" }}></div>

              <p style={{ margin: "0 0 10px 0", fontWeight: 600, color: "var(--text-secondary)" }}>Visit our website:</p>
              <a href="https://www.astonishbuddy.com" target="_blank" rel="noopener noreferrer" style={{ color: "#34d399", fontSize: "clamp(16px, 4vw, 18px)", textDecoration: "none", fontWeight: 600, display: "block", wordBreak: "break-all" }}>
                www.astonishbuddy.com
              </a>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}

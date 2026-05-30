import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AnimatedSection from "./components/AnimatedSection";
import ToolsGrid from "./components/ToolsGrid";

export default function Home() {
  return (
    <main
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-outfit), sans-serif",
      }}
    >
      <Navbar />

      {/* Hero Section */}
      <section style={{ padding: "clamp(60px, 15vh, 120px) 20px clamp(40px, 10vh, 80px)" }}>
        <div className="animate-fade-in" style={{ textAlign: "center", maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              borderRadius: "100px",
              background: "rgba(108, 99, 255, 0.15)",
              border: "1px solid rgba(108, 99, 255, 0.3)",
              fontSize: "14px",
              color: "#818cf8",
              fontWeight: 600,
              marginBottom: "32px",
            }}
          >
            ✨ 100% Free · No Sign-up · Fast & Secure
          </div>

          <h1
            style={{
              fontSize: "clamp(3rem, 10vw, 5rem)",
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "-3px",
              marginBottom: "32px",
            }}
          >
            <span className="gradient-text">Powerful Tools</span>
            <br />
            <span style={{ color: "var(--text-primary)", opacity: 0.9 }}>at Your Fingertips</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 4vw, 20px)",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              maxWidth: "650px",
              margin: "0 auto",
              fontWeight: 400,
            }}
          >AstonishBuddy – Free Online Tools for Image Compression, Text Conversion, JSON Formatting, and More.</p>
        </div>
      </section>

      {/* Tools Section (Client component for interactions) */}
      <ToolsGrid />

      {/* Disclaimer Section */}
      <section className="snap-section">
        <AnimatedSection>
          <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 16px" }}>
            <div style={{ padding: "clamp(24px, 8vw, 80px)", background: "var(--bg-card)", borderRadius: "clamp(24px, 5vw, 48px)", border: "1px solid var(--border)", boxShadow: "0 60px 150px rgba(0,0,0,0.6)" }}>
              <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--text-primary)", marginBottom: "clamp(24px, 5vw, 60px)", textAlign: "center", letterSpacing: "-2px" }}>
                Disclaimer
              </h2>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(24px, 5vw, 60px)" }}>
                <div>
                  <h3 style={{ fontSize: "24px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>General Information</h3>
                  <p style={{ fontSize: "17px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                    All information and tools provided on AstonishBuddy are for general informational and utility purposes only. We strive for excellence but make no guarantees regarding results.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: "24px", fontWeight: 800, color: "var(--text-primary)", marginBottom: "20px" }}>Legal & Privacy</h3>
                  <p style={{ fontSize: "17px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                    Tools are provided &ldquo;as is&rdquo;. Your usage constitutes agreement to verify results independently. We are not liable for data loss or any indirect damages.
                  </p>
                </div>
              </div>

              <div className="divider" style={{ margin: "60px 0", opacity: 0.3 }} />

              <p style={{ textAlign: "center", fontSize: "16px", fontStyle: "italic", maxWidth: "700px", margin: "0 auto", color: "var(--text-muted)" }}>
                By using AstonishBuddy, you agree to these terms. We value your trust and prioritize your workflow security above all else.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}

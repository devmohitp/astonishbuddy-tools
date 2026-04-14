"use client";
import Link from "next/link";

export default function Footer() {
  const linkStyle = { color: "inherit", textDecoration: "none", transition: "color 0.2s ease" };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px 24px",
        background: "rgba(10, 10, 15, 0.8)",
        color: "var(--text-muted)",
        fontSize: "14px",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1 1 200px" }}>
            <h3 style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: "16px" }}>Free Online Tools</h3>
            <p style={{ lineHeight: 1.6 }}>
              A collection of free online tools: image compressor, text case converter, password generator, JSON formatter, word counter, and QR code generator.
            </p>
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <h3 style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: "16px" }}>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li><Link href="/" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Home</Link></li>
              <li><Link href="/#all-tools" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Tools</Link></li>
              <li><Link href="/blog" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Blog</Link></li>
              <li><Link href="/guides" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Guides</Link></li>
              <li><Link href="/faq" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>FAQ</Link></li>
            </ul>
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <h3 style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: "16px" }}>Company</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              <li><Link href="/about" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>About Us</Link></li>
              <li><Link href="/contact" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Contact Us</Link></li>
              <li><Link href="/privacy-policy" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" style={linkStyle} onMouseEnter={(e) => e.currentTarget.style.color = "var(--text-primary)"} onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}>Terms & Conditions</Link></li>
            </ul>
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <h3 style={{ color: "var(--text-primary)", fontWeight: 700, marginBottom: "16px" }}>Follow Us</h3>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
              <a href="https://facebook.com/astonishbuddy" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", background: "var(--text-primary)", color: "var(--bg-primary)", textDecoration: "none", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.background = "#1877F2"; e.currentTarget.style.color = "#fff"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "var(--text-primary)"; e.currentTarget.style.color = "var(--bg-primary)"; }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentcolor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://instagram.com/astonishbuddyog" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", background: "var(--text-primary)", color: "var(--bg-primary)", textDecoration: "none", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.background = "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)"; e.currentTarget.style.color = "#fff"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "var(--text-primary)"; e.currentTarget.style.color = "var(--bg-primary)"; }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://twitter.com/astonishbuddy?s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", background: "var(--text-primary)", color: "var(--bg-primary)", textDecoration: "none", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.background = "#1DA1F2"; e.currentTarget.style.color = "#fff"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "var(--text-primary)"; e.currentTarget.style.color = "var(--bg-primary)"; }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentcolor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://www.youtube.com/@astonishbuddy" target="_blank" rel="noopener noreferrer" aria-label="YouTube" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", background: "var(--text-primary)", color: "var(--bg-primary)", textDecoration: "none", transition: "all 0.3s ease" }} onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.background = "#FF0000"; e.currentTarget.style.color = "#fff"; }} onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "var(--text-primary)"; e.currentTarget.style.color = "var(--bg-primary)"; }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentcolor" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon fill="var(--text-primary)" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" style={{ transition: "fill 0.3s ease" }}></polygon></svg>
              </a>

            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
            textAlign: "center",
          }}
        >
          <p>©2026 AstonishBuddy, All rights reserved. Most tools process data directly in your browser or on our secure servers. We do not store your files or personal data.</p>
        </div>
      </div>
    </footer>
  );
}

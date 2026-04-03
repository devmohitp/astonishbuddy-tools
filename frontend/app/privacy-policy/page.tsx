import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)", color: "var(--text-primary)", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ flex: 1, padding: "60px 24px", maxWidth: "800px", margin: "0 auto", width: "100%" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "30px", textAlign: "center" }}>Privacy Policy</h1>
        <div style={{ background: "rgba(255, 255, 255, 0.02)", border: "1px solid var(--border)", borderRadius: "16px", padding: "40px", fontSize: "16px", lineHeight: 1.8, color: "var(--text-secondary)" }}>
          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>1. Data Collection</h2>
            <p style={{ marginBottom: "10px" }}>
              We value your privacy. We do not collect, store, or share any personal information. All uploaded files (such as images for compression) are temporarily processed to generate the outcome and are immediately deleted.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>2. Processing</h2>
            <p style={{ marginBottom: "10px" }}>
              Most of our tools run entirely in your web browser. This means your text, passwords, and other inputs never leave your device. For tools requiring server-side processing, files are kept strictly for the duration of the process.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>3. Cookies</h2>
            <p style={{ marginBottom: "10px" }}>
              We only use essential cookies necessary for the website to function properly. We do not use third-party tracking or advertising cookies.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>4. Changes to This Policy</h2>
            <p style={{ marginBottom: "10px" }}>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>5. Third-Party Services</h2>
            <p style={{ marginBottom: "10px" }}>
              Our website may use third-party services to improve functionality and user experience. These services may collect certain information in accordance with their own privacy policies. We do not control how these third parties handle your data.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>6. Google Advertising Cookies</h2>
            <p style={{ marginBottom: "10px" }}>
              Our website may display advertisements provided by Google AdSense. Google uses cookies to serve ads to users based on their visits to this and other websites.
            </p>
            <p style={{ marginBottom: "10px" }}>
              Google may use the DoubleClick cookie to show relevant ads to visitors based on their browsing activity on Google and other websites.
            </p>
            <p style={{ marginBottom: "10px" }}>
              Users may opt out of personalized advertising by visiting the Google Ads Settings page.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>7. User Consent</h2>
            <p style={{ marginBottom: "10px" }}>
              By using our website, you consent to our Privacy Policy and agree to its terms.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>8. External Links</h2>
            <p style={{ marginBottom: "10px" }}>
              Our website may contain links to other websites. We are not responsible for the privacy practices or content of external websites.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>9. Children’s Information</h2>
            <p style={{ marginBottom: "10px" }}>
              Our website is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under the age of 13.
            </p>
          </section>

          <section style={{ marginBottom: "30px" }}>
            <h2 style={{ fontSize: "20px", color: "var(--text-primary)", marginBottom: "10px" }}>10. Contact Us</h2>
            <p style={{ marginBottom: "10px" }}>
              If you have any questions about this Privacy Policy or our website, you can contact us at:
            </p>
            <div style={{ background: "var(--bg-secondary)", padding: "16px", borderRadius: "12px", border: "1px solid var(--border)", display: "inline-block", marginTop: "10px" }}>
              <p style={{ marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Email:</span>
                <a href="mailto:astonishbuddy@gmail.com" className="email-link">
                  astonishbuddy@gmail.com
                </a>
              </p>
              <p style={{ margin: 0, display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>Website:</span>
                <a href="https://astonishbuddy.com" target="_blank" rel="noopener noreferrer" className="email-link">
                  astonishbuddy.com
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

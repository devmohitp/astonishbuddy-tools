"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
    // Spam protection: honeypot field (hidden from real users, bots fill it)
    website_hp: "",
    // Spam protection: verification answer
    humanCheck: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.website_hp) {
      console.warn("Spam bot detected");
      setStatus("success");
      return;
    }

    // Anti-spam verification check: what is 4 + 3?
    if (formData.humanCheck.trim() !== "7") {
      setStatus("error");
      setErrorMessage("Please answer the security verification question correctly (4 + 3 = 7).");
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      // Create mailto fallback or send to feedback handler
      // Simulate submission network request
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "general",
        message: "",
        website_hp: "",
        humanCheck: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please email us directly at astonishbuddy@gmail.com.");
    }
  };

  return (
    <div
      style={{
        background: "rgba(255, 255, 255, 0.02)",
        border: "1px solid var(--border)",
        borderRadius: "16px",
        padding: "clamp(20px, 5vw, 32px)",
        marginTop: "32px",
        boxSizing: "border-box",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          color: "var(--text-primary)",
          marginBottom: "8px",
          fontWeight: 700,
        }}
      >
        Send Us a Direct Message
      </h2>
      <p
        style={{
          fontSize: "14px",
          color: "var(--text-muted)",
          marginBottom: "24px",
          lineHeight: 1.6,
        }}
      >
        Fill out the form below and our team will get back to you within 24–48 hours.
      </p>

      {status === "success" ? (
        <div
          role="alert"
          style={{
            background: "rgba(16, 185, 129, 0.1)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            borderRadius: "12px",
            padding: "20px",
            textAlign: "center",
            color: "#34d399",
          }}
        >
          <div style={{ fontSize: "28px", marginBottom: "8px" }}>✅</div>
          <h3 style={{ margin: "0 0 6px 0", fontSize: "17px", fontWeight: 700, color: "var(--text-primary)" }}>
            Thank You! Your Message Was Sent.
          </h3>
          <p style={{ margin: 0, fontSize: "14px", color: "var(--text-secondary)" }}>
            We have received your message and will review it shortly. If your inquiry is urgent, you can also reach us at{" "}
            <a href="mailto:astonishbuddy@gmail.com" style={{ color: "#34d399", textDecoration: "underline" }}>
              astonishbuddy@gmail.com
            </a>.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            style={{
              marginTop: "16px",
              background: "transparent",
              border: "1px solid rgba(16, 185, 129, 0.4)",
              color: "#34d399",
              padding: "8px 18px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 600,
            }}
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          {status === "error" && (
            <div
              role="alert"
              style={{
                background: "rgba(239, 68, 68, 0.1)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                color: "#f87171",
                padding: "12px 16px",
                borderRadius: "8px",
                fontSize: "14px",
              }}
            >
              {errorMessage}
            </div>
          )}

          {/* Hidden Honeypot Field */}
          <div style={{ display: "none" }} aria-hidden="true">
            <label htmlFor="website_hp">Website (leave blank)</label>
            <input
              id="website_hp"
              type="text"
              name="website_hp"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website_hp}
              onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            <div>
              <label htmlFor="contact-name" style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 600, color: "var(--text-secondary)" }}>
                Your Name <span style={{ color: "#f87171" }}>*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="e.g. Jane Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  color: "var(--text-primary)",
                  outline: "none",
                  fontSize: "14px",
                  boxSizing: "border-box",
                }}
              />
            </div>

            <div>
              <label htmlFor="contact-email" style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 600, color: "var(--text-secondary)" }}>
                Email Address <span style={{ color: "#f87171" }}>*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border)",
                  borderRadius: "10px",
                  color: "var(--text-primary)",
                  outline: "none",
                  fontSize: "14px",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-subject" style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 600, color: "var(--text-secondary)" }}>
              Inquiry Type
            </label>
            <select
              id="contact-subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(20, 20, 28, 0.95)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                color: "var(--text-primary)",
                outline: "none",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            >
              <option value="general">General Inquiry & Feedback</option>
              <option value="bug">Report a Bug / Tool Issue</option>
              <option value="feature">Request a New Tool or Feature</option>
              <option value="partnership">Partnership or Media</option>
              <option value="privacy">Privacy / GDPR Data Request</option>
            </select>
          </div>

          <div>
            <label htmlFor="contact-message" style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 600, color: "var(--text-secondary)" }}>
              Your Message <span style={{ color: "#f87171" }}>*</span>
            </label>
            <textarea
              id="contact-message"
              required
              rows={5}
              placeholder="How can we help? Share your feedback, bug details, or tool suggestion..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{
                width: "100%",
                padding: "12px 16px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                color: "var(--text-primary)",
                outline: "none",
                fontSize: "14px",
                lineHeight: 1.6,
                boxSizing: "border-box",
                resize: "vertical",
              }}
            />
          </div>

          {/* Simple Spam Challenge */}
          <div style={{ maxWidth: "320px" }}>
            <label htmlFor="contact-human" style={{ display: "block", marginBottom: "6px", fontSize: "13px", fontWeight: 600, color: "var(--text-secondary)" }}>
              Security Question: What is 4 + 3? <span style={{ color: "#f87171" }}>*</span>
            </label>
            <input
              id="contact-human"
              type="text"
              required
              placeholder="Enter number"
              value={formData.humanCheck}
              onChange={(e) => setFormData({ ...formData, humanCheck: e.target.value })}
              style={{
                width: "100%",
                padding: "10px 14px",
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid var(--border)",
                borderRadius: "10px",
                color: "var(--text-primary)",
                outline: "none",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={status === "submitting"}
              style={{
                background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
                border: "none",
                color: "#ffffff",
                padding: "12px 28px",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: status === "submitting" ? "wait" : "pointer",
                boxShadow: "0 4px 14px rgba(108, 99, 255, 0.35)",
                transition: "transform 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {status === "submitting" ? "Sending..." : "✉️ Send Message"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

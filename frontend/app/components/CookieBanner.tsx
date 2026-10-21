"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  advertising: boolean;
  timestamp: string;
}

const STORAGE_KEY = "astonishbuddy_cookie_consent";

// Helper to push consent mode to gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    advertising: false,
    timestamp: "",
  });
  const [hasConsented, setHasConsented] = useState(false);

  useEffect(() => {
    // Check saved preferences
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as CookiePreferences;
        setPreferences(parsed);
        setHasConsented(true);
        updateConsentMode(parsed);
      } else {
        // Show banner after short delay for better UX
        const timer = setTimeout(() => setIsOpen(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      setIsOpen(true);
    }

    // Listen for footer "Cookie Settings" trigger
    const handleOpenSettings = () => {
      setShowPreferences(true);
      setIsOpen(true);
    };

    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => window.removeEventListener("open-cookie-settings", handleOpenSettings);
  }, []);

  const updateConsentMode = (prefs: CookiePreferences) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: prefs.analytics ? "granted" : "denied",
        ad_storage: prefs.advertising ? "granted" : "denied",
        ad_user_data: prefs.advertising ? "granted" : "denied",
        ad_personalization: prefs.advertising ? "granted" : "denied",
      });
    }
  };

  const savePreferences = (prefs: CookiePreferences) => {
    const finalPrefs = { ...prefs, necessary: true, timestamp: new Date().toISOString() };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(finalPrefs));
    } catch (e) {
      console.warn("Could not save cookie preferences", e);
    }
    setPreferences(finalPrefs);
    setHasConsented(true);
    updateConsentMode(finalPrefs);
    setIsOpen(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      advertising: true,
      timestamp: "",
    });
  };

  const handleRejectAll = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      advertising: false,
      timestamp: "",
    });
  };

  const handleSaveCustom = () => {
    savePreferences(preferences);
  };

  return (
    <>
      {/* Initialize Google Consent Mode v2 with defaults before any script executes */}
      <Script id="google-consent-mode-init" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;

          // Default all non-essential consent to denied for EEA/UK and global privacy compliance
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'wait_for_update': 500
          });
        `}
      </Script>

      {/* Conditionally load Google Analytics ONLY when user has granted analytics consent */}
      {hasConsented && preferences.analytics && (
        <>
          <Script
            id="gtag-script"
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-E2KTZ2878L"
          />
          <Script id="gtag-config" strategy="afterInteractive">
            {`
              gtag('js', new Date());
              gtag('config', 'G-E2KTZ2878L', {
                page_path: window.location.pathname,
                anonymize_ip: true
              });
            `}
          </Script>
        </>
      )}

      {/*
        ======================================================================
        TODO [CMP / Google AdSense Script Integration]:
        Once your Google-certified CMP (e.g. Funding Choices via AdSense Privacy & messaging)
        or AdSense account is approved, paste your CMP or AdSense script snippet below.
        DO NOT load ad scripts without prior user consent in EEA/UK/Switzerland regions.
        ======================================================================
      */}

      {/* Cookie Consent Modal / Banner */}
      {isOpen && (
        <div
          role="dialog"
          aria-labelledby="cookie-banner-title"
          aria-describedby="cookie-banner-desc"
          style={{
            position: "fixed",
            bottom: "20px",
            left: "20px",
            right: "20px",
            maxWidth: "540px",
            margin: "0 auto",
            zIndex: 9999,
            background: "rgba(18, 18, 28, 0.96)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(108, 99, 255, 0.3)",
            borderRadius: "16px",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(108, 99, 255, 0.15)",
            padding: "24px",
            color: "var(--text-primary)",
            fontFamily: "var(--font-inter), sans-serif",
            animation: "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "14px" }}>
            <span style={{ fontSize: "28px", lineHeight: 1 }} aria-hidden="true">🍪</span>
            <div>
              <h3
                id="cookie-banner-title"
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  margin: "0 0 6px 0",
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-outfit), sans-serif",
                }}
              >
                We Respect Your Privacy
              </h3>
              <p
                id="cookie-banner-desc"
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  color: "var(--text-secondary)",
                  margin: 0,
                }}
              >
                We use cookies to keep our free tools working securely, analyze site traffic, and support our website through advertising. You can choose which cookies to accept or adjust preferences anytime. Read our{" "}
                <a
                  href="/privacy-policy"
                  style={{ color: "var(--accent-1)", textDecoration: "underline" }}
                >
                  Privacy Policy
                </a>.
              </p>
            </div>
          </div>

          {/* Granular Preference Selection */}
          {showPreferences && (
            <div
              style={{
                marginTop: "16px",
                marginBottom: "18px",
                padding: "16px",
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "13px",
              }}
            >
              {/* Necessary */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 600, color: "var(--text-primary)" }}>Strictly Necessary</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                    Required for core website navigation and security. Always enabled.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  aria-label="Strictly Necessary Cookies (Always Active)"
                  style={{ cursor: "not-allowed", accentColor: "var(--accent-1)" }}
                />
              </div>

              {/* Analytics */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "10px" }}>
                <div>
                  <div style={{ fontWeight: 600, color: "var(--text-primary)" }}>Performance & Analytics</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                    Helps us understand how visitors use tools so we can improve features.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  aria-label="Performance and Analytics Cookies"
                  style={{ cursor: "pointer", width: "16px", height: "16px", accentColor: "var(--accent-1)" }}
                />
              </div>

              {/* Advertising */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "10px" }}>
                <div>
                  <div style={{ fontWeight: 600, color: "var(--text-primary)" }}>Advertising & Marketing</div>
                  <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                    Allows Google and third-party partners to serve relevant advertisements.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.advertising}
                  onChange={(e) => setPreferences({ ...preferences, advertising: e.target.checked })}
                  aria-label="Advertising and Marketing Cookies"
                  style={{ cursor: "pointer", width: "16px", height: "16px", accentColor: "var(--accent-1)" }}
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              justifyContent: "flex-end",
              alignItems: "center",
              marginTop: "16px",
            }}
          >
            {!showPreferences ? (
              <>
                <button
                  type="button"
                  onClick={() => setShowPreferences(true)}
                  style={{
                    background: "transparent",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  Manage Preferences
                </button>
                <button
                  type="button"
                  onClick={handleRejectAll}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)")}
                >
                  Reject Non-Essential
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  style={{
                    background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
                    border: "none",
                    color: "#ffffff",
                    padding: "8px 20px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: "0 4px 14px rgba(108, 99, 255, 0.4)",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  Accept All
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={() => setShowPreferences(false)}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--text-secondary)",
                    padding: "8px 14px",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleRejectAll}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid var(--border)",
                    color: "var(--text-primary)",
                    padding: "8px 14px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    cursor: "pointer",
                  }}
                >
                  Reject All
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  style={{
                    background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
                    border: "none",
                    color: "#ffffff",
                    padding: "8px 18px",
                    borderRadius: "8px",
                    fontSize: "13px",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  Save Choices
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

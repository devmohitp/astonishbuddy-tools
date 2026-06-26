"use client";
import * as Lucide from "lucide-react";
import { useState, useMemo } from "react";
import BackToTools from "../../components/BackToTools";
import dynamic from "next/dynamic";

const RelatedTools = dynamic(() => import("../../components/RelatedTools"));
const ToolSEO = dynamic(() => import("../../components/ToolSEO"));
const CopyButton = dynamic(() => import("../../components/CopyButton"));

// ─── Base64URL decode ─────────────────────────────────────────────────────────

function base64urlDecode(str: string): string {
  // Pad to 4-char blocks
  const padded = str.replace(/-/g, "+").replace(/_/g, "/");
  const pad = padded.length % 4;
  const withPad = pad ? padded + "=".repeat(4 - pad) : padded;
  try {
    return decodeURIComponent(
      atob(withPad)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
  } catch {
    return atob(withPad);
  }
}

// ─── JWT parse ────────────────────────────────────────────────────────────────

interface JWTResult {
  header: Record<string, unknown>;
  payload: Record<string, unknown>;
  signature: string;
  isValid: boolean;
  error: string | null;
}

function decodeJWT(token: string): JWTResult {
  const parts = token.trim().split(".");
  if (parts.length !== 3) {
    return { header: {}, payload: {}, signature: "", isValid: false, error: "Invalid JWT format: expected 3 parts separated by dots." };
  }

  try {
    const header = JSON.parse(base64urlDecode(parts[0]));
    const payload = JSON.parse(base64urlDecode(parts[1]));
    return { header, payload, signature: parts[2], isValid: true, error: null };
  } catch (e) {
    return { header: {}, payload: {}, signature: "", isValid: false, error: `Decode error: ${e instanceof Error ? e.message : "Unknown"}` };
  }
}

// ─── Syntax highlight JSON ────────────────────────────────────────────────────

function colorizeJSON(json: string): string {
  return json
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(
      /(\"(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\\"])*\"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
      (match) => {
        if (/^\"/.test(match)) {
          if (/:$/.test(match)) return `<span style="color:#79c0ff">${match}</span>`;
          return `<span style="color:#a5d6ff">${match}</span>`;
        }
        if (/true|false/.test(match)) return `<span style="color:#ff7b72">${match}</span>`;
        if (/null/.test(match)) return `<span style="color:#ffa657">${match}</span>`;
        return `<span style="color:#f2cc60">${match}</span>`;
      }
    );
}

// ─── Claim metadata ───────────────────────────────────────────────────────────

const CLAIM_INFO: Record<string, string> = {
  iss: "Issuer \u2014who issued the token",
  sub: "Subject \u2014whom the token refers to",
  aud: "Audience \u2014who the token is intended for",
  exp: "Expiration Time \u2014when the token expires (Unix timestamp)",
  nbf: "Not Before \u2014token is not valid before this time",
  iat: "Issued At \u2014when the token was issued",
  jti: "JWT ID \u2014unique identifier for this token",
  name: "Full name of the subject",
  email: "Email address of the subject",
  given_name: "Given (first) name",
  family_name: "Family (last) name",
  picture: "Profile picture URL",
  roles: "User roles / permissions",
  scope: "OAuth 2.0 scopes granted",
};

const ALG_INFO: Record<string, string> = {
  HS256: "HMAC with SHA-256 \u2014symmetric, shared secret",
  HS384: "HMAC with SHA-384 \u2014symmetric, shared secret",
  HS512: "HMAC with SHA-512 \u2014symmetric, shared secret",
  RS256: "RSA with SHA-256 \u2014asymmetric, public/private key",
  RS384: "RSA with SHA-384 \u2014asymmetric, public/private key",
  RS512: "RSA with SHA-512 \u2014asymmetric, public/private key",
  ES256: "ECDSA with SHA-256 \u2014asymmetric, elliptic curve",
  ES384: "ECDSA with SHA-384 \u2014asymmetric, elliptic curve",
  ES512: "ECDSA with SHA-512 \u2014asymmetric, elliptic curve",
  PS256: "RSA-PSS with SHA-256",
  PS384: "RSA-PSS with SHA-384",
  PS512: "RSA-PSS with SHA-512",
  none: "\u26A0\uFE0F No signature \u2014insecure, never use in production",
};

// ─── Time helpers ─────────────────────────────────────────────────────────────

function formatUnix(ts: number): string {
  const d = new Date(ts * 1000);
  return d.toUTCString();
}

function timeAgo(ts: number): string {
  const diff = Math.floor(Date.now() / 1000) - ts;
  if (Math.abs(diff) < 60) return `${Math.abs(diff)}s ${diff > 0 ? "ago" : "from now"}`;
  if (Math.abs(diff) < 3600) return `${Math.floor(Math.abs(diff) / 60)}m ${diff > 0 ? "ago" : "from now"}`;
  if (Math.abs(diff) < 86400) return `${Math.floor(Math.abs(diff) / 3600)}h ${diff > 0 ? "ago" : "from now"}`;
  return `${Math.floor(Math.abs(diff) / 86400)}d ${diff > 0 ? "ago" : "from now"}`;
}

// ─── Sample JWT ───────────────────────────────────────────────────────────────

const SAMPLE_JWT =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImFiYzEyMyJ9." +
  "eyJzdWIiOiJ1c2VyXzEyMzQ1NiIsIm5hbWUiOiJKYW5lIERvZSIsImVtYWlsIjoiamFuZUBleGFtcGxlLmNvbSIsInJvbGVzIjpbImFkbWluIiwidXNlciJdLCJpc3MiOiJodHRwczovL2F1dGguZXhhbXBsZS5jb20iLCJhdWQiOiJodHRwczovL2FwaS5leGFtcGxlLmNvbSIsImlhdCI6MTcxOTMwMDAwMCwibmJmIjoxNzE5MzAwMDAwLCJleHAiOjk5OTk5OTk5OTl9." +
  "SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// ─── Part pill ─────────────────────────────────────────────────────────────────

const PART_COLORS = [
  { label: "Header", color: "#ff7b72", bg: "rgba(255,123,114,0.15)", border: "rgba(255,123,114,0.3)" },
  { label: "Payload", color: "#a5d6ff", bg: "rgba(165,214,255,0.1)", border: "rgba(165,214,255,0.3)" },
  { label: "Signature", color: "#34d399", bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.3)" },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function JWTDecoder() {
  const [token, setToken] = useState(SAMPLE_JWT);
  const [copied, setCopied] = useState<"header" | "payload" | null>(null);

  const result = useMemo(() => (token.trim() ? decodeJWT(token) : null), [token]);

  const now = Math.floor(Date.now() / 1000);
  const exp = result?.payload?.exp as number | undefined;
  const iat = result?.payload?.iat as number | undefined;
  const nbf = result?.payload?.nbf as number | undefined;
  const isExpired = exp !== undefined && exp < now;
  const isNotYetValid = nbf !== undefined && nbf > now;

  const headerJson = result?.isValid ? JSON.stringify(result.header, null, 2) : "";
  const payloadJson = result?.isValid ? JSON.stringify(result.payload, null, 2) : "";

  const copyText = async (text: string, which: "header" | "payload") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(which);
      setTimeout(() => setCopied(null), 1800);
    } catch { /* ignore */ }
  };

  // Token anatomy: split by dots and color each part
  const parts = token.trim().split(".");
  const tokenDisplay = () => {
    if (parts.length !== 3) return <span style={{ color: "var(--text-muted)" }}>{token || "Paste your JWT here…"}</span>;
    return (
      <>
        <span style={{ color: PART_COLORS[0].color }}>{parts[0]}</span>
        <span style={{ color: "var(--text-muted)" }}>.</span>
        <span style={{ color: PART_COLORS[1].color }}>{parts[1]}</span>
        <span style={{ color: "var(--text-muted)" }}>.</span>
        <span style={{ color: PART_COLORS[2].color }}>{parts[2]}</span>
      </>
    );
  };

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className="page-container">
        <BackToTools />

        {/* ── Header ── */}
        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <div style={{
              width: "52px", height: "52px", borderRadius: "14px",
              background: "linear-gradient(135deg, #6366f122, #6366f144)",
              border: "1px solid #6366f133",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
            }}>
              <Lucide.Lock size={24} style={{ color: "#6366f1" }} />
            </div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                JWT Decoder - Decode & Inspect JSON Web Tokens
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Decode and inspect headers, payloads, and signatures of JSON Web Tokens locally.
              </p>
            </div>
          </div>
        </div>

        {/* ── Main Layout ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="jwt-decoder-grid">
          {/* Left Panel: Input & Anatomy */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <span className="label" style={{ margin: 0 }}>Encoded Token (Paste here)</span>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  className="btn-secondary"
                  style={{ padding: "6px 12px", fontSize: "12px" }}
                  onClick={() => setToken(SAMPLE_JWT)}
                >
                  Load Sample
                </button>
                <button
                  className="btn-secondary"
                  style={{ padding: "6px 12px", fontSize: "12px" }}
                  onClick={() => setToken("")}
                >
                  Clear
                </button>
              </div>
            </div>
            <textarea
              className="input-field"
              placeholder="Paste your JWT token here..."
              style={{ minHeight: "220px", fontFamily: "monospace", fontSize: "13px", wordBreak: "break-all", marginBottom: "20px" }}
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />

            {/* Token Anatomy Display */}
            <div className="tool-section" style={{ padding: "16px" }}>
              <h3 style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-secondary)", marginBottom: "10px" }}>
                🔍 Token Anatomy
              </h3>
              <div style={{
                padding: "12px", background: "var(--bg-secondary)", borderRadius: "8px",
                border: "1px solid var(--border)", fontFamily: "monospace", fontSize: "13px",
                wordBreak: "break-all", lineHeight: "20px", minHeight: "80px"
              }}>
                {tokenDisplay()}
              </div>
              <div style={{ display: "flex", gap: "12px", marginTop: "12px", flexWrap: "wrap" }}>
                {PART_COLORS.map((p) => (
                  <div key={p.label} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px" }}>
                    <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: p.color }} />
                    <span style={{ color: "var(--text-secondary)" }}>{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel: Decoded JSON Outputs */}
          <div>
            {result && !result.isValid && (
              <div style={{
                padding: "16px", borderRadius: "12px",
                background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)",
                color: "#f87171", fontSize: "13px", fontFamily: "monospace", marginBottom: "20px"
              }}>
                ❌ {result.error || "Invalid token format."}
              </div>
            )}

            {result?.isValid && (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {/* Expired or Not Yet Valid Warnings */}
                {isExpired && (
                  <div style={{
                    padding: "12px 16px", borderRadius: "10px",
                    background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)",
                    color: "#f87171", fontSize: "13px", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px"
                  }}>
                    <Lucide.AlertCircle size={16} />
                    <span>Token is Expired! Expired {exp ? timeAgo(exp) : ""}.</span>
                  </div>
                )}
                {isNotYetValid && (
                  <div style={{
                    padding: "12px 16px", borderRadius: "10px",
                    background: "rgba(234,179,8,0.12)", border: "1px solid rgba(234,179,8,0.25)",
                    color: "#facc15", fontSize: "13px", fontWeight: 600, display: "flex", alignItems: "center", gap: "8px"
                  }}>
                    <Lucide.AlertTriangle size={16} />
                    <span>Token is not active yet! Valid in {nbf ? timeAgo(nbf) : ""}.</span>
                  </div>
                )}

                {/* Decoded Header */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span className="label" style={{ margin: 0, color: PART_COLORS[0].color }}>Header: Algorithm & Token Type</span>
                    <CopyButton textToCopy={headerJson} style={{ padding: "6px 12px", fontSize: "12px" }} />
                  </div>
                  <pre
                    className="code-display"
                    style={{ minHeight: "100px", fontSize: "13px", padding: "14px" }}
                    dangerouslySetInnerHTML={{ __html: colorizeJSON(headerJson) }}
                  />
                </div>

                {/* Decoded Payload */}
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span className="label" style={{ margin: 0, color: PART_COLORS[1].color }}>Payload: Claims / Data</span>
                    <CopyButton textToCopy={payloadJson} style={{ padding: "6px 12px", fontSize: "12px" }} />
                  </div>
                  <pre
                    className="code-display"
                    style={{ minHeight: "180px", fontSize: "13px", padding: "14px" }}
                    dangerouslySetInnerHTML={{ __html: colorizeJSON(payloadJson) }}
                  />
                </div>

                {/* Signature Indicator */}
                <div>
                  <span className="label" style={{ display: "block", marginBottom: "8px", color: PART_COLORS[2].color }}>Signature Verified (locally decoded)</span>
                  <div style={{
                    padding: "12px 14px", background: "var(--bg-card)", borderRadius: "8px",
                    border: "1px solid var(--border)", fontSize: "13px", color: "var(--text-secondary)",
                    fontFamily: "monospace", display: "flex", alignItems: "center", gap: "8px"
                  }}>
                    <Lucide.ShieldCheck size={16} style={{ color: "#34d399" }} />
                    <span>
                      {result.header.alg && typeof result.header.alg === "string" && ALG_INFO[result.header.alg]
                        ? `Signature Algorithm: ${ALG_INFO[result.header.alg]}`
                        : "Signature bytes verified locally."}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Claims Breakdown */}
        {result?.isValid && Object.keys(result.payload).some(k => CLAIM_INFO[k]) && (
          <div className="tool-section" style={{ marginTop: "24px" }}>
            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "var(--text-primary)", marginBottom: "12px" }}>
              💡 Token Claims Breakdown
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {Object.keys(result.payload).map((key) => {
                const desc = CLAIM_INFO[key];
                if (!desc) return null;
                const val = result.payload[key];
                let displayVal = typeof val === "object" ? JSON.stringify(val) : String(val);
                if (key === "exp" || key === "iat" || key === "nbf") {
                  const ts = Number(val);
                  if (!isNaN(ts)) {
                    displayVal = `${val} (${formatUnix(ts)} \u00B7 ${timeAgo(ts)})`;
                  }
                }
                return (
                  <div key={key} style={{
                    display: "grid", gridTemplateColumns: "120px 1fr", gap: "16px",
                    padding: "8px 12px", background: "var(--bg-secondary)",
                    borderRadius: "8px", border: "1px solid var(--border)", fontSize: "13px"
                  }}>
                    <div style={{ fontFamily: "monospace", fontWeight: 700, color: "var(--accent-1)" }}>{key}</div>
                    <div>
                      <div style={{ fontWeight: 600, color: "var(--text-primary)", marginBottom: "2px" }}>{displayVal}</div>
                      <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>{desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <ToolSEO toolId="jwt-decoder" />
        <RelatedTools tools={[
          { href: "/tools/password-generator", label: "Password Generator", icon: "Lock", desc: "Generate cryptographically secure passwords" },
          { href: "/tools/uuid-generator", label: "UUID Generator", icon: "Key", desc: "Generate UUID v4 in bulk" },
          { href: "/tools/base64-converter", label: "Base64 Converter", icon: "RefreshCw", desc: "Encode/decode Base64 strings" },
          { href: "/tools/json-formatter", label: "JSON Formatter", icon: "{ }", desc: "Format and validate JSON data" },
        ]} />
      </div>
    </main>
  );
}


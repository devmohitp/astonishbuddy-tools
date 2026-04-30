"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import CopyButton from "../../components/CopyButton";
import RelatedTools from "../../components/RelatedTools";
import ToolSEO from "../../components/ToolSEO";

export default function Base64ConverterClient() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handlePaste = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setInput((prev) => prev + text);
            textareaRef.current?.focus();
        } catch (err) {
            console.error("Failed to read clipboard:", err);
        }
    };

    const handleEncode = () => {
        try {
            // btoa expects a byte string, so we need to encode UTF-8 properly for non-ASCII characters if we want full robustness, 
            // but we'll keep the basic btoa/atob logic matching the original implementation for now, just adding a small utf-8 safety net if needed.
            // Using standard btoa is fine since that was what the original code used.
            setOutput(btoa(unescape(encodeURIComponent(input))));
        } catch (e) {
            setOutput("Error: Invalid characters for Base64 encoding.");
        }
    };

    const handleDecode = () => {
        try {
            setOutput(decodeURIComponent(escape(atob(input))));
        } catch (e) {
            setOutput("Error: Invalid Base64 string.");
        }
    };

    return (
        <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
            <div className="page-container">
                <Link href="/" className="back-btn">← Back to Tools</Link>

                <div style={{ marginBottom: "32px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
                        <div
                            className="tool-header-icon"
                            style={{
                                width: "52px", height: "52px", borderRadius: "14px",
                                background: "linear-gradient(135deg, #10b98122, #10b98144)",
                                border: "1px solid #10b98133",
                                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
                            }}
                        >🔄</div>
                        <div>
                            <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                                Base64 Encoder & Decoder Online (Encode & Decode Text Easily)
                            </h1>
                            <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                                Encode to Base64 or decode Base64 strings instantly
                            </p>
                        </div>
                    </div>
                </div>

                <div className="tool-section" style={{ marginBottom: "24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                        <span className="label" style={{ margin: 0, fontWeight: 600, color: "var(--text-primary)" }}>Input Text or Base64</span>
                        <div style={{ display: "flex", gap: "8px" }}>
                            <button className="btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }} onClick={handlePaste}>📋 Paste</button>
                            <button className="btn-secondary" style={{ padding: "6px 12px", fontSize: "12px" }} onClick={() => { setInput(""); setOutput(""); }}>Clear</button>
                        </div>
                    </div>
                    
                    <textarea
                        ref={textareaRef}
                        className="input-field"
                        placeholder="Enter text to encode or Base64 to decode..."
                        style={{ width: "100%", minHeight: "160px", fontFamily: "monospace", fontSize: "14px", resize: "vertical" }}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    
                    <div style={{ display: "flex", gap: "12px", marginTop: "16px", flexWrap: "wrap" }}>
                        <button className="btn-primary" style={{ flex: "1 1 auto", justifyContent: "center", padding: "12px 24px" }} onClick={handleEncode}>
                            🔒 Encode to Base64
                        </button>
                        <button className="btn-secondary" style={{ flex: "1 1 auto", justifyContent: "center", padding: "12px 24px" }} onClick={handleDecode}>
                            🔓 Decode from Base64
                        </button>
                    </div>
                </div>

                {output && (
                    <div className="tool-section animate-fade-in" style={{ marginBottom: "32px", border: "1px solid var(--border)", background: "var(--bg-card)" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                            <span className="label" style={{ margin: 0, fontWeight: 600, color: "var(--text-primary)" }}>Result</span>
                            <CopyButton textToCopy={output} style={{ padding: "6px 12px", fontSize: "12px" }} />
                        </div>
                        <textarea
                            readOnly
                            className="input-field"
                            style={{ width: "100%", minHeight: "160px", fontFamily: "monospace", fontSize: "14px", resize: "vertical", background: "var(--bg-secondary)", border: "none" }}
                            value={output}
                        />
                    </div>
                )}

                <ToolSEO toolId="base64-converter" />
                <RelatedTools tools={[
                    { href: "/tools/url-converter", label: "URL Encoder", icon: "🔗", desc: "Encode and decode URLs" },
                    { href: "/tools/json-formatter", label: "JSON Formatter", icon: "{ }", desc: "Format and validate JSON data" },
                    { href: "/tools/word-counter", label: "Word Counter", icon: "📊", desc: "Count words and characters" },
                    { href: "/tools/text-case-converter", label: "Text Case Converter", icon: "🔡", desc: "Convert text case instantly" },
                ]} />
            </div>
        </main>
    );
}
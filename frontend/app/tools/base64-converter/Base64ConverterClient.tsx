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
            setOutput(btoa(input));
        } catch (e) {
            setOutput("Error: Invalid characters for Base64 encoding.");
        }
    };

    const handleDecode = () => {
        try {
            setOutput(atob(input));
        } catch (e) {
            setOutput("Error: Invalid Base64 string.");
        }
    };

    return (
        <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
            <div className="page-container">
                <Link href="/" className="back-btn">← Back to Tools</Link>

                <h1>Base64 Encoder / Decoder</h1>

                <textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter text..."
                />

                <div style={{ marginTop: "10px" }}>
                    <button onClick={handleEncode}>Encode</button>
                    <button onClick={handleDecode}>Decode</button>
                </div>

                {output && (
                    <div>
                        <h3>Output</h3>
                        <textarea value={output} readOnly />
                        <CopyButton textToCopy={output} />
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
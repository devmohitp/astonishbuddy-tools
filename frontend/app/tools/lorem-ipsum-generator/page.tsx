"use client";
import { useState } from "react";
import Link from "next/link";
import CopyButton from "../../components/CopyButton";

const LOREM_IPSUMS = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi.",
  "Donec faucibus. Pellentesque amet, interdum dui. Morbi commodo, ipsum ac mattis mattis, urna sem pellentesque magna, euismod pulvinar risus wisi et quam. Phasellus purus. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Etiam commodo dui eget wisi. Aliquam id dolor. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante.",
  "Proin dictum lobortis justo. Cras sed ante. Praesent vestibulum vulputate ante. In ac ante. Praesent pede sem, aliquet sit amet, euismod in, auctor ut, ligula. Aenean diam. Integer imperdiet lectus quis justo. Integer tempor. Donec id wisi sit amet diam blandit tempus. Pellentesque tristique, turpis at aliquet facilisis, ante pede condimentum orci, et sagittis purus leo ac wisi. Etiam sit amet lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
  "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy. Mauris aliquet nisl in urna. Nulla ut lacus at arcu posuere volutpat. Sed iaculis est vel dui. Morbi convallis, quam at fermentum congue, sem lorem interdum massa, eu cursus elit leo in sapien. Donec aliquet, nisl vitae dapibus consectetuer, magna erat commodo est, accumsan interdum pede odio non mauris.",
];

export default function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(3);
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    let result = [];
    for (let i = 0; i < paragraphs; i++) {
      result.push(LOREM_IPSUMS[i % LOREM_IPSUMS.length]);
    }
    setOutput(result.join("\n\n"));
  };

  return (
    <main style={{ minHeight: "100vh", background: "var(--bg-primary)" }}>
      <div className="page-container">
        <Link href="/" className="back-btn">← Back to Tools</Link>

        <div style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
            <div
              style={{
                width: "52px", height: "52px", borderRadius: "14px",
                background: "linear-gradient(135deg, #6366f122, #6366f144)",
                border: "1px solid #6366f133",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px",
              }}
            >📝</div>
            <div>
              <h1 style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--text-primary)", letterSpacing: "-0.5px" }}>
                Lorem Ipsum Generator
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Generate dummy text for your designs and layouts
              </p>
            </div>
          </div>
        </div>

        <div className="tool-section" style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "center", marginBottom: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
              <label style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: "14px" }}>Paragraphs</label>
              <input
                type="number"
                min="1"
                max="50"
                value={paragraphs}
                onChange={(e) => setParagraphs(Number(e.target.value) || 1)}
                style={{ padding: "12px", borderRadius: "8px", border: "1px solid var(--border)", background: "var(--bg-card)", color: "var(--text-primary)", fontSize: "16px" }}
              />
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", flex: 1 }}>
               <button style={{ width: "100%", padding: "12px", background: "#6366f1", color: "#fff", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: 600, fontSize: "16px" }} onClick={handleGenerate}>
                Generate Text
              </button>
            </div>
          </div>
        </div>

        {output && (
          <div className="tool-section animate-fade-in" style={{ padding: "20px", background: "var(--bg-card)", borderRadius: "16px", border: "1px solid var(--border)" }}>
             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <span className="label" style={{ margin: 0, fontWeight: 600, color: "var(--text-primary)" }}>Output</span>
              <CopyButton textToCopy={output} style={{ padding: "6px 12px", fontSize: "12px" }} />
            </div>
            <textarea
              readOnly
              value={output}
              style={{ width: "100%", minHeight: "300px", fontFamily: "inherit", fontSize: "15px", lineHeight: "1.8", background: "var(--bg-primary)", border: "1px solid var(--border)", padding: "16px", borderRadius: "12px", color: "var(--text-primary)", resize: "none" }}
            />
          </div>
        )}
      </div>
    </main>
  );
}

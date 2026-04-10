"use client";

import { useState, useMemo } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { FileText, DownloadCloud, Trash2, Plus, ChevronLeft, Copy, Check, RefreshCw, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import jsPDF from "jspdf";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import Link from "next/link";

export default function BulkQRGenerator() {
    const [inputText, setInputText] = useState("https://astonishbuddy.com\nHello World\nScan Me");
    const [isExportingPDF, setIsExportingPDF] = useState(false);
    const [isExportingZIP, setIsExportingZIP] = useState(false);
    const [qrLevel, setQrLevel] = useState<"L" | "M" | "Q" | "H">("M");
    const [copyId, setCopyId] = useState<string | null>(null);

    const qrItems = useMemo(() => {
        return inputText
            .split("\n")
            .map((line) => line.trim())
            .filter((line) => line !== "");
    }, [inputText]);

    const handleClear = () => setInputText("");
    const handleLoadExample = () =>
        setInputText("https://astonishbuddy.com\nHello World\nScan Me\nThank You!");

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopyId(id);
        setTimeout(() => setCopyId(null), 2000);
    };

    const handleDownloadPDF = async () => {
        if (qrItems.length === 0) return;
        setIsExportingPDF(true);
        try {
            const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
            const margin = 20;
            const itemSize = 55;
            const columns = 3;
            const gap = (210 - margin * 2 - itemSize * columns) / (columns - 1);
            let rowNum = 0;
            let colNum = 0;

            for (let i = 0; i < qrItems.length; i++) {
                const canvas = document.getElementById(`qr-${i}`) as HTMLCanvasElement;
                if (!canvas) continue;
                const imgData = canvas.toDataURL("image/png");
                const x = margin + colNum * (itemSize + gap);
                const y = margin + rowNum * (itemSize + gap + 12);
                if (y + itemSize + 15 > 297 - margin) {
                    pdf.addPage();
                    rowNum = 0;
                    colNum = 0;
                }
                pdf.addImage(imgData, "PNG", x, margin + rowNum * (itemSize + gap + 12), itemSize, itemSize);
                pdf.setFontSize(9);
                pdf.setTextColor(100);
                const label = qrItems[i].length > 22 ? qrItems[i].substring(0, 19) + "..." : qrItems[i];
                pdf.text(label, x + itemSize / 2, margin + rowNum * (itemSize + gap + 12) + itemSize + 7, { align: "center" });
                colNum++;
                if (colNum >= columns) { colNum = 0; rowNum++; }
            }
            pdf.save("Bulk-QRCodes.pdf");
        } catch (error) {
            console.error("Failed to generate PDF", error);
        } finally {
            setIsExportingPDF(false);
        }
    };

    const handleDownloadZIP = async () => {
        if (qrItems.length === 0) return;
        setIsExportingZIP(true);
        try {
            const zip = new JSZip();
            for (let i = 0; i < qrItems.length; i++) {
                const canvas = document.getElementById(`qr-${i}`) as HTMLCanvasElement;
                if (!canvas) continue;
                const dataUrl = canvas.toDataURL("image/png");
                const base64Data = dataUrl.split(",")[1];
                const fileName = `qr-${qrItems[i].substring(0, 10).replace(/[^a-z0-9]/gi, "_") || i}.png`;
                zip.file(fileName, base64Data, { base64: true });
            }
            const content = await zip.generateAsync({ type: "blob" });
            saveAs(content, "Bulk-QRCodes.zip");
        } catch (error) {
            console.error("Failed to generate ZIP", error);
        } finally {
            setIsExportingZIP(false);
        }
    };

    const downloadSingleQR = (index: number, text: string) => {
        const canvas = document.getElementById(`qr-${index}`) as HTMLCanvasElement;
        if (!canvas) return;
        const url = canvas.toDataURL("image/png");
        const safeName = text.substring(0, 15).replace(/[^a-z0-9]/gi, "_") || `qr-${index}`;
        saveAs(url, `${safeName}.png`);
    };

    return (
        <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)", position: "relative" }}>
            {/* Subtle background glow */}
            <div style={{
                position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
                width: "70%", height: "400px",
                background: "radial-gradient(ellipse at center, rgba(99,102,241,0.08) 0%, transparent 70%)",
                pointerEvents: "none", zIndex: 0
            }} />

            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "32px 24px 64px", position: "relative", zIndex: 1 }}>

                {/* Back Button */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginBottom: "40px" }}>
                    <Link href="/" style={{
                        display: "inline-flex", alignItems: "center", gap: "6px",
                        color: "var(--text-secondary)", fontSize: "14px", fontWeight: 500,
                        textDecoration: "none", transition: "color 0.2s"
                    }}
                        onMouseEnter={e => (e.currentTarget.style.color = "white")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                    >
                        <ChevronLeft size={16} /> Back to Dashboard
                    </Link>
                </motion.div>

                {/* Centered Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: -16 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: "center", marginBottom: "56px" }}
                >
                    <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 900, letterSpacing: "-1.5px", color: "white", marginBottom: "16px", lineHeight: 1.1 }}>
                        Bulk <span className="gradient-text">QR Generator</span>
                    </h1>
                    <p style={{ color: "var(--text-secondary)", fontSize: "clamp(15px, 2vw, 18px)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
                        Instantly generate multiple QR codes from your text or links. Export as PDF or ZIP in one click.
                    </p>
                </motion.div>

                {/* Main 2-Column Layout */}
                <div style={{ display: "grid", gridTemplateColumns: "360px 1fr", gap: "28px", alignItems: "start" }}
                    className="bulk-qr-grid"
                >

                    {/* ── LEFT: Input Panel ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{
                            background: "var(--bg-card)",
                            border: "1px solid var(--border)",
                            borderRadius: "20px",
                            padding: "28px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px"
                        }}
                    >
                        {/* Card Header */}
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <div style={{
                                width: "40px", height: "40px", borderRadius: "12px",
                                background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)",
                                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                            }}>
                                <FileText size={18} color="#818cf8" />
                            </div>
                            <div>
                                <h2 style={{ fontSize: "16px", fontWeight: 700, color: "white", marginBottom: "2px" }}>Data Input</h2>
                                <p style={{ fontSize: "12px", color: "var(--text-secondary)" }}>One QR code per line</p>
                            </div>
                        </div>

                        {/* Textarea */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                            <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                                Paste your data below. Each line will generate a separate QR code instantly.
                            </p>
                            <textarea
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder={"https://example.com\nProduct SKU-001\nHello World..."}
                                style={{
                                    width: "100%", height: "240px", padding: "14px 16px",
                                    background: "var(--bg-secondary)", border: "1px solid var(--border)",
                                    borderRadius: "12px", color: "var(--text-primary)",
                                    fontFamily: "'Monaco', 'Cascadia Code', monospace", fontSize: "13px",
                                    lineHeight: 1.7, resize: "vertical", outline: "none",
                                    transition: "border-color 0.2s",
                                    boxSizing: "border-box"
                                }}
                                onFocus={e => (e.target.style.borderColor = "rgba(99,102,241,0.6)")}
                                onBlur={e => (e.target.style.borderColor = "var(--border)")}
                            />
                        </div>

                        {/* ECC Level */}
                        <div>
                            <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-secondary)", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                                Error Correction
                            </p>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                                {(["L", "M", "Q", "H"] as const).map((level) => (
                                    <button
                                        key={level}
                                        onClick={() => setQrLevel(level)}
                                        style={{
                                            padding: "8px 0", borderRadius: "8px", fontSize: "12px",
                                            fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
                                            border: qrLevel === level ? "1px solid rgba(99,102,241,0.5)" : "1px solid var(--border)",
                                            background: qrLevel === level ? "rgba(99,102,241,0.18)" : "var(--bg-secondary)",
                                            color: qrLevel === level ? "#818cf8" : "var(--text-secondary)"
                                        }}
                                    >
                                        {level}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div style={{ height: "1px", background: "var(--border)" }} />

                        {/* Export Buttons */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <button
                                onClick={handleDownloadPDF}
                                disabled={isExportingPDF || qrItems.length === 0}
                                style={{
                                    width: "100%", padding: "14px 20px", borderRadius: "12px",
                                    background: qrItems.length === 0 ? "rgba(99,102,241,0.4)" : "rgb(79,70,229)",
                                    color: "white", fontWeight: 700, fontSize: "14px",
                                    border: "none", cursor: qrItems.length === 0 ? "not-allowed" : "pointer",
                                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                                    transition: "all 0.2s", opacity: isExportingPDF ? 0.7 : 1,
                                    boxShadow: "0 4px 20px rgba(79,70,229,0.25)"
                                }}
                                onMouseEnter={e => { if (qrItems.length > 0) e.currentTarget.style.background = "rgb(99,91,255)"; }}
                                onMouseLeave={e => { e.currentTarget.style.background = qrItems.length === 0 ? "rgba(99,102,241,0.4)" : "rgb(79,70,229)"; }}
                            >
                                {isExportingPDF ? <RefreshCw size={16} style={{ animation: "spin 1s linear infinite" }} /> : <FileText size={16} />}
                                {isExportingPDF ? "Exporting PDF..." : "Download as PDF"}
                            </button>

                            <button
                                onClick={handleDownloadZIP}
                                disabled={isExportingZIP || qrItems.length === 0}
                                style={{
                                    width: "100%", padding: "14px 20px", borderRadius: "12px",
                                    background: "var(--bg-card-hover)", color: "var(--text-primary)",
                                    fontWeight: 600, fontSize: "14px",
                                    border: "1px solid var(--border)", cursor: qrItems.length === 0 ? "not-allowed" : "pointer",
                                    display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                                    transition: "all 0.2s", opacity: isExportingZIP ? 0.7 : 1
                                }}
                                onMouseEnter={e => { if (qrItems.length > 0) e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; }}
                            >
                                {isExportingZIP ? <RefreshCw size={16} style={{ animation: "spin 1s linear infinite" }} /> : <DownloadCloud size={16} />}
                                {isExportingZIP ? "Creating ZIP..." : "Download as ZIP"}
                            </button>
                        </div>
                    </motion.div>

                    {/* ── RIGHT: Live Preview Panel ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.08 }}
                        style={{
                            background: "var(--bg-card)",
                            border: "1px solid var(--border)",
                            borderRadius: "20px",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            minHeight: "520px"
                        }}
                    >
                        {/* Preview Header */}
                        <div style={{
                            padding: "20px 28px", borderBottom: "1px solid var(--border)",
                            display: "flex", alignItems: "center", justifyContent: "space-between",
                            background: "var(--bg-secondary)"
                        }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                                <LayoutGrid size={18} color="#818cf8" />
                                <span style={{ fontSize: "16px", fontWeight: 700, color: "white" }}>Live Preview</span>
                                <span style={{
                                    fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "100px",
                                    background: "rgba(99,102,241,0.15)", color: "#818cf8",
                                    border: "1px solid rgba(99,102,241,0.3)"
                                }}>
                                    {qrItems.length} {qrItems.length === 1 ? "item" : "items"}
                                </span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                                <button
                                    onClick={handleLoadExample}
                                    style={{
                                        display: "flex", alignItems: "center", gap: "5px",
                                        padding: "6px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: 600,
                                        background: "transparent", border: "1px solid var(--border)",
                                        color: "var(--text-secondary)", cursor: "pointer", transition: "all 0.2s"
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                                >
                                    <Plus size={12} /> Example
                                </button>
                                <button
                                    onClick={handleClear}
                                    style={{
                                        display: "flex", alignItems: "center", gap: "5px",
                                        padding: "6px 12px", borderRadius: "8px", fontSize: "12px", fontWeight: 600,
                                        background: "transparent", border: "1px solid rgba(239,68,68,0.25)",
                                        color: "rgba(239,68,68,0.7)", cursor: "pointer", transition: "all 0.2s"
                                    }}
                                    onMouseEnter={e => { e.currentTarget.style.color = "rgb(239,68,68)"; }}
                                    onMouseLeave={e => { e.currentTarget.style.color = "rgba(239,68,68,0.7)"; }}
                                >
                                    <Trash2 size={12} /> Clear
                                </button>
                            </div>
                        </div>

                        {/* QR Grid */}
                        <div style={{ padding: "32px 28px", flex: 1, overflowY: "auto" }}>
                            {qrItems.length === 0 ? (
                                <div style={{
                                    minHeight: "360px", display: "flex", flexDirection: "column",
                                    alignItems: "center", justifyContent: "center", textAlign: "center", padding: "32px"
                                }}>
                                    <div style={{
                                        width: "72px", height: "72px", borderRadius: "20px",
                                        background: "var(--bg-secondary)", border: "1px solid var(--border)",
                                        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px"
                                    }}>
                                        <LayoutGrid size={32} color="var(--text-muted)" />
                                    </div>
                                    <h3 style={{ fontSize: "17px", fontWeight: 700, color: "white", marginBottom: "8px" }}>Workspace Empty</h3>
                                    <p style={{ fontSize: "14px", color: "var(--text-secondary)", maxWidth: "300px", lineHeight: 1.6 }}>
                                        Type or paste your data on the left panel and your QR codes will appear here instantly.
                                    </p>
                                </div>
                            ) : (
                                <div style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
                                    gap: "24px"
                                }}>
                                    <AnimatePresence mode="popLayout">
                                        {qrItems.map((item, index) => (
                                            <motion.div
                                                key={`${index}-${item}`}
                                                layout
                                                initial={{ opacity: 0, scale: 0.88 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.88 }}
                                                transition={{ duration: 0.22 }}
                                                style={{
                                                    background: "var(--bg-secondary)",
                                                    border: "1px solid var(--border)",
                                                    borderRadius: "16px",
                                                    padding: "16px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    gap: "12px",
                                                    cursor: "default",
                                                    transition: "border-color 0.2s, box-shadow 0.2s"
                                                }}
                                                onMouseEnter={e => {
                                                    e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
                                                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(99,102,241,0.1)";
                                                }}
                                                onMouseLeave={e => {
                                                    e.currentTarget.style.borderColor = "var(--border)";
                                                    e.currentTarget.style.boxShadow = "none";
                                                }}
                                            >
                                                {/* QR Code — fixed size container */}
                                                <div style={{
                                                    width: "128px", height: "128px",
                                                    background: "white", borderRadius: "10px",
                                                    padding: "8px", flexShrink: 0,
                                                    boxShadow: "0 2px 12px rgba(0,0,0,0.3)"
                                                }}>
                                                    <QRCodeCanvas
                                                        id={`qr-${index}`}
                                                        value={item}
                                                        size={112}
                                                        level={qrLevel}
                                                        bgColor="#ffffff"
                                                        fgColor="#000000"
                                                        includeMargin={false}
                                                    />
                                                </div>

                                                {/* Label */}
                                                <p style={{
                                                    fontSize: "11px", fontWeight: 500, color: "var(--text-secondary)",
                                                    width: "100%", textAlign: "center",
                                                    overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                                                    padding: "0 4px"
                                                }} title={item}>
                                                    {item}
                                                </p>

                                                {/* Action Buttons */}
                                                <div style={{ display: "flex", gap: "6px", width: "100%" }}>
                                                    <button
                                                        onClick={() => copyToClipboard(item, `copy-${index}`)}
                                                        style={{
                                                            flex: 1, padding: "6px 0", borderRadius: "8px",
                                                            fontSize: "11px", fontWeight: 600,
                                                            background: "var(--bg-card)", border: "1px solid var(--border)",
                                                            color: "var(--text-secondary)", cursor: "pointer",
                                                            display: "flex", alignItems: "center", justifyContent: "center", gap: "4px",
                                                            transition: "all 0.2s"
                                                        }}
                                                        onMouseEnter={e => { e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
                                                        onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--border)"; }}
                                                    >
                                                        {copyId === `copy-${index}` ? <Check size={11} color="#4ade80" /> : <Copy size={11} />}
                                                        {copyId === `copy-${index}` ? "Copied" : "Copy"}
                                                    </button>
                                                    <button
                                                        onClick={() => downloadSingleQR(index, item)}
                                                        style={{
                                                            flex: 1, padding: "6px 0", borderRadius: "8px",
                                                            fontSize: "11px", fontWeight: 600,
                                                            background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)",
                                                            color: "#818cf8", cursor: "pointer",
                                                            display: "flex", alignItems: "center", justifyContent: "center", gap: "4px",
                                                            transition: "all 0.2s"
                                                        }}
                                                        onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,102,241,0.3)"; }}
                                                        onMouseLeave={e => { e.currentTarget.style.background = "rgba(99,102,241,0.15)"; }}
                                                    >
                                                        <DownloadCloud size={11} /> Save
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div style={{
                            padding: "14px 28px", borderTop: "1px solid var(--border)",
                            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                            background: "var(--bg-secondary)"
                        }}>
                            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80", animation: "pulse 2s infinite" }} />
                            <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.6px" }}>
                                All data processed locally — never leaves your device
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

                /* Responsive: stack on mobile */
                @media (max-width: 900px) {
                    .bulk-qr-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </main>
    );
}

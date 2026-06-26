"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function BackToTools() {
  const pathname = usePathname();
  // Get the last segment of the pathname as the tool ID
  const toolId = pathname ? pathname.split("/").filter(Boolean).pop() : "";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ marginBottom: "24px" }}>
      <Link
        href="/"
        onClick={() => {
          if (typeof window !== "undefined" && toolId) {
            sessionStorage.setItem("lastActiveTool", toolId);
          }
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ textDecoration: "none", display: "inline-block" }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 16px",
            borderRadius: "10px",
            background: isHovered ? "rgba(255, 255, 255, 0.07)" : "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderColor: isHovered ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.08)",
            color: isHovered ? "var(--text-primary)" : "var(--text-secondary)",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            transform: isHovered ? "translateX(-2px)" : "translateX(0)",
            transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <span
            style={{
              display: "inline-block",
              transform: isHovered ? "translateX(-3px)" : "translateX(0)",
              transition: "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            ←
          </span>
          <span>Back to Tools</span>
        </div>
      </Link>
    </div>
  );
}

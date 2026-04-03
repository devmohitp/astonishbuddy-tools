"use client";
import { useState } from "react";

interface CopyButtonProps {
  textToCopy: string;
  className?: string;
  style?: React.CSSProperties;
  buttonText?: string;
  copiedText?: string;
}

export default function CopyButton({ 
  textToCopy, 
  className = "btn-secondary", 
  style,
  buttonText = "Copy",
  copiedText = "Copied!"
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!textToCopy) return;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      className={className}
      style={{
        ...style,
        backgroundColor: copied ? "#10b981" : undefined,
        color: copied ? "#ffffff" : undefined,
        borderColor: copied ? "#10b981" : undefined,
        transition: "all 0.2s ease"
      }}
      onClick={handleCopy}
    >
      {copied ? copiedText : buttonText}
    </button>
  );
}

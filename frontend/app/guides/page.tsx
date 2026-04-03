"use client";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Guides() {
  const blogPosts = [
    {
      title: "How to use the Image Compressor",
      content:
        "The Image Compressor tool helps you reduce the file size of your images without losing quality. Simply upload your image (JPG, PNG, or WebP), select the desired compression level, and click 'Compress'. Once processed, you can download the optimized image, which is perfect for faster web loading.",
      color: "var(--accent-1)",
      icon: "🖼️",
    },
    {
      title: "How to use the Text Case Converter",
      content:
        "Easily change the capitalization of your text. Paste your text into the input box and choose the desired case format: UPPERCASE, lowercase, Title Case, or camelCase. The tool instantly converts the text, and you can copy the result with a single click.",
      color: "var(--accent-2)",
      icon: "🔤",
    },
    {
      title: "How to use the Password Generator",
      content:
        "Create strong and secure passwords to protect your accounts. You can customize the length of the password and select whether to include uppercase letters, lowercase letters, numbers, and symbols. Click 'Generate' to get a new password and 'Copy' to save it to your clipboard.",
      color: "#ec4899",
      icon: "🔐",
    },
    {
      title: "How to use the JSON Formatter",
      content:
        "The JSON Formatter helps developers format, validate, and minify JSON data. Paste your messy JSON into the editor, and the tool will automatically format it with proper indentation and syntax highlighting. You can also minify it to reduce size or validate its structure.",
      color: "#06b6d4",
      icon: "{ }",
    },
    {
      title: "How to use the Word Counter",
      content:
        "Analyze your text instantly. Type or paste your content into the text area. The Word Counter will automatically display the total number of words, characters, sentences, and paragraphs. It also provides an estimated reading time, making it great for writers and students.",
      color: "#10b981",
      icon: "📊",
    },
    {
      title: "How to use the QR Code Generator",
      content:
        "Generate custom QR codes for your URLs or text. Enter your link or text data into the input field. You can customize the QR code's color and background, as well as its size. Once customized, download the QR code image to use it anywhere.",
      color: "#f59e0b",
      icon: "⬛",
    },
    {
      title: "How to Use the Base64 Encoder / Decoder",
      content:
        "The Base64 Encoder / Decoder tool allows you to quickly convert text into Base64 format or decode Base64 strings back into readable text. This is commonly used in web development, APIs, and data transmission. Steps to Use: 1. Open the tool. 2. Enter or paste the text you want to encode or decode. 3. Click Encode to convert or Decode to convert back. 4. Copy the result instantly.",
      color: "#06b6d4",
      icon: "🔄",
    },
    {
      title: "How to Use the URL Encoder / Decoder",
      content:
        "The URL Encoder / Decoder tool helps convert special characters in URLs into a safe format that can be transmitted over the internet. It also allows you to decode encoded URLs back to their original form. Steps to Use: 1. Open the tool. 2. Paste the URL or text. 3. Click Encode or Decode. 4. Copy the converted result.",
      color: "#3b82f6",
      icon: "🔗",
    },
    {
      title: "How to Use the Lorem Ipsum Generator",
      content:
        "The Lorem Ipsum Generator tool creates placeholder text that designers and developers use when building layouts or prototypes. Steps to Use: 1. Open the tool. 2. Choose the number of paragraphs, sentences, or words you want. 3. Click Generate. 4. Copy the text for your project.",
      color: "#6366f1",
      icon: "📝",
    },
    {
      title: "How to Use the Random Number Generator",
      content:
        "The Random Number Generator tool creates random numbers within a selected range. It is useful for games, giveaways, testing, and research. Steps to Use: 1. Open the tool. 2. Enter the minimum and maximum number for your range. 3. Click Generate to instantly display a random number.",
      color: "#14b8a6",
      icon: "🎲",
    },
    {
      title: "How to Use the Text Sorter",
      content:
        "The Text Sorter tool helps organize lines of text in alphabetical or reverse alphabetical order. This is helpful when working with lists, names, or large text data. Steps to Use: 1. Open the tool. 2. Paste the text. 3. Select A-Z or Z-A. 4. Click Sort Text and copy the result.",
      color: "#8b5cf6",
      icon: "🔤",
    },
    {
      title: "How to Use the Color Code Converter",
      content:
        "The Color Code Converter tool helps convert colors between different formats used in web design such as HEX, RGB, and HSL. Steps to Use: 1. Open the tool. 2. Enter a color value. 3. The tool automatically converts it. 4. Copy the converted format you need.",
      color: "#f43f5e",
      icon: "🎨",
    }
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <div style={{ flex: 1, padding: "60px 24px", maxWidth: "900px", margin: "0 auto", width: "100%" }}>
        <h1 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "20px", textAlign: "center" }}>
          Guides
        </h1>
        <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "18px", marginBottom: "60px" }}>
          Learn how to get the most out of our free online tools.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {blogPosts.map((post, index) => (
            <article
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "30px",
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "16px",
                  background: `linear-gradient(135deg, ${post.color}22, ${post.color}44)`,
                  border: `1px solid ${post.color}33`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "26px",
                  flexShrink: 0,
                }}
              >
                {post.icon}
              </div>
              <div>
                <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "16px", color: post.color }}>
                  {post.title}
                </h2>
                <p style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  {post.content}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

"use client";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Blog() {
  const blogPosts = [
    {
      title: "1. Best Free Online Tools for Students",
      content: (
        <>
          <p style={{ marginBottom: "10px" }}>Students today rely heavily on digital tools to complete assignments, manage notes, and improve productivity. Free online tools provide quick solutions without requiring expensive software or installations.</p>
          <p style={{ marginBottom: "10px" }}>One of the biggest advantages of online tools is accessibility. Students can access them from any device with an internet connection. Whether using a laptop, tablet, or smartphone, these tools help simplify daily tasks.</p>
          <p style={{ marginBottom: "10px" }}>Some of the most useful tools for students include word counters, text formatters, password generators, and QR code generators. Word counters help students track essay length, while text formatters make editing easier. Password generators help create secure passwords for online accounts.</p>
          <p style={{ marginBottom: "10px" }}>Another important category is image tools. Students often need to compress or resize images for presentations or assignments. Online image compressors help reduce file sizes while maintaining quality.</p>
          <p style={{ marginBottom: "10px" }}>Free online tools save time and improve efficiency. Instead of installing multiple applications, students can simply open a browser and start working instantly.</p>
          <p style={{ marginBottom: "10px" }}>As education becomes increasingly digital, free online tools will continue to play an important role in helping students stay organized and productive.</p>
        </>
      ),
      color: "var(--accent-1)",
    },
    {
      title: "2. Top Online Productivity Tools",
      content: (
        <>
          <p style={{ marginBottom: "10px" }}>Online productivity tools help individuals complete tasks faster and more efficiently. These tools are designed to simplify everyday digital work and eliminate the need for complex software.</p>
          <p style={{ marginBottom: "10px" }}>Many productivity tools are browser-based, meaning they can be accessed instantly without downloads or installations. This makes them convenient for professionals, students, and content creators.</p>
          <p style={{ marginBottom: "10px" }}>Text tools are among the most commonly used productivity utilities. These tools help format text, count words, convert text cases, and clean up formatting issues.</p>
          <p style={{ marginBottom: "10px" }}>Another popular category is password generators. Strong passwords are essential for protecting online accounts, and password generator tools make it easy to create secure combinations instantly.</p>
          <p style={{ marginBottom: "10px" }}>QR code generators are also widely used for sharing links, contact details, and business information quickly. Businesses and individuals use them for marketing and communication.</p>
          <p style={{ marginBottom: "10px" }}>Using online productivity tools can greatly improve efficiency and reduce the time spent on repetitive tasks.</p>
        </>
      ),
      color: "var(--accent-2)",
    },
    {
      title: "3. Why Online Tools Are Better Than Traditional Software",
      content: (
        <>
          <p style={{ marginBottom: "10px" }}>Traditional software often requires installation, updates, and system storage. Online tools, on the other hand, work directly in a web browser and can be used instantly.</p>
          <p style={{ marginBottom: "10px" }}>One of the biggest advantages of online tools is convenience. Users can access them from any device with an internet connection. There is no need to install large programs or worry about system compatibility.</p>
          <p style={{ marginBottom: "10px" }}>Online tools are also regularly updated by developers. This means users always access the latest version without needing manual updates.</p>
          <p style={{ marginBottom: "10px" }}>Another important benefit is storage. Since online tools run in the browser, they do not consume storage space on your device.</p>
          <p style={{ marginBottom: "10px" }}>Many modern online tools also process data locally in the browser, which helps protect user privacy and ensures faster processing speeds.</p>
          <p style={{ marginBottom: "10px" }}>As technology continues to evolve, online tools are becoming a preferred alternative to traditional desktop software.</p>
        </>
      ),
      color: "#ec4899",
    },
    {
      title: "4. Benefits of Using Online File Conversion Tools",
      content: (
        <>
          <p style={{ marginBottom: "10px" }}>File conversion tools are extremely useful for people who need to change files from one format to another. These tools allow users to convert files quickly without installing specialized software.</p>
          <p style={{ marginBottom: "10px" }}>Online file converters are simple to use. Users typically upload a file, choose the desired format, and download the converted file within seconds.</p>
          <p style={{ marginBottom: "10px" }}>These tools are helpful for many types of files, including images, documents, and text formats. For example, image converters can transform PNG files into JPG files, while document converters can change file formats for compatibility.</p>
          <p style={{ marginBottom: "10px" }}>One of the biggest advantages of online converters is accessibility. Users can convert files from any device without installing additional programs.</p>
          <p style={{ marginBottom: "10px" }}>Online converters save time and make digital workflows much more efficient.</p>
        </>
      ),
      color: "#06b6d4",
    },
    {
      title: "5. How to Create Strong Passwords Online",
      content: (
        <>
          <p style={{ marginBottom: "10px" }}>Strong passwords are essential for protecting online accounts and personal information. Weak passwords can easily be guessed by attackers, which can lead to security breaches.</p>
          <p style={{ marginBottom: "10px" }}>A strong password usually includes a combination of uppercase letters, lowercase letters, numbers, and special characters. It should also be long enough to prevent easy guessing.</p>
          <p style={{ marginBottom: "10px" }}>Password generator tools make it easy to create secure passwords instantly. These tools automatically generate random password combinations that are difficult to crack.</p>
          <p style={{ marginBottom: "10px" }}>Using different passwords for different accounts is also important. If one account becomes compromised, other accounts remain protected.</p>
          <p style={{ marginBottom: "10px" }}>Online password generators are a simple and effective way to improve online security.</p>
        </>
      ),
      color: "#10b981",
    },
    {
      title: "6. Base64 Encoder / Decoder",
      content: (
        <>
          <p style={{ marginBottom: "10px" }}><strong>What is a Base64 Encoder / Decoder?</strong></p>
          <p style={{ marginBottom: "10px" }}>A Base64 Encoder / Decoder is a useful tool that converts text or binary data into Base64 format and allows you to decode Base64 back into readable text. Base64 encoding is commonly used in web development, data transmission, and APIs to safely send data through systems that only support text.</p>
          <p style={{ marginBottom: "10px" }}>Developers often use Base64 encoding when embedding images in HTML, sending data through JSON, or working with authentication tokens. The encoding process transforms data into a text format that can be safely transmitted over the internet.</p>
          <p style={{ marginBottom: "10px" }}>Our Base64 Encoder / Decoder tool allows users to instantly encode text into Base64 format or decode Base64 strings back to their original content. The process is fast, secure, and works directly in your browser.</p>
          <p style={{ marginBottom: "10px" }}>This tool is especially helpful for developers, programmers, and anyone working with encoded data.</p>
        </>
      ),
      color: "#06b6d4",
    },
    {
      title: "7. URL Encoder / Decoder",
      content: (
        <>
          <p style={{ marginBottom: "10px" }}><strong>What is a URL Encoder / Decoder?</strong></p>
          <p style={{ marginBottom: "10px" }}>A URL Encoder / Decoder helps convert special characters in a URL into a format that can be safely transmitted over the internet. Some characters such as spaces, symbols, and punctuation marks are not allowed in URLs and must be encoded.</p>
          <p style={{ marginBottom: "10px" }}>URL encoding replaces unsafe characters with a percent (%) symbol followed by their hexadecimal value. This ensures that URLs remain valid and can be processed correctly by web servers and browsers.</p>
          <p style={{ marginBottom: "10px" }}>Our URL Encoder / Decoder tool allows you to quickly encode URLs for safe transmission or decode encoded URLs back into readable format.</p>
          <p style={{ marginBottom: "10px" }}>This tool is especially useful for developers, marketers, and anyone working with web links or query parameters.</p>
        </>
      ),
      color: "#3b82f6",
    },
    {
      title: "8. Lorem Ipsum Generator",
      content: (
        <>
          <p style={{ marginBottom: "10px" }}><strong>What is a Lorem Ipsum Generator?</strong></p>
          <p style={{ marginBottom: "10px" }}>Lorem Ipsum is placeholder text commonly used in web design, graphic design, and publishing. It allows designers and developers to focus on layout and visual design without being distracted by meaningful content.</p>
          <p style={{ marginBottom: "10px" }}>A Lorem Ipsum Generator quickly creates paragraphs of placeholder text that mimic the structure of natural language. This makes it perfect for testing layouts, building prototypes, or designing templates.</p>
          <p style={{ marginBottom: "10px" }}>Our Lorem Ipsum Generator allows you to instantly generate custom amounts of placeholder text for your projects. You can create paragraphs, sentences, or words depending on your needs.</p>
          <p style={{ marginBottom: "10px" }}>This tool is widely used by web designers, developers, content creators, and UI designers.</p>
        </>
      ),
      color: "#6366f1",
    },
    {
      title: "9. Random Number Generator",
      content: (
        <>
          <p style={{ marginBottom: "10px" }}><strong>What is a Random Number Generator?</strong></p>
          <p style={{ marginBottom: "10px" }}>A Random Number Generator is a simple but powerful tool that creates random numbers within a specified range. These numbers are generated automatically and cannot be predicted.</p>
          <p style={{ marginBottom: "10px" }}>Random numbers are commonly used in games, statistics, programming, research, and decision-making processes. For example, they can be used to select winners in giveaways, generate test data, or simulate random events.</p>
          <p style={{ marginBottom: "10px" }}>Our Random Number Generator allows users to easily generate random numbers by choosing a minimum and maximum range. The tool instantly produces a number within the selected range.</p>
          <p style={{ marginBottom: "10px" }}>This tool is helpful for students, developers, researchers, and anyone who needs quick random values.</p>
        </>
      ),
      color: "#14b8a6",
    },
    {
      title: "10. Text Sorter",
      content: (
        <>
          <p style={{ marginBottom: "10px" }}><strong>What is a Text Sorter?</strong></p>
          <p style={{ marginBottom: "10px" }}>A Text Sorter is a helpful utility that organizes lines of text in alphabetical or numerical order. This tool is especially useful when working with large lists of data that need to be arranged clearly.</p>
          <p style={{ marginBottom: "10px" }}>Instead of manually sorting lines of text, the Text Sorter automatically organizes them in seconds. Users can sort text in ascending order (A–Z) or descending order (Z–A).</p>
          <p style={{ marginBottom: "10px" }}>Our Text Sorter tool allows users to quickly paste text and sort it instantly. It can also help clean up data and organize lists efficiently.</p>
          <p style={{ marginBottom: "10px" }}>This tool is useful for developers, writers, data analysts, and anyone managing large text lists.</p>
        </>
      ),
      color: "#8b5cf6",
    },
    {
      title: "11. Color Code Converter",
      content: (
        <>
          <p style={{ marginBottom: "10px" }}><strong>What is a Color Code Converter?</strong></p>
          <p style={{ marginBottom: "10px" }}>A Color Code Converter helps convert colors between different formats used in web design and development. The most common color formats include HEX, RGB, and HSL.</p>
          <p style={{ marginBottom: "10px" }}>Designers and developers often need to convert color values when working with CSS, design tools, or graphics software. A Color Code Converter makes this process quick and easy.</p>
          <p style={{ marginBottom: "10px" }}>Our Color Code Converter allows users to instantly convert color values between HEX, RGB, and HSL formats. This helps maintain consistency in design projects and web applications.</p>
          <p style={{ marginBottom: "10px" }}>This tool is widely used by web designers, UI developers, and graphic designers.</p>
        </>
      ),
      color: "#f43f5e",
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
          Blog
        </h1>
        <p style={{ textAlign: "center", color: "var(--text-secondary)", fontSize: "18px", marginBottom: "60px" }}>
          Read the latest articles and tips on using online tools.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {blogPosts.map((post, index) => (
            <article
              key={index}
              style={{
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid var(--border)",
                borderLeft: `4px solid ${post.color}`,
                borderRadius: "16px",
                padding: "30px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div>
                <h2 style={{ fontSize: "24px", fontWeight: 700, marginBottom: "20px", color: post.color }}>
                  {post.title}
                </h2>
                <div style={{ fontSize: "16px", color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  {post.content}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}

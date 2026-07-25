"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { parseMarkdownToHTML } from "../utils/markdown";

// Accent options matching the site's variables
const ACCENTS = [
  { name: "Violet", color: "var(--accent-1)", value: "#6c63ff" },
  { name: "Magenta", color: "var(--accent-3)", value: "#ec4899" },
  { name: "Cyan", color: "var(--accent-4)", value: "#06b6d4" },
  { name: "Emerald", color: "var(--accent-5)", value: "#10b981" },
  { name: "Orange", color: "var(--accent-6)", value: "#f59e0b" },
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  // Form states
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [isSlugManual, setIsSlugManual] = useState(false);
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("AstonishBuddy Team");
  const [color, setColor] = useState("var(--accent-1)");
  const [image, setImage] = useState("");

  // Upload states
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Tab state: "write" | "preview" | "manage"
  const [activeTab, setActiveTab] = useState<"write" | "preview" | "manage">("write");

  // List & CRUD states
  const [allPosts, setAllPosts] = useState<any[]>([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Edit mode state
  const [editMode, setEditMode] = useState(false);
  const [originalSlug, setOriginalSlug] = useState("");

  const fetchPosts = async () => {
    setIsLoadingPosts(true);
    try {
      const res = await fetch("/api/admin/posts");
      const data = await res.json();
      if (data.success) {
        setAllPosts(data.posts || []);
      }
    } catch (e) {
      console.error("Failed to fetch posts:", e);
    } finally {
      setIsLoadingPosts(false);
    }
  };

  // Fetch posts when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchPosts();
    }
  }, [isAuthenticated]);

  // Submit states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Textarea reference for inserting tags
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Word count state
  const [wordCount, setWordCount] = useState(0);

  // Check auth on load
  useEffect(() => {
    const isAuth = localStorage.getItem("astonish_admin_auth") === "true";
    if (isAuth) {
      setIsAuthenticated(true);
    }
  }, []);

  // Update slug when title changes (if manual mode is off)
  useEffect(() => {
    if (!isSlugManual) {
      const generatedSlug = title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "") // remove non-word chars
        .replace(/[\s_-]+/g, "-") // replace spaces and underscores with -
        .replace(/^-+|-+$/g, ""); // trim leading/trailing -
      setSlug(generatedSlug);
    }
  }, [title, isSlugManual]);

  // Recalculate word count
  useEffect(() => {
    const words = content.trim().split(/\s+/).filter((w) => w.length > 0).length;
    setWordCount(words);
  }, [content]);

  // Handle password auth
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Mohit@1410") {
      setIsAuthenticated(true);
      localStorage.setItem("astonish_admin_auth", "true");
      setAuthError("");
    } else {
      setAuthError("Incorrect access code. Try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("astonish_admin_auth");
    setPassword("");
  };

  // Trigger Edit mode
  const handleEdit = (post: any) => {
    setTitle(post.title || "");
    setSlug(post.slug || "");
    setDescription(post.description || "");
    setContent(post.content || "");
    setAuthor(post.author || "AstonishBuddy Team");
    setColor(post.color || "var(--accent-1)");
    setImage(post.image || "");
    
    setOriginalSlug(post.slug || "");
    setIsSlugManual(true);
    setEditMode(true);
    setSubmitSuccess(false);
    setSubmitError("");
    
    // Switch to Write tab
    setActiveTab("write");
  };

  // Cancel Edit mode
  const handleCancelEdit = () => {
    setTitle("");
    setSlug("");
    setDescription("");
    setContent("");
    setAuthor("AstonishBuddy Team");
    setColor("var(--accent-1)");
    setImage("");
    
    setOriginalSlug("");
    setIsSlugManual(false);
    setEditMode(false);
    setSubmitSuccess(false);
    setSubmitError("");
    
    setActiveTab("manage");
  };

  // Trigger Delete post
  const handleDelete = async (slugToDelete: string) => {
    if (!confirm("Are you sure you want to delete this blog post? This action cannot be undone.")) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/posts?slug=${slugToDelete}`, {
        method: "DELETE",
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to delete post.");
      }

      // Refresh list
      await fetchPosts();
      
      // If we deleted the post we were currently editing
      if (editMode && originalSlug === slugToDelete) {
        handleCancelEdit();
      }
    } catch (err: any) {
      alert(err.message || "An error occurred while deleting the post.");
    }
  };

  // Helper to insert HTML tags in textarea
  const insertHTMLTag = (tagType: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);

    let replacement = "";
    switch (tagType) {
      case "p":
        replacement = `<p style="marginBottom: '16px';">${selectedText || "Paragraph text"}</p>\n`;
        break;
      case "h2":
        replacement = `<h2 style="fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px', marginTop: '32px';">${selectedText || "Heading 2"}</h2>\n`;
        break;
      case "h3":
        replacement = `<h3 style="fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px', marginTop: '20px';">${selectedText || "Heading 3"}</h3>\n`;
        break;
      case "bold":
        replacement = `<strong>${selectedText || "bold text"}</strong>`;
        break;
      case "italic":
        replacement = `<em>${selectedText || "italic text"}</em>`;
        break;
      case "list":
        replacement = `<ul style="paddingLeft: '20px', marginBottom: '16px';">\n  <li style="marginBottom: '4px';">${selectedText || "Item 1"}</li>\n  <li style="marginBottom: '4px';">Item 2</li>\n</ul>\n`;
        break;
      default:
        return;
    }

    const newContent = text.substring(0, start) + replacement + text.substring(end);
    setContent(newContent);

    // Reset cursor position
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + replacement.length, start + replacement.length);
    }, 0);
  };

  // Handle Cover Image Upload
  const handleImageUpload = async (file: File) => {
    if (!file) return;

    // Validate type
    if (!file.type.startsWith("image/")) {
      setUploadError("Only image files are allowed.");
      return;
    }

    setIsUploading(true);
    setUploadError("");
    setUploadProgress(10);

    const interval = setInterval(() => {
      setUploadProgress((prev) => (prev < 90 ? prev + 15 : prev));
    }, 150);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });

      clearInterval(interval);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to upload image.");
      }

      setUploadProgress(100);
      setImage(data.url);
    } catch (err: any) {
      clearInterval(interval);
      setUploadError(err.message || "An error occurred during upload.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleImageUpload(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleImageUpload(files[0]);
    }
  };

  const handleRemoveImage = () => {
    setImage("");
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Submit Blog Post
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    if (!title.trim() || !slug.trim() || !description.trim() || !content.trim()) {
      setSubmitError("All primary fields (Title, Slug, Description, Content) are required.");
      setIsSubmitting(false);
      return;
    }

    if (wordCount > 2000) {
      setSubmitError("Content exceeds the maximum word limit of 2000 words.");
      setIsSubmitting(false);
      return;
    }

    try {
      const payload: any = {
        title,
        slug,
        description,
        content,
        author,
        color,
        image,
      };

      if (editMode) {
        payload.originalSlug = originalSlug;
      }

      const response = await fetch("/api/admin/posts", {
        method: editMode ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save blog post.");
      }

      setSubmitSuccess(true);
      
      // Reset form
      setTitle("");
      setSlug("");
      setDescription("");
      setContent("");
      setImage("");
      setIsSlugManual(false);
      
      if (editMode) {
        setEditMode(false);
        setOriginalSlug("");
      }

      // Refresh posts
      await fetchPosts();
      
      // Go to manage tab
      setActiveTab("manage");
    } catch (err: any) {
      setSubmitError(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // If not authenticated, render standard elegant login gate
  if (!isAuthenticated) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "var(--bg-primary)",
          color: "var(--text-primary)",
          fontFamily: "var(--font-inter), Inter, sans-serif",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow Effects */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, var(--glow-purple) 0%, transparent 65%)",
            zIndex: 0,
            pointerEvents: "none",
            opacity: 0.6,
          }}
        />

        <div
          className="glass-card animate-fade-in"
          style={{
            width: "100%",
            maxWidth: "420px",
            padding: "40px 32px",
            zIndex: 1,
            position: "relative",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              color: "#fff",
              margin: "0 auto 24px",
              boxShadow: "0 10px 20px rgba(108, 99, 255, 0.3)",
            }}
          >
            🔒
          </div>

          <h1
            style={{
              fontSize: "24px",
              fontWeight: 800,
              fontFamily: "var(--font-outfit), Outfit, sans-serif",
              marginBottom: "8px",
            }}
          >
            Admin Verification
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "14px",
              marginBottom: "32px",
            }}
          >
            Please enter your authorization code to proceed.
          </p>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label className="label">Access Code</label>
              <input
                type="password"
                className="input-field"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ textAlign: "center", letterSpacing: "2px" }}
                required
              />
            </div>

            {authError && (
              <div
                style={{
                  color: "#ef4444",
                  fontSize: "13px",
                  fontWeight: 500,
                  marginBottom: "20px",
                  background: "rgba(239, 68, 68, 0.1)",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid rgba(239, 68, 68, 0.2)",
                }}
              >
                ⚠️ {authError}
              </div>
            )}

            <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Unlock Dashboard
            </button>
          </form>
        </div>
      </main>
    );
  }

  // Dashboard UI
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-inter), Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      {/* Header section */}
      <section
        style={{
          padding: "50px 24px 30px",
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid var(--border)",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              background: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.2)",
              color: "var(--accent-5)",
              fontSize: "12px",
              fontWeight: 700,
              padding: "4px 10px",
              borderRadius: "999px",
              marginBottom: "8px",
              textTransform: "uppercase",
            }}
          >
            ● Admin Connected
          </span>
          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
              fontWeight: 900,
              fontFamily: "var(--font-outfit), Outfit, sans-serif",
            }}
          >
            Create New Blog Post
          </h1>
        </div>

        <button onClick={handleLogout} className="btn-secondary" style={{ padding: "8px 16px", fontSize: "13px" }}>
          Sign Out Dashboard
        </button>
      </section>

      {/* Main Panel */}
      <section
        style={{
          flex: 1,
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          padding: "30px 24px 80px",
        }}
      >
        {/* Toggle tabs */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "30px",
            background: "rgba(255,255,255,0.03)",
            padding: "4px",
            borderRadius: "12px",
            border: "1px solid var(--border)",
            width: "fit-content",
          }}
        >
          <button
            onClick={() => setActiveTab("write")}
            style={{
              background: activeTab === "write" ? "var(--bg-card)" : "transparent",
              color: activeTab === "write" ? "var(--text-primary)" : "var(--text-secondary)",
              border: activeTab === "write" ? "1px solid var(--border-hover)" : "1px solid transparent",
              padding: "8px 20px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            ✏️ {editMode ? "Edit Post" : "Write Post"}
          </button>
          <button
            onClick={() => setActiveTab("preview")}
            style={{
              background: activeTab === "preview" ? "var(--bg-card)" : "transparent",
              color: activeTab === "preview" ? "var(--text-primary)" : "var(--text-secondary)",
              border: activeTab === "preview" ? "1px solid var(--border-hover)" : "1px solid transparent",
              padding: "8px 20px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            👁️ Live Preview
          </button>
          <button
            onClick={() => setActiveTab("manage")}
            style={{
              background: activeTab === "manage" ? "var(--bg-card)" : "transparent",
              color: activeTab === "manage" ? "var(--text-primary)" : "var(--text-secondary)",
              border: activeTab === "manage" ? "1px solid var(--border-hover)" : "1px solid transparent",
              padding: "8px 20px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            📋 Manage Posts
          </button>
        </div>

        {activeTab === "write" ? (
          /* Form tab */
          <form onSubmit={handleSubmit} className="animate-fade-in" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "32px" }}>

            {/* Left side: Body content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

              {/* Title input */}
              <div className="tool-section">
                <label className="label">Blog Title</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="e.g. 15 Hidden Features of Image Compressors to Speed Up Web Loading"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ fontSize: "16px", fontWeight: 600 }}
                  required
                />
              </div>

              {/* Description */}
              <div className="tool-section">
                <label className="label">Short Description (SEO Search Snippet)</label>
                <textarea
                  className="input-field"
                  placeholder="Summarize your blog post in 2-3 sentences. This appears on listing cards and search engine results."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  style={{ fontFamily: "inherit", minHeight: "80px" }}
                  required
                />
              </div>

              {/* Blog content editor */}
              <div className="tool-section" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                  <label className="label" style={{ margin: 0 }}>
                    Blog Content (HTML Format)
                  </label>

                  {/* Toolbar */}
                  <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
                    <button
                      type="button"
                      onClick={() => insertHTMLTag("p")}
                      title="Insert Paragraph Tag"
                      style={{ padding: "4px 8px", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "4px", fontSize: "12px", color: "var(--text-primary)", cursor: "pointer" }}
                    >
                      P
                    </button>
                    <button
                      type="button"
                      onClick={() => insertHTMLTag("h2")}
                      title="Insert Heading 2"
                      style={{ padding: "4px 8px", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "4px", fontSize: "12px", color: "var(--text-primary)", cursor: "pointer", fontWeight: "bold" }}
                    >
                      H2
                    </button>
                    <button
                      type="button"
                      onClick={() => insertHTMLTag("h3")}
                      title="Insert Heading 3"
                      style={{ padding: "4px 8px", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "4px", fontSize: "12px", color: "var(--text-primary)", cursor: "pointer", fontWeight: "bold" }}
                    >
                      H3
                    </button>
                    <button
                      type="button"
                      onClick={() => insertHTMLTag("bold")}
                      title="Make Text Bold"
                      style={{ padding: "4px 8px", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "4px", fontSize: "12px", color: "var(--text-primary)", cursor: "pointer", fontWeight: "bold" }}
                    >
                      B
                    </button>
                    <button
                      type="button"
                      onClick={() => insertHTMLTag("italic")}
                      title="Make Text Italic"
                      style={{ padding: "4px 8px", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "4px", fontSize: "12px", color: "var(--text-primary)", cursor: "pointer", fontStyle: "italic" }}
                    >
                      I
                    </button>
                    <button
                      type="button"
                      onClick={() => insertHTMLTag("list")}
                      title="Insert Unordered List"
                      style={{ padding: "4px 8px", background: "var(--bg-secondary)", border: "1px solid var(--border)", borderRadius: "4px", fontSize: "12px", color: "var(--text-primary)", cursor: "pointer" }}
                    >
                      List
                    </button>
                  </div>
                </div>

                <textarea
                  ref={textareaRef}
                  className="input-field"
                  placeholder='Use HTML tags or the formatting helpers above to write your blog content. E.g. <p style="marginBottom: 16px">This is a paragraph.</p>'
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  style={{
                    fontFamily: "'Courier New', Courier, monospace",
                    minHeight: "420px",
                    lineHeight: "1.6",
                    fontSize: "14px",
                  }}
                  required
                />

                {/* Live word counter */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "13px", marginTop: "4px" }}>
                  <span style={{ color: "var(--text-secondary)" }}>
                    Use the helper buttons to format headings, paragraphs, and list blocks easily.
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span
                      style={{
                        fontWeight: 700,
                        color: wordCount > 2000 ? "#ef4444" : wordCount > 1800 ? "#f59e0b" : "var(--accent-5)",
                      }}
                    >
                      {wordCount} / 2000 words
                    </span>
                    {wordCount > 2000 && (
                      <span style={{ color: "#ef4444", fontSize: "11px", fontWeight: "600" }}>
                        ⚠️ Exceeded limit!
                      </span>
                    )}
                  </div>
                </div>

                {/* Visual word count progress bar */}
                <div style={{ width: "100%", height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", overflow: "hidden" }}>
                  <div
                    style={{
                      width: `${Math.min((wordCount / 2000) * 100, 100)}%`,
                      height: "100%",
                      background: wordCount > 2000 ? "#ef4444" : wordCount > 1800 ? "#f59e0b" : "linear-gradient(90deg, var(--accent-1), var(--accent-5))",
                      transition: "width 0.2s ease",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Right side: Metadata, Image, Color */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

              {/* Cover Image Upload */}
              <div className="tool-section">
                <label className="label">Cover Image</label>

                {image ? (
                  /* Image Preview */
                  <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden", border: "1px solid var(--border)", marginBottom: "12px" }}>
                    <img src={image} alt="Cover Preview" style={{ width: "100%", height: "160px", objectFit: "cover" }} />
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "8px",
                        background: "rgba(0,0,0,0.6)",
                        color: "#fff",
                        border: "none",
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: "bold",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#ef4444")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.6)")}
                    >
                      ✕
                    </button>
                    <div style={{ padding: "8px 12px", background: "var(--bg-secondary)", fontSize: "11px", color: "var(--text-secondary)", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap" }}>
                      {image}
                    </div>
                  </div>
                ) : (
                  /* Uploader Uploader area */
                  <div
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                      border: "2px dashed var(--border)",
                      borderRadius: "12px",
                      padding: "30px 16px",
                      textAlign: "center",
                      cursor: "pointer",
                      background: "rgba(255,255,255,0.01)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--accent-1)";
                      e.currentTarget.style.background = "rgba(108, 99, 255, 0.02)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.01)";
                    }}
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>🖼️</div>
                    <p style={{ fontSize: "13px", fontWeight: 600, marginBottom: "4px" }}>
                      Drag & drop image here
                    </p>
                    <p style={{ fontSize: "11px", color: "var(--text-secondary)" }}>
                      or click to browse local files
                    </p>

                    {isUploading && (
                      <div style={{ marginTop: "12px" }}>
                        <div style={{ fontSize: "11px", color: "var(--accent-1)", marginBottom: "4px", fontWeight: 600 }}>
                          Uploading ({uploadProgress}%)
                        </div>
                        <div style={{ width: "100%", height: "3px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", overflow: "hidden" }}>
                          <div style={{ width: `${uploadProgress}%`, height: "100%", background: "var(--accent-1)", transition: "width 0.1s ease" }} />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {uploadError && (
                  <div style={{ color: "#ef4444", fontSize: "11px", marginTop: "8px", fontWeight: 500 }}>
                    ⚠️ {uploadError}
                  </div>
                )}
              </div>

              {/* Slug customization */}
              <div className="tool-section">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <label className="label" style={{ margin: 0 }}>Blog Slug (URL Path)</label>
                  <button
                    type="button"
                    onClick={() => setIsSlugManual(!isSlugManual)}
                    style={{ background: "transparent", border: "none", color: "var(--accent-1)", fontSize: "11px", cursor: "pointer", fontWeight: 600 }}
                  >
                    {isSlugManual ? "🔗 Auto Gen" : "✏️ Custom"}
                  </button>
                </div>
                <input
                  type="text"
                  className="input-field"
                  placeholder="best-free-online-tools"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-"))}
                  disabled={!isSlugManual}
                  style={{ opacity: isSlugManual ? 1 : 0.7 }}
                  required
                />
              </div>

              {/* Author name */}
              <div className="tool-section">
                <label className="label">Author Name</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="AstonishBuddy Team"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                />
              </div>

              {/* Color Scheme Picker */}
              <div className="tool-section">
                <label className="label">Color Scheme Accent</label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px", marginTop: "8px" }}>
                  {ACCENTS.map((acc) => (
                    <button
                      key={acc.name}
                      type="button"
                      onClick={() => setColor(acc.color)}
                      style={{
                        height: "40px",
                        borderRadius: "8px",
                        background: acc.value,
                        border: color === acc.color ? "3px solid #fff" : "1px solid rgba(0,0,0,0.3)",
                        cursor: "pointer",
                        boxShadow: color === acc.color ? `0 0 10px ${acc.value}` : "none",
                        transition: "all 0.2s ease",
                      }}
                      title={acc.name}
                    />
                  ))}
                </div>
              </div>

              {/* Error displaying & Success notifications */}
              {submitError && (
                <div
                  style={{
                    color: "#ef4444",
                    fontSize: "13px",
                    fontWeight: 500,
                    background: "rgba(239, 68, 68, 0.1)",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid rgba(239, 68, 68, 0.2)",
                  }}
                >
                  ⚠️ {submitError}
                </div>
              )}

              {submitSuccess && (
                <div
                  style={{
                    color: "#10b981",
                    fontSize: "13px",
                    fontWeight: 600,
                    background: "rgba(16, 185, 129, 0.1)",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid rgba(16, 185, 129, 0.2)",
                    textAlign: "center",
                  }}
                >
                  🎉 Blog post published successfully! It is now live on the site.
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting || wordCount > 2000}
                className="btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  padding: "16px",
                  fontSize: "16px",
                  opacity: (isSubmitting || wordCount > 2000) ? 0.6 : 1,
                  cursor: (isSubmitting || wordCount > 2000) ? "not-allowed" : "pointer",
                }}
              >
                {editMode ? (isSubmitting ? "Updating..." : "💾 Update Blog Post") : (isSubmitting ? "Publishing..." : "🚀 Publish Blog Post")}
              </button>

              {editMode && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="btn-secondary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "12px",
                    fontSize: "14px",
                    marginTop: "12px",
                    borderColor: "rgba(239, 68, 68, 0.4)",
                    color: "#ef4444",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(239, 68, 68, 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--bg-card-hover)";
                  }}
                >
                  ✕ Cancel Edit
                </button>
              )}

              {/* List / Manage button underneath Publish */}
              {!editMode && (
                <button
                  type="button"
                  onClick={() => setActiveTab("manage")}
                  className="btn-secondary"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "12px",
                    fontSize: "14px",
                    marginTop: "12px",
                    gap: "8px",
                  }}
                >
                  📋 Manage Published Blogs
                </button>
              )}

            </div>
          </form>
        ) : activeTab === "preview" ? (
          /* Preview Tab: Renders the blog detail layout */
          <div className="animate-fade-in" style={{ background: "var(--bg-secondary)", borderRadius: "24px", border: "1px solid var(--border)", overflow: "hidden" }}>

            {/* mock detail header */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "360px",
                background: "rgba(255,255,255,0.02)",
                display: "flex",
                alignItems: "flex-end",
                overflow: "hidden",
              }}
            >
              {image && (
                <img
                  src={image}
                  alt={title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                  }}
                />
              )}
              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to bottom, rgba(10,10,15,0.3) 0%, rgba(10,10,15,0.0) 40%, rgba(10,10,15,0.95) 100%)",
                  zIndex: 1,
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  padding: "32px",
                  maxWidth: "800px",
                  width: "100%",
                  margin: "0 auto",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: `${color}22`,
                    border: `1px solid ${color}55`,
                    color: color,
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: "999px",
                    marginBottom: "12px",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  Preview mode
                </div>
                <h1
                  style={{
                    fontSize: "clamp(1.6rem, 3.5vw, 2.3rem)",
                    fontWeight: 900,
                    color: "#fff",
                    lineHeight: 1.25,
                    fontFamily: "var(--font-outfit), Outfit, sans-serif",
                    textShadow: "0 2px 20px rgba(0,0,0,0.7)",
                  }}
                >
                  {title || "Unfinished Blog Title"}
                </h1>
              </div>
            </div>

            {/* Mock meta and description callout */}
            <div style={{ maxWidth: "800px", margin: "0 auto", padding: "30px 24px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "16px",
                  marginBottom: "30px",
                  fontSize: "13px",
                  color: "var(--text-secondary)",
                }}
              >
                <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>👤 {author}</span>
                <span>📅 {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                <span style={{ marginLeft: "auto", color: "var(--text-muted)" }}>Slug: /{slug}</span>
              </div>

              {description && (
                <div
                  style={{
                    background: `${color}0d`,
                    border: `1px solid ${color}33`,
                    borderLeft: `4px solid ${color}`,
                    borderRadius: "12px",
                    padding: "20px 24px",
                    marginBottom: "40px",
                    fontSize: "15px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}
                >
                  {description}
                </div>
              )}

              {/* Simulated render details */}
              <div
                className="blog-content"
                style={{
                  fontSize: "16px",
                  lineHeight: "1.85",
                  color: "var(--text-secondary)",
                  minHeight: "200px",
                }}
              >
                {content ? (
                  <div dangerouslySetInnerHTML={{ __html: parseMarkdownToHTML(content) }} />
                ) : (
                  <p style={{ fontStyle: "italic", color: "var(--text-muted)" }}>
                    No body content written yet.
                  </p>
                )}
              </div>
            </div>

          </div>
        ) : (
          /* Manage Tab: Blog list with search and pagination */
          <div className="animate-fade-in" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Search and summary card */}
            <div className="tool-section" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: "280px" }}>
                <label className="label">Search Blogs</label>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="🔍 Search blogs by title..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1); // reset page on search
                    }}
                  />
                </div>
              </div>
              <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", borderRadius: "12px", padding: "12px 20px", display: "flex", gap: "24px" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>Total Blogs</div>
                  <div style={{ fontSize: "20px", fontWeight: 800 }}>{allPosts.length}</div>
                </div>
                <div style={{ borderLeft: "1px solid var(--border)" }} />
                <div>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", fontWeight: 600 }}>Matching</div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--accent-1)" }}>
                    {allPosts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase())).length}
                  </div>
                </div>
              </div>
            </div>

            {/* List Table */}
            <div className="tool-section" style={{ padding: 0, overflow: "hidden" }}>
              {isLoadingPosts ? (
                <div style={{ padding: "60px", textAlign: "center", color: "var(--text-secondary)" }}>
                  <span className="loader" style={{ width: "36px", height: "36px" }}></span>
                  <p style={{ marginTop: "12px", fontSize: "14px" }}>Loading blog posts...</p>
                </div>
              ) : (
                (() => {
                  const filtered = allPosts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));
                  const totalItems = filtered.length;
                  const totalPages = Math.ceil(totalItems / itemsPerPage);
                  const startIndex = (currentPage - 1) * itemsPerPage;
                  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

                  if (totalItems === 0) {
                    return (
                      <div style={{ padding: "60px", textAlign: "center", color: "var(--text-secondary)" }}>
                        <div style={{ fontSize: "32px", marginBottom: "8px" }}>📭</div>
                        <p style={{ fontSize: "15px", fontWeight: 600 }}>No blog posts found</p>
                        <p style={{ fontSize: "13px", color: "var(--text-muted)", marginTop: "4px" }}>
                          {searchQuery ? "Try refining your search query." : "Click 'Write Post' to publish your first article."}
                        </p>
                      </div>
                    );
                  }

                  return (
                    <div>
                      <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                        <thead>
                          <tr style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid var(--border)" }}>
                            <th style={{ padding: "16px 24px", fontSize: "13px", fontWeight: 700, color: "var(--text-muted)", width: "80px" }}>Sr. No.</th>
                            <th style={{ padding: "16px 24px", fontSize: "13px", fontWeight: 700, color: "var(--text-muted)" }}>Title</th>
                            <th style={{ padding: "16px 24px", fontSize: "13px", fontWeight: 700, color: "var(--text-muted)", width: "220px", textAlign: "right" }}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {paginated.map((post, idx) => {
                            const serialNumber = startIndex + idx + 1;
                            const isUserPost = !!post.image || post.author !== "AstonishBuddy Team" || post.date?.includes("July") || !["best-free-online-tools-for-students", "top-online-productivity-tools", "why-online-tools-are-better-than-traditional-software", "benefits-of-using-online-file-conversion-tools"].includes(post.slug);

                            return (
                              <tr key={post.slug} style={{ borderBottom: "1px solid var(--border)", transition: "background 0.2s" }}>
                                <td style={{ padding: "18px 24px", fontSize: "14px", fontWeight: 600, color: "var(--text-secondary)" }}>
                                  #{String(serialNumber).padStart(2, "0")}
                                </td>
                                <td style={{ padding: "18px 24px" }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: post.color || "var(--accent-1)", flexShrink: 0 }} />
                                    <div>
                                      <div style={{ fontWeight: 600, fontSize: "15px", color: "var(--text-primary)" }}>
                                        {post.title.replace(/^\d+\.\s*/, "")}
                                      </div>
                                      <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "4px" }}>
                                        <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                                          📅 {post.date}
                                        </span>
                                        <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>•</span>
                                        <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>
                                          👤 {post.author}
                                        </span>
                                        <span style={{
                                          fontSize: "9px",
                                          fontWeight: 700,
                                          padding: "2px 6px",
                                          borderRadius: "4px",
                                          background: isUserPost ? "rgba(108,99,255,0.12)" : "rgba(255,255,255,0.05)",
                                          border: isUserPost ? "1px solid rgba(108,99,255,0.2)" : "1px solid var(--border)",
                                          color: isUserPost ? "var(--accent-1)" : "var(--text-muted)",
                                          textTransform: "uppercase",
                                          marginLeft: "4px"
                                        }}>
                                          {isUserPost ? "User Published" : "Static Default"}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td style={{ padding: "18px 24px", textAlign: "right" }}>
                                  <div style={{ display: "inline-flex", gap: "8px", justifyContent: "flex-end" }}>
                                    <button
                                      type="button"
                                      onClick={() => handleEdit(post)}
                                      className="btn-secondary"
                                      style={{ padding: "6px 12px", fontSize: "13px", gap: "4px", cursor: "pointer" }}
                                    >
                                      ✏️ Edit
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleDelete(post.slug)}
                                      className="btn-secondary"
                                      style={{
                                        padding: "6px 12px",
                                        fontSize: "13px",
                                        gap: "4px",
                                        borderColor: "rgba(239, 68, 68, 0.2)",
                                        color: "#ef4444",
                                        cursor: "pointer"
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "rgba(239, 68, 68, 0.1)";
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "var(--bg-card-hover)";
                                      }}
                                    >
                                      🗑️ Delete
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>

                      {/* Pagination Controls */}
                      {totalPages > 1 && (
                        <div style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid var(--border)", flexWrap: "wrap", gap: "12px" }}>
                          <span style={{ fontSize: "13px", color: "var(--text-secondary)" }}>
                            Showing <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{startIndex + 1}</span> to{" "}
                            <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{Math.min(startIndex + itemsPerPage, totalItems)}</span> of{" "}
                            <span style={{ fontWeight: 600, color: "var(--text-primary)" }}>{totalItems}</span> articles
                          </span>
                          <div style={{ display: "flex", gap: "6px" }}>
                            <button
                              type="button"
                              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                              disabled={currentPage === 1}
                              className="btn-secondary"
                              style={{ padding: "6px 12px", fontSize: "13px", opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? "not-allowed" : "pointer" }}
                            >
                              Previous
                            </button>
                            {Array.from({ length: totalPages }).map((_, i) => {
                              const pNum = i + 1;
                              return (
                                <button
                                  key={pNum}
                                  type="button"
                                  onClick={() => setCurrentPage(pNum)}
                                  className={currentPage === pNum ? "btn-primary" : "btn-secondary"}
                                  style={{
                                    padding: "6px 12px",
                                    fontSize: "13px",
                                    minWidth: "36px",
                                    justifyContent: "center",
                                    background: currentPage === pNum ? undefined : "transparent",
                                    border: currentPage === pNum ? undefined : "1px solid var(--border)",
                                    cursor: "pointer"
                                  }}
                                >
                                  {pNum}
                                </button>
                              );
                            })}
                            <button
                              type="button"
                              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                              disabled={currentPage === totalPages}
                              className="btn-secondary"
                              style={{ padding: "6px 12px", fontSize: "13px", opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? "not-allowed" : "pointer" }}
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()
              )}
            </div>

          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

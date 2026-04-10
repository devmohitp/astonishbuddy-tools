"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const toolsList = [
  { id: "image-compressor", name: "Image Compressor", icon: "🖼️", desc: "Reduce image file size" },
  { id: "text-case-converter", name: "Text Case Converter", icon: "🔤", desc: "Convert text case" },
  { id: "password-generator", name: "Password Generator", icon: "🔐", desc: "Generate strong passwords" },
  { id: "json-formatter", name: "JSON Formatter", icon: "{ }", desc: "Format and validate JSON" },
  { id: "word-counter", name: "Word Counter", icon: "📊", desc: "Count words, characters" },
  { id: "qr-generator", name: "QR Code Generator", icon: "⬛", desc: "Generate custom QR codes" },
  { id: "bulk-qrcode-generator", name: "Bulk QR Generator", icon: "🔳", desc: "Mass QR code generation" },
];

function NavItem({ href, children, onClick, isMain = false }: { href: string, children: React.ReactNode, onClick: () => void, isMain?: boolean }) {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  const isActive = pathname === href || (href !== '/' && !href.includes('#') && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: isActive || isHovered ? "var(--text-primary)" : "var(--text-secondary)",
        textDecoration: "none",
        fontSize: isMain ? "16px" : "15px",
        fontWeight: isMain ? 600 : 400,
        transition: "color 0.2s ease"
      }}
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery("");
      }

      const menuRef = document.getElementById('mobile-menu');
      const btnRef = document.getElementById('hamburger-btn');
      if (isOpen && menuRef && btnRef && !menuRef.contains(event.target as Node) && !btnRef.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const filteredTools = searchQuery
    ? toolsList.filter(t => t.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  return (
    <header
      style={{
        borderBottom: "1px solid var(--border)",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backdropFilter: "blur(20px)",
        background: "rgba(10, 10, 15, 0.8)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
            }}
          >
            🛠️
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "15px", color: "var(--text-primary)" }}>
              Astonishbuddy
            </div>
            <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>
              No login required
            </div>
          </div>
        </div>
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Animated Search Container */}
        <div ref={searchRef} style={{ display: "flex", alignItems: "center", position: "relative" }}>
          <div style={{
            width: isSearchOpen ? "220px" : "0px",
            opacity: isSearchOpen ? 1 : 0,
            overflow: "hidden",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            marginRight: isSearchOpen ? "10px" : "0px",
          }}>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 16px",
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid var(--border)",
                borderRadius: "100px",
                color: "var(--text-primary)",
                outline: "none",
                fontSize: "14px",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Search Icon / Toggle */}
          <button
            onClick={() => {
              if (isSearchOpen) {
                setIsSearchOpen(false);
                setSearchQuery("");
              } else {
                setIsSearchOpen(true);
                if (isOpen) setIsOpen(false); // close hamburger if open
                setTimeout(() => inputRef.current?.focus(), 100);
              }
            }}
            style={{
              background: isSearchOpen ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border)",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "36px",
              height: "36px",
              color: "var(--text-primary)",
              outline: "none",
              transition: "all 0.2s"
            }}
            aria-label="Search"
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = isSearchOpen ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.05)")}
          >
            {isSearchOpen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            )}
          </button>

          {/* Search Results Dropdown */}
          {isSearchOpen && searchQuery && (
            <div style={{
              position: "absolute",
              top: "50px",
              right: "0",
              width: "280px",
              background: "rgba(15, 15, 20, 0.98)",
              backdropFilter: "blur(15px)",
              border: "1px solid var(--border)",
              borderRadius: "12px",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
              zIndex: 101,
              animation: "slideDown 0.2s ease-out"
            }}>
              {filteredTools.length > 0 ? (
                <>
                  <div style={{ fontSize: "11px", color: "var(--text-muted)", padding: "4px 8px", textTransform: "uppercase", letterSpacing: "1px" }}>Tools</div>
                  {filteredTools.map(t => (
                    <Link
                      key={t.id}
                      href={`/tools/${t.id}`}
                      onClick={() => { setIsSearchOpen(false); setSearchQuery(""); }}
                      style={{
                        display: "flex", alignItems: "center", gap: "12px", padding: "10px",
                        borderRadius: "8px", textDecoration: "none", transition: "background 0.2s"
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)"}
                      onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                    >
                      <div style={{ fontSize: "18px", width: "24px", textAlign: "center" }}>{t.icon}</div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ color: "var(--text-primary)", fontSize: "14px", fontWeight: 600 }}>{t.name}</span>
                        <span style={{ color: "var(--text-muted)", fontSize: "12px" }}>{t.desc}</span>
                      </div>
                    </Link>
                  ))}
                </>
              ) : (
                <div style={{ padding: "16px", color: "var(--text-secondary)", fontSize: "14px", textAlign: "center" }}>
                  No tools found for "{searchQuery}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* Hamburger Menu Button */}
        <button
          id="hamburger-btn"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            padding: "8px",
            outline: "none"
          }}
          aria-label="Toggle menu"
        >
          <div style={{ width: "22px", height: "2px", background: "var(--text-primary)", transition: "all 0.3s ease", transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
          <div style={{ width: "22px", height: "2px", background: "var(--text-primary)", transition: "all 0.3s ease", opacity: isOpen ? 0 : 1 }} />
          <div style={{ width: "22px", height: "2px", background: "var(--text-primary)", transition: "all 0.3s ease", transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <nav
          id="mobile-menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(15, 15, 20, 0.98)",
            backdropFilter: "blur(15px)",
            borderBottom: "1px solid var(--border)",
            display: "flex",
            flexDirection: "column",
            padding: "20px 24px 30px",
            gap: "20px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
            animation: "slideDown 0.2s ease-out"
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "20px", maxWidth: "800px", margin: "0 auto", width: "100%" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>Menu</div>
              <NavItem href="/" onClick={() => setIsOpen(false)} isMain>Home</NavItem>
              <NavItem href="/#all-tools" onClick={() => setIsOpen(false)} isMain>Tools</NavItem>
              <NavItem href="/blog" onClick={() => setIsOpen(false)} isMain>Blog</NavItem>
              <NavItem href="/guides" onClick={() => setIsOpen(false)} isMain>Guides</NavItem>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-primary)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "12px" }}>Company</div>
              <NavItem href="/about" onClick={() => setIsOpen(false)}>About Us</NavItem>
              <NavItem href="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavItem>
              <NavItem href="/privacy-policy" onClick={() => setIsOpen(false)}>Privacy Policy</NavItem>
              <NavItem href="/terms-and-conditions" onClick={() => setIsOpen(false)}>Terms & Conditions</NavItem>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

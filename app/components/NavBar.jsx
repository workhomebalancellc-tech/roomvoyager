"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

const NAV_LINKS = [
  { label: "Hotels",   href: "/hotels"   },
  { label: "Flights",  href: "/flights"  },
  { label: "Cruises",  href: "/cruises"  },
  { label: "Packages", href: "/packages" },
  { label: "Rewards",  href: "/rewards"  },
];

export default function NavBar({ active }) {
  const { user: session } = useAuth();
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onResize() { setIsMobile(window.innerWidth < 768); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close menu on navigation
  function handleLinkClick() { setMenuOpen(false); }

  return (
    <>
      <nav style={{
        background: "#fff",
        borderBottom: "1px solid #E5E7EB",
        padding: "0 20px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 1px 8px rgba(0,0,0,0.07)",
      }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px",
        }}>
          {/* Logo */}
          <a href="/" style={{ fontSize: "22px", fontWeight: "800", color: NAVY, textDecoration: "none", flexShrink: 0 }}>
            Room<span style={{ color: ORANGE }}>Voyager</span>
          </a>

          {/* Desktop nav */}
          {!isMobile && (
            <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "nowrap" }}>
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href}
                  style={{
                    color: active === link.label.toLowerCase() ? NAVY : "#374151",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: active === link.label.toLowerCase() ? "700" : "500",
                    borderBottom: active === link.label.toLowerCase() ? `2px solid ${ORANGE}` : "2px solid transparent",
                    paddingBottom: "2px",
                    transition: "color 0.15s",
                  }}>
                  {link.label}
                </a>
              ))}
              {session ? (
                <a href="/profile"
                  style={{
                    color: active === "profile" ? NAVY : "#374151",
                    textDecoration: "none",
                    fontSize: "14px",
                    fontWeight: "500",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "50%", background: NAVY, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "700" }}>
                    {(session.name || session.email || "U")[0].toUpperCase()}
                  </span>
                  <span>{session.name?.split(" ")[0] || "Profile"}</span>
                </a>
              ) : (
                <>
                  <a href="/account/signin"
                    style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "7px 16px", border: `1.5px solid ${NAVY}`, borderRadius: "8px" }}>
                    Sign In
                  </a>
                  <a href="/account/signup"
                    style={{ background: ORANGE, color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: "700", padding: "8px 18px", borderRadius: "8px" }}>
                    Sign Up
                  </a>
                </>
              )}
            </div>
          )}

          {/* Mobile hamburger button */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "center",
                justifyContent: "center",
              }}>
              {menuOpen ? (
                <span style={{ fontSize: "22px", color: NAVY, lineHeight: 1 }}>✕</span>
              ) : (
                <>
                  <span style={{ display: "block", width: "22px", height: "2.5px", background: NAVY, borderRadius: "2px" }} />
                  <span style={{ display: "block", width: "22px", height: "2.5px", background: NAVY, borderRadius: "2px" }} />
                  <span style={{ display: "block", width: "22px", height: "2.5px", background: NAVY, borderRadius: "2px" }} />
                </>
              )}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div style={{
          position: "fixed",
          top: "64px",
          left: 0,
          right: 0,
          background: "#fff",
          zIndex: 99,
          borderBottom: "2px solid #E5E7EB",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
          padding: "8px 0 16px",
        }}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}
              style={{
                display: "block",
                padding: "13px 24px",
                color: active === link.label.toLowerCase() ? NAVY : "#374151",
                textDecoration: "none",
                fontSize: "16px",
                fontWeight: active === link.label.toLowerCase() ? "700" : "500",
                borderLeft: active === link.label.toLowerCase() ? `3px solid ${ORANGE}` : "3px solid transparent",
                background: active === link.label.toLowerCase() ? "#EBF3FF" : "transparent",
              }}>
              {link.label}
            </a>
          ))}
          <div style={{ margin: "10px 16px 0", borderTop: "1px solid #F3F4F6", paddingTop: "10px", display: "flex", gap: "10px" }}>
            {session ? (
              <a href="/profile" onClick={handleLinkClick}
                style={{ flex: 1, textAlign: "center", padding: "11px", background: "#EBF3FF", color: NAVY, textDecoration: "none", borderRadius: "8px", fontSize: "14px", fontWeight: "700" }}>
                👤 {session.name?.split(" ")[0] || "Profile"}
              </a>
            ) : (
              <>
                <a href="/account/signin" onClick={handleLinkClick}
                  style={{ flex: 1, textAlign: "center", padding: "11px", border: `1.5px solid ${NAVY}`, color: NAVY, textDecoration: "none", borderRadius: "8px", fontSize: "14px", fontWeight: "600" }}>
                  Sign In
                </a>
                <a href="/account/signup" onClick={handleLinkClick}
                  style={{ flex: 1, textAlign: "center", padding: "11px", background: ORANGE, color: "#fff", textDecoration: "none", borderRadius: "8px", fontSize: "14px", fontWeight: "700" }}>
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

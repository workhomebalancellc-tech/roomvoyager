"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FloatingChat from "./components/FloatingChat";
import PromoBanner from "./components/PromoBanner";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

// Shared subscribe logic
async function subscribeEmail(name, email, source) {
  const res  = await fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, source }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error("error");
  return data.alreadySubscribed ? "duplicate" : "success";
}

function NewsletterSignup() {
  const [name,   setName]   = useState("");
  const [email,  setEmail]  = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try { setStatus(await subscribeEmail(name, email, "homepage")); }
    catch { setStatus("error"); }
  }

  return (
    <div id="newsletter" style={{
      background: `url('https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1600&q=60') center/cover no-repeat`,
      position: "relative",
    }}>
      {/* Overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,20,70,0.93) 0%, rgba(0,59,149,0.88) 60%, rgba(0,82,204,0.80) 100%)" }} />

      <div className="nl-grid" style={{ position: "relative", maxWidth: "1100px", margin: "0 auto", padding: "72px 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>

        {/* LEFT — copy */}
        <div>
          <span style={{ display: "inline-block", background: "rgba(255,102,0,0.18)", color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", padding: "5px 12px", borderRadius: "999px", border: "1px solid rgba(255,102,0,0.35)", marginBottom: "20px" }}>
            ✉️ Free Newsletter
          </span>
          <h2 style={{ color: "#fff", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: "800", margin: "0 0 16px", lineHeight: 1.2 }}>
            Get deals before<br />they're gone
          </h2>
          <p style={{ color: "#BFDBFE", fontSize: "15px", margin: "0 0 32px", lineHeight: 1.7 }}>
            Join our free list and be first in line for flash sales, double-points windows, and exclusive offers our regular visitors never see.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              ["✈️", "Deals before they sell out"],
              ["🔥", "Double-points alerts"],
              ["🎁", "Exclusive subscriber offers"],
              ["🚫", "No spam, unsubscribe anytime"],
            ].map(([icon, text]) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "16px" }}>{icon}</span>
                <span style={{ color: "#E0EEFF", fontSize: "14px", fontWeight: "500" }}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — form card */}
        <div style={{ background: "#fff", borderRadius: "20px", padding: "36px 32px", boxShadow: "0 20px 60px rgba(0,0,0,0.35)" }}>
          {status === "success" ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: "52px", marginBottom: "14px" }}>🎉</div>
              <p style={{ fontSize: "20px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>You're on the list!</p>
              <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>Watch your inbox — deals are coming.</p>
            </div>
          ) : status === "duplicate" ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ fontSize: "44px", marginBottom: "14px" }}>✅</div>
              <p style={{ fontSize: "18px", fontWeight: "700", color: "#111827", margin: "0 0 8px" }}>Already subscribed!</p>
              <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>We've got you covered — deals are on the way.</p>
            </div>
          ) : (
            <>
              <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 4px" }}>Stay in the loop</p>
              <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 24px" }}>Join free. Unsubscribe anytime.</p>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <input
                  type="text"
                  placeholder="First name (optional)"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={{ padding: "13px 16px", borderRadius: "10px", border: "1.5px solid #E5E7EB", fontSize: "14px", outline: "none", color: "#111827", transition: "border-color 0.15s" }}
                  onFocus={e => e.target.style.borderColor = NAVY}
                  onBlur={e => e.target.style.borderColor = "#E5E7EB"}
                />
                <input
                  type="email"
                  placeholder="Your email address *"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  style={{ padding: "13px 16px", borderRadius: "10px", border: "1.5px solid #E5E7EB", fontSize: "14px", outline: "none", color: "#111827" }}
                  onFocus={e => e.target.style.borderColor = NAVY}
                  onBlur={e => e.target.style.borderColor = "#E5E7EB"}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{ background: status === "loading" ? "#D1D5DB" : ORANGE, color: "#fff", fontWeight: "800", fontSize: "15px", padding: "14px", borderRadius: "10px", border: "none", cursor: status === "loading" ? "default" : "pointer", marginTop: "4px" }}>
                  {status === "loading" ? "Joining…" : "Subscribe — It's Free →"}
                </button>
                {status === "error" && <p style={{ color: "#DC2626", fontSize: "12px", margin: 0 }}>Something went wrong — please try again.</p>}
              </form>
              <p style={{ fontSize: "11px", color: "#9CA3AF", margin: "14px 0 0", textAlign: "center" }}>
                🔒 Your info is private. We never sell or share your email.
              </p>
            </>
          )}
        </div>
      </div>

      {/* Mobile stacked layout */}
      <style>{`
        @media (max-width: 700px) {
          .nl-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding: 48px 20px !important; }
        }
      `}</style>
    </div>
  );
}

// ── Newsletter Popup ──────────────────────────────────────────────────────────
const POPUP_KEY     = "rv_nl_popup";
const POPUP_DELAY   = 10000; // 10 seconds
const SNOOZE_DAYS   = 7;

function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [status,  setStatus]  = useState("idle");

  useEffect(() => {
    // Don't show if already dismissed/subscribed recently
    try {
      const stored = JSON.parse(localStorage.getItem(POPUP_KEY) || "{}");
      if (stored.until && new Date(stored.until) > new Date()) return;
    } catch {}
    const t = setTimeout(() => setVisible(true), POPUP_DELAY);
    return () => clearTimeout(t);
  }, []);

  function dismiss() {
    try {
      const until = new Date();
      until.setDate(until.getDate() + SNOOZE_DAYS);
      localStorage.setItem(POPUP_KEY, JSON.stringify({ until: until.toISOString() }));
    } catch {}
    setVisible(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const result = await subscribeEmail(name, email, "popup");
      setStatus(result);
      // After success/duplicate, hide after 2.5s and mark as done
      setTimeout(() => {
        dismiss();
      }, 2500);
    } catch { setStatus("error"); }
  }

  if (!visible) return null;

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) dismiss(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,15,50,0.65)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
        animation: "fadeInOverlay 0.3s ease",
      }}>
      <style>{`
        @keyframes fadeInOverlay { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUpCard   { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>
      <div style={{
        background: "#fff", borderRadius: "20px", overflow: "hidden",
        maxWidth: "460px", width: "100%", position: "relative",
        boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
        animation: "slideUpCard 0.35s cubic-bezier(0.22,1,0.36,1)",
      }}>
        {/* Close button */}
        <button onClick={dismiss} style={{
          position: "absolute", top: "14px", right: "16px", width: "32px", height: "32px",
          borderRadius: "50%", border: "none", background: "rgba(0,0,0,0.08)", fontSize: "18px",
          cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
          color: "#6B7280", zIndex: 1, lineHeight: 1,
        }}>×</button>

        {/* Header image strip */}
        <div style={{
          height: "140px",
          background: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=280&fit=crop&auto=format') center/cover no-repeat`,
          position: "relative",
        }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,70,0.3), rgba(0,40,120,0.85))" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: "0 24px 18px", textAlign: "center" }}>
            <p style={{ color: "#FFA366", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 4px" }}>Free Newsletter</p>
            <h2 style={{ color: "#fff", fontSize: "22px", fontWeight: "800", margin: 0, lineHeight: 1.2 }}>Deals straight to your inbox</h2>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "24px 28px 28px" }}>
          {status === "success" || status === "duplicate" ? (
            <div style={{ textAlign: "center", padding: "12px 0" }}>
              <div style={{ fontSize: "44px", marginBottom: "10px" }}>{status === "success" ? "🎉" : "✅"}</div>
              <p style={{ fontSize: "17px", fontWeight: "800", color: "#111827", margin: "0 0 6px" }}>
                {status === "success" ? "You're on the list!" : "Already subscribed!"}
              </p>
              <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>
                {status === "success" ? "Watch your inbox — deals are coming." : "We've already got you covered."}
              </p>
            </div>
          ) : (
            <>
              <p style={{ fontSize: "14px", color: "#4B5563", margin: "0 0 20px", lineHeight: 1.6, textAlign: "center" }}>
                Be first in line for flash sales, double-points windows, and travel deals.
              </p>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input
                  type="text"
                  placeholder="First name (optional)"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={{ padding: "12px 14px", borderRadius: "9px", border: "1.5px solid #E5E7EB", fontSize: "14px", outline: "none" }}
                  onFocus={e => e.target.style.borderColor = NAVY}
                  onBlur={e => e.target.style.borderColor = "#E5E7EB"}
                />
                <input
                  type="email"
                  placeholder="Your email *"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  style={{ padding: "12px 14px", borderRadius: "9px", border: "1.5px solid #E5E7EB", fontSize: "14px", outline: "none" }}
                  onFocus={e => e.target.style.borderColor = NAVY}
                  onBlur={e => e.target.style.borderColor = "#E5E7EB"}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{ background: status === "loading" ? "#D1D5DB" : ORANGE, color: "#fff", fontWeight: "800", fontSize: "15px", padding: "13px", borderRadius: "9px", border: "none", cursor: status === "loading" ? "default" : "pointer", marginTop: "2px" }}>
                  {status === "loading" ? "Joining…" : "Get the Deals →"}
                </button>
                {status === "error" && <p style={{ color: "#DC2626", fontSize: "12px", margin: 0 }}>Something went wrong — please try again.</p>}
              </form>
              <button onClick={dismiss} style={{ display: "block", width: "100%", marginTop: "12px", background: "none", border: "none", color: "#9CA3AF", fontSize: "12px", cursor: "pointer", padding: "4px" }}>
                No thanks, I don't want deals
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const { user, loading: authLoading } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  const [widgetEmail, setWidgetEmail]       = useState("");
  const [widgetUnlocked, setWidgetUnlocked] = useState(false);
  const [widgetHovered, setWidgetHovered]   = useState(false);
  const [isSafari, setIsSafari]             = useState(false);
  const [widgetHeight, setWidgetHeight]     = useState(285);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    // Detect Safari (includes iOS Safari)
    const ua = navigator.userAgent;
    setIsSafari(/^((?!chrome|android).)*safari/i.test(ua));
    // Listen for widget height from iframe postMessage
    function onMessage(e) {
      if (e.data && e.data.egWidgetHeight) {
        setWidgetHeight(e.data.egWidgetHeight + 20); // +20px buffer so button never clips
      }
    }
    window.addEventListener("message", onMessage);
    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("message", onMessage);
    };
  }, []);

  // Auto-unlock widget once auth resolves for logged-in users
  useEffect(() => {
    if (!authLoading && user?.email) setWidgetUnlocked(true);
  }, [authLoading, user]);

  function handleWidgetEmail(e) {
    e.preventDefault();
    if (!widgetEmail.trim()) return;
    setWidgetUnlocked(true);
    // Log to Airtable
    fetch("/api/link-clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        partner: "Expedia",
        product: "hotel",
        url: "widget-search",
        userEmail: widgetEmail.trim(),
        userName: "",
      }),
    }).catch(() => {});
  }

  function openDest(destName) {
    const expediaUrl = `https://www.expedia.com/Hotel-Search?destination=${encodeURIComponent(destName)}&camref=1110l8R3Z`;
    window.location.href = `/redirect?to=${encodeURIComponent(expediaUrl)}&partner=Expedia&product=hotel`;
  }

  const hotelDestinations = [
    { name: "Cancún", photo: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=300&h=200&fit=crop&auto=format", country: "Mexico", tag: "Most Popular" },
    { name: "Miami", photo: "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?w=300&h=200&fit=crop&auto=format", country: "Florida, USA", tag: "Trending" },
    { name: "Las Vegas", photo: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=300&h=200&fit=crop&auto=format", country: "Nevada, USA", tag: "Best Value" },
    { name: "Paris", photo: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=300&h=200&fit=crop&auto=format", country: "France", tag: "Romantic" },
    { name: "Orlando", photo: "https://images.unsplash.com/photo-1627035983655-0ceec61bb733?w=300&h=200&fit=crop&auto=format", country: "Florida, USA", tag: "Family Pick" },
    { name: "Punta Cana", photo: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=300&h=200&fit=crop&auto=format", country: "Dominican Republic", tag: "All-Inclusive" },
  ];

  return (
    <>
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <NavBar active="home" />
      <PromoBanner />

      {/* HERO — widget-first */}
      <div style={{ position: "relative", overflow: "hidden", background: "#001E64" }}>
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=800&fit=crop&auto=format" alt="Luxury hotel" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.25 }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", padding: "52px 24px 0", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 12px" }}>🏨 Powered by Expedia</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4.5vw, 50px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>
            Find Your Perfect Hotel
          </h1>
          <p style={{ color: "#BFDBFE", fontSize: "16px", margin: "0 0 24px", maxWidth: "460px", lineHeight: 1.6 }}>
            Best prices · Free cancellation · Earn cash back on every booking.
          </p>

          {/* Flights & Cruises pills — above the widget */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
            <a href="/flights" style={{ display: "flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.13)", border: "1.5px solid rgba(255,255,255,0.28)", color: "#fff", borderRadius: "999px", padding: "9px 20px", fontSize: "13px", fontWeight: "600", textDecoration: "none", backdropFilter: "blur(6px)", whiteSpace: "nowrap" }}>
              ✈️ Search Flights
            </a>
            <a href="/cruises" style={{ display: "flex", alignItems: "center", gap: "7px", background: "rgba(255,255,255,0.13)", border: "1.5px solid rgba(255,255,255,0.28)", color: "#fff", borderRadius: "999px", padding: "9px 20px", fontSize: "13px", fontWeight: "600", textDecoration: "none", backdropFilter: "blur(6px)", whiteSpace: "nowrap" }}>
              🚢 Search Cruises
            </a>
          </div>

          {/* Expedia widget + email gate overlay */}
          <div
            style={{ width: "475px", maxWidth: "100%", borderRadius: "16px", overflow: "hidden", boxShadow: "0 16px 56px rgba(0,0,0,0.5)", position: "relative" }}
            onMouseLeave={() => { if (!widgetEmail) setWidgetHovered(false); }}
          >
            <iframe
              src="/hotel-search.html?v=5"
              title="Hotel Search"
              scrolling="no"
              allow="popups"
              style={{ border: "none", width: "100%", height: `${widgetHeight}px`, display: "block" }}
            />
            {/* Transparent tap/hover catcher — intercepts interaction for locked users */}
            {!authLoading && !widgetUnlocked && !widgetHovered && (
              <div
                style={{ position: "absolute", inset: 0, cursor: "pointer", zIndex: 1 }}
                onClick={() => setWidgetHovered(true)}
                onMouseEnter={() => setWidgetHovered(true)}
              />
            )}
            {/* Email gate — sits on top of widget for guests */}
            {!authLoading && !widgetUnlocked && widgetHovered && (
              <div style={{ position: "absolute", inset: "-8px", background: "linear-gradient(135deg, #001E64ee 0%, #003B95ee 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px", backdropFilter: "blur(4px)", borderRadius: "16px" }}>
                <div style={{ fontSize: "32px", marginBottom: "8px" }}>🏆</div>
                <p style={{ color: "#fff", fontWeight: "800", fontSize: "17px", margin: "0 0 4px", textAlign: "center" }}>Enter your email to search</p>
                <p style={{ color: "#BFDBFE", fontSize: "12px", margin: "0 0 16px", textAlign: "center" }}>Earn 5 pts per $1 — redeemable for cash back</p>
                <form onSubmit={handleWidgetEmail} style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <input
                    type="email"
                    required
                    autoFocus
                    placeholder="you@example.com"
                    value={widgetEmail}
                    onChange={e => setWidgetEmail(e.target.value)}
                    style={{ width: "100%", padding: "12px 14px", fontSize: "14px", borderRadius: "9px", border: "2px solid rgba(255,255,255,0.4)", outline: "none", boxSizing: "border-box", fontFamily: "system-ui, sans-serif", background: "#fff", color: "#111827" }}
                  />
                  <button type="submit" style={{ width: "100%", padding: "12px", background: "#FF6600", color: "#fff", border: "none", borderRadius: "9px", fontSize: "14px", fontWeight: "800", cursor: "pointer" }}>
                    Search Hotels →
                  </button>
                </form>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "11px", margin: "12px 0 0", textAlign: "center", lineHeight: 1.6 }}>
                  No spam, ever. · Skip this step by{" "}
                  <a href="/account/signin" style={{ color: "#93C5FD", fontWeight: "700" }}>signing in</a>
                  {" "}or{" "}
                  <a href="/account/signup" style={{ color: "#93C5FD", fontWeight: "700" }}>creating a free account</a>
                </p>
              </div>
            )}
          </div>

          {/* Safari popup warning */}
          {isSafari && widgetUnlocked && (
            <div style={{ marginTop: "10px", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "10px", padding: "10px 16px", display: "flex", alignItems: "center", gap: "10px", maxWidth: "475px", width: "100%", boxSizing: "border-box" }}>
              <span style={{ fontSize: "18px", flexShrink: 0 }}>⚠️</span>
              <p style={{ color: "#BFDBFE", fontSize: "12px", margin: 0, lineHeight: 1.5 }}>
                <strong style={{ color: "#fff" }}>Using Safari?</strong> If search results don't open, go to{" "}
                <strong style={{ color: "#fff" }}>Settings → Safari</strong> and turn off{" "}
                <strong style={{ color: "#fff" }}>Block Pop-ups</strong>.
              </p>
            </div>
          )}

          {/* Fade into trust bar */}
          <div style={{ height: "36px" }} />
        </div>
      </div>

      {/* TRUST BAR */}
      <div style={{ background: LIGHT_BLUE, borderBottom: "1px solid #BFDBFE", padding: "14px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {[["✅","Best price guarantee"],["💰","Earn real cash back"],["🔄","Free cancellation options"],["🛡️","Secure booking"]].map(([icon, text], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", color: NAVY, fontSize: "13px", fontWeight: "600" }}>
              <span>{icon}</span><span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* TRENDING HOTEL DESTINATIONS */}
      <div style={{ background: "#F8FAFF", padding: "48px 24px 56px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Popular right now</p>
          <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 24px" }}>Trending destinations</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "14px" }}>
            {hotelDestinations.map((dest, i) => (
              <button key={i} onClick={() => openDest(dest.name)}
                style={{ background: "none", border: "none", padding: 0, textAlign: "left", cursor: "pointer", width: "100%" }}>
                <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", overflow: "hidden", display: "flex" }}
                  onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,59,149,0.15)"; e.currentTarget.style.borderColor = "#93C5FD"; }}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#E5E7EB"; }}>
                  <div style={{ width: "80px", height: "72px", flexShrink: 0 }}>
                    <img src={dest.photo} alt={dest.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1, padding: "12px" }}>
                    <p style={{ fontSize: "14px", fontWeight: "700", color: "#111827", margin: "0 0 2px" }}>{dest.name}</p>
                    <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 6px" }}>{dest.country}</p>
                    <span style={{ fontSize: "10px", fontWeight: "600", background: LIGHT_BLUE, color: NAVY, padding: "2px 8px", borderRadius: "999px" }}>{dest.tag}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURED — HOTELS + CRUISES */}
      <div style={{ background: "#fff", padding: "64px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 8px" }}>What we offer</p>
          <h2 style={{ fontSize: "30px", fontWeight: "800", color: "#111827", margin: "0 0 32px" }}>Book with confidence</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
            {[
              {
                label: "Hotels", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&h=300&fit=crop&auto=format",
                headline: "1M+ Properties Worldwide", body: "Budget hotels to 5-star resorts. Best price guarantee with free cancellation on most rooms.",
                tags: ["Free cancellation", "No booking fees", "Earn 5 pts/$1"], btnText: "Search Hotels →", href: "/hotels", btnColor: NAVY, tagBg: LIGHT_BLUE, tagColor: NAVY,
              },
              {
                label: "Cruises", img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=700&h=300&fit=crop&auto=format",
                headline: "10 Top Cruise Lines", body: "Royal Caribbean, Celebrity, Cunard, Virgin Voyages & more across Caribbean, Mediterranean, Alaska.",
                tags: ["Solo & family", "Agent support", "Earn 10 pts/$1"], btnText: "Search Cruises →", href: "/cruises", btnColor: ORANGE, tagBg: "#FFF0E6", tagColor: "#C2410C",
              },
              {
                label: "Flights", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&h=300&fit=crop&auto=format",
                headline: "Flights to Anywhere", body: "Compare hundreds of airlines. Find the best fares and earn points on every ticket booked.",
                tags: ["All airlines", "5 pts/$1", "Best fare"], btnText: "Search Flights →", href: "/flights", btnColor: "#0052CC", tagBg: LIGHT_BLUE, tagColor: NAVY,
              },
            ].map((card, i) => (
              <div key={i} style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
                <div style={{ position: "relative", height: "180px" }}>
                  <img src={card.img} alt={card.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,30,80,0.75), transparent)" }} />
                  <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "18px" }}>
                    <p style={{ color: "#93C5FD", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", margin: "0 0 4px" }}>{card.label}</p>
                    <p style={{ color: "#fff", fontSize: "18px", fontWeight: "800", margin: 0 }}>{card.headline}</p>
                  </div>
                </div>
                <div style={{ padding: "22px" }}>
                  <p style={{ color: "#4B5563", fontSize: "14px", lineHeight: "1.65", margin: "0 0 16px" }}>{card.body}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "6px", marginBottom: "18px" }}>
                    {card.tags.map((t, j) => <span key={j} style={{ flex: 1, textAlign: "center", background: card.tagBg, color: card.tagColor, fontSize: "11px", fontWeight: "600", padding: "5px 6px", borderRadius: "999px", whiteSpace: "nowrap" }}>{t}</span>)}
                  </div>
                  <a href={card.href} style={{ display: "block", background: card.btnColor, color: "#fff", textAlign: "center", padding: "12px", borderRadius: "10px", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
                    {card.btnText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REWARDS BANNER */}
      <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0052CC 100%)`, padding: "64px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "45%", backgroundImage: "url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=700&h=500&fit=crop&auto=format)", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.18 }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "40px", position: "relative" }}>
          <div style={{ maxWidth: "520px" }}>
            <p style={{ color: "#FFA366", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 14px" }}>💰 RoomVoyager Rewards</p>
            <h2 style={{ color: "#fff", fontSize: "clamp(24px, 3.5vw, 38px)", fontWeight: "800", margin: "0 0 14px", lineHeight: 1.2 }}>Earn real cash back on every booking</h2>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: "0 0 8px" }}>5 pts per $1 on hotels &amp; flights · 10 pts per $1 on cruises</p>
            <p style={{ color: "#93C5FD", fontSize: "13px", margin: "0 0 28px" }}>Redeem for real money via Zelle, Cash App, or Venmo — no blackout dates</p>
            <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: "13px 28px", borderRadius: "10px", fontSize: "15px", fontWeight: "700", textDecoration: "none", display: "inline-block" }}>View Rewards Program →</a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[["🧭","Explorer","0–9,999 pts","#6B7280"],["🌊","Voyager","10,000–24,999 pts","#3B82F6"],["⚓","Navigator","25,000–49,999 pts","#8B5CF6"],["⭐","Admiral","50,000+ pts",ORANGE]].map(([icon,tier,range,color],i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px", background: "rgba(255,255,255,0.08)", borderRadius: "10px", padding: "10px 16px" }}>
                <span style={{ fontSize: "20px" }}>{icon}</span>
                <span style={{ color: "#fff", fontSize: "14px", fontWeight: "700", minWidth: "80px" }}>{tier}</span>
                <span style={{ color: "#93C5FD", fontSize: "13px" }}>{range}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY US */}
      <div style={{ background: "#F8FAFF", padding: "64px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 8px", textAlign: "center" }}>Why RoomVoyager</p>
          <h2 style={{ fontSize: "30px", fontWeight: "800", color: "#111827", margin: "0 0 40px", textAlign: "center" }}>Travelers choose us because</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
            {[
              { icon: "💰", title: "Real Cash Back", desc: "Earn points on every booking and redeem for real money — not just credits." },
              { icon: "🔒", title: "Secure Booking", desc: "All payments go through trusted platforms like Expedia and CruiseDirect." },
              { icon: "🌍", title: "Massive Selection", desc: "1M+ hotels and 10+ cruise lines across every destination worldwide." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "16px", padding: "28px 22px", border: "1px solid #E8F0FE", boxShadow: "0 2px 10px rgba(0,59,149,0.06)", flex: "1 1 220px", maxWidth: "320px" }}>
                <div style={{ fontSize: "30px", marginBottom: "12px" }}>{item.icon}</div>
                <p style={{ fontSize: "15px", fontWeight: "700", color: "#111827", margin: "0 0 8px" }}>{item.title}</p>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: 0, lineHeight: "1.65" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NEWSLETTER SIGNUP */}
      <NewsletterSignup />

      {/* FINAL CTA */}
      <div style={{ background: "#fff", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "34px", fontWeight: "800", color: "#111827", margin: "0 0 14px" }}>Ready to explore?</h2>
          <p style={{ fontSize: "16px", color: "#6B7280", margin: "0 0 32px" }}>Join thousands of travelers earning cash back on every trip.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/account/signup" style={{ background: ORANGE, color: "#fff", padding: "14px 32px", borderRadius: "12px", fontSize: "15px", fontWeight: "700", textDecoration: "none" }}>Create Free Account</a>
            <a href="/cruises" style={{ background: LIGHT_BLUE, color: NAVY, padding: "14px 32px", borderRadius: "12px", fontSize: "15px", fontWeight: "700", textDecoration: "none" }}>Browse Cruises</a>
          </div>
        </div>
      </div>

    </div>
    <FloatingChat />
    <Footer />
    <NewsletterPopup />
    </>
  );
}

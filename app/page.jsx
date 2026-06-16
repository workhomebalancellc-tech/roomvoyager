"use client";

import { useState, useRef, useEffect } from "react";
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
  const [activeTab, setActiveTab] = useState("hotels");
  const [searchVal, setSearchVal] = useState("");
  const [citySugg, setCitySugg] = useState([]);
  const [showSugg, setShowSugg] = useState(false);
  const [loadingSugg, setLoadingSugg] = useState(false);
  const debounceRef = useRef(null);
  // Flight-specific: separate from/to fields
  const [flightFrom, setFlightFrom] = useState("");
  const [flightTo,   setFlightTo]   = useState("");
  const [fromSugg,   setFromSugg]   = useState([]);
  const [toSugg,     setToSugg]     = useState([]);
  const [showFromSugg, setShowFromSugg] = useState(false);
  const [showToSugg,   setShowToSugg]   = useState(false);
  const [loadingFrom,  setLoadingFrom]  = useState(false);
  const [loadingTo,    setLoadingTo]    = useState(false);
  const fromDebounceRef = useRef(null);
  const toDebounceRef   = useRef(null);

  async function fetchCities(q, setData, setShow, setLoading, debounceRef) {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!q || q.length < 2) { setData([]); setShow(false); return; }
    setLoading(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const res  = await fetch(`/api/cities?q=${encodeURIComponent(q)}`);
        const data = await res.json();
        setData(data); setShow(data.length > 0);
      } catch { setData([]); setShow(false); }
      finally { setLoading(false); }
    }, 300);
  }
  const { user } = useAuth();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function handleSearchChange(val) {
    setSearchVal(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!val || val.length < 2) { setCitySugg([]); setShowSugg(false); return; }
    setLoadingSugg(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/cities?q=${encodeURIComponent(val)}`);
        const data = await res.json();
        setCitySugg(data);
        setShowSugg(data.length > 0);
      } catch { setCitySugg([]); setShowSugg(false); }
      finally { setLoadingSugg(false); }
    }, 300);
  }

  const destinations = [
    { name: "Cancún", country: "Mexico", photo: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=500&h=320&fit=crop&auto=format", tag: "Most Popular", href: "/hotels" },
    { name: "Miami", country: "Florida, USA", photo: "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?w=500&h=320&fit=crop&auto=format", tag: "Trending", href: "/hotels" },
    { name: "Paris", country: "France", photo: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=500&h=320&fit=crop&auto=format", tag: "Romantic", href: "/hotels" },
    { name: "Caribbean", country: "Multiple Islands", photo: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=500&h=320&fit=crop&auto=format", tag: "Top Cruise Destination", href: "/cruises" },
    { name: "Alaska", country: "USA", photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&h=320&fit=crop&auto=format", tag: "Adventure", href: "/cruises" },
    { name: "Mediterranean", country: "Europe", photo: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=500&h=320&fit=crop&auto=format", tag: "Luxury Cruises", href: "/cruises" },
  ];

  function handleSearch(e) {
    e.preventDefault();
    const q = searchVal.trim() ? `?q=${encodeURIComponent(searchVal.trim())}` : "";
    if (activeTab === "hotels") window.location.href = `/hotels${q}`;
    else if (activeTab === "cruises") window.location.href = `/cruises${q}`;
    else {
      const params = new URLSearchParams();
      if (flightFrom.trim()) params.set("from", flightFrom.trim());
      if (flightTo.trim())   params.set("to",   flightTo.trim());
      const qs = params.toString() ? `?${params.toString()}` : "";
      window.location.href = `/flights${qs}`;
    }
  }

  return (
    <>
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <NavBar active="home" />
      <PromoBanner />

      {/* HERO */}
      <div style={{ position: "relative", height: "580px", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=700&fit=crop&auto=format" alt="Tropical beach" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.6) 0%, rgba(0,15,60,0.75) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
          <p style={{ color: "#93C5FD", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 14px" }}>Your trusted travel partner</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(30px, 5vw, 54px)", fontWeight: "800", textAlign: "center", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 16px rgba(0,0,0,0.4)" }}>
            Find Your Perfect Trip
          </h1>
          <p style={{ color: "#BFDBFE", fontSize: "17px", textAlign: "center", margin: "0 0 32px", maxWidth: "480px", lineHeight: 1.6 }}>
            Hotels, flights & cruises — all in one place.<br />Earn real cash back on every booking.
          </p>
          {/* Search box */}
          <div style={{ background: "#fff", borderRadius: "16px", padding: "8px", width: "100%", maxWidth: "700px", boxShadow: "0 12px 48px rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", gap: "2px", padding: "4px 4px 8px" }}>
              {[["hotels", "🏨 Hotels"], ["flights", "✈️ Flights"], ["cruises", "🚢 Cruises"]].map(([tab, label]) => (
                <button key={tab} onClick={() => { setActiveTab(tab); setSearchVal(""); setShowSugg(false); setCitySugg([]); }}
                  style={{ padding: "8px 18px", borderRadius: "8px", border: "none", fontSize: "13px", fontWeight: "600", cursor: "pointer", background: activeTab === tab ? NAVY : "transparent", color: activeTab === tab ? "#fff" : "#6B7280", transition: "all 0.15s" }}>
                  {label}
                </button>
              ))}
            </div>
            {activeTab === "cruises" ? (
              <div style={{ display: "flex", justifyContent: "center", padding: "0 4px 4px" }}>
                <a href="/cruises" style={{ background: ORANGE, color: "#fff", border: "none", borderRadius: "10px", padding: "14px 60px", fontSize: "17px", fontWeight: "700", cursor: "pointer", textDecoration: "none", display: "inline-block" }}>Browse Cruises →</a>
              </div>
            ) : activeTab === "flights" ? (
              <form onSubmit={handleSearch} style={{ display: "flex", gap: "8px", padding: "0 4px 4px", flexWrap: "wrap" }}>
                {/* FROM field */}
                <div style={{ flex: 1, minWidth: "140px", position: "relative" }}>
                  <input type="text" placeholder="Flying from…" value={flightFrom}
                    onChange={e => { setFlightFrom(e.target.value); fetchCities(e.target.value, setFromSugg, setShowFromSugg, setLoadingFrom, fromDebounceRef); }}
                    onBlur={() => setTimeout(() => setShowFromSugg(false), 160)}
                    onFocus={() => flightFrom.length >= 1 && fromSugg.length > 0 && setShowFromSugg(true)}
                    style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "15px", outline: "none", color: "#111827", boxSizing: "border-box" }} />
                  {(showFromSugg || loadingFrom) && (
                    <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", border: "1px solid #E5E7EB", borderRadius: "10px", boxShadow: "0 6px 24px rgba(0,0,0,0.13)", zIndex: 200, marginTop: "4px", overflow: "hidden" }}>
                      {loadingFrom && fromSugg.length === 0
                        ? <div style={{ padding: "10px 14px", fontSize: "13px", color: "#9CA3AF" }}>Searching…</div>
                        : fromSugg.map((c, i) => (
                          <div key={i} onMouseDown={() => { setFlightFrom(c.label); setShowFromSugg(false); }}
                            style={{ padding: "10px 14px", cursor: "pointer", display: "flex", justifyContent: "space-between", borderBottom: i < fromSugg.length - 1 ? "1px solid #F3F4F6" : "none" }}
                            onMouseEnter={e => e.currentTarget.style.background = "#EBF3FF"}
                            onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                            <span style={{ fontSize: "14px", color: "#111827", fontWeight: "600" }}>{c.name}</span>
                            <span style={{ fontSize: "12px", color: "#9CA3AF" }}>{c.sub}</span>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
                {/* TO field */}
                <div style={{ flex: 1, minWidth: "140px", position: "relative" }}>
                  <input type="text" placeholder="Flying to…" value={flightTo}
                    onChange={e => { setFlightTo(e.target.value); fetchCities(e.target.value, setToSugg, setShowToSugg, setLoadingTo, toDebounceRef); }}
                    onBlur={() => setTimeout(() => setShowToSugg(false), 160)}
                    onFocus={() => flightTo.length >= 1 && toSugg.length > 0 && setShowToSugg(true)}
                    style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "15px", outline: "none", color: "#111827", boxSizing: "border-box" }} />
                  {(showToSugg || loadingTo) && (
                    <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", border: "1px solid #E5E7EB", borderRadius: "10px", boxShadow: "0 6px 24px rgba(0,0,0,0.13)", zIndex: 200, marginTop: "4px", overflow: "hidden" }}>
                      {loadingTo && toSugg.length === 0
                        ? <div style={{ padding: "10px 14px", fontSize: "13px", color: "#9CA3AF" }}>Searching…</div>
                        : toSugg.map((c, i) => (
                          <div key={i} onMouseDown={() => { setFlightTo(c.label); setShowToSugg(false); }}
                            style={{ padding: "10px 14px", cursor: "pointer", display: "flex", justifyContent: "space-between", borderBottom: i < toSugg.length - 1 ? "1px solid #F3F4F6" : "none" }}
                            onMouseEnter={e => e.currentTarget.style.background = "#EBF3FF"}
                            onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                            <span style={{ fontSize: "14px", color: "#111827", fontWeight: "600" }}>{c.name}</span>
                            <span style={{ fontSize: "12px", color: "#9CA3AF" }}>{c.sub}</span>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
                <button type="submit" style={{ background: ORANGE, color: "#fff", border: "none", borderRadius: "10px", padding: "12px 28px", fontSize: "15px", fontWeight: "700", cursor: "pointer", flexShrink: 0 }}>Search →</button>
              </form>
            ) : (
              <form onSubmit={handleSearch} style={{ display: "flex", gap: "8px", padding: "0 4px 4px" }}>
                <div style={{ flex: 1, position: "relative" }}>
                  <input type="text" placeholder="Where are you going?"
                    value={searchVal}
                    onChange={e => handleSearchChange(e.target.value)}
                    onBlur={() => setTimeout(() => setShowSugg(false), 160)}
                    onFocus={() => searchVal.length >= 1 && citySugg.length > 0 && setShowSugg(true)}
                    style={{ width: "100%", padding: "12px 16px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "15px", outline: "none", color: "#111827", boxSizing: "border-box" }} />
                  {(showSugg || loadingSugg) && (
                    <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", border: "1px solid #E5E7EB", borderRadius: "10px", boxShadow: "0 6px 24px rgba(0,0,0,0.13)", zIndex: 200, marginTop: "4px", overflow: "hidden" }}>
                      {loadingSugg && citySugg.length === 0 ? (
                        <div style={{ padding: "10px 14px", fontSize: "13px", color: "#9CA3AF" }}>Searching…</div>
                      ) : citySugg.map((c, i) => (
                        <div key={i}
                          onMouseDown={() => { setSearchVal(c.label); setShowSugg(false); }}
                          style={{ padding: "10px 14px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: i < citySugg.length - 1 ? "1px solid #F3F4F6" : "none" }}
                          onMouseEnter={e => e.currentTarget.style.background = "#EBF3FF"}
                          onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                          <span style={{ fontSize: "14px", color: "#111827", fontWeight: "600" }}>{c.name}</span>
                          <span style={{ fontSize: "12px", color: "#9CA3AF" }}>{c.sub}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <button type="submit" style={{ background: ORANGE, color: "#fff", border: "none", borderRadius: "10px", padding: "12px 28px", fontSize: "15px", fontWeight: "700", cursor: "pointer" }}>Search →</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* TRUST BAR */}
      <div style={{ background: NAVY, padding: "14px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {[["✅","Best price guarantee"],["💰","Earn real cash back"],["🔄","Free cancellation options"],["🛡️","Secure booking"],["🧑‍✈️","Personal travel agent"]].map(([icon, text], i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff", fontSize: "13px", fontWeight: "500" }}>
              <span>{icon}</span><span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* POPULAR DESTINATIONS */}
      <div style={{ background: "#F8FAFF", padding: "64px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 8px" }}>Explore the world</p>
          <h2 style={{ fontSize: "30px", fontWeight: "800", color: "#111827", margin: "0 0 32px" }}>Popular destinations</h2>
          <div style={isMobile ? {
            display: "flex", gap: "14px", overflowX: "auto", paddingBottom: "8px",
            scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch",
          } : {
            display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "20px",
          }}>
            {destinations.map((dest, i) => (
              <a key={i} href={dest.href} style={{
                textDecoration: "none", display: "block", borderRadius: "16px", overflow: "hidden",
                position: "relative", height: "210px", boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                ...(isMobile ? { flexShrink: 0, width: "200px", scrollSnapAlign: "start" } : {}),
              }}>
                <img src={dest.photo} alt={dest.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.1) 60%)" }} />
                <div style={{ position: "absolute", bottom: "16px", left: "16px" }}>
                  <span style={{ background: ORANGE, color: "#fff", fontSize: "10px", fontWeight: "700", padding: "2px 8px", borderRadius: "4px" }}>{dest.tag}</span>
                  <p style={{ color: "#fff", fontWeight: "700", fontSize: "18px", margin: "6px 0 2px" }}>{dest.name}</p>
                  <p style={{ color: "#D1D5DB", fontSize: "12px", margin: 0 }}>{dest.country}</p>
                </div>
              </a>
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

"use client";

import { useState, useRef, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const FAQS = [
  { q: ["how do i earn points", "earn points", "how points work", "points"], a: "You earn 5 pts per $1 on hotels and flights, and 10 pts per $1 on cruises and vacation packages." },
  { q: ["redeem points", "how to redeem", "cash out", "withdraw"], a: "Redeem at 1,000 pts via Zelle, Cash App, or Venmo. 10,000 pts = $10, 25,000 = $25, 50,000 = $50, 100,000 = $100." },
  { q: ["tiers", "tier", "explorer", "voyager", "navigator", "admiral", "levels"], a: "4 tiers: Explorer (0–9,999), Voyager (10k–49,999), Navigator (50k–99,999), Admiral (100k+). Higher tiers unlock better perks." },
  { q: ["cancel", "cancellation", "refund"], a: "Cancellation policies vary by provider. Most hotels offer free cancellation — check listing details before booking." },
  { q: ["how to book", "book a cruise", "book a hotel", "book flights", "booking"], a: "Browse Hotels, Flights, or Cruises, pick your option, and you'll be directed to our trusted partner to complete the booking. Points are credited after your trip." },
  { q: ["contact", "email", "phone", "reach you", "support"], a: "Email us at roomvoyager@protonmail.com or use the contact form. We respond within 24 hours on business days." },
  { q: ["group", "group booking", "group rate"], a: "We offer special group rates for cruises, hotels, and packages. Email us directly for group inquiries." },
  { q: ["referral", "refer a friend", "referrals"], a: "Refer a friend and both of you earn bonus points: 200 for flights, 350 for hotels, 500 for cruises or packages." },
  { q: ["sign up", "create account", "join", "register", "free"], a: "Creating an account is free — no credit card required. Sign up at roomvoyager.com/account/signup." },
  { q: ["birthday", "birthday bonus"], a: "Voyager, Navigator, and Admiral members receive a 500-point birthday bonus automatically." },
];

function getBotReply(input) {
  const lower = input.toLowerCase();
  for (const faq of FAQS) {
    if (faq.q.some(k => lower.includes(k))) return faq.a;
  }
  return "I'm not sure about that one! Visit our contact page or email roomvoyager@protonmail.com and we'll get back to you within 24 hours.";
}

function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm Compass, your RoomVoyager assistant. Ask me anything about rewards, bookings, or your account." }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  function send() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages(prev => [...prev, { from: "user", text: trimmed }, { from: "bot", text: getBotReply(trimmed) }]);
    setInput("");
  }

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 9999 }}>
      {open && (
        <div style={{ width: "320px", background: "#fff", borderRadius: "20px", boxShadow: "0 8px 40px rgba(0,59,149,0.18)", overflow: "hidden", marginBottom: "12px" }}>
          {/* Header */}
          <div style={{ background: NAVY, padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "30px", height: "30px", background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0 }}>💬</div>
              <div>
                <p style={{ color: "#93C5FD", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>RoomVoyager Assistant</p>
                <p style={{ color: "#fff", fontSize: "14px", fontWeight: "800", margin: 0 }}>Compass</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "#93C5FD", fontSize: "20px", cursor: "pointer", lineHeight: 1, padding: "0 2px" }}>×</button>
          </div>
          {/* Messages */}
          <div style={{ padding: "14px 16px", height: "220px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "85%", padding: "8px 12px",
                  borderRadius: m.from === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                  background: m.from === "user" ? NAVY : LIGHT_BLUE,
                  color: m.from === "user" ? "#fff" : "#111827",
                  fontSize: "13px", lineHeight: 1.5,
                }}>{m.text}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          {/* Suggestion chips */}
          <div style={{ padding: "0 12px 8px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {["Earn points", "Redeem", "Tiers"].map((q, i) => (
              <button key={i} onClick={() => { setMessages(prev => [...prev, { from: "user", text: q }, { from: "bot", text: getBotReply(q) }]); }}
                style={{ background: LIGHT_BLUE, color: NAVY, border: "none", borderRadius: "999px", padding: "5px 12px", fontSize: "11px", fontWeight: "600", cursor: "pointer" }}>
                {q}
              </button>
            ))}
          </div>
          {/* Input */}
          <div style={{ borderTop: "1px solid #E5E7EB", padding: "10px 14px", display: "flex", gap: "8px" }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Ask a question..."
              style={{ flex: 1, padding: "8px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
            />
            <button onClick={send} style={{ background: ORANGE, color: "#fff", border: "none", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>→</button>
          </div>
        </div>
      )}
      {/* Toggle bubble */}
      <button onClick={() => setOpen(o => !o)}
        style={{ width: "56px", height: "56px", background: NAVY, border: "3px solid #fff", borderRadius: "50%", boxShadow: "0 4px 20px rgba(0,59,149,0.35)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginLeft: "auto" }}>
        {open ? "×" : "💬"}
      </button>
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
    else window.location.href = `/flights${q}`;
  }

  return (
    <>
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <NavBar active="home" />

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
            ) : (
              <form onSubmit={handleSearch} style={{ display: "flex", gap: "8px", padding: "0 4px 4px" }}>
                <div style={{ flex: 1, position: "relative" }}>
                  <input type="text"
                    placeholder={activeTab === "hotels" ? "Where are you going?" : "Where are you flying from?"}
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
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "18px" }}>
                    {card.tags.map((t, j) => <span key={j} style={{ background: card.tagBg, color: card.tagColor, fontSize: "11px", fontWeight: "600", padding: "3px 10px", borderRadius: "999px" }}>{t}</span>)}
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
    </>
  );
}

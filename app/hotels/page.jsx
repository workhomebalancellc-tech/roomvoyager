"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingChat from "../components/FloatingChat";
import PromoBanner from "../components/PromoBanner";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";


function HotelsContent() {
  const searchParams = useSearchParams();
  const [destination, setDestination] = useState(searchParams.get("q") || "");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" ? window.innerWidth < 768 : false);
  const [destSugg, setDestSugg] = useState([]);
  const [showSugg, setShowSugg] = useState(false);
  const [loadingSugg, setLoadingSugg] = useState(false);
  const debounceRef = useRef(null);
  // menuOpen handled by shared NavBar

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const today = mounted ? new Date().toISOString().split("T")[0] : "";
  const minCheckOut = checkIn
    ? (() => { const d = new Date(checkIn + "T12:00:00"); d.setDate(d.getDate() + 1); return d.toISOString().split("T")[0]; })()
    : today;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function clearFilters() { setDestination(""); setCheckIn(""); setCheckOut(""); setAdults("2"); setDestSugg([]); setShowSugg(false); }

  function handleCheckInChange(val) {
    setCheckIn(val);
    if (val) {
      const d = new Date(val + "T12:00:00");
      d.setDate(d.getDate() + 1);
      const next = d.toISOString().split("T")[0];
      if (!checkOut || checkOut <= val) setCheckOut(next);
    }
  }

  function handleDestChange(val) {
    setDestination(val);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!val || val.length < 2) { setDestSugg([]); setShowSugg(false); return; }
    setLoadingSugg(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/cities?q=${encodeURIComponent(val)}`);
        const data = await res.json();
        setDestSugg(data);
        setShowSugg(data.length > 0);
      } catch { setDestSugg([]); setShowSugg(false); }
      finally { setLoadingSugg(false); }
    }, 300);
  }

  function handleSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams({ destination: destination || "United States", startDate: checkIn, endDate: checkOut, adults, camref: "1110l8R3Z", pubref: "hotels-page" });
    const expediaUrl = `https://www.expedia.com/Hotel-Search?${params.toString()}`;
    window.open(`/redirect?to=${encodeURIComponent(expediaUrl)}&partner=Expedia&product=hotel`, "_blank", "noopener,noreferrer");
  }

  function pickHotelDest(name) {
    setDestination(name);
    setTimeout(() => {
      document.getElementById("hotel-search-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }

  const destinations = [
    { name: "Cancún", photo: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=300&h=200&fit=crop&auto=format", country: "Mexico", tag: "Most Popular" },
    { name: "Miami", photo: "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?w=300&h=200&fit=crop&auto=format", country: "Florida, USA", tag: "Trending" },
    { name: "Las Vegas", photo: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=300&h=200&fit=crop&auto=format", country: "Nevada, USA", tag: "Best Value" },
    { name: "Paris", photo: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=300&h=200&fit=crop&auto=format", country: "France", tag: "Romantic" },
    { name: "Orlando", photo: "https://images.unsplash.com/photo-1627035983655-0ceec61bb733?w=300&h=200&fit=crop&auto=format", country: "Florida, USA", tag: "Family Pick" },
    { name: "Punta Cana", photo: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=300&h=200&fit=crop&auto=format", country: "Dominican Republic", tag: "All-Inclusive" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <NavBar active="hotels" />
      <PromoBanner />

      {/* HERO */}
      <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=500&fit=crop&auto=format" alt="Luxury hotel pool" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.65) 0%, rgba(0,15,60,0.82) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🏨 Powered by Expedia</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(26px, 4vw, 44px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.2, textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>Find your perfect hotel</h1>
          <p style={{ color: "#BFDBFE", fontSize: "16px", margin: 0, maxWidth: "480px" }}>Search millions of properties — best price guarantee, free cancellation on most rooms.</p>
        </div>
      </div>

      {/* TRUST BAR */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "14px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {[["✅","Best price guarantee"],["🔄","Free cancellation on most rooms"],["💳","No booking fees"],["🏆","Earn 5 pts per $1"],["🏨","1M+ verified properties"]].map(([icon,text],i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:"6px", fontSize:"13px", color:"#374151" }}><span>{icon}</span><span>{text}</span></div>
          ))}
        </div>
      </div>

      {/* SEARCH */}
      <div id="hotel-search-form" style={{ background: NAVY, padding: "32px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ background: "#fff", borderRadius: "18px", padding: "28px 28px 24px", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px", alignItems: "flex-end" }}>
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#93C5FD", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Destination</label>
                <div style={{ position: "relative" }}>
                  <input type="text" placeholder="City, hotel, or area" value={destination}
                    onChange={e => handleDestChange(e.target.value)}
                    onBlur={() => setTimeout(() => setShowSugg(false), 160)}
                    onFocus={() => destination.length >= 1 && destSugg.length > 0 && setShowSugg(true)}
                    style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #D1D5DB", borderRadius: "8px", fontSize: "14px", background: "#fff", color: "#111827", boxSizing: "border-box", outline: "none", height: "42px" }} />
                  {(showSugg || loadingSugg) && (
                    <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#fff", border: "1px solid #E5E7EB", borderRadius: "8px", boxShadow: "0 6px 20px rgba(0,0,0,0.15)", zIndex: 200, marginTop: "3px", overflow: "hidden" }}>
                      {loadingSugg && destSugg.length === 0 ? (
                        <div style={{ padding: "10px 12px", fontSize: "12px", color: "#9CA3AF" }}>Searching…</div>
                      ) : destSugg.map((c, i) => (
                        <div key={i}
                          onMouseDown={() => { setDestination(c.label); setShowSugg(false); }}
                          style={{ padding: "9px 12px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: i < destSugg.length - 1 ? "1px solid #F3F4F6" : "none" }}
                          onMouseEnter={e => e.currentTarget.style.background = "#EBF3FF"}
                          onMouseLeave={e => e.currentTarget.style.background = "#fff"}>
                          <span style={{ fontSize: "13px", color: "#111827", fontWeight: "600" }}>{c.name}</span>
                          <span style={{ fontSize: "11px", color: "#9CA3AF" }}>{c.sub}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#93C5FD", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Check-In</label>
                <input type="date" value={checkIn} min={today} onChange={e => handleCheckInChange(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #D1D5DB", borderRadius: "8px", fontSize: "14px", background: "#fff", color: "#111827", boxSizing: "border-box", outline: "none", height: "42px" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#93C5FD", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Check-Out</label>
                <input type="date" value={checkOut} min={minCheckOut} onChange={e => setCheckOut(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #D1D5DB", borderRadius: "8px", fontSize: "14px", background: "#fff", color: "#111827", boxSizing: "border-box", outline: "none", height: "42px" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "11px", fontWeight: "700", color: "#93C5FD", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Guests</label>
                <select value={adults} onChange={e => setAdults(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #D1D5DB", borderRadius: "8px", fontSize: "14px", background: "#fff", color: "#111827", boxSizing: "border-box", outline: "none", height: "42px", cursor: "pointer" }}>
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n===1?"guest":"guests"}</option>)}
                </select>
              </div>
              <button onClick={handleSearch} style={{ background: ORANGE, color: "#fff", border: "none", borderRadius: "8px", padding: "10px 20px", fontSize: "15px", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(255,102,0,0.3)", height: "42px", alignSelf: "flex-end", width: "100%" }}>
                Search Hotels
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* Trending Destinations */}
        <div style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Popular right now</p>
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "0 0 24px" }}>Trending destinations</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "14px" }}>
            {destinations.map((dest, i) => (
              <button key={i} onClick={() => pickHotelDest(dest.name)}
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

        {/* Why Book */}
        <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "20px", padding: "36px", marginBottom: "28px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 24px" }}>Why book hotels through RoomVoyager?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "24px" }}>
            {[
              { icon: "💰", title: "Earn real cash back", desc: "5 points per $1 spent — redeemable for real money after your stay" },
              { icon: "🔒", title: "Secure booking", desc: "All bookings processed through Expedia's trusted platform" },
              // { icon: "📞", title: "We're here to help", desc: "Questions about your booking? We'll help you find the perfect stay" },
              { icon: "🌍", title: "Massive selection", desc: "Over 1 million properties from budget to luxury worldwide" },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ width: "44px", height: "44px", background: LIGHT_BLUE, borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginBottom: "12px" }}>{item.icon}</div>
                <p style={{ fontSize: "14px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>{item.title}</p>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: 0, lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rewards CTA */}
        <div style={{ position: "relative", overflow: "hidden", borderRadius: "20px" }}>
          <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1400&h=220&fit=crop&auto=format" alt="Hotel deals" style={{ width: "100%", height: isMobile ? "260px" : "180px", objectFit: "cover", borderRadius: "20px" }} />
          <div style={{ position: "absolute", inset: 0, background: `${NAVY}e0`, borderRadius: "20px" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: isMobile ? "center" : "space-between", alignItems: isMobile ? "flex-start" : "center", flexDirection: isMobile ? "column" : "row", padding: isMobile ? "28px 24px 32px" : "0 40px", gap: "20px" }}>
            <div>
              <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#fff", margin: "0 0 6px" }}>Earn rewards on every hotel you book</h3>
              <p style={{ color: "#BFDBFE", fontSize: "14px", margin: 0 }}>5 points per $1 · Redeem for real cash · No blackout dates</p>
            </div>
            <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: isMobile ? "14px 28px" : "12px 28px", borderRadius: "10px", fontSize: "15px", fontWeight: "700", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(255,102,0,0.4)", alignSelf: isMobile ? "stretch" : "auto", textAlign: "center" }}>
              Join Rewards free →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HotelsPage() {
  return (
    <>
      <Suspense fallback={null}>
        <HotelsContent />
      </Suspense>
      <FloatingChat />
      <Footer />
    </>
  );
}

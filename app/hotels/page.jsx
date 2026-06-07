"use client";

import { useState } from "react";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

export default function HotelsPage() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");

  function clearFilters() { setDestination(""); setCheckIn(""); setCheckOut(""); setAdults("2"); }

  function handleSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams({ destination: destination || "United States", startDate: checkIn, endDate: checkOut, adults, camref: "1110l8R3Z", pubref: "hotels-page" });
    window.open(`https://www.expedia.com/Hotel-Search?${params.toString()}`, "_blank");
  }

  const destinations = [
    { name: "Cancún", photo: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=300&h=200&fit=crop&auto=format", country: "Mexico", tag: "Most Popular" },
    { name: "Miami", photo: "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?w=300&h=200&fit=crop&auto=format", country: "Florida, USA", tag: "Trending" },
    { name: "Las Vegas", photo: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=300&h=200&fit=crop&auto=format", country: "Nevada, USA", tag: "Best Value" },
    { name: "Paris", photo: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=300&h=200&fit=crop&auto=format", country: "France", tag: "Romantic" },
    { name: "Orlando", photo: "https://images.unsplash.com/photo-1526472050800-0d8e22b0a0c8?w=300&h=200&fit=crop&auto=format", country: "Florida, USA", tag: "Family Pick" },
    { name: "Punta Cana", photo: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=300&h=200&fit=crop&auto=format", country: "Dominican Republic", tag: "All-Inclusive" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "0 24px", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 1px 8px rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
          <a href="/" style={{ fontSize: "22px", fontWeight: "800", color: NAVY, textDecoration: "none" }}>Room<span style={{ color: ORANGE }}>Voyager</span></a>
          <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
            <a href="/hotels" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "700", borderBottom: `2px solid ${ORANGE}`, paddingBottom: "2px" }}>Hotels</a>
            <a href="/flights" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Flights</a>
            <a href="/cruises" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Cruises</a>
            <a href="/rewards" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Rewards</a>
            <a href="/profile" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Profile</a>
            <a href="/account/signin" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "7px 16px", border: `1.5px solid ${NAVY}`, borderRadius: "8px" }}>Sign In</a>
            <a href="/account/signup" style={{ background: ORANGE, color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: "700", padding: "8px 18px", borderRadius: "8px" }}>Sign Up</a>
          </div>
        </div>
      </nav>

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

      {/* SEARCH — flows seamlessly from hero */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ background: NAVY, padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "#fff", fontSize: "13px", fontWeight: "600" }}>🔍 Search hotels</span>
            <span style={{ color: "#93C5FD", fontSize: "12px" }}>Free — no account required</span>
          </div>
          <form onSubmit={handleSearch} style={{ padding: "24px 0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", alignItems: "end" }}>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Destination</label>
                <input type="text" placeholder="City, hotel, or area" value={destination} onChange={e => setDestination(e.target.value)}
                  style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Check-in</label>
                <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)}
                  style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Check-out</label>
                <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)}
                  style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Guests</label>
                <select value={adults} onChange={e => setAdults(e.target.value)}
                  style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", background: "#fff", boxSizing: "border-box" }}>
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n===1?"guest":"guests"}</option>)}
                </select>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <button type="submit" style={{ width: "100%", padding: "11px 24px", background: ORANGE, color: "#fff", border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: "700", cursor: "pointer" }}>Search Hotels →</button>
                <button type="button" onClick={clearFilters} style={{ width: "100%", padding: "8px 24px", background: "none", color: "#6B7280", border: "1px solid #D1D5DB", borderRadius: "8px", fontSize: "13px", cursor: "pointer" }}>Clear filters</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* REWARDS BANNER */}
      <div style={{ background: NAVY, padding: "12px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", alignItems: "center", gap: "10px" }}>
          <span>💰</span>
          <p style={{ color: "#fff", fontSize: "13px", margin: 0 }}>
            <strong>Earn 5 RoomVoyager Rewards points for every $1 spent on hotels</strong> — redeemable for real cash via Zelle, Cash App, or Venmo.{" "}
            <a href="/rewards" style={{ color: "#FFA366", textDecoration: "underline" }}>Learn more →</a>
          </p>
        </div>
      </div>

      {/* TRUST BADGES */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "14px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {[["✅","Best price guarantee"],["🔄","Free cancellation on most rooms"],["💳","No booking fees"],["🏨","1M+ properties worldwide"],["⭐","Verified guest reviews"]].map(([icon,text],i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:"6px", fontSize:"13px", color:"#374151" }}><span>{icon}</span><span>{text}</span></div>
          ))}
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
              <a key={i} href={`https://www.expedia.com/Hotel-Search?destination=${dest.name}&affiliateid=1110l8R3Z`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", overflow: "hidden", display: "flex", cursor: "pointer" }}
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
              </a>
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
              { icon: "📞", title: "Agent support", desc: "Need help with a group booking? Our advisor handles everything" },
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

        {/* Group CTA with photo */}
        <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1200&h=240&fit=crop&auto=format" alt="Group travel" style={{ width: "100%", height: "160px", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to right, ${NAVY}f0, rgba(0,30,80,0.5))` }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 32px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#fff", margin: "0 0 4px" }}>Need a group hotel booking?</h3>
              <p style={{ fontSize: "13px", color: "#BFDBFE", margin: 0 }}>10+ rooms? Our travel advisor negotiates group rates directly with hotels.</p>
            </div>
            <a href="mailto:workhomebalancellc@gmail.com?subject=Group Hotel Booking Request"
              style={{ background: ORANGE, color: "#fff", padding: "12px 24px", borderRadius: "10px", fontSize: "14px", fontWeight: "700", textDecoration: "none", whiteSpace: "nowrap" }}>
              Contact our agent →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

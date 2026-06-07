"use client";

import { useState } from "react";

export default function HotelsPage() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");

  function clearFilters() {
    setDestination("");
    setCheckIn("");
    setCheckOut("");
    setAdults("2");
  }

  const hasFilters = destination || checkIn || checkOut || adults !== "2";

  function handleSearch(e) {
    e.preventDefault();
    const params = new URLSearchParams({
      destination: destination || "United States",
      startDate: checkIn,
      endDate: checkOut,
      adults,
      camref: "1110l8R3Z",
      pubref: "hotels-page",
    });
    window.open(`https://www.expedia.com/Hotel-Search?${params.toString()}`, "_blank");
  }

  const destinations = [
    { name: "Cancun", photo: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=96&h=96&fit=crop&auto=format", country: "Mexico", tag: "Most Popular" },
    { name: "Miami", photo: "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?w=96&h=96&fit=crop&auto=format", country: "Florida, USA", tag: "Trending" },
    { name: "Las Vegas", photo: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=96&h=96&fit=crop&auto=format", country: "Nevada, USA", tag: "Best Value" },
    { name: "Paris", photo: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=96&h=96&fit=crop&auto=format", country: "France", tag: "Romantic" },
    { name: "Orlando", photo: "https://images.unsplash.com/photo-1526472050800-0d8e22b0a0c8?w=96&h=96&fit=crop&auto=format", country: "Florida, USA", tag: "Family Pick" },
    { name: "Punta Cana", photo: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=96&h=96&fit=crop&auto=format", country: "Dominican Republic", tag: "All-Inclusive" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", fontFamily: "system-ui, sans-serif" }}>
      {/* NAV */}
      <nav style={{ background: "#991B1B", padding: "16px 24px", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ fontSize: "22px", fontWeight: "700", color: "#fff", textDecoration: "none" }}>RoomVoyager</a>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a href="/hotels" style={{ color: "#fff", fontWeight: "600", textDecoration: "none", borderBottom: "2px solid #fff", paddingBottom: "2px" }}>Hotels</a>
            <a href="/flights" style={{ color: "#fca5a5", textDecoration: "none" }}>Flights</a>
            <a href="/cruises" style={{ color: "#fca5a5", textDecoration: "none" }}>Cruises</a>
            <a href="/rewards" style={{ color: "#fca5a5", textDecoration: "none" }}>Rewards</a>
            <a href="/profile" style={{ color: "#fca5a5", textDecoration: "none" }}>Profile</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 40%, #7f1d1d 100%)", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ color: "#fca5a5", fontSize: "11px", fontWeight: "600", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            🏨 Powered by Expedia
          </p>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "700", margin: "0 0 12px", lineHeight: "1.2" }}>
            Find your perfect hotel
          </h1>
          <p style={{ color: "#fca5a5", fontSize: "16px", margin: 0, maxWidth: "500px", lineHeight: "1.6" }}>
            Search millions of properties worldwide — best price guarantee, free cancellation on most rooms.
          </p>
        </div>
      </div>

      {/* EXPEDIA WIDGET */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e7eb", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ background: "#7f1d1d", padding: "10px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "#fff", fontSize: "13px", fontWeight: "500" }}>🔍 Search hotels</span>
            <span style={{ color: "#fca5a5", fontSize: "12px" }}>Free — no account required</span>
          </div>
          <form onSubmit={handleSearch} style={{ padding: "24px 0" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", alignItems: "end" }}>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Destination</label>
                <input
                  type="text"
                  placeholder="City, hotel, or area"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  style={{ width: "100%", padding: "10px 14px", border: "1px solid #d1d5db", borderRadius: "8px", fontSize: "14px", outline: "none" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Check-in</label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  style={{ width: "100%", padding: "10px 14px", border: "1px solid #d1d5db", borderRadius: "8px", fontSize: "14px", outline: "none" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Check-out</label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  style={{ width: "100%", padding: "10px 14px", border: "1px solid #d1d5db", borderRadius: "8px", fontSize: "14px", outline: "none" }}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Guests</label>
                <select
                  value={adults}
                  onChange={(e) => setAdults(e.target.value)}
                  style={{ width: "100%", padding: "10px 14px", border: "1px solid #d1d5db", borderRadius: "8px", fontSize: "14px", outline: "none", background: "#fff" }}
                >
                  {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? "guest" : "guests"}</option>)}
                </select>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <button
                  type="submit"
                  style={{ width: "100%", padding: "11px 24px", background: "#991b1b", color: "#fff", border: "none", borderRadius: "8px", fontSize: "14px", fontWeight: "600", cursor: "pointer" }}
                >
                  Search Hotels →
                </button>
                <button
                  type="button"
                  onClick={clearFilters}
                  style={{ width: "100%", padding: "8px 24px", background: "none", color: "#6b7280", border: "1px solid #d1d5db", borderRadius: "8px", fontSize: "13px", cursor: "pointer" }}
                >
                  Clear filters
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* REWARDS BANNER */}
      <div style={{ background: "#991b1b", padding: "12px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "20px" }}>💰</span>
          <p style={{ color: "#fff", fontSize: "13px", margin: 0, lineHeight: "1.5" }}>
            <strong>Earn 5 RoomVoyager Rewards points for every $1 spent on hotels</strong> — redeemable for real cash via Zelle, Cash App, or Venmo.{" "}
            <a href="/rewards" style={{ color: "#fca5a5", textDecoration: "underline" }}>Learn more →</a>
          </p>
        </div>
      </div>

      {/* TRUST BADGES */}
      <div style={{ background: "#fff", borderBottom: "0.5px solid #e5e7eb", padding: "16px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
          {[
            { icon: "✅", text: "Best price guarantee" },
            { icon: "🔄", text: "Free cancellation on most rooms" },
            { icon: "💳", text: "No booking fees" },
            { icon: "🏨", text: "1M+ properties worldwide" },
            { icon: "⭐", text: "Verified guest reviews" },
          ].map((badge, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#374151" }}>
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px 80px" }}>
        {/* Trending Destinations */}
        <div style={{ marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: "600" }}>Popular right now</p>
          <h2 style={{ fontSize: "22px", fontWeight: "600", color: "#111827", margin: "0 0 20px" }}>Trending destinations</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "14px" }}>
            {destinations.map((dest, i) => (
              <a
                key={i}
                href={`https://www.expedia.com/Hotel-Search?destination=${dest.name}&affiliateid=1110l8R3Z&pubref=hotels-page-dest`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{ background: "#fff", border: "0.5px solid #e5e7eb", borderRadius: "12px", padding: "16px", display: "flex", alignItems: "center", gap: "14px", cursor: "pointer", transition: "all 0.15s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 16px rgba(153,27,27,0.15)"; e.currentTarget.style.borderColor = "#fca5a5"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "#e5e7eb"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ width: "56px", height: "56px", borderRadius: "10px", overflow: "hidden", flexShrink: 0 }}>
                    <img src={dest.photo} alt={dest.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "14px", fontWeight: "600", color: "#111827", margin: "0 0 2px" }}>{dest.name}</p>
                    <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>{dest.country}</p>
                  </div>
                  <span style={{ fontSize: "10px", fontWeight: "500", background: "#fef2f2", color: "#991b1b", padding: "3px 8px", borderRadius: "999px", whiteSpace: "nowrap" }}>
                    {dest.tag}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Why Book */}
        <div style={{ background: "#fff", border: "0.5px solid #e5e7eb", borderRadius: "16px", padding: "32px", marginBottom: "32px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#111827", margin: "0 0 20px" }}>Why book hotels through RoomVoyager?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
            {[
              { icon: "💰", title: "Earn real cash back", desc: "5 points per $1 spent — redeemable for cash after your stay" },
              { icon: "🔒", title: "Secure booking", desc: "All bookings processed through Expedia's trusted platform" },
              { icon: "📞", title: "Agent support", desc: "Need help with a group booking? Our advisor handles everything" },
              { icon: "🌍", title: "Massive selection", desc: "Over 1 million properties from budget to luxury worldwide" },
            ].map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: "24px", marginBottom: "8px" }}>{item.icon}</div>
                <p style={{ fontSize: "14px", fontWeight: "600", color: "#111827", margin: "0 0 4px" }}>{item.title}</p>
                <p style={{ fontSize: "13px", color: "#6b7280", margin: 0, lineHeight: "1.5" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Group Booking CTA */}
        <div style={{ background: "linear-gradient(135deg, #7f1d1d, #991b1b)", borderRadius: "16px", padding: "28px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h3 style={{ fontSize: "17px", fontWeight: "600", color: "#fff", margin: "0 0 4px" }}>Need a group hotel booking?</h3>
            <p style={{ fontSize: "13px", color: "#fca5a5", margin: 0 }}>10+ rooms? Our travel advisor negotiates group rates directly with hotels.</p>
          </div>
          <a
            href="mailto:workhomebalancellc@gmail.com?subject=Group Hotel Booking Request"
            style={{ background: "#fff", color: "#7f1d1d", padding: "11px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: "600", textDecoration: "none", whiteSpace: "nowrap" }}
          >
            Contact our agent →
          </a>
        </div>
      </div>

    </div>
  );
}

"use client";

import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("hotels");
  const [searchVal, setSearchVal] = useState("");
  const { user } = useAuth();

  const destinations = [
    { name: "Cancún", country: "Mexico", photo: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=500&h=320&fit=crop&auto=format", tag: "Most Popular", href: "/hotels" },
    { name: "Miami", country: "Florida, USA", photo: "https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?w=500&h=320&fit=crop&auto=format", tag: "Trending", href: "/hotels" },
    { name: "Paris", country: "France", photo: "https://images.unsplash.com/photo-1431274172761-fca41d930114?w=500&h=320&fit=crop&auto=format", tag: "Romantic", href: "/hotels" },
    { name: "Caribbean", country: "Multiple Islands", photo: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=500&h=320&fit=crop&auto=format", tag: "Top Cruise Destination", href: "/cruises" },
    { name: "Alaska", country: "USA", photo: "https://images.unsplash.com/photo-1527004013197-933b6e1a90b2?w=500&h=320&fit=crop&auto=format", tag: "Adventure", href: "/cruises" },
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
    <div style={{ minHeight: "100vh", background: "#fff", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "0 24px", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 1px 8px rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
          <a href="/" style={{ fontSize: "22px", fontWeight: "800", color: NAVY, textDecoration: "none" }}>
            Room<span style={{ color: ORANGE }}>Voyager</span>
          </a>
          <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
            <a href="/hotels"   style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Hotels</a>
            <a href="/flights"  style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Flights</a>
            <a href="/cruises"  style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Cruises</a>
            <a href="/packages" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Packages</a>
            <a href="/rewards"  style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Rewards</a>
            <a href="/contact"  style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Contact</a>
            {user ? (
              <a href="/profile" style={{ display: "flex", alignItems: "center", gap: "8px", background: LIGHT_BLUE, padding: "7px 14px", borderRadius: "8px", textDecoration: "none" }}>
                {user.image
                  ? <img src={user.image} alt="" style={{ width: "26px", height: "26px", borderRadius: "50%", objectFit: "cover" }} />
                  : <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "800", color: "#fff" }}>{(user.name || user.email || "U")[0].toUpperCase()}</div>
                }
                <span style={{ fontSize: "14px", fontWeight: "600", color: NAVY }}>{user.name?.split(" ")[0] || "My Account"}</span>
              </a>
            ) : (
              <>
                <a href="/account/signin" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "7px 16px", border: `1.5px solid ${NAVY}`, borderRadius: "8px" }}>Sign In</a>
                <a href="/account/signup" style={{ background: ORANGE, color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: "700", padding: "8px 18px", borderRadius: "8px" }}>Sign Up Free</a>
              </>
            )}
          </div>
        </div>
      </nav>

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
                <button key={tab} onClick={() => { setActiveTab(tab); setSearchVal(""); }}
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
                <input type="text" placeholder={activeTab === "hotels" ? "Where are you going?" : "Where are you flying from?"}
                  value={searchVal} onChange={e => setSearchVal(e.target.value)}
                  style={{ flex: 1, padding: "12px 16px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "15px", outline: "none", color: "#111827" }} />
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }}>
            {destinations.map((dest, i) => (
              <a key={i} href={dest.href} style={{ textDecoration: "none", display: "block", borderRadius: "16px", overflow: "hidden", position: "relative", height: "210px", boxShadow: "0 4px 20px rgba(0,0,0,0.12)" }}>
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
                tags: ["Solo, family & honeymoon", "Agent support", "Earn 10 pts/$1"], btnText: "Search Cruises →", href: "/cruises", btnColor: ORANGE, tagBg: "#FFF0E6", tagColor: "#C2410C",
              },
              {
                label: "Flights", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&h=300&fit=crop&auto=format",
                headline: "Flights to Anywhere", body: "Compare hundreds of airlines. Find the best fares and earn points on every ticket booked.",
                tags: ["Compare all airlines", "Earn 5 pts/$1", "Best fare guarantee"], btnText: "Search Flights →", href: "/flights", btnColor: "#0052CC", tagBg: LIGHT_BLUE, tagColor: NAVY,
              },
            ].map((card, i) => (
              <div key={i} style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid #E5E7EB", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
                <div style={{ position: "relative", height: "180px" }}>
                  <img src={card.img} alt={card.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,30,80,0.75), transparent)" }} />
                  <div style={{ position: "absolute", top: "18px", left: "18px" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" }}>
            {[
              { icon: "💰", title: "Real Cash Back", desc: "Earn points on every booking and redeem for real money — not just credits." },
              { icon: "🧑‍✈️", title: "Personal Travel Agent", desc: "A human advisor finds the best deals, bundles trips, and handles groups." },
              { icon: "🔒", title: "Secure Booking", desc: "All payments go through trusted platforms like Expedia and CruiseDirect." },
              { icon: "🌍", title: "Massive Selection", desc: "1M+ hotels and 10+ cruise lines across every destination worldwide." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: "16px", padding: "28px 22px", border: "1px solid #E8F0FE", boxShadow: "0 2px 10px rgba(0,59,149,0.06)" }}>
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

      {/* FOOTER */}
      <footer style={{ background: "#07111F", padding: "48px 24px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "32px", marginBottom: "40px" }}>
            <div>
              <p style={{ color: "#fff", fontSize: "18px", fontWeight: "800", margin: "0 0 10px" }}>Room<span style={{ color: ORANGE }}>Voyager</span></p>
              <p style={{ color: "#9CA3AF", fontSize: "13px", lineHeight: "1.65", margin: 0 }}>Your trusted travel partner. Hotels, flights, and cruises — all in one place.</p>
            </div>
            <div>
              <p style={{ color: "#fff", fontSize: "12px", fontWeight: "700", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Travel</p>
              {[["Hotels","/hotels"],["Flights","/flights"],["Cruises","/cruises"]].map(([n,h]) => <a key={n} href={h} style={{ display:"block", color:"#9CA3AF", fontSize:"13px", textDecoration:"none", marginBottom:"8px" }}>{n}</a>)}
            </div>
            <div>
              <p style={{ color: "#fff", fontSize: "12px", fontWeight: "700", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Account</p>
              {[["Sign In","/account/signin"],["Sign Up","/account/signup"],["Rewards","/rewards"],["Profile","/profile"]].map(([n,h]) => <a key={n} href={h} style={{ display:"block", color:"#9CA3AF", fontSize:"13px", textDecoration:"none", marginBottom:"8px" }}>{n}</a>)}
            </div>
            <div>
              <p style={{ color: "#fff", fontSize: "12px", fontWeight: "700", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Company</p>
              {[["FAQ","/faq"],["Contact","/contact"],["Privacy Policy","/privacy"],["Terms","/terms"]].map(([n,h]) => <a key={n} href={h} style={{ display:"block", color:"#9CA3AF", fontSize:"13px", textDecoration:"none", marginBottom:"8px" }}>{n}</a>)}
            </div>
          </div>
          <div style={{ borderTop: "1px solid #1F2937", paddingTop: "20px", textAlign: "center" }}>
            <p style={{ color: "#6B7280", fontSize: "12px", margin: 0 }}>© 2026 RoomVoyager Travel. All rights reserved. · Proud affiliate of Expedia, CruiseDirect &amp; more.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

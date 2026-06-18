"use client";

import { useState, useEffect } from "react";
import { Suspense } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingChat from "../components/FloatingChat";
import PromoBanner from "../components/PromoBanner";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

function HotelsContent() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" ? window.innerWidth < 768 : false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);



  function openDest(destName) {
    const expediaUrl = `https://www.expedia.com/Hotel-Search?destination=${encodeURIComponent(destName)}&camref=1110l8R3Z`;
    window.open(`/redirect?to=${encodeURIComponent(expediaUrl)}&partner=Expedia&product=hotel`, "_blank", "noopener,noreferrer");
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

      {/* EXPEDIA WIDGET */}
      <div id="hotel-search-form" style={{ background: NAVY, padding: "28px 24px 36px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{
            width: "560px",
            maxWidth: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 16px 56px rgba(0,0,0,0.4)",
          }}>
            <iframe
              id="eg-iframe"
              src="/hotel-search.html?v=3"
              title="Hotel Search"
              scrolling="no"
              style={{
                border: "none",
                width: "100%",
                height: "222px",
                display: "block",
              }}
            />
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

        {/* Why Book */}
        <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "20px", padding: "36px", marginBottom: "28px" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 24px" }}>Why book hotels through RoomVoyager?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "24px" }}>
            {[
              { icon: "💰", title: "Earn real cash back", desc: "5 points per $1 spent — redeemable for real money after your stay" },
              { icon: "🔒", title: "Secure booking", desc: "All bookings processed through Expedia's trusted platform" },
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

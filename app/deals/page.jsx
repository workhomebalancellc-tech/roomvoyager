"use client";

import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingChat from "../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

const DOMESTIC = [
  {
    city: "Las Vegas",
    img: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=600&h=900&fit=crop&auto=format",
    link: "/deals/las-vegas",
  },
  {
    city: "Orlando",
    img: "https://images.unsplash.com/photo-1627035983655-0ceec61bb733?w=600&h=900&fit=crop&auto=format",
    link: "/deals/orlando",
  },
  {
    city: "New York City",
    img: "https://images.unsplash.com/photo-1546436836-07a91091f160?w=600&h=900&fit=crop&auto=format",
    link: "/hotels",
    locked: true,
  },
  {
    city: "Miami",
    img: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=600&h=900&fit=crop&auto=format",
    link: "/hotels",
    locked: true,
  },
  {
    city: "Honolulu",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=900&fit=crop&auto=format",
    link: "/packages",
    locked: true,
  },
  {
    city: "Nashville",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=900&fit=crop&auto=format",
    link: "/hotels",
    locked: true,
  },
  {
    city: "New Orleans",
    img: "https://images.unsplash.com/photo-1595867818082-083862f3d630?w=600&h=900&fit=crop&auto=format",
    link: "/hotels",
    locked: true,
  },
];

const INTERNATIONAL = [
  {
    city: "Paris",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=900&fit=crop&auto=format",
    link: "/deals/paris",
  },
  {
    city: "Punta Cana",
    img: "/Deals/17/puntacana_destination.jpg",
    link: "/deals/punta-cana",
    liveDate: "2026-07-19",
  },
  {
    city: "Cancún",
    img: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=600&h=900&fit=crop&auto=format",
    link: "/packages",
    locked: true,
  },
  {
    city: "Bali",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=900&fit=crop&auto=format",
    link: "/packages",
    locked: true,
  },
  {
    city: "London",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=900&fit=crop&auto=format",
    link: "/packages",
    locked: true,
  },
  {
    city: "Montego Bay",
    img: "https://images.unsplash.com/photo-1530225029356-e301a685e6b1?w=600&h=900&fit=crop&auto=format",
    link: "/packages",
    locked: true,
  },
  {
    city: "Rome",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&h=900&fit=crop&auto=format",
    link: "/packages",
    locked: true,
  },
];

function DealTile({ city, img, dealOfWeek, link, locked }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div style={{ flexShrink: 0 }} onClick={() => !locked && link && (window.location.href = link)}>
      <p style={{ fontWeight: "800", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 5px", textAlign: "center", color: dealOfWeek ? ORANGE : "transparent", userSelect: "none" }}>
        🔥 Deals for this Week
      </p>
    <div
      onMouseEnter={() => !locked && setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "14px",
        overflow: "hidden",
        aspectRatio: "2 / 3",
        cursor: locked ? "not-allowed" : "pointer",
        boxShadow: hovered
          ? "0 10px 28px rgba(0,0,0,0.28)"
          : "0 3px 10px rgba(0,0,0,0.14)",
        transition: "box-shadow 0.25s",
        border: dealOfWeek ? `3px solid ${ORANGE}` : "3px solid transparent",
      }}
    >
      <img
        src={img}
        alt={city}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.4s ease",
          filter: locked ? "blur(4px)" : "none",
        }}
        onError={e => { e.currentTarget.style.background = NAVY; }}
      />
      {/* Subtle dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: locked ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0.30)" }} />

      {/* Lock overlay */}
      {locked && (
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" fill="rgba(255,255,255,0.15)" stroke="#fff"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
          </svg>
          <p style={{ color: "#fff", fontWeight: "700", fontSize: "clamp(9px, 0.9vw, 12px)", margin: 0, textAlign: "center", opacity: 0.9, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Coming Soon
          </p>
        </div>
      )}

      {/* City name centered (unlocked only) */}
      {!locked && (
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "8px" }}>
          <p style={{
            color: "#fff",
            fontWeight: "800",
            fontSize: "clamp(11px, 1.1vw, 16px)",
            textAlign: "center",
            margin: 0,
            lineHeight: 1.25,
            textShadow: "0 2px 10px rgba(0,0,0,0.7)",
            letterSpacing: "0.01em",
          }}>
            {city}
          </p>
        </div>
      )}
    </div>
    </div>
  );
}

// Auto-unlock destinations on their liveDate (checked fresh in the browser on every visit)
function resolveDate(d) {
  const now = new Date();
  const isLive = (dateStr) => {
    const [y, m, day] = dateStr.split("-").map(Number);
    return now >= new Date(y, m - 1, day, 10, 0, 0);
  };
  const todayStr = now.toISOString().split("T")[0];
  if (d.liveDate) {
    const live = isLive(d.liveDate);
    return { ...d, locked: !live, dealOfWeek: live };
  }
  if (d.dealOfWeekUntil) {
    return { ...d, dealOfWeek: todayStr <= d.dealOfWeekUntil };
  }
  return d;
}

const sortDeals = (list) => [...list].sort((a, b) => (b.dealOfWeek ? 1 : 0) - (a.dealOfWeek ? 1 : 0));

export default function DealsPage() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    function onResize() { setIsMobile(window.innerWidth < 768); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Shared style for a horizontal-scroll mobile strip
  const mobileStrip = {
    display: "flex",
    gap: "10px",
    overflowX: "auto",
    paddingBottom: "8px",
    scrollSnapType: "x mandatory",
    WebkitOverflowScrolling: "touch",
  };
  const mobileTileWrap = {
    flexShrink: 0,
    width: "130px",
    scrollSnapAlign: "start",
  };

  return (
    <>
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <NavBar active="deals" />

      {/* HERO — hotel photo */}
      <div style={{ position: "relative", height: isMobile ? "300px" : "400px", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=700&fit=crop&auto=format"
          alt="Luxury hotel"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.55) 0%, rgba(0,15,60,0.78) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🤠 Updated Weekly</p>
          <h1 style={{ color: "#fff", fontSize: isMobile ? "28px" : "48px", fontWeight: "800", margin: "0 0 12px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
            Weekly <span style={{ color: ORANGE }}>Deals</span>
          </h1>
          <p style={{ color: "#BFDBFE", fontSize: isMobile ? "14px" : "16px", maxWidth: "520px", margin: "0 auto 20px", lineHeight: 1.6 }}>
            Hand-picked travel deals on the world's most popular destinations. Earn rewards points on every booking.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
            {[["💰","Best price guarantee"],["🏆","Earn rewards points"]].map(([icon,text],i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.85)", fontSize: "12px", fontWeight: "600" }}>
                <span>{icon}</span><span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: isMobile ? "36px 16px 60px" : "52px 32px 80px" }}>

        {/* ── DOMESTIC ── */}
        <section style={{ marginBottom: isMobile ? "48px" : "60px" }}>
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>🇺🇸 Domestic</p>
            <h2 style={{ fontSize: isMobile ? "22px" : "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Top US Destinations</h2>
          </div>

          {isMobile ? (
            <div style={mobileStrip}>
              {sortDeals(DOMESTIC.map(resolveDate)).map((d, i) => (
                <div key={i} style={mobileTileWrap}>
                  <DealTile {...d} />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "12px" }}>
              {sortDeals(DOMESTIC.map(resolveDate)).map((d, i) => (
                <DealTile key={i} {...d} />
              ))}
            </div>
          )}
        </section>

        {/* ── INTERNATIONAL ── */}
        <section style={{ marginBottom: "48px" }}>
          <div style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>🌍 International</p>
            <h2 style={{ fontSize: isMobile ? "22px" : "26px", fontWeight: "800", color: "#111827", margin: 0 }}>World's Best Destinations</h2>
          </div>

          {isMobile ? (
            <div style={mobileStrip}>
              {sortDeals(INTERNATIONAL.map(resolveDate)).map((d, i) => (
                <div key={i} style={mobileTileWrap}>
                  <DealTile {...d} />
                </div>
              ))}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "12px" }}>
              {sortDeals(INTERNATIONAL.map(resolveDate)).map((d, i) => (
                <DealTile key={i} {...d} />
              ))}
            </div>
          )}
        </section>

        {/* REWARDS BANNER */}
        <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0052CC 100%)`, borderRadius: "20px", padding: isMobile ? "24px 20px" : "32px 40px", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: "20px" }}>
          <div>
            <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>🏆 RoomVoyager Rewards</p>
            <p style={{ color: "#fff", fontWeight: "800", fontSize: isMobile ? "17px" : "20px", margin: "0 0 4px" }}>Every deal earns you cash back</p>
            <p style={{ color: "#BFDBFE", fontSize: "13px", margin: 0 }}>Redeem anytime · No expiration · Paid via Zelle, Cash App, or Venmo</p>
          </div>
          <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: "13px 28px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none", flexShrink: 0, boxShadow: "0 4px 14px rgba(255,102,0,0.4)", whiteSpace: "nowrap" }}>
            View Rewards →
          </a>
        </div>

      </div>
    </div>
    <FloatingChat />
    <Footer />
    </>
  );
}

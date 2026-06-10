"use client";

import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const DOMESTIC = [
  {
    city: "Las Vegas",
    state: "Nevada",
    tag: "Entertainment Capital",
    desc: "World-class casinos, headline shows, Michelin-starred dining, and the neon-lit Strip.",
    from: "$149",
    deal: "Hotel + Show Bundle",
    badge: "🔥 Hot Deal",
    img: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=800&h=500&fit=crop&auto=format",
    link: "/hotels",
    savings: "Save up to 30%",
  },
  {
    city: "Orlando",
    state: "Florida",
    tag: "Theme Park Mecca",
    desc: "Disney World, Universal Studios, and year-round sunshine make this a family favorite.",
    from: "$179",
    deal: "Hotel + Park Tickets",
    badge: "👨‍👩‍👧 Family Pick",
    img: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=800&h=500&fit=crop&auto=format",
    link: "/packages",
    savings: "Kids stay free",
  },
  {
    city: "New York City",
    state: "New York",
    tag: "The City That Never Sleeps",
    desc: "Broadway shows, world-class museums, iconic skyline views, and endless dining options.",
    from: "$229",
    deal: "Weekend Getaway",
    badge: "🗽 Iconic",
    img: "https://images.unsplash.com/photo-1546436836-07a91091f160?w=800&h=500&fit=crop&auto=format",
    link: "/hotels",
    savings: "Free breakfast",
  },
  {
    city: "Miami",
    state: "Florida",
    tag: "Sun, Sand & Nightlife",
    desc: "Pristine beaches, Art Deco architecture, vibrant nightlife, and the best Cuban food in the US.",
    from: "$159",
    deal: "Beach Hotel Special",
    badge: "☀️ Summer Pick",
    img: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&h=500&fit=crop&auto=format",
    link: "/hotels",
    savings: "Save 25%",
  },
  {
    city: "Honolulu",
    state: "Hawaii",
    tag: "Island Paradise",
    desc: "Waikiki Beach, Diamond Head hikes, luaus, and the warm Pacific waters of the Aloha State.",
    from: "$399",
    deal: "Flight + Hotel Package",
    badge: "🌺 Aloha",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop&auto=format",
    link: "/packages",
    savings: "4th night free",
  },
  {
    city: "Nashville",
    state: "Tennessee",
    tag: "Music City USA",
    desc: "Live music on every corner, legendary honky-tonks, hot chicken, and Southern hospitality.",
    from: "$139",
    deal: "Long Weekend Deal",
    badge: "🎸 Live Music",
    img: "https://images.unsplash.com/photo-1546191078-af1e60e54024?w=800&h=500&fit=crop&auto=format",
    link: "/hotels",
    savings: "Save up to 20%",
  },
  {
    city: "New Orleans",
    state: "Louisiana",
    tag: "Soul of the South",
    desc: "Jazz on Bourbon Street, world-famous cuisine, historic French Quarter, and non-stop festivals.",
    from: "$149",
    deal: "Jazz Festival Special",
    badge: "🎷 Unique Culture",
    img: "https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&h=500&fit=crop&auto=format",
    link: "/hotels",
    savings: "Earn double pts",
  },
];

const INTERNATIONAL = [
  {
    city: "Cancún",
    country: "Mexico",
    tag: "All-Inclusive Paradise",
    desc: "Turquoise Caribbean waters, sprawling all-inclusive resorts, ancient Mayan ruins nearby.",
    from: "$699",
    deal: "All-Inclusive Package",
    badge: "🏖️ Best Value",
    img: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800&h=500&fit=crop&auto=format",
    link: "/packages",
    savings: "Flights included",
  },
  {
    city: "Paris",
    country: "France",
    tag: "City of Light",
    desc: "The Eiffel Tower, Louvre, world-class cuisine, charming cafés, and unmatched romance.",
    from: "$899",
    deal: "European City Break",
    badge: "🗼 Iconic",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=500&fit=crop&auto=format",
    link: "/packages",
    savings: "Save $200",
  },
  {
    city: "Punta Cana",
    country: "Dominican Republic",
    tag: "Caribbean All-Inclusive",
    desc: "Miles of white-sand beaches, luxury resorts, championship golf, and crystal-clear waters.",
    from: "$749",
    deal: "All-Inclusive Resort",
    badge: "🌴 Popular",
    img: "https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=800&h=500&fit=crop&auto=format",
    link: "/packages",
    savings: "Kids fly free",
  },
  {
    city: "Bali",
    country: "Indonesia",
    tag: "Island of the Gods",
    desc: "Ancient temples, terraced rice paddies, world-class surf, and transformative wellness retreats.",
    from: "$1,199",
    deal: "Wellness Retreat Package",
    badge: "🧘 Wellness",
    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=500&fit=crop&auto=format",
    link: "/packages",
    savings: "3 nights free",
  },
  {
    city: "London",
    country: "England",
    tag: "Royal City",
    desc: "Buckingham Palace, Big Ben, world-class museums, the West End, and iconic afternoon tea.",
    from: "$849",
    deal: "City Explorer Package",
    badge: "👑 Classic",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop&auto=format",
    link: "/packages",
    savings: "Free hotel night",
  },
  {
    city: "Montego Bay",
    country: "Jamaica",
    tag: "One Love Island",
    desc: "Stunning beaches, reggae rhythms, Blue Mountains, waterfalls, and laid-back island vibes.",
    from: "$699",
    deal: "Couples Resort Deal",
    badge: "💑 Romance",
    img: "https://images.unsplash.com/photo-1594132918932-b97a4a2f01e0?w=800&h=500&fit=crop&auto=format",
    link: "/packages",
    savings: "Honeymoon upgrade",
  },
  {
    city: "Rome",
    country: "Italy",
    tag: "Eternal City",
    desc: "The Colosseum, Vatican City, incredible pasta, gelato, and 2,000 years of history on every corner.",
    from: "$979",
    deal: "Italy Explorer Package",
    badge: "🍕 Culture & Food",
    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=500&fit=crop&auto=format",
    link: "/packages",
    savings: "Earn 2x points",
  },
];

function DealCard({ city, state, country, tag, desc, from, deal, badge, img, link, savings, isMobile }) {
  const [hovered, setHovered] = useState(false);
  const location = state ? `${city}, ${state}` : `${city}, ${country}`;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#fff",
        borderRadius: "18px",
        overflow: "hidden",
        border: `1.5px solid ${hovered ? NAVY : "#E5E7EB"}`,
        boxShadow: hovered ? "0 12px 36px rgba(0,59,149,0.15)" : "0 2px 10px rgba(0,59,149,0.06)",
        transition: "box-shadow 0.2s, border-color 0.2s",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "180px", overflow: "hidden", background: NAVY, flexShrink: 0 }}>
        <img
          src={img}
          alt={city}
          style={{ width: "100%", height: "100%", objectFit: "cover", transform: hovered ? "scale(1.04)" : "scale(1)", transition: "transform 0.35s ease" }}
          onError={e => { e.currentTarget.style.display = "none"; }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)" }} />

        {/* Badge */}
        <span style={{ position: "absolute", top: "12px", left: "12px", background: ORANGE, color: "#fff", fontSize: "10px", fontWeight: "800", padding: "3px 10px", borderRadius: "20px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{badge}</span>

        {/* Savings */}
        <span style={{ position: "absolute", top: "12px", right: "12px", background: "rgba(0,0,0,0.55)", color: "#fff", fontSize: "10px", fontWeight: "700", padding: "3px 9px", borderRadius: "20px" }}>{savings}</span>

        {/* City name */}
        <div style={{ position: "absolute", bottom: "10px", left: "14px" }}>
          <p style={{ color: "#fff", fontWeight: "800", fontSize: "17px", margin: 0, textShadow: "0 1px 6px rgba(0,0,0,0.5)", lineHeight: 1.2 }}>{city}</p>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "11px", margin: 0 }}>{state || country}</p>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", flex: 1 }}>
        <p style={{ fontSize: "10px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>{tag}</p>
        <p style={{ fontSize: "13px", color: "#374151", margin: "0 0 12px", lineHeight: 1.5, flex: 1 }}>{desc}</p>

        {/* Deal label */}
        <div style={{ background: LIGHT_BLUE, borderRadius: "8px", padding: "8px 12px", marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "11px", fontWeight: "700", color: NAVY }}>🎯 {deal}</span>
          <span style={{ fontSize: "10px", color: "#6B7280" }}>10 pts/$1</span>
        </div>

        <a href={link}
          style={{ display: "block", background: NAVY, color: "#fff", textAlign: "center", padding: "10px", borderRadius: "10px", fontWeight: "700", fontSize: "13px", textDecoration: "none" }}
          onMouseEnter={e => e.currentTarget.style.background = "#002A6E"}
          onMouseLeave={e => e.currentTarget.style.background = NAVY}>
          Get This Deal →
        </a>
      </div>
    </div>
  );
}

export default function DealsPage() {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    function onResize() { setIsMobile(window.innerWidth < 768); }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <NavBar active="deals" />

      {/* HERO */}
      <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0052CC 100%)`, padding: isMobile ? "40px 20px 36px" : "56px 24px 48px", textAlign: "center" }}>
        <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>✈️ Updated Weekly</p>
        <h1 style={{ color: "#fff", fontSize: isMobile ? "28px" : "42px", fontWeight: "800", margin: "0 0 12px", lineHeight: 1.2 }}>
          Weekly <span style={{ color: ORANGE }}>Deals</span>
        </h1>
        <p style={{ color: "#BFDBFE", fontSize: isMobile ? "14px" : "16px", maxWidth: "520px", margin: "0 auto 20px", lineHeight: 1.6 }}>
          Hand-picked travel deals on the world's most popular destinations. Earn rewards points on every booking.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {[["🏆","Earn 10 pts per $1"],["💰","Best price guarantee"],["🤝","Free agent assistance"]].map(([icon,text],i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.85)", fontSize: "12px", fontWeight: "600" }}>
              <span>{icon}</span><span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "32px 16px 60px" : "52px 24px 80px" }}>

        {/* ── DOMESTIC ── */}
        <section style={{ marginBottom: isMobile ? "48px" : "64px" }}>
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>🇺🇸 Domestic Deals</p>
            <h2 style={{ fontSize: isMobile ? "22px" : "28px", fontWeight: "800", color: "#111827", margin: "0 0 6px" }}>Top US Destinations This Week</h2>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>The most-booked American getaways — prices from recent live searches.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "20px" }}>
            {DOMESTIC.map((d, i) => (
              <DealCard key={i} {...d} isMobile={isMobile} />
            ))}
          </div>
        </section>

        {/* ── INTERNATIONAL ── */}
        <section style={{ marginBottom: "48px" }}>
          <div style={{ marginBottom: "28px" }}>
            <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>🌍 International Deals</p>
            <h2 style={{ fontSize: isMobile ? "22px" : "28px", fontWeight: "800", color: "#111827", margin: "0 0 6px" }}>World's Best Destinations</h2>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>Bucket-list trips at prices that make sense — all with agent support and rewards.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "20px" }}>
            {INTERNATIONAL.map((d, i) => (
              <DealCard key={i} {...d} isMobile={isMobile} />
            ))}
          </div>
        </section>

        {/* REWARDS BANNER */}
        <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0052CC 100%)`, borderRadius: "20px", padding: isMobile ? "24px 20px" : "32px 40px", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: "20px" }}>
          <div>
            <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>🏆 RoomVoyager Rewards</p>
            <p style={{ color: "#fff", fontWeight: "800", fontSize: isMobile ? "17px" : "20px", margin: "0 0 4px" }}>Every deal earns you cash back</p>
            <p style={{ color: "#BFDBFE", fontSize: "13px", margin: 0 }}>10 pts per $1 · Redeem anytime · No expiration</p>
          </div>
          <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: "13px 28px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none", flexShrink: 0, boxShadow: "0 4px 14px rgba(255,102,0,0.4)", whiteSpace: "nowrap" }}>
            View Rewards →
          </a>
        </div>

      </div>
    </div>
    <Footer />
    </>
  );
}

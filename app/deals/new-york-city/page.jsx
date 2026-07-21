"use client";

import { useState } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";
import PromoBanner from "../../components/PromoBanner";

const NAVY       = "#003B95";
const ORANGE     = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const DEALS = [
  {
    date: "July 20, 2026",
    label: "Fitzpatrick Grand Central vs. Doxie Hotel",
    badge: "🔥 Latest Deal",
    badgeColor: ORANGE,
    intro: `New York Fashion Week runs September 5–12 and the city transforms — runway shows, industry events, and an energy unlike any other week of the year. We found two hotels right in the heart of Midtown that put you in the middle of it all at the same price point. Fitzpatrick Grand Central brings Irish boutique hospitality steps from Grand Central Terminal. The Doxie Hotel offers a fresh, design-forward stay for the same $254/night. Same price, two very different personalities.`,
    headline: "👗 NYC Fashion Week — Fitzpatrick Grand Central vs. Doxie Hotel",
    protip: "Same price, so this comes down to vibe. Fitzpatrick Grand Central gives you classic Midtown elegance and Irish hospitality — polished and refined. Doxie Hotel is the pick if you want something more design-forward and modern to match the fashion week energy.",
    hotels: [
      {
        name: "Fitzpatrick Grand Central",
        emoji: "🏛️",
        vibe: "Irish boutique elegance near Grand Central",
        price: "From $254/night",
        photo: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=600&fit=crop&auto=format",
        blurb: "Fitzpatrick Grand Central is an Irish-owned boutique hotel steps from Grand Central Terminal — one of the most storied addresses in Midtown Manhattan. The property is known for its warm hospitality, well-appointed rooms, and classic NYC character. During Fashion Week, you're perfectly positioned for shows across Midtown and easy access to the entire city. Seven nights, September 5–12, at $254/night.",
        perks: ["Steps from Grand Central Terminal", "Irish boutique hospitality", "Classic Midtown location", "Sep 5–12 Fashion Week"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/nyc2_2",
        articlePhoto: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=400&fit=crop&auto=format",
      },
      {
        name: "Doxie Hotel",
        emoji: "✨",
        vibe: "Design-forward modern stay in Midtown",
        price: "From $254/night",
        photo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop&auto=format",
        blurb: "The Doxie Hotel brings a fresh, design-forward energy to Midtown — exactly the right vibe for Fashion Week. Modern rooms, thoughtful details, and a stay that feels current without the stuffy formality of a legacy hotel. At $254/night for Fashion Week you're getting strong value in one of the busiest weeks of the NYC calendar. Seven nights, September 5–12.",
        perks: ["Design-forward modern rooms", "Midtown Manhattan location", "Fashion Week energy", "Sep 5–12"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/nyc2_1",
        articlePhoto: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop&auto=format",
      },
    ],
  },
  {
    date: "July 19, 2026",
    label: "Pod Times Square vs. The Park Ave North",
    badge: "Previous Deal",
    badgeColor: "#6B7280",

    badgeColor: ORANGE,
    intro: `Labor Day weekend in New York City — Aug 30 through Sep 2 — is one of the last big weekends of the summer and one of the best times to actually enjoy the city. Crowds thin out as locals flee for the Hamptons, and you get midtown Manhattan to yourself. We found two hotels that deliver the full NYC experience at two very different price points. The Park Ave North comes in at just $124/night for a classic Midtown address. Pod Times Square sits at $166/night if you want to be right in the middle of everything.`,
    headline: "🗽 Labor Day in NYC — Pod Times Square vs. The Park Ave North",
    protip: "Labor Day weekend is one of the sweet spots for NYC travel — prices are lower than peak summer, the city is less crowded, and the weather is still perfect. Book The Park Ave North if you want to save and explore. Go with Pod Times Square if you want Times Square energy at your doorstep all weekend.",
    hotels: [
      {
        name: "Pod Times Square",
        emoji: "🏙️",
        vibe: "Times Square energy at your doorstep",
        price: "From $166/night",
        photo: "/Deals/24/podtimessquare1.jpg",
        blurb: "Pod Times Square puts you right in the center of the action — Broadway theaters, Times Square, and the energy of Midtown Manhattan are all steps away. The hotel has a signature rooftop bar with sweeping NYC views, sleek modern rooms designed to maximize every inch, and a vibe that feels genuinely like New York. At $166/night for Labor Day weekend, this is one of the strongest value plays in Midtown. Three nights earns you over 2,400 RoomVoyager points — that's $2.40 in real cash back on your next trip.",
        perks: ["Times Square location", "Rooftop bar & NYC views", "Steps from Broadway shows", "Modern boutique style"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/nyc1_2",
        articlePhoto: "/Deals/24/podtimessquare2.jpg",
      },
      {
        name: "The Park Ave North",
        emoji: "🏛️",
        vibe: "Classic Midtown on Park Avenue",
        price: "From $124/night",
        photo: "/Deals/24/parkavenorth1.jpg",
        blurb: "A Park Avenue address for $124/night on Labor Day weekend is a serious deal. The Park Ave North puts you in classic Midtown — steps from Grand Central Terminal, a short walk from Bryant Park and the High Line, and close to everything without being in the middle of the tourist swarm. The neighborhood is quieter, more residential, and gives you the real NYC experience. If you want to stretch your travel budget while still staying somewhere you're proud of, this is the move.",
        perks: ["Park Avenue address", "Near Grand Central Terminal", "Classic Midtown neighborhood", "Best value for Labor Day"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/nyc1_1",
        articlePhoto: "/Deals/24/parkavenorth2.jpg",
      },
    ],
  },
];

function openHotel(link, name = "") {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "affiliate_click", {
      hotel_name: name,
      destination: "New York City",
      link_url: link,
    });
  }
  window.open(`/redirect?to=${encodeURIComponent(link)}&partner=Expedia&product=hotel`, "_blank", "noopener,noreferrer");
}

function DealCard({ deal }) {
  const [open, setOpen] = useState(false);
  const isLatest = deal.badge === "🔥 Latest Deal";

  return (
    <div style={{ marginBottom: "16px", borderRadius: "14px", overflow: "hidden", border: `1.5px solid ${isLatest ? ORANGE : "#E5E7EB"}`, boxShadow: isLatest ? "0 4px 16px rgba(255,102,0,0.15)" : "0 2px 8px rgba(0,0,0,0.06)" }}>

      {/* HEADER / TOGGLE */}
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", background: isLatest ? `linear-gradient(135deg, ${ORANGE} 0%, #FF8C00 100%)` : "#F9FAFB", border: "none", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", gap: "12px" }}
      >
        <div style={{ textAlign: "left", flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px", flexWrap: "wrap" }}>
            <span style={{ background: isLatest ? "rgba(255,255,255,0.25)" : "#E5E7EB", color: isLatest ? "#fff" : "#6B7280", fontSize: "10px", fontWeight: "700", padding: "3px 8px", borderRadius: "5px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{deal.badge}</span>
            <span style={{ fontSize: "12px", color: isLatest ? "rgba(255,255,255,0.8)" : "#9CA3AF", fontWeight: "500" }}>{deal.date}</span>
          </div>
          <p style={{ fontSize: "17px", fontWeight: "800", color: isLatest ? "#fff" : "#111827", margin: 0 }}>{deal.label}</p>
        </div>
        {/* Thumbnail photos */}
        <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
          {deal.hotels.map((hotel, i) => (
            <img
              key={i}
              src={hotel.photo}
              alt={hotel.name}
              style={{ width: "54px", height: "54px", objectFit: "cover", borderRadius: "8px", border: isLatest ? "2px solid rgba(255,255,255,0.4)" : "2px solid #E5E7EB" }}
            />
          ))}
        </div>
        <span style={{ fontSize: "20px", color: isLatest ? "#fff" : NAVY, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease", flexShrink: 0 }}>⌄</span>
      </button>

      {/* EXPANDED CONTENT */}
      {open && (
        <div style={{ padding: "32px 24px", background: "#fff" }}>

          {/* Intro */}
          <div style={{ marginBottom: "28px" }}>
            <h2 style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: "800", color: "#111827", margin: "0 0 12px", lineHeight: 1.3 }}>{deal.headline}</h2>
            <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.75, margin: 0 }}>{deal.intro}</p>
          </div>

          {/* Hotel photos */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "32px" }}>
            {deal.hotels.map((hotel, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <button
                  onClick={() => openHotel(hotel.link, hotel.name)}
                  style={{ background: "none", border: "none", padding: 0, cursor: "pointer", borderRadius: "14px", overflow: "hidden", display: "block", position: "relative", width: "100%" }}
                >
                  <img src={hotel.photo} alt={hotel.name} style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)" }} />
                  <div style={{ position: "absolute", bottom: "12px", left: "14px", right: "14px" }}>
                    <p style={{ color: "#fff", fontWeight: "800", fontSize: "15px", margin: 0, textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}>{hotel.emoji} {hotel.name}</p>
                    <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "12px", margin: "3px 0 0" }}>{hotel.vibe}</p>
                  </div>
                </button>
                <button
                  onClick={() => openHotel(hotel.link, hotel.name)}
                  style={{ background: NAVY, color: "#fff", border: "none", borderRadius: "10px", padding: "11px", fontSize: "13px", fontWeight: "700", cursor: "pointer", width: "100%" }}
                >
                  Book Now — {hotel.price} →
                </button>
              </div>
            ))}
          </div>

          {/* Hotel descriptions */}
          <div style={{ marginBottom: "28px" }}>
            {deal.hotels.map((hotel, i) => (
              <div key={i} style={{ marginBottom: "24px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px", display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  {hotel.emoji} {hotel.name}
                  <span style={{ background: ORANGE, color: "#fff", fontSize: "12px", fontWeight: "700", padding: "3px 9px", borderRadius: "6px" }}>{hotel.price}</span>
                </h3>
                <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 10px" }}>{hotel.blurb}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {hotel.perks.map((perk, j) => (
                    <span key={j} style={{ background: LIGHT_BLUE, color: NAVY, fontSize: "12px", fontWeight: "600", padding: "4px 10px", borderRadius: "6px" }}>✓ {perk}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pro tip */}
          <div style={{ background: "#FFF7ED", border: `1.5px solid ${ORANGE}40`, borderRadius: "14px", padding: "18px 20px", display: "flex", gap: "12px", alignItems: "flex-start", marginBottom: "20px" }}>
            <span style={{ fontSize: "22px", flexShrink: 0 }}>💡</span>
            <p style={{ fontSize: "14px", color: "#374151", margin: 0, lineHeight: 1.7 }}>
              <strong>Pro tip:</strong> {deal.protip}
            </p>
          </div>

          {/* Rewards */}
          <div style={{ background: LIGHT_BLUE, borderRadius: "14px", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <p style={{ fontWeight: "700", color: NAVY, fontSize: "14px", margin: "0 0 2px" }}>🏆 Earn rewards on these bookings</p>
              <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>5 pts per $1 · Cash back via Zelle, Cash App, or Venmo</p>
            </div>
            <a href="/rewards" style={{ background: NAVY, color: "#fff", textDecoration: "none", fontSize: "13px", fontWeight: "700", padding: "9px 18px", borderRadius: "8px", whiteSpace: "nowrap" }}>Learn more →</a>
          </div>

        </div>
      )}
    </div>
  );
}

export default function NewYorkCityDealsPage() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />
        <PromoBanner />

        {/* HERO */}
        <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <img
            src="/Deals/24/newyork_destination.jpg"
            alt="New York City skyline"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,60,0.5) 0%, rgba(0,15,60,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: "800", margin: "0 0 10px", textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>New York City</h1>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>Labor Day weekend Aug 30 – Sep 2 — book now before prices climb.</p>
          </div>
        </div>

        {/* DEALS LIST */}
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 80px" }}>

          <p style={{ fontSize: "13px", color: "#9CA3AF", marginBottom: "24px", textAlign: "center" }}>Click any deal below to expand the full post</p>

          {DEALS.map((deal, i) => (
            <DealCard key={i} deal={deal} />
          ))}

          <p style={{ textAlign: "center", marginTop: "40px", fontSize: "13px", color: "#9CA3AF" }}>
            ← <a href="/deals" style={{ color: NAVY, fontWeight: "600" }}>Back to all deals</a>
          </p>
        </div>
      </div>
      <Footer />
      <FloatingChat />
    </>
  );
}

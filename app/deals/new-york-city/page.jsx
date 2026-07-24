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
    date: "July 30, 2026",
    label: "Night Hotel Broadway vs. 31 Street Broadway Hotel — $198/Night Apart",
    badge: "🔥 Latest Deal",
    badgeColor: ORANGE,
    intro: `Two hotels on Broadway in New York City, September 11–13, and they could not be further apart on price. Night Hotel Broadway comes in at $280/night — a stylish boutique property with a rooftop bar and a reputation as one of the more characterful stays in Midtown. 31 Street Broadway Hotel checks in at $82/night — clean, well-located, and one of the best-value hotels in the city. Same Broadway corridor. $198 a night apart. That's $396 you can put back in your pocket over the weekend.`,
    headline: "🎭 Broadway Weekend NYC — Night Hotel vs. 31 Street Broadway Hotel",
    protip: "This is one of the biggest price gaps we've posted — $198/night for two hotels on the same Broadway corridor. If budget is the priority, 31 Street Broadway Hotel at $82/night is an almost unbeatable value for a NYC weekend. If you want the rooftop bar and boutique experience, Night Hotel Broadway delivers that at $280/night. The $396 you save at 31 Street Broadway could cover a Broadway show, dinners, and a night out.",
    hotels: [
      {
        name: "Night Hotel Broadway",
        emoji: "🌙",
        vibe: "Stylish boutique with rooftop bar on Broadway",
        price: "From $280/night",
        photo: "/Deals/28/nighthotel1.jpg",
        blurb: "Night Hotel Broadway is a boutique hotel that leans into its namesake — dark, moody, and genuinely stylish. The rooftop bar is one of its signature draws, and the rooms have a design sensibility that sets it apart from a standard Midtown stay. At $280/night for a Fashion Week weekend you're paying for personality and atmosphere. September 11–12 is still within NYC Fashion Week, so the city is running at full energy.",
        perks: ["Rooftop bar with NYC views", "Boutique design hotel", "Broadway corridor location", "Fashion Week Sep 11–12"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/nyc5_1",
        articlePhoto: "/Deals/28/nighthotel2.jpg",
      },
      {
        name: "31 Street Broadway Hotel",
        emoji: "💰",
        vibe: "Unbeatable value on the Broadway corridor",
        price: "From $82/night",
        photo: "/Deals/28/31streetbroadway1.jpg",
        blurb: "31 Street Broadway Hotel at $82/night is the value find of the week. Same Broadway location as Night Hotel, same access to the Fashion Week energy and everything Midtown has to offer — at less than a third of the price. Two nights here saves you $396 versus Night Hotel Broadway. That's enough for a Broadway show, a nice dinner, and still money left over. Clean, well-located, and one of the best-value options we've found in Manhattan.",
        perks: ["$82/night — best value on the list", "Broadway corridor location", "$198/night savings vs Night Hotel", "Sep 11–13 Fashion Week tail"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/nyc5_2",
        articlePhoto: "/Deals/28/31streetbroadway2.jpg",
      },
    ],
  },
  {
    date: "July 29, 2026",
    label: "The Draper New York vs. Distrikt Hotel — Both Tapestry by Hilton",
    badge: "Previous Deal",
    badgeColor: "#6B7280",
    intro: `Two 4-star Tapestry Collection by Hilton hotels, Fashion Week weekend September 10–12, $11 a night apart. The Draper New York at $377/night versus Distrikt Hotel New York City at $366/night. Same brand family, same quality standard, two completely different personalities. This one comes down to location and vibe.`,
    headline: "🏨 NYC Fashion Week — The Draper vs. Distrikt Hotel (Both Tapestry by Hilton)",
    protip: "You're splitting hairs on price — $11 a night is barely a difference. This decision is purely about which hotel's personality fits you better. The Draper brings a classic New York character. Distrikt leans into its Midtown energy with a more modern edge. Both are Hilton quality, both earn Hilton Honors points.",
    hotels: [
      {
        name: "The Draper New York, Tapestry Collection by Hilton",
        emoji: "🏛️",
        vibe: "Classic New York character, Hilton quality",
        price: "From $377/night",
        photo: "/Deals/27/drapernewyork1.jpg",
        blurb: "The Draper New York is a Tapestry Collection by Hilton property — which means boutique character backed by Hilton's service and loyalty program. The hotel has a classic New York personality: well-appointed, refined, and genuinely characterful. Fashion Week runs September 5–12 and you're right in the middle of it. Three nights September 10–12 earns you Hilton Honors points on top of your RoomVoyager cash back.",
        perks: ["Tapestry Collection by Hilton", "Classic NYC character", "Earns Hilton Honors points", "Sep 10–12 Fashion Week"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/nyc4_1",
        articlePhoto: "/Deals/27/drapernewyork2.jpg",
      },
      {
        name: "Distrikt Hotel New York City, Tapestry Collection by Hilton",
        emoji: "⚡",
        vibe: "Modern Midtown energy, same Hilton standard",
        price: "From $366/night",
        photo: "/Deals/27/distrikhotel1.jpg",
        blurb: "Distrikt Hotel is the same Tapestry Collection by Hilton quality standard as The Draper but with a more modern, energetic edge that fits Fashion Week perfectly. At $366/night you're saving $11 a night — $33 over the weekend — for a hotel that leans into its Midtown personality rather than away from it. Same Hilton Honors earning, same 4-star standard, slightly lower price.",
        perks: ["Tapestry Collection by Hilton", "Modern Midtown energy", "$11/night less than The Draper", "Sep 10–12 Fashion Week"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/nyc4_2",
        articlePhoto: "/Deals/27/distrikhotel2.jpg",
      },
    ],
  },
  {
    date: "July 28, 2026",
    label: "Sofitel New York vs. Moxy NYC Times Square",
    badge: "Previous Deal",

    badgeColor: ORANGE,
    intro: `Labor Day weekend in New York City — September 4–7 — and we found two hotels that couldn't be more different. Sofitel New York brings French luxury to Midtown at $503/night. Moxy NYC Times Square delivers a fun, modern boutique stay right in the heart of Times Square at $380/night. Same weekend, $123 a night apart.`,
    headline: "🗽 Labor Day NYC — Sofitel New York vs. Moxy NYC Times Square",
    protip: "The $123/night gap is real money — $369 over the long weekend. Sofitel is the move if this is a special occasion and French luxury in Midtown is the vibe. Moxy wins if you want to be in Times Square with a modern, energetic hotel that doesn't take itself too seriously.",
    hotels: [
      {
        name: "Sofitel New York",
        emoji: "🇫🇷",
        vibe: "French luxury in the heart of Midtown",
        price: "From $503/night",
        photo: "/Deals/26/sofitel1.jpg",
        blurb: "Sofitel New York is French luxury transplanted to the middle of Midtown Manhattan — refined rooms, exceptional service, and that distinctly European attention to detail that sets Sofitel apart from every other hotel on the block. At $503/night for Labor Day weekend you're paying for one of the best hotel experiences in the city. Four nights earns you over 6,000 RoomVoyager points — that's $6 in real cash back.",
        perks: ["French luxury brand", "Midtown Manhattan location", "Exceptional service", "Sep 4–7 Labor Day"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/nyc3_1",
        articlePhoto: "/Deals/26/sofitel2.jpg",
      },
      {
        name: "Moxy NYC Times Square",
        emoji: "⚡",
        vibe: "Fun, modern boutique in Times Square",
        price: "From $380/night",
        photo: "/Deals/26/moxynyctimes1.jpg",
        blurb: "Moxy NYC Times Square puts you dead center in the action — Times Square energy right outside your door, a hotel that leans into the fun rather than away from it, and rooms that are smartly designed to maximize every inch. At $380/night you're saving $123 a night over the Sofitel — that's $369 back in your pocket over the long weekend to spend on the city instead. Four nights earns you over 4,500 RoomVoyager points.",
        perks: ["Times Square location", "Fun modern boutique vibe", "$123/night savings vs Sofitel", "Sep 4–7 Labor Day"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/nyc3_2",
        articlePhoto: "/Deals/26/moxynyctimes2.jpg",
      },
    ],
  },
  {
    date: "July 27, 2026",
    label: "Fitzpatrick Grand Central vs. Doxie Hotel",
    badge: "Previous Deal",
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
        photo: "/Deals/25/fitzpatrickgrandcentral1.jpg",
        blurb: "Fitzpatrick Grand Central is an Irish-owned boutique hotel steps from Grand Central Terminal — one of the most storied addresses in Midtown Manhattan. The property is known for its warm hospitality, well-appointed rooms, and classic NYC character. During Fashion Week, you're perfectly positioned for shows across Midtown and easy access to the entire city. Seven nights, September 5–12, at $254/night.",
        perks: ["Steps from Grand Central Terminal", "Irish boutique hospitality", "Classic Midtown location", "Sep 5–12 Fashion Week"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/nyc2_2",
        articlePhoto: "/Deals/25/fitzpatrickgrandcentral2.jpg",
      },
      {
        name: "Doxie Hotel",
        emoji: "✨",
        vibe: "Design-forward modern stay in Midtown",
        price: "From $254/night",
        photo: "/Deals/25/doxie1.jpg",
        blurb: "The Doxie Hotel brings a fresh, design-forward energy to Midtown — exactly the right vibe for Fashion Week. Modern rooms, thoughtful details, and a stay that feels current without the stuffy formality of a legacy hotel. At $254/night for Fashion Week you're getting strong value in one of the busiest weeks of the NYC calendar. Seven nights, September 5–12.",
        perks: ["Design-forward modern rooms", "Midtown Manhattan location", "Fashion Week energy", "Sep 5–12"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/nyc2_1",
        articlePhoto: "/Deals/25/doxie2.jpg",
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
            src="/Deals/25/newyork_destination.jpg"
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

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
    date: "July 3, 2026",
    label: "SAHARA vs. The Cosmopolitan",
    badge: "🔥 Latest Deal",
    badgeColor: ORANGE,
    intro: `July 4–6 in Las Vegas is one of the most electric weekends of the year — fireworks over the Strip, packed pool parties, and energy that doesn't quit. We've found two hotels that deliver the full Vegas 4th of July experience at two very different price points. The SAHARA comes in at just $157/night for a full resort experience without the full resort price. The Cosmopolitan sits at $550/night for those ready to go all out in the heart of the Strip.`,
    headline: "🎆 4th of July on the Strip — SAHARA vs. The Cosmopolitan",
    protip: "Not sure which to pick? SAHARA is the smart play if you want to spend your money on experiences instead of the room. The Cosmopolitan is worth every penny if this is a special occasion — the Strip views on the 4th of July from that property are something else.",
    hotels: [
      {
        name: "SAHARA Las Vegas",
        emoji: "🏨",
        vibe: "Best value resort on the Strip",
        price: "From $157/night",
        photo: "/sahara1.jpg",
        blurb: "Don't let the price fool you — the SAHARA is a full resort experience at a fraction of the cost. Sitting at the north end of the Strip, it's got pools, a casino, multiple restaurants, and a retro-cool vibe that feels genuinely fresh. At $157/night for the 4th of July weekend, it's one of the best deals in Vegas right now. Three nights under $500 while the rest of the Strip charges double.",
        perks: ["Pool parties & entertainment", "Full casino floor", "Multiple dining options", "Easy Strip access"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/hotel1dealsweek3",
        articlePhoto: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=400&fit=crop&auto=format",
      },
      {
        name: "The Cosmopolitan of Las Vegas",
        emoji: "✨",
        vibe: "Luxury in the heart of the Strip",
        price: "From $550/night",
        photo: "/cosmopolitan1.jpg",
        blurb: "The Cosmopolitan sits dead center on the Strip between Bellagio and Aria — there is no better address for the 4th of July. The rooms are stunning, the Boulevard Pool is legendary, and the dining lineup is world-class: Eggslut, Wicked Spoon, Momofuku, and more. Watching fireworks from this property on Independence Day is the kind of memory that sticks. Three nights earns you over 8,000 RoomVoyager points — that's $8.25 in real cash back.",
        perks: ["Center Strip location", "Boulevard Pool — legendary on the 4th", "World-class dining on-site", "Unforgettable fireworks views"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/hotel2dealsweek3",
        articlePhoto: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop&auto=format",
      },
    ],
  },
  {
    date: "June 26, 2026",
    label: "Circus Circus vs. Planet Hollywood",
    badge: "Previous Deal",
    badgeColor: "#6B7280",
    intro: `July 3–6 in Las Vegas means fireworks, pool parties, and nonstop energy on the Strip. Whether you're bringing the whole family or planning a grown-up escape, we've found two hotels that deliver — at very different price points. Circus Circus starts at just $41/night, making it one of the best family deals in Vegas this holiday weekend. Planet Hollywood comes in at $130/night for those who want a little more glam with their 4th of July celebration.`,
    headline: "🎆 Quick Family Getaway for the 4th — Circus Circus vs. Planet Hollywood",
    protip: "Circus Circus is perfect if you're traveling with kids — the Adventure Dome alone is worth the trip. Planet Hollywood is the move if you want to be in the heart of the action for the 4th of July fireworks show on the Strip.",
    hotels: [
      {
        name: "Circus Circus Hotel, Casino & Theme Park",
        emoji: "🎪",
        vibe: "Best family value on the Strip",
        price: "From $41/night",
        photo: "/circus3.jpg",
        blurb: "Circus Circus is the ultimate family-friendly Vegas hotel — and at $41/night for July 4th weekend, it's an absolute steal. The kids will go wild at the Adventure Dome (Vegas's only indoor theme park), the midway carnival games, and the nightly acrobat shows. You're right on the Strip with easy access to everything, and you won't break the bank getting there.",
        perks: ["Adventure Dome indoor theme park", "Nightly circus acts & acrobatics", "Multiple restaurants & food court", "Right on the Las Vegas Strip"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/hotel1dealsweek2",
        articlePhoto: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=400&h=400&fit=crop&auto=format",
      },
      {
        name: "Planet Hollywood Resort & Casino",
        emoji: "🎬",
        vibe: "Hollywood glam meets the Strip",
        price: "From $130/night",
        photo: "/planethollywood-1.jpg",
        blurb: "Planet Hollywood puts you dead center on the Strip in a Hollywood-themed paradise. The rooms are spacious, the pool is stunning, and you're steps from the best shopping and dining in Vegas. With a rooftop pool, a packed events calendar, and the Miracle Mile Shops right inside the hotel — the 4th of July fireworks from here are going to be unforgettable.",
        perks: ["Center Strip location", "Rooftop pool & spa", "Miracle Mile Shops on-site", "World-class dining & nightlife"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/hotel2dealsweek2",
        articlePhoto: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=400&fit=crop&auto=format",
      },
    ],
  },
  {
    date: "June 18, 2026",
    label: "Luxor vs. Fontainebleau",
    badge: "Previous Deal",
    badgeColor: "#6B7280",
    intro: `4th of July weekend in Vegas is a different animal — fireworks over the Strip, packed pools, and energy like nowhere else. We're spotlighting two hotels at opposite ends of the budget so you can celebrate your way.`,
    headline: "Luxor vs. Fontainebleau — Two Ways to Do Vegas",
    protip: "Split your stay — Luxor for the first two nights, Fontainebleau for the last. You get the full Vegas experience without blowing your whole budget on one hotel.",
    hotels: [
      {
        name: "Luxor Hotel & Casino",
        emoji: "🔺",
        vibe: "Best value on the Strip",
        price: "From $99/night",
        photo: "/luxor1.jpg",
        blurb: "The iconic pyramid is Vegas's best-kept budget secret. You're right in the middle of the Strip, steps from MGM and Mandalay Bay, with a massive casino floor, multiple restaurants, and rooms that punch way above their price point. If you want the full Vegas experience without the luxury hotel bill, this is your spot.",
        perks: ["Center Strip location", "Large casino floor", "Multiple dining options", "Easy tram access"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/vegasdeal1_99",
        articlePhoto: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=400&h=400&fit=crop&auto=format",
      },
      {
        name: "Fontainebleau Las Vegas",
        emoji: "✨",
        vibe: "New luxury on the Strip",
        price: "From $475/night",
        photo: "/Fontainebleau1.jpg",
        blurb: "Opened in 2023, Fontainebleau is the freshest thing on the Strip. 67 floors of panoramic views, a world-class pool complex, celebrity chef restaurants, and nightlife that rivals any Vegas staple. If you're celebrating or just ready to splurge, there's no better address in the city right now.",
        perks: ["67-story tower with Strip views", "Massive pool complex", "Celebrity chef dining", "Premium spa & nightlife"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/vegasdeal1_470",
        articlePhoto: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=400&fit=crop&auto=format",
      },
    ],
  },
];

function openHotel(link) {
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
                  onClick={() => openHotel(hotel.link)}
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
                  onClick={() => openHotel(hotel.link)}
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

export default function LasVegasDealsPage() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />
        <PromoBanner />

        {/* HERO */}
        <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?w=1600&h=500&fit=crop&auto=format"
            alt="Las Vegas Strip at night"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,60,0.5) 0%, rgba(0,15,60,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deal of the Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: "800", margin: "0 0 10px", textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>Las Vegas</h1>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>4th of July weekend on the Strip — book now before prices jump.</p>
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

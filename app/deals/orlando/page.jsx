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
    publishDate: "2026-07-14",
    date: "July 14, 2026",
    label: "Evermore Orlando Resort vs. The Ritz-Carlton Orlando, Grande Lakes",
    intro: `August 20th through the 22nd — this is the luxury edition. Two nights, two world-class resorts, and a $262-a-night gap that flips everything you'd expect. The Ritz-Carlton comes in at $387/night. Evermore Orlando Resort — the newer, splashier contender — runs $649. The name you know costs less. The name you're still learning about costs more.`,
    headline: "✨ The New Luxury vs. The Gold Standard — Evermore vs. Ritz-Carlton Orlando",
    protip: "Choose Evermore if you want the resort to be the destination — the lagoon, the beach, the water park, the full experience without leaving the property. Choose The Ritz-Carlton if you want the gold standard of luxury at the more reasonable rate — $387/night for service and refinement that the brand has spent a century perfecting.",
    hotels: [
      {
        name: "Evermore Orlando Resort",
        emoji: "🏖️",
        vibe: "20-acre lagoon, beach & water park",
        price: "$649 / night",
        photo: "/blog-photos/orlando-deal-3/Evermoreorlando1.jpg",
        blurb: "Evermore is what happens when someone builds a resort from the ground up with no compromises — a 20-acre crystalline lagoon with white sand beaches, a water park, private cabanas, and hundreds of acres of resort community built to be the most complete Orlando experience outside the theme parks. At $649/night, the resort itself is the attraction. If you want to spend a full day at the lagoon and never leave the property, this is the move.",
        perks: ["20-acre crystalline lagoon", "On-site water park", "White sand beach", "Resort is the destination"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/orlando3_1",
      },
      {
        name: "The Ritz-Carlton Orlando, Grande Lakes",
        emoji: "✨",
        vibe: "Timeless luxury on 500 acres",
        price: "$387 / night",
        photo: "/blog-photos/orlando-deal-3/theritzcarltonorlando1.jpg",
        blurb: "The Ritz-Carlton Grande Lakes delivers the full Ritz experience — impeccable service, a world-class spa, championship golf, fine dining, and quiet refined luxury on 500 acres of Central Florida landscape. Here's the twist: at $387/night, the Ritz is actually the more affordable option in this deal. That's $524 less than Evermore over two nights — enough for a spa day, a tee time, or a dinner at Norman's you'll still be talking about on the flight home.",
        perks: ["World-class spa", "Championship golf", "Fine dining at Norman's", "$524 savings vs. Evermore"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/orlando3_2",
      },
    ],
  },
  {
    publishDate: "2026-07-13",
    date: "July 13, 2026",
    label: "Rosen Inn Lake Buena Vista vs. DASKK Orlando Hotel near Universal Blvd",
    intro: `August 13th through the 15th in Orlando. At just $14 a night apart, this deal is really about one thing: where are you spending your days? Lake Buena Vista puts you in Disney's backyard. Universal Blvd puts you at the doorstep of Universal Studios. Pick your park — the hotel follows.`,
    headline: "🎢 Disney or Universal? — Rosen Inn Lake Buena Vista vs. DASKK Orlando",
    protip: "Choose Rosen Inn Lake Buena Vista if your trip is built around Disney — the location is perfect and $66/night keeps your park budget intact. Choose DASKK Orlando if Universal Studios and International Drive are where you're spending your days — the extra $14/night puts you exactly where you need to be.",
    hotels: [
      {
        name: "Rosen Inn Lake Buena Vista",
        emoji: "🏰",
        vibe: "Disney's backyard — Lake Buena Vista",
        price: "$66 / night",
        photo: "/blog-photos/orlando-deal-2/roseninnlakebuenavista1.jpg",
        blurb: "Lake Buena Vista is where families who are serious about Disney stay. Magic Kingdom, EPCOT, Hollywood Studios, and Animal Kingdom are all within easy reach, and Disney Springs is just minutes away. Rosen isn't a chain — it's an Orlando institution with decades of experience knowing what park guests need. At $66 a night, you're keeping the budget tight for everything the Disney bubble costs, and the location does the rest.",
        perks: ["Lake Buena Vista location", "Minutes from Disney Springs", "Orlando institution", "Best price for Disney side"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/orlando2_1",
      },
      {
        name: "DASKK Orlando Hotel near Universal Blvd",
        emoji: "🎢",
        vibe: "Universal Blvd — parks & International Drive",
        price: "$80 / night",
        photo: "/blog-photos/orlando-deal-2/daskkorlando1.jpg",
        blurb: "Universal Blvd is the right address if Universal Studios, Islands of Adventure, and Volcano Bay are on the itinerary. DASKK Orlando Hotel puts you right in that corridor — easy access to the parks, close to International Drive's restaurants and entertainment. At $80 a night, you're paying $14 more than the Rosen Inn, but the Universal Blvd address and everything that comes with it is worth it if that's where your days are headed.",
        perks: ["Universal Blvd location", "Close to Islands of Adventure", "International Drive access", "Strong value for location"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/orlando2_2",
      },
    ],
  },
  {
    publishDate: "2026-07-12",
    date: "July 12, 2026",
    label: "Grand Hotel Orlando at Universal Blvd vs. Travelodge by Wyndham Orlando",
    intro: `August 6th through the 8th — late summer in Orlando means theme parks, heat, and the very real need to keep your hotel budget in check so there's money left for everything else. Two nights. Two very different takes on budget travel. The $29-a-night difference between these two is real money in a city where the fun costs plenty on its own.`,
    headline: "🏙️ August in Orlando — Grand Hotel vs. Travelodge by Wyndham",
    protip: "Choose Grand Hotel Orlando at Universal Blvd if location matters and you want a hotel that earns its price — walkable, well-positioned, a step above the basics. Choose Travelodge by Wyndham if the parks are the point and $43 a night means $58 more in your pocket for the things that actually make the trip.",
    hotels: [
      {
        name: "Grand Hotel Orlando at Universal Blvd",
        emoji: "🏨",
        vibe: "Universal Blvd — best-in-class location",
        price: "$72 / night",
        photo: "/blog-photos/orlando-deal-1/grandhotelorlandoatuniversal1.jpg",
        blurb: "Universal Blvd is one of Orlando's best-positioned corridors — close to Universal Studios, a straight shot to International Drive, and linked to the rest of the city without the hassle of navigating tourist traffic from a far-out suburb. At $72 a night, the Grand Hotel Orlando puts you exactly where you want to be without asking you to pay the price of a full resort. The 'Grand' in the name isn't just marketing — better amenities, a property that feels considered, and the kind of stay that doesn't leave you wishing you'd spent more.",
        perks: ["Universal Blvd location", "Close to Universal Studios", "International Drive access", "Above-average amenities"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/orlando1_1",
      },
      {
        name: "Travelodge by Wyndham Orlando",
        emoji: "💰",
        vibe: "Wyndham reliability at $43/night",
        price: "$43 / night",
        photo: "/blog-photos/orlando-deal-1/travellodgebywyndamorlandoheart1.jpg",
        blurb: "$43 a night in Orlando is genuinely hard to beat. Travelodge by Wyndham gives you the reliability of the Wyndham brand — clean rooms, consistent standards, a name that means something — at a price that frees up real money for the rest of the trip. Two nights here saves you $58 compared to the Grand Hotel. That's two park meals, half a day's ticket, or a dinner that doesn't feel rushed. If your August trip is about the parks and not the pillow, this is the move.",
        perks: ["Wyndham brand reliability", "$43/night hard to beat", "Save $58 over 2 nights", "Spend savings at the parks"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/orlando1_2",
      },
    ],
  },
];

function openHotel(link) {
  window.open(`/redirect?to=${encodeURIComponent(link)}&partner=Expedia&product=hotel`, "_blank", "noopener,noreferrer");
}

function DealCard({ deal, isLatest }) {
  const [open, setOpen] = useState(false);
  const badge = isLatest ? "🔥 Latest Deal" : "Previous Deal";

  return (
    <div style={{ marginBottom: "16px", borderRadius: "14px", overflow: "hidden", border: `1.5px solid ${isLatest ? ORANGE : "#E5E7EB"}`, boxShadow: isLatest ? "0 4px 16px rgba(255,102,0,0.15)" : "0 2px 8px rgba(0,0,0,0.06)" }}>

      {/* HEADER / TOGGLE */}
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", background: isLatest ? `linear-gradient(135deg, ${ORANGE} 0%, #FF8C00 100%)` : "#F9FAFB", border: "none", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer", gap: "12px" }}
      >
        <div style={{ textAlign: "left", flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px", flexWrap: "wrap" }}>
            <span style={{ background: isLatest ? "rgba(255,255,255,0.25)" : "#E5E7EB", color: isLatest ? "#fff" : "#6B7280", fontSize: "10px", fontWeight: "700", padding: "3px 8px", borderRadius: "5px", textTransform: "uppercase", letterSpacing: "0.08em" }}>{badge}</span>
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

export default function OrlandoDealsPage() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />
        <PromoBanner />

        {/* HERO */}
        <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1627035983655-0ceec61bb733?w=1600&h=500&fit=crop&auto=format"
            alt="Orlando"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,60,0.5) 0%, rgba(0,15,60,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: "800", margin: "0 0 10px", textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>Orlando</h1>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>Not all budget hotels are created equal. Find the right one for your August trip.</p>
          </div>
        </div>

        {/* DEALS LIST */}
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 80px" }}>

          <p style={{ fontSize: "13px", color: "#9CA3AF", marginBottom: "24px", textAlign: "center" }}>Click any deal below to expand the full post</p>

          {DEALS.filter(d => {
            const t = new Date();
            const today = `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`;
            return d.publishDate <= today;
          }).map((deal, i) => (
            <DealCard key={i} deal={deal} isLatest={i === 0} />
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

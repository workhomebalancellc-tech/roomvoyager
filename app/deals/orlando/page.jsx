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
    publishDate: "2026-07-18",
    date: "July 18, 2026",
    label: "Orlando World Center Marriott vs. staySky Suites I Drive Orlando",
    intro: `August 8th through the 16th — peak summer Orlando and $71 a night separating two very different stays. Orlando World Center Marriott is one of the largest hotels in the US: 200 acres, a resort-scale pool complex with waterslides, and Disney on your doorstep at $176 a night. staySky Suites on I-Drive gives you a full suite — living space, a kitchen, and the entire I-Drive entertainment corridor outside your door — at $105 a night. Over a week, that gap adds up to nearly $500.`,
    headline: "🏨 Resort Scale vs. Suite Value — Orlando World Center Marriott vs. staySky Suites",
    protip: "Choose Orlando World Center Marriott if the resort is part of the vacation — 200 acres, a waterslide pool complex, and Disney proximity at $176/night is genuinely competitive for what it delivers. Choose staySky Suites I Drive Orlando if the parks are the trip and you want spacious suite living at $105/night — and nearly $500 more in your pocket over the week.",
    hotels: [
      {
        name: "Orlando World Center Marriott",
        emoji: "🏨",
        vibe: "200 acres — one of the largest hotels in the US",
        price: "$176 / night",
        photo: "/Deals/16/orlandoworldcenter1.jpg",
        blurb: "Orlando World Center Marriott isn't a hotel — it's a destination. Spread across 200 acres near Walt Disney World with over 2,000 rooms, the resort infrastructure is the point: multiple pools, a lazy river, waterslides, a full spa, a golf course, and multiple restaurants. Near Disney, well-priced for what it delivers, and the kind of property where you could spend an entire day without leaving. If the hotel is part of the vacation, this earns every dollar at $176/night.",
        perks: ["200 acres near Disney", "Resort pool with waterslides", "Golf course & full spa", "Multiple on-site restaurants"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/orlando7_1",
      },
      {
        name: "staySky Suites I Drive Orlando",
        emoji: "🛋️",
        vibe: "Full suite on I-Drive — $71 cheaper per night",
        price: "$105 / night",
        photo: "/Deals/16/staysky1.jpg",
        blurb: "International Drive is Orlando's entertainment backbone — restaurants, mini-golf, dinner shows, the Orlando Eye, and easy access to both Universal Studios and the convention center. staySky Suites puts you right in the middle of it in a full suite with living space and a kitchen at $105/night. The $71/night you save over the World Center Marriott adds up to nearly $500 over the week — that's a Universal Express Pass, a Disney character dining experience, or simply more breathing room.",
        perks: ["Full suite with living space & kitchen", "I-Drive entertainment corridor", "Close to Universal Studios", "Nearly $500 savings over a week"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/orlando7_2",
      },
    ],
  },
  {
    publishDate: "2026-07-17",
    date: "July 17, 2026",
    label: "Disney's Yacht Club Resort vs. Marriott's Imperial Palm Villas",
    intro: `August 20th through the 23rd — three nights, $309 a night apart. Disney's Yacht Club Resort is EPCOT's most elegant neighbor, walkable to the park with one of the best hotel pools in the US. Marriott's Imperial Palm Villas gives you full villa space, a kitchen, and $927 in savings over three nights. Here's how to decide.`,
    headline: "🏰 Disney Magic or Villa Space? — Yacht Club vs. Imperial Palm Villas",
    protip: "Choose Disney's Yacht Club Resort if EPCOT is the heart of your trip — the walkability, Stormalong Bay pool, and full Disney resort experience are worth it. Choose Marriott's Imperial Palm Villas if $927 in savings sounds better than a walk to EPCOT — villa space and a kitchen near all the same parks at $284/night.",
    hotels: [
      {
        name: "Disney's Yacht Club Resort",
        emoji: "⚓",
        vibe: "Steps from EPCOT — full Disney deluxe experience",
        price: "$593 / night",
        photo: "/Deals/15/disneysyachtclub1.jpg",
        blurb: "Sitting on Crescent Lake with a walk to EPCOT's International Gateway, the Yacht Club delivers Early Theme Park Entry, Disney transportation, and Stormalong Bay — widely considered one of the best hotel pools in the US. A 230-foot waterslide, sandy-bottom lagoon, and nautical New England elegance. At $593/night this is the full Disney deluxe experience with zero compromises.",
        perks: ["Walk to EPCOT", "Early Theme Park Entry", "Stormalong Bay pool", "Disney resort transportation"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/orlando6_1",
      },
      {
        name: "Marriott's Imperial Palm Villas",
        emoji: "🌴",
        vibe: "Villa space, full kitchen, $927 in savings",
        price: "$284 / night",
        photo: "/Deals/15/marriottsimperialpalm1.jpg",
        blurb: "Villa-style rooms with full kitchens and separate living areas near the Disney corridor — comfort and space at $284/night. You're saving $927 over three nights compared to the Yacht Club. That money buys park tickets, character dining, or simply more freedom throughout the trip. No EPCOT walk, but a kitchen to make breakfast and a living room to actually decompress in.",
        perks: ["Full kitchen in every villa", "Separate living area", "Near Disney parks", "$927 savings vs. Yacht Club"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/orlando6_2",
      },
    ],
  },
  {
    publishDate: "2026-07-16",
    date: "July 16, 2026",
    label: "Element by Marriott Orlando vs. Aloft by Marriott Orlando Downtown",
    intro: `Both Marriott. $14 apart. But the real question is which Orlando you're going to — Universal Blvd and extended-stay comfort, or Downtown Orlando's arts and nightlife scene. Element gives you more room and a kitchen near the parks. Aloft puts you in the city locals actually love.`,
    headline: "🏙️ Same Family, Two Different Orlandos — Element vs. Aloft by Marriott",
    protip: "Choose Element by Marriott if you're staying a while and want kitchen facilities and more space near Universal. Choose Aloft Downtown if the city is the plan — walkable, design-forward, and right in the heart of Orlando beyond the tourist trail.",
    hotels: [
      {
        name: "Element by Marriott Orlando",
        emoji: "🏨",
        vibe: "Extended-stay comfort near Universal",
        price: "$163 / night",
        photo: "/Deals/14/elementbymarriottorlando1.jpg",
        blurb: "Element is Marriott's extended-stay brand — full kitchenettes, more living space, and a design that accounts for longer visits. Near Universal Studios and International Drive, you're well-positioned for the parks without being trapped in the tourist bubble. At $163/night, the $14 premium over Aloft disappears fast when you're making breakfast in your room instead of paying resort prices for eggs.",
        perks: ["Full kitchenette", "More living space", "Near Universal Studios", "Great for longer stays"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/orlando5_1",
      },
      {
        name: "Aloft by Marriott Orlando Downtown",
        emoji: "🌆",
        vibe: "Boutique energy in Downtown Orlando",
        price: "$149 / night",
        photo: "/Deals/14/Aloftbymarriottorlando1.jpg",
        blurb: "Aloft is Marriott's design-forward boutique brand, and Downtown Orlando is a different city from the theme park corridor — Lake Eola Park, the Dr. Phillips Center, restaurants and bars that locals actually go to. At $149/night, Aloft is the value pick and the better address if you want Orlando beyond the tourist trail. The WXYZ Bar, loft-style rooms, and walkable city access seal the deal.",
        perks: ["Downtown Orlando location", "Walkable to Lake Eola", "Design-forward boutique style", "Best value in this matchup"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/orlando5_2",
      },
    ],
  },
  {
    publishDate: "2026-07-15",
    date: "July 15, 2026",
    label: "Walt Disney World Swan Reserve vs. Signia by Hilton Orlando",
    intro: `August 27th through the 29th — both the Walt Disney World Swan Reserve and the Signia by Hilton Orlando are official Disney World hotels. That means both get you Early Theme Park Entry, Disney transportation, and the full on-property experience. The difference is $89 a night, $178 over two nights. So what does the upgrade actually buy you?`,
    headline: "🏰 Same Disney Perks, Very Different Price — Swan Reserve vs. Signia by Hilton",
    protip: "Choose Walt Disney World Swan Reserve if you want every Disney perk at the smarter price — $233/night with $178 more to spend in the parks over two nights. Choose Signia by Hilton if you want the full resort upgrade — more pools, more dining, more amenities — alongside every official Disney benefit.",
    hotels: [
      {
        name: "Walt Disney World Swan Reserve",
        emoji: "🦢",
        vibe: "Official Disney hotel — smart value",
        price: "$233 / night",
        photo: "/Deals/13/waltdisneyworldswan1.jpg",
        blurb: "Steps from EPCOT and Hollywood Studios, the Swan Reserve delivers everything that matters for a Disney trip — Early Theme Park Entry, Disney transportation, and modern luxury that the Swan & Dolphin complex has quietly perfected over decades. At $233/night you get the full official Disney hotel experience for $89 less per night than the Signia. Over two nights, that's $178 back in your pocket — which, at Disney, is real money.",
        perks: ["Steps from EPCOT", "Early Theme Park Entry", "Disney transportation", "$178 savings vs. Signia"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/orlando4_1",
      },
      {
        name: "Signia by Hilton Orlando",
        emoji: "✨",
        vibe: "Official Disney hotel — full resort upgrade",
        price: "$322 / night",
        photo: "/Deals/13/signiabyhilton1.jpg",
        blurb: "Signia is Hilton's premium resort brand and an official Walt Disney World hotel — same Disney perks as the Swan Reserve, plus a step up in scale. Multiple pools, upscale dining, a spa, and a resort feel that makes late August feel like a genuine getaway. The $89/night premium buys you more of everything — more dining, more pool space, and a stay that holds its own alongside the parks.",
        perks: ["Official Disney World hotel", "Multiple pools & spa", "Upscale dining on-site", "Full resort experience"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/orlando4_2",
      },
    ],
  },
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
            const now = new Date();
            const [y, mo, day] = d.publishDate.split("-").map(Number);
            return now >= new Date(y, mo - 1, day, 10, 0, 0);
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

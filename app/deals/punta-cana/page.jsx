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
    publishDate: "2026-07-25",
    date: "July 25, 2026",
    label: "Hotel Casa Don Luis Cap Cana vs. Destination Jelly Playa Coral Condo",
    intro: `Cap Cana boutique luxury versus condo-style living on Playa Coral — this week's deal is two completely different ways to do Punta Cana over Labor Day weekend. Hotel Casa Don Luis brings the intimate boutique experience to Cap Cana's exclusive enclave. Destination Jelly Playa Coral Condo gives you a full apartment setup steps from the beach at a fraction of the price.`,
    headline: "🌴 Punta Cana Deal #7 — Hotel Casa Don Luis Cap Cana vs. Destination Jelly Playa Coral Condo",
    protip: "Choose Hotel Casa Don Luis if you want the boutique Cap Cana experience — intimate, well-appointed, and in one of the most exclusive addresses in Punta Cana. Choose Destination Jelly Playa Coral Condo if you want apartment-style space, a kitchen, and the freedom to live like a local on Playa Coral at $139 a night.",
    hotels: [
      {
        name: "Hotel Casa Don Luis Cap Cana by Faranda Boutique",
        emoji: "🏛️",
        vibe: "Boutique hotel in exclusive Cap Cana",
        price: "$205/night",
        photo: "/Deals/23/casadonluis1.jpg",
        blurb: "Hotel Casa Don Luis is a Faranda Boutique property in Cap Cana — which means you're in the most exclusive development in Punta Cana, staying at a property designed around intimacy and character rather than scale. Boutique means fewer rooms, more attention, and a stay that actually feels personal. Cap Cana gives you access to a marina, championship golf, and private beach clubs. September 1st through the 3rd is a long weekend done right.",
        perks: ["Faranda Boutique brand", "Exclusive Cap Cana location", "Intimate & well-appointed", "Sep 1–3"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/puntacana7_1",
      },
      {
        name: "Destination Jelly Playa Coral Condo",
        emoji: "🏠",
        vibe: "Condo living on Playa Coral",
        price: "$139/night",
        photo: "/Deals/23/destinationjelly1.jpg",
        blurb: "Destination Jelly Playa Coral Condo puts you in a full apartment on Playa Coral — kitchen, living space, and the kind of room to breathe that a standard hotel room simply can't match. At $139 a night you're saving $66 per night over Casa Don Luis, and you're getting more space for it. Playa Coral is one of Punta Cana's quieter beach stretches, which makes a Labor Day long weekend feel genuinely like an escape.",
        perks: ["Full condo with kitchen", "Playa Coral beachside", "$66/night savings", "Sep 1–3"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/puntacana7_2",
      },
    ],
  },
  {
    publishDate: "2026-07-24",
    date: "July 24, 2026",
    label: "JOIA Bávaro by Iberostar vs. The St. Regis Cap Cana Resort",
    intro: `This week's deal is Punta Cana at its most elevated — two premium properties that represent completely different visions of what a luxury Caribbean stay looks like. JOIA Bávaro by Iberostar is adults-only, all-inclusive, and right on Bávaro Beach. The St. Regis Cap Cana is five-star luxury in the exclusive Cap Cana enclave — a different level of resort entirely. September 1st through the 8th, $30 a night apart.`,
    headline: "🌴 Punta Cana Deal #6 — JOIA Bávaro by Iberostar vs. The St. Regis Cap Cana Resort",
    protip: "Choose JOIA Bávaro if you want adults-only all-inclusive done at the highest level — everything covered, Iberostar quality, right on Bávaro Beach. Choose The St. Regis Cap Cana if you want the full five-star luxury experience in the most exclusive corner of Punta Cana — butler service, marina, and the kind of resort that genuinely earns the price.",
    hotels: [
      {
        name: "JOIA Bávaro by Iberostar — Adults Only All Inclusive",
        emoji: "🍹",
        vibe: "Adults-only luxury all-inclusive",
        price: "$389/night",
        photo: "/Deals/22/joiabavaro1.jpg",
        blurb: "JOIA Bávaro is Iberostar's premium adults-only concept — all-inclusive, beachfront on Bávaro, and designed for travelers who want everything taken care of without a family resort atmosphere. The quality here is a notch above the standard all-inclusive: better dining, better service, and a property that feels genuinely considered. Seven nights, September 1st through the 8th, and every meal and drink is covered from arrival to checkout.",
        perks: ["Adults-only", "Full all-inclusive", "Iberostar premium brand", "Sep 1–8"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/puntacana6_1",
      },
      {
        name: "The St. Regis Cap Cana Resort",
        emoji: "⭐",
        vibe: "Five-star luxury in Cap Cana",
        price: "$419/night",
        photo: "/Deals/22/stregiscap1.jpg",
        blurb: "The St. Regis Cap Cana sits in one of the most exclusive resort developments in the Caribbean. Cap Cana is a gated community of ultra-luxury properties with a marina, championship golf, and private beach clubs — and the St. Regis is the crown jewel. Butler service, world-class dining, and a level of finish that makes every other resort in Punta Cana feel like a different category. At $419 a night — just $30 more than JOIA — this is one of the most compelling value comparisons on the entire island.",
        perks: ["St. Regis butler service", "Exclusive Cap Cana location", "Marina & private beach", "Sep 1–8"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/puntacana6_2",
      },
    ],
  },
  {
    publishDate: "2026-07-23",
    date: "July 23, 2026",
    label: "Hotel Riu Palace Bávaro vs. Catalonia Punta Cana — All Inclusive",
    intro: `Two of Punta Cana's most popular all-inclusive resorts, side by side for Labor Day weekend. Hotel Riu Palace Bávaro and Catalonia Punta Cana both give you everything included — drinks, meals, beach, pools — but at $66 a night apart, the question is what that premium actually buys you.`,
    headline: "🌴 Punta Cana Deal #5 — Hotel Riu Palace Bávaro vs. Catalonia Punta Cana",
    protip: "Choose Hotel Riu Palace Bávaro if you want the full luxury all-inclusive experience — the Riu Palace brand is a step above, and at $253/night it delivers. Choose Catalonia Punta Cana if you want the same all-inclusive format at $66 less per night — solid resort, great beach, and $264 back in your pocket over four nights.",
    hotels: [
      {
        name: "Hotel Riu Palace Bávaro — All Inclusive",
        emoji: "👑",
        vibe: "Luxury all-inclusive on Bávaro Beach",
        price: "$253/night",
        photo: "/Deals/21/riupalacebavaro1.jpg",
        blurb: "Riu Palace Bávaro is the flagship of the Riu collection in Punta Cana — adults-only, beachfront on Bávaro, and all-inclusive with the kind of polish you'd expect from the Palace brand. Multiple pools, premium dining, and a beach that delivers exactly what every Punta Cana photo promises. September 1st through the 4th is shoulder season: the resort is at its most relaxed, the water is warm, and the price is as low as you'll find for this caliber of property.",
        perks: ["Adults-only", "Beachfront on Bávaro", "Premium all-inclusive", "Sep 1–4"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/puntacana5_1",
      },
      {
        name: "Catalonia Punta Cana — All Inclusive",
        emoji: "🏖️",
        vibe: "Full all-inclusive, great value",
        price: "$187/night",
        photo: "/Deals/21/cataloniapuntacana1.jpg",
        blurb: "Catalonia Punta Cana is a well-established all-inclusive in the heart of the Bávaro resort strip — everything included, multiple pools, beach access, and the kind of resort that delivers a genuinely good Caribbean vacation without the Palace-tier price tag. At $187 a night, you're saving $264 over four nights compared to the Riu Palace. That's a spa day, a catamaran excursion, and still money left over — all while staying at a resort that consistently earns strong reviews.",
        perks: ["Full all-inclusive", "Bávaro resort strip", "$264 savings vs. Riu Palace", "Sep 1–4"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/puntacana5_2",
      },
    ],
  },
  {
    publishDate: "2026-07-22",
    date: "July 22, 2026",
    label: "Palmares Suites vs. Hotel El Imperio Punta Cana",
    intro: `Labor Day weekend in Punta Cana — and this week's deal is two properties that keep the budget firmly in check while putting you right in the mix. Palmares Suites and Hotel El Imperio Punta Cana both deliver the Dominican Republic experience without the all-inclusive price tag. September 1st through the 5th is still warm, still beautiful, and noticeably less crowded than peak season.`,
    headline: "🌴 Punta Cana Deal #4 — Palmares Suites vs. Hotel El Imperio Punta Cana",
    protip: "Choose Palmares Suites if the suite-style setup and extra space are worth the $18 difference. Choose Hotel El Imperio Punta Cana if you want to go as low as possible and put the savings straight into the trip itself — excursions, beach clubs, local dining.",
    hotels: [
      {
        name: "Palmares Suites",
        emoji: "🏨",
        vibe: "Suite-style comfort, great value",
        price: "$48/night",
        photo: "/Deals/20/palmaressuites1.jpg",
        blurb: "Palmares Suites gives you the suite experience at a price that still makes sense. At $48 a night, you're getting more space than a standard room — the kind of setup that makes a four-night stay actually comfortable rather than just functional. September 1st through the 5th lands right at the start of shoulder season, when Punta Cana is at its most relaxed and the deals are at their best.",
        perks: ["Suite-style rooms", "$48/night", "Sep 1–5", "Shoulder season value"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/puntacana4_1",
      },
      {
        name: "Hotel El Imperio Punta Cana",
        emoji: "👑",
        vibe: "Affordable base, maximize your budget",
        price: "$30/night",
        photo: "/Deals/20/hotelelimperiopunta1.jpg",
        blurb: "Hotel El Imperio Punta Cana brings it down to $30 a night — a price that fundamentally changes what the rest of your trip can look like. Every dollar you save on the room is a dollar that goes toward a catamaran trip, a beach club day pass, or a proper dinner out. Punta Cana at $30 a night over Labor Day weekend is the kind of deal that makes the trip happen when it otherwise might not.",
        perks: ["$30/night", "Budget-friendly base", "Sep 1–5", "More money for excursions"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/puntacana4_2",
      },
    ],
  },
  {
    publishDate: "2026-07-21",
    date: "July 21, 2026",
    label: "La Casona MC vs. Caribbean Sun Apart Hotel",
    intro: `Punta Cana for Labor Day weekend — and this week's deal is two budget-friendly options that prove you don't need to spend a fortune to get to the Dominican Republic. La Casona MC and Caribbean Sun Apart Hotel both put you close to the action at prices that leave plenty left over for the beach, the food, and the excursions.`,
    headline: "🌴 Punta Cana Deal #3 — La Casona MC vs. Caribbean Sun Apart Hotel",
    protip: "Choose La Casona MC if you want a bit more character and don't mind spending the extra $8 a night for it. Choose Caribbean Sun Apart Hotel if you want apartment-style space — a kitchen, room to spread out — at the lowest price on the list.",
    hotels: [
      {
        name: "La Casona MC",
        emoji: "🏘️",
        vibe: "Boutique guesthouse, great value",
        price: "$30/night",
        photo: "/Deals/19/lacasonamc1.jpg",
        blurb: "La Casona MC is the kind of find that makes a Labor Day weekend trip actually affordable. At $30 a night, you're getting a clean, comfortable base in Punta Cana with the character of a boutique property — not a faceless chain. August 30th through September 2nd is shoulder season, which means the crowds are thinner, the prices are lower, and the beach is still exactly as beautiful as it is in peak season.",
        perks: ["$30/night", "Boutique guesthouse", "Aug 30–Sep 2", "Labor Day weekend"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/puntacana3_1",
      },
      {
        name: "Caribbean Sun Apart Hotel",
        emoji: "☀️",
        vibe: "Apart-hotel with kitchen, ultra value",
        price: "$22/night",
        photo: "/Deals/19/caribbeansun1.jpg",
        blurb: "Caribbean Sun Apart Hotel goes even lower — $22 a night for apartment-style accommodations with a kitchen and real living space. This is the play for travelers who want to stretch every dollar: cook some meals in, spend the savings on a catamaran trip or a day at the beach club, and still come home having spent far less than a typical Caribbean getaway. Labor Day weekend in Punta Cana at $22 a night is a deal worth sharing.",
        perks: ["$22/night", "Kitchen & living space", "Apart-hotel style", "Aug 30–Sep 2"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/puntacana3_2",
      },
    ],
  },
  {
    publishDate: "2026-07-20",
    date: "July 20, 2026",
    label: "Brisas Tropical Playa Los Corales vs. The Patio",
    intro: `Punta Cana delivers on the beach every time — but where you stay changes everything about the trip. This week's deal puts two very different properties side by side: a classic Caribbean resort right on Los Corales beach, versus a boutique option that strips things back and keeps it simple at a price that's hard to argue with.`,
    headline: "🌴 Punta Cana Deal #2 — Brisas Tropical Playa Los Corales vs. The Patio",
    protip: "Choose Brisas Tropical if you want the full Caribbean resort experience — beach access, pools, and everything on-site. Choose The Patio if you're keeping the budget tight and want a clean, comfortable base to explore from without paying for amenities you won't use.",
    hotels: [
      {
        name: "Brisas Tropical Playa Los Corales",
        emoji: "🌊",
        vibe: "Beachfront resort on Los Corales",
        price: "$99/night",
        photo: "/Deals/18/brisastropical1.jpg",
        blurb: "Brisas Tropical Playa Los Corales sits directly on one of Punta Cana's most sought-after stretches of coastline. Los Corales Beach is calmer and less crowded than Bávaro, with clear water and a reef just offshore that makes it a favorite with snorkelers. The resort gives you everything you need for a proper Caribbean stay — pools, dining, beach access — at a price that still leaves room in the budget for an excursion or two. Travel dates: August 14–17.",
        perks: ["Beachfront on Los Corales", "Snorkeling reef offshore", "Pools & on-site dining", "Aug 14–17"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/puntacana2_1",
      },
      {
        name: "The Patio",
        emoji: "🏡",
        vibe: "Boutique stay, unbeatable price",
        price: "$17/night",
        photo: "/Deals/18/thepatio1.jpg",
        blurb: "At $17 a night, The Patio is one of those rare finds that makes you look twice. It's a boutique property — intimate, straightforward, and without the overhead of a large resort. What you get is a clean, comfortable place to stay in Punta Cana with the freedom to spend your money on the things that actually matter: the beach, the food, the excursions. Sometimes the best travel hack is just paying less for the room. Travel dates: August 14–17.",
        perks: ["$17/night", "Boutique & intimate", "Budget-friendly base", "Aug 14–17"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/puntacana2_2",
      },
    ],
  },
  {
    publishDate: "2026-07-19",
    date: "July 19, 2026",
    label: "Vik Hotel Cayena Beach vs. Whala! Bávaro",
    intro: `Punta Cana sits at the eastern tip of the Dominican Republic where the Atlantic meets the Caribbean — a stretch of coastline with some of the finest white-sand beaches in the world. This week's deal is two very different ways to do it: a vibrant art-forward adults-only resort that turns every corner into a photo, versus an all-inclusive on Bávaro Beach that delivers sun, sea, and zero-hassle Caribbean bliss.`,
    headline: "🌴 Punta Cana Deal #1 — Vik Hotel Cayena Beach vs. Whala! Bávaro",
    protip: "Choose Vik Hotel Cayena Beach if you want something with personality — bold art, adults-only calm, and a resort that feels like it was designed rather than just built. Choose Whala! Bávaro if you want the classic all-inclusive Caribbean experience: beach, pool, drinks, and everything taken care of from the moment you check in.",
    hotels: [
      {
        name: "Vik Hotel Cayena Beach",
        emoji: "🎨",
        vibe: "Adults-only art resort on the beach",
        price: "Great value",
        photo: "/Deals/17/vikhotelcayena11.jpg",
        blurb: "Vik Hotel Cayena Beach is unlike any resort in Punta Cana. The property is a serious collector of contemporary Latin American art — paintings, sculptures, and installations are woven through every public space, every corridor, every room. It's adults-only, which keeps the energy calm and the pool decks peaceful. The beach is right there, the food is well above resort average, and the rooms are genuinely well-designed. This is the pick for travelers who want the beach without the chaos.",
        perks: ["Adults-only resort", "Contemporary Latin American art collection", "Beachfront location", "Above-average dining"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/puntacana1_1",
      },
      {
        name: "Whala! Bávaro",
        emoji: "🏖️",
        vibe: "All-inclusive on Bávaro Beach",
        price: "All-inclusive value",
        photo: "/Deals/17/whala1.jpg",
        blurb: "Bávaro Beach is one of the most celebrated stretches of sand in the Caribbean — powdery white, palm-lined, and lapped by that impossible shade of turquoise water you've seen in every Punta Cana photo. Whala! Bávaro puts you right on it. All-inclusive means drinks, meals, and activities are covered from the moment you arrive. It's the resort for people who want to land in paradise, drop their bags, and not make another decision until checkout.",
        perks: ["Directly on Bávaro Beach", "Full all-inclusive", "Multiple pools & restaurants", "Family-friendly"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/puntacana1_2",
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

export default function PuntaCanaDealsPage() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />
        <PromoBanner />

        {/* HERO */}
        <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <img
            src="/Deals/17/puntacana_destination.jpg"
            alt="Punta Cana"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,60,0.5) 0%, rgba(0,15,60,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: "800", margin: "0 0 10px", textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>Punta Cana</h1>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>The Caribbean's most famous beach. Two very different ways to enjoy it.</p>
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

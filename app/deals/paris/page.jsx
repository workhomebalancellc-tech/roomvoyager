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
    publishDate: "2026-07-07",
    date: "July 7, 2026",
    label: "Timhotel Opéra vs. 1er Étage Sopi",
    intro: `Paris doesn't have to cost a fortune to feel incredible. This week we're spotlighting two boutique hotels that prove you can stay somewhere with real personality — great location, genuine charm — without blowing your budget before you've even had your first croissant. Both are under the radar. Both are worth every euro.`,
    headline: "🗼 Hidden Gem Paris — Timhotel Opéra vs. 1er Étage Sopi",
    protip: "Timhotel Opéra puts you steps from the Palais Garnier and the grands boulevards — great if you want to walk everywhere. 1er Étage Sopi drops you into South Pigalle, Paris's most up-and-coming neighborhood — great if you want to feel like a local.",
    hotels: [
      {
        name: "Timhotel Opéra Blanche Fontaine",
        emoji: "🎭",
        vibe: "Classic Paris near the Opera",
        price: "Great value",
        photo: "/blog-photos/paris-deal-3/Timhotel1.jpg",
        blurb: "Steps from the Palais Garnier and the grand boulevards of the 9th arrondissement, Timhotel Opéra Blanche Fontaine puts you at the heart of classic Paris. This is the neighborhood of Haussmann-era architecture, café terraces, and the kind of streets that make you slow down. You're close to everything — the Louvre, the Marais, Montmartre — without paying the tourist-corridor prices that come with those addresses.",
        perks: ["Steps from Palais Garnier", "9th arrondissement location", "Easy access to Louvre & Marais", "Classic Parisian neighborhood"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/parisdeal3_1",
      },
      {
        name: "1er Étage Sopi",
        emoji: "🍷",
        vibe: "Trendy South Pigalle boutique",
        price: "Boutique value",
        photo: "/blog-photos/paris-deal-3/1er1.jpg",
        blurb: "South Pigalle — SoPi — is the Paris neighborhood that Parisians actually live in right now. Wine bars, independent coffee shops, vintage stores, and restaurants that don't exist on any tourist map. 1er Étage Sopi sits right in the middle of it. This is the Paris that doesn't perform for visitors — it just exists, and it's brilliant. Stay here and you'll spend your evenings exactly where locals spend theirs.",
        perks: ["South Pigalle (SoPi) location", "Local restaurants & wine bars", "Boutique personality", "Off the tourist trail"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/parisdeal3_2",
      },
    ],
  },
  {
    publishDate: "2026-07-06",
    date: "July 6, 2026",
    label: "Hotel Petit Vix vs. Park Hyatt Paris-Vendôme",
    intro: `Bastille Day is Paris at its absolute peak. The Champs-Élysées fills with one of the world's great military parades, the Seine glows with open-air concerts, and when night falls, the Eiffel Tower erupts in fireworks that light up the entire city. We found two hotels that represent completely opposite ways to experience it — one that lets you spend your money on the city, and one that turns the whole week into a once-in-a-lifetime memory.`,
    headline: "🇫🇷 Bastille Day — Hotel Petit Vix vs. Park Hyatt Paris-Vendôme",
    protip: "Hotel Petit Vix is the right call if you want to stretch your budget and spend your money on the city itself — the food, the day trips, the wine. Park Hyatt Paris-Vendôme is the move if this is the trip. If you've been waiting for the right reason to do Paris properly, Bastille Day is as right as it gets.",
    hotels: [
      {
        name: "Hotel Petit Vix",
        emoji: "💰",
        vibe: "Smart, stylish budget pick",
        price: "Budget-friendly",
        photo: "/blog-photos/paris-deal-2/hotelpetit1.jpg",
        blurb: "For travelers who want to be in Paris for Bastille Day without spending their vacation budget on the room, Hotel Petit Vix is exactly what you're looking for. This boutique property brings together personality, comfort, and value in a city where all three are hard to find at once. The real celebration happens in the streets — you want a clean, comfortable place to come home to after hours of watching fireworks and wandering illuminated neighborhoods.",
        perks: ["Boutique personality & style", "Excellent value for Paris", "Perfect base for the city", "Walking distance to celebrations"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/parisdeal2_1",
      },
      {
        name: "Park Hyatt Paris-Vendôme",
        emoji: "✨",
        vibe: "Once-in-a-lifetime luxury",
        price: "Luxury splurge",
        photo: "/blog-photos/paris-deal-2/parkhyattparis1.jpg",
        blurb: "Tucked into 5 Rue de la Paix — steps from the gilded column of Place Vendôme and a short stroll from the Tuileries Garden — this is one of the most celebrated luxury hotels in the world. 153 rooms that have hosted heads of state and icons. A spa covering an entire floor. On Bastille Day, the neighborhood becomes one of the most extraordinary places in all of France. When the fireworks end, you walk back to one of the finest hotel rooms in Europe.",
        perks: ["5 Rue de la Paix address", "Full-floor world-class spa", "Steps from Place Vendôme", "Eiffel Tower fireworks walkable"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/parisdeal2_2",
      },
    ],
  },
  {
    publishDate: "2026-07-05",
    date: "July 5, 2026",
    label: "Nouvel Hôtel vs. Artemisia Montmartre",
    intro: `There's no better time to visit Paris than July. The sun sets after 10 PM, the terraces are packed with rosé and laughter, and on the 14th — Bastille Day — the Eiffel Tower lights up the sky with fireworks that stop you dead in your tracks. We've hand-picked two hotels for this week's deal that cover two very different sides of Paris — and both will have you waking up excited about the day ahead.`,
    headline: "🗼 Paris in July — Nouvel Hôtel vs. Artemisia Montmartre",
    protip: "Choose Nouvel Hôtel if you want value, quiet, and easy metro access without sacrificing charm. Choose Artemisia Montmartre if you want to be fully immersed in the romance and energy of Paris — waking up in Montmartre, watching the Moulin Rouge light up at night, and feeling like you're living inside a postcard.",
    hotels: [
      {
        name: "Nouvel Hôtel Paris",
        emoji: "🏨",
        vibe: "Quiet charm in the 12th",
        price: "Great value",
        photo: "/blog-photos/paris-deal-1/nouvel1.jpg",
        blurb: "Tucked into a quiet street in the 12th arrondissement, Nouvel Hôtel Paris is one of those finds that makes you feel like a local the moment you check in. Originally built as a boarding school for girls, the building has held onto its old-world Parisian character — high ceilings, warm interiors, and a calm that's surprisingly rare in the heart of the city. The Bel-Air metro stop is a three-minute walk from the front door, putting the Eiffel Tower, the Marais, and the Seine all within easy reach.",
        perks: ["12th arrondissement gem", "3 min walk to metro", "Old-world Parisian character", "Away from tourist crowds"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/parisdeal1_1",
      },
      {
        name: "Artemisia Montmartre",
        emoji: "🎨",
        vibe: "Art Deco near Sacré-Cœur",
        price: "Mid-range romantic",
        photo: "/blog-photos/paris-deal-1/artemisia1.jpg",
        blurb: "Set just 656 feet from the Moulin Rouge and steps from the winding cobblestone streets of the Butte Montmartre, this boutique hotel sits in one of the most iconic neighborhoods on earth. Renovated in 2023, the Artemisia leans fully into its Art Deco and Art Nouveau bones — ornate ironwork, warm lighting, and rooms that feel like they belong in a film. Guests rate it 8.8 out of 10 on Booking.com and 9.2 on Hotels.com.",
        perks: ["656ft from Moulin Rouge", "Renovated 2023", "Rated 8.8/10 Booking.com", "Art Deco & Nouveau design"],
        link: "https://expedia.com/affiliates/workhomebalance_llc/parisdeal1_2",
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

export default function ParisDealsPage() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />
        <PromoBanner />

        {/* HERO */}
        <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&h=500&fit=crop&auto=format"
            alt="Paris"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,60,0.5) 0%, rgba(0,15,60,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deal of the Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: "800", margin: "0 0 10px", textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>Paris</h1>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>Bastille Day in the City of Light — book now before prices jump.</p>
          </div>
        </div>

        {/* DEALS LIST */}
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 80px" }}>

          <p style={{ fontSize: "13px", color: "#9CA3AF", marginBottom: "24px", textAlign: "center" }}>Click any deal below to expand the full post</p>

          {DEALS.filter(d => new Date(d.publishDate) <= new Date()).map((deal, i) => (
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

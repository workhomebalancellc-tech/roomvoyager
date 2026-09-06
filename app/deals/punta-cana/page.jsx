"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

const DEALS = [
  {
    publishDate: "2026-08-28",
    number: 7,
    label: "Faranda Single 1 Adults Only vs. Hotel Casa Don Luis Cap Cana by Faranda Boutique",
    dates: "Feb 7–14",
    price1: "$156/night",
    price2: "$591/night",
    hotel1: "Faranda Single 1 Punta Cana Adults Only",
    hotel2: "Hotel Casa Don Luis Cap Cana by Faranda Boutique",
    photo1: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=120&h=120&fit=crop&auto=format",
    intro: "Boutique adults-only resort or an exclusive marina hideaway. Two wild-card Punta Cana experiences.",
    link: "/blog/punta-cana-deal-7",
  },
  {
    publishDate: "2026-08-27",
    number: 6,
    label: "Four Points by Sheraton Puntacana vs. The Westin Puntacana Resort",
    dates: "Feb 7–14",
    price1: "$137/night",
    price2: "$286/night",
    hotel1: "Four Points by Sheraton Puntacana",
    hotel2: "The Westin Puntacana Resort",
    photo1: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=120&h=120&fit=crop&auto=format",
    intro: "Same Marriott Bonvoy points. $149 apart. Entry-level Marriott resort vs. the Westin upgrade.",
    link: "/blog/punta-cana-deal-6",
  },
  {
    publishDate: "2026-08-26",
    number: 5,
    label: "Sunscape Coco Punta Cana vs. Family Selection at Grand Palladium Select Bávaro",
    dates: "Feb 7–14",
    price1: "$285/night",
    price2: "$649/night",
    hotel1: "Sunscape Coco Punta Cana — All Inclusive",
    hotel2: "Family Selection at Grand Palladium Select Bávaro — All Inclusive",
    photo1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=120&h=120&fit=crop&auto=format",
    intro: "All-inclusive beach life at two very different price points. Both 4+ stars, $364 apart.",
    link: "/blog/punta-cana-deal-5",
  },
  {
    publishDate: "2026-08-25",
    number: 4,
    label: "AC Hotel by Marriott Punta Cana vs. Barceló Bávaro Palace",
    dates: "Feb 7–14",
    price1: "$151/night",
    price2: "$272/night",
    hotel1: "AC Hotel by Marriott Punta Cana",
    hotel2: "Barceló Bávaro Palace — All Inclusive",
    photo1: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=120&h=120&fit=crop&auto=format",
    intro: "Modern Marriott resort or a massive all-inclusive palace on the beach. Two mid-range Caribbean winners.",
    link: "/blog/punta-cana-deal-4",
  },
  {
    publishDate: "2026-08-24",
    number: 3,
    label: "MANAYA Bed & Breakfast vs. Tortuga Bay Hotel",
    dates: "Feb 7–14",
    price1: "$43/night",
    price2: "$1,600/night",
    hotel1: "MANAYA Bed & Breakfast",
    hotel2: "Tortuga Bay Hotel",
    photo1: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=120&h=120&fit=crop&auto=format",
    intro: "$43 or $1,600 a night. Intimate boutique breakfast included or Punta Cana's most exclusive beachfront hotel.",
    link: "/blog/punta-cana-deal-3",
  },
  {
    publishDate: "2026-08-23",
    number: 2,
    label: "Hotel Maracas Punta Cana vs. Hotel Marimba Punta Cana",
    dates: "Feb 7–14",
    price1: "$28/night",
    price2: "$27/night",
    hotel1: "Hotel Maracas Punta Cana",
    hotel2: "Hotel Marimba Punta Cana",
    photo1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=120&h=120&fit=crop&auto=format",
    intro: "Near Cortecito Beach or Bávaro town center. Both under $30 a night — the most affordable real options in Punta Cana.",
    link: "/blog/punta-cana-deal-2",
  },
  {
    publishDate: "2026-08-22",
    number: 1,
    label: "Hotel Marimba Punta Cana vs. Four Points by Sheraton Puntacana",
    dates: "Feb 7–14",
    price1: "$27/night",
    price2: "$137/night",
    hotel1: "Hotel Marimba Punta Cana",
    hotel2: "Four Points by Sheraton Puntacana",
    photo1: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=120&h=120&fit=crop&auto=format",
    intro: "$27 or $137 a night. Local budget hotel or a solid Marriott resort. Seven nights in the Dominican Republic this February.",
    link: "/blog/punta-cana-deal-1",
  },
];

function isLive(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date() >= new Date(y, m - 1, d, 10, 0, 0);
}

export default function PuntaCanaDealsPage() {
  const liveDeals = DEALS.filter(d => isLive(d.publishDate));
  const latestDeal = liveDeals[liveDeals.length - 1];

  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* HERO */}
        <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&h=700&fit=crop&auto=format"
            alt="Punta Cana beach"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,60,0.5) 0%, rgba(0,15,60,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: "800", margin: "0 0 10px", textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>Punta Cana</h1>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>Dominican Republic in February. Seven deals from $27 a night to ultra-luxury beachfront villas.</p>
          </div>
        </div>

        {/* DEALS LIST */}
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 80px" }}>
          <p style={{ fontSize: "13px", color: "#9CA3AF", marginBottom: "32px", textAlign: "center" }}>New deal drops every week — click any card to read the full breakdown</p>

          {liveDeals.map((deal, i) => {
            const isLatest = deal === latestDeal;
            return (
              <a
                key={i}
                href={deal.link}
                style={{ textDecoration: "none", display: "block", marginBottom: "16px" }}
              >
                <div style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: `1.5px solid ${isLatest ? ORANGE : "#E5E7EB"}`,
                  boxShadow: isLatest ? "0 4px 16px rgba(255,102,0,0.15)" : "0 2px 8px rgba(0,0,0,0.06)",
                  background: "#fff",
                }}>
                  <div style={{
                    background: isLatest ? `linear-gradient(135deg, ${ORANGE} 0%, #FF8C00 100%)` : "#F9FAFB",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px", flexWrap: "wrap" }}>
                        <span style={{ background: isLatest ? "rgba(255,255,255,0.25)" : "#E5E7EB", color: isLatest ? "#fff" : "#6B7280", fontSize: "10px", fontWeight: "700", padding: "3px 8px", borderRadius: "5px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                          {isLatest ? "🔥 Latest Deal" : `Deal #${deal.number}`}
                        </span>
                        <span style={{ fontSize: "12px", color: isLatest ? "rgba(255,255,255,0.8)" : "#9CA3AF", fontWeight: "500" }}>{deal.dates}</span>
                      </div>
                      <p style={{ fontSize: "17px", fontWeight: "800", color: isLatest ? "#fff" : "#111827", margin: "0 0 4px" }}>{deal.label}</p>
                      <p style={{ fontSize: "13px", color: isLatest ? "rgba(255,255,255,0.85)" : "#6B7280", margin: 0, fontStyle: "italic" }}>{deal.intro}</p>
                    </div>
                    <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
                      <img src={deal.photo1} alt={deal.hotel1} style={{ width: "54px", height: "54px", objectFit: "cover", borderRadius: "8px", border: isLatest ? "2px solid rgba(255,255,255,0.4)" : "2px solid #E5E7EB" }} />
                      <img src={deal.photo2} alt={deal.hotel2} style={{ width: "54px", height: "54px", objectFit: "cover", borderRadius: "8px", border: isLatest ? "2px solid rgba(255,255,255,0.4)" : "2px solid #E5E7EB" }} />
                    </div>
                    <span style={{ fontSize: "20px", color: isLatest ? "#fff" : NAVY, flexShrink: 0 }}>→</span>
                  </div>
                  <div style={{ padding: "12px 20px", display: "flex", gap: "12px", borderTop: `1px solid ${isLatest ? "rgba(255,102,0,0.15)" : "#F3F4F6"}`, flexWrap: "wrap" }}>
                    <span style={{ fontSize: "13px", color: "#374151" }}>
                      <strong style={{ color: NAVY }}>{deal.hotel1}</strong> — {deal.price1}
                    </span>
                    <span style={{ color: "#D1D5DB" }}>vs.</span>
                    <span style={{ fontSize: "13px", color: "#374151" }}>
                      <strong style={{ color: NAVY }}>{deal.hotel2}</strong> — {deal.price2}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}

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

"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

const DEALS = [
  {
    publishDate: "2026-08-08",
    number: 7,
    label: "Legian Paradiso Hotel vs. Cara Cara Inn",
    dates: "Sept 6–10",
    price1: "$18/night",
    price2: "$15/night",
    hotel1: "Legian Paradiso Hotel",
    hotel2: "Cara Cara Inn",
    photo1: "/Deals/37/legian1.jpg",
    photo2: "/Deals/37/caracarainn1.jpg",
    hero: "/Deals/37/bali_destination.jpg",
    intro: "$15 or $18 in Legian. Four nights in September for under $80 total.",
    link: "/blog/bali-deal-7",
  },
  {
    publishDate: "2026-08-07",
    number: 6,
    label: "The Sebali Penida Beach Resort vs. Abisena Wellness & Resort Ubud",
    dates: "Sept 14–18",
    price1: "$151/night",
    price2: "$210/night",
    hotel1: "The Sebali Penida Beach Resort",
    hotel2: "Abisena Wellness & Resort Ubud",
    photo1: "/Deals/36/sebalipenida1.jpg",
    photo2: "/Deals/36/abisena1.jpg",
    hero: "/Deals/36/bali_destination.jpg",
    intro: "Wild Penida cliffs or Ubud jungle serenity. Both under $210 in September.",
    link: "/blog/bali-deal-6",
  },
  {
    publishDate: "2026-08-06",
    number: 5,
    label: "AYANA Resort Bali vs. The Ritz-Carlton, Bali",
    dates: "Sept 14–18",
    price1: "$347/night",
    price2: "$289/night",
    hotel1: "AYANA Resort Bali",
    hotel2: "The Ritz-Carlton, Bali",
    photo1: "/Deals/35/ayanabali1.jpg",
    photo2: "/Deals/35/ritzcarltonbali1.jpg",
    hero: "/Deals/35/bali_destination.jpg",
    intro: "AYANA's clifftop or The Ritz's pedigree. Bali's peak luxury battle.",
    link: "/blog/bali-deal-5",
  },
  {
    publishDate: "2026-08-05",
    number: 4,
    label: "Murni's House vs. Central Lovina Hotel",
    dates: "Sept 27–30",
    price1: "$15/night",
    price2: "$13/night",
    hotel1: "Murni's House",
    hotel2: "Central Lovina Hotel",
    photo1: "/Deals/34/murnishouse1.jpg",
    photo2: "/Deals/34/centrallovinahotel1.jpg",
    hero: "/Deals/34/bali_destination.jpg",
    intro: "Ubud legend or north coast discovery. Both under $15 a night.",
    link: "/blog/bali-deal-4",
  },
  {
    publishDate: "2026-08-04",
    number: 3,
    label: "Bali Mystique Hotel and Apartments vs. Kos 168 Jimbaran",
    dates: "Sept 24–27",
    price1: "$20/night",
    price2: "$10/night",
    hotel1: "Bali Mystique Hotel and Apartments",
    hotel2: "Kos 168 Jimbaran",
    photo1: "/Deals/33/balimystiquehotel1.jpg",
    photo2: "/Deals/33/kos168jimbaran1.jpg",
    hero: "/Deals/33/bali_destination.jpg",
    intro: "$10 or $20. Three nights in Jimbaran for less than a round of drinks at home.",
    link: "/blog/bali-deal-3",
  },
  {
    publishDate: "2026-08-03",
    number: 2,
    label: "MATHIS Retreat Ubud vs. Taksu Sanur Hotel",
    dates: "Sept 18–21",
    price1: "$98/night",
    price2: "$49/night",
    hotel1: "MATHIS Retreat Ubud",
    hotel2: "Taksu Sanur Hotel",
    photo1: "/Deals/32/mathisretreatubud1.jpg",
    photo2: "/Deals/32/taksusanur1.jpg",
    hero: "/Deals/32/bali_destination.jpg",
    intro: "Rice terraces or the calm coast. Ubud or Sanur — September Bali is perfect either way.",
    link: "/blog/bali-deal-2",
  },
  {
    publishDate: "2026-08-02",
    number: 1,
    label: "Dee Mansion Bali vs. POP! Hotel Kuta Beach Bali",
    dates: "Sept 6–12",
    price1: "$10/night",
    price2: "$13/night",
    hotel1: "Dee Mansion Bali",
    hotel2: "POP! Hotel Kuta Beach Bali",
    photo1: "/Deals/31/deemansionbali1.jpg",
    photo2: "/Deals/31/pophotelkutabeach1.jpg",
    hero: "/Deals/31/bali_destination.jpg",
    intro: "Six nights in Kuta under $80 total. Bali in September is the move.",
    link: "/blog/bali-deal-1",
  },
];

function isLive(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date() >= new Date(y, m - 1, d, 10, 0, 0);
}

export default function BaliDealsPage() {
  const liveDeals = DEALS.filter(d => isLive(d.publishDate));
  const latestDeal = liveDeals[liveDeals.length - 1];

  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* HERO */}
        <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <img
            src="/Deals/31/bali_destination.jpg"
            alt="Bali"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,60,0.5) 0%, rgba(0,15,60,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: "800", margin: "0 0 10px", textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>Bali</h1>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>From Kuta's surf to Ubud's jungle to Nusa Penida's cliffs. Seven deals, seven ways to do Bali right.</p>
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
                  transition: "box-shadow 0.2s",
                }}>
                  {/* Card header */}
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
                    {/* Thumbnail photos */}
                    <div style={{ display: "flex", gap: "6px", flexShrink: 0 }}>
                      <img src={deal.photo1} alt={deal.hotel1} style={{ width: "54px", height: "54px", objectFit: "cover", borderRadius: "8px", border: isLatest ? "2px solid rgba(255,255,255,0.4)" : "2px solid #E5E7EB" }} />
                      <img src={deal.photo2} alt={deal.hotel2} style={{ width: "54px", height: "54px", objectFit: "cover", borderRadius: "8px", border: isLatest ? "2px solid rgba(255,255,255,0.4)" : "2px solid #E5E7EB" }} />
                    </div>
                    <span style={{ fontSize: "20px", color: isLatest ? "#fff" : NAVY, flexShrink: 0 }}>→</span>
                  </div>

                  {/* Price strip */}
                  <div style={{ padding: "12px 20px", display: "flex", gap: "12px", borderTop: `1px solid ${isLatest ? "rgba(255,102,0,0.15)" : "#F3F4F6"}` }}>
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

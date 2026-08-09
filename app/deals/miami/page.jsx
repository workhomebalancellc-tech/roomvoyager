"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

const DEALS = [
  {
    publishDate: "2026-09-12",
    number: 7,
    label: "Miami River Inn By Renzzi vs. Up Midtown",
    dates: "Oct 13–16",
    price1: "$69/night",
    price2: "$66/night",
    hotel1: "Miami River Inn By Renzzi",
    hotel2: "Up Midtown",
    photo1: "/Deals/44/miamiriverinn1.jpg",
    photo2: "/Deals/44/upmidtown1.jpg",
    intro: "$3 apart. River character or Midtown energy. Mid-October Miami, this is the one.",
    link: "/blog/miami-deal-7",
  },
  {
    publishDate: "2026-09-05",
    number: 6,
    label: "Tucker at Palmer Dadeland Miami vs. The Elser Hotel Miami",
    dates: "Oct 28–29",
    price1: "$250/night",
    price2: "$221/night",
    hotel1: "Tucker at Palmer Dadeland Miami",
    hotel2: "The Elser Hotel Miami",
    photo1: "/Deals/43/tuckeratpalmerdadeland1.jpg",
    photo2: "/Deals/43/elserhotelmiami1.jpg",
    intro: "Dadeland ease or Brickell energy. $29 apart — this one comes down to the neighborhood.",
    link: "/blog/miami-deal-6",
  },
  {
    publishDate: "2026-08-29",
    number: 5,
    label: "Atrium Design District vs. Jefferson Hotel",
    dates: "Oct 28–31",
    price1: "$93/night",
    price2: "$72/night",
    hotel1: "Atrium Design District",
    hotel2: "Jefferson Hotel",
    photo1: "/Deals/42/atriumdesign1.jpg",
    photo2: "/Deals/42/jefferson1.jpg",
    intro: "Design District energy, Halloween weekend, and both under $100. Easy decision.",
    link: "/blog/miami-deal-5",
  },
  {
    publishDate: "2026-08-22",
    number: 4,
    label: "The Moore Miami vs. Ludge By Eco-Shared",
    dates: "Oct 22–24",
    price1: "$855/night",
    price2: "$41/night",
    hotel1: "The Moore Miami",
    hotel2: "Ludge By Eco-Shared",
    photo1: "/Deals/41/mooremiami1.jpg",
    photo2: "/Deals/41/ludgebyeco1.jpg",
    intro: "$855 or $41. One is the hotel. One is the trip. Miami in October, your math.",
    link: "/blog/miami-deal-4",
  },
  {
    publishDate: "2026-08-15",
    number: 3,
    label: "The Ritz-Carlton, South Beach vs. Alexander Hotel",
    dates: "Oct 15–18",
    price1: "$520/night",
    price2: "$390/night",
    hotel1: "The Ritz-Carlton, South Beach",
    hotel2: "Alexander Hotel",
    photo1: "/Deals/40/ritzcarltonsouthbeach1.jpg",
    photo2: "/Deals/40/alexanderhotel1.jpg",
    intro: "The name everyone knows or the one locals love. South Beach luxury, your call.",
    link: "/blog/miami-deal-3",
  },
  {
    publishDate: "2026-08-08",
    number: 2,
    label: "enVision Hotel Miami vs. Tower Hotel By At Mine Hospitality",
    dates: "Oct 4–11",
    price1: "$92/night",
    price2: "$52/night",
    hotel1: "enVision Hotel Miami",
    hotel2: "Tower Hotel By At Mine Hospitality",
    photo1: "/Deals/39/enVisionhotelmiami1.jpg",
    photo2: "/Deals/39/towerhotelbyatmine1.jpg",
    intro: "Seven nights in Miami under $100 a night. Pick your style and go.",
    link: "/blog/miami-deal-2",
  },
  {
    publishDate: "2026-08-01",
    number: 1,
    label: "The Biscayne Hotel vs. Hilton Miami Dadeland",
    dates: "Oct 1–3",
    price1: "$84/night",
    price2: "$139/night",
    hotel1: "The Biscayne Hotel",
    hotel2: "Hilton Miami Dadeland",
    photo1: "/Deals/38/biscaynehotel1.jpg",
    photo2: "/Deals/38/hiltonmiamidadeland1.jpg",
    intro: "Downtown energy or Dadeland polish. Early October Miami at its most livable.",
    link: "/blog/miami-deal-1",
  },
];

function isLive(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date() >= new Date(y, m - 1, d, 10, 0, 0);
}

export default function MiamiDealsPage() {
  const liveDeals = DEALS.filter(d => isLive(d.publishDate));
  const latestDeal = liveDeals[liveDeals.length - 1];

  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* HERO */}
        <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <img
            src="/Deals/38/miami_destination.jpg"
            alt="Miami"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,60,0.5) 0%, rgba(0,15,60,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: "800", margin: "0 0 10px", textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>Miami</h1>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>South Beach to Brickell. Seven deals, seven different ways to do it right.</p>
          </div>
        </div>

        {/* DEALS LIST */}
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "48px 24px 80px" }}>
          <p style={{ fontSize: "13px", color: "#9CA3AF", marginBottom: "32px", textAlign: "center" }}>New deal drops every week — click any card to read the full breakdown</p>

          {liveDeals.map((deal, i) => {
            const isLatest = deal === latestDeal;
            return (
              <a key={i} href={deal.link} style={{ textDecoration: "none", display: "block", marginBottom: "16px" }}>
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

                  <div style={{ padding: "12px 20px", display: "flex", gap: "12px", flexWrap: "wrap", borderTop: `1px solid ${isLatest ? "rgba(255,102,0,0.15)" : "#F3F4F6"}` }}>
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

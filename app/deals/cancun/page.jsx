"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

const DEALS = [
  {
    publishDate: "2026-10-31",
    number: 7,
    label: "Marriott Cancún Resort vs. Nizuc Resort & Spa",
    dates: "Nov 6–9",
    price1: "$525/night",
    price2: "$789/night",
    hotel1: "Marriott Cancún Resort",
    hotel2: "Nizuc Resort & Spa",
    photo1: "/Deals/51/marriottcancun1.jpg",
    photo2: "/Deals/51/nizuc1.jpg",
    hero: "/Deals/51/cancun_destination.jpg",
    intro: "The gold standard or the best-kept secret. Early November at the top of the market.",
    link: "/blog/cancun-deal-7",
  },
  {
    publishDate: "2026-10-24",
    number: 6,
    label: "Wyndham Alltra Playa del Carmen vs. Fiesta Americana Condesa Cancún",
    dates: "Nov 15–18",
    price1: "$262/night AI",
    price2: "$535/night AI",
    hotel1: "Wyndham Alltra Playa del Carmen",
    hotel2: "Fiesta Americana Condesa Cancún",
    photo1: "/Deals/50/wyndhamalltraplaya1.jpg",
    photo2: "/Deals/50/fiestaamericana1.jpg",
    hero: "/Deals/50/cancun_destination.jpg",
    intro: "5th Avenue or the Hotel Zone. Same coastline, completely different vibe.",
    link: "/blog/cancun-deal-6",
  },
  {
    publishDate: "2026-10-17",
    number: 5,
    label: "Krystal Cancún vs. Secrets The Vine Cancún",
    dates: "Nov 4–7 / Nov 26–30",
    price1: "$208/night",
    price2: "$535/night AI",
    hotel1: "Krystal Cancún",
    hotel2: "Secrets The Vine Cancún",
    photo1: "/Deals/49/krystal1.jpg",
    photo2: "/Deals/49/secretsthevine1.jpg",
    hero: "/Deals/49/cancun_destination.jpg",
    intro: "Classic Hotel Zone freedom or modern adults-only luxury. November has room for both.",
    link: "/blog/cancun-deal-5",
  },
  {
    publishDate: "2026-10-10",
    number: 4,
    label: "Iberostar Cancún vs. Live Aqua Beach Resort",
    dates: "Nov 26–30",
    price1: "$384/night AI",
    price2: "$766/night AI",
    hotel1: "Iberostar Cancún",
    hotel2: "Live Aqua Beach Resort",
    photo1: "/Deals/48/iberostarselectioncancun1.jpg",
    photo2: "/Deals/48/liveaquacancun1.jpg",
    hero: "/Deals/48/cancun_destination.jpg",
    intro: "Thanksgiving weekend done right — whether you want reliable or effortlessly cool.",
    link: "/blog/cancun-deal-4",
  },
  {
    publishDate: "2026-10-03",
    number: 3,
    label: "Hard Rock Hotel Cancún vs. Le Blanc Spa Resort",
    dates: "Dec 18–21",
    price1: "$548/night AI",
    price2: "$1,085/night AI",
    hotel1: "Hard Rock Hotel Cancún",
    hotel2: "Le Blanc Spa Resort",
    photo1: "/Deals/47/hardrockhotelcancun1.jpg",
    photo2: "/Deals/47/leblancsparesortcancun1.jpg",
    hero: "/Deals/47/cancun_destination.jpg",
    intro: "One plays music till midnight. One has a butler. Pre-Christmas Cancún, your call.",
    link: "/blog/cancun-deal-3",
  },
  {
    publishDate: "2026-09-26",
    number: 2,
    label: "Park Royal Beach Cancún vs. Moon Palace Cancún",
    dates: "Nov 12–14",
    price1: "$276/night AI",
    price2: "$493/night AI",
    hotel1: "Park Royal Beach Cancún",
    hotel2: "Moon Palace Cancún",
    photo1: "/Deals/46/parkroyalbeachcancun1.jpg",
    photo2: "/Deals/46/moonpalacecancun1.jpg",
    hero: "/Deals/46/cancun_destination.jpg",
    intro: "Two nights, full all-inclusive, the whole family covered. Cancún in November hits different.",
    link: "/blog/cancun-deal-2",
  },
  {
    publishDate: "2026-09-19",
    number: 1,
    label: "Aloft Cancún vs. Hyatt Ziva Cancún",
    dates: "Nov 22–28",
    price1: "$113/night",
    price2: "$1,319/night",
    hotel1: "Aloft Cancún",
    hotel2: "Hyatt Ziva Cancún",
    photo1: "/Deals/45/aloftbymarriottcancun1.jpg",
    photo2: "/Deals/45/hyattzivacancun1.jpg",
    hero: "/Deals/45/cancun_destination.jpg",
    intro: "$113 or $1,319 a night. One is a steal. One is a flex. Both are on the beach.",
    link: "/blog/cancun-deal-1",
  },
];

function isLive(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date() >= new Date(y, m - 1, d, 10, 0, 0);
}

export default function CancunDealsPage() {
  const liveDeals = DEALS.filter(d => isLive(d.publishDate));
  const latestDeal = liveDeals[liveDeals.length - 1]; // lowest number = first published = latest to surface

  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* HERO */}
        <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <img
            src="/Deals/45/cancun_destination.jpg"
            alt="Cancún"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,60,0.5) 0%, rgba(0,15,60,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: "800", margin: "0 0 10px", textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>Cancún</h1>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>The Hotel Zone's best beaches. Seven deals, seven different ways to do it right.</p>
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

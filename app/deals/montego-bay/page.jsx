"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

const DEALS = [
  {
    publishDate: "2026-09-05",
    number: 7,
    label: "Zoetry Montego Bay vs. Round Hill Hotel & Villas",
    dates: "Jan 14–18",
    price1: "$329/night",
    price2: "$459/night",
    hotel1: "Zoetry Montego Bay",
    hotel2: "Round Hill Hotel & Villas",
    photo1: "https://images.unsplash.com/photo-1551882547-ff40c63fe2fa?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=120&h=120&fit=crop&auto=format",
    intro: "Artful boutique all-inclusive or Jamaica's most legendary private estate. Four nights in January.",
    link: "/blog/montego-bay-deal-7",
  },
  {
    publishDate: "2026-09-04",
    number: 6,
    label: "Sandals Montego Bay vs. Sandals Royal Caribbean",
    dates: "Jan 22–28",
    price1: "$359/night",
    price2: "$489/night",
    hotel1: "Sandals Montego Bay",
    hotel2: "Sandals Royal Caribbean",
    photo1: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=120&h=120&fit=crop&auto=format",
    intro: "Same brand, two very different resorts. Original beachfront or over-water bungalows with butler. Six nights.",
    link: "/blog/montego-bay-deal-6",
  },
  {
    publishDate: "2026-09-03",
    number: 5,
    label: "Iberostar Rose Hall Beach vs. Secrets Wild Orchid",
    dates: "Jan 7–11",
    price1: "$249/night",
    price2: "$389/night",
    hotel1: "Iberostar Rose Hall Beach",
    hotel2: "Secrets Wild Orchid Montego Bay",
    photo1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=120&h=120&fit=crop&auto=format",
    intro: "5-star all-inclusive on a stunning beach or adults-only luxury with swim-up suites. Four nights in January.",
    link: "/blog/montego-bay-deal-5",
  },
  {
    publishDate: "2026-09-02",
    number: 4,
    label: "Hilton Rose Hall Resort & Spa vs. Hyatt Ziva Rose Hall",
    dates: "Jan 18–23",
    price1: "$229/night",
    price2: "$279/night",
    hotel1: "Hilton Rose Hall Resort & Spa",
    hotel2: "Hyatt Ziva Rose Hall",
    photo1: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=120&h=120&fit=crop&auto=format",
    intro: "Rose Hall, two ways. Full resort with waterpark or premium all-inclusive with cliff-top views. Five nights.",
    link: "/blog/montego-bay-deal-4",
  },
  {
    publishDate: "2026-09-01",
    number: 3,
    label: "S Hotel Montego Bay vs. Half Moon Resort",
    dates: "Jan 16–19",
    price1: "$185/night",
    price2: "$449/night",
    hotel1: "S Hotel Montego Bay",
    hotel2: "Half Moon Resort",
    photo1: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=120&h=120&fit=crop&auto=format",
    intro: "$185 boutique with a sky deck or Jamaica's legendary 400-acre estate. Three nights in January.",
    link: "/blog/montego-bay-deal-3",
  },
  {
    publishDate: "2026-08-31",
    number: 2,
    label: "Wexford Court Hotel vs. SeaGarden Beach Resort",
    dates: "Jan 9–13",
    price1: "$72/night",
    price2: "$89/night",
    hotel1: "Wexford Court Hotel",
    hotel2: "SeaGarden Beach Resort",
    photo1: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1551882547-ff40c63fe2fa?w=120&h=120&fit=crop&auto=format",
    intro: "Hip Strip energy or beachfront all-inclusive. Both under $90 a night. Four nights in January.",
    link: "/blog/montego-bay-deal-2",
  },
  {
    publishDate: "2026-08-30",
    number: 1,
    label: "Tropical Court Hotel vs. Coyaba Beach Resort",
    dates: "Jan 4–11",
    price1: "$68/night",
    price2: "$253/night",
    hotel1: "Tropical Court Hotel",
    hotel2: "Coyaba Beach Resort",
    photo1: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=120&h=120&fit=crop&auto=format",
    intro: "$68 budget base or $253 boutique beachfront in Rose Hall. Seven nights in January — $1,295 between them.",
    link: "/blog/montego-bay-deal-1",
  },
];

function isLive(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date() >= new Date(y, m - 1, d, 10, 0, 0);
}

export default function MontegoBayDealsPage() {
  const liveDeals = DEALS.filter(d => isLive(d.publishDate));
  const latestDeal = liveDeals[liveDeals.length - 1];

  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* HERO */}
        <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=1600&h=700&fit=crop&auto=format"
            alt="Montego Bay Jamaica"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 60%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,60,0.5) 0%, rgba(0,15,60,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: "800", margin: "0 0 10px", textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>Montego Bay</h1>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>Jamaica in January. Seven deals from $72 a night to over-water Sandals luxury.</p>
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

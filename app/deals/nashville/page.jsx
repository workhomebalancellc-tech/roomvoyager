"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

const DEALS = [
  {
    publishDate: "2026-09-04",
    number: 7,
    label: "The Gilmore AvantStay 12 South vs. Thompson Nashville by Hyatt",
    dates: "Feb 7–14",
    price1: "$268/night",
    price2: "$333/night",
    hotel1: "The Gilmore AvantStay 12 South",
    hotel2: "Thompson Nashville by Hyatt",
    photo1: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=120&h=120&fit=crop&auto=format",
    intro: "12 South neighborhood boutique or a rooftop-bar design hotel. Two wild-card ways to do Nashville.",
    link: "/blog/nashville-deal-7",
  },
  {
    publishDate: "2026-09-03",
    number: 6,
    label: "Hyatt House Nashville Downtown vs. Grand Hyatt Nashville",
    dates: "Feb 7–14",
    price1: "$161/night",
    price2: "$383/night",
    hotel1: "Hyatt House Nashville Downtown",
    hotel2: "Grand Hyatt Nashville",
    photo1: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=120&h=120&fit=crop&auto=format",
    intro: "Same loyalty points. $222 apart. Extended-stay comfort vs. flagship grand hotel.",
    link: "/blog/nashville-deal-6",
  },
  {
    publishDate: "2026-09-02",
    number: 5,
    label: "Loews Nashville Hotel vs. Omni Nashville Hotel",
    dates: "Feb 7–14",
    price1: "$197/night",
    price2: "$427/night",
    hotel1: "Loews Nashville Hotel",
    hotel2: "Omni Nashville Hotel",
    photo1: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=120&h=120&fit=crop&auto=format",
    intro: "Vanderbilt luxury or Broadway-connected downtown icon. Two top-tier Nashville hotels, $230 apart.",
    link: "/blog/nashville-deal-5",
  },
  {
    publishDate: "2026-09-01",
    number: 4,
    label: "Bode Nashville vs. Margaritaville Nashville",
    dates: "Feb 7–14",
    price1: "$167/night",
    price2: "$260/night",
    hotel1: "Bode Nashville",
    hotel2: "Margaritaville Nashville",
    photo1: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=120&h=120&fit=crop&auto=format",
    intro: "Design-forward boutique or party-ready resort. Two strong mid-range picks for February in Music City.",
    link: "/blog/nashville-deal-4",
  },
  {
    publishDate: "2026-08-31",
    number: 3,
    label: "Sobro Guest House AvantStay vs. Four Seasons Nashville",
    dates: "Feb 7–14",
    price1: "$147/night",
    price2: "$709/night",
    hotel1: "Sobro Guest House AvantStay",
    hotel2: "Four Seasons Nashville",
    photo1: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=120&h=120&fit=crop&auto=format",
    intro: "$147 or $709. Neighborhood boutique vs. Nashville's only true 5-star hotel.",
    link: "/blog/nashville-deal-3",
  },
  {
    publishDate: "2026-08-30",
    number: 2,
    label: "Baymont by Wyndham Nashville Donelson vs. Mint House at Marathon Village",
    dates: "Feb 7–14",
    price1: "$71/night",
    price2: "$79/night",
    hotel1: "Baymont by Wyndham Nashville Donelson",
    hotel2: "Mint House at Marathon Village",
    photo1: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=120&h=120&fit=crop&auto=format",
    intro: "Airport-area budget or a rooftop-pool urban apartment-style stay — both under $80 a night.",
    link: "/blog/nashville-deal-2",
  },
  {
    publishDate: "2026-08-29",
    number: 1,
    label: "Fiddler's Inn vs. Hilton Garden Inn Nashville Vanderbilt",
    dates: "Feb 7–14",
    price1: "$65/night",
    price2: "$131/night",
    hotel1: "Fiddler's Inn",
    hotel2: "Hilton Garden Inn Nashville Vanderbilt",
    photo1: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=120&h=120&fit=crop&auto=format",
    intro: "$65 or $131 a night. Budget roadside motel or a solid Hilton near Vanderbilt. Seven nights in February.",
    link: "/blog/nashville-deal-1",
  },
];

function isLive(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date() >= new Date(y, m - 1, d, 10, 0, 0);
}

export default function NashvilleDealsPage() {
  const liveDeals = DEALS.filter(d => isLive(d.publishDate));
  const latestDeal = liveDeals[liveDeals.length - 1];

  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* HERO */}
        <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1545459720-aac8509eb7e8?w=1600&h=700&fit=crop&auto=format"
            alt="Nashville skyline"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,60,0.5) 0%, rgba(0,15,60,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: "800", margin: "0 0 10px", textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>Nashville</h1>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>Music City in February. Seven deals from $65 a night to Broadway-adjacent luxury.</p>
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

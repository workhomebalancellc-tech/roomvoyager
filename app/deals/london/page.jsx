"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

const DEALS = [
  {
    publishDate: "2026-09-18",
    number: 7,
    label: "Point A Kensington Olympia vs. Native Fulham Broadway",
    dates: "Mar 27 – Apr 3",
    price1: "$109/night",
    price2: "$138/night",
    hotel1: "Point A Kensington Olympia",
    hotel2: "Native Fulham Broadway",
    photo1: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=120&h=120&fit=crop&auto=format",
    intro: "Two West London picks priced within range — Kensington compact or a brand-new Fulham flat at exceptional score.",
    link: "/blog/london-deal-7",
  },
  {
    publishDate: "2026-09-18",
    number: 6,
    label: "EasyHotel Paddington vs. Hyatt Regency Albert Embankment",
    dates: "Mar 27 – Mar 29",
    price1: "$89/night",
    price2: "$200/night",
    hotel1: "EasyHotel Paddington",
    hotel2: "Hyatt Regency London Albert Embankment",
    photo1: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=120&h=120&fit=crop&auto=format",
    intro: "$89 or $200 for a London weekend. No-frills pod or rooftop Thames views — two nights, $222 apart.",
    link: "/blog/london-deal-6",
  },
  {
    publishDate: "2026-09-18",
    number: 5,
    label: "Royal National Hotel vs. Ruby Zoe Hotel London by IHG",
    dates: "Mar 27 – Mar 30",
    price1: "$119/night",
    price2: "$141/night",
    hotel1: "Royal National Hotel",
    hotel2: "Ruby Zoe Hotel London by IHG",
    photo1: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=120&h=120&fit=crop&auto=format",
    intro: "Central London value or an exceptional IHG boutique? Three nights, $66 apart total.",
    link: "/blog/london-deal-5",
  },
  {
    publishDate: "2026-09-18",
    number: 4,
    label: "Bob W London Kensington vs. The Cura Hotel Kensington",
    dates: "Mar 27 – Mar 31",
    price1: "$106/night",
    price2: "$171/night",
    hotel1: "Bob W London Kensington",
    hotel2: "The Cura Hotel Kensington (Tribute Portfolio)",
    photo1: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=120&h=120&fit=crop&auto=format",
    intro: "Kensington apartment-style or Marriott Tribute boutique with Italian dining? Four nights, same neighborhood.",
    link: "/blog/london-deal-4",
  },
  {
    publishDate: "2026-09-18",
    number: 3,
    label: "Otherwander Soho Pod Hotel vs. Moxy London Piccadilly Circus",
    dates: "Mar 27 – Apr 1",
    price1: "$118/night",
    price2: "$147/night",
    hotel1: "Otherwander Soho Pod Hotel (Adults Only)",
    hotel2: "Moxy London Piccadilly Circus",
    photo1: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=120&h=120&fit=crop&auto=format",
    intro: "Soho pod boutique or Piccadilly Circus Moxy? Five West End nights — both under $150 a night.",
    link: "/blog/london-deal-3",
  },
  {
    publishDate: "2026-09-18",
    number: 2,
    label: "The Tower Hotel by Thistle vs. citizenM Tower of London",
    dates: "Mar 27 – Apr 3",
    price1: "$149/night",
    price2: "$185/night",
    hotel1: "The Tower Hotel, by Thistle",
    hotel2: "citizenM Tower of London",
    photo1: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=120&h=120&fit=crop&auto=format",
    intro: "Tower Bridge is the backdrop for both. Classic riverside hotel or a rooftop-bar smart hotel — seven nights, $36 apart.",
    link: "/blog/london-deal-2",
  },
  {
    publishDate: "2026-09-18",
    number: 1,
    label: "Alhambra Hotel vs. Tavistock Hotel",
    dates: "Mar 27 – Apr 3",
    price1: "$82/night",
    price2: "$119/night",
    hotel1: "Alhambra Hotel",
    hotel2: "Tavistock Hotel",
    photo1: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=120&h=120&fit=crop&auto=format",
    intro: "$82 or $119. Two Bloomsbury classics for a full week in London. The cheapest deal in this entire set.",
    link: "/blog/london-deal-1",
  },
];

function isLive(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date() >= new Date(y, m - 1, d, 10, 0, 0);
}

export default function LondonDealsPage() {
  const liveDeals = DEALS.filter(d => isLive(d.publishDate));
  const latestDeal = liveDeals[liveDeals.length - 1];

  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* HERO */}
        <div style={{ position: "relative", height: "320px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1600&h=700&fit=crop&auto=format"
            alt="London skyline"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,60,0.5) 0%, rgba(0,15,60,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🇬🇧 Deals of the Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: "800", margin: "0 0 10px", textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>London</h1>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>Spring in the city. Seven deals from $82 a night to Thames-view luxury.</p>
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
                  </div>
                  <div style={{ padding: "12px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
                    <span style={{ fontSize: "13px", color: "#374151" }}><strong style={{ color: "#111827" }}>{deal.price1}</strong> · {deal.hotel1}</span>
                    <span style={{ fontSize: "12px", color: NAVY, fontWeight: "700" }}>Read full breakdown →</span>
                  </div>
                </div>
              </a>
            );
          })}

          <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #0052CC 100%)`, borderRadius: "16px", padding: "28px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", flexWrap: "wrap", marginTop: "40px" }}>
            <div>
              <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>🏆 RoomVoyager Rewards</p>
              <p style={{ color: "#fff", fontWeight: "800", fontSize: "17px", margin: "0 0 4px" }}>Every London booking earns cash back</p>
              <p style={{ color: "#BFDBFE", fontSize: "13px", margin: 0 }}>Redeem via Zelle, Cash App, or Venmo · No expiration</p>
            </div>
            <a href="/rewards" style={{ background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none", whiteSpace: "nowrap" }}>View Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}

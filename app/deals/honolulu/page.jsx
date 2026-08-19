"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

const DEALS = [
  {
    publishDate: "2026-08-29",
    number: 7,
    label: "The Surfjack Hotel & Swim Club vs. The Laylow, Autograph Collection",
    dates: "Dec 26–31",
    price1: "$187/night",
    price2: "$299/night",
    hotel1: "The Surfjack Hotel & Swim Club",
    hotel2: "The Laylow, Autograph Collection",
    photo1: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=120&h=120&fit=crop&auto=format",
    intro: "Surf culture or retro Hawaii. New Year's Eve in Waikiki, two very different ways.",
    link: "/blog/honolulu-deal-7",
  },
  {
    publishDate: "2026-08-28",
    number: 6,
    label: "Courtyard by Marriott Waikiki Beach vs. Waikiki Beach Marriott Resort & Spa",
    dates: "Dec 12–16",
    price1: "$275/night",
    price2: "$363/night",
    hotel1: "Courtyard by Marriott Waikiki",
    hotel2: "Waikiki Beach Marriott Resort & Spa",
    photo1: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=120&h=120&fit=crop&auto=format",
    intro: "Same brand, same loyalty points. $140 apart. Courtyard smart money vs. flagship beachfront.",
    link: "/blog/honolulu-deal-6",
  },
  {
    publishDate: "2026-08-27",
    number: 5,
    label: "Hilton Hawaiian Village vs. Moana Surfrider, A Westin Resort",
    dates: "Dec 22–28",
    price1: "$742/night",
    price2: "$977/night",
    hotel1: "Hilton Hawaiian Village",
    hotel2: "Moana Surfrider, A Westin Resort",
    photo1: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=120&h=120&fit=crop&auto=format",
    intro: "Waikiki's largest resort or its most legendary hotel. Christmas week in Hawaii.",
    link: "/blog/honolulu-deal-5",
  },
  {
    publishDate: "2026-08-26",
    number: 4,
    label: "Sheraton Princess Kaiulani vs. Hyatt Regency Waikiki Beach Resort",
    dates: "Dec 6–9",
    price1: "$243/night",
    price2: "$484/night",
    hotel1: "Sheraton Princess Kaiulani",
    hotel2: "Hyatt Regency Waikiki Beach Resort",
    photo1: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=120&h=120&fit=crop&auto=format",
    intro: "Waikiki icon or twin-tower beachfront. Two mid-range heavyweights in early December.",
    link: "/blog/honolulu-deal-4",
  },
  {
    publishDate: "2026-08-25",
    number: 3,
    label: "Vive Hotel Waikiki vs. Halekulani",
    dates: "Dec 17–21",
    price1: "$139/night",
    price2: "$529/night",
    hotel1: "Vive Hotel Waikiki",
    hotel2: "Halekulani",
    photo1: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=120&h=120&fit=crop&auto=format",
    intro: "$139 or $529. Boutique smart money or Honolulu's most legendary 5-star.",
    link: "/blog/honolulu-deal-3",
  },
  {
    publishDate: "2026-08-24",
    number: 2,
    label: "Kuhio Banyan Club vs. Pagoda Hotel",
    dates: "Dec 10–13",
    price1: "$141/night",
    price2: "$79/night",
    hotel1: "Kuhio Banyan Club",
    hotel2: "Pagoda Hotel",
    photo1: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=120&h=120&fit=crop&auto=format",
    intro: "Central Waikiki near the beach or local downtown life. Three nights in December.",
    link: "/blog/honolulu-deal-2",
  },
  {
    publishDate: "2026-08-23",
    number: 1,
    label: "Bposhtels Waikiki Retreat vs. Queen Kapiolani Hotel",
    dates: "Dec 4–11",
    price1: "$89/night",
    price2: "$129/night",
    hotel1: "Bposhtels Waikiki Retreat",
    hotel2: "Queen Kapiolani Hotel",
    photo1: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=120&h=120&fit=crop&auto=format",
    photo2: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=120&h=120&fit=crop&auto=format",
    intro: "$89 or $129 a night. Budget Waikiki with a pool or Diamond Head views. Seven nights in December.",
    link: "/blog/honolulu-deal-1",
  },
];

function isLive(dateStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date() >= new Date(y, m - 1, d, 10, 0, 0);
}

export default function HonoluluDealsPage() {
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
            alt="Honolulu Waikiki"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,20,60,0.5) 0%, rgba(0,15,60,0.88) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 46px)", fontWeight: "800", margin: "0 0 10px", textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>Honolulu</h1>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: 0 }}>Waikiki in December. Seven deals from $65 a night to Christmas week luxury.</p>
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

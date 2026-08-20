"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MontegoBayDeal5Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe2fa?w=1600&h=700&fit=crop&auto=format" alt="5-star resort pool Jamaica" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Montego Bay</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Iberostar or Secrets. Both 5-Star. Both January.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Four nights in Montego Bay at the top of the all-inclusive game.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            January 7th through the 11th — four nights in Montego Bay at the upper end of the all-inclusive market. This deal isn't about finding a bargain. It's about choosing between two of the finest resort experiences in the Caribbean, both with 5-star credentials, both delivering the best of what Jamaica has to offer at the resort level.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Iberostar Rose Hall Beach at $249 a night is the established all-inclusive favorite: a sprawling beachfront resort in the Rose Hall corridor, consistently rated among the top all-inclusive properties in Jamaica, with beautiful grounds, multiple pools, and beach access that makes it easy to understand why Iberostar has become one of the most trusted names in Caribbean resort travel. Secrets Wild Orchid Montego Bay at $389 a night is the adults-only upgrade — a luxury all-inclusive that belongs to the AMR Collection, with swim-up rooms, a quieter adults-only atmosphere, and a level of service and cuisine that justifies the premium. Four nights. $560 separates them.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $249 or $389. Iberostar's five-star beach or Secrets' adults-only luxury — January in Jamaica at the top.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&h=500&fit=crop&auto=format" alt="Iberostar Rose Hall Beach" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Iberostar Rose Hall Beach — Five Stars on the Sand at $249</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$249 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Iberostar Rose Hall Beach has consistently earned its reputation as one of the best all-inclusive resorts in Jamaica — not through marketing, but through execution. The beach is wide and beautiful, the pools are large and well-maintained, the food quality exceeds most all-inclusive expectations, and the grounds are immaculately kept. At $249 a night, four nights is $996 — just under $1,000 for four nights at a 5-star all-inclusive in peak January Jamaica. That is a strong deal.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Iberostar operates across the Rose Hall corridor as a cluster of properties, which means guests get access to a wider range of dining and amenities than a single resort can typically offer. The beach location in Rose Hall is one of the best in the area — calm, clear, and protected. January weather is ideal: dry season, warm water, and the Blue Mountains visible on clear afternoons.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want 5-star all-inclusive on a beautiful beach — Iberostar quality, Rose Hall location, at $249 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb5_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Iberostar Rose Hall Beach →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&h=500&fit=crop&auto=format" alt="Secrets Wild Orchid Montego Bay" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Secrets Wild Orchid Montego Bay — Adults-Only Luxury at $389</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$389 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Secrets Wild Orchid operates on a different frequency than most all-inclusives. Adults-only, part of the AMR Collection, it delivers the quiet luxury of a high-end couples or solo retreat in a resort that takes cuisine, service, and design seriously. Swim-up junior suites put you directly in the water. Multiple specialty restaurants — French, Italian, Tex-Mex, teppanyaki — step the dining program well beyond buffet territory. The atmosphere is unhurried and sophisticated in a way that crowded family resorts rarely manage. At $389 a night, four nights is $1,556 all-inclusive.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Secrets Wild Orchid is the right answer if the January trip is a honeymoon, anniversary, or any occasion where quiet luxury and a genuinely adult atmosphere matter more than resort scale. January in Jamaica is peak romantic season — dry weather, warm nights, and the kind of sunsets that don't need any enhancement.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Couples and adults who want quiet luxury — swim-up suites, specialty dining, and the adults-only atmosphere of the AMR Collection at $389 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb5_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Secrets Wild Orchid Montego Bay →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Iberostar Rose Hall Beach</strong> for 5-star all-inclusive on a stunning beach at $249 a night — four nights under $1,000 for one of Jamaica's most consistently rated resorts.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Secrets Wild Orchid Montego Bay</strong> for adults-only luxury with swim-up suites and specialty dining at $389 a night — the premium pick for couples in January.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb5_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Iberostar Rose Hall Beach →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb5_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Secrets Wild Orchid →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>January in Montego Bay. Five stars either way. 🇯🇲</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}

"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MontegoBayDeal3Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&h=700&fit=crop&auto=format" alt="Luxury resort pool Jamaica" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Montego Bay</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              $185 or $449. Boutique Cool vs. Jamaica Legend.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Three nights in January. Two completely different versions of Montego Bay.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            January 16th through the 19th — three nights in Montego Bay for a deal that skips the middle and presents the full range: a boutique hotel doing everything right, and a legendary resort that helped put Jamaica luxury on the map. This is not about price proximity. S Hotel and Half Moon are two different philosophies about what a Jamaica stay should feel like.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            S Hotel Montego Bay at $185 a night is the hip, design-forward boutique option: a sky deck pool with panoramic views, thoughtful interiors that celebrate Jamaican culture, reef access for snorkeling right off the property, and the kind of energy that belongs to a newer generation of Caribbean hospitality. Half Moon Resort at $449 a night is the classic: a 400-acre estate on a private beach, a PGA golf course, equestrian center, multiple pools, and the deep heritage of a resort that has hosted royalty, celebrities, and presidents since the 1950s. Three nights in January. Two very different answers to what Jamaica means.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $185 or $449. New Jamaica energy or classic Jamaica grandeur — three nights in January, no wrong answer.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=900&h=500&fit=crop&auto=format" alt="S Hotel Montego Bay" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>S Hotel Montego Bay — Boutique with a Sky Deck at $185</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$185 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              S Hotel Montego Bay is the boutique that changed what budget-conscious luxury looks like in Jamaica. A 4-star property with a sky deck pool offering panoramic bay views, quick reef access for snorkeling, themed cultural nights celebrating Jamaican music and cuisine, and interiors that feel genuinely designed rather than copied from a resort chain template. At $185 a night, three nights is $555 — a full boutique Jamaica experience for under $600.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The S Hotel is centrally located in Montego Bay, meaning you get easy access to the city while sleeping in something that doesn't feel like a city hotel. The sky deck pool is the standout — sunset views over the bay from a rooftop in Jamaica, at a boutique price, in peak January season. It delivers.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Design-minded travelers who want boutique, cultural, and curated at $185 a night — sky deck pool, reef access, and a genuine sense of Jamaican identity.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb3_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book S Hotel Montego Bay →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&h=500&fit=crop&auto=format" alt="Half Moon Resort Montego Bay" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Half Moon Resort — Jamaica's Grand Estate at $449</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$449 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Half Moon Resort is the Jamaica that travel writers have been writing about for 70 years. A 400-acre private estate on a crescent-shaped beach east of Montego Bay, with a Robert Trent Jones Sr. golf course, an equestrian center, multiple pools, a dolphin lagoon, a full-service spa, and the kind of gracious, unhurried service that defines classic Caribbean luxury. At $449 a night, three nights is $1,347 — not a budget decision, but an investment in a resort that has earned its reputation across seven decades.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              January at Half Moon is prime. The dry season, the warm water, the estate grounds in full color — this is the resort at its best. If there is a once-in-a-decade Jamaica trip in your future, Half Moon is the answer.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want Jamaica's grandest estate experience — 400-acre private beach, golf, equestrian, and 5-star service at $449 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb3_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Half Moon Resort →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>S Hotel Montego Bay</strong> for boutique that punches well above its price — sky deck pool, reef access, cultural programming, and genuine design at $185 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Half Moon Resort</strong> for the Jamaica that legends are made of — 70-year heritage, 400-acre private estate, 5-star everything, at $449 a night in peak January.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb3_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>S Hotel Montego Bay →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb3_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Half Moon Resort →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>January in Montego Bay. Boutique or legendary — Jamaica delivers either way. 🇯🇲</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}

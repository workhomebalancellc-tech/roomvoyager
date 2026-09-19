"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function LondonDeal3Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1481833761820-0509d3217039?w=1600&h=700&fit=crop&auto=format"
            alt="London West End Soho"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · London</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Otherwander Soho Pod vs. Moxy Piccadilly.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $118 or $147 a night. Five West End nights — both under $150, both steps from everything.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Five nights in the West End is London at its most concentrated. Soho and Piccadilly Circus are walking distance from the National Gallery, Covent Garden, the theatres of Shaftesbury Avenue, and more restaurants per square mile than almost anywhere in the city. From March 27 to April 1, the spring crowds are building but haven't peaked — and the evening energy on Carnaby Street and Old Compton Street is exactly what London should feel like.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Both hotels in this deal come in under $150 a night and put you in the heart of the West End. Otherwander Soho Pod Hotel is an adults-only boutique pod hotel in Soho at $118 — on sale, with a 9.0 Wonderful rating. Moxy London Piccadilly Circus at $147 is the Marriott lifestyle brand fully realized: a bar that doesn't close early, Bonvoy points, and a location that is literally Piccadilly Circus. Five nights, $145 between them.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Soho boutique pod or Piccadilly Circus Moxy. Five nights, both under $150, zero bad options.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800&h=450&fit=crop&auto=format"
              alt="Otherwander Soho Pod Hotel London"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Otherwander Soho Pod Hotel — Boutique Soho at $118 a Night</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$118 / night · Adults Only</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Otherwander is a boutique pod hotel concept built for adults who want a curated, design-forward Soho experience without paying boutique hotel prices. At $118 a night — on sale, $110 off regular rate — it's rated 9.0 Wonderful across 495 reviews. The pod format maximizes use of the space: everything you need, nothing you don't, and a price that leaves room in the budget for the exceptional restaurants and bars that make Soho what it is. Adults-only means a quieter, more considered atmosphere.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $118 a night for five nights in Soho, this is genuinely one of the best value propositions in central London. Step outside and you're in the middle of one of the world's great urban neighborhoods. Carnaby Street, Dean Street, the Berwick Street market — Soho's texture is unmatched and it's all walkable from your door.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Adults who want a design-forward Soho base, no children, and the best value-per-night in the West End for this deal.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/london3_1" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Otherwander Soho →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=450&fit=crop&auto=format"
              alt="Moxy London Piccadilly Circus"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Moxy London Piccadilly Circus — Marriott Energy at $147 a Night</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$147 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Moxy London Piccadilly Circus is the Marriott lifestyle brand doing exactly what it was designed to do: a buzzy, social hotel in the best possible West End location. Rated 8.2 Very Good across 512 reviews, fully refundable, with 5 rooms left at this price. The Bar Moxy is the kind of lobby bar that actually draws people in — cocktails, communal tables, and an energy that makes it feel like a social hub rather than a hotel lobby. Bonvoy points on every night, steps from Piccadilly Circus, Regent Street, and the Shaftesbury Avenue theatres.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $147 a night — $29 more than Otherwander — Moxy adds Bonvoy points, a lively social bar, and the Marriott infrastructure. For five nights in the West End, the refundable booking and points earning make it a strong choice for Bonvoy members or anyone who values the social hotel atmosphere.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Bonvoy members, social travelers, and anyone who wants a lively Piccadilly Circus address with Marriott reliability.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/london3_2" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Moxy London Piccadilly Circus →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Otherwander Soho Pod Hotel</strong> if you want the best per-night value in the West End, a Soho address, and an adults-only boutique feel. At $118, there's no better value in this area.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Moxy London Piccadilly Circus</strong> if you want Bonvoy points, a social bar scene, a Piccadilly Circus address, and refundable flexibility. At $29 more per night, it's a great option for Marriott loyalists.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/london3_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Otherwander Soho →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/london3_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Moxy Piccadilly Circus →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Five West End nights. Under $150. This is how you do London on a real budget. 🇬🇧</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}

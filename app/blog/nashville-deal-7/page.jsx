"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function NashvilleDeal7Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1567683878386-83dc92a7da3c?w=1600&h=700&fit=crop&auto=format"
            alt="Nashville 12 South neighborhood"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Nashville</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              12 South Boutique vs. Thompson Nashville.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Residential neighborhood soul or rooftop-bar design hotel. Two wild-card ways to do Nashville.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Nashville has a personality that extends well beyond Broadway's neon strip — and the city's most interesting hotels often reflect that. This week's wild card deal pairs a boutique guest house in the beloved 12 South neighborhood with one of downtown's most design-forward hotels. Both appeal to travelers who want something a step above the generic, but they deliver completely different Nashville experiences.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            The Gilmore AvantStay 12 South comes in at $268 a night — a residential boutique property in the 12 South neighborhood with a remarkable 9.8 guest rating, putting it among the highest-rated stays in all of Nashville. Thompson Nashville by Hyatt lands at $333 a night — a sleek, design-driven hotel in the Gulch area with an acclaimed rooftop bar, a 9.4 guest rating, and a sense of place that's distinctly Nashville but thoroughly cosmopolitan. The $65 gap per night is the smallest decision you'll make comparing these two — the real choice is about neighborhood and vibe.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            12 South's coffee shops and boutiques or the Gulch's rooftop energy. Nashville's two coolest neighborhoods, one deal.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=450&fit=crop&auto=format"
              alt="The Gilmore AvantStay 12 South Nashville"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                The Gilmore AvantStay 12 South — Nashville's Best Neighborhood Boutique
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$268 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The 12 South neighborhood is one of Nashville's most beloved areas — a tree-lined residential corridor filled with exceptional independent restaurants, craft coffee shops, boutique clothing stores, and the kind of walkable street life that feels authentically local rather than tourist-facing. The Gilmore AvantStay puts you right in the middle of it, and the 9.8 guest rating is extraordinary — one of the highest in all of Nashville and a genuine reflection of how much guests love this property.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $268 a night, The Gilmore offers a residential Nashville experience that you simply can't replicate in a downtown tower. February mornings walking to Frothy Monkey for coffee, evenings at The Pharmacy Burger Parlor & Beer Garden — this is Nashville for people who want to live in the city rather than observe it. For a seven-night stay, this level of neighborhood immersion is hard to put a price on.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want to experience Nashville like a local — 12 South's walkable neighborhood life, a 9.8-rated boutique, and residential character you won't find downtown.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/nas7_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book The Gilmore 12 South →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=450&fit=crop&auto=format"
              alt="Thompson Nashville by Hyatt"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Thompson Nashville by Hyatt — Rooftop Culture in the Gulch
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$333 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Thompson Nashville sits in the Gulch — Nashville's most design-conscious neighborhood — and it fits the surroundings perfectly. The hotel's rooftop bar is one of the most talked-about in the city, with views over the skyline that are genuinely stunning in February's clear winter air. The design throughout the property is thoughtful and distinctly Nashville, drawing on music city heritage without becoming a cliché. World of Hyatt points accrue with every stay.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $333 a night, Thompson Nashville earns its 9.4 guest rating through a combination of strong service, excellent F&B, and a location that puts you close to Nashville Yards, the Gulch restaurant scene, and easy access to Broadway. For travelers who want boutique design thinking but with the backing of Hyatt's loyalty program and service standards, the Thompson is the ideal middle ground.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Design-forward travelers who want a rooftop bar, Gulch neighborhood access, and World of Hyatt points — with a 9.4 rating that validates every dollar.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/nas7_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Thompson Nashville →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>The Gilmore AvantStay 12 South</strong> if you want Nashville's best neighborhood experience — a 9.8-rated boutique in 12 South's walkable, local-favorite corridor at $268 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Thompson Nashville by Hyatt</strong> if you want rooftop culture, Gulch design energy, and World of Hyatt points — a 9.4-rated design hotel that earns every penny at $333 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/nas7_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                The Gilmore 12 South →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/nas7_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Thompson Nashville →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Two of Nashville's coolest addresses. Either way, you win. 🎸
            </p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>
              Learn about RoomVoyager Rewards →
            </a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}

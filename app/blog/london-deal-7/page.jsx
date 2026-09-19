"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function LondonDeal7Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=1600&h=700&fit=crop&auto=format"
            alt="Kensington and Fulham London"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · London</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Point A Kensington vs. Native Fulham Broadway.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $109 or $138 a night. Seven west London nights — budget smart-hotel or apartment-style with $129 off.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            The west side of London — Kensington, Olympia, Fulham, Chelsea — is a different London from the tourist-facing center. The Victoria and Albert Museum is here. The Natural History Museum. King's Road. Stamford Bridge. Portobello Road market runs through Notting Hill a few stops up the District line. It's residential, walkable, and in March the streets have a particular quiet energy before the spring crowds move in. Seven nights from March 27 is enough to really inhabit this part of the city.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Both hotels in this deal are in west London — Point A Kensington Olympia at $109 a night and Native Fulham Broadway at $138 a night on sale with $129 off. Point A is the sharp value smart-hotel with strong reviews from over 1,600 guests. Native Fulham is an apartment-style property with only 1 review currently — exceptional at 10.0, but very new. Seven nights, $203 between them.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            West London, seven nights. Proven smart-hotel or new apartment-style on sale. $29 per night apart.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=450&fit=crop&auto=format"
              alt="Point A Hotel Kensington Olympia London"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Point A Kensington Olympia — Proven Smart-Hotel at $109 a Night</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$109 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Point A Hotels is the UK smart-hotel brand that has carved out a strong position at the intersection of design, value, and central London location. The Kensington Olympia property is rated 8.4 Very Good across 1,672 reviews — a substantial review base that confirms consistent, reliable delivery. At $109 a night, the rooms are compact and well-designed: everything you need, nothing you don't, with a location right by the Olympia venue and easy District line access to Kensington High Street, Earl's Court, and Fulham Broadway.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Seven nights at $109 is $763 total — well-priced for a west London week with 1,672 reviews of track record behind it. For a full-week stay in Kensington, Point A gives you a reliable, design-forward base with strong tube connectivity to every part of London you'd want to visit.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Value-focused travelers who want a proven west London base with 1,672 reviews of confirmed quality and strong District line connections.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/london7_1" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Point A Kensington Olympia →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=450&fit=crop&auto=format"
              alt="Native Fulham Broadway London"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Native Fulham Broadway — Apartment-Style on Sale at $138 a Night</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$138 / night · $129 off</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Native is the UK's leading apartment-hotel brand — properties in London, Edinburgh, Glasgow, and Dublin that operate somewhere between a hotel and a serviced apartment. The Fulham Broadway location is on sale at $138 a night with $129 off its rack rate, currently showing a 10.0 Exceptional score. One review — which means the property is new, and one guest loved it. Only 2 rooms left at this price. The apartment-style format gives you kitchen facilities, more space than a standard hotel room, and a residential Fulham feel that's different from the hotel experience entirely.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $138 a night — $29 more than Point A — Native Fulham Broadway offers an apartment-style alternative for a west London week. The kitchen facilities are meaningful for a seven-night stay: breakfast in, one or two dinners in, coffee every morning from your own kitchen. The sale discount is significant, but the single-review track record means you're trusting the brand rather than the property's own history.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Apartment-style enthusiasts who want kitchen facilities for a long-stay week and are comfortable with a newer property still building its review base.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/london7_2" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Native Fulham Broadway →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Point A Kensington Olympia</strong> if 1,672 reviews at 8.4 Very Good and a proven west London smart-hotel make the value case obvious at $109 a night. Reliable, well-located, and genuinely good.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Native Fulham Broadway</strong> if the apartment-style format with kitchen facilities, the $129 sale discount, and a Fulham residential feel are worth $29 more per night for a seven-night stay. Only 2 rooms left — newer property, but the Native brand has a strong track record across its portfolio.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/london7_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Point A Kensington →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/london7_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Native Fulham Broadway →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Seven west London nights. Kensington, Fulham, and everything in between. 🇬🇧</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}

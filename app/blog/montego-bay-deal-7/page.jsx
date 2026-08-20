"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MontegoBayDeal7Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1600&h=700&fit=crop&auto=format" alt="Boutique luxury resort Jamaica" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Montego Bay</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Zoetry or Round Hill. Jamaica's Two Quiet Icons.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Four nights in January. The most quietly celebrated properties in Montego Bay.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            January 14th through the 18th — four nights in Montego Bay at two properties that don't advertise loudly but are known intimately by anyone who travels Jamaica seriously. This is the wild card deal: no chain recognition, no waterpark headline, no loyalty points calculation. Just two of the most respected boutique luxury experiences in the Caribbean, each quietly extraordinary in its own way.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Zoetry Montego Bay at $329 a night is the artful, adults-only all-inclusive boutique: a small, intimate property in the AMR Collection that prioritizes art, wellness, local culture, and unhurried hospitality over resort scale. Round Hill Hotel & Villas at $459 a night is Jamaica's most storied private estate — a 110-acre property with cobblestone paths, private cove beaches, and a guest history that includes everyone from Jacqueline Kennedy to Paul McCartney to Ralph Lauren. Four nights in January at either property is not a hotel stay. It's a memory.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $329 or $459. Zoetry's artful boutique or Round Hill's legendary estate — Jamaica's two quiet icons in January.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe2fa?w=900&h=500&fit=crop&auto=format" alt="Zoetry Montego Bay" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Zoetry Montego Bay — Artful All-Inclusive at $329</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$329 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Zoetry Montego Bay is adults-only and operates on a philosophy of intentional travel: art installations throughout the property, a focus on local Jamaican culture and cuisine, wellness programming designed to actually slow you down, and an all-inclusive model that includes gourmet dining, premium spirits, and water sports in a property small enough that you'll recognize the staff by name by day two. At $329 a night all-inclusive, four nights is $1,316. For the intimacy and intentionality of what Zoetry delivers, that is a competitive rate.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Zoetry experience is calibrated for travelers who find large resorts exhausting. January at Zoetry Montego Bay means warm, calm water, private beach access, and an atmosphere where the loudest sound is typically the surf. If that is what you want from Jamaica, this is the answer.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Adults who want intimate, art-forward, all-inclusive boutique luxury — small property, local culture, and genuine quiet at $329 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb7_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Zoetry Montego Bay →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&h=500&fit=crop&auto=format" alt="Round Hill Hotel and Villas" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Round Hill Hotel & Villas — Jamaica's Legendary Estate at $459</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$459 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Round Hill Hotel & Villas occupies a 110-acre estate on a private peninsula west of Montego Bay, and it has done so since 1953. The cobblestone paths, the private cove beaches, the villas designed by Ralph Lauren, the pool overlooking the Caribbean, the history embedded in every corner of the property — this is not a resort, it's an institution. Guests have included John and Jacqueline Kennedy, Paul McCartney, Audrey Hepburn, and generations of travelers who return year after year because there is simply nothing else like it in Jamaica.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $459 a night, four nights is $1,836. January at Round Hill is prime: the estate in dry season, the cove calm and clear, the terrace at sunset casting long shadows over the Caribbean. If there is a once-in-a-lifetime Jamaica stay, this is it.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want Jamaica's most legendary private estate — Ralph Lauren villas, private cove, 70 years of history, at $459 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb7_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Round Hill Hotel & Villas →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Zoetry Montego Bay</strong> for intimate, adults-only, art-forward all-inclusive luxury — small property, genuine Jamaican culture, and wellness in a setting that rewards slowing down at $329 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Round Hill Hotel & Villas</strong> for Jamaica's most celebrated private estate — 110 acres, Ralph Lauren villas, private cove, and 70 years of legendary hospitality at $459 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb7_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Zoetry Montego Bay →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb7_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Round Hill Hotel & Villas →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>January in Montego Bay. The quiet icons. Both unforgettable. 🇯🇲</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}

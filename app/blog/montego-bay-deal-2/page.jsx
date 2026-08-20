"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function MontegoBayDeal2Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=1600&h=700&fit=crop&auto=format" alt="Montego Bay Jamaica" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Montego Bay</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Beach or Hip Strip. Both Under $90.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Four nights in January. Two very different ways to do Montego Bay.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            January 9th through the 13th — four nights in Montego Bay at the height of Caribbean winter season. This deal isn't about how much you spend. Both options come in under $90 a night. It's about where you want to be: in the action on the Hip Strip, the neon-lit stretch of bars, jerk spots, and rum shacks that defines Montego Bay nightlife — or on the water, with sand under your feet and the Caribbean at your front door.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Wexford Court Hotel at $72 a night drops you directly in the middle of the Hip Strip scene — the same block as the best rum bars, reggae clubs, and rooftop spots in the city. SeaGarden Beach Resort at $89 a night is the beachfront version: sand, calm water, and resort grounds that put the Caribbean experience front and center. Same budget, same city. Completely different four nights.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $72 or $89. Beach or Hip Strip — both under $90, both in Montego Bay in January.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=500&fit=crop&auto=format" alt="Wexford Court Hotel Montego Bay" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Wexford Court Hotel — Hip Strip Central at $72</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$72 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Wexford Court Hotel is the classic budget choice for travelers who come to Montego Bay for the scene rather than the resort. Sitting right on Gloucester Avenue — the famous Hip Strip — it puts you in the center of everything: the rum bars, the jerk chicken, the live music that starts in the afternoon and goes until the stars come out. At $72 a night, four nights comes to $288. That's the entire accommodation cost for four nights in peak January Jamaica.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The hotel has a pool, an on-site bar, and enough comfort to sleep well between late nights. The beach is a short walk. But the real draw is the location: you are on the Hip Strip, which in Montego Bay is not just a street — it is the reason people come to MoBay and keep coming back. At $72, you're paying for proximity to that energy, and it's worth every dollar.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the Montego Bay street-level experience — Hip Strip bars, reggae, jerk chicken, and nightlife, all out the front door at $72 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb2_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Wexford Court Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe2fa?w=900&h=500&fit=crop&auto=format" alt="SeaGarden Beach Resort Montego Bay" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>SeaGarden Beach Resort — Beachfront at $89</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$89 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              SeaGarden Beach Resort delivers the Caribbean beach experience at a price point that rarely comes with actual beachfront access: $89 a night, private beach, all-inclusive amenities included. Four nights here is $356 — under $400 for four nights at a beachfront resort in peak Jamaica season. The resort sits on calm water ideal for swimming and snorkeling, with meals, drinks, and water sports folded into the rate. When you factor in what you're not spending on food and drinks, the all-inclusive math gets even more compelling.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              This is the option for travelers who want to land in Montego Bay and not have to make decisions about where to eat or drink — everything is on property and covered. The beach is calm and swimmable year-round, and January's dry season makes it ideal for spending serious time in the water.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want beachfront all-inclusive at a budget price — private beach, meals, drinks, and water sports at $89 a night in January.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb2_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book SeaGarden Beach Resort →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Wexford Court Hotel</strong> if you want the Montego Bay street experience — the Hip Strip, the rum bars, the reggae, the real city energy — at $72 a night with the beach a short walk away.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>SeaGarden Beach Resort</strong> for beachfront all-inclusive under $90 — private beach, meals, drinks, and water sports at $89 a night in peak January season.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb2_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Wexford Court Hotel →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb2_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>SeaGarden Beach Resort →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>January in Montego Bay. The Hip Strip or the shore — both are Jamaica. 🇯🇲</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}

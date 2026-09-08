"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function PuntaCanaDeal4Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&h=700&fit=crop&auto=format"
            alt="Punta Cana resort pool"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Punta Cana</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Marriott Modern vs. Barceló Beach Palace.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $151 or $272 a night. Two strong mid-range Caribbean winners for February.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Punta Cana's mid-range resort market is where value meets genuine quality — and this week's deal showcases both ends of that sweet spot. Two well-reviewed properties at $151 and $272 a night, representing two completely different approaches to the Caribbean resort experience. One is a modern, sleek Marriott property that skips the all-inclusive model. The other is a massive beachfront palace that puts everything under one roof.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            AC Hotel by Marriott Punta Cana comes in at $151 a night — a modern, design-forward Marriott property with a 9.0 guest rating, a pool, and pet-friendly policies that set it apart from the all-inclusive pack. Barceló Bávaro Palace — All Inclusive lands at $272 a night — a sprawling beachfront all-inclusive with private beach access, an 8.2 guest rating from over 6,000 reviews, and the kind of scale that turns the hotel itself into the destination. Both are available for the full Feb 7–14 week.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Sleek Marriott freedom at $151 or Barceló's all-inclusive beach palace at $272. Both mid-range. Completely different experiences.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=450&fit=crop&auto=format"
              alt="AC Hotel by Marriott Punta Cana"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                AC Hotel by Marriott Punta Cana — Modern Design, Bonvoy Points, No All-Inclusive Lock-In
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$151 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The AC Hotel by Marriott Punta Cana brings the brand's distinctive European-influenced design aesthetic to the Caribbean. With a 9.0 guest rating, a pool, and a pet-friendly policy that distinguishes it from virtually every other Punta Cana resort, this is the right choice for travelers who want Marriott quality and Bonvoy points without committing to an all-inclusive model. You eat and drink what you want, where you want, without a wristband and a buffet.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $151 a night for February 7–14, the AC Hotel is the smartest mid-range pick for independent-minded travelers. Punta Cana has excellent standalone restaurants that all-inclusive guests often miss — and staying at the AC Hotel puts that entire local dining scene at your disposal. Bonvoy points on every night's stay sweeten the deal further.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Independent travelers who want Marriott quality and Bonvoy points in Punta Cana — without the all-inclusive constraint — at $151 a night.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/punta4_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book AC Hotel by Marriott →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800&h=450&fit=crop&auto=format"
              alt="Barceló Bávaro Palace All Inclusive"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Barceló Bávaro Palace — All Inclusive Beach Palace on Bávaro Beach
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$272 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Barceló Bávaro Palace is one of Punta Cana's most recognized all-inclusive resorts — a massive property on a private beach with everything included: meals, drinks, pools, entertainment, and water sports. The 8.2 guest rating from over 6,000 reviews is a reflection of consistent delivery at scale. This is the classic Punta Cana experience: wake up, walk to a private beach, eat and drink all day without opening your wallet, and fall asleep to the Caribbean breeze.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $272 a night, Barceló Bávaro Palace includes everything — meals, premium drinks, beach access, pools, and entertainment. When you factor in what you'd spend separately on food and drinks at a non-all-inclusive resort, the effective price premium over the AC Hotel narrows considerably. For travelers who want to fully surrender to the Caribbean resort experience without budgeting meal by meal, Barceló is the right call.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the classic all-inclusive Punta Cana experience — private beach, everything included, 8.2-rated at scale, for $272 a night.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/punta4_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Barceló Bávaro Palace →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>AC Hotel by Marriott</strong> if you want design, Bonvoy points, and the freedom to eat and explore Punta Cana on your own terms — at $151 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Barceló Bávaro Palace</strong> if you want the full all-inclusive beach palace experience — everything included, private beach, and 6,000+ reviews backing it up at $272 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/punta4_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                AC Hotel by Marriott →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/punta4_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Barceló Bávaro Palace →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Freedom or all-inclusive ease. Both are solid February wins. 🌊
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

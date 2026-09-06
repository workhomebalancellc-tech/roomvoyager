"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function PuntaCanaDeal5Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&h=700&fit=crop&auto=format"
            alt="Punta Cana luxury resort beach"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Punta Cana</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Sunscape Coco vs. Grand Palladium Select Bávaro.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Both all-inclusive, both 4+ star. $364 apart. February on the Caribbean — two top-tier ways in.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            When you're shopping for a top-tier all-inclusive resort in Punta Cana for February, two properties consistently stand out at very different price points — and this week's deal puts both on the table. Both are all-inclusive, both are well-reviewed, and both deliver the full Caribbean beach resort experience. The gap between them is $364 a night, and understanding what that gap buys is the entire point of this comparison.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Sunscape Coco Punta Cana comes in at $285 a night — a solid all-inclusive with an 8.0 guest rating from over 1,000 reviews, beach access, and breakfast included. Family Selection at Grand Palladium Select Bávaro — All Inclusive lands at $649 a night — a spectacular beachfront resort with 19 restaurants, a 9.6 guest rating, direct beach access, and a scale that puts it in the top tier of Caribbean all-inclusive hotels worldwide. Both are available for Feb 7–14.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Sunscape's solid all-inclusive at $285 or Grand Palladium's 19-restaurant beachfront palace at $649. Both deliver Caribbean February in style.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=450&fit=crop&auto=format"
              alt="Sunscape Coco Punta Cana All Inclusive"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Sunscape Coco Punta Cana — All-Inclusive Done Right at $285 a Night
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$285 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Sunscape Coco Punta Cana is one of the most consistently well-regarded mid-tier all-inclusive resorts in the Dominican Republic. With an 8.0 guest rating from over 1,000 reviews, it delivers beach access, pools, included meals and drinks, and on-site entertainment without the premium price tag of Punta Cana's most lavish properties. The breakfast-included designation is particularly useful for travelers who want flexibility during the day while having morning sorted.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $285 a night, Sunscape Coco represents a $1,998 total for the full seven-night Feb 7–14 stay — a meaningful investment, but one that covers everything. Meals, drinks, beach, entertainment, pool — seven nights in the Dominican Republic all-in at a property that consistently earns its reviews. For travelers who want genuine all-inclusive Caribbean quality without tipping into luxury pricing, Sunscape Coco is the smart pick.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a well-reviewed all-inclusive Punta Cana resort at a realistic price — beach, pools, everything included, at $285 a night.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/pca5_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Sunscape Coco →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&h=450&fit=crop&auto=format"
              alt="Family Selection at Grand Palladium Select Bavaro"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Family Selection at Grand Palladium Select Bávaro — 19 Restaurants, 9.6 Rating, Beachfront
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$649 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Grand Palladium Select Bávaro is a world-class all-inclusive resort — and the 9.6 guest rating from 170 reviews confirms it consistently delivers at that level. With 19 restaurants offering cuisine from around the world, direct beach access, multiple pools, and a family-focused design that makes it excellent for multi-generational travel, this is Punta Cana's premium all-inclusive tier. It earned a VIP Access designation on Expedia, reserved for properties that consistently rank among the top-rated in their category.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $649 a night — approximately $4,543 for seven nights — Grand Palladium is a meaningful step up from Sunscape Coco. But when you're comparing 19 restaurants to standard buffet options, direct private beach access, and a 9.6 vs 8.0 guest rating, the gap starts to make sense. For families or travelers who genuinely use the resort as their primary destination, the Grand Palladium's breadth of options makes every meal and every day feel like a different experience.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want the premium all-inclusive experience — 19 restaurants, private beach, 9.6-rated, VIP Access, at $649 a night for February in Punta Cana.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/pca5_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Grand Palladium Select Bávaro →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom Line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Sunscape Coco Punta Cana</strong> if you want a solid all-inclusive Caribbean resort at a realistic price — 8.0 rated, beach included, everything covered at $285 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Family Selection at Grand Palladium Select Bávaro</strong> if you want Punta Cana's premium all-inclusive tier — 19 restaurants, private beach, 9.6-rated excellence at $649 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/pca5_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Sunscape Coco →
              </a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/pca5_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>
                Grand Palladium Select Bávaro →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              Two levels of all-inclusive. Both are February wins in the Dominican Republic. 🏖️
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

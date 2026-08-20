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
          <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&h=700&fit=crop&auto=format" alt="Jamaica resort coastline" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Montego Bay</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              $178 or $1,703. Boutique City Hotel or Jamaica's Legendary Estate.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Four nights in January. The widest gap in the series — $1,525 a night between them.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            January 14th through the 18th — four nights in Montego Bay, and this is the deal with the biggest spread in the entire series. Hotel 39 Jamaica at $178 a night is the savvy traveler's pick: a boutique city hotel in MoBay that keeps your total accommodation cost under $800 for four nights, leaving the rest of your budget wide open for the island itself. Round Hill Hotel & Villas at $1,703 a night is one of the most celebrated private estates in the entire Caribbean — 110 acres on a private peninsula west of Montego Bay, with a history that runs back to 1953 and a guest list that reads like a who's who of the last seven decades.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Four nights at Hotel 39 is $713. Four nights at Round Hill is $6,812. The question this deal poses is a real one: does the legendary private estate experience justify $6,099 more than a well-positioned city hotel in the same city, on the same dates, in the same January sun?
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $178 or $1,703. Boutique city hotel or Jamaica's most legendary private estate — four nights in January.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&h=500&fit=crop&auto=format" alt="Hotel 39 Jamaica Montego Bay" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Hotel 39 Jamaica — City Boutique at $178</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$178 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hotel 39 Jamaica is the deal for travelers who want to use Montego Bay as a launch pad rather than a destination. At $178 a night, four nights is $713 total — leaving a substantial budget for everything MoBay and Jamaica deliver outside resort walls: the Hip Strip, Doctors Cave Beach, day trips to Dunn's River Falls, boat excursions, local jerk spots, and the kind of spontaneous Jamaica that resort corridors can't replicate. The Rose Hall corridor location puts you close to the action without locking you into one property's itinerary.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              January in Montego Bay is prime dry season — warm, sunny, and ideal for getting out and exploring. A boutique city hotel at $178 a night makes the most of what the season offers when you're not the type to spend four days between a resort pool and a buffet. For travelers who came to see Jamaica, Hotel 39 keeps the costs low and the options open.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want a lean, flexible MoBay base — $178 a night, city access, and a wide-open budget for the island itself.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb7_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Hotel 39 Jamaica →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900&h=500&fit=crop&auto=format" alt="Round Hill Hotel and Villas Jamaica" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Round Hill Hotel & Villas — Jamaica's Grand Estate at $1,703</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$1,703 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Round Hill Hotel & Villas has occupied a 110-acre private peninsula west of Montego Bay since 1953, and it has earned its reputation the hard way — through decades of genuinely exceptional hospitality delivered to an extraordinarily discerning clientele. John and Jacqueline Kennedy, Paul McCartney, Audrey Hepburn, Ralph Lauren — who designed several of the property's villas — Sting, and generations of travelers who return year after year because there is simply nothing else like it in Jamaica. At $1,703 a night, four nights is $6,812.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The cobblestone paths, the private cove beaches, the pool overlooking the Caribbean, the gracious unhurried service that seven decades of refinement produces — Round Hill is the kind of place that changes what you think a hotel stay can mean. January on the estate is the property at its finest: dry season, calm cove water, the peninsula immaculate under Caribbean winter skies. If you are looking for the once-in-a-decade Jamaica trip, this is it.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want Jamaica's most legendary private estate — 110 acres, Ralph Lauren villas, private cove, and 70+ years of celebrated hospitality at $1,703 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb7_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Round Hill Hotel & Villas →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Hotel 39 Jamaica</strong> if you want to explore Montego Bay and Jamaica on your own terms — $178 a night, city access, and $6,099 freed up for the island experience itself.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Round Hill Hotel & Villas</strong> for the most celebrated private estate in Jamaica — 110 acres, Ralph Lauren villas, private cove, and the service of a property that has defined luxury Caribbean hospitality for over 70 years at $1,703 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb7_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Hotel 39 Jamaica →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb7_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Round Hill Hotel & Villas →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Four nights in January. $178 or $1,703 — Jamaica delivers either way. 🇯🇲</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}

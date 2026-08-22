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
          <img src="/Deals/63/montegobay_destination.jpg" alt="Jamaica all-inclusive resort" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Montego Bay</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              RIU Ocho Rios or Iberostar Rose Hall. $466 vs $562.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Four nights in January. Two big-brand all-inclusives, two sides of Jamaica.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            January 7th through the 11th — four nights in Jamaica, both options flying the all-inclusive flag for two of the world's biggest resort brands. RIU and Iberostar have built their reputations across the Caribbean and beyond, and both deliver a well-executed, full-service resort experience. The difference here is geography as much as price: one puts you in Ocho Rios, the other in Montego Bay's Rose Hall corridor.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Hotel Riu Ocho Rios All-Inclusive at $466 a night is the Ocho Rios option — the RIU brand's full package on Jamaica's north coast, where the island's natural scenery is most dramatic and Dunn's River Falls is practically on your doorstep. Iberostar Waves Rose Hall Beach All-Inclusive at $562 a night is the Montego Bay answer: an Iberostar property on the Rose Hall beachfront, consistently rated among the best all-inclusives in Jamaica, with easy airport access and the full Rose Hall experience. Four nights. $384 between them.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            $466 or $562. RIU's Ocho Rios or Iberostar's Rose Hall — four nights all-inclusive in January.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/63/hotelriuochorios1.jpg" alt="Hotel Riu Ocho Rios All-Inclusive" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Hotel Riu Ocho Rios All-Inclusive — Ocho Rios at $466</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$466 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Hotel Riu Ocho Rios delivers the RIU all-inclusive formula — multiple pools, beach access, unlimited food and drinks, nightly entertainment, and the full-service resort experience — in Ocho Rios, which offers a different Jamaica than Montego Bay. The north coast scenery here is genuinely spectacular: lush hillsides meeting calm Caribbean water, with Dunn's River Falls, Blue Hole, and Mystic Mountain all within reach of the property. At $466 a night, four nights is $1,864 all-inclusive.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The RIU brand executes the all-inclusive model efficiently and at scale — you know what you're getting, it delivers consistently, and the Ocho Rios location adds genuine natural appeal. Ocho Rios is about two hours from Montego Bay airport, so factor in the transfer, but the scenery on the drive is worth noting. January dry season keeps the falls and outdoor attractions in prime condition.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want big-brand all-inclusive with Ocho Rios natural scenery — RIU reliability, beach, pools, and Dunn's River Falls nearby at $466 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb5_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Hotel Riu Ocho Rios →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img src="/Deals/63/iberostarwavesrose1.jpg" alt="Iberostar Waves Rose Hall Beach All-Inclusive" style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>Iberostar Waves Rose Hall Beach — MoBay's Best Beach at $562</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$562 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Iberostar Waves Rose Hall Beach has earned its reputation as one of Jamaica's top-rated all-inclusive resorts through consistent execution on a beautiful Rose Hall beachfront. The beach here is the standout — wide, calm, and clear, in the heart of Montego Bay's most coveted resort corridor. At $562 a night, four nights is $2,248 all-inclusive. The Iberostar cluster in Rose Hall gives guests access to multiple properties' dining options, which steps the food program well above a single-resort offering.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Montego Bay airport is close, the Rose Hall location is convenient, and January dry season means the beach is at its best: calm surf, warm water, and clear days from check-in to checkout. For travelers who want the all-inclusive formula on one of Jamaica's finest stretches of sand, Iberostar Rose Hall delivers at a competitive rate for the quality it provides.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Travelers who want Jamaica's best-rated all-inclusive beach experience — Iberostar's Rose Hall beachfront, easy MBJ access, at $562 a night.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/mb5_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book Iberostar Waves Rose Hall Beach →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Hotel Riu Ocho Rios All-Inclusive</strong> for the RIU all-inclusive package in Ocho Rios — big-brand reliability, beach and pools, and Jamaica's most scenic north coast setting at $466 a night.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Iberostar Waves Rose Hall Beach All-Inclusive</strong> for one of Jamaica's consistently highest-rated all-inclusive properties — Rose Hall beachfront, multi-restaurant dining, and easy MBJ airport access at $562 a night.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb5_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Hotel Riu Ocho Rios →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/mb5_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>Iberostar Rose Hall Beach →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Four nights in January. RIU or Iberostar — both all-inclusive, both Jamaica. 🇯🇲</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}

"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function OrlandoDeal6Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="/Deals/15/Orlando_destination.jpg"
            alt="Orlando"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🏰 Disney vs. Marriott · Orlando</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Disney Magic or Villa Space?
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $309 a night separates these two. Here's what that money actually buys.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            August 20th through the 23rd — three nights, two completely different definitions of what a great Orlando stay looks like. Disney's Yacht Club Resort at $593 a night is EPCOT's most elegant neighbor, a full Disney resort experience with one of the best hotel pools anywhere in the world. Marriott's Imperial Palm Villas at $284 a night gives you villa-style living — a full kitchen, real living space, and the comfort of somewhere that actually feels like a home.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            The difference is $309 a night, $927 over three nights. That's a significant number. Here's how to think about whether it's worth it.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Disney's Yacht Club Resort */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/15/disneysyachtclub1.jpg"
              alt="Disney's Yacht Club Resort"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Disney's Yacht Club Resort — EPCOT's Front Door
              </h2>
              <span style={{ background: "#FEF3C7", color: "#92400E", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$593 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Disney's Yacht Club Resort sits on Crescent Lake, steps from the EPCOT International Gateway entrance — you walk to EPCOT. Hollywood Studios is a short boat ride or a 15-minute walk. The nautical New England theme is immaculate, the service is everything you expect from a Disney deluxe resort, and Stormalong Bay — the resort's shared pool complex — is widely considered one of the best hotel pools in the United States. A sandy-bottom lagoon, a 230-foot waterslide, whirlpools: the pool alone is worth the trip.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $593 a night, you're paying for all of it: Early Theme Park Entry every morning, Disney transportation throughout the resort, the EPCOT walkability that changes how the whole trip feels, and three nights in one of Disney's most beloved resorts. If this is a once-in-a-while trip and EPCOT is the centerpiece, the Yacht Club earns its price.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> EPCOT lovers, Disney superfans, couples celebrating, anyone who wants the full deluxe Disney resort experience with zero compromises.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/orlando6_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Disney's Yacht Club Resort →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Marriott's Imperial Palm Villas */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="/Deals/15/marriottsimperialpalm1.jpg"
              alt="Marriott's Imperial Palm Villas"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Marriott's Imperial Palm Villas — Space, Kitchen, Value
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$284 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Marriott's Imperial Palm Villas is a different kind of Orlando stay — villa-style rooms with full kitchens, separate living areas, and the kind of space that makes a three-night trip actually feel like a vacation rather than a sprint. This is a Marriott Vacation Club property near the Disney corridor, which means you're close to the parks without paying the on-property premium that Disney charges for its own resorts.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $284 a night, you're saving $927 over three nights compared to the Yacht Club. That $927 in your pocket is park tickets, character dining, spa treatments, or simply the freedom to upgrade everything else about the trip. You won't be walking to EPCOT, but you'll have a kitchen to make breakfast, a living room to decompress in, and a significantly more comfortable financial situation by checkout.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Families who want villa space and a kitchen, budget-conscious Disney visitors, longer stays where comfort and savings both matter.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/orlando6_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Marriott's Imperial Palm Villas →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Disney's Yacht Club Resort</strong> if EPCOT is the heart of your trip and you want the full Disney resort experience — the walkability, the pool, the magic, all of it. At $593/night, you're paying for something special.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Marriott's Imperial Palm Villas</strong> if $927 in savings sounds better than a walk to EPCOT — villa space, a full kitchen, and real comfort at $284/night near all the same parks.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/orlando6_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Disney's Yacht Club Resort →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/orlando6_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Marriott's Imperial Palm Villas →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              $927 savings or EPCOT's front door. Your call. 🏰
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

"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function CancunDeal2Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        {/* Hero */}
        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1600&h=700&fit=crop&auto=format"
            alt="Cancún resort pool"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 55%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · Cancún</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              Same All-Inclusive Promise. Very Different Scale.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              Both cover food and drinks. The question is how much else you want included.
            </p>
          </div>
        </div>

        {/* Content */}
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>

          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Christmas week in Cancún — December 26th through January 2nd — is peak family travel season. The weather is ideal, school is out, and the Hotel Zone fills up with people who've been counting down to this trip since summer. All-inclusive was the right call. Now comes the real decision: how much resort do you actually need?
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            Park Royal Beach Cancún and Moon Palace are both all-inclusive. Both cover your meals, your drinks, and your beach access. But that's roughly where the similarities end. One is a solid, well-priced property that delivers exactly what it promises. The other is a full-scale vacation destination unto itself — 2,000 rooms, a waterpark, multiple pools, and enough to keep a family busy for a week without ever leaving the property.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 1 — Park Royal Beach Cancún */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&h=520&fit=crop&auto=format"
              alt="Park Royal Beach Cancún"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Park Royal Beach Cancún — All-Inclusive Done Right
              </h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>~$110 / night all-inclusive</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Park Royal Beach sits right on the Hotel Zone's Caribbean side with direct beach access, multiple pools, and the full all-inclusive package — meals, drinks, and activities — at a price that makes the decision easy. It's not trying to be everything. It's trying to be exactly what most families actually need from a Cancún resort, and it delivers that without the overwhelming scale of a mega property.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At around $110 a night all-inclusive, this is where the value math gets hard to argue with. You're covered for the week — food, drinks, beach chairs, pools — and you still have money left over for a day trip to Tulum, a sunset boat tour, or a splurge dinner off-property if the mood strikes. It's all-inclusive as a foundation, not a cage.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Families and couples who want a solid beachfront all-inclusive without paying mega-resort prices — great value, right location, no surprises.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/cancun2_1"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Park Royal Beach Cancún →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Hotel 2 — Moon Palace Cancún */}
          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=520&fit=crop&auto=format"
              alt="Moon Palace Cancún"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>
                Moon Palace Cancún — The Mega-Resort Experience
              </h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>~$250 / night all-inclusive</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              Moon Palace isn't just a resort — it's a destination within a destination. Over 2,000 rooms spread across a sprawling beachfront property, a full waterpark, multiple pools, a golf course, a spa, 20+ restaurants and bars, a bowling alley, a cinema, and a kids club that runs programming all day. If the goal is to never need to leave the property, Moon Palace was built for exactly that.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              For Christmas week with kids, the scale starts making real sense. Everyone in the family can do their own thing — and still end up at the same dinner table at the end of the day. Teens have the waterpark and the arcade. Younger kids have the club and the pools. Adults have the spa and the beach. The all-inclusive covers all of it. At $250 a night, you're paying for the kind of trip the whole family is still talking about next Christmas.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Large families, multi-generational trips, and anyone who wants a full week of activities, dining, and entertainment without ever needing a ride off-property.
            </p>
            <a
              href="https://expedia.com/affiliates/workhomebalance_llc/cancun2_2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}
            >
              Book Moon Palace Cancún →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          {/* Bottom line */}
          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>Park Royal Beach Cancún</strong> if you want a solid beachfront all-inclusive at a price that still leaves room in the budget — great value, right location, everything you actually need.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>Moon Palace Cancún</strong> if Christmas week means going all-in — a mega-resort where every member of the family has something to do and the only decision you'll need to make is which pool to hit first.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/cancun2_1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Park Royal Beach →
              </a>
              <a
                href="https://expedia.com/affiliates/workhomebalance_llc/cancun2_2"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}
              >
                Moon Palace Cancún →
              </a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>
              The best Christmas gift? A week in Cancún. 🎄🌊
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

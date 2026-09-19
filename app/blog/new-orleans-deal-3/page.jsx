"use client";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import FloatingChat from "../../components/FloatingChat";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

export default function NewOrleansDeal3Blog() {
  return (
    <>
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        <NavBar active="deals" />

        <div style={{ position: "relative", height: "340px", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=700&fit=crop&auto=format"
            alt="New Orleans Warehouse District"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 50%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,30,100,0.45) 0%, rgba(0,15,60,0.75) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
            <p style={{ color: ORANGE, fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 10px" }}>🔥 Deals of the Week · New Orleans</p>
            <h1 style={{ color: "#fff", fontSize: "clamp(22px, 4vw, 42px)", fontWeight: "800", margin: "0 0 10px", lineHeight: 1.15, textShadow: "0 2px 14px rgba(0,0,0,0.4)" }}>
              The Riverfront vs. ONE11 Hotel.
            </h1>
            <p style={{ color: "#BFDBFE", fontSize: "clamp(13px, 1.5vw, 16px)", maxWidth: "560px", margin: 0, lineHeight: 1.6 }}>
              $127 or $204 a night. Five spring nights — Arts District practical or French Quarter on sale.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "52px 24px 80px" }}>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "20px" }}>
            Five nights is the sweet spot for New Orleans. Long enough to eat your way through every neighborhood — a roast beef debris po'boy at Parkway, red beans and rice at Dooky Chase's on a Monday, a proper tasting menu at August. Short enough that the energy of the city doesn't overwhelm you. March 27 through April 1 is a beautiful window: warm, festive, and still cool enough in the evenings for a long walk through the Marigny.
          </p>
          <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#374151", marginBottom: "48px" }}>
            This deal puts two very different five-night options against each other. The Riverfront Hotel in the Arts and Warehouse District comes in at $127 a night — a solid, well-reviewed hotel near the streetcar line that gives you easy access to the whole city without the French Quarter markup. ONE11 Hotel, sitting in the heart of the French Quarter, is currently on sale at $204 a night — down $455 from its regular rack rate, rated Exceptional at 9.4 across 1,424 reviews. For five nights, the difference is $385.
          </p>

          <p style={{ fontSize: "15px", lineHeight: 1.6, color: NAVY, fontWeight: "700", fontStyle: "italic", textAlign: "center", margin: "0 0 48px", borderLeft: `3px solid ${ORANGE}`, paddingLeft: "16px" }}>
            Warehouse District value or French Quarter exceptional — on sale. Five nights, $77 apart per night.
          </p>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=800&h=450&fit=crop&auto=format"
              alt="The Riverfront Hotel New Orleans"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>The Riverfront Hotel — Arts District Base for $127 a Night</h2>
              <span style={{ background: "#EFF6FF", color: "#1D4ED8", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$127 / night</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              The Riverfront Hotel sits in the Arts and Warehouse District — New Orleans' creative neighborhood, home to the Contemporary Arts Center, the National WWII Museum, and some of the city's best gallery restaurants. The St. Charles streetcar stops nearby, giving you direct access to the Garden District and the French Quarter without needing a car or a rideshare. Rated 8.6 Excellent across 1,376 reviews, it punches above its price.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $127 a night, the Riverfront Hotel is the practical five-night base for someone who plans to be out experiencing the city most of the time. The room is where you sleep; the neighborhood is where the real value lives. Spend the $385 you save over ONE11 on dinner at Emeril's, a swamp tour, and a couple of rounds at Frenchmen Street bars.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Museum-goers, arts district explorers, and travelers who prefer to spend on experiences over room upgrades.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans3_1" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book The Riverfront Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ marginBottom: "56px" }}>
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=450&fit=crop&auto=format"
              alt="ONE11 Hotel New Orleans"
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "16px", marginBottom: "28px" }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
              <h2 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: 0 }}>ONE11 Hotel — French Quarter Exceptional on Sale at $204 a Night</h2>
              <span style={{ background: "#DCFCE7", color: "#166534", fontSize: "13px", fontWeight: "800", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>$204 / night 🔥 Sale</span>
            </div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              ONE11 Hotel is a boutique French Quarter property with a 9.4 Exceptional rating — one of the highest for any full-service hotel in the city. Currently on sale with $455 off the regular rate, it represents genuine value for a hotel of this caliber. The design is contemporary against a historic building shell, the rooms are well-appointed, and the location puts you inside the French Quarter without the Bourbon Street noise. Boutique service, exceptional reviews, and a sale price that brings it within reach of the mid-range budget.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "16px" }}>
              At $204 a night for five nights, ONE11 is the splurge-but-justified option. The $455 sale makes a hotel that would normally be a luxury play into a realistic mid-range choice. If you want to spend five nights being genuinely pampered in the French Quarter, this is the moment.
            </p>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6B7280", marginBottom: "24px", fontStyle: "italic" }}>
              <strong style={{ color: "#374151", fontStyle: "normal" }}>Best for:</strong> Boutique hotel lovers who want the best French Quarter experience and are ready to take advantage of a significant sale price.
            </p>
            <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans3_2" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 28px", borderRadius: "12px", fontSize: "15px", fontWeight: "800", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
              Book ONE11 Hotel →
            </a>
          </div>

          <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", marginBottom: "48px" }} />

          <div style={{ background: "#EBF3FF", borderRadius: "20px", padding: "36px 32px", marginBottom: "48px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#111827", margin: "0 0 20px" }}>The Bottom Line</h2>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "12px" }}>
              Choose <strong>The Riverfront Hotel</strong> if you want a smart, well-reviewed Arts District base with streetcar access to the whole city, and you'd rather put the $385 difference into experiences.
            </p>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#374151", marginBottom: "28px" }}>
              Choose <strong>ONE11 Hotel</strong> if you want the best boutique French Quarter stay on the market right now — exceptional reviews, a significant sale price, and five nights at the center of it all.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans3_1" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>The Riverfront Hotel →</a>
              <a href="https://expedia.com/affiliates/workhomebalance_llc/neworleans3_2" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: NAVY, color: "#fff", padding: "13px 24px", borderRadius: "12px", fontSize: "14px", fontWeight: "800", textDecoration: "none" }}>ONE11 Hotel →</a>
            </div>
          </div>

          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Five New Orleans nights. Two very different ways to experience them. 🎷</p>
            <a href="/rewards" style={{ color: ORANGE, fontWeight: "700", fontSize: "14px", textDecoration: "none" }}>Learn about RoomVoyager Rewards →</a>
          </div>
        </div>
      </div>
      <FloatingChat />
      <Footer />
    </>
  );
}

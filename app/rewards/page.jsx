"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const TIERS = [
  { name: "Explorer", icon: "🧭", range: "0–9,999 pts", multiplier: "1x", color: "#6B7280", perks: ["5 pts per $1 on flights & hotels", "10 pts per $1 on cruises & packages", "Redeem from 1,000 pts ($10)", "No blackout dates"] },
  { name: "Voyager", icon: "⚓", range: "10,000–49,999 pts", multiplier: "1.2x", color: NAVY, perks: ["1.2x points on all bookings", "All Explorer perks", "Priority email response", "Exclusive member deals"] },
  { name: "Navigator", icon: "🗺️", range: "50,000–99,999 pts", multiplier: "1.5x", color: "#7C3AED", perks: ["1.5x points on all bookings", "All Voyager perks", "Dedicated agent access", "Early access to promotions"] },
  { name: "Admiral", icon: "👑", range: "100,000+ pts", multiplier: "2x", color: ORANGE, perks: ["2x points on all bookings", "All Navigator perks", "VIP concierge service", "Best available rates guaranteed"] },
];

const EARNING_RATES = [
  { product: "Flights", icon: "✈️", pts: 5, note: "Per $1 · available 45 days after travel" },
  { product: "Hotels", icon: "🏨", pts: 5, note: "Per $1 · available 45 days after checkout" },
  { product: "Cruises (self-book)", icon: "🚢", pts: 10, note: "Per $1 · available 45 days after sailing" },
  { product: "Cruises (agent)", icon: "🚢", pts: 10, note: "Per $1 · available 45 days after sailing" },
  { product: "Vacation Packages", icon: "🌴", pts: 10, note: "Per $1 · available 45 days after travel" },
];

const REDEMPTION = [
  { pts: 1000, value: "$10" },
  { pts: 2000, value: "$20" },
  { pts: 5000, value: "$50" },
  { pts: 10000, value: "$100" },
];

const REFERRAL = [
  { product: "Flight", referrer: "200 pts ($2)", friend: "200 pts ($2)" },
  { product: "Hotel", referrer: "350 pts ($3.50)", friend: "350 pts ($3.50)" },
  { product: "Cruise or Package", referrer: "500 pts ($5)", friend: "500 pts ($5)" },
];

const PAYMENT_METHODS = [
  { id: "zelle", label: "Zelle", emoji: "💚", placeholder: "Phone number or email" },
  { id: "cashapp", label: "Cash App", emoji: "💛", placeholder: "$cashtag" },
  { id: "venmo", label: "Venmo", emoji: "💜", placeholder: "@username" },
];

export default function RewardsPage() {
  const { user: session } = useAuth();
  const userPoints = 0; // TODO: fetch from DB once users table is set up
  const cashValue = (userPoints / 100).toFixed(2);
  const canRedeem = userPoints >= 1000;

  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [redeemAmount, setRedeemAmount] = useState(1000);
  const [redeemMethod, setRedeemMethod] = useState("zelle");
  const [redeemHandle, setRedeemHandle] = useState("");
  const [redeemSubmitted, setRedeemSubmitted] = useState(false);

  // Auto-pay toggle
  const [autoPayEnabled, setAutoPayEnabled] = useState(false);
  const [autoPayMethod, setAutoPayMethod] = useState("zelle");
  const [autoPayHandle, setAutoPayHandle] = useState("");
  const [autoPaySaved, setAutoPaySaved] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("rv_autopay");
    if (saved) {
      try {
        const p = JSON.parse(saved);
        setAutoPayEnabled(p.enabled || false);
        setAutoPayMethod(p.method || "zelle");
        setAutoPayHandle(p.handle || "");
      } catch {}
    }
  }, []);

  function saveAutoPay(enabled) {
    const pref = { enabled, method: autoPayMethod, handle: autoPayHandle };
    localStorage.setItem("rv_autopay", JSON.stringify(pref));
    setAutoPayEnabled(enabled);
    setAutoPaySaved(true);
    setTimeout(() => setAutoPaySaved(false), 2500);
  }

  function saveAutoPaySettings() {
    const pref = { enabled: autoPayEnabled, method: autoPayMethod, handle: autoPayHandle };
    localStorage.setItem("rv_autopay", JSON.stringify(pref));
    setAutoPaySaved(true);
    setTimeout(() => setAutoPaySaved(false), 2500);
  }

  function getCurrentTier() {
    if (userPoints >= 100000) return TIERS[3];
    if (userPoints >= 50000) return TIERS[2];
    if (userPoints >= 10000) return TIERS[1];
    return TIERS[0];
  }

  const currentTier = getCurrentTier();

  function handleRedeemSubmit(e) {
    e.preventDefault();
    const method = PAYMENT_METHODS.find(m => m.id === redeemMethod);
    const cashOut = (redeemAmount / 100).toFixed(2);
    const subject = `Rewards Redemption Request — ${redeemAmount.toLocaleString()} pts ($${cashOut})`;
    const body = `Hi Alyse,\n\nI would like to redeem my RoomVoyager Rewards points.\n\nAccount: ${session?.email}\nName: ${session?.name || "N/A"}\nPoints to redeem: ${redeemAmount.toLocaleString()}\nCash value: $${cashOut}\nPayment method: ${method?.label}\nSend to: ${redeemHandle}\n\nPlease process within 2 business days. Thank you!`;
    window.location.href = `mailto:workhomebalancellc@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setRedeemSubmitted(true);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* NAV */}
      <nav style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "0 24px", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 1px 8px rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
          <a href="/" style={{ fontSize: "22px", fontWeight: "800", color: NAVY, textDecoration: "none" }}>Room<span style={{ color: ORANGE }}>Voyager</span></a>
          <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
            <a href="/hotels" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Hotels</a>
            <a href="/flights" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Flights</a>
            <a href="/cruises" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Cruises</a>
            <a href="/rewards" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "700", borderBottom: `2px solid ${ORANGE}`, paddingBottom: "2px" }}>Rewards</a>
            <a href="/profile" style={{ color: "#374151", textDecoration: "none", fontSize: "14px", fontWeight: "500" }}>Profile</a>
            {session ? null : (
              <>
                <a href="/account/signin?callbackUrl=/rewards" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "7px 16px", border: `1.5px solid ${NAVY}`, borderRadius: "8px" }}>Sign In</a>
                <a href="/account/signup" style={{ background: ORANGE, color: "#fff", textDecoration: "none", fontSize: "14px", fontWeight: "700", padding: "8px 18px", borderRadius: "8px" }}>Sign Up</a>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=420&fit=crop&auto=format" alt="Travel rewards" style={{ width: "100%", height: "380px", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, ${NAVY}cc 0%, ${NAVY}f0 100%)` }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 24px", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 12px" }}>💰 Cash Back Loyalty Program</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 5vw, 46px)", fontWeight: "800", margin: "0 0 12px", lineHeight: 1.15, textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>RoomVoyager Rewards</h1>
          <p style={{ color: "#BFDBFE", fontSize: "17px", margin: "0 0 28px", maxWidth: "520px", lineHeight: 1.6 }}>
            Earn real cash back on every booking — paid to you via Zelle, Cash App, or Venmo. No blackout dates. No travel credit. Real money.
          </p>
          {session ? (
            <div style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", borderRadius: "16px", padding: "20px 28px", display: "inline-flex", gap: "36px", flexWrap: "wrap", justifyContent: "center", border: "1px solid rgba(255,255,255,0.2)" }}>
              <div>
                <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Your Points</p>
                <p style={{ color: "#fff", fontSize: "32px", fontWeight: "800", margin: 0 }}>{userPoints.toLocaleString()}</p>
              </div>
              <div>
                <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Cash Value</p>
                <p style={{ color: "#fff", fontSize: "32px", fontWeight: "800", margin: 0 }}>${cashValue}</p>
              </div>
              <div>
                <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Your Tier</p>
                <p style={{ color: "#fff", fontSize: "20px", fontWeight: "700", margin: 0 }}>{currentTier.icon} {currentTier.name}</p>
              </div>
              {canRedeem && (
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <button onClick={() => { setShowRedeemModal(true); setRedeemSubmitted(false); }}
                    style={{ background: ORANGE, color: "#fff", padding: "10px 20px", borderRadius: "8px", fontSize: "14px", fontWeight: "700", border: "none", cursor: "pointer", boxShadow: "0 4px 14px rgba(255,102,0,0.4)" }}>
                    Redeem Cash →
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="/account/signup" style={{ background: ORANGE, color: "#fff", padding: "13px 28px", borderRadius: "10px", fontSize: "15px", fontWeight: "700", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.4)" }}>
                Join Rewards free →
              </a>
              <a href="/account/signin?callbackUrl=/rewards" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "13px 28px", borderRadius: "10px", fontSize: "15px", fontWeight: "600", textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
                Sign in
              </a>
            </div>
          )}
        </div>
      </div>

      {/* TRUST BAR */}
      <div style={{ background: NAVY, padding: "14px 24px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {[["✅","Free to join"],["💵","Real cash payouts"],["🚫","No blackout dates"],["⏰","Available 45 days post-travel"],["📲","Zelle · Cash App · Venmo"]].map(([icon,text],i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:"6px", fontSize:"13px", color:"#BFDBFE", fontWeight: "500" }}><span>{icon}</span><span>{text}</span></div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* VIDEO SECTION */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>See how it works</p>
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Watch: RoomVoyager Rewards explained</h2>
          <p style={{ fontSize: "14px", color: "#6B7280", margin: "0 0 20px" }}>Everything you need to know about earning, waiting, and cashing out — in under 3 minutes.</p>
          <div style={{ position: "relative", background: NAVY, borderRadius: "16px", overflow: "hidden", aspectRatio: "16/9", maxHeight: "480px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Replace the src below with your YouTube embed URL, e.g.: https://www.youtube.com/embed/YOUR_VIDEO_ID */}
            {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="RoomVoyager Rewards" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} /> */}
            <div style={{ textAlign: "center", padding: "40px 24px" }}>
              <div style={{ width: "72px", height: "72px", background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", boxShadow: "0 8px 24px rgba(255,102,0,0.4)" }}>
                <span style={{ fontSize: "28px", marginLeft: "4px" }}>▶</span>
              </div>
              <p style={{ color: "#fff", fontSize: "18px", fontWeight: "700", margin: "0 0 8px" }}>How RoomVoyager Rewards Works</p>
              <p style={{ color: "#93C5FD", fontSize: "13px", margin: "0 0 16px" }}>Video coming soon — check back after launch!</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", margin: 0 }}>To add your video: replace the placeholder in rewards/page.jsx with your YouTube embed URL</p>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS — updated with 45-day rule */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Simple & transparent</p>
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "0 0 28px" }}>How it works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              { step: "1", icon: "🔍", title: "Book through RoomVoyager", desc: "Search and book flights, hotels, or cruises on our site" },
              { step: "2", icon: "⭐", title: "Earn points on your booking", desc: "5–10 points per $1 depending on the product booked" },
              { step: "3", icon: "⏳", title: "Wait 45 days after travel", desc: "Points become redeemable 45 days after your trip is completed — no exceptions" },
              { step: "4", icon: "💵", title: "Redeem for real cash", desc: "Cash out via Zelle, Cash App, or Venmo — no restrictions, no travel credit" },
            ].map(item => (
              <div key={item.step} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
                <div style={{ width: "32px", height: "32px", background: item.step === "3" ? "#FFF0E6" : LIGHT_BLUE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "700", color: item.step === "3" ? ORANGE : NAVY, marginBottom: "12px", border: item.step === "3" ? `2px solid ${ORANGE}` : "none" }}>
                  {item.step}
                </div>
                <p style={{ fontSize: "22px", margin: "0 0 8px" }}>{item.icon}</p>
                <p style={{ fontSize: "14px", fontWeight: "700", color: "#111827", margin: "0 0 6px" }}>{item.title}</p>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          {/* 45-day callout */}
          <div style={{ marginTop: "16px", background: "#FFF7ED", border: `1.5px solid #FED7AA`, borderRadius: "12px", padding: "16px 20px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "22px", flexShrink: 0 }}>⏰</span>
            <div>
              <p style={{ fontWeight: "700", color: "#92400E", margin: "0 0 4px", fontSize: "14px" }}>Why 45 days?</p>
              <p style={{ fontSize: "13px", color: "#78350F", margin: 0, lineHeight: 1.6 }}>
                The 45-day hold protects the program from fraudulent claims and cancellations. Once your travel is verified as completed, your points unlock automatically and you can redeem anytime. Your profile shows a live countdown so you always know how many days remain.
              </p>
            </div>
          </div>
        </section>

        {/* EARNING RATES */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Points per dollar</p>
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Earning rates</h2>
          <p style={{ fontSize: "14px", color: "#6B7280", margin: "0 0 24px" }}>Tier multipliers apply on top of base rates. All points are redeemable 45 days after your trip is completed.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
            {EARNING_RATES.map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px", textAlign: "center" }}>
                <p style={{ fontSize: "28px", margin: "0 0 8px" }}>{item.icon}</p>
                <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 6px" }}>{item.product}</p>
                <p style={{ fontSize: "32px", fontWeight: "800", color: NAVY, margin: "0 0 2px" }}>{item.pts}</p>
                <p style={{ fontSize: "11px", color: "#9CA3AF", margin: "0 0 6px" }}>pts per $1</p>
                <p style={{ fontSize: "10px", color: "#6B7280", margin: 0, lineHeight: 1.4 }}>{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TIERS */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Lifetime points</p>
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "0 0 24px" }}>Membership tiers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {TIERS.map(tier => (
              <div key={tier.name} style={{ background: "#fff", border: `2px solid ${session && currentTier.name === tier.name ? tier.color : "#E5E7EB"}`, borderRadius: "14px", padding: "20px", position: "relative" }}>
                {session && currentTier.name === tier.name && (
                  <span style={{ position: "absolute", top: "12px", right: "12px", fontSize: "10px", fontWeight: "700", background: tier.color, color: "#fff", padding: "2px 8px", borderRadius: "999px" }}>YOUR TIER</span>
                )}
                <p style={{ fontSize: "32px", margin: "0 0 8px" }}>{tier.icon}</p>
                <p style={{ fontSize: "18px", fontWeight: "800", color: tier.color, margin: "0 0 2px" }}>{tier.name}</p>
                <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 6px" }}>{tier.range}</p>
                <p style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "0 0 16px" }}>{tier.multiplier} <span style={{ fontSize: "13px", fontWeight: "400", color: "#6B7280" }}>multiplier</span></p>
                <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: "14px" }}>
                  {tier.perks.map((perk, i) => (
                    <div key={i} style={{ display: "flex", gap: "6px", marginBottom: "6px" }}>
                      <span style={{ color: ORANGE, fontWeight: "700", fontSize: "12px", flexShrink: 0, marginTop: "1px" }}>✓</span>
                      <span style={{ fontSize: "12px", color: "#374151" }}>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* REDEMPTION SECTION */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>1,000 points = $10</p>
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "0 0 24px" }}>Redeem for cash</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", overflow: "hidden" }}>
              <div style={{ background: NAVY, padding: "14px 20px", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", color: "#93C5FD", textTransform: "uppercase" }}>Points</span>
                <span style={{ fontSize: "12px", fontWeight: "700", color: "#93C5FD", textTransform: "uppercase" }}>Cash Value</span>
              </div>
              {REDEMPTION.map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "12px 20px", borderBottom: i < REDEMPTION.length - 1 ? "1px solid #F3F4F6" : "none", background: i % 2 === 0 ? "#fff" : "#F8FAFF" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#111827" }}>{row.pts.toLocaleString()}</span>
                  <span style={{ fontSize: "15px", fontWeight: "800", color: NAVY }}>{row.value}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
                <p style={{ fontWeight: "700", color: "#111827", margin: "0 0 12px", fontSize: "14px" }}>How to redeem</p>
                {["Reach 1,000+ redeemable points (45 days after trip completion)", "Click "Redeem Cash" in your account or below", "Choose your payout method: Zelle, Cash App, or Venmo", "Enter your payment handle and submit — processed in 2 business days"].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                    <span style={{ width: "20px", height: "20px", background: LIGHT_BLUE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", color: NAVY, flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ fontSize: "13px", color: "#374151", lineHeight: 1.5 }}>{step}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: LIGHT_BLUE, borderRadius: "14px", padding: "20px" }}>
                <p style={{ fontWeight: "700", color: NAVY, margin: "0 0 10px", fontSize: "14px" }}>Payment methods accepted</p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {PAYMENT_METHODS.map(m => (
                    <span key={m.id} style={{ fontSize: "13px", fontWeight: "600", color: NAVY, background: "#fff", padding: "6px 14px", borderRadius: "8px", border: `1px solid #BFDBFE` }}>{m.emoji} {m.label}</span>
                  ))}
                </div>
                <p style={{ fontSize: "12px", color: "#6B7280", margin: "10px 0 0" }}>Minimum: 1,000 points · Standard (free) transfers only · Processed within 2 business days</p>
              </div>
            </div>
          </div>

          {/* Redeem form — shown when signed in and eligible */}
          {session && canRedeem && (
            <div style={{ marginTop: "24px", background: "#fff", border: `2px solid ${ORANGE}`, borderRadius: "16px", padding: "28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                <div>
                  <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>🎉 You're eligible to redeem!</p>
                  <h3 style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: 0 }}>Request your cash payout</h3>
                </div>
                <span style={{ background: "#F0FDF4", color: "#16A34A", fontSize: "12px", fontWeight: "700", padding: "4px 12px", borderRadius: "999px", border: "1px solid #BBF7D0" }}>
                  {userPoints.toLocaleString()} pts available
                </span>
              </div>
              {redeemSubmitted ? (
                <div style={{ textAlign: "center", padding: "24px", background: "#F0FDF4", borderRadius: "12px" }}>
                  <p style={{ fontSize: "40px", margin: "0 0 12px" }}>✅</p>
                  <p style={{ fontWeight: "700", color: "#15803D", fontSize: "16px", margin: "0 0 6px" }}>Redemption request sent!</p>
                  <p style={{ fontSize: "13px", color: "#374151", margin: 0 }}>We'll process your payout within 2 business days. Check your email for confirmation.</p>
                </div>
              ) : (
                <form onSubmit={handleRedeemSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>Points to redeem</label>
                      <select value={redeemAmount} onChange={e => setRedeemAmount(Number(e.target.value))}
                        style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", background: "#fff", outline: "none" }}>
                        {REDEMPTION.filter(r => r.pts <= userPoints).map(r => (
                          <option key={r.pts} value={r.pts}>{r.pts.toLocaleString()} pts → {r.value}</option>
                        ))}
                      </select>
                    </div>
                    <div style={{ background: LIGHT_BLUE, borderRadius: "8px", padding: "10px 14px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <p style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", margin: "0 0 2px", textTransform: "uppercase" }}>You'll receive</p>
                      <p style={{ fontSize: "26px", fontWeight: "800", color: NAVY, margin: 0 }}>${(redeemAmount / 100).toFixed(2)}</p>
                    </div>
                  </div>
                  <div style={{ marginBottom: "16px" }}>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "8px" }}>Send payment via</label>
                    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                      {PAYMENT_METHODS.map(m => (
                        <button type="button" key={m.id} onClick={() => setRedeemMethod(m.id)}
                          style={{ padding: "10px 18px", borderRadius: "8px", border: `2px solid ${redeemMethod === m.id ? ORANGE : "#E5E7EB"}`, background: redeemMethod === m.id ? "#FFF7ED" : "#fff", fontWeight: "700", fontSize: "13px", cursor: "pointer", color: redeemMethod === m.id ? ORANGE : "#374151", transition: "all 0.15s" }}>
                          {m.emoji} {m.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>
                      {PAYMENT_METHODS.find(m => m.id === redeemMethod)?.label} — {PAYMENT_METHODS.find(m => m.id === redeemMethod)?.placeholder}
                    </label>
                    <input type="text" required
                      placeholder={PAYMENT_METHODS.find(m => m.id === redeemMethod)?.placeholder}
                      value={redeemHandle} onChange={e => setRedeemHandle(e.target.value)}
                      style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <button type="submit"
                    style={{ width: "100%", background: ORANGE, color: "#fff", border: "none", borderRadius: "10px", padding: "14px", fontSize: "15px", fontWeight: "700", cursor: "pointer", boxShadow: "0 4px 14px rgba(255,102,0,0.3)" }}>
                    💵 Submit Redemption Request →
                  </button>
                  <p style={{ textAlign: "center", fontSize: "11px", color: "#9CA3AF", margin: "10px 0 0" }}>Opens your email client · Processed within 2 business days · Standard (free) transfers only</p>
                </form>
              )}
            </div>
          )}

          {/* AUTO-PAY TOGGLE */}
          {session && (
            <div style={{ marginTop: "20px", background: "#fff", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "20px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: autoPayEnabled ? "20px" : "0" }}>
                <div>
                  <p style={{ fontWeight: "700", color: "#111827", margin: "0 0 3px", fontSize: "14px" }}>⚡ Auto-Payment</p>
                  <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>
                    Automatically send a redemption request the moment your 45-day hold clears.
                  </p>
                </div>
                {/* Toggle switch */}
                <button type="button" onClick={() => saveAutoPay(!autoPayEnabled)}
                  style={{ flexShrink: 0, marginLeft: "16px", width: "52px", height: "28px", borderRadius: "999px", border: "none", cursor: "pointer", background: autoPayEnabled ? ORANGE : "#D1D5DB", position: "relative", transition: "background 0.2s" }}>
                  <span style={{ position: "absolute", top: "3px", left: autoPayEnabled ? "27px" : "3px", width: "22px", height: "22px", borderRadius: "50%", background: "#fff", transition: "left 0.2s", boxShadow: "0 1px 4px rgba(0,0,0,0.2)" }} />
                </button>
              </div>

              {autoPayEnabled && (
                <div>
                  <p style={{ fontSize: "12px", color: "#374151", margin: "0 0 12px", padding: "10px 12px", background: "#FFF7ED", borderRadius: "8px", lineHeight: 1.5 }}>
                    💡 When enabled, we'll pre-fill your payment details below. You'll still receive an email to review before anything is sent.
                  </p>
                  <div style={{ marginBottom: "12px" }}>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "8px" }}>Preferred payment method</label>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {PAYMENT_METHODS.map(m => (
                        <button type="button" key={m.id} onClick={() => setAutoPayMethod(m.id)}
                          style={{ padding: "8px 14px", borderRadius: "8px", border: `2px solid ${autoPayMethod === m.id ? ORANGE : "#E5E7EB"}`, background: autoPayMethod === m.id ? "#FFF7ED" : "#fff", fontWeight: "700", fontSize: "12px", cursor: "pointer", color: autoPayMethod === m.id ? ORANGE : "#374151" }}>
                          {m.emoji} {m.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: "14px" }}>
                    <label style={{ display: "block", fontSize: "12px", fontWeight: "600", color: "#374151", marginBottom: "6px" }}>
                      {PAYMENT_METHODS.find(m => m.id === autoPayMethod)?.label} — {PAYMENT_METHODS.find(m => m.id === autoPayMethod)?.placeholder}
                    </label>
                    <input type="text"
                      placeholder={PAYMENT_METHODS.find(m => m.id === autoPayMethod)?.placeholder}
                      value={autoPayHandle} onChange={e => setAutoPayHandle(e.target.value)}
                      style={{ width: "100%", padding: "10px 14px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", outline: "none", boxSizing: "border-box" }} />
                  </div>
                  <button type="button" onClick={saveAutoPaySettings}
                    style={{ background: NAVY, color: "#fff", border: "none", borderRadius: "8px", padding: "10px 20px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
                    {autoPaySaved ? "✓ Saved!" : "Save auto-pay settings"}
                  </button>
                </div>
              )}
              {autoPaySaved && !autoPayEnabled && (
                <p style={{ fontSize: "12px", color: "#16A34A", fontWeight: "600", margin: "8px 0 0" }}>✓ Auto-pay turned off.</p>
              )}
            </div>
          )}

          {/* Not signed in nudge */}
          {!session && (
            <div style={{ marginTop: "24px", background: LIGHT_BLUE, borderRadius: "14px", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
              <div>
                <p style={{ fontWeight: "700", color: NAVY, margin: "0 0 4px" }}>Sign in to redeem your points</p>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>Create a free account to start earning and cash out once you hit 1,000 points.</p>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <a href="/account/signup" style={{ background: ORANGE, color: "#fff", padding: "10px 20px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", textDecoration: "none" }}>Join free →</a>
                <a href="/account/signin" style={{ background: "#fff", color: NAVY, padding: "10px 20px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", textDecoration: "none", border: `1.5px solid ${NAVY}` }}>Sign in</a>
              </div>
            </div>
          )}
        </section>

        {/* REFERRALS */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Both of you earn</p>
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Refer a friend, earn rewards</h2>
          <p style={{ fontSize: "14px", color: "#6B7280", margin: "0 0 24px" }}>When a friend books through your referral, you both earn bonus points — no cap in Year 1.</p>
          <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", overflow: "hidden", marginBottom: "16px" }}>
            <div style={{ background: NAVY, padding: "14px 20px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
              {["Friend Books","You Earn","Friend Earns"].map(h => (
                <span key={h} style={{ fontSize: "12px", fontWeight: "700", color: "#93C5FD", textTransform: "uppercase" }}>{h}</span>
              ))}
            </div>
            {REFERRAL.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "14px 20px", borderBottom: i < REFERRAL.length - 1 ? "1px solid #F3F4F6" : "none", background: i % 2 === 0 ? "#fff" : "#F8FAFF" }}>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}>{row.product}</span>
                <span style={{ fontSize: "14px", color: NAVY, fontWeight: "700" }}>{row.referrer}</span>
                <span style={{ fontSize: "14px", color: "#374151" }}>{row.friend}</span>
              </div>
            ))}
          </div>
          {session ? (
            <div style={{ background: LIGHT_BLUE, borderRadius: "12px", padding: "20px" }}>
              <p style={{ fontWeight: "700", color: NAVY, margin: "0 0 6px" }}>Your referral link</p>
              <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>Referral codes are coming soon — check back after launch!</p>
            </div>
          ) : (
            <div style={{ background: LIGHT_BLUE, borderRadius: "12px", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
              <p style={{ color: NAVY, fontWeight: "700", margin: 0 }}>Sign up to get your referral code</p>
              <a href="/account/signup" style={{ background: ORANGE, color: "#fff", padding: "10px 20px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", textDecoration: "none" }}>
                Join free →
              </a>
            </div>
          )}
        </section>

        {/* KEY POLICIES */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "0 0 24px" }}>Program rules & policies</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
            {[
              { icon: "⏰", title: "45-day hold", desc: "All points are redeemable 45 days after your trip is completed, not at time of booking." },
              { icon: "📅", title: "Points activation", desc: "Points post to your account after trip completion. Your profile tracks the countdown." },
              { icon: "🔄", title: "Expiration", desc: "Points expire after 3 years of inactivity. Any booking, referral, or redemption resets the clock." },
              { icon: "❌", title: "Cancellations", desc: "Points are voided if travel is not completed. Partial trips earn points for completed segments." },
              { icon: "🏆", title: "Tier status", desc: "Tiers are based on lifetime points — never reset for inactivity." },
              { icon: "👥", title: "Group bookings", desc: "Lead passenger account earns all points for group bookings." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "16px", display: "flex", gap: "12px" }}>
                <span style={{ fontSize: "20px", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>{item.title}</p>
                  <p style={{ fontSize: "12px", color: "#6B7280", margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "0 0 24px" }}>Common questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { q: "When do my points become redeemable?", a: "Points become available 45 days after your trip is completed. Your profile page shows a live countdown for each trip." },
              { q: "Is there a limit to how many points I can earn?", a: "No earning cap in Year 1. Earn as much as you travel." },
              { q: "Can I combine points with another member?", a: "Points gifting is not available at this time. Points are tied to the booking account." },
              { q: "How long does redemption take?", a: "Redemptions are processed within 2 business days via Zelle, Cash App, or Venmo — standard (free) transfers only." },
              { q: "What if my trip is delayed or rescheduled?", a: "The 45-day clock starts from your actual travel completion date, not the originally booked date." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "18px 20px" }}>
                <p style={{ fontSize: "14px", fontWeight: "700", color: "#111827", margin: "0 0 6px" }}>Q: {item.q}</p>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: 0, lineHeight: 1.5 }}>A: {item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=240&fit=crop&auto=format" alt="Start earning" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: `${NAVY}e8` }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#fff", margin: "0 0 8px" }}>Ready to start earning?</h2>
            <p style={{ color: "#BFDBFE", fontSize: "15px", margin: "0 0 24px" }}>Join free — no credit card required. Start earning on your first booking.</p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="/account/signup" style={{ background: ORANGE, color: "#fff", padding: "13px 28px", borderRadius: "10px", fontSize: "15px", fontWeight: "700", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.4)" }}>
                Join Rewards free →
              </a>
              <a href="/hotels" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "13px 28px", borderRadius: "10px", fontSize: "15px", fontWeight: "600", textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)" }}>
                Browse hotels
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

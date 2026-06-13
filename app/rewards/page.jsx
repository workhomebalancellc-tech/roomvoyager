"use client";

import { useState, useEffect, useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { getUserPoints, deductPoints } from "../../lib/points";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingChat from "../components/FloatingChat";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const TIERS = [
  { name: "Explorer", icon: "🧭", range: "0–9,999 pts", color: "#6B7280", perks: ["5 pts/$1 on flights & hotels · 10 pts/$1 on cruises & packages", "Double pts on hotels, cruises & packages", "Redeem points on our website", "No blackout dates"] },
  { name: "Voyager", icon: "⚓", range: "10,000–49,999 pts", color: NAVY, perks: ["🎂 Birthday bonus: 500 pts", "Exclusive member deals newsletter", "Early access to promotions", "Redeem points via website or email"] },
  { name: "Navigator", icon: "🗺️", range: "50,000–99,999 pts", color: "#7C3AED", perks: ["🎂 Birthday bonus: 500 pts", "Auto rewards payout at 50,000 pts", "Personalized trip planning consultation", "✈️ Complimentary air check-in assistance"] },
  { name: "Admiral", icon: "👑", range: "100,000+ pts", color: ORANGE, perks: ["🎂 Birthday bonus: 500 pts", "Auto rewards payout at 25,000 pts", "VIP concierge service", "✈️ Air + 🚢 cruise check-in assistance"] },
];

const EARNING_RATES = [
  { product: "Flights",           pts: 5,  doublePts: null, double: false, note: "Standard points only — not eligible for double" },
  { product: "Hotels",            pts: 5,  doublePts: 10,   double: true,  note: "Double points eligible · 10 pts/$1" },
  { product: "Cruises",           pts: 10, doublePts: 20,   double: true,  note: "Double points eligible · 20 pts/$1" },
  { product: "Vacation Packages", pts: 10, doublePts: 20,   double: true,  note: "Double points eligible · 20 pts/$1", hidden: true },
];

const REDEMPTION = [
  { pts: 10000, value: "$10" },
  { pts: 25000, value: "$25" },
  { pts: 50000, value: "$50" },
  { pts: 100000, value: "$100" },
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

function HotelIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 22V9L12 4L21 9V22" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 22V16H15V22" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill={color} fillOpacity="0.12"/>
      <rect x="7.5" y="11" width="2.5" height="2.5" rx="0.5" fill={color}/>
      <rect x="14" y="11" width="2.5" height="2.5" rx="0.5" fill={color}/>
    </svg>
  );
}

function FlightIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>
  );
}

function ShipIcon({ size = 24, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.7-.35 3.9-.99C9.1 22.65 10.52 23 12 23s2.9-.35 4.1-.99c1.2.64 2.52.99 3.9.99h2v-2h-2zM3.57 15h16.86l1.36-6H2.21l1.36 6zM12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  );
}

function EarningsSlider() {
  const [amount, setAmount]   = useState(1500);
  const [useDouble, setUseDouble] = useState(false);

  const PRODUCTS = [
    { id: "flight", label: "Flights",            ptsStd: 5,  ptsDbl: null, doubleOk: false },
    { id: "hotel",  label: "Hotels",             ptsStd: 5,  ptsDbl: 10,   doubleOk: true  },
    { id: "cruise", label: "Cruises & Packages", ptsStd: 10, ptsDbl: 20,   doubleOk: true  },
  ];

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "16px", padding: "28px 24px 24px" }}>
      {/* Amount display */}
      <div style={{ textAlign: "center", marginBottom: "8px" }}>
        <p style={{ fontSize: "11px", color: "#9CA3AF", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 4px" }}>Booking Amount</p>
        <p style={{ fontSize: "56px", fontWeight: "800", color: NAVY, margin: 0, lineHeight: 1 }}>
          ${amount.toLocaleString()}
        </p>
      </div>

      {/* Slider */}
      <div style={{ padding: "0 4px", marginBottom: "16px" }}>
        <input
          type="range" min={100} max={10000} step={50} value={amount}
          onChange={e => setAmount(Number(e.target.value))}
          style={{ width: "100%", accentColor: NAVY, cursor: "pointer" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#9CA3AF", fontWeight: "600", marginTop: "2px" }}>
          <span>$100</span><span>$2,500</span><span>$5,000</span><span>$7,500</span><span>$10,000</span>
        </div>
      </div>

      {/* Standard / Double toggle */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "16px" }}>
        <div style={{ display: "flex", background: "#F3F4F6", borderRadius: "10px", padding: "3px" }}>
          <button onClick={() => setUseDouble(false)}
            style={{ padding: "7px 22px", borderRadius: "8px", border: "none", background: !useDouble ? "#fff" : "transparent", color: !useDouble ? NAVY : "#9CA3AF", fontWeight: "700", fontSize: "13px", cursor: "pointer", boxShadow: !useDouble ? "0 1px 4px rgba(0,0,0,0.12)" : "none", transition: "all 0.15s" }}>
            Standard
          </button>
          <button onClick={() => setUseDouble(true)}
            style={{ padding: "7px 22px", borderRadius: "8px", border: "none", background: useDouble ? ORANGE : "transparent", color: useDouble ? "#fff" : "#9CA3AF", fontWeight: "700", fontSize: "13px", cursor: "pointer", transition: "all 0.15s" }}>
            Double 🔥
          </button>
        </div>
      </div>

      {/* Product rows */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {PRODUCTS.map(p => {
          const notEligible = useDouble && !p.doubleOk;
          const rate = (useDouble && p.doubleOk) ? p.ptsDbl : p.ptsStd;
          const pts  = Math.round(amount * rate);
          const cash = (pts / 1000).toFixed(2);
          const barPct = (pts / (10000 * 20)) * 100;

          return (
            <div key={p.id} style={{
              background: notEligible ? "#F9FAFB" : (useDouble && p.doubleOk ? `${ORANGE}08` : "#F8FAFF"),
              borderRadius: "12px", padding: "16px",
              border: `1.5px solid ${notEligible ? "#E5E7EB" : (useDouble && p.doubleOk ? `${ORANGE}40` : `${NAVY}20`)}`,
              opacity: notEligible ? 0.65 : 1,
              transition: "all 0.2s",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "10px" }}>
                <div style={{ width: "42px", height: "42px", borderRadius: "10px", background: notEligible ? "#F3F4F6" : (useDouble && p.doubleOk ? `${ORANGE}15` : `${NAVY}12`), display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {p.id === "hotel"  && <HotelIcon  size={22} color={notEligible ? "#9CA3AF" : (useDouble && p.doubleOk ? ORANGE : NAVY)} />}
                  {p.id === "flight" && <FlightIcon size={22} color={notEligible ? "#9CA3AF" : NAVY} />}
                  {p.id === "cruise" && <ShipIcon   size={22} color={notEligible ? "#9CA3AF" : (useDouble && p.doubleOk ? ORANGE : NAVY)} />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ fontWeight: "700", color: notEligible ? "#6B7280" : "#111827", margin: 0, fontSize: "14px" }}>{p.label}</p>
                  <p style={{ fontSize: "11px", color: "#9CA3AF", margin: 0 }}>
                    {notEligible
                      ? "Not eligible for double — standard only"
                      : `${rate} pts per $1 · ${useDouble && p.doubleOk ? "double 🔥" : "standard"}`}
                  </p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <p style={{ fontWeight: "800", fontSize: "26px", color: notEligible ? "#6B7280" : (useDouble && p.doubleOk ? ORANGE : NAVY), margin: 0, lineHeight: 1 }}>
                    {pts.toLocaleString()}
                  </p>
                  <p style={{ fontSize: "12px", color: "#6B7280", margin: "2px 0 0" }}>
                    pts = <strong style={{ color: notEligible ? "#9CA3AF" : "#16A34A" }}>${cash}</strong>
                  </p>
                </div>
              </div>
              <div style={{ height: "5px", background: "#E5E7EB", borderRadius: "999px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${Math.min(barPct, 100)}%`, background: notEligible ? "#D1D5DB" : (useDouble && p.doubleOk ? ORANGE : NAVY), borderRadius: "999px", transition: "width 0.15s ease" }} />
              </div>
            </div>
          );
        })}
      </div>

      <p style={{ fontSize: "11px", color: "#9CA3AF", margin: "14px 0 0", textAlign: "center", lineHeight: 1.5 }}>
        Cash back available 45 days after trip completion · Points calculated per $1 of booking value
      </p>
    </div>
  );
}

export default function RewardsPage() {
  const { user: session } = useAuth();
  const [userPoints, setUserPoints]           = useState(0);
  const [lifetimePoints, setLifetimePoints]   = useState(0);
  const cashValue = (userPoints / 1000).toFixed(2);
  const canRedeem = userPoints >= 10000;

  const redeemRef = useRef(null);
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [redeemAmount, setRedeemAmount] = useState(10000);
  const [redeemMethod, setRedeemMethod] = useState("zelle");
  const [redeemHandle, setRedeemHandle] = useState("");
  const [redeemSubmitted, setRedeemSubmitted] = useState(false);

  // Auto-pay toggle
  const [autoPayEnabled, setAutoPayEnabled] = useState(false);
  const [autoPayMethod, setAutoPayMethod] = useState("zelle");
  const [autoPayHandle, setAutoPayHandle] = useState("");
  const [autoPaySaved, setAutoPaySaved] = useState(false);

  useEffect(() => {
    if (session?.uid) {
      fetch(`/api/user/points?uid=${session.uid}`)
        .then(r => r.json())
        .then(d => {
          setUserPoints(d.points || 0);
          setLifetimePoints(d.lifetimePoints || 0);
        })
        .catch(() => {});
    }

    const saved = localStorage.getItem("rv_autopay");
    if (saved) {
      try {
        const p = JSON.parse(saved);
        setAutoPayEnabled(p.enabled || false);
        setAutoPayMethod(p.method || "zelle");
        setAutoPayHandle(p.handle || "");
      } catch {}
    }
  }, [session?.uid]);

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
    if (lifetimePoints >= 100000) return TIERS[3];
    if (lifetimePoints >= 50000)  return TIERS[2];
    if (lifetimePoints >= 10000)  return TIERS[1];
    return TIERS[0];
  }

  const currentTier = getCurrentTier();

  const [redeemError, setRedeemError] = useState("");
  const [redeemLoading, setRedeemLoading] = useState(false);

  async function handleRedeemSubmit(e) {
    e.preventDefault();
    const method = PAYMENT_METHODS.find(m => m.id === redeemMethod);
    const cashOut = (redeemAmount / 1000).toFixed(2);
    setRedeemLoading(true);
    setRedeemError("");

    try {
      // Submit redemption request
      const res = await fetch('/api/redemptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:           session?.name || 'Unknown',
          email:          session?.email || '',
          pointsRedeemed: redeemAmount,
          cashValue:      parseFloat(cashOut),
          paymentMethod:  method?.label,
          paymentHandle:  redeemHandle,
        })
      });
      if (!res.ok) throw new Error('Submission failed');

      // Deduct points via server-side API (bypasses CSP)
      if (session?.email) {
        await fetch('/api/admin/firestore', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'deductPoints',
            email:  session.email,
            amount: redeemAmount,
          }),
        });
      }

      const newPoints = Math.max(0, userPoints - redeemAmount);
      setUserPoints(newPoints);
      setRedeemSubmitted(true);
    } catch (err) {
      setRedeemError("Something went wrong. Please email us at roomvoyager@protonmail.com to request your redemption.");
    } finally {
      setRedeemLoading(false);
    }
  }

  return (
    <>
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      <NavBar active="rewards" />

      {/* HERO */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&h=700&fit=crop&auto=format" alt="Travel rewards" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to bottom, ${NAVY}cc 0%, ${NAVY}f0 100%)` }} />
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "64px 24px 56px", textAlign: "center" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.14em", margin: "0 0 12px" }}>💰 Cash Back Loyalty Program</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 5vw, 46px)", fontWeight: "800", margin: "0 0 12px", lineHeight: 1.15, textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>RoomVoyager Rewards</h1>
          <p style={{ color: "#BFDBFE", fontSize: "17px", margin: "0 0 36px", maxWidth: "520px", lineHeight: 1.6 }}>
            Earn cash back on every booking — double points on hotels, cruises & packages. Paid via Zelle, Cash App, or Venmo. No blackout dates. Real money.
          </p>
          {session ? (
            <div style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", borderRadius: "20px", padding: "32px 40px", border: "1px solid rgba(255,255,255,0.2)", width: "100%", maxWidth: "780px", boxSizing: "border-box" }}>
              {/* Row 1 — main stats */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", marginBottom: "28px", paddingBottom: "24px", borderBottom: "1px solid rgba(255,255,255,0.15)" }}>
                <div>
                  <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Welcome Back</p>
                  <p style={{ color: "#fff", fontSize: "22px", fontWeight: "800", margin: 0 }}>{session.name?.split(" ")[0] || "Traveler"}</p>
                </div>
                <div>
                  <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Your Points</p>
                  <p style={{ color: "#fff", fontSize: "36px", fontWeight: "800", margin: 0 }}>{userPoints.toLocaleString()}</p>
                </div>
                <div>
                  <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Cash Value</p>
                  <p style={{ color: "#fff", fontSize: "36px", fontWeight: "800", margin: 0 }}>${cashValue}</p>
                </div>
              </div>
              {/* Row 2 — secondary stats + redeem */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", alignItems: "center" }}>
                <div>
                  <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Lifetime Earned</p>
                  <p style={{ color: "#fff", fontSize: "22px", fontWeight: "800", margin: 0 }}>{lifetimePoints.toLocaleString()} pts</p>
                </div>
                <div>
                  <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", margin: "0 0 6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>Your Tier</p>
                  <p style={{ color: "#fff", fontSize: "22px", fontWeight: "700", margin: 0 }}>{currentTier.icon} {currentTier.name}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {canRedeem ? (
                    <button onClick={() => { setRedeemSubmitted(false); redeemRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }); }}
                      style={{ background: ORANGE, color: "#fff", padding: "12px 28px", borderRadius: "10px", fontSize: "15px", fontWeight: "700", border: "none", cursor: "pointer", boxShadow: "0 4px 14px rgba(255,102,0,0.4)", width: "100%" }}>
                      Redeem Cash →
                    </button>
                  ) : (
                    <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", margin: 0 }}>Need 10,000 pts to redeem</p>
                  )}
                </div>
              </div>
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
          {[["✅","Free to join"],["💵","Real cash payouts"],["🔥","Double points on cruises, hotels & packages"],["🚫","No blackout dates"],["⏰","Available 45 days post-travel"],["📲","Zelle · Cash App · Venmo"]].map(([icon,text],i) => (
            <div key={i} style={{ display:"flex", alignItems:"center", gap:"6px", fontSize:"13px", color:"#BFDBFE", fontWeight: "500" }}><span>{icon}</span><span>{text}</span></div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* VIDEO SECTION */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>See how it works</p>
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Watch: RoomVoyager Rewards explained</h2>
          <p style={{ fontSize: "14px", color: "#6B7280", margin: "0 0 20px" }}>Everything you need to know about earning, waiting, and cashing out.</p>
          <div style={{ position: "relative", background: NAVY, borderRadius: "16px", overflow: "hidden", aspectRatio: "16/9", maxHeight: "480px", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {/* Replace the src below with your YouTube embed URL: https://www.youtube.com/embed/YOUR_VIDEO_ID */}
            {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="RoomVoyager Rewards" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} /> */}
            <div style={{ textAlign: "center", padding: "40px 24px" }}>
              <div style={{ width: "72px", height: "72px", background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", boxShadow: "0 8px 24px rgba(255,102,0,0.4)" }}>
                <span style={{ fontSize: "28px", marginLeft: "4px" }}>▶</span>
              </div>
              <p style={{ color: "#fff", fontSize: "18px", fontWeight: "700", margin: "0 0 8px" }}>How RoomVoyager Rewards Works</p>
              <p style={{ color: "#93C5FD", fontSize: "13px", margin: 0 }}>Video coming soon — check back after launch!</p>
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
              { step: "2", icon: "⭐", title: "Earn points on your booking", desc: "5 pts per $1 on flights & hotels · 10 pts per $1 on cruises & packages. Double available on hotels, cruises & packages. Points may take up to 7 days to appear after your booking is confirmed in our system." },
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


        {/* EARNINGS SLIDER */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>See what you'd earn</p>
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Earnings calculator</h2>
          <p style={{ fontSize: "14px", color: "#6B7280", margin: "0 0 24px" }}>Drag the slider to any booking amount and see exactly how many points — and how much cash — you'd earn across hotels, flights, and cruises.</p>
          <EarningsSlider />
        </section>

        {/* TIERS */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>Lifetime points</p>
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "0 0 24px" }}>Membership tiers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {TIERS.map(tier => {
              // Tier is always determined by lifetimePoints — redeeming cash never changes your tier
              const isCurrentTier = session && currentTier.name === tier.name;
              return (
              <div key={tier.name} style={{ background: "#fff", border: `2px solid ${isCurrentTier ? tier.color : "#E5E7EB"}`, borderRadius: "14px", padding: "20px", position: "relative" }}>
                {isCurrentTier && (
                  <span style={{ position: "absolute", top: "12px", right: "12px", fontSize: "10px", fontWeight: "700", background: tier.color, color: "#fff", padding: "2px 8px", borderRadius: "999px" }}>YOUR TIER</span>
                )}
                <p style={{ fontSize: "32px", margin: "0 0 8px" }}>{tier.icon}</p>
                <p style={{ fontSize: "18px", fontWeight: "800", color: tier.color, margin: "0 0 2px" }}>{tier.name}</p>
                <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 16px" }}>{tier.range}</p>
                <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: "14px" }}>
                  {tier.perks.map((perk, i) => (
                    <div key={i} style={{ display: "flex", gap: "6px", marginBottom: "6px" }}>
                      <span style={{ color: ORANGE, fontWeight: "700", fontSize: "12px", flexShrink: 0, marginTop: "1px" }}>✓</span>
                      <span style={{ fontSize: "12px", color: "#374151" }}>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
              );
            })}
          </div>
        </section>

        {/* REDEMPTION SECTION */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: ORANGE, fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 6px" }}>10,000 POINTS = $10</p>
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
                {["Reach 10,000+ redeemable points = $10 minimum (45 days after trip completion)", "Click 'Redeem Cash' in your account or below", "Choose your payout method: Zelle, Cash App, or Venmo", "Enter your payment handle and submit — processed in 2 business days"].map((step, i) => (
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
                <p style={{ fontSize: "12px", color: "#6B7280", margin: "10px 0 0" }}>Minimum: 10,000 points ($10) · Standard (free) transfers only · Processed within 2 business days</p>
              </div>
            </div>
          </div>

          {/* Redeem button — always visible */}
          <div style={{ marginTop: "24px", textAlign: "center" }}>
            {session ? (
              canRedeem ? (
                <button onClick={() => { setRedeemSubmitted(false); redeemRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }); }}
                  style={{ background: ORANGE, color: "#fff", padding: "14px 36px", borderRadius: "12px", fontSize: "16px", fontWeight: "700", border: "none", cursor: "pointer", boxShadow: "0 4px 18px rgba(255,102,0,0.35)" }}>
                  🎉 Redeem Cash →
                </button>
              ) : (
                <div style={{ display: "inline-block", background: LIGHT_BLUE, borderRadius: "12px", padding: "14px 28px" }}>
                  <p style={{ color: NAVY, fontWeight: "700", fontSize: "15px", margin: "0 0 4px" }}>You have {userPoints.toLocaleString()} pts</p>
                  <p style={{ color: "#6B7280", fontSize: "13px", margin: 0 }}>{(10000 - userPoints).toLocaleString()} more points until you can redeem ($10 minimum)</p>
                </div>
              )
            ) : (
              <a href="/account/signup" style={{ display: "inline-block", background: ORANGE, color: "#fff", padding: "14px 36px", borderRadius: "12px", fontSize: "16px", fontWeight: "700", textDecoration: "none", boxShadow: "0 4px 18px rgba(255,102,0,0.35)" }}>
                Join Free to Start Redeeming →
              </a>
            )}
          </div>

          {/* Redeem form — shown when signed in and eligible */}
          {session && canRedeem && (
            <div ref={redeemRef} style={{ marginTop: "24px", background: "#fff", border: `2px solid ${ORANGE}`, borderRadius: "16px", padding: "28px" }}>
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
                      <p style={{ fontSize: "26px", fontWeight: "800", color: NAVY, margin: 0 }}>${(redeemAmount / 1000).toFixed(2)}</p>
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
                  {redeemError && (
                    <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", color: "#DC2626", padding: "12px", borderRadius: "8px", fontSize: "13px", marginBottom: "12px" }}>
                      {redeemError}
                    </div>
                  )}
                  <button type="submit" disabled={redeemLoading}
                    style={{ width: "100%", background: ORANGE, color: "#fff", border: "none", borderRadius: "10px", padding: "14px", fontSize: "15px", fontWeight: "700", cursor: redeemLoading ? "not-allowed" : "pointer", opacity: redeemLoading ? 0.7 : 1, boxShadow: "0 4px 14px rgba(255,102,0,0.3)" }}>
                    {redeemLoading ? "Submitting..." : "💵 Redeem"}
                  </button>
                  <p style={{ textAlign: "center", fontSize: "11px", color: "#9CA3AF", margin: "10px 0 0" }}>Processed within 2 business days · Standard (free) transfers only</p>
                </form>
              )}
            </div>
          )}


          {/* Not signed in nudge */}
          {!session && (
            <div style={{ marginTop: "24px", background: LIGHT_BLUE, borderRadius: "14px", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
              <div>
                <p style={{ fontWeight: "700", color: NAVY, margin: "0 0 4px" }}>Sign in to redeem your points</p>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>Create a free account to start earning and cash out once you hit 10,000 points ($10).</p>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <a href="/account/signup" style={{ background: ORANGE, color: "#fff", padding: "10px 20px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", textDecoration: "none" }}>Join free →</a>
                <a href="/account/signin" style={{ background: "#fff", color: NAVY, padding: "10px 20px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", textDecoration: "none", border: `1.5px solid ${NAVY}` }}>Sign in</a>
              </div>
            </div>
          )}
        </section>

        {/* REFERRALS — simplified */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#111827", margin: "0 0 16px" }}>Refer a friend, both earn</h2>
          <div style={{ background: LIGHT_BLUE, borderRadius: "14px", padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <div>
              <p style={{ fontWeight: "700", color: NAVY, margin: "0 0 4px" }}>200–500 bonus points for you and your friend</p>
              <p style={{ fontSize: "13px", color: "#374151", margin: 0 }}>Flights: 200 pts · Hotels: 350 pts · Cruises & packages: 500 pts. Referral codes coming soon.</p>
            </div>
            <a href="/account/signup" style={{ background: ORANGE, color: "#fff", padding: "10px 20px", borderRadius: "8px", fontSize: "13px", fontWeight: "700", textDecoration: "none", flexShrink: 0 }}>
              Join free →
            </a>
          </div>
        </section>

        {/* CTA */}
        <div style={{ position: "relative", overflow: "hidden", borderRadius: "20px" }}>
          <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1400&h=220&fit=crop&auto=format" alt="Airplane wing" style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "20px" }} />
          <div style={{ position: "absolute", inset: 0, background: `${NAVY}e0`, borderRadius: "20px" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 40px", gap: "12px" }}>
            <div>
              <h2 style={{ fontSize: "20px", fontWeight: "800", color: "#fff", margin: "0 0 6px" }}>Ready to start earning?</h2>
              <p style={{ color: "#BFDBFE", fontSize: "14px", margin: 0 }}>Join free — no credit card required. Start earning on your first booking.</p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
              <a href="/account/signup" style={{ background: ORANGE, color: "#fff", padding: "12px 28px", borderRadius: "10px", fontSize: "15px", fontWeight: "700", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.4)", whiteSpace: "nowrap" }}>
                Join Rewards free →
              </a>
              <a href="/hotels" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "12px 28px", borderRadius: "10px", fontSize: "15px", fontWeight: "600", textDecoration: "none", border: "1px solid rgba(255,255,255,0.3)", whiteSpace: "nowrap" }}>
                Browse hotels
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FloatingChat />
    <Footer />
    </>
  );
}

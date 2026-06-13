"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";

const NAVY       = "#003B95";
const ORANGE     = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const PRODUCT_META = {
  cruise:  { icon: "🚢", label: "Cruise",          ptsStd: 10, ptsDbl: 20,   color: "#003B95" },
  hotel:   { icon: "🏨", label: "Hotel",            ptsStd: 5,  ptsDbl: 10,   color: "#7C3AED" },
  flight:  { icon: "✈️", label: "Flight",           ptsStd: 5,  ptsDbl: null, color: "#0EA5E9" },
  package: { icon: "🌴", label: "Vacation Package", ptsStd: 10, ptsDbl: 20,   color: "#16A34A" },
};

const COUNTDOWN_SECS = 5;

function RedirectContent() {
  const params      = useSearchParams();
  const { user }    = useAuth();

  const to       = params.get("to")      || "";
  const partner  = params.get("partner") || "Our Partner";
  const product  = params.get("product") || "cruise";
  const amount   = parseInt(params.get("amount") || "0", 10); // optional estimated pts

  const meta     = PRODUCT_META[product] || PRODUCT_META.cruise;
  const estPts   = amount ? amount * (meta.ptsDbl ?? meta.ptsStd) : null;

  const [count,    setCount]    = useState(COUNTDOWN_SECS);
  const [gone,     setGone]     = useState(false);
  const [logged,   setLogged]   = useState(false);
  const loggedRef = useRef(false);


  // Log click to Airtable once
  useEffect(() => {
    if (!to || loggedRef.current) return;
    loggedRef.current = true;
    fetch("/api/link-clicks", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        partner,
        product,
        url:       to,
        userEmail: user?.email || "Guest",
        userName:  user?.name  || "",
      }),
    })
      .then(() => setLogged(true))
      .catch(() => setLogged(true));
  }, [to, partner, product, user]);

  // Countdown
  useEffect(() => {
    if (!to) return;
    const t = setInterval(() => {
      setCount(c => {
        if (c <= 1) {
          clearInterval(t);
          setGone(true);
          window.location.href = to;
          return 0;
        }
        return c - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [to]);

  function goNow() {
    setGone(true);
    window.location.href = to;
  }

  if (!to) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, sans-serif", background: "#F8FAFF" }}>
        <div style={{ textAlign: "center", padding: "40px" }}>
          <p style={{ fontSize: "40px", margin: "0 0 16px" }}>⚠️</p>
          <p style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>No destination provided.</p>
          <a href="/" style={{ color: NAVY, fontSize: "14px" }}>← Back to RoomVoyager</a>
        </div>
      </div>
    );
  }

  const circumference = 2 * Math.PI * 22; // r=22
  const progress = ((COUNTDOWN_SECS - count) / COUNTDOWN_SECS) * circumference;

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif", display: "flex", flexDirection: "column" }}>

      {/* Top bar */}
      <div style={{ background: NAVY, padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontSize: "18px", fontWeight: "800", color: "#fff", textDecoration: "none" }}>
          Room<span style={{ color: ORANGE }}>Voyager</span>
        </a>
        <span style={{ fontSize: "12px", color: "#93C5FD" }}>Secure redirect</span>
      </div>

      {/* Card */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 16px" }}>
        <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 8px 40px rgba(0,0,0,0.10)", maxWidth: "440px", width: "100%", overflow: "hidden" }}>

          {/* Illustration band */}
          <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${meta.color} 100%)`, padding: "32px 24px 28px", textAlign: "center" }}>
            <div style={{ fontSize: "56px", lineHeight: 1, marginBottom: "12px" }}>{meta.icon}</div>
            <p style={{ color: "#fff", fontSize: "20px", fontWeight: "800", margin: "0 0 4px" }}>
              You're heading to {partner}
            </p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", margin: 0 }}>
              RoomVoyager never adds fees to your booking
            </p>
          </div>

          {/* Body */}
          <div style={{ padding: "28px 24px" }}>

            {/* Trust bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
              {[
                ["✅", "We searched the best available rates for you"],
                ["🔒", "Your booking is made directly with " + partner],
                ["💵", "No markups — RoomVoyager earns a small commission from the partner, not you"],
              ].map(([icon, text], i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "15px", flexShrink: 0, marginTop: "1px" }}>{icon}</span>
                  <span style={{ fontSize: "13px", color: "#374151", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Points earned badge */}
            {estPts ? (
              <div style={{ background: "#FFF7ED", border: `1.5px solid ${ORANGE}40`, borderRadius: "12px", padding: "14px 16px", display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
                <span style={{ fontSize: "24px" }}>🎉</span>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: ORANGE, margin: "0 0 2px", textTransform: "uppercase" }}>Points you'll earn</p>
                  <p style={{ fontSize: "20px", fontWeight: "800", color: NAVY, margin: "0 0 2px" }}>
                    {estPts.toLocaleString()} pts
                  </p>
                  <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>
                    = ${(estPts / 1000).toFixed(2)} cash back · available 45 days after travel
                  </p>
                </div>
              </div>
            ) : (
              <div style={{ background: LIGHT_BLUE, borderRadius: "12px", padding: "14px 16px", display: "flex", gap: "12px", alignItems: "center", marginBottom: "24px" }}>
                <span style={{ fontSize: "22px" }}>⭐</span>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: "700", color: NAVY, margin: "0 0 2px" }}>Earn rewards on this booking</p>
                  <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>
                    {meta.ptsDbl
                      ? `Earn up to ${meta.ptsDbl} pts per $1 on ${meta.label.toLowerCase()}s`
                      : `Earn ${meta.ptsStd} pts per $1 on ${meta.label.toLowerCase()}s`}
                  </p>
                </div>
              </div>
            )}

            {/* Continue button + countdown */}
            <button
              onClick={goNow}
              disabled={gone}
              style={{
                width: "100%", padding: "15px 24px", background: gone ? "#D1D5DB" : NAVY,
                color: "#fff", border: "none", borderRadius: "12px", fontSize: "16px",
                fontWeight: "700", cursor: gone ? "default" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                boxShadow: gone ? "none" : "0 4px 16px rgba(0,59,149,0.25)",
                transition: "background 0.2s",
              }}>
              {gone ? (
                <span>Redirecting…</span>
              ) : (
                <>
                  {/* Circular countdown */}
                  <svg width="28" height="28" style={{ transform: "rotate(-90deg)", flexShrink: 0 }}>
                    <circle cx="14" cy="14" r="11" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2.5" />
                    <circle cx="14" cy="14" r="11" fill="none" stroke="#fff" strokeWidth="2.5"
                      strokeDasharray={`${2 * Math.PI * 11}`}
                      strokeDashoffset={`${2 * Math.PI * 11 * (count / COUNTDOWN_SECS)}`}
                      style={{ transition: "stroke-dashoffset 1s linear" }} />
                    <text x="14" y="14" textAnchor="middle" dominantBaseline="central"
                      style={{ transform: "rotate(90deg)", transformOrigin: "14px 14px", fill: "#fff", fontSize: "9px", fontWeight: "800" }}>
                      {count}
                    </text>
                  </svg>
                  <span>Continue to {partner}</span>
                  <span style={{ fontSize: "18px", marginLeft: "auto" }}>→</span>
                </>
              )}
            </button>

            <p style={{ textAlign: "center", fontSize: "11px", color: "#9CA3AF", margin: "12px 0 0" }}>
              Auto-redirecting in {count}s · <a href="/" style={{ color: "#9CA3AF" }}>Cancel and go back</a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "16px 24px", textAlign: "center", borderTop: "1px solid #E5E7EB" }}>
        <p style={{ fontSize: "11px", color: "#9CA3AF", margin: 0 }}>
          RoomVoyager is your trusted travel partner. We may earn a commission when you book through our links — at no extra cost to you.{" "}
          <a href="/rewards" style={{ color: "#9CA3AF" }}>Learn about Rewards →</a>
        </p>
      </div>
    </div>
  );
}

export default function RedirectPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F8FAFF" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>✈️</div>
          <p style={{ fontSize: "16px", color: "#6B7280", fontFamily: "system-ui, sans-serif" }}>Loading…</p>
        </div>
      </div>
    }>
      <RedirectContent />
    </Suspense>
  );
}

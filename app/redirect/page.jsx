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

const pulseStyle = `
  @keyframes rv-pulse {
    0%   { box-shadow: 0 0 0 0 rgba(255,102,0,0.55); }
    70%  { box-shadow: 0 0 0 12px rgba(255,102,0,0); }
    100% { box-shadow: 0 0 0 0 rgba(255,102,0,0); }
  }
  .rv-pulse-btn { animation: rv-pulse 1.6s ease-out infinite; }
`;

function RedirectContent() {
  const params               = useSearchParams();
  const { user, loading }    = useAuth();

  const to      = params.get("to")      || "";
  const partner = params.get("partner") || "Our Partner";
  const product = params.get("product") || "hotel";
  const amount  = parseInt(params.get("amount") || "0", 10);

  const meta   = PRODUCT_META[product] || PRODUCT_META.hotel;
  const estPts = amount ? amount * (meta.ptsDbl ?? meta.ptsStd) : null;

  const [emailInput, setEmailInput] = useState("");
  const [emailReady, setEmailReady] = useState(false);
  const [gone,       setGone]       = useState(false);
  const loggedRef                   = useRef(false);

  // Once auth resolves: if user is logged in, mark email ready automatically
  useEffect(() => {
    if (!loading && user?.email) {
      setEmailReady(true);
    }
  }, [loading, user]);

  // Log to Airtable + add to Brevo account list once emailReady is true (logged-in users)
  useEffect(() => {
    if (!to || !emailReady || loggedRef.current) return;
    loggedRef.current = true;
    fetch("/api/link-clicks", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        partner,
        product,
        url:         to,
        userEmail:   user?.email || emailInput || "Guest",
        userName:    user?.name  || "",
        utmSource:   sessionStorage.getItem("utm_source")   || "",
        utmMedium:   sessionStorage.getItem("utm_medium")   || "",
        utmCampaign: sessionStorage.getItem("utm_campaign") || "",
      }),
    }).catch(() => {});
    // Add logged-in user to the account-specific Brevo list for the "no booking" re-engagement sequence
    if (user?.email) {
      const accountListMap = { hotel: "account-hotel", flight: "account-flight", cruise: "account-cruise" };
      const listType = accountListMap[product] || "account-created";
      fetch("/api/brevo/add-contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email:     user.email,
          firstName: user.name?.split(" ")[0] || "",
          listType,
        }),
      }).catch(() => {});
    }
  }, [to, emailReady]);


  function goNow() {
    setGone(true);
    window.location.href = to;
  }

  function handleEmailSubmit(e) {
    e.preventDefault();
    if (!emailInput.trim()) return;
    // Log to Airtable (fire and forget) then go directly to partner
    fetch("/api/link-clicks", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        partner,
        product,
        url:         to,
        userEmail:   emailInput,
        userName:    "",
        utmSource:   sessionStorage.getItem("utm_source")   || "",
        utmMedium:   sessionStorage.getItem("utm_medium")   || "",
        utmCampaign: sessionStorage.getItem("utm_campaign") || "",
      }),
    }).catch(() => {});
    // Add to the right Brevo searcher list based on product
    const listTypeMap = { hotel: "searcher-hotel", flight: "searcher-flight", cruise: "searcher-cruise" };
    const listType = listTypeMap[product] || "searcher-hotel";
    sessionStorage.setItem("rv_interest", product); // store for signup upgrade flow
    fetch("/api/brevo/add-contact", {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emailInput, listType }),
    }).catch(() => {});
    window.location.href = to;
  }

  // ── No destination ──────────────────────────────────────────────────────
  if (!to) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F8FAFF", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ textAlign: "center", padding: "40px" }}>
          <p style={{ fontSize: "40px", margin: "0 0 16px" }}>⚠️</p>
          <p style={{ fontSize: "18px", fontWeight: "700", color: "#111827" }}>No destination provided.</p>
          <a href="/" style={{ color: NAVY, fontSize: "14px" }}>← Back to RoomVoyager</a>
        </div>
      </div>
    );
  }

  // ── Auth loading spinner ────────────────────────────────────────────────
  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F8FAFF", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "16px" }}>✈️</div>
          <p style={{ fontSize: "16px", color: "#6B7280" }}>Loading…</p>
        </div>
      </div>
    );
  }

  // ── Email capture gate + disclosure (guests only) ─────────────────────
  if (!user && !emailReady) {
    return (
      <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif", display: "flex", flexDirection: "column" }}>
        <style>{pulseStyle}</style>
        <div style={{ background: NAVY, padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ fontSize: "18px", fontWeight: "800", color: "#fff", textDecoration: "none" }}>Room<span style={{ color: ORANGE }}>Voyager</span></a>
          <span style={{ fontSize: "12px", color: "#93C5FD" }}>Secure redirect</span>
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 16px" }}>
          <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 8px 40px rgba(0,0,0,0.10)", maxWidth: "440px", width: "100%", overflow: "hidden" }}>

            {/* Header */}
            <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${meta.color} 100%)`, padding: "28px 24px 24px", textAlign: "center" }}>
              <div style={{ fontSize: "44px", marginBottom: "8px" }}>{meta.icon}</div>
              <p style={{ color: "#fff", fontSize: "19px", fontWeight: "800", margin: "0 0 4px" }}>You're heading to {partner}</p>
              <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px", margin: 0 }}>RoomVoyager never adds fees to your booking</p>
            </div>

            <div style={{ padding: "24px 24px 28px" }}>

              {/* Disclosure bullets */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
                {[
                  ["✅", "We searched the best available rates for you"],
                  ["🔒", "Your booking is made directly with " + partner],
                  ["💵", "No markups — RoomVoyager earns a small commission from the partner, not you"],
                ].map(([icon, text], i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>{icon}</span>
                    <span style={{ fontSize: "13px", color: "#374151", lineHeight: 1.5 }}>{text}</span>
                  </div>
                ))}
              </div>

              {/* Rewards blurb */}
              <div style={{ background: LIGHT_BLUE, borderRadius: "12px", padding: "12px 14px", display: "flex", gap: "10px", alignItems: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "20px" }}>🏆</span>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: "700", color: NAVY, margin: "0 0 2px" }}>Earn rewards on this booking</p>
                  <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>
                    {meta.ptsDbl
                      ? `Earn up to ${meta.ptsDbl} pts per $1 on ${meta.label.toLowerCase()}s`
                      : `Earn ${meta.ptsStd} pts per $1 on ${meta.label.toLowerCase()}s`}
                  </p>
                </div>
              </div>

              {/* Email form */}
              <form onSubmit={handleEmailSubmit}>
                <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#374151", marginBottom: "8px" }}>
                  Enter your email to claim your points
                </label>
                <input
                  type="email"
                  required
                  autoFocus
                  placeholder="you@example.com"
                  value={emailInput}
                  onChange={e => setEmailInput(e.target.value)}
                  style={{ width: "100%", padding: "13px 14px", fontSize: "15px", border: "1.5px solid #D1D5DB", borderRadius: "10px", outline: "none", marginBottom: "12px", boxSizing: "border-box", fontFamily: "system-ui, sans-serif" }}
                />
                <button
                  type="submit"
                  className="rv-pulse-btn"
                  style={{ width: "100%", padding: "14px", background: NAVY, color: "#fff", border: "none", borderRadius: "12px", fontSize: "15px", fontWeight: "800", cursor: "pointer", boxShadow: "0 4px 14px rgba(0,59,149,0.25)" }}
                >
                  Continue to {partner} →
                </button>
                <p style={{ textAlign: "center", fontSize: "11px", color: "#9CA3AF", margin: "12px 0 0", lineHeight: 1.5 }}>
                  We'll use this to award your points. No spam — ever.{" "}
                  <a href="/rewards" style={{ color: NAVY }}>How rewards work →</a>
                </p>
                <p style={{ textAlign: "center", fontSize: "11px", color: "#9CA3AF", margin: "8px 0 0" }}>
                  <a href="/" style={{ color: "#9CA3AF" }}>Cancel and go back</a>
                </p>
              </form>

            </div>
          </div>
        </div>

        <div style={{ padding: "16px 24px", textAlign: "center", borderTop: "1px solid #E5E7EB" }}>
          <p style={{ fontSize: "11px", color: "#9CA3AF", margin: 0 }}>
            RoomVoyager is your trusted travel partner. We may earn a commission when you book through our links — at no extra cost to you.{" "}
            <a href="/rewards" style={{ color: "#9CA3AF" }}>Learn about Rewards →</a>
          </p>
        </div>
      </div>
    );
  }

  // ── Logged-in: disclosure + continue (matches guest page layout) ────────
  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif", display: "flex", flexDirection: "column" }}>
      <style>{pulseStyle}</style>

      <div style={{ background: NAVY, padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" style={{ fontSize: "18px", fontWeight: "800", color: "#fff", textDecoration: "none" }}>Room<span style={{ color: ORANGE }}>Voyager</span></a>
        <span style={{ fontSize: "12px", color: "#93C5FD" }}>Secure redirect</span>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "32px 16px" }}>
        <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 8px 40px rgba(0,0,0,0.10)", maxWidth: "440px", width: "100%", overflow: "hidden" }}>

          {/* Header — matches guest page */}
          <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${meta.color} 100%)`, padding: "28px 24px 24px", textAlign: "center" }}>
            <div style={{ fontSize: "44px", marginBottom: "8px" }}>{meta.icon}</div>
            <p style={{ color: "#fff", fontSize: "19px", fontWeight: "800", margin: "0 0 4px" }}>You're heading to {partner}</p>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px", margin: 0 }}>RoomVoyager never adds fees to your booking</p>
          </div>

          <div style={{ padding: "24px 24px 28px" }}>

            {/* Disclosure bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px" }}>
              {[
                ["✅", "We searched the best available rates for you"],
                ["🔒", "Your booking is made directly with " + partner],
                ["💵", "No markups — RoomVoyager earns a small commission from the partner, not you"],
              ].map(([icon, text], i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>{icon}</span>
                  <span style={{ fontSize: "13px", color: "#374151", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>

            {/* Rewards — matches guest page */}
            {estPts ? (
              <div style={{ background: "#FFF7ED", border: `1.5px solid ${ORANGE}40`, borderRadius: "12px", padding: "12px 14px", display: "flex", gap: "10px", alignItems: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "20px" }}>🎉</span>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: ORANGE, margin: "0 0 2px", textTransform: "uppercase" }}>Points you'll earn</p>
                  <p style={{ fontSize: "20px", fontWeight: "800", color: NAVY, margin: "0 0 2px" }}>{estPts.toLocaleString()} pts</p>
                  <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>= ${(estPts / 1000).toFixed(2)} cash back · available 45 days after travel</p>
                </div>
              </div>
            ) : (
              <div style={{ background: LIGHT_BLUE, borderRadius: "12px", padding: "12px 14px", display: "flex", gap: "10px", alignItems: "center", marginBottom: "20px" }}>
                <span style={{ fontSize: "20px" }}>🏆</span>
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

            {/* Continue button */}
            <button
              onClick={goNow}
              disabled={gone}
              className={gone ? "" : "rv-pulse-btn"}
              style={{
                width: "100%", padding: "14px",
                background: gone ? "#D1D5DB" : NAVY,
                color: "#fff", border: "none", borderRadius: "12px", fontSize: "15px",
                fontWeight: "800", cursor: gone ? "default" : "pointer",
                boxShadow: gone ? "none" : "0 4px 14px rgba(0,59,149,0.25)",
                transition: "background 0.2s",
              }}>
              {gone ? "Redirecting…" : `Continue to ${partner} →`}
            </button>

            <p style={{ textAlign: "center", fontSize: "11px", color: "#9CA3AF", margin: "12px 0 0" }}>
              <a href="/" style={{ color: "#9CA3AF" }}>Cancel and go back</a>
            </p>
          </div>
        </div>
      </div>

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

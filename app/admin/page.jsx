"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
// Points management now goes through /api/admin/firestore (server-side, bypasses CSP/extensions)

const ALLOWED_EMAILS = ["workhomebalancellc@gmail.com", "roomvoyager@protonmail.com"];

const NAVY       = "#003B95";
const ORANGE     = "#FF6600";
const GREEN      = "#16A34A";
const LIGHT_BLUE = "#EBF3FF";

// Your commission rates per product (what you actually earn from each partner)
const COMMISSION_RATES = {
  cruise:  3,   // % from CJ affiliates (CruiseDirect, Royal Caribbean, etc.)
  hotel:   3,   // % from Expedia
  package: 3,   // % from affiliate
  flight:  3,   // % from Travelpayouts / Kiwi
};
const COMMISSION_SOURCE = {
  cruise:  "via CJ affiliates",
  hotel:   "via Expedia",
  package: "via affiliate",
  flight:  "via Travelpayouts / Kiwi",
};

const TOOLS = [
  { icon: "🧮", label: "Points Calculator",    href: "/admin/calculator", desc: "Calculate pts earned on any booking combination" },
  { icon: "📖", label: "Staff Manual",          href: "/RoomVoyager-Admin-Manual.docx", desc: "VA operations guide — download & share", external: true },
  { icon: "📊", label: "Airtable",             href: "https://airtable.com", desc: "Quotes · Call Requests · Link Clicks · Redemptions", external: true },
  { icon: "🌐", label: "Live Site",             href: "https://www.roomvoyagertravel.com", desc: "Open your live website", external: true },
  { icon: "💳", label: "Virtual Card",          href: "https://privacy.com", desc: "Create a virtual card for demo bookings", external: true },
];

// basePts = standard pts/$1 · baseDoublePts = double pts/$1 (null = not eligible)
const PRODUCT_TYPES = [
  { id: "cruise",  label: "Cruise",          icon: "🚢", basePts: 10, baseDoublePts: 20,   doubleOk: true  },
  { id: "hotel",   label: "Hotel",            icon: "🏨", basePts: 5,  baseDoublePts: 10,   doubleOk: true  },
  { id: "package", label: "Vacation Package", icon: "🌴", basePts: 10, baseDoublePts: 20,   doubleOk: true  },
  { id: "flight",  label: "Flight",           icon: "✈️", basePts: 5,  baseDoublePts: null, doubleOk: false },
];

function CommissionCalc() {
  const [product,  setProduct]  = useState("cruise");
  const [amount,   setAmount]   = useState("");
  const [double,   setDouble]   = useState(false);
  const [commRate, setCommRate] = useState(COMMISSION_RATES["cruise"]);

  function handleProductChange(val) {
    setProduct(val);
    setCommRate(COMMISSION_RATES[val]);
    if (val === "flight") setDouble(false);
  }

  const type      = PRODUCT_TYPES.find(p => p.id === product);
  const amt       = parseFloat(amount) || 0;
  const useDouble = double && type?.doubleOk;
  const ptsRate   = useDouble ? (type?.baseDoublePts ?? type?.basePts ?? 5) : (type?.basePts ?? 5);
  const ptsCostPct = ptsRate / 1000; // 5pts → 0.5%, 10pts → 1%, 20pts → 2%

  const commission = amt * (commRate / 100);
  const ptsCost    = amt * ptsCostPct;
  const netProfit  = commission - ptsCost;
  const ptsAwarded = Math.round(amt * ptsRate);
  const cashBack   = ptsAwarded / 1000;
  const profitable = netProfit >= 0;
  const ptsCostLabel = `${(ptsCostPct * 100).toFixed(1)}%`;

  const rows = amt > 0 ? [
    { label: "Booking value",                         value: `$${amt.toFixed(2)}`,         color: "#111827" },
    { label: `Your commission (${commRate}%)`,         value: `$${commission.toFixed(2)}`,  color: NAVY,  note: COMMISSION_SOURCE[product] },
    { label: `Points cost (${ptsCostLabel})`,          value: `−$${ptsCost.toFixed(2)}`,    color: ORANGE, note: `${ptsAwarded.toLocaleString()} pts = $${cashBack.toFixed(2)} to customer` },
    { label: "Net profit",                             value: `$${netProfit.toFixed(2)}`,   color: profitable ? GREEN : "#DC2626", bold: true },
  ] : [];

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 14px" }}>💰 Commission & Profitability Calculator</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 80px", gap: "10px", marginBottom: "14px" }}>
        <div>
          <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "4px" }}>Product</label>
          <select value={product} onChange={e => handleProductChange(e.target.value)}
            style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", background: "#fff" }}>
            {PRODUCT_TYPES.map(p => <option key={p.id} value={p.id}>{p.icon} {p.label}</option>)}
          </select>
        </div>
        <div>
          <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "4px" }}>Booking Amount ($)</label>
          <input type="number" min="0" placeholder="0.00" value={amount} onChange={e => setAmount(e.target.value)}
            style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", boxSizing: "border-box", outline: "none" }} />
        </div>
        <div>
          <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "4px" }}>Points Mode</label>
          <div style={{ display: "flex", gap: "6px", height: "36px", alignItems: "center" }}>
            <button onClick={() => setDouble(false)}
              style={{ flex: 1, height: "36px", borderRadius: "8px", border: `1.5px solid ${!double ? NAVY : "#E5E7EB"}`, background: !double ? "#EBF3FF" : "#fff", fontSize: "12px", fontWeight: "700", cursor: "pointer", color: !double ? NAVY : "#6B7280" }}>
              Standard
            </button>
            <button onClick={() => { if (type?.doubleOk) setDouble(true); }} disabled={!type?.doubleOk}
              style={{ flex: 1, height: "36px", borderRadius: "8px", border: `1.5px solid ${double ? ORANGE : "#E5E7EB"}`, background: double ? "#FFF7ED" : "#F9FAFB", fontSize: "12px", fontWeight: "700", cursor: type?.doubleOk ? "pointer" : "not-allowed", color: double ? ORANGE : "#9CA3AF", opacity: type?.doubleOk ? 1 : 0.5 }}>
              Double 🔥
            </button>
          </div>
        </div>
        <div>
          <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "4px" }}>Comm %</label>
          <input type="number" min="0" max="50" step="0.5" value={commRate}
            onChange={e => setCommRate(parseFloat(e.target.value) || 0)}
            style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", boxSizing: "border-box", outline: "none", textAlign: "center", fontWeight: "700" }} />
        </div>
      </div>

      {amt > 0 ? (
        <>
          <div style={{ background: "#F8FAFF", borderRadius: "10px", overflow: "hidden", marginBottom: "10px" }}>
            {rows.map((r, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 14px", borderBottom: i < rows.length - 1 ? "1px solid #F3F4F6" : "none", background: r.bold ? (profitable ? "#F0FDF4" : "#FEF2F2") : "transparent" }}>
                <div>
                  <span style={{ fontSize: "13px", color: "#374151", fontWeight: r.bold ? "700" : "400" }}>{r.label}</span>
                  {r.note && <span style={{ fontSize: "10px", color: "#9CA3AF", marginLeft: "6px" }}>({r.note})</span>}
                </div>
                <span style={{ fontSize: "14px", fontWeight: "800", color: r.color }}>{r.value}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "center", padding: "10px 14px", background: profitable ? "#F0FDF4" : "#FEF2F2", borderRadius: "8px", border: `1px solid ${profitable ? "#BBF7D0" : "#FCA5A5"}` }}>
            <span style={{ fontSize: "18px" }}>{profitable ? "✅" : "⚠️"}</span>
            <p style={{ fontSize: "12px", color: profitable ? "#15803D" : "#DC2626", fontWeight: "600", margin: 0 }}>
              {profitable
                ? `You earn $${commission.toFixed(2)}, give $${cashBack.toFixed(2)} back in rewards, and keep $${netProfit.toFixed(2)}.`
                : `Points cost exceeds your commission — switch to standard points or confirm your commission rate.`}
            </p>
          </div>
        </>
      ) : (
        <p style={{ fontSize: "13px", color: "#D1D5DB", textAlign: "center", padding: "20px 0", margin: 0 }}>Enter a booking amount to see the breakdown →</p>
      )}
    </div>
  );
}

// Points per $1 per product (standard / double)
const PTS_RATES = {
  cruise:  { std: 10, dbl: 20 },
  hotel:   { std: 5,  dbl: 10 },
  package: { std: 10, dbl: 20 },
  flight:  { std: 5,  dbl: null },
};

function ManualBookingLog() {
  const [promoActive, setPromoActive] = useState(false);
  const [form, setForm] = useState({ guestEmail: "", product: "cruise", amount: "", double: false, notes: "" });

  useEffect(() => {
    fetch("/api/admin/settings")
      .then(r => r.json())
      .then(d => {
        if (!d.doublePointsOn) return;
        const now = new Date();
        if (d.promoStartDate) {
          const start = new Date(`${d.promoStartDate}T${d.promoStartTime || "00:00"}:00`);
          if (now < start) return;
        }
        if (d.promoEndDate) {
          const end = new Date(`${d.promoEndDate}T${d.promoEndTime || "23:59"}:00`);
          if (now > end) return;
        }
        setPromoActive(true);
      })
      .catch(() => {});
  }, []);
  const [preview, setPreview]     = useState(null);  // { pts, cash, memberName }
  const [looking, setLooking]     = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult]       = useState(null);  // { ok, pts, name, error }
  const [memberNotFound, setMemberNotFound] = useState(false);

  const rates  = PTS_RATES[form.product] || PTS_RATES.cruise;
  const canDbl = !!rates.dbl;
  const rate   = (form.double && canDbl) ? rates.dbl : rates.std;
  const amt    = parseFloat(form.amount) || 0;
  const pts    = Math.round(amt * rate);
  const cash   = (pts / 1000).toFixed(2);

  async function lookupMember() {
    if (!form.guestEmail) return;
    setLooking(true); setPreview(null); setMemberNotFound(false);
    const res  = await fetch("/api/admin/firestore", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "lookup", email: form.guestEmail }),
    });
    const data = await res.json();
    if (res.ok) {
      setPreview({ memberName: data.name || data.email, currentPts: data.points });
    } else {
      setMemberNotFound(true);
    }
    setLooking(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!pts || pts <= 0) return;
    setSubmitting(true); setResult(null);

    try {
      const res = await fetch("/api/admin/manual-award", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          adminEmail:   adminEmail,
          guestEmail:   form.guestEmail,
          name:         preview?.memberName || "",
          product:      form.product,
          productLabel: PRODUCT_TYPES.find(p => p.id === form.product)?.label || form.product,
          amount:       form.amount,
          pts,
          cash,
          double:       form.double,
          notes:        form.notes,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Award failed");

      setResult({ ok: true, pts, name: preview?.memberName || form.guestEmail, newBalance: data.points });
      setForm({ guestEmail: "", product: "cruise", amount: "", double: false, notes: "" });
      setPreview(null);
    } catch (err) {
      setResult({ ok: false, error: err.message });
    }
    setSubmitting(false);
  }

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>📝 Log Booking & Award Points</p>
      <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 12px" }}>Enter a booking to auto-calculate points, credit the member, log to Airtable, and email the customer.</p>
      {promoActive && (
        <div style={{ marginBottom: "14px", padding: "8px 12px", background: "#FFF7ED", borderRadius: "8px", border: `1px solid ${ORANGE}`, fontSize: "12px", fontWeight: "700", color: ORANGE }}>
          🔥 Double Points Promo is active — all eligible bookings will automatically earn 2× points
        </div>
      )}

      {result?.ok ? (
        <div style={{ textAlign: "center", padding: "24px", background: "#F0FDF4", borderRadius: "12px" }}>
          <p style={{ fontSize: "28px", margin: "0 0 8px" }}>🎉</p>
          <p style={{ fontSize: "15px", fontWeight: "800", color: "#15803D", margin: "0 0 4px" }}>{result.pts.toLocaleString()} pts awarded to {result.name}</p>
          <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 12px" }}>New balance: {result.newBalance.toLocaleString()} pts · Email sent · Logged to Airtable</p>
          <button onClick={() => setResult(null)} style={{ padding: "8px 20px", background: NAVY, color: "#fff", border: "none", borderRadius: "8px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
            Log another →
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>

          {/* Email + lookup */}
          <div>
            <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Member Email</label>
            <div style={{ display: "flex", gap: "8px" }}>
              <input required type="email" placeholder="guest@example.com" value={form.guestEmail}
                onChange={e => { setForm(f => ({ ...f, guestEmail: e.target.value })); setPreview(null); setMemberNotFound(false); }}
                style={{ flex: 1, padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", outline: "none" }} />
              <button type="button" onClick={lookupMember} disabled={looking || !form.guestEmail}
                style={{ padding: "8px 14px", background: LIGHT_BLUE, color: NAVY, border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}>
                {looking ? "…" : "Look up"}
              </button>
            </div>
            {preview && (
              <div style={{ marginTop: "6px", padding: "8px 12px", background: "#F0FDF4", borderRadius: "8px", fontSize: "12px", color: "#15803D", fontWeight: "600" }}>
                ✓ {preview.memberName} · {preview.currentPts.toLocaleString()} pts current balance
              </div>
            )}
            {memberNotFound && (
              <p style={{ marginTop: "6px", fontSize: "12px", color: "#DC2626", fontWeight: "600" }}>
                ⚠️ No account found. Points will create a new member record.
              </p>
            )}
          </div>

          {/* Product + Double */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div>
              <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Product</label>
              <select value={form.product} onChange={e => setForm(f => ({ ...f, product: e.target.value, double: false }))}
                style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", background: "#fff" }}>
                {PRODUCT_TYPES.map(p => <option key={p.id} value={p.id}>{p.icon} {p.label}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Points Mode</label>
              <div style={{ display: "flex", gap: "6px", height: "36px", alignItems: "center" }}>
                <button type="button" onClick={() => setForm(f => ({ ...f, double: false }))}
                  style={{ flex: 1, height: "36px", borderRadius: "8px", border: `1.5px solid ${!form.double ? NAVY : "#E5E7EB"}`, background: !form.double ? "#EBF3FF" : "#fff", fontSize: "12px", fontWeight: "700", cursor: "pointer", color: !form.double ? NAVY : "#6B7280" }}>
                  Standard
                </button>
                <button type="button" onClick={() => { if (canDbl) setForm(f => ({ ...f, double: true })); }} disabled={!canDbl}
                  style={{ flex: 1, height: "36px", borderRadius: "8px", border: `1.5px solid ${form.double ? ORANGE : "#E5E7EB"}`, background: form.double ? "#FFF7ED" : "#F9FAFB", fontSize: "12px", fontWeight: "700", cursor: canDbl ? "pointer" : "not-allowed", color: form.double ? ORANGE : "#9CA3AF", opacity: canDbl ? 1 : 0.5 }}>
                  Double 🔥
                </button>
              </div>
            </div>
          </div>

          {/* Amount */}
          <div>
            <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Booking Amount ($)</label>
            <input required type="number" min="1" step="0.01" placeholder="0.00" value={form.amount}
              onChange={e => setForm(f => ({ ...f, amount: e.target.value }))}
              style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", boxSizing: "border-box", outline: "none" }} />
          </div>

          {/* Points preview */}
          {amt > 0 && (
            <div style={{ background: "#F0F4FF", borderRadius: "10px", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p style={{ fontSize: "11px", color: "#6B7280", margin: "0 0 2px", fontWeight: "600" }}>POINTS TO AWARD</p>
                <p style={{ fontSize: "22px", fontWeight: "800", color: NAVY, margin: 0 }}>{pts.toLocaleString()} pts</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "11px", color: "#6B7280", margin: "0 0 2px", fontWeight: "600" }}>CASH VALUE</p>
                <p style={{ fontSize: "22px", fontWeight: "800", color: GREEN, margin: 0 }}>${cash}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "11px", color: "#6B7280", margin: "0 0 2px", fontWeight: "600" }}>RATE</p>
                <p style={{ fontSize: "14px", fontWeight: "700", color: form.double ? ORANGE : "#374151", margin: 0 }}>{rate} pts/$1 {form.double ? "🔥" : ""}</p>
              </div>
            </div>
          )}

          {/* Notes */}
          <div>
            <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Notes (optional)</label>
            <input type="text" placeholder="e.g. Royal Caribbean 7-night, booked via phone" value={form.notes}
              onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
              style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", boxSizing: "border-box", outline: "none" }} />
          </div>

          {result?.ok === false && (
            <p style={{ fontSize: "12px", color: "#DC2626", fontWeight: "600", margin: 0 }}>❌ {result.error}</p>
          )}

          <button type="submit" disabled={submitting || !pts}
            style={{ padding: "11px", background: submitting ? "#D1D5DB" : ORANGE, color: "#fff", border: "none", borderRadius: "8px", fontSize: "13px", fontWeight: "700", cursor: submitting ? "default" : "pointer" }}>
            {submitting ? "Processing…" : `Award ${pts > 0 ? pts.toLocaleString() + " pts" : "Points"} & Notify Customer →`}
          </button>
        </form>
      )}
    </div>
  );
}

// ── Admin Control Toggles ─────────────────────────────────────────────────────
function AdminToggles({ adminEmail }) {
  const [bookingTracking,  setBookingTracking]  = useState(true);
  const [doublePointsOn,   setDoublePointsOn]   = useState(false);
  const [promoStartDate,   setPromoStartDate]   = useState("");
  const [promoStartTime,   setPromoStartTime]   = useState("");
  const [promoEndDate,     setPromoEndDate]     = useState("");
  const [promoEndTime,     setPromoEndTime]     = useState("");
  const [promoBannerText,  setPromoBannerText]  = useState("🎉 Deals of the Week — Earn 2× points on hotels & cruises!");
  const [saving,           setSaving]           = useState(false);
  const [saveMsg,          setSaveMsg]          = useState("");

  // Load settings on mount
  useEffect(() => {
    fetch("/api/admin/settings")
      .then(r => r.json())
      .then(d => {
        if (d.bookingTracking  !== undefined) setBookingTracking(d.bookingTracking);
        if (d.doublePointsOn   !== undefined) setDoublePointsOn(d.doublePointsOn);
        if (d.promoStartDate)  setPromoStartDate(d.promoStartDate);
        if (d.promoStartTime)  setPromoStartTime(d.promoStartTime);
        if (d.promoEndDate)    setPromoEndDate(d.promoEndDate);
        if (d.promoEndTime)    setPromoEndTime(d.promoEndTime);
        if (d.promoBannerText) setPromoBannerText(d.promoBannerText);
      })
      .catch(() => {});
  }, []);

  async function save(patch) {
    setSaving(true); setSaveMsg("");
    await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        adminEmail,
        bookingTracking, doublePointsOn,
        promoStartDate, promoStartTime, promoEndDate, promoEndTime,
        promoBannerText,
        ...patch,
      }),
    }).catch(() => {});
    setSaving(false);
    setSaveMsg("Saved ✓");
    setTimeout(() => setSaveMsg(""), 2000);
  }

  const toggleStyle = (active, color) => ({
    width: "52px", height: "28px", borderRadius: "14px",
    border: "none", cursor: "pointer",
    background: active ? color : "#D1D5DB",
    position: "relative", flexShrink: 0,
  });
  const knobStyle = (active) => ({
    position: "absolute", top: "3px",
    left: active ? "27px" : "3px",
    width: "22px", height: "22px", borderRadius: "50%",
    background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
    display: "block", transition: "left 0.15s",
  });

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
        <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: 0 }}>🎛️ Booking Controls</p>
        {saving && <span style={{ fontSize: "11px", color: "#9CA3AF" }}>Saving…</span>}
        {!saving && saveMsg && <span style={{ fontSize: "11px", color: GREEN, fontWeight: "600" }}>{saveMsg}</span>}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

        {/* ── Booking Tracking Toggle ── */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
            <div>
              <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 2px" }}>Booking Tracking</p>
              <p style={{ fontSize: "11px", color: "#6B7280", margin: 0 }}>Auto logs bookings immediately · Manual requires your review</p>
            </div>
            <button onClick={() => { setBookingTracking(v => !v); save({ bookingTracking: !bookingTracking }); }} style={toggleStyle(bookingTracking, GREEN)}>
              <span style={knobStyle(bookingTracking)} />
            </button>
          </div>
          <div style={{ display: "flex", gap: "6px", marginBottom: "8px" }}>
            <button onClick={() => { setBookingTracking(true); save({ bookingTracking: true }); }}
              style={{ flex: 1, padding: "6px", borderRadius: "8px", border: `1.5px solid ${bookingTracking ? GREEN : "#E5E7EB"}`, background: bookingTracking ? "#F0FDF4" : "#fff", fontSize: "12px", fontWeight: "700", cursor: "pointer", color: bookingTracking ? GREEN : "#6B7280" }}>
              Auto
            </button>
            <button onClick={() => { setBookingTracking(false); save({ bookingTracking: false }); }}
              style={{ flex: 1, padding: "6px", borderRadius: "8px", border: `1.5px solid ${!bookingTracking ? ORANGE : "#E5E7EB"}`, background: !bookingTracking ? "#FFF7ED" : "#fff", fontSize: "12px", fontWeight: "700", cursor: "pointer", color: !bookingTracking ? ORANGE : "#6B7280" }}>
              Manual
            </button>
          </div>
          <div style={{ padding: "8px 12px", borderRadius: "8px", background: bookingTracking ? "#F0FDF4" : "#FFF7ED", fontSize: "11px", fontWeight: "600", color: bookingTracking ? "#15803D" : ORANGE }}>
            {bookingTracking ? "✅ Auto — bookings log automatically on submission" : "⏸️ Manual — you must review and log each booking"}
          </div>
        </div>

        {/* ── Double Points Promo Toggle ── */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
            <div>
              <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 2px" }}>🔥 Double Points Promotion</p>
              <p style={{ fontSize: "11px", color: "#6B7280", margin: 0 }}>When on, all eligible bookings earn 2× points automatically</p>
            </div>
            <button onClick={() => { const v = !doublePointsOn; setDoublePointsOn(v); save({ doublePointsOn: v }); }} style={toggleStyle(doublePointsOn, ORANGE)}>
              <span style={knobStyle(doublePointsOn)} />
            </button>
          </div>

          {doublePointsOn && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "8px" }}>
              <div>
                <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Start Date</label>
                <input type="date" value={promoStartDate} onChange={e => { setPromoStartDate(e.target.value); save({ promoStartDate: e.target.value }); }}
                  style={{ width: "100%", padding: "7px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "12px", boxSizing: "border-box", outline: "none" }} />
              </div>
              <div>
                <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Start Time</label>
                <input type="time" value={promoStartTime} onChange={e => { setPromoStartTime(e.target.value); save({ promoStartTime: e.target.value }); }}
                  style={{ width: "100%", padding: "7px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "12px", boxSizing: "border-box", outline: "none" }} />
              </div>
              <div>
                <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>End Date</label>
                <input type="date" value={promoEndDate} onChange={e => { setPromoEndDate(e.target.value); save({ promoEndDate: e.target.value }); }}
                  style={{ width: "100%", padding: "7px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "12px", boxSizing: "border-box", outline: "none" }} />
              </div>
              <div>
                <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>End Time</label>
                <input type="time" value={promoEndTime} onChange={e => { setPromoEndTime(e.target.value); save({ promoEndTime: e.target.value }); }}
                  style={{ width: "100%", padding: "7px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "12px", boxSizing: "border-box", outline: "none" }} />
              </div>
            </div>
          )}

          {/* Banner text editor — always visible so you can A/B test messaging */}
          <div style={{ marginTop: "10px" }}>
            <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "4px" }}>
              Banner text <span style={{ fontWeight: "400" }}>(shown on all pages when promo is active)</span>
            </label>
            <div style={{ display: "flex", gap: "8px" }}>
              <input
                type="text"
                value={promoBannerText}
                onChange={e => setPromoBannerText(e.target.value)}
                placeholder="🎉 Deals of the Week — Earn 2× points on hotels & cruises!"
                style={{ flex: 1, padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "12px", outline: "none", boxSizing: "border-box" }}
              />
              <button
                onClick={() => save({ promoBannerText })}
                style={{ padding: "8px 14px", background: ORANGE, color: "#fff", border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: "700", cursor: "pointer", flexShrink: 0 }}>
                Save
              </button>
            </div>
            <p style={{ fontSize: "10px", color: "#9CA3AF", margin: "4px 0 0" }}>
              Preview: <span style={{ fontStyle: "italic", color: "#6B7280" }}>{promoBannerText || "—"}{promoEndDate ? ` · Ends ${promoEndDate}` : ""}</span>
            </p>
          </div>

          <div style={{ padding: "8px 12px", borderRadius: "8px", background: doublePointsOn ? "#FFF7ED" : "#F9FAFB", fontSize: "11px", fontWeight: "600", color: doublePointsOn ? ORANGE : "#9CA3AF", marginTop: "10px" }}>
            {doublePointsOn
              ? `🔥 Double points active${promoStartDate ? ` · Starts ${promoStartDate}${promoStartTime ? ` at ${promoStartTime}` : ""}` : ""}${promoEndDate ? ` · Ends ${promoEndDate}${promoEndTime ? ` at ${promoEndTime}` : ""}` : " · No end date set"}`
              : "Standard points rates in effect"}
          </div>
        </div>

      </div>
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

// ── Create Booking for Customer ──────────────────────────────────────────────
function AdminCreateBooking({ adminEmail }) {

  const [form, setForm] = useState({
    guestEmail: "", product: "cruise", amount: "", destination: "",
    startDate: "", endDate: "", reference: "", notes: "", status: "upcoming", double: false,
  });
  const [preview, setPreview]   = useState(null);
  const [looking, setLooking]   = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult]     = useState(null);
  const [notFound, setNotFound] = useState(false);

  const rates   = PTS_RATES[form.product] || PTS_RATES.cruise;
  const canDbl  = !!rates.dbl;
  const rate    = (form.double && canDbl) ? rates.dbl : rates.std;
  const amt     = parseFloat(form.amount) || 0;
  const pts     = Math.round(amt * rate);

  async function lookupMember() {
    if (!form.guestEmail) return;
    setLooking(true); setPreview(null); setNotFound(false);
    const res  = await fetch("/api/admin/firestore", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "lookup", email: form.guestEmail }),
    });
    const data = await res.json();
    if (res.ok) {
      setPreview({ uid: data.uid, memberName: data.name || data.email, currentPts: data.points });
    } else {
      setNotFound(true);
    }
    setLooking(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!preview?.uid) { alert("Look up the member first."); return; }
    setSubmitting(true); setResult(null);
    try {
      const res = await fetch("/api/admin/bookings", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action:     "create",
          adminEmail: adminEmail,
          uid:        preview.uid,
          email:      form.guestEmail,
          ...form,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setResult({ ok: true, reference: data.reference, pts: data.pts, name: preview.memberName });
      setForm({ guestEmail: "", product: "cruise", amount: "", destination: "", startDate: "", endDate: "", reference: "", notes: "", status: "upcoming", double: false });
      setPreview(null);
    } catch (err) {
      setResult({ ok: false, error: err.message });
    }
    setSubmitting(false);
  }

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>📋 Create Booking for Customer</p>
      <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 16px" }}>Add a confirmed booking to a customer's My Bookings tab (stored in Firestore, visible immediately).</p>

      {result?.ok ? (
        <div style={{ textAlign: "center", padding: "20px", background: "#F0FDF4", borderRadius: "12px" }}>
          <p style={{ fontSize: "28px", margin: "0 0 8px" }}>✅</p>
          <p style={{ fontSize: "14px", fontWeight: "800", color: "#15803D", margin: "0 0 4px" }}>Booking created for {result.name}</p>
          <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 12px" }}>Ref: {result.reference} · {result.pts.toLocaleString()} pts visible in their account</p>
          <button onClick={() => setResult(null)} style={{ padding: "8px 20px", background: NAVY, color: "#fff", border: "none", borderRadius: "8px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
            Create another →
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {/* Email */}
          <div>
            <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Member Email</label>
            <div style={{ display: "flex", gap: "8px" }}>
              <input required type="email" placeholder="guest@example.com" value={form.guestEmail}
                onChange={e => { setForm(f => ({ ...f, guestEmail: e.target.value })); setPreview(null); setNotFound(false); }}
                style={{ flex: 1, padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", outline: "none" }} />
              <button type="button" onClick={lookupMember} disabled={looking || !form.guestEmail}
                style={{ padding: "8px 14px", background: LIGHT_BLUE, color: NAVY, border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}>
                {looking ? "…" : "Look up"}
              </button>
            </div>
            {preview && (
              <div style={{ marginTop: "6px", padding: "8px 12px", background: "#F0FDF4", borderRadius: "8px", fontSize: "12px", color: "#15803D", fontWeight: "600" }}>
                ✓ {preview.memberName} · UID: {preview.uid} · {preview.currentPts.toLocaleString()} pts
              </div>
            )}
            {notFound && <p style={{ marginTop: "6px", fontSize: "12px", color: "#DC2626", fontWeight: "600" }}>⚠️ No account found for that email.</p>}
          </div>

          {/* Product + Double */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
            <div>
              <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Product</label>
              <select value={form.product} onChange={e => setForm(f => ({ ...f, product: e.target.value, double: false }))}
                style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", background: "#fff" }}>
                {PRODUCT_TYPES.map(p => <option key={p.id} value={p.id}>{p.icon} {p.label}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Amount ($)</label>
              <input required type="number" min="1" step="0.01" placeholder="0.00" value={form.amount}
                onChange={e => setForm(f => ({ ...f, amount: e.target.value }))}
                style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", boxSizing: "border-box", outline: "none" }} />
            </div>
            <div>
              <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Status</label>
              <select value={form.status} onChange={e => setForm(f => ({ ...f, status: e.target.value }))}
                style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", background: "#fff" }}>
                <option value="upcoming">🗓️ Upcoming</option>
                <option value="completed">✅ Completed</option>
              </select>
            </div>
          </div>

          {/* Destination + Reference */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div>
              <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Destination</label>
              <input type="text" placeholder="e.g. Caribbean Cruise" value={form.destination}
                onChange={e => setForm(f => ({ ...f, destination: e.target.value }))}
                style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", boxSizing: "border-box", outline: "none" }} />
            </div>
            <div>
              <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Booking Reference (auto if empty)</label>
              <input type="text" placeholder="e.g. RC-123456" value={form.reference}
                onChange={e => setForm(f => ({ ...f, reference: e.target.value }))}
                style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", boxSizing: "border-box", outline: "none" }} />
            </div>
          </div>

          {/* Dates */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div>
              <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Departure / Check-in</label>
              <input type="date" value={form.startDate} onChange={e => setForm(f => ({ ...f, startDate: e.target.value }))}
                style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", boxSizing: "border-box", outline: "none" }} />
            </div>
            <div>
              <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Trip End Date <span style={{ color: ORANGE }}>(→ starts 45-day timer)</span></label>
              <input type="date" value={form.endDate} min={form.startDate || undefined} onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))}
                style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", boxSizing: "border-box", outline: "none" }} />
            </div>
          </div>

          {/* Double points + Notes */}
          <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "10px", alignItems: "end" }}>
            <div>
              <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Points Mode</label>
              <button type="button" onClick={() => { if (canDbl) setForm(f => ({ ...f, double: !f.double })); }}
                style={{ width: "100%", padding: "8px 10px", borderRadius: "8px", border: `1.5px solid ${form.double ? ORANGE : "#E5E7EB"}`, background: form.double ? "#FFF7ED" : "#fff", fontSize: "12px", fontWeight: "700", cursor: canDbl ? "pointer" : "not-allowed", color: form.double ? ORANGE : "#6B7280", opacity: canDbl ? 1 : 0.5 }}>
                {form.double ? "🔥 Double" : "Standard"}
              </button>
            </div>
            <div>
              <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Notes</label>
              <input type="text" placeholder="e.g. Verified via email confirmation" value={form.notes}
                onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", boxSizing: "border-box", outline: "none" }} />
            </div>
          </div>

          {/* Points preview */}
          {amt > 0 && (
            <div style={{ background: "#F0F4FF", borderRadius: "10px", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p style={{ fontSize: "11px", color: "#6B7280", margin: "0 0 2px", fontWeight: "600" }}>POINTS SHOWN TO CUSTOMER</p>
                <p style={{ fontSize: "20px", fontWeight: "800", color: NAVY, margin: 0 }}>{pts.toLocaleString()} pts</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "11px", color: "#6B7280", margin: "0 0 2px", fontWeight: "600" }}>CASH VALUE</p>
                <p style={{ fontSize: "18px", fontWeight: "800", color: GREEN, margin: 0 }}>${(pts / 1000).toFixed(2)}</p>
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "#6B7280", margin: "0 0 2px", fontWeight: "600" }}>RATE</p>
                <p style={{ fontSize: "14px", fontWeight: "700", color: form.double ? ORANGE : "#374151", margin: 0 }}>{rate} pts/$1 {form.double ? "🔥" : ""}</p>
              </div>
            </div>
          )}

          {result?.ok === false && (
            <p style={{ fontSize: "12px", color: "#DC2626", fontWeight: "600", margin: 0 }}>❌ {result.error}</p>
          )}

          <button type="submit" disabled={submitting || !preview?.uid || !pts}
            style={{ padding: "11px", background: submitting || !preview?.uid ? "#D1D5DB" : NAVY, color: "#fff", border: "none", borderRadius: "8px", fontSize: "13px", fontWeight: "700", cursor: (submitting || !preview?.uid) ? "default" : "pointer" }}>
            {submitting ? "Creating…" : `✅ Create Booking${pts > 0 ? ` (${pts.toLocaleString()} pts)` : ""} →`}
          </button>
        </form>
      )}
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

// ── Fix Points Status ─────────────────────────────────────────────────────────
function FixPointsStatus({ adminEmail }) {
  const [loading,     setLoading]     = useState(false);
  const [result,      setResult]      = useState(null);
  const [emailFilter, setEmailFilter] = useState("");
  const [lookupUid,   setLookupUid]   = useState(null);
  const [looking,     setLooking]     = useState(false);
  const [lookupErr,   setLookupErr]   = useState("");

  async function lookupEmail() {
    if (!emailFilter.trim()) return;
    setLooking(true); setLookupUid(null); setLookupErr(""); setResult(null);
    try {
      const res  = await fetch("/api/admin/firestore", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "lookup", email: emailFilter.trim() }),
      });
      const data = await res.json();
      if (res.ok) setLookupUid(data.uid);
      else setLookupErr("No account found for that email.");
    } catch (e) { setLookupErr(e.message); }
    setLooking(false);
  }

  async function run(dryRun) {
    setLoading(true);
    setResult(null);
    try {
      const res  = await fetch("/api/admin/fix-points-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminEmail, dryRun, uid: lookupUid || undefined }),
      });
      setResult(await res.json());
    } catch (e) { setResult({ error: e.message }); }
    setLoading(false);
  }

  function reset() {
    setResult(null);
    setEmailFilter("");
    setLookupUid(null);
    setLookupErr("");
  }

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
        <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: 0 }}>🔧 Fix Points Status</p>
        {(result || lookupUid || emailFilter) && (
          <button onClick={reset} style={{ padding: "4px 12px", borderRadius: "7px", border: "1px solid #E5E7EB", fontSize: "11px", fontWeight: "600", cursor: "pointer", background: "#F9FAFB", color: "#6B7280" }}>
            ↺ Reset
          </button>
        )}
      </div>
      <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 14px" }}>
        Scans bookings and moves points to the correct bucket — pending (future release date) or redeemable (past release date).
        Filter by email to check one account, or leave blank to scan all.
      </p>

      {/* Email lookup */}
      <div style={{ marginBottom: "14px" }}>
        <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "4px" }}>
          Filter by member email <span style={{ fontWeight: "400" }}>(optional — leave blank to scan everyone)</span>
        </label>
        <div style={{ display: "flex", gap: "8px" }}>
          <input
            type="email"
            placeholder="member@example.com"
            value={emailFilter}
            onChange={e => { setEmailFilter(e.target.value); setLookupUid(null); setLookupErr(""); }}
            style={{ flex: 1, padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", outline: "none" }}
          />
          <button onClick={lookupEmail} disabled={looking || !emailFilter.trim()} style={{ padding: "8px 14px", background: LIGHT_BLUE, color: NAVY, border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}>
            {looking ? "…" : "Look up"}
          </button>
        </div>
        {lookupUid && <p style={{ marginTop: "6px", fontSize: "12px", color: "#15803D", fontWeight: "600" }}>✓ Account found — scan will be limited to this member</p>}
        {lookupErr && <p style={{ marginTop: "6px", fontSize: "12px", color: "#DC2626", fontWeight: "600" }}>{lookupErr}</p>}
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <button onClick={() => run(true)} disabled={loading || (!!emailFilter.trim() && !lookupUid)} style={{ padding: "9px 20px", borderRadius: "9px", border: "1px solid #D1D5DB", fontSize: "13px", fontWeight: "700", cursor: "pointer", background: "#F9FAFB", color: "#374151" }}>
          {loading ? "Scanning…" : "🔍 Preview"}
        </button>
        <button onClick={() => { if (window.confirm("This will move points between pending/redeemable buckets for affected bookings. Continue?")) run(false); }} disabled={loading || (!!emailFilter.trim() && !lookupUid)} style={{ padding: "9px 20px", borderRadius: "9px", border: "none", fontSize: "13px", fontWeight: "700", cursor: "pointer", background: NAVY, color: "#fff" }}>
          {loading ? "Fixing…" : "✅ Fix Now"}
        </button>
      </div>

      {result && !result.error && (
        <div style={{ marginTop: "14px", padding: "12px 16px", borderRadius: "10px", background: "#F0FDF4", border: "1px solid #86EFAC" }}>
          <p style={{ fontSize: "13px", fontWeight: "700", color: "#15803D", margin: "0 0 6px" }}>
            {result.dryRun ? "Preview" : "Fixed"}: {result.fixed.length} booking{result.fixed.length !== 1 ? "s" : ""} · {result.skipped} already correct · {result.total} total scanned
          </p>
          {result.fixed.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {result.fixed.map((f, i) => (
                <p key={i} style={{ fontSize: "12px", color: "#374151", margin: 0 }}>
                  {result.dryRun ? "Would fix" : "Fixed"}: <strong>{f.destination}</strong> — {f.pts} pts · {f.action} · unlocks {f.releaseDate}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
      {result?.error && (
        <div style={{ marginTop: "14px", padding: "12px 16px", borderRadius: "10px", background: "#FEF2F2", border: "1px solid #FCA5A5" }}>
          <p style={{ fontSize: "13px", color: "#DC2626", margin: 0 }}>Error: {result.error}</p>
        </div>
      )}
    </div>
  );
}

const BLAST_TEMPLATES = [
  {
    id: "double-points",
    label: "🔥 Double Points",
    audience: "all",
    subject: "🔥 Deals of the Week — Double Points Are Live!",
    body:
      "Great news — we just turned on Double Points for all hotel and cruise bookings!\n\n" +
      "For a limited time, earn 2× rewards on every stay and sailing you book through RoomVoyager. " +
      "That means faster cash back and more money back in your pocket.\n\n" +
      "Don't miss out — double points won't last long!",
  },
  {
    id: "running-late",
    label: "⏰ Running Late",
    audience: "manual",
    subject: "Quick Update — Running a Bit Behind",
    body:
      "I wanted to give you a heads-up that I'm running approximately 30 minutes behind schedule " +
      "and will not be able to reach you at our originally planned time.\n\n" +
      "I will give you a call as soon as possible. If I am still running behind at that point, " +
      "I will send you another email with an updated call time.\n\n" +
      "I sincerely apologize for any inconvenience and appreciate your patience!",
  },
];

const AUDIENCE_OPTIONS = [
  { val: "all",         label: "Everyone",          desc: "All registered users + newsletter subscribers" },
  { val: "users",       label: "Registered users",  desc: "Anyone with a RoomVoyager account" },
  { val: "subscribers", label: "Newsletter only",   desc: "Newsletter opt-ins who haven't made an account" },
  { val: "customers",   label: "Customers",         desc: "Users who have at least one booking on file" },
  { val: "points",      label: "Has points",        desc: "Users with redeemable points > 0" },
  { val: "manual",      label: "Manual list",       desc: "Type specific email addresses" },
];

function SendBlast({ adminEmail }) {
  const [subject,      setSubject]      = useState("🔥 Deals of the Week — Double Points Are Live!");
  const [messageBody,  setMessageBody]  = useState(
    "Great news — we just turned on Double Points for all hotel and cruise bookings!\n\n" +
    "For a limited time, earn 2× rewards on every stay and sailing you book through RoomVoyager. " +
    "That means faster cash back and more money back in your pocket.\n\n" +
    "Don't miss out — double points won't last long!"
  );
  const [audience,     setAudience]     = useState("all");
  const [manualInput,  setManualInput]  = useState("");
  const [count,        setCount]        = useState(null);
  const [loading,      setLoading]      = useState(false);
  const [result,       setResult]       = useState(null);

  const manualEmails = manualInput.split(/[\n,]+/).map(e => e.trim()).filter(Boolean);

  async function loadCount() {
    if (audience === "manual") { setCount(manualEmails.length); return; }
    try {
      const res  = await fetch(`/api/admin/send-blast?adminEmail=${encodeURIComponent(adminEmail)}&audience=${audience}`);
      const data = await res.json();
      setCount(data.count ?? null);
    } catch { setCount(null); }
  }

  async function handleSend() {
    const recipientLabel = audience === "manual"
      ? `${manualEmails.length} manual email(s)`
      : `${count ?? "?"} recipients`;
    if (!window.confirm(`Send to ${recipientLabel}?`)) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("/api/admin/send-blast", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminEmail, subject, messageBody, audience, manualEmails }),
      });
      setResult(await res.json());
    } catch (e) {
      setResult({ error: e.message });
    }
    setLoading(false);
  }

  const selectedOption = AUDIENCE_OPTIONS.find(o => o.val === audience);

  function applyTemplate(tpl) {
    setSubject(tpl.subject);
    setMessageBody(tpl.body);
    setAudience(tpl.audience);
    setManualInput("");
    setCount(null);
    setResult(null);
  }

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 14px" }}>✉️ Send Email Blast</p>

      {/* Template picker */}
      <div style={{ marginBottom: "18px", padding: "12px 16px", background: "#F8FAFF", borderRadius: "10px", border: "1px solid #E0E7FF" }}>
        <p style={{ fontSize: "11px", fontWeight: "700", color: "#374151", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px" }}>Quick Templates</p>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {BLAST_TEMPLATES.map(tpl => (
            <button key={tpl.id} onClick={() => applyTemplate(tpl)} style={{ padding: "7px 16px", borderRadius: "8px", border: "1px solid #C7D2FE", fontSize: "12px", fontWeight: "700", cursor: "pointer", background: "#fff", color: NAVY }}>
              {tpl.label}
            </button>
          ))}
        </div>
      </div>

      {/* Audience picker */}
      <div style={{ marginBottom: "16px" }}>
        <label style={{ fontSize: "12px", fontWeight: "600", color: "#374151", display: "block", marginBottom: "8px" }}>Who are you sending to?</label>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }}>
          {AUDIENCE_OPTIONS.map(({ val, label }) => (
            <button key={val} onClick={() => { setAudience(val); setCount(null); }} style={{ padding: "6px 14px", borderRadius: "8px", border: "1px solid", fontSize: "12px", fontWeight: "600", cursor: "pointer", background: audience === val ? NAVY : "#F9FAFB", color: audience === val ? "#fff" : "#374151", borderColor: audience === val ? NAVY : "#D1D5DB" }}>
              {label}
            </button>
          ))}
        </div>
        {selectedOption && (
          <p style={{ fontSize: "11px", color: "#6B7280", margin: "0 0 8px" }}>{selectedOption.desc}</p>
        )}
        {audience !== "manual" && (
          <button onClick={loadCount} style={{ padding: "5px 12px", borderRadius: "7px", border: "1px solid #D1D5DB", fontSize: "11px", fontWeight: "600", cursor: "pointer", background: "#F9FAFB", color: "#374151" }}>
            {count !== null ? `👥 ${count} recipients` : "Preview count"}
          </button>
        )}
      </div>

      {/* Manual email list */}
      {audience === "manual" && (
        <div style={{ marginBottom: "14px" }}>
          <label style={{ fontSize: "12px", fontWeight: "600", color: "#374151", display: "block", marginBottom: "6px" }}>
            Email addresses <span style={{ fontWeight: "400", color: "#9CA3AF" }}>(one per line, or comma-separated)</span>
          </label>
          <textarea
            value={manualInput}
            onChange={e => { setManualInput(e.target.value); setCount(null); }}
            placeholder={"john@example.com\njane@example.com"}
            rows={4}
            style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #D1D5DB", fontSize: "13px", boxSizing: "border-box", resize: "vertical", outline: "none", lineHeight: 1.6, fontFamily: "monospace" }}
          />
          {manualEmails.length > 0 && (
            <p style={{ fontSize: "11px", color: "#6B7280", margin: "4px 0 0" }}>👥 {manualEmails.length} address{manualEmails.length !== 1 ? "es" : ""} entered</p>
          )}
        </div>
      )}

      {/* Subject */}
      <div style={{ marginBottom: "12px" }}>
        <label style={{ fontSize: "12px", fontWeight: "600", color: "#374151", display: "block", marginBottom: "6px" }}>Subject line</label>
        <input value={subject} onChange={e => setSubject(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #D1D5DB", fontSize: "13px", boxSizing: "border-box", outline: "none" }} />
      </div>

      {/* Body */}
      <div style={{ marginBottom: "16px" }}>
        <label style={{ fontSize: "12px", fontWeight: "600", color: "#374151", display: "block", marginBottom: "6px" }}>Message body</label>
        <textarea value={messageBody} onChange={e => setMessageBody(e.target.value)} rows={6} style={{ width: "100%", padding: "10px 12px", borderRadius: "8px", border: "1px solid #D1D5DB", fontSize: "13px", boxSizing: "border-box", resize: "vertical", outline: "none", lineHeight: 1.6 }} />
      </div>

      <button onClick={handleSend} disabled={loading || (audience === "manual" && manualEmails.length === 0)} style={{ background: ORANGE, color: "#fff", fontWeight: "800", fontSize: "13px", padding: "10px 24px", borderRadius: "10px", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: (loading || (audience === "manual" && manualEmails.length === 0)) ? 0.6 : 1 }}>
        {loading ? "Sending…" : "🚀 Send Blast"}
      </button>

      {result && (
        <div style={{ marginTop: "14px", padding: "12px 16px", borderRadius: "10px", background: result.error ? "#FEF2F2" : "#F0FDF4", border: `1px solid ${result.error ? "#FCA5A5" : "#86EFAC"}` }}>
          {result.error
            ? <p style={{ color: "#DC2626", fontSize: "13px", margin: 0 }}>Error: {result.error}</p>
            : <p style={{ color: "#15803D", fontSize: "13px", margin: 0 }}>✅ Sent {result.sent} · Failed {result.failed} · Total {result.total}</p>
          }
        </div>
      )}
    </div>
  );
}

// ── Expedia CSV Import ────────────────────────────────────────────────────────
/* ── Travelpayouts Flight Import ──────────────────────────────────────────── */
function TravelpayoutsImport() {
  const [loading, setLoading] = useState(false);
  const [result,  setResult]  = useState(null);
  const [dateFrom, setDateFrom] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return d.toISOString().split("T")[0];
  });
  const [dateTo, setDateTo] = useState(() => new Date().toISOString().split("T")[0]);

  async function runImport() {
    setLoading(true); setResult(null);
    const res  = await fetch("/api/admin/travelpayouts-import", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dateFrom, dateTo, adminEmail: "workhomebalancellc@gmail.com" }),
    });
    const data = await res.json();
    setResult({ ok: res.ok, ...data });
    setLoading(false);
  }

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>✈️ Travelpayouts / Kiwi.com Import</p>
      <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 16px" }}>Fetch flight bookings from Travelpayouts and award points. The daily cron runs this automatically at 5 AM ET.</p>

      <div style={{ display: "flex", gap: "10px", marginBottom: "12px", flexWrap: "wrap", alignItems: "flex-end" }}>
        <div>
          <label style={{ display: "block", fontSize: "11px", fontWeight: "600", color: "#6B7280", marginBottom: "4px" }}>Date From</label>
          <input type="date" value={dateFrom} onChange={e => setDateFrom(e.target.value)}
            style={{ padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px" }} />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "11px", fontWeight: "600", color: "#6B7280", marginBottom: "4px" }}>Date To</label>
          <input type="date" value={dateTo} onChange={e => setDateTo(e.target.value)}
            style={{ padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px" }} />
        </div>
        <button onClick={runImport} disabled={loading}
          style={{ background: NAVY, color: "#fff", border: "none", borderRadius: "8px", padding: "9px 18px", fontSize: "13px", fontWeight: "700", cursor: loading ? "default" : "pointer", opacity: loading ? 0.7 : 1 }}>
          {loading ? "Running…" : "Run Import Now"}
        </button>
      </div>

      {result && (
        <div style={{ background: result.ok ? "#F0FDF4" : "#FEF2F2", border: `1px solid ${result.ok ? "#86EFAC" : "#FECACA"}`, borderRadius: "8px", padding: "12px", fontSize: "12px" }}>
          {result.ok ? (
            <>
              <p style={{ fontWeight: "700", color: "#166534", margin: "0 0 6px" }}>
                ✅ Import complete — {result.bookingsFound ?? 0} booking(s) found
              </p>
              <p style={{ color: "#374151", margin: "0 0 4px" }}>Awarded: {result.awarded?.length ?? 0} · Skipped: {result.skipped?.length ?? 0}</p>
              {result.awarded?.length > 0 && result.awarded.map((a, i) => (
                <p key={i} style={{ color: "#166534", margin: "2px 0", fontFamily: "monospace" }}>
                  → {a.email} · {a.from} → {a.to} · {a.pts} pts (${a.commissionUSD?.toFixed(2)})
                </p>
              ))}
              {result.skipped?.length > 0 && result.skipped.map((s, i) => (
                <p key={i} style={{ color: "#B45309", margin: "2px 0", fontFamily: "monospace" }}>
                  ⚠ {s.ref} — {s.reason}
                </p>
              ))}
            </>
          ) : (
            <p style={{ color: "#991B1B", margin: 0 }}>❌ {result.error || "Import failed"}</p>
          )}
        </div>
      )}
    </div>
  );
}

/* ── Expedia Import ────────────────────────────────────────────────────────── */
function ExpediaImport({ adminEmail }) {
  const [csvText,   setCsvText]   = useState("");
  const [rows,      setRows]      = useState([]);
  const [loading,   setLoading]   = useState(false);
  const [msg,       setMsg]       = useState("");
  const [awarding,  setAwarding]  = useState(null); // dedupKey being awarded
  // Per-row selected user (uid) — key = dedupKey
  const [selected,  setSelected]  = useState({});

  function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setCsvText(ev.target.result);
    reader.readAsText(file);
  }

  async function parseCSV() {
    if (!csvText.trim()) { setMsg("Please upload a CSV file first."); return; }
    setLoading(true); setMsg(""); setRows([]);
    const res  = await fetch("/api/admin/expedia-import", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adminEmail, csvText }),
    });
    const data = await res.json();
    if (!res.ok) { setMsg("Error: " + (data.error || "Unknown")); setLoading(false); return; }
    setRows(data.rows || []);
    if ((data.rows || []).length === 0) setMsg("No lodging bookings found in this CSV.");
    setLoading(false);
  }

  async function awardRow(row) {
    const uid = selected[row.dedupKey];
    if (!uid) { setMsg("Select a user for this row first."); return; }
    // Find the click record for context
    const click = row.matchingClicks.find(c => c.uid === uid);
    setAwarding(row.dedupKey);
    const res = await fetch("/api/admin/expedia-import", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        adminEmail, action: "award",
        row,
        uid,
        email:   click?.email || uid,
        name:    click?.name  || "",
        clickId: click?.clickId || null,
      }),
    });
    const data = await res.json();
    if (res.ok) {
      setRows(prev => prev.map(r => r.dedupKey === row.dedupKey ? { ...r, alreadyImported: true } : r));
      setMsg(`✓ ${row.pts?.toLocaleString()} pts awarded to ${click?.email || uid}`);
    } else {
      setMsg("Error: " + (data.error || "Unknown"));
    }
    setAwarding(null);
  }

  const pendingRows = rows.filter(r => !r.alreadyImported);
  const doneRows    = rows.filter(r =>  r.alreadyImported);

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>📥 Expedia Bookings Import</p>
      <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 16px" }}>
        Download your bookings CSV from{" "}
        <a href="https://creator.expediagroup.com/app/performance" target="_blank" rel="noopener noreferrer"
          style={{ color: NAVY, fontWeight: "600" }}>Expedia Creator → Performance</a>
        , then upload it here. Only Lodging rows are processed (flights are skipped).
      </p>

      <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "14px", flexWrap: "wrap" }}>
        <input type="file" accept=".csv" onChange={handleFile}
          style={{ fontSize: "12px", color: "#374151" }} />
        <button onClick={parseCSV} disabled={loading || !csvText.trim()}
          style={{ padding: "8px 16px", background: NAVY, color: "#fff", border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: "700", cursor: "pointer", opacity: loading || !csvText.trim() ? 0.6 : 1 }}>
          {loading ? "Parsing…" : "Parse CSV"}
        </button>
        {rows.length > 0 && (
          <span style={{ fontSize: "11px", color: "#6B7280" }}>
            {pendingRows.length} pending · {doneRows.length} already imported
          </span>
        )}
      </div>

      {msg && (
        <p style={{ fontSize: "12px", color: msg.startsWith("✓") ? GREEN : "#DC2626", margin: "0 0 12px", fontWeight: "600" }}>{msg}</p>
      )}

      {pendingRows.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {pendingRows.map(row => (
            <div key={row.dedupKey} style={{ border: "1px solid #E5E7EB", borderRadius: "10px", padding: "14px", background: "#F9FAFB" }}>
              {/* Booking info */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 3px" }}>
                    🏨 {row.product}
                  </p>
                  <p style={{ fontSize: "11px", color: "#6B7280", margin: 0 }}>
                    {row.destinationCity}{row.country ? ` · ${row.country}` : ""} · {row.startDate}{row.endDate ? ` → ${row.endDate}` : ""} · {row.travelers} guest{row.travelers !== 1 ? "s" : ""}
                  </p>
                  <p style={{ fontSize: "11px", color: "#6B7280", margin: "2px 0 0" }}>
                    Booked: {row.bookedDate?.split(" ")[0]} · Status: <strong>{row.tripStatus}</strong>
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ fontSize: "14px", fontWeight: "800", color: NAVY, margin: 0 }}>${row.bookingAmount?.toFixed(2)}</p>
                  <p style={{ fontSize: "11px", color: "#6B7280", margin: "2px 0" }}>Commission: ${row.commission?.toFixed(2)}</p>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: ORANGE, margin: 0 }}>{row.pts?.toLocaleString()} pts to award</p>
                </div>
              </div>

              {/* User match */}
              <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "10px" }}>
                {row.matchingClicks.length > 0 ? (
                  <>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: "#374151", margin: "0 0 8px" }}>
                      🔍 {row.matchingClicks.length} matching user click{row.matchingClicks.length !== 1 ? "s" : ""} found:
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                      {row.matchingClicks.map(c => (
                        <label key={c.uid} style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                          <input type="radio" name={row.dedupKey} value={c.uid}
                            checked={selected[row.dedupKey] === c.uid}
                            onChange={() => setSelected(s => ({ ...s, [row.dedupKey]: c.uid }))} />
                          <span style={{ fontSize: "12px", color: "#111827" }}>
                            <strong>{c.name || c.email}</strong>
                            {c.name ? ` · ${c.email}` : ""}
                            {c.destination ? ` · searched "${c.destination}"` : ""}
                            <span style={{ color: "#9CA3AF", marginLeft: "6px" }}>{c.clickedAt?.split("T")[0]}</span>
                          </span>
                        </label>
                      ))}
                    </div>
                  </>
                ) : (
                  <p style={{ fontSize: "11px", color: "#9CA3AF", margin: "0 0 8px", fontStyle: "italic" }}>
                    ⚠️ No matching user click found within 72 hours. Enter user email manually:
                  </p>
                )}

                {/* Manual UID fallback */}
                {row.matchingClicks.length === 0 && (
                  <input type="text" placeholder="User UID (from admin panel)"
                    value={selected[row.dedupKey] || ""}
                    onChange={e => setSelected(s => ({ ...s, [row.dedupKey]: e.target.value }))}
                    style={{ width: "100%", padding: "7px 10px", border: "1.5px solid #E5E7EB", borderRadius: "7px", fontSize: "12px", boxSizing: "border-box", outline: "none" }} />
                )}
              </div>

              <div style={{ marginTop: "10px", display: "flex", justifyContent: "flex-end" }}>
                <button onClick={() => awardRow(row)} disabled={!selected[row.dedupKey] || awarding === row.dedupKey}
                  style={{ padding: "8px 20px", background: selected[row.dedupKey] ? ORANGE : "#D1D5DB", color: "#fff", border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: "700", cursor: selected[row.dedupKey] ? "pointer" : "not-allowed" }}>
                  {awarding === row.dedupKey ? "Awarding…" : `Award ${row.pts?.toLocaleString()} pts →`}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {doneRows.length > 0 && (
        <div style={{ marginTop: "12px", padding: "10px 14px", background: "#F0FDF4", borderRadius: "8px" }}>
          <p style={{ fontSize: "11px", fontWeight: "700", color: "#15803D", margin: "0 0 4px" }}>✓ Already imported ({doneRows.length}):</p>
          {doneRows.map(r => (
            <p key={r.dedupKey} style={{ fontSize: "11px", color: "#374151", margin: "2px 0" }}>
              {r.product} · {r.destinationCity} · {r.bookedDate?.split(" ")[0]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

/* ── Expedia Cancellation Import ───────────────────────────────────────────── */
function ExpediaCancelImport({ adminEmail }) {
  const [csvText,    setCsvText]    = useState("");
  const [rows,       setRows]       = useState([]);
  const [loading,    setLoading]    = useState(false);
  const [retracting, setRetracting] = useState(null); // dedupKey being retracted
  const [msg,        setMsg]        = useState("");

  function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setCsvText(ev.target.result);
    reader.readAsText(file);
  }

  async function parseCSV() {
    if (!csvText.trim()) { setMsg("Please upload a CSV file first."); return; }
    setLoading(true); setMsg(""); setRows([]);
    const res  = await fetch("/api/admin/expedia-cancel", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adminEmail, csvText }),
    });
    const data = await res.json();
    if (!res.ok) { setMsg("Error: " + (data.error || "Unknown")); setLoading(false); return; }
    setRows(data.rows || []);
    if ((data.rows || []).length === 0) setMsg("No lodging cancellations found in this CSV.");
    setLoading(false);
  }

  async function retractRow(row) {
    setRetracting(row.dedupKey);
    const res = await fetch("/api/admin/expedia-cancel", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        adminEmail, action: "retract",
        dedupKey: row.dedupKey,
        uid:      row.uid,
        email:    row.email,
        name:     row.name,
        pts:      row.pts,
        importId: row.importId,
      }),
    });
    const data = await res.json();
    if (res.ok) {
      setRows(prev => prev.map(r => r.dedupKey === row.dedupKey ? { ...r, alreadyRetracted: true } : r));
      setMsg(`✓ ${row.pts?.toLocaleString()} pts retracted from ${row.email}`);
    } else {
      setMsg("Error: " + (data.error || "Unknown"));
    }
    setRetracting(null);
  }

  const awardedRows    = rows.filter(r => r.awarded && !r.alreadyRetracted);
  const retractedRows  = rows.filter(r => r.alreadyRetracted);
  const noPointsRows   = rows.filter(r => !r.awarded);

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>
        🚫 Expedia Cancellation Import
      </p>
      <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 14px" }}>
        Upload a canceled bookings CSV to identify and retract points for canceled trips.
      </p>

      <div style={{ display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", marginBottom: "12px" }}>
        <input type="file" accept=".csv" onChange={handleFile}
          style={{ fontSize: "12px", color: "#374151" }} />
        <button onClick={parseCSV} disabled={loading || !csvText}
          style={{ padding: "8px 18px", background: loading ? "#D1D5DB" : NAVY, color: "#fff", border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: "700", cursor: loading || !csvText ? "not-allowed" : "pointer" }}>
          {loading ? "Checking…" : "Check Cancellations"}
        </button>
      </div>

      {msg && (
        <p style={{ fontSize: "12px", color: msg.startsWith("✓") ? GREEN : "#DC2626", margin: "0 0 12px", fontWeight: "600" }}>
          {msg}
        </p>
      )}

      {/* Rows with points to retract */}
      {awardedRows.length > 0 && (
        <div style={{ marginBottom: "14px" }}>
          <p style={{ fontSize: "12px", fontWeight: "700", color: "#DC2626", margin: "0 0 8px" }}>
            ⚠️ Points to retract ({awardedRows.length}):
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {awardedRows.map(row => (
              <div key={row.dedupKey} style={{ border: "1.5px solid #FECACA", borderRadius: "10px", padding: "12px 14px", background: "#FEF2F2" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 2px" }}>{row.product}</p>
                    <p style={{ fontSize: "11px", color: "#6B7280", margin: "0 0 2px" }}>
                      {row.destinationCity} · Booked {row.bookedDate?.split(" ")[0]} · Stay {row.startDate} → {row.endDate}
                    </p>
                    <p style={{ fontSize: "12px", color: "#374151", margin: 0 }}>
                      <strong>{row.name || row.email}</strong>{row.name ? ` · ${row.email}` : ""}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: "14px", fontWeight: "800", color: "#DC2626", margin: "0 0 6px" }}>
                      −{row.pts?.toLocaleString()} pts
                    </p>
                    <button onClick={() => retractRow(row)} disabled={retracting === row.dedupKey}
                      style={{ padding: "7px 16px", background: retracting === row.dedupKey ? "#D1D5DB" : "#DC2626", color: "#fff", border: "none", borderRadius: "7px", fontSize: "12px", fontWeight: "700", cursor: retracting === row.dedupKey ? "not-allowed" : "pointer" }}>
                      {retracting === row.dedupKey ? "Retracting…" : "Retract pts →"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Already retracted */}
      {retractedRows.length > 0 && (
        <div style={{ marginBottom: "14px", padding: "10px 14px", background: "#F0FDF4", borderRadius: "8px" }}>
          <p style={{ fontSize: "11px", fontWeight: "700", color: "#15803D", margin: "0 0 4px" }}>✓ Already retracted ({retractedRows.length}):</p>
          {retractedRows.map(r => (
            <p key={r.dedupKey} style={{ fontSize: "11px", color: "#374151", margin: "2px 0" }}>
              {r.product} · {r.destinationCity} · {r.bookedDate?.split(" ")[0]} · {r.email}
            </p>
          ))}
        </div>
      )}

      {/* No points awarded — nothing to do */}
      {noPointsRows.length > 0 && (
        <div style={{ padding: "10px 14px", background: "#F8FAFF", borderRadius: "8px" }}>
          <p style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", margin: "0 0 4px" }}>No points on file ({noPointsRows.length}):</p>
          {noPointsRows.map(r => (
            <p key={r.dedupKey} style={{ fontSize: "11px", color: "#9CA3AF", margin: "2px 0" }}>
              {r.product} · {r.destinationCity} · {r.bookedDate?.split(" ")[0]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

// ── Manage / Delete Bookings ──────────────────────────────────────────────────
function ManageBookings({ adminEmail }) {
  const [email,    setEmail]    = useState("");
  const [bookings, setBookings] = useState([]);
  const [loading,  setLoading]  = useState(false);
  const [deleting,   setDeleting]   = useState(null); // bookingId being deleted
  const [cancelling, setCancelling] = useState(null); // bookingId being cancelled
  const [msg,        setMsg]        = useState("");

  async function lookup() {
    if (!email) return;
    setLoading(true); setMsg(""); setBookings([]);
    // Find user UID by email
    const res  = await fetch("/api/admin/firestore", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "lookup", email }),
    });
    const data = await res.json();
    if (!res.ok) { setMsg("⚠️ No account found for that email."); setLoading(false); return; }

    // Fetch their bookings
    const bRes  = await fetch(`/api/admin/bookings?uid=${data.uid}`);
    const bData = await bRes.json();
    setBookings(bData.bookings || []);
    if ((bData.bookings || []).length === 0) setMsg("No bookings on file for this customer.");
    setLoading(false);
  }

  async function cancelBooking(bookingId, pts) {
    if (!window.confirm(`Cancel this booking? This will deduct ${pts?.toLocaleString() || 0} pts from the customer.`)) return;
    setCancelling(bookingId);
    await fetch("/api/admin/bookings", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "cancel", adminEmail, bookingId }),
    });
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: "cancelled" } : b));
    setCancelling(null);
  }

  async function deleteBooking(bookingId) {
    if (!window.confirm("Delete this booking? This cannot be undone.")) return;
    setDeleting(bookingId);
    await fetch("/api/admin/bookings", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "delete", adminEmail, bookingId }),
    });
    setBookings(prev => prev.filter(b => b.id !== bookingId));
    setDeleting(null);
  }

  function fmtDate(str) {
    if (!str) return "—";
    return new Date(str + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  }

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>🗂️ Manage Customer Bookings</p>
      <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 14px" }}>Look up a customer's bookings to remove duplicates or incorrect entries.</p>

      <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && lookup()}
          placeholder="customer@email.com"
          style={{ flex: 1, padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", outline: "none" }} />
        <button onClick={lookup} disabled={loading || !email}
          style={{ padding: "8px 16px", background: NAVY, color: "#fff", border: "none", borderRadius: "8px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}>
          {loading ? "…" : "Look up"}
        </button>
      </div>

      {msg && <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 10px" }}>{msg}</p>}

      {bookings.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {bookings.map(b => (
            <div key={b.id} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 14px", background: "#F9FAFB", borderRadius: "10px", border: "1px solid #E5E7EB" }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 2px" }}>
                  {b.destination || "Unnamed booking"} · {b.product}
                </p>
                <p style={{ fontSize: "11px", color: "#6B7280", margin: 0 }}>
                  {fmtDate(b.startDate)}{b.endDate ? ` → ${fmtDate(b.endDate)}` : ""} · {b.pts?.toLocaleString() || 0} pts · Ref: {b.reference || "—"} · <span style={{ color: b.status === "completed" ? GREEN : NAVY }}>{b.status}</span>
                </p>
              </div>
              {b.status !== "cancelled" && (
                <button onClick={() => cancelBooking(b.id, b.pts)} disabled={cancelling === b.id}
                  style={{ padding: "6px 12px", background: "#FFF7ED", color: "#D97706", border: "1px solid #FDE68A", borderRadius: "8px", fontSize: "11px", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap" }}>
                  {cancelling === b.id ? "…" : "❌ Cancel"}
                </button>
              )}
              <button onClick={() => deleteBooking(b.id)} disabled={deleting === b.id}
                style={{ padding: "6px 12px", background: "#FEF2F2", color: "#DC2626", border: "1px solid #FECACA", borderRadius: "8px", fontSize: "11px", fontWeight: "700", cursor: "pointer", whiteSpace: "nowrap" }}>
                {deleting === b.id ? "…" : "🗑️ Delete"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

function AdminLogin() {
  const { signInWithEmail, signInWithGoogle } = useAuth();
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState(null);
  const [loading, setLoading]   = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await signInWithEmail(email, password);
    } catch {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogle() {
    setError(null);
    try {
      await signInWithGoogle();
    } catch {
      setError("Google sign-in failed. Try email/password.");
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F0F4FF", fontFamily: "system-ui, -apple-system, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div style={{ background: "#fff", borderRadius: "20px", padding: "40px", width: "100%", maxWidth: "400px", boxShadow: "0 8px 40px rgba(0,59,149,0.12)", border: "1px solid #E5E7EB" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <p style={{ fontSize: "22px", fontWeight: "800", color: NAVY, margin: "0 0 4px" }}>
            Room<span style={{ color: ORANGE }}>Voyager</span>
          </p>
          <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>Admin access only</p>
        </div>

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div>
            <label style={{ fontSize: "12px", fontWeight: "600", color: "#374151", display: "block", marginBottom: "4px" }}>Email</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
              style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #D1D5DB", borderRadius: "8px", fontSize: "14px", boxSizing: "border-box", outline: "none" }} />
          </div>
          <div>
            <label style={{ fontSize: "12px", fontWeight: "600", color: "#374151", display: "block", marginBottom: "4px" }}>Password</label>
            <input type="password" required value={password} onChange={e => setPassword(e.target.value)}
              style={{ width: "100%", padding: "10px 12px", border: "1.5px solid #D1D5DB", borderRadius: "8px", fontSize: "14px", boxSizing: "border-box", outline: "none" }} />
          </div>
          {error && <p style={{ fontSize: "12px", color: "#DC2626", margin: 0, textAlign: "center" }}>{error}</p>}
          <button type="submit" disabled={loading}
            style={{ padding: "11px", background: loading ? "#D1D5DB" : NAVY, color: "#fff", border: "none", borderRadius: "8px", fontWeight: "700", fontSize: "14px", cursor: loading ? "default" : "pointer", marginTop: "4px" }}>
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "16px 0" }}>
          <div style={{ flex: 1, height: "1px", background: "#E5E7EB" }} />
          <span style={{ fontSize: "11px", color: "#9CA3AF" }}>or</span>
          <div style={{ flex: 1, height: "1px", background: "#E5E7EB" }} />
        </div>

        <button onClick={handleGoogle}
          style={{ width: "100%", padding: "11px", background: "#fff", border: "1.5px solid #D1D5DB", borderRadius: "8px", fontWeight: "600", fontSize: "14px", cursor: "pointer", color: "#374151", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
          onMouseEnter={e => e.currentTarget.style.borderColor = NAVY}
          onMouseLeave={e => e.currentTarget.style.borderColor = "#D1D5DB"}>
          <span>🔑</span> Sign in with Google
        </button>
      </div>
    </div>
  );
}

function AwardPoints() {
  const [email, setEmail]       = useState("");
  const [found, setFound]       = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [amount, setAmount]     = useState("");
  const [action, setAction]     = useState("add");
  const [status, setStatus]     = useState("");
  const [loading, setLoading]   = useState(false);

  async function callApi(body) {
    const res = await fetch("/api/admin/firestore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return { ok: res.ok, data: await res.json() };
  }

  async function lookupUser() {
    setStatus(""); setFound(null); setNotFound(false);
    setLoading(true);
    const { ok, data } = await callApi({ action: "lookup", email });
    if (ok) {
      setFound({ uid: data.uid, name: data.name, email: data.email, points: data.points || 0 });
    } else if (data.error === "not_found") {
      setNotFound(true);
    } else {
      setStatus("❌ Error: " + data.error);
    }
    setLoading(false);
  }

  async function createMember() {
    setLoading(true); setStatus("");
    const { ok, data } = await callApi({ action: "create", email });
    if (ok) {
      setFound({ uid: data.uid, name: data.name || "", email: data.email, points: data.points || 0 });
      setNotFound(false);
      setStatus("✅ Member record created. You can now adjust their points.");
    } else {
      setStatus("❌ Error: " + data.error);
    }
    setLoading(false);
  }

  async function applyPoints() {
    if (!found || !amount) return;
    const pts = parseInt(amount, 10);
    if (isNaN(pts) || pts <= 0) { setStatus("❌ Enter a valid number of points."); return; }
    setLoading(true); setStatus("");
    const actionMap = { add: "addPoints", deduct: "deductPoints", set: "setPoints" };
    const { ok, data } = await callApi({ action: actionMap[action], email: found.email, amount: pts });
    if (ok) {
      setFound(prev => ({ ...prev, points: data.points }));
      setStatus(`✅ Done! ${found.name || found.email} now has ${data.points.toLocaleString()} pts.`);
      setAmount("");
    } else {
      setStatus("❌ " + data.error);
    }
    setLoading(false);
  }

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>🎯 Award / Adjust Points</p>
      <p style={{ fontSize: "11px", color: "#6B7280", margin: "0 0 16px" }}>Look up a member by email and add, deduct, or set their balance.</p>

      {/* Email lookup */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
        <input value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && lookupUser()}
          placeholder="member@email.com"
          style={{ flex: 1, padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", outline: "none" }} />
        <button onClick={lookupUser} disabled={loading || !email}
          style={{ background: NAVY, color: "#fff", border: "none", borderRadius: "8px", padding: "9px 16px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
          {loading ? "..." : "Look up"}
        </button>
      </div>

      {/* Not found — offer to create */}
      {notFound && (
        <div style={{ background: "#FEF2F2", borderRadius: "10px", padding: "14px", marginBottom: "14px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <div>
            <p style={{ fontSize: "13px", fontWeight: "700", color: "#DC2626", margin: "0 0 2px" }}>No account found for that email.</p>
            <p style={{ fontSize: "11px", color: "#6B7280", margin: 0 }}>They may not have signed in yet. Create a record and set their points now.</p>
          </div>
          <button onClick={createMember} disabled={loading}
            style={{ whiteSpace: "nowrap", background: NAVY, color: "#fff", border: "none", borderRadius: "8px", padding: "9px 14px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}>
            {loading ? "..." : "Create Member"}
          </button>
        </div>
      )}

      {/* Found user */}
      {found && (
        <div style={{ background: "#F0F4FF", borderRadius: "10px", padding: "14px", marginBottom: "14px" }}>
          <p style={{ fontWeight: "700", color: "#111827", margin: "0 0 2px", fontSize: "13px" }}>{found.name || "—"} · {found.email}</p>
          <p style={{ fontSize: "20px", fontWeight: "800", color: NAVY, margin: 0 }}>{found.points.toLocaleString()} pts</p>
        </div>
      )}

      {/* Action */}
      {found && (
        <>
          <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
            {[["add","➕ Add"],["deduct","➖ Deduct"],["set","🔧 Set to"]].map(([val, label]) => (
              <button key={val} onClick={() => setAction(val)}
                style={{ flex: 1, padding: "7px", border: `2px solid ${action === val ? ORANGE : "#E5E7EB"}`, background: action === val ? "#FFF7ED" : "#fff", borderRadius: "8px", fontSize: "12px", fontWeight: "700", color: action === val ? ORANGE : "#374151", cursor: "pointer" }}>
                {label}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Points"
              style={{ flex: 1, padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", outline: "none" }} />
            <button onClick={applyPoints} disabled={loading || !amount}
              style={{ background: ORANGE, color: "#fff", border: "none", borderRadius: "8px", padding: "9px 20px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
              {loading ? "..." : "Apply"}
            </button>
          </div>
        </>
      )}

      {status && <p style={{ fontSize: "13px", marginTop: "12px", fontWeight: "600", color: status.startsWith("✅") ? GREEN : "#DC2626" }}>{status}</p>}
    </div>
  );
}

/* ── IATA → Kiwi slug map (mirrors flights/page.jsx) ───────────── */
const IATA_MAP = {
  ATL:"atlanta-georgia-united-states",LAX:"los-angeles-california-united-states",
  ORD:"chicago-illinois-united-states",DFW:"dallas-texas-united-states",
  DEN:"denver-colorado-united-states",JFK:"john-f-kennedy-international-new-york-city-new-york-united-states",
  SFO:"san-francisco-california-united-states",SEA:"seattle-washington-united-states",
  LAS:"las-vegas-nevada-united-states",MCO:"orlando-florida-united-states",
  MIA:"miami-florida-united-states",CLT:"charlotte-north-carolina-united-states",
  EWR:"newark-new-jersey-united-states",PHX:"phoenix-arizona-united-states",
  IAH:"houston-texas-united-states",BOS:"boston-massachusetts-united-states",
  MSP:"minneapolis-minnesota-united-states",DTW:"detroit-michigan-united-states",
  FLL:"fort-lauderdale-florida-united-states",PHL:"philadelphia-pennsylvania-united-states",
  LGA:"laguardia-new-york-city-new-york-united-states",DCA:"washington-district-of-columbia-united-states",
  IAD:"washington-district-of-columbia-united-states",BWI:"baltimore-maryland-united-states",
  MDW:"chicago-illinois-united-states",SLC:"salt-lake-city-utah-united-states",
  SAN:"san-diego-california-united-states",PDX:"portland-oregon-united-states",
  HOU:"houston-texas-united-states",AUS:"austin-texas-united-states",
  MCI:"kansas-city-missouri-united-states",STL:"st-louis-missouri-united-states",
  BNA:"nashville-tennessee-united-states",RDU:"raleigh-north-carolina-united-states",
  MEM:"memphis-tennessee-united-states",CLE:"cleveland-ohio-united-states",
  PIT:"pittsburgh-pennsylvania-united-states",CMH:"columbus-ohio-united-states",
  IND:"indianapolis-indiana-united-states",MKE:"milwaukee-wisconsin-united-states",
  TPA:"tampa-florida-united-states",PIE:"st-petersburg-florida-united-states",
  RSW:"fort-myers-florida-united-states",JAX:"jacksonville-florida-united-states",
  PBI:"west-palm-beach-florida-united-states",SRQ:"sarasota-florida-united-states",
  TLH:"tallahassee-florida-united-states",PNS:"pensacola-florida-united-states",
  VPS:"fort-walton-beach-florida-united-states",MLB:"melbourne-florida-united-states",
  EYW:"key-west-florida-united-states",GNV:"gainesville-florida-united-states",
  PGD:"punta-gorda-florida-united-states",
  SAV:"savannah-georgia-united-states",CHS:"charleston-south-carolina-united-states",
  MSY:"new-orleans-louisiana-united-states",BHM:"birmingham-alabama-united-states",
  MOB:"mobile-alabama-united-states",HSV:"huntsville-alabama-united-states",
  GSP:"greenville-south-carolina-united-states",GSO:"greensboro-north-carolina-united-states",
  AVL:"asheville-north-carolina-united-states",ORF:"norfolk-virginia-united-states",
  RIC:"richmond-virginia-united-states",ILM:"wilmington-north-carolina-united-states",
  FAY:"fayetteville-north-carolina-united-states",TYS:"knoxville-tennessee-united-states",
  CHA:"chattanooga-tennessee-united-states",JAN:"jackson-mississippi-united-states",
  GPT:"gulfport-mississippi-united-states",BTR:"baton-rouge-louisiana-united-states",
  SHV:"shreveport-louisiana-united-states",LFT:"lafayette-louisiana-united-states",
  LEX:"lexington-kentucky-united-states",SDF:"louisville-kentucky-united-states",
  BGR:"bangor-maine-united-states",PWM:"portland-maine-united-states",
  BTV:"burlington-vermont-united-states",MHT:"manchester-new-hampshire-united-states",
  PVD:"providence-rhode-island-united-states",BDL:"hartford-connecticut-united-states",
  ALB:"albany-new-york-united-states",SYR:"syracuse-new-york-united-states",
  ROC:"rochester-new-york-united-states",BUF:"buffalo-new-york-united-states",
  ABE:"allentown-pennsylvania-united-states",MDT:"harrisburg-pennsylvania-united-states",
  DSM:"des-moines-iowa-united-states",CID:"cedar-rapids-iowa-united-states",
  OMA:"omaha-nebraska-united-states",LNK:"lincoln-nebraska-united-states",
  FSD:"sioux-falls-south-dakota-united-states",FAR:"fargo-north-dakota-united-states",
  BIS:"bismarck-north-dakota-united-states",GRR:"grand-rapids-michigan-united-states",
  TOL:"toledo-ohio-united-states",DAY:"dayton-ohio-united-states",
  CAK:"akron-ohio-united-states",SBN:"south-bend-indiana-united-states",
  GRB:"green-bay-wisconsin-united-states",MSN:"madison-wisconsin-united-states",
  SAT:"san-antonio-texas-united-states",ELP:"el-paso-texas-united-states",
  CRP:"corpus-christi-texas-united-states",LBB:"lubbock-texas-united-states",
  AMA:"amarillo-texas-united-states",MAF:"midland-texas-united-states",
  HRL:"harlingen-texas-united-states",MFE:"mcallen-texas-united-states",
  OKC:"oklahoma-city-oklahoma-united-states",TUL:"tulsa-oklahoma-united-states",
  ABQ:"albuquerque-new-mexico-united-states",TUS:"tucson-arizona-united-states",
  RNO:"reno-nevada-united-states",BOI:"boise-idaho-united-states",
  GEG:"spokane-washington-united-states",BZN:"bozeman-montana-united-states",
  BIL:"billings-montana-united-states",MSO:"missoula-montana-united-states",
  JAC:"jackson-wyoming-united-states",COS:"colorado-springs-colorado-united-states",
  ASE:"aspen-colorado-united-states",DRO:"durango-colorado-united-states",
  OAK:"oakland-california-united-states",SJC:"san-jose-california-united-states",
  SMF:"sacramento-california-united-states",SNA:"santa-ana-california-united-states",
  BUR:"burbank-california-united-states",LGB:"long-beach-california-united-states",
  ONT:"ontario-california-united-states",FAT:"fresno-california-united-states",
  PSP:"palm-springs-california-united-states",
  HNL:"honolulu-hawaii-united-states",OGG:"kahului-hawaii-united-states",
  KOA:"kailua-hawaii-united-states",LIH:"lihue-kauai-hawaii-united-states",
  ANC:"anchorage-alaska-united-states",FAI:"fairbanks-alaska-united-states",
  XNA:"fayetteville-arkansas-united-states",LIT:"little-rock-arkansas-united-states",
  ROA:"roanoke-virginia-united-states",
  FWA:"fort-wayne-indiana-united-states",
  MYR:"myrtle-beach-south-carolina-united-states",SGF:"springfield-missouri-united-states",
};

const INTL_MAP = {
  // ── Caribbean & Mexico ──
  CUN:"cancun-mexico",
  SJD:"cabo-san-lucas-mexico",
  PVR:"puerto-vallarta-mexico",
  GDL:"guadalajara-mexico",
  MEX:"mexico-city-mexico",
  CZM:"cozumel-mexico",
  ZIH:"ixtapa-mexico",
  MBJ:"montego-bay-jamaica",
  KIN:"kingston-jamaica",
  NAS:"nassau-bahamas",
  AUA:"aruba-aruba",
  PUJ:"punta-cana-dominican-republic",
  SDQ:"santo-domingo-dominican-republic",
  SJU:"san-juan-puerto-rico-united-states",
  BQN:"aguadilla-puerto-rico-united-states",
  SXM:"saint-martin-island-st-martin",
  GCM:"grand-cayman-cayman-islands",
  HAV:"havana-cuba",
  VRA:"varadero-cuba",
  BGI:"bridgetown-barbados",
  UVF:"saint-lucia-st-lucia",
  GND:"st-george-s-grenada",
  // ── Canada ──
  YYZ:"toronto-ontario-canada",
  YVR:"vancouver-british-columbia-canada",
  YUL:"montreal-quebec-canada",
  YYC:"calgary-alberta-canada",
  YEG:"edmonton-alberta-canada",
  YOW:"ottawa-ontario-canada",
  // ── Europe ──
  LHR:"london-united-kingdom",
  LGW:"london-united-kingdom",
  CDG:"paris-france",
  FCO:"rome-italy",
  VCE:"venice-italy",
  FLR:"florence-italy",
  NAP:"naples-italy",
  AMS:"amsterdam-netherlands",
  BCN:"barcelona-spain",
  MAD:"madrid-spain",
  FRA:"frankfurt-germany",
  MUC:"munich-germany",
  DUS:"dusseldorf-germany",
  HAM:"hamburg-germany",
  DUB:"dublin-ireland",
  ATH:"athens-greece",
  LIS:"lisbon-portugal",
  MXP:"milan-italy",
  ZRH:"zurich-switzerland",
  GVA:"geneva-switzerland",
  VIE:"vienna-austria",
  CPH:"copenhagen-denmark",
  ARN:"stockholm-sweden",
  OSL:"oslo-norway",
  HEL:"helsinki-finland",
  KEF:"reykjavik-iceland",
  EDI:"edinburgh-united-kingdom",
  MAN:"manchester-united-kingdom",
  NCE:"nice-france",
  PRG:"prague-czechia",
  BRU:"city-of-brussels-belgium",
  BUD:"budapest-hungary",
  WAW:"warsaw-poland",
  // ── Middle East ──
  DXB:"dubai-united-arab-emirates",
  DOH:"doha-qatar",
  AUH:"abu-dhabi-united-arab-emirates",
  // ── Asia ──
  NRT:"tokyo-japan",
  HND:"tokyo-japan",
  KIX:"osaka-japan",
  ICN:"seoul-south-korea",
  HKG:"hong-kong-hong-kong-1",
  BKK:"bangkok-thailand",
  SIN:"singapore-singapore",
  KUL:"kuala-lumpur-malaysia",
  DEL:"new-delhi-india",
  BOM:"mumbai-india",
  // ── Pacific & Australia ──
  SYD:"sydney-new-south-wales-australia",
  MEL:"melbourne-victoria-australia",
  BNE:"brisbane-queensland-australia",
  AKL:"auckland-auckland-new-zealand",
  NAN:"nadi-fiji",
  PPT:"tahiti-french-polynesia",
  // ── Latin America ──
  GRU:"sao-paulo-state-of-sao-paulo-brazil",
  GIG:"rio-de-janeiro-state-of-rio-de-janeiro-brazil",
  EZE:"buenos-aires-buenos-aires-argentina",
  SCL:"santiago-chile",
  BOG:"bogota-colombia",
  LIM:"lima-peru",
  SJO:"san-jose-costa-rica",
  PTY:"panama-city-panama",
  BZE:"belize-city-belize",
  // ── Africa ──
  JNB:"johannesburg-south-africa",
  CPT:"cape-town-south-africa",
  CAI:"cairo-egypt",
};

function ReferralsPanel() {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    const res  = await fetch("/api/admin/firestore", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "listReferrals" }) });
    const json = await res.json();
    setData(json);
    setLoading(false);
  }

  async function awardManual(uid, product) {
    await fetch("/api/admin/firestore", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "awardReferralBonus", uid, product }) });
    load();
  }

  const thStyle = { fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em", padding: "8px 12px", textAlign: "left" };
  const tdStyle = { fontSize: "13px", color: "#111827", padding: "10px 12px", borderTop: "1px solid #F3F4F6" };

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
        <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: 0 }}>🤝 Referral Tracking</p>
        <button onClick={load} disabled={loading} style={{ background: NAVY, color: "#fff", border: "none", borderRadius: "8px", padding: "7px 16px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}>
          {loading ? "Loading…" : "Load Referrals"}
        </button>
      </div>

      {data && (
        <>
          {/* Pending */}
          <p style={{ fontSize: "12px", fontWeight: "700", color: "#374151", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Pending ({data.pending?.length || 0}) — referred but first booking not yet made
          </p>
          {data.pending?.length > 0 ? (
            <div style={{ overflowX: "auto", marginBottom: "20px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead><tr style={{ background: "#F9FAFB" }}>
                  <th style={thStyle}>Email</th>
                  <th style={thStyle}>Name</th>
                  <th style={thStyle}>Referred By (UID)</th>
                  <th style={thStyle}>Manual Award</th>
                </tr></thead>
                <tbody>
                  {data.pending.map((p, i) => (
                    <tr key={i}>
                      <td style={tdStyle}>{p.email}</td>
                      <td style={tdStyle}>{p.name || "—"}</td>
                      <td style={{ ...tdStyle, fontFamily: "monospace", fontSize: "11px" }}>{p.referredBy}</td>
                      <td style={tdStyle}>
                        <select id={`sel-${i}`} style={{ fontSize: "12px", padding: "4px 6px", borderRadius: "6px", border: "1px solid #D1D5DB", marginRight: "6px" }}>
                          <option value="hotel">Hotel (350 pts)</option>
                          <option value="flight">Flight (200 pts)</option>
                          <option value="cruise">Cruise (500 pts)</option>
                        </select>
                        <button onClick={() => awardManual(p.uid, document.getElementById(`sel-${i}`).value)}
                          style={{ background: ORANGE, color: "#fff", border: "none", borderRadius: "6px", padding: "4px 10px", fontSize: "12px", fontWeight: "700", cursor: "pointer" }}>
                          Award
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : <p style={{ fontSize: "13px", color: "#9CA3AF", marginBottom: "20px" }}>No pending referrals.</p>}

          {/* Awarded */}
          <p style={{ fontSize: "12px", fontWeight: "700", color: "#374151", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Awarded ({data.bonuses?.length || 0})
          </p>
          {data.bonuses?.length > 0 ? (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead><tr style={{ background: "#F9FAFB" }}>
                  <th style={thStyle}>Referred UID</th>
                  <th style={thStyle}>Referrer UID</th>
                  <th style={thStyle}>Product</th>
                  <th style={thStyle}>Pts Each</th>
                  <th style={thStyle}>Awarded</th>
                </tr></thead>
                <tbody>
                  {data.bonuses.map((b, i) => (
                    <tr key={i}>
                      <td style={{ ...tdStyle, fontFamily: "monospace", fontSize: "11px" }}>{b.referredUid}</td>
                      <td style={{ ...tdStyle, fontFamily: "monospace", fontSize: "11px" }}>{b.referrerUid}</td>
                      <td style={tdStyle}>{b.product}</td>
                      <td style={{ ...tdStyle, fontWeight: "700", color: GREEN }}>{b.pts}</td>
                      <td style={tdStyle}>{b.awardedAt ? new Date(b.awardedAt).toLocaleDateString() : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : <p style={{ fontSize: "13px", color: "#9CA3AF" }}>No awarded referrals yet.</p>}
        </>
      )}
    </div>
  );
}

function AirportSlugDirectory() {
  const [filter, setFilter] = useState("");
  const [open,   setOpen]   = useState(false);

  function humanize(slug) {
    return slug
      .replace(/-united-states$/, "").replace(/-united-kingdom$/, "").replace(/-canada$/, "")
      .split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  }

  const entries = Object.entries(IATA_MAP);
  const q = filter.trim().toLowerCase();
  const filtered = q
    ? entries.filter(([code, slug]) => code.toLowerCase().includes(q) || slug.includes(q))
    : entries;

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 2px" }}>🗺️ Airport Slug Directory</p>
          <p style={{ fontSize: "11px", color: "#6B7280", margin: 0 }}>{entries.length} airports mapped — click any to test on Kiwi</p>
        </div>
        <button onClick={() => setOpen(v => !v)}
          style={{ padding: "6px 14px", borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "12px", fontWeight: "600", cursor: "pointer", background: "#F9FAFB", color: "#374151" }}>
          {open ? "Collapse ▲" : "View All ▼"}
        </button>
      </div>

      {open && (
        <div style={{ marginTop: "16px" }}>
          <input type="text" placeholder="Search by code or city…" value={filter}
            onChange={e => setFilter(e.target.value)}
            style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", boxSizing: "border-box", outline: "none", marginBottom: "14px" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "8px" }}>
            {filtered.map(([code, slug]) => (
              <a key={code}
                href={`https://www.kiwi.com/en/?origin=${slug}&destination=anywhere`}
                target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 12px", background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: "10px", textDecoration: "none" }}
                onMouseEnter={e => e.currentTarget.style.background = "#DCFCE7"}
                onMouseLeave={e => e.currentTarget.style.background = "#F0FDF4"}>
                <span style={{ fontFamily: "monospace", fontWeight: "800", fontSize: "14px", color: NAVY, minWidth: "38px" }}>{code}</span>
                <span style={{ fontSize: "11px", color: "#374151", flex: 1, lineHeight: 1.3 }}>{humanize(slug)}</span>
                <span style={{ fontSize: "11px", color: "#16A34A", flexShrink: 0 }}>↗</span>
              </a>
            ))}
          </div>
          {filtered.length === 0 && (
            <p style={{ fontSize: "13px", color: "#9CA3AF", textAlign: "center", padding: "20px 0", margin: 0 }}>No airports match "{filter}"</p>
          )}
        </div>
      )}
    </div>
  );
}

function InternationalSlugDirectory() {
  const [filter, setFilter] = useState("");
  const [open,   setOpen]   = useState(false);

  const entries = Object.entries(INTL_MAP);
  const q = filter.trim().toLowerCase();
  const filtered = q
    ? entries.filter(([code, slug]) => code.toLowerCase().includes(q) || slug.includes(q))
    : entries;

  // Group by region label (first comment above each block) — use a simple prefix map
  const REGION = {
    CUN:"Caribbean & Mexico",SJD:"Caribbean & Mexico",PVR:"Caribbean & Mexico",GDL:"Caribbean & Mexico",MEX:"Caribbean & Mexico",CZM:"Caribbean & Mexico",ZIH:"Caribbean & Mexico",
    MBJ:"Caribbean & Mexico",KIN:"Caribbean & Mexico",NAS:"Caribbean & Mexico",AUA:"Caribbean & Mexico",PUJ:"Caribbean & Mexico",SDQ:"Caribbean & Mexico",SJU:"Caribbean & Mexico",BQN:"Caribbean & Mexico",SXM:"Caribbean & Mexico",GCM:"Caribbean & Mexico",HAV:"Caribbean & Mexico",VRA:"Caribbean & Mexico",BGI:"Caribbean & Mexico",UVF:"Caribbean & Mexico",GND:"Caribbean & Mexico",
    YYZ:"Canada",YVR:"Canada",YUL:"Canada",YYC:"Canada",YEG:"Canada",YOW:"Canada",
    LHR:"Europe",LGW:"Europe",CDG:"Europe",FCO:"Europe",VCE:"Europe",FLR:"Europe",NAP:"Europe",AMS:"Europe",BCN:"Europe",MAD:"Europe",FRA:"Europe",MUC:"Europe",DUS:"Europe",HAM:"Europe",DUB:"Europe",ATH:"Europe",LIS:"Europe",MXP:"Europe",ZRH:"Europe",GVA:"Europe",VIE:"Europe",CPH:"Europe",ARN:"Europe",OSL:"Europe",HEL:"Europe",KEF:"Europe",EDI:"Europe",MAN:"Europe",NCE:"Europe",PRG:"Europe",BRU:"Europe",BUD:"Europe",WAW:"Europe",
    DXB:"Middle East",DOH:"Middle East",AUH:"Middle East",
    NRT:"Asia",HND:"Asia",KIX:"Asia",ICN:"Asia",HKG:"Asia",BKK:"Asia",SIN:"Asia",KUL:"Asia",DEL:"Asia",BOM:"Asia",
    SYD:"Pacific & Australia",MEL:"Pacific & Australia",BNE:"Pacific & Australia",AKL:"Pacific & Australia",NAN:"Pacific & Australia",PPT:"Pacific & Australia",
    GRU:"Latin America",GIG:"Latin America",EZE:"Latin America",SCL:"Latin America",BOG:"Latin America",LIM:"Latin America",SJO:"Latin America",PTY:"Latin America",BZE:"Latin America",
    JNB:"Africa",CPT:"Africa",CAI:"Africa",
  };

  // Build grouped output when no filter active
  const groups = {};
  (q ? filtered : entries).forEach(([code, slug]) => {
    const region = REGION[code] || "Other";
    if (!groups[region]) groups[region] = [];
    groups[region].push([code, slug]);
  });

  const REGION_ORDER = ["Caribbean & Mexico","Canada","Europe","Middle East","Asia","Pacific & Australia","Latin America","Africa"];

  const REGION_COLORS = {
    "Caribbean & Mexico": { bg:"#FFF7ED", border:"#FED7AA", tag:"#C2410C" },
    "Canada":             { bg:"#FEF2F2", border:"#FECACA", tag:"#DC2626" },
    "Europe":             { bg:"#EFF6FF", border:"#BFDBFE", tag:"#1D4ED8" },
    "Middle East":        { bg:"#FFFBEB", border:"#FDE68A", tag:"#B45309" },
    "Asia":               { bg:"#F0FDF4", border:"#BBF7D0", tag:"#15803D" },
    "Pacific & Australia":{ bg:"#F5F3FF", border:"#DDD6FE", tag:"#7C3AED" },
    "Latin America":      { bg:"#FDF4FF", border:"#E9D5FF", tag:"#7E22CE" },
    "Africa":             { bg:"#FFF1F2", border:"#FFE4E6", tag:"#BE123C" },
  };

  const orderedGroups = q
    ? [["Results", filtered]]
    : REGION_ORDER.filter(r => groups[r]).map(r => [r, groups[r]]);

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 2px" }}>🌍 International Airport Directory</p>
          <p style={{ fontSize: "11px", color: "#6B7280", margin: 0 }}>{entries.length} airports across 8 regions — click any to test on Kiwi</p>
        </div>
        <button onClick={() => setOpen(v => !v)}
          style={{ padding: "6px 14px", borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "12px", fontWeight: "600", cursor: "pointer", background: "#F9FAFB", color: "#374151" }}>
          {open ? "Collapse ▲" : "View All ▼"}
        </button>
      </div>

      {open && (
        <div style={{ marginTop: "16px" }}>
          <input type="text" placeholder="Search by code or city…" value={filter}
            onChange={e => setFilter(e.target.value)}
            style={{ width: "100%", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", boxSizing: "border-box", outline: "none", marginBottom: "14px" }} />

          {orderedGroups.map(([region, cards]) => {
            const c = REGION_COLORS[region] || { bg:"#F9FAFB", border:"#E5E7EB", tag:"#374151" };
            return (
              <div key={region} style={{ marginBottom: "16px" }}>
                <p style={{ fontSize: "10px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.08em", color: c.tag, margin: "0 0 8px", paddingLeft: "2px" }}>{region}</p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "7px" }}>
                  {cards.map(([code, slug]) => (
                    <a key={code}
                      href={`https://www.kiwi.com/en/?origin=${slug}&destination=anywhere`}
                      target="_blank" rel="noopener noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 12px", background: c.bg, border: `1px solid ${c.border}`, borderRadius: "10px", textDecoration: "none" }}
                      onMouseEnter={e => e.currentTarget.style.opacity = "0.8"}
                      onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                      <span style={{ fontFamily: "monospace", fontWeight: "800", fontSize: "13px", color: NAVY, minWidth: "34px" }}>{code}</span>
                      <span style={{ fontSize: "10px", color: "#374151", flex: 1, lineHeight: 1.3 }}>
                        {slug.split("-").slice(0,3).map(w => w.charAt(0).toUpperCase()+w.slice(1)).join(" ")}
                      </span>
                      <span style={{ fontSize: "11px", color: c.tag, flexShrink: 0 }}>↗</span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function AirportCodeTester() {
  const [input, setInput]   = useState("");
  const [result, setResult] = useState(null);

  function test() {
    const code = input.trim().toUpperCase();
    const slug = IATA_MAP[code];
    setResult(slug
      ? { ok: true,  msg: `✅ ${code} → ${slug}`, url: `https://www.kiwi.com/en/?origin=${slug}&destination=anywhere` }
      : { ok: false, msg: `❌ ${code} not found in map` }
    );
  }

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 14px" }}>✈️ Airport Code → Kiwi Slug Tester</p>
      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
        <input
          value={input}
          onChange={e => { setInput(e.target.value.toUpperCase()); setResult(null); }}
          onKeyDown={e => e.key === "Enter" && test()}
          placeholder="Enter IATA code (e.g. ATL)"
          maxLength={4}
          style={{ flex: 1, padding: "9px 12px", border: "1.5px solid #D1D5DB", borderRadius: "8px", fontSize: "14px", fontFamily: "monospace", textTransform: "uppercase" }}
        />
        <button onClick={test} style={{ background: NAVY, color: "#fff", border: "none", borderRadius: "8px", padding: "9px 20px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>
          Test
        </button>
      </div>
      {result && (
        <div style={{ padding: "10px 14px", borderRadius: "8px", background: result.ok ? "#F0FDF4" : "#FEF2F2", border: `1px solid ${result.ok ? "#BBF7D0" : "#FECACA"}` }}>
          <p style={{ margin: 0, fontSize: "13px", fontWeight: "600", color: result.ok ? GREEN : "#DC2626", fontFamily: "monospace" }}>{result.msg}</p>
          {result.ok && (
            <a href={result.url} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "12px", color: NAVY, display: "block", marginTop: "6px" }}>
              Test on Kiwi.com ↗
            </a>
          )}
        </div>
      )}
      <p style={{ fontSize: "11px", color: "#9CA3AF", margin: "10px 0 0" }}>{Object.keys(IATA_MAP).length} airports mapped</p>
    </div>
  );
}

function AirtableTablesReference() {
  const [open, setOpen] = useState(false);

  const TABLES = [
    { table: "Link Clicks",             when: "Automatically on every redirect page visit", what: "Every click to Expedia, Kiwi, or Cruisebound — captures email, partner, product, timestamp" },
    { table: "Bookings",                when: "When you parse the Expedia CSV in admin", what: "Confirmed hotel/flight bookings imported from Expedia or logged manually" },
    { table: "Booking Review Requests", when: "When admin awards points with no auto-match", what: "Bookings flagged for manual points review (no matching click found within 72hrs)" },
    { table: "Redemptions",             when: "When a member submits a cash-out request", what: "Points redemption requests — amount, method (Zelle/Cash App/Venmo), status" },
    { table: "Quotes",                  when: "When a visitor submits the quote form", what: "Travel quote requests from the site" },
    { table: "Phone Call Requests",     when: "When a visitor requests a call-back", what: "Call-back requests submitted through the site" },
    { table: "Contact Messages",        when: "When a visitor submits the contact form", what: "General contact form submissions" },
  ];

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 2px" }}>📋 Airtable Tables Reference</p>
          <p style={{ fontSize: "11px", color: "#EF4444", fontWeight: "600", margin: 0 }}>⚠️ Do not rename these in Airtable — names are hardcoded in the site API</p>
        </div>
        <button onClick={() => setOpen(v => !v)}
          style={{ padding: "6px 14px", borderRadius: "8px", border: "1px solid #E5E7EB", fontSize: "12px", fontWeight: "600", cursor: "pointer", background: "#F9FAFB", color: "#374151", flexShrink: 0 }}>
          {open ? "Collapse ▲" : "View All ▼"}
        </button>
      </div>

      {open && (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "14px" }}>
          {TABLES.map((row, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start", background: "#F8FAFF", borderRadius: "8px", padding: "10px 14px" }}>
              <div style={{ minWidth: "180px" }}>
                <p style={{ fontSize: "12px", fontWeight: "800", color: NAVY, margin: 0 }}>{row.table}</p>
                <p style={{ fontSize: "10px", color: ORANGE, fontWeight: "600", margin: "2px 0 0" }}>Written: {row.when}</p>
              </div>
              <p style={{ fontSize: "11px", color: "#6B7280", margin: 0, lineHeight: 1.5 }}>{row.what}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AdminDashboard() {
  const { user, loading: authLoading, logout } = useAuth();

  // Auth loading
  if (authLoading) {
    return (
      <div style={{ minHeight: "100vh", background: "#F0F4FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#6B7280", fontSize: "14px" }}>Loading…</p>
      </div>
    );
  }

  // Not signed in
  if (!user) return <AdminLogin />;

  // Wrong account
  if (!ALLOWED_EMAILS.includes(user.email)) {
    return (
      <div style={{ minHeight: "100vh", background: "#F0F4FF", fontFamily: "system-ui, -apple-system, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        <div style={{ background: "#fff", borderRadius: "20px", padding: "40px", maxWidth: "380px", textAlign: "center", boxShadow: "0 8px 40px rgba(0,59,149,0.12)" }}>
          <p style={{ fontSize: "40px", margin: "0 0 12px" }}>🔒</p>
          <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Access Denied</p>
          <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 20px" }}>
            <strong>{user.email}</strong> is not authorized to access this area.
          </p>
          <button onClick={logout}
            style={{ padding: "10px 24px", background: NAVY, color: "#fff", border: "none", borderRadius: "8px", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F0F4FF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* TOP NAV */}
      <nav style={{ background: NAVY, padding: "0 24px", borderBottom: `3px solid ${ORANGE}` }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href="/" style={{ fontSize: "18px", fontWeight: "800", color: "#fff", textDecoration: "none" }}>
              Room<span style={{ color: ORANGE }}>Voyager</span>
            </a>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
            <span style={{ color: "#93C5FD", fontSize: "13px", fontWeight: "600" }}>Admin Dashboard</span>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <a href="/admin/calculator" style={{ color: "#93C5FD", fontSize: "13px", textDecoration: "none" }}>🧮 Calculator</a>
            <a href="/" style={{ color: "#93C5FD", fontSize: "13px", textDecoration: "none" }}>← Back to site</a>
            <button onClick={logout} style={{ background: "rgba(255,255,255,0.12)", border: "none", color: "#fff", fontSize: "12px", fontWeight: "600", padding: "5px 12px", borderRadius: "6px", cursor: "pointer" }}>Sign Out</button>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px 64px" }}>

        {/* HEADER + QUICK LINKS */}
        <div style={{ marginBottom: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <h1 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 4px" }}>⚙️ Admin Dashboard</h1>
              <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>RoomVoyager back office — tools, calculators, and quick links</p>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {TOOLS.map((t, i) => (
                <a key={i} href={t.href} target={t.external ? "_blank" : undefined} rel={t.external ? "noopener noreferrer" : undefined}
                  style={{ display: "flex", alignItems: "center", gap: "7px", background: "#fff", border: "1px solid #E5E7EB", borderRadius: "10px", padding: "9px 16px", textDecoration: "none", fontSize: "13px", fontWeight: "700", color: "#111827", whiteSpace: "nowrap" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = NAVY; e.currentTarget.style.color = NAVY; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.color = "#111827"; }}>
                  <span style={{ fontSize: "16px" }}>{t.icon}</span>
                  {t.label}
                  {t.external && <span style={{ fontSize: "10px", color: "#9CA3AF" }}>↗</span>}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CONTROL TOGGLES */}
        <div style={{ marginBottom: "20px" }}>
          <AdminToggles adminEmail={user.email} />
        </div>

        {/* MAIN TOOLS GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
          <CommissionCalc />
          <ManualBookingLog />
        </div>

        {/* BOOKING CREATION */}
        <div style={{ marginBottom: "20px" }}>
          <AdminCreateBooking adminEmail={user.email} />
        </div>

        {/* POINTS MANAGEMENT */}
        <div style={{ marginBottom: "20px" }}>
          <AwardPoints />
        </div>

        {/* MANAGE BOOKINGS */}
        <div style={{ marginBottom: "20px" }}>
          <ManageBookings adminEmail={user.email} />
        </div>

        {/* EXPEDIA CSV IMPORT */}
        <div style={{ marginBottom: "20px" }}>
          <ExpediaImport adminEmail={user.email} />
        </div>

        {/* EXPEDIA CANCELLATION IMPORT */}
        <div style={{ marginBottom: "20px" }}>
          <ExpediaCancelImport adminEmail={user.email} />
        </div>

        {/* TRAVELPAYOUTS FLIGHT IMPORT */}
        <div style={{ marginBottom: "20px" }}>
          <TravelpayoutsImport adminEmail={user.email} />
        </div>

        {/* FIX POINTS STATUS */}
        <div style={{ marginBottom: "20px" }}>
          <FixPointsStatus adminEmail={user.email} />
        </div>

        {/* EMAIL BLAST */}
        <div style={{ marginBottom: "20px" }}>
          <SendBlast adminEmail={user.email} />
        </div>

        {/* AIRPORT CODE TESTER */}
        <div style={{ marginBottom: "20px" }}>
          <AirportCodeTester />
        </div>

        {/* AIRPORT SLUG DIRECTORY */}
        <div style={{ marginBottom: "20px" }}>
          <AirportSlugDirectory />
        </div>

        {/* INTERNATIONAL SLUG DIRECTORY */}
        <div style={{ marginBottom: "20px" }}>
          <InternationalSlugDirectory />
        </div>

        {/* REFERRALS */}
        <div style={{ marginBottom: "20px" }}>
          <ReferralsPanel />
        </div>

        {/* PLATFORM RESOURCES */}
        <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px", marginBottom: "20px" }}>
          <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 16px" }}>🔗 Platform Resources & Maintenance Links</p>
          {[
            {
              category: "Hosting & Code",
              links: [
                { label: "Vercel", desc: "Site hosting & deployments", href: "https://vercel.com", icon: "▲" },
                { label: "GitHub", desc: "Code repository", href: "https://github.com", icon: "🐙" },
              ],
            },
            {
              category: "Affiliate Dashboards",
              links: [
                { label: "Impact.com", desc: "Cruisebound affiliate tracking & reporting", href: "https://app.impact.com", icon: "📊" },
                { label: "TravelPayouts", desc: "Kiwi.com flights tracking (marker 722477)", href: "https://travelpayouts.com", icon: "✈️" },
                { label: "CJ Affiliate", desc: "Cruise line affiliates (Royal Caribbean, Carnival, NCL, etc.)", href: "https://cj.com", icon: "🚢" },
                { label: "PHG / Expedia", desc: "Expedia hotel affiliate (CJ partner hub)", href: "https://phg.com", icon: "🏨" },
              ],
            },
            {
              category: "Backend & Database",
              links: [
                { label: "Firebase Console", desc: "Auth, Firestore database, storage", href: "https://console.firebase.google.com", icon: "🔥" },
                { label: "Airtable", desc: "Link click tracking & quote logs", href: "https://airtable.com", icon: "📋" },
                { label: "EmailJS", desc: "Contact forms & newsletter", href: "https://emailjs.com", icon: "📧" },
              ],
            },
            {
              category: "Video & Automation",
              links: [
                { label: "Fliki", desc: "Deal of the Week video creation", href: "https://app.fliki.ai", icon: "🎬" },
                { label: "Make", desc: "Automation (Sheets → Fliki pipeline)", href: "https://us2.make.com", icon: "⚙️" },
                { label: "TikTok Studio", desc: "Video publishing", href: "https://studio.tiktok.com", icon: "🎵" },
              ],
            },
            {
              category: "Widget Partners",
              links: [
                { label: "Expedia", desc: "Hotel search widget source", href: "https://expedia.com", icon: "🏨" },
                { label: "Kiwi.com", desc: "Flight search", href: "https://kiwi.com", icon: "✈️" },
                { label: "Cruisebound", desc: "Cruise search widget", href: "https://cruisebound.com", icon: "🚢" },
                { label: "Unsplash", desc: "Stock photos used throughout the site", href: "https://unsplash.com", icon: "📷" },
              ],
            },
          ].map((section, si) => (
            <div key={si} style={{ marginBottom: si < 4 ? "18px" : 0 }}>
              <p style={{ fontSize: "10px", fontWeight: "700", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px" }}>{section.category}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {section.links.map((link, li) => (
                  <a key={li} href={link.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: "7px", background: "#F8FAFF", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "8px 12px", textDecoration: "none", color: "#111827" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = NAVY; e.currentTarget.style.background = LIGHT_BLUE; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.background = "#F8FAFF"; }}>
                    <span style={{ fontSize: "14px" }}>{link.icon}</span>
                    <div>
                      <p style={{ fontSize: "12px", fontWeight: "700", color: NAVY, margin: 0 }}>{link.label} ↗</p>
                      <p style={{ fontSize: "10px", color: "#6B7280", margin: 0 }}>{link.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AIRTABLE TABLES REFERENCE */}
        <div style={{ marginBottom: "20px" }}>
          <AirtableTablesReference />
        </div>

        {/* RATES REFERENCE */}
        <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
          <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 14px" }}>📊 Program Rates At-a-Glance</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
            {[
              { label: "Your commission — all products", value: "3%",         sub: "Expedia · Travelpayouts/Kiwi · CJ affiliates", color: NAVY      },
              { label: "Std pts cost — hotels/flights",  value: "0.5%",       sub: "5 pts/$1 → $0.50 per $100 booked",             color: "#374151" },
              { label: "Std pts cost — cruises/pkgs",    value: "1%",         sub: "10 pts/$1 → $1.00 per $100 booked",            color: "#374151" },
              { label: "Double pts cost — hotels",       value: "1%",         sub: "10 pts/$1 · not available on flights",          color: ORANGE    },
              { label: "Double pts cost — cruises/pkgs", value: "2%",         sub: "20 pts/$1 · not available on flights",          color: ORANGE    },
              { label: "Net margin — std (hotels/flights)", value: "2.5%",    sub: "3% commission − 0.5% pts cost",                color: GREEN     },
              { label: "Net margin — std (cruises/pkgs)",   value: "2%",      sub: "3% commission − 1% pts cost",                  color: GREEN     },
              { label: "Net margin — double (cruises/pkgs)",value: "1%",      sub: "3% commission − 2% pts cost",                  color: GREEN     },
              { label: "Min redemption",                 value: "10,000 pts", sub: "= $10 cash out",                               color: "#374151" },
              { label: "Payout window",                  value: "45 days",    sub: "After trip completion",                        color: "#374151" },
            ].map((r, i) => (
              <div key={i} style={{ background: "#F8FAFF", borderRadius: "10px", padding: "12px 14px" }}>
                <p style={{ fontSize: "11px", color: "#9CA3AF", margin: "0 0 4px", fontWeight: "600", textTransform: "uppercase" }}>{r.label}</p>
                <p style={{ fontSize: "22px", fontWeight: "800", color: r.color, margin: "0 0 2px", lineHeight: 1 }}>{r.value}</p>
                <p style={{ fontSize: "11px", color: "#6B7280", margin: 0 }}>{r.sub}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

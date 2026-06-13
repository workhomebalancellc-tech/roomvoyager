"use client";

import { useState } from "react";
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
  { icon: "📊", label: "Airtable",             href: "https://airtable.com", desc: "Quotes · Call Requests · Link Clicks · Redemptions", external: true },
  { icon: "🌐", label: "Live Site",             href: "https://www.roomvoyagertravel.com", desc: "Open your live website", external: true },
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
  const [form, setForm] = useState({ guestEmail: "", product: "cruise", amount: "", double: false, notes: "" });
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
      // 1. Award points server-side
      const ptRes = await fetch("/api/admin/firestore", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "addPoints", email: form.guestEmail, amount: pts }),
      });
      const ptData = await ptRes.json();
      if (!ptRes.ok) throw new Error(ptData.error || "Points award failed");

      // 2. Log to Airtable
      await fetch("/api/link-clicks", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          partner:   "Manual booking",
          product:   form.product,
          url:       "",
          userEmail: form.guestEmail,
          userName:  `${preview?.memberName || form.guestEmail} — $${form.amount} ${form.product} — ${pts.toLocaleString()} pts awarded${form.notes ? ` — ${form.notes}` : ""}`,
        }),
      });

      // 3. Email customer
      await fetch("/api/booking-points-notify", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email:      form.guestEmail,
          name:       preview?.memberName || "",
          product:    PRODUCT_TYPES.find(p => p.id === form.product)?.label || form.product,
          amount:     form.amount,
          pts,
          cash,
          newBalance: ptData.points,
          notes:      form.notes,
        }),
      });

      setResult({ ok: true, pts, name: preview?.memberName || form.guestEmail, newBalance: ptData.points });
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
      <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 16px" }}>Enter a booking to auto-calculate points, credit the member, log to Airtable, and email the customer.</p>

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
function AdminToggles() {
  const [bookingTracking, setBookingTracking] = useState(true);   // true = Auto
  const [doublePointsOn,  setDoublePointsOn]  = useState(false);
  const [promoEndDate,    setPromoEndDate]    = useState("");
  const [promoEndTime,    setPromoEndTime]    = useState("");

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
      <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 18px" }}>🎛️ Booking Controls</p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>

        {/* ── Booking Tracking Toggle ── */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
            <div>
              <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 2px" }}>Booking Tracking</p>
              <p style={{ fontSize: "11px", color: "#6B7280", margin: 0 }}>Auto logs bookings immediately · Manual requires your review</p>
            </div>
            <button onClick={() => setBookingTracking(v => !v)} style={toggleStyle(bookingTracking, GREEN)}>
              <span style={knobStyle(bookingTracking)} />
            </button>
          </div>
          <div style={{ display: "flex", gap: "6px", marginBottom: "8px" }}>
            <button onClick={() => setBookingTracking(true)}
              style={{ flex: 1, padding: "6px", borderRadius: "8px", border: `1.5px solid ${bookingTracking ? GREEN : "#E5E7EB"}`, background: bookingTracking ? "#F0FDF4" : "#fff", fontSize: "12px", fontWeight: "700", cursor: "pointer", color: bookingTracking ? GREEN : "#6B7280" }}>
              Auto
            </button>
            <button onClick={() => setBookingTracking(false)}
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
              <p style={{ fontSize: "11px", color: "#6B7280", margin: 0 }}>When on, all eligible bookings earn 2× points</p>
            </div>
            <button onClick={() => setDoublePointsOn(v => !v)} style={toggleStyle(doublePointsOn, ORANGE)}>
              <span style={knobStyle(doublePointsOn)} />
            </button>
          </div>

          {doublePointsOn && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "8px" }}>
              <div>
                <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Promo End Date</label>
                <input type="date" value={promoEndDate} onChange={e => setPromoEndDate(e.target.value)}
                  style={{ width: "100%", padding: "7px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "12px", boxSizing: "border-box", outline: "none" }} />
              </div>
              <div>
                <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Promo End Time</label>
                <input type="time" value={promoEndTime} onChange={e => setPromoEndTime(e.target.value)}
                  style={{ width: "100%", padding: "7px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "12px", boxSizing: "border-box", outline: "none" }} />
              </div>
            </div>
          )}

          <div style={{ padding: "8px 12px", borderRadius: "8px", background: doublePointsOn ? "#FFF7ED" : "#F9FAFB", fontSize: "11px", fontWeight: "600", color: doublePointsOn ? ORANGE : "#9CA3AF" }}>
            {doublePointsOn
              ? `🔥 Double points active${promoEndDate ? ` · Ends ${promoEndDate}${promoEndTime ? ` at ${promoEndTime}` : ""}` : " · No end date set"}`
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
              <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Return / Check-out</label>
              <input type="date" value={form.endDate} onChange={e => setForm(f => ({ ...f, endDate: e.target.value }))}
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

        {/* HEADER */}
        <div style={{ marginBottom: "28px" }}>
          <h1 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 4px" }}>⚙️ Admin Dashboard</h1>
          <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>RoomVoyager back office — tools, calculators, and quick links</p>
        </div>

        {/* CONTROL TOGGLES */}
        <div style={{ marginBottom: "20px" }}>
          <AdminToggles />
        </div>

        {/* QUICK LINKS */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "12px", marginBottom: "28px" }}>
          {TOOLS.map((t, i) => (
            <a key={i} href={t.href} target={t.external ? "_blank" : undefined} rel={t.external ? "noopener noreferrer" : undefined}
              style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "16px", textDecoration: "none", display: "block" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = NAVY}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#E5E7EB"}>
              <p style={{ fontSize: "24px", margin: "0 0 6px" }}>{t.icon}</p>
              <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 3px" }}>{t.label}</p>
              <p style={{ fontSize: "11px", color: "#6B7280", margin: 0, lineHeight: 1.4 }}>{t.desc}</p>
              {t.external && <p style={{ fontSize: "10px", color: "#9CA3AF", margin: "6px 0 0" }}>Opens in new tab ↗</p>}
            </a>
          ))}
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

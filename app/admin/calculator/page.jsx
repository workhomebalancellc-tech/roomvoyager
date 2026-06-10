"use client";

import { useState } from "react";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";
const GREEN = "#16A34A";

const PRODUCT_TYPES = [
  { id: "cruise",   label: "Cruise",           icon: "🚢", basePts: 10, doubleEligible: true  },
  { id: "hotel",    label: "Hotel",             icon: "🏨", basePts: 10, doubleEligible: true  },
  { id: "package",  label: "Vacation Package",  icon: "🌴", basePts: 10, doubleEligible: true  },
  { id: "flight",   label: "Flight",            icon: "✈️", basePts: 10, doubleEligible: false },
];

const PRESETS = [
  { label: "Cruise Only",       icon: "🚢", components: [{ typeId: "cruise", amount: "" }] },
  { label: "Cruise + Flight",   icon: "🚢✈️", components: [{ typeId: "cruise", amount: "" }, { typeId: "flight", amount: "" }] },
  { label: "Flight + Hotel",    icon: "✈️🏨", components: [{ typeId: "flight", amount: "" }, { typeId: "hotel", amount: "" }] },
  { label: "Hotel + Cruise",    icon: "🏨🚢", components: [{ typeId: "hotel", amount: "" }, { typeId: "cruise", amount: "" }] },
  { label: "Full Package",      icon: "🌴", components: [{ typeId: "package", amount: "" }] },
  { label: "All Three",         icon: "✈️🏨🚢", components: [{ typeId: "flight", amount: "" }, { typeId: "hotel", amount: "" }, { typeId: "cruise", amount: "" }] },
];

let nextId = 1;
function newRow(typeId = "cruise") {
  return { id: nextId++, typeId, amount: "", double: false };
}

function calcRow(row) {
  const type = PRODUCT_TYPES.find(p => p.id === row.typeId);
  const amt = parseFloat(row.amount) || 0;
  const useDouble = row.double && type?.doubleEligible;
  const ptsPerDollar = useDouble ? 20 : 10;
  const pts = Math.round(amt * ptsPerDollar);
  const cash = pts / 1000;
  const standardPts = Math.round(amt * 10);
  const doublePts = type?.doubleEligible ? Math.round(amt * 20) : null;
  return { type, amt, ptsPerDollar, pts, cash, standardPts, doublePts, useDouble };
}

export default function AdminCalculator() {
  const [rows, setRows] = useState([newRow("cruise")]);
  const [globalMode, setGlobalMode] = useState("mixed"); // "standard" | "double" | "mixed"
  const [copied, setCopied] = useState(false);

  function addRow(typeId) {
    setRows(r => [...r, newRow(typeId || "cruise")]);
  }

  function removeRow(id) {
    setRows(r => r.filter(row => row.id !== id));
  }

  function updateRow(id, field, value) {
    setRows(r => r.map(row => row.id === id ? { ...row, [field]: value } : row));
  }

  function applyPreset(preset) {
    nextId = Date.now();
    setRows(preset.components.map(c => ({ ...newRow(c.typeId), amount: c.amount })));
    setGlobalMode("mixed");
  }

  function applyGlobalMode(mode) {
    setGlobalMode(mode);
    if (mode === "standard") {
      setRows(r => r.map(row => ({ ...row, double: false })));
    } else if (mode === "double") {
      setRows(r => r.map(row => {
        const type = PRODUCT_TYPES.find(p => p.id === row.typeId);
        return { ...row, double: type?.doubleEligible ?? false };
      }));
    }
  }

  // Totals
  const calcs = rows.map(calcRow);
  const totalAmt = calcs.reduce((s, c) => s + c.amt, 0);
  const totalPts = calcs.reduce((s, c) => s + c.pts, 0);
  const totalCash = totalPts / 1000;
  const allStandardPts = calcs.reduce((s, c) => s + c.standardPts, 0);
  const allDoublePts = calcs.reduce((s, c) => s + (c.doublePts ?? c.standardPts), 0);

  function copyToClipboard() {
    const lines = rows.map((row, i) => {
      const c = calcs[i];
      const mode = c.useDouble ? "Double" : "Standard";
      return `${c.type?.icon} ${c.type?.label}: $${c.amt.toFixed(2)} → ${c.pts.toLocaleString()} pts ($${c.cash.toFixed(2)} back) [${mode}]`;
    });
    lines.push(`\nTotal: $${totalAmt.toFixed(2)} → ${totalPts.toLocaleString()} pts = $${totalCash.toFixed(2)} cash back`);
    navigator.clipboard.writeText(lines.join("\n")).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
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
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "14px" }}>|</span>
            <span style={{ color: "#93C5FD", fontSize: "13px", fontWeight: "600" }}>Admin · Points Calculator</span>
          </div>
          <a href="/rewards" style={{ color: "#93C5FD", textDecoration: "none", fontSize: "13px" }}>← Rewards page</a>
        </div>
      </nav>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "32px 24px" }}>

        {/* HEADER */}
        <div style={{ marginBottom: "28px" }}>
          <h1 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 6px" }}>
            🧮 Points Calculator
          </h1>
          <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>
            Calculate what guests earn across any combination of bookings. Standard = 10 pts/$1 (1% back) · Double = 20 pts/$1 (2% back, not available on flights)
          </p>
        </div>

        {/* RATE REFERENCE BAR */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "24px" }}>
          {PRODUCT_TYPES.map(p => (
            <div key={p.id} style={{ background: "#fff", border: `1px solid ${p.doubleEligible ? ORANGE + "40" : "#E5E7EB"}`, borderRadius: "10px", padding: "10px 16px", display: "flex", gap: "8px", alignItems: "center" }}>
              <span style={{ fontSize: "16px" }}>{p.icon}</span>
              <div>
                <p style={{ fontSize: "12px", fontWeight: "700", color: "#111827", margin: 0 }}>{p.label}</p>
                <p style={{ fontSize: "11px", color: p.doubleEligible ? ORANGE : "#9CA3AF", margin: 0, fontWeight: "600" }}>
                  {p.doubleEligible ? "10 or 20 pts/$1" : "10 pts/$1 only"}
                </p>
              </div>
              {p.doubleEligible && (
                <span style={{ fontSize: "10px", background: ORANGE, color: "#fff", padding: "1px 6px", borderRadius: "999px", fontWeight: "700" }}>2x</span>
              )}
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "24px", alignItems: "start" }}>

          {/* LEFT: CALCULATOR */}
          <div>

            {/* GLOBAL MODE + PRESETS */}
            <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "16px 20px", marginBottom: "16px" }}>
              <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px" }}>Global Points Mode</p>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {[["standard","Standard (1%)","#374151"],["double","Double (2%) 🔥",ORANGE],["mixed","Mixed","#7C3AED"]].map(([mode,label,color]) => (
                      <button key={mode} onClick={() => applyGlobalMode(mode)}
                        style={{ padding: "7px 14px", borderRadius: "8px", border: `2px solid ${globalMode === mode ? color : "#E5E7EB"}`, background: globalMode === mode ? color + "15" : "#fff", color: globalMode === mode ? color : "#6B7280", fontWeight: "700", fontSize: "12px", cursor: "pointer" }}>
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px" }}>Quick Presets</p>
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {PRESETS.map(p => (
                      <button key={p.label} onClick={() => applyPreset(p)}
                        style={{ padding: "6px 12px", borderRadius: "8px", border: "1px solid #E5E7EB", background: "#F9FAFB", color: "#374151", fontSize: "11px", fontWeight: "600", cursor: "pointer", whiteSpace: "nowrap" }}>
                        {p.icon} {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BOOKING ROWS */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "12px" }}>
              {rows.map((row, i) => {
                const c = calcs[i];
                const type = c.type;
                return (
                  <div key={row.id} style={{ background: "#fff", border: `1.5px solid ${c.useDouble ? ORANGE + "50" : "#E5E7EB"}`, borderRadius: "14px", padding: "16px 20px", display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>

                    {/* Row number */}
                    <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: NAVY, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", flexShrink: 0 }}>{i + 1}</span>

                    {/* Product type */}
                    <select value={row.typeId} onChange={e => updateRow(row.id, "typeId", e.target.value)}
                      style={{ padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", fontWeight: "600", background: "#fff", color: "#111827", cursor: "pointer", minWidth: "160px" }}>
                      {PRODUCT_TYPES.map(p => (
                        <option key={p.id} value={p.id}>{p.icon} {p.label}</option>
                      ))}
                    </select>

                    {/* Amount */}
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontSize: "16px", fontWeight: "700", color: "#6B7280" }}>$</span>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        placeholder="0.00"
                        value={row.amount}
                        onChange={e => updateRow(row.id, "amount", e.target.value)}
                        style={{ width: "110px", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", fontWeight: "700", outline: "none", textAlign: "right" }}
                      />
                    </div>

                    {/* Double points toggle */}
                    <label style={{ display: "flex", alignItems: "center", gap: "7px", cursor: type?.doubleEligible ? "pointer" : "not-allowed", opacity: type?.doubleEligible ? 1 : 0.4 }}>
                      <div style={{ position: "relative", width: "40px", height: "22px", flexShrink: 0 }}>
                        <input type="checkbox" checked={row.double && !!type?.doubleEligible} disabled={!type?.doubleEligible}
                          onChange={e => updateRow(row.id, "double", e.target.checked)}
                          style={{ opacity: 0, position: "absolute", inset: 0, cursor: "pointer", margin: 0 }} />
                        <div style={{ width: "40px", height: "22px", borderRadius: "999px", background: (row.double && type?.doubleEligible) ? ORANGE : "#D1D5DB", transition: "background 0.2s", position: "absolute", inset: 0 }} />
                        <div style={{ position: "absolute", top: "3px", left: (row.double && type?.doubleEligible) ? "21px" : "3px", width: "16px", height: "16px", borderRadius: "50%", background: "#fff", transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" }} />
                      </div>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: (row.double && type?.doubleEligible) ? ORANGE : "#6B7280", whiteSpace: "nowrap" }}>
                        {type?.doubleEligible ? "Double pts 🔥" : "Standard only"}
                      </span>
                    </label>

                    {/* Result */}
                    <div style={{ flex: 1, minWidth: "160px" }}>
                      {c.amt > 0 ? (
                        <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
                          <div style={{ textAlign: "center" }}>
                            <p style={{ fontSize: "11px", color: "#9CA3AF", margin: "0 0 1px", textTransform: "uppercase", fontWeight: "600" }}>Points</p>
                            <p style={{ fontSize: "20px", fontWeight: "800", color: c.useDouble ? ORANGE : NAVY, margin: 0, lineHeight: 1 }}>{c.pts.toLocaleString()}</p>
                            <p style={{ fontSize: "10px", color: "#9CA3AF", margin: "1px 0 0" }}>{c.useDouble ? "20" : "10"} pts/$1</p>
                          </div>
                          <div style={{ textAlign: "center" }}>
                            <p style={{ fontSize: "11px", color: "#9CA3AF", margin: "0 0 1px", textTransform: "uppercase", fontWeight: "600" }}>Cash Back</p>
                            <p style={{ fontSize: "20px", fontWeight: "800", color: GREEN, margin: 0, lineHeight: 1 }}>${c.cash.toFixed(2)}</p>
                            <p style={{ fontSize: "10px", color: "#9CA3AF", margin: "1px 0 0" }}>{c.useDouble ? "2%" : "1%"} back</p>
                          </div>
                          {type?.doubleEligible && (
                            <div style={{ textAlign: "center", opacity: 0.6 }}>
                              <p style={{ fontSize: "10px", color: "#9CA3AF", margin: "0 0 1px", textTransform: "uppercase", fontWeight: "600" }}>{c.useDouble ? "Standard alt" : "Double alt"}</p>
                              <p style={{ fontSize: "13px", fontWeight: "700", color: "#9CA3AF", margin: 0 }}>
                                {c.useDouble ? `${c.standardPts.toLocaleString()} pts` : `${c.doublePts?.toLocaleString()} pts`}
                              </p>
                              <p style={{ fontSize: "10px", color: "#9CA3AF", margin: "1px 0 0" }}>
                                {c.useDouble ? `$${(c.standardPts/1000).toFixed(2)}` : `$${((c.doublePts??0)/1000).toFixed(2)}`}
                              </p>
                            </div>
                          )}
                        </div>
                      ) : (
                        <p style={{ fontSize: "13px", color: "#D1D5DB", margin: 0 }}>Enter amount →</p>
                      )}
                    </div>

                    {/* Remove */}
                    {rows.length > 1 && (
                      <button onClick={() => removeRow(row.id)}
                        style={{ width: "28px", height: "28px", borderRadius: "50%", border: "1px solid #FCA5A5", background: "#FEF2F2", color: "#DC2626", fontSize: "14px", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        ×
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ADD BUTTONS */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "24px" }}>
              <p style={{ fontSize: "12px", fontWeight: "600", color: "#6B7280", margin: "auto 4px auto 0", alignSelf: "center" }}>Add:</p>
              {PRODUCT_TYPES.map(p => (
                <button key={p.id} onClick={() => addRow(p.id)}
                  style={{ padding: "8px 14px", borderRadius: "8px", border: "1.5px dashed #D1D5DB", background: "#F9FAFB", color: "#374151", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
                  + {p.icon} {p.label}
                </button>
              ))}
            </div>

            {/* BREAKDOWN TABLE (shown when 2+ rows) */}
            {rows.length > 1 && calcs.some(c => c.amt > 0) && (
              <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", overflow: "hidden" }}>
                <div style={{ background: NAVY, padding: "12px 20px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr" }}>
                  {["Component", "Amount", "Mode", "Points", "Cash Back"].map(h => (
                    <span key={h} style={{ fontSize: "11px", fontWeight: "700", color: "#93C5FD", textTransform: "uppercase" }}>{h}</span>
                  ))}
                </div>
                {rows.map((row, i) => {
                  const c = calcs[i];
                  if (!c.amt) return null;
                  return (
                    <div key={row.id} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", padding: "12px 20px", borderBottom: "1px solid #F3F4F6", background: i % 2 === 0 ? "#fff" : "#F8FAFF" }}>
                      <span style={{ fontSize: "13px", fontWeight: "600", color: "#111827" }}>{c.type?.icon} {c.type?.label}</span>
                      <span style={{ fontSize: "13px", color: "#374151" }}>${c.amt.toFixed(2)}</span>
                      <span style={{ fontSize: "12px", fontWeight: "700", color: c.useDouble ? ORANGE : "#374151" }}>{c.useDouble ? "Double 🔥" : "Standard"}</span>
                      <span style={{ fontSize: "13px", fontWeight: "700", color: NAVY }}>{c.pts.toLocaleString()}</span>
                      <span style={{ fontSize: "13px", fontWeight: "800", color: GREEN }}>${c.cash.toFixed(2)}</span>
                    </div>
                  );
                })}
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", padding: "14px 20px", background: NAVY + "12", borderTop: `2px solid ${NAVY}20` }}>
                  <span style={{ fontSize: "13px", fontWeight: "800", color: NAVY }}>TOTAL</span>
                  <span style={{ fontSize: "13px", fontWeight: "700", color: "#111827" }}>${totalAmt.toFixed(2)}</span>
                  <span style={{ fontSize: "12px", color: "#6B7280" }}>mixed</span>
                  <span style={{ fontSize: "13px", fontWeight: "800", color: NAVY }}>{totalPts.toLocaleString()}</span>
                  <span style={{ fontSize: "13px", fontWeight: "800", color: GREEN }}>${totalCash.toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT: SUMMARY PANEL */}
          <div style={{ position: "sticky", top: "24px" }}>

            {/* Main totals */}
            <div style={{ background: "#fff", border: `2px solid ${NAVY}`, borderRadius: "16px", padding: "24px", marginBottom: "16px" }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: NAVY, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 16px" }}>📊 Summary</p>

              <div style={{ marginBottom: "20px" }}>
                <p style={{ fontSize: "12px", color: "#9CA3AF", margin: "0 0 3px", fontWeight: "600" }}>TOTAL BOOKING VALUE</p>
                <p style={{ fontSize: "32px", fontWeight: "800", color: "#111827", margin: 0, lineHeight: 1 }}>
                  ${totalAmt.toFixed(2)}
                </p>
              </div>

              <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: "16px", marginBottom: "16px" }}>
                <p style={{ fontSize: "12px", color: "#9CA3AF", fontWeight: "600", margin: "0 0 3px" }}>POINTS EARNED (CURRENT)</p>
                <p style={{ fontSize: "30px", fontWeight: "800", color: NAVY, margin: "0 0 2px", lineHeight: 1 }}>
                  {totalPts.toLocaleString()}
                </p>
                <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>pts</p>
              </div>

              <div style={{ background: "#F0FDF4", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
                <p style={{ fontSize: "12px", color: "#6B7280", fontWeight: "600", margin: "0 0 3px" }}>CASH BACK VALUE</p>
                <p style={{ fontSize: "36px", fontWeight: "800", color: GREEN, margin: 0, lineHeight: 1 }}>
                  ${totalCash.toFixed(2)}
                </p>
              </div>

              {/* Standard vs Double comparison */}
              {totalAmt > 0 && (
                <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: "14px" }}>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", margin: "0 0 10px" }}>If All Standard vs All Double</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                    <div style={{ background: LIGHT_BLUE, borderRadius: "8px", padding: "12px", textAlign: "center" }}>
                      <p style={{ fontSize: "10px", fontWeight: "700", color: NAVY, margin: "0 0 4px", textTransform: "uppercase" }}>All Standard</p>
                      <p style={{ fontSize: "18px", fontWeight: "800", color: NAVY, margin: "0 0 2px" }}>{allStandardPts.toLocaleString()}</p>
                      <p style={{ fontSize: "12px", fontWeight: "700", color: GREEN, margin: 0 }}>${(allStandardPts / 1000).toFixed(2)}</p>
                    </div>
                    <div style={{ background: "#FFF7ED", border: `1.5px solid ${ORANGE}30`, borderRadius: "8px", padding: "12px", textAlign: "center" }}>
                      <p style={{ fontSize: "10px", fontWeight: "700", color: ORANGE, margin: "0 0 4px", textTransform: "uppercase" }}>All Double 🔥</p>
                      <p style={{ fontSize: "18px", fontWeight: "800", color: ORANGE, margin: "0 0 2px" }}>{allDoublePts.toLocaleString()}</p>
                      <p style={{ fontSize: "12px", fontWeight: "700", color: GREEN, margin: 0 }}>${(allDoublePts / 1000).toFixed(2)}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: "10px", color: "#9CA3AF", margin: "8px 0 0", textAlign: "center" }}>
                    * "All Double" applies 20pts/$1 to eligible products only (flights stay at 10pts/$1)
                  </p>
                </div>
              )}
            </div>

            {/* Quick reference */}
            <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "16px" }}>
              <p style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", margin: "0 0 12px" }}>Quick Reference</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {[
                  ["$500", "5,000 pts", "$5.00", "10,000 pts", "$10.00"],
                  ["$1,000", "10,000 pts", "$10.00", "20,000 pts", "$20.00"],
                  ["$2,000", "20,000 pts", "$20.00", "40,000 pts", "$40.00"],
                  ["$5,000", "50,000 pts", "$50.00", "100,000 pts", "$100.00"],
                ].map(([amt, sPts, sCash, dPts, dCash], i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "45px 1fr 1fr", gap: "6px", fontSize: "11px", padding: "6px 0", borderBottom: i < 3 ? "1px solid #F9FAFB" : "none" }}>
                    <span style={{ fontWeight: "700", color: "#374151" }}>{amt}</span>
                    <div style={{ color: NAVY }}>
                      <span style={{ fontWeight: "700" }}>{sPts}</span>
                      <span style={{ color: "#9CA3AF" }}> = {sCash}</span>
                    </div>
                    <div style={{ color: ORANGE }}>
                      <span style={{ fontWeight: "700" }}>🔥{dPts}</span>
                      <span style={{ color: "#9CA3AF" }}> = {dCash}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "45px 1fr 1fr", gap: "6px", marginTop: "8px", paddingTop: "6px", borderTop: "1px solid #E5E7EB" }}>
                <span />
                <span style={{ fontSize: "10px", fontWeight: "600", color: NAVY }}>Standard (1%)</span>
                <span style={{ fontSize: "10px", fontWeight: "600", color: ORANGE }}>Double (2%)</span>
              </div>
            </div>

            {/* Copy button */}
            {totalPts > 0 && (
              <button onClick={copyToClipboard}
                style={{ width: "100%", marginTop: "12px", padding: "12px", background: copied ? GREEN : NAVY, color: "#fff", border: "none", borderRadius: "10px", fontSize: "13px", fontWeight: "700", cursor: "pointer", transition: "background 0.2s" }}>
                {copied ? "✓ Copied!" : "📋 Copy Summary"}
              </button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

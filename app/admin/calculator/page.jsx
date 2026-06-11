"use client";

import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

const ALLOWED_EMAILS = ["workhomebalancellc@gmail.com", "roomvoyager@protonmail.com"];

const NAVY   = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";
const GREEN  = "#16A34A";

// Correct base rates: Hotels & Flights = 5pts/$1 std, Cruises & Packages = 10pts/$1 std
const PRODUCT_TYPES = [
  { id: "cruise",  label: "Cruise",          icon: "🚢", basePts: 10, baseDoublePts: 20, doubleEligible: true  },
  { id: "hotel",   label: "Hotel",            icon: "🏨", basePts: 5,  baseDoublePts: 10, doubleEligible: true  },
  { id: "package", label: "Vacation Package", icon: "🌴", basePts: 10, baseDoublePts: 20, doubleEligible: true  },
  { id: "flight",  label: "Flight",           icon: "✈️", basePts: 5,  baseDoublePts: null, doubleEligible: false },
];

const TIERS = [
  { id: "explorer",  label: "Explorer",  icon: "🧭", range: "0–9,999 pts",    color: "#6B7280" },
  { id: "voyager",   label: "Voyager",   icon: "⚓", range: "10k–49,999 pts",  color: NAVY      },
  { id: "navigator", label: "Navigator", icon: "🗺️", range: "50k–99,999 pts",  color: "#7C3AED" },
  { id: "admiral",   label: "Admiral",   icon: "👑", range: "100,000+ pts",    color: ORANGE    },
];

// Default commission rates (edit in the Profitability tab to match your actual agreements)
const DEFAULT_COMMISSIONS = { cruise: 12, hotel: 10, package: 12, flight: 2 };

const PRESETS = [
  { label: "Cruise Only",     icon: "🚢",    components: [{ typeId: "cruise",  amount: "" }] },
  { label: "Cruise + Flight", icon: "🚢✈️",  components: [{ typeId: "cruise",  amount: "" }, { typeId: "flight", amount: "" }] },
  { label: "Flight + Hotel",  icon: "✈️🏨",  components: [{ typeId: "flight",  amount: "" }, { typeId: "hotel",  amount: "" }] },
  { label: "Hotel + Cruise",  icon: "🏨🚢",  components: [{ typeId: "hotel",   amount: "" }, { typeId: "cruise", amount: "" }] },
  { label: "Full Package",    icon: "🌴",    components: [{ typeId: "package", amount: "" }] },
  { label: "All Three",       icon: "✈️🏨🚢",components: [{ typeId: "flight",  amount: "" }, { typeId: "hotel",  amount: "" }, { typeId: "cruise", amount: "" }] },
];

let nextId = 1;
function newRow(typeId = "cruise") {
  return { id: nextId++, typeId, amount: "", double: false };
}

function calcRow(row) {
  const type = PRODUCT_TYPES.find(p => p.id === row.typeId);
  const amt  = parseFloat(row.amount) || 0;
  const useDouble = row.double && type?.doubleEligible;
  const basePts = useDouble ? (type?.baseDoublePts ?? type?.basePts ?? 5) : (type?.basePts ?? 5);
  const pts  = Math.round(amt * basePts);
  const cash = pts / 1000;
  const standardPts = Math.round(amt * (type?.basePts ?? 5));
  const doublePts   = type?.doubleEligible ? Math.round(amt * (type?.baseDoublePts ?? 10)) : null;
  return { type, amt, basePts, pts, cash, standardPts, doublePts, useDouble };
}

function CalculatorContent() {
  const [rows,        setRows]       = useState([newRow("cruise")]);
  const [globalMode,  setGlobalMode] = useState("mixed");
  const [copied,      setCopied]     = useState(false);
  const [commissions, setCommissions]= useState(DEFAULT_COMMISSIONS);
  const [activeTab,   setActiveTab]  = useState("calculator"); // "calculator" | "profitability"

  function addRow(typeId) { setRows(r => [...r, newRow(typeId || "cruise")]); }
  function removeRow(id)  { setRows(r => r.filter(row => row.id !== id)); }
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

  const calcs       = rows.map(row => calcRow(row));
  const totalAmt    = calcs.reduce((s, c) => s + c.amt, 0);
  const totalPts    = calcs.reduce((s, c) => s + c.pts, 0);
  const totalCash   = totalPts / 1000;
  const allStdPts   = calcs.reduce((s, c) => s + c.standardPts, 0);
  const allDblPts   = calcs.reduce((s, c) => s + (c.doublePts ?? c.standardPts), 0);

  function copyToClipboard() {
    const lines = rows.map((row, i) => {
      const c    = calcs[i];
      const mode = c.useDouble ? "Double" : "Standard";
      return `${c.type?.icon} ${c.type?.label}: $${c.amt.toFixed(2)} → ${c.pts.toLocaleString()} pts ($${c.cash.toFixed(2)} back) [${mode}]`;
    });
    lines.push(`Total: $${totalAmt.toFixed(2)} → ${totalPts.toLocaleString()} pts = $${totalCash.toFixed(2)} cash back`);
    navigator.clipboard.writeText(lines.join("\n")).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  // ─── Profitability helpers ─────────────────────────────────────────────────
  function getCell(productId, mode) {
    const p = PRODUCT_TYPES.find(x => x.id === productId);
    if (!p) return null;
    if (mode === "double" && !p.doubleEligible) return null;
    const base     = mode === "double" ? p.baseDoublePts : p.basePts;
    const costPct  = +(base / 10).toFixed(3); // pts/1000*100 = pts/10
    const commPct  = commissions[productId] ?? 10;
    const marginPct= +(commPct - costPct).toFixed(2);
    return { base, costPct, commPct, marginPct };
  }

  // ─── JSX ──────────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: "#F0F4FF", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* NAV */}
      <nav style={{ background: NAVY, padding: "0 24px", borderBottom: `3px solid ${ORANGE}` }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href="/" style={{ fontSize: "18px", fontWeight: "800", color: "#fff", textDecoration: "none" }}>
              Room<span style={{ color: ORANGE }}>Voyager</span>
            </a>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
            <span style={{ color: "#93C5FD", fontSize: "13px", fontWeight: "600" }}>Admin · Points Calculator</span>
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            <a href="/admin"   style={{ color: "#93C5FD", textDecoration: "none", fontSize: "13px" }}>← Admin</a>
            <a href="/rewards" style={{ color: "#93C5FD", textDecoration: "none", fontSize: "13px" }}>Rewards →</a>
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 24px" }}>

        {/* HEADER */}
        <div style={{ marginBottom: "20px" }}>
          <h1 style={{ fontSize: "26px", fontWeight: "800", color: "#111827", margin: "0 0 4px" }}>🧮 Points & Profitability</h1>
          <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>
            Calculate guest earnings with tier multipliers applied · analyze margin across all products and tiers.
          </p>
        </div>

        {/* TABS */}
        <div style={{ display: "flex", borderBottom: "2px solid #E5E7EB", marginBottom: "24px" }}>
          {[["calculator","🧮 Calculator"],["profitability","📈 Profitability Analysis"]].map(([id, label]) => (
            <button key={id} onClick={() => setActiveTab(id)}
              style={{ padding: "10px 24px", border: "none", background: "transparent", fontWeight: "700", fontSize: "14px", cursor: "pointer", marginBottom: "-2px",
                borderBottom: `3px solid ${activeTab === id ? NAVY : "transparent"}`,
                color: activeTab === id ? NAVY : "#6B7280" }}>
              {label}
            </button>
          ))}
        </div>

        {/* ═══════════════════════ CALCULATOR TAB ═══════════════════════ */}
        {activeTab === "calculator" && (<>

          {/* RATE REFERENCE BAR */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
            {PRODUCT_TYPES.map(p => (
              <div key={p.id} style={{ background: "#fff", borderRadius: "10px", padding: "10px 16px",
                border: `1px solid ${p.doubleEligible ? ORANGE + "40" : "#E5E7EB"}`, display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ fontSize: "18px" }}>{p.icon}</span>
                <div>
                  <p style={{ fontSize: "12px", fontWeight: "700", color: "#111827", margin: 0 }}>{p.label}</p>
                  <p style={{ fontSize: "11px", fontWeight: "600", margin: 0, color: "#374151" }}>
                    {p.basePts} pts/$1 std
                    {p.doubleEligible
                      ? <span style={{ color: ORANGE }}> · {p.baseDoublePts} dbl 🔥</span>
                      : <span style={{ color: "#9CA3AF" }}> only</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 330px", gap: "24px", alignItems: "start" }}>

            {/* ── LEFT: CALCULATOR ── */}
            <div>

              {/* GLOBAL MODE + PRESETS */}
              <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "16px 20px", marginBottom: "16px" }}>
                <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 8px" }}>Global Points Mode</p>
                    <div style={{ display: "flex", gap: "8px" }}>
                      {[["standard","Standard","#374151"],["double","Double 🔥",ORANGE],["mixed","Mixed","#7C3AED"]].map(([mode,label,color]) => (
                        <button key={mode} onClick={() => applyGlobalMode(mode)}
                          style={{ padding: "7px 14px", borderRadius: "8px", fontWeight: "700", fontSize: "12px", cursor: "pointer",
                            border: `2px solid ${globalMode === mode ? color : "#E5E7EB"}`,
                            background: globalMode === mode ? color + "15" : "#fff",
                            color: globalMode === mode ? color : "#6B7280" }}>
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
                  const c    = calcs[i];
                  const type = c.type;
                  return (
                    <div key={row.id} style={{ background: "#fff", borderRadius: "14px", padding: "16px 20px", display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap",
                      border: `1.5px solid ${c.useDouble ? ORANGE + "50" : "#E5E7EB"}` }}>

                      <span style={{ width: "24px", height: "24px", borderRadius: "50%", background: NAVY, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", flexShrink: 0 }}>{i + 1}</span>

                      <select value={row.typeId} onChange={e => updateRow(row.id, "typeId", e.target.value)}
                        style={{ padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", fontWeight: "600", background: "#fff", color: "#111827", cursor: "pointer", minWidth: "160px" }}>
                        {PRODUCT_TYPES.map(p => <option key={p.id} value={p.id}>{p.icon} {p.label}</option>)}
                      </select>

                      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span style={{ fontSize: "16px", fontWeight: "700", color: "#6B7280" }}>$</span>
                        <input type="number" min="0" step="0.01" placeholder="0.00" value={row.amount}
                          onChange={e => updateRow(row.id, "amount", e.target.value)}
                          style={{ width: "110px", padding: "9px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", fontWeight: "700", outline: "none", textAlign: "right" }} />
                      </div>

                      <label style={{ display: "flex", alignItems: "center", gap: "7px", cursor: type?.doubleEligible ? "pointer" : "not-allowed", opacity: type?.doubleEligible ? 1 : 0.4 }}>
                        <div style={{ position: "relative", width: "40px", height: "22px", flexShrink: 0 }}>
                          <input type="checkbox" checked={row.double && !!type?.doubleEligible} disabled={!type?.doubleEligible}
                            onChange={e => updateRow(row.id, "double", e.target.checked)}
                            style={{ opacity: 0, position: "absolute", inset: 0, cursor: "pointer", margin: 0 }} />
                          <div style={{ width: "40px", height: "22px", borderRadius: "999px", position: "absolute", inset: 0, transition: "background 0.2s",
                            background: (row.double && type?.doubleEligible) ? ORANGE : "#D1D5DB" }} />
                          <div style={{ position: "absolute", top: "3px", width: "16px", height: "16px", borderRadius: "50%", background: "#fff", transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                            left: (row.double && type?.doubleEligible) ? "21px" : "3px" }} />
                        </div>
                        <span style={{ fontSize: "12px", fontWeight: "700", whiteSpace: "nowrap",
                          color: (row.double && type?.doubleEligible) ? ORANGE : "#6B7280" }}>
                          {type?.doubleEligible ? "Double pts 🔥" : "Standard only"}
                        </span>
                      </label>

                      <div style={{ flex: 1, minWidth: "200px" }}>
                        {c.amt > 0 ? (
                          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
                            <div style={{ textAlign: "center" }}>
                              <p style={{ fontSize: "11px", color: "#9CA3AF", margin: "0 0 1px", textTransform: "uppercase", fontWeight: "600" }}>Points</p>
                              <p style={{ fontSize: "20px", fontWeight: "800", margin: 0, lineHeight: 1, color: c.useDouble ? ORANGE : NAVY }}>{c.pts.toLocaleString()}</p>
                              <p style={{ fontSize: "10px", color: "#9CA3AF", margin: "1px 0 0" }}>
                                {c.basePts} pts/$1
                              </p>
                            </div>
                            <div style={{ textAlign: "center" }}>
                              <p style={{ fontSize: "11px", color: "#9CA3AF", margin: "0 0 1px", textTransform: "uppercase", fontWeight: "600" }}>Cash Back</p>
                              <p style={{ fontSize: "20px", fontWeight: "800", color: GREEN, margin: 0, lineHeight: 1 }}>${c.cash.toFixed(2)}</p>
                              <p style={{ fontSize: "10px", color: "#9CA3AF", margin: "1px 0 0" }}>{(c.basePts / 10).toFixed(2)}% cost</p>
                            </div>
                            {type?.doubleEligible && (
                              <div style={{ textAlign: "center", opacity: 0.55 }}>
                                <p style={{ fontSize: "10px", color: "#9CA3AF", margin: "0 0 1px", textTransform: "uppercase", fontWeight: "600" }}>{c.useDouble ? "Std alt" : "Dbl alt"}</p>
                                <p style={{ fontSize: "13px", fontWeight: "700", color: "#9CA3AF", margin: 0 }}>
                                  {c.useDouble ? `${c.standardPts.toLocaleString()} pts` : `${c.doublePts?.toLocaleString()} pts`}
                                </p>
                                <p style={{ fontSize: "10px", color: "#9CA3AF", margin: "1px 0 0" }}>
                                  {c.useDouble ? `$${(c.standardPts / 1000).toFixed(2)}` : `$${((c.doublePts ?? 0) / 1000).toFixed(2)}`}
                                </p>
                              </div>
                            )}
                          </div>
                        ) : (
                          <p style={{ fontSize: "13px", color: "#D1D5DB", margin: 0 }}>Enter amount →</p>
                        )}
                      </div>

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
                <p style={{ fontSize: "12px", fontWeight: "600", color: "#6B7280", margin: "auto 4px auto 0" }}>Add:</p>
                {PRODUCT_TYPES.map(p => (
                  <button key={p.id} onClick={() => addRow(p.id)}
                    style={{ padding: "8px 14px", borderRadius: "8px", border: "1.5px dashed #D1D5DB", background: "#F9FAFB", color: "#374151", fontSize: "12px", fontWeight: "600", cursor: "pointer" }}>
                    + {p.icon} {p.label}
                  </button>
                ))}
              </div>

              {/* BREAKDOWN TABLE (2+ rows with amounts) */}
              {rows.length > 1 && calcs.some(c => c.amt > 0) && (
                <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", overflow: "hidden" }}>
                  <div style={{ background: NAVY, padding: "12px 20px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr" }}>
                    {["Component","Amount","Mode","Pts/$1","Points","Cash Back"].map(h => (
                      <span key={h} style={{ fontSize: "11px", fontWeight: "700", color: "#93C5FD", textTransform: "uppercase" }}>{h}</span>
                    ))}
                  </div>
                  {rows.map((row, i) => {
                    const c = calcs[i];
                    if (!c.amt) return null;
                    return (
                      <div key={row.id} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr", padding: "12px 20px", borderBottom: "1px solid #F3F4F6", background: i % 2 === 0 ? "#fff" : "#F8FAFF" }}>
                        <span style={{ fontSize: "13px", fontWeight: "600", color: "#111827" }}>{c.type?.icon} {c.type?.label}</span>
                        <span style={{ fontSize: "13px", color: "#374151" }}>${c.amt.toFixed(2)}</span>
                        <span style={{ fontSize: "12px", fontWeight: "700", color: c.useDouble ? ORANGE : "#374151" }}>{c.useDouble ? "Dbl 🔥" : "Std"}</span>
                        <span style={{ fontSize: "12px", fontWeight: "700", color: NAVY }}>{c.basePts}</span>
                        <span style={{ fontSize: "13px", fontWeight: "700", color: NAVY }}>{c.pts.toLocaleString()}</span>
                        <span style={{ fontSize: "13px", fontWeight: "800", color: GREEN }}>${c.cash.toFixed(2)}</span>
                      </div>
                    );
                  })}
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 1fr", padding: "14px 20px", background: NAVY + "12", borderTop: `2px solid ${NAVY}20` }}>
                    <span style={{ fontSize: "13px", fontWeight: "800", color: NAVY }}>TOTAL</span>
                    <span style={{ fontSize: "13px", fontWeight: "700", color: "#111827" }}>${totalAmt.toFixed(2)}</span>
                    <span /><span />
                    <span style={{ fontSize: "13px", fontWeight: "800", color: NAVY }}>{totalPts.toLocaleString()}</span>
                    <span style={{ fontSize: "13px", fontWeight: "800", color: GREEN }}>${totalCash.toFixed(2)}</span>
                  </div>
                </div>
              )}
            </div>

            {/* ── RIGHT: SUMMARY PANEL ── */}
            <div style={{ position: "sticky", top: "24px" }}>
              <div style={{ background: "#fff", border: `2px solid ${NAVY}`, borderRadius: "16px", padding: "24px", marginBottom: "16px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: NAVY, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 16px" }}>
                  📊 Summary
                </p>

                <div style={{ marginBottom: "20px" }}>
                  <p style={{ fontSize: "12px", color: "#9CA3AF", margin: "0 0 3px", fontWeight: "600" }}>TOTAL BOOKING VALUE</p>
                  <p style={{ fontSize: "32px", fontWeight: "800", color: "#111827", margin: 0, lineHeight: 1 }}>${totalAmt.toFixed(2)}</p>
                </div>

                <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: "16px", marginBottom: "16px" }}>
                  <p style={{ fontSize: "12px", color: "#9CA3AF", fontWeight: "600", margin: "0 0 3px" }}>POINTS EARNED</p>
                  <p style={{ fontSize: "30px", fontWeight: "800", color: NAVY, margin: "0 0 2px", lineHeight: 1 }}>{totalPts.toLocaleString()}</p>
                  <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>pts</p>
                </div>

                <div style={{ background: "#F0FDF4", borderRadius: "10px", padding: "14px", marginBottom: "16px" }}>
                  <p style={{ fontSize: "12px", color: "#6B7280", fontWeight: "600", margin: "0 0 3px" }}>CASH BACK VALUE</p>
                  <p style={{ fontSize: "36px", fontWeight: "800", color: GREEN, margin: 0, lineHeight: 1 }}>${totalCash.toFixed(2)}</p>
                </div>

                {totalAmt > 0 && (
                  <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: "14px" }}>
                    <p style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", margin: "0 0 10px" }}>All Standard vs All Double</p>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                      <div style={{ background: LIGHT_BLUE, borderRadius: "8px", padding: "12px", textAlign: "center" }}>
                        <p style={{ fontSize: "10px", fontWeight: "700", color: NAVY, margin: "0 0 4px", textTransform: "uppercase" }}>All Standard</p>
                        <p style={{ fontSize: "18px", fontWeight: "800", color: NAVY, margin: "0 0 2px" }}>{allStdPts.toLocaleString()}</p>
                        <p style={{ fontSize: "12px", fontWeight: "700", color: GREEN, margin: 0 }}>${(allStdPts / 1000).toFixed(2)}</p>
                      </div>
                      <div style={{ background: "#FFF7ED", border: `1.5px solid ${ORANGE}30`, borderRadius: "8px", padding: "12px", textAlign: "center" }}>
                        <p style={{ fontSize: "10px", fontWeight: "700", color: ORANGE, margin: "0 0 4px", textTransform: "uppercase" }}>All Double 🔥</p>
                        <p style={{ fontSize: "18px", fontWeight: "800", color: ORANGE, margin: "0 0 2px" }}>{allDblPts.toLocaleString()}</p>
                        <p style={{ fontSize: "12px", fontWeight: "700", color: GREEN, margin: 0 }}>${(allDblPts / 1000).toFixed(2)}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: "10px", color: "#9CA3AF", margin: "8px 0 0", textAlign: "center" }}>
                      * Flights are standard-only · hotels, cruises & packages are double-eligible
                    </p>
                  </div>
                )}
              </div>

              {/* Points → Cash quick reference */}
              <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "16px", marginBottom: "12px" }}>
                <p style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase", margin: "0 0 10px" }}>Points → Cash Back</p>
                {[[1000,"$1.00"],[5000,"$5.00"],[10000,"$10.00"],[25000,"$25.00"],[50000,"$50.00"],[100000,"$100.00"]].map(([pts, cash]) => (
                  <div key={pts} style={{ display: "flex", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid #F9FAFB", fontSize: "12px" }}>
                    <span style={{ fontWeight: "700", color: NAVY }}>{pts.toLocaleString()} pts</span>
                    <span style={{ fontWeight: "800", color: GREEN }}>{cash}</span>
                  </div>
                ))}
                <p style={{ fontSize: "10px", color: "#9CA3AF", margin: "8px 0 0" }}>1,000 pts always = $1 cash back regardless of tier</p>
              </div>

              {totalPts > 0 && (
                <button onClick={copyToClipboard}
                  style={{ width: "100%", padding: "12px", border: "none", borderRadius: "10px", fontSize: "13px", fontWeight: "700", cursor: "pointer", transition: "background 0.2s",
                    background: copied ? GREEN : NAVY, color: "#fff" }}>
                  {copied ? "✓ Copied!" : "📋 Copy Summary"}
                </button>
              )}
            </div>
          </div>
        </>)}

        {/* ═══════════════════════ PROFITABILITY TAB ═══════════════════════ */}
        {activeTab === "profitability" && (
          <div>
            {/* Commission rate inputs */}
            <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px 24px", marginBottom: "24px" }}>
              <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 6px" }}>Your Commission Rates (% of booking value)</p>
              <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 16px" }}>
                Edit these to match your actual agreements. Defaults are typical industry averages.
              </p>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {PRODUCT_TYPES.map(p => (
                  <div key={p.id} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    <label style={{ fontSize: "12px", fontWeight: "700", color: "#374151" }}>{p.icon} {p.label}</label>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <input type="number" min="0" max="50" step="0.5" value={commissions[p.id]}
                        onChange={e => setCommissions(c => ({ ...c, [p.id]: parseFloat(e.target.value) || 0 }))}
                        style={{ width: "68px", padding: "9px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "15px", fontWeight: "700", textAlign: "center", outline: "none" }} />
                      <span style={{ fontSize: "15px", fontWeight: "700", color: "#6B7280" }}>%</span>
                    </div>
                    <p style={{ fontSize: "10px", color: "#9CA3AF", margin: 0 }}>default: {DEFAULT_COMMISSIONS[p.id]}%</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Profitability matrix */}
            <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", overflow: "hidden", marginBottom: "16px" }}>
              {/* Matrix header */}
              <div style={{ background: NAVY, padding: "16px 20px" }}>
                <p style={{ color: "#fff", fontWeight: "800", fontSize: "15px", margin: "0 0 4px" }}>Profitability Matrix</p>
                <p style={{ color: "#93C5FD", fontSize: "12px", margin: 0 }}>
                  Net margin = your commission % − points cash-back cost % (all tiers earn the same rate)
                </p>
              </div>

              {/* Column headers */}
              <div style={{ display: "grid", gridTemplateColumns: "190px 70px 1fr 1fr 1fr 1fr", background: "#F8FAFF", borderBottom: "2px solid #E5E7EB", padding: "10px 20px", gap: "8px" }}>
                {["Product", "Mode", "Pts/$1", "Cost %", "Your Comm %", "Net Margin"].map(h => (
                  <span key={h} style={{ fontSize: "11px", fontWeight: "700", color: "#6B7280", textTransform: "uppercase" }}>{h}</span>
                ))}
              </div>

              {/* Data rows */}
              {PRODUCT_TYPES.flatMap((p, pi) => {
                const modes = p.doubleEligible ? ["standard","double"] : ["standard"];
                return modes.map((mode, mi) => {
                  const isFirst = mi === 0;
                  const isLast  = pi === PRODUCT_TYPES.length - 1 && mi === modes.length - 1;
                  const cell    = getCell(p.id, mode);
                  if (!cell) return null;
                  const { base, marginPct, costPct, commPct } = cell;
                  const isGood  = marginPct >= 5;
                  const isTight = marginPct >= 1 && marginPct < 5;
                  const isLoss  = marginPct < 1;
                  const bgColor   = isLoss ? "#FEF2F2" : isTight ? "#FFFBEB" : "#F0FDF4";
                  const textColor = isLoss ? "#DC2626" : isTight ? "#D97706" : GREEN;
                  const statusLabel = isLoss ? "⚠️ Loss" : isTight ? "⚡ Tight" : "✓ Good";
                  return (
                    <div key={`${p.id}-${mode}`} style={{ display: "grid", gridTemplateColumns: "190px 70px 1fr 1fr 1fr 1fr", padding: "12px 20px", gap: "8px", alignItems: "center",
                      borderBottom: isLast ? "none" : "1px solid #F3F4F6",
                      background: pi % 2 === 0 ? "#fff" : "#FAFAFA" }}>

                      <div>
                        {isFirst ? (
                          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ fontSize: "20px" }}>{p.icon}</span>
                            <div>
                              <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: 0 }}>{p.label}</p>
                              <p style={{ fontSize: "11px", color: "#9CA3AF", margin: 0 }}>you earn {commissions[p.id]}%</p>
                            </div>
                          </div>
                        ) : <span />}
                      </div>

                      <span style={{ fontSize: "11px", fontWeight: "700", textAlign: "center", padding: "3px 6px", borderRadius: "6px", display: "inline-block",
                        color: mode === "double" ? ORANGE : "#374151",
                        background: mode === "double" ? "#FFF7ED" : "#F3F4F6" }}>
                        {mode === "double" ? "Dbl 🔥" : "Std"}
                      </span>

                      <span style={{ fontSize: "13px", fontWeight: "700", color: NAVY }}>{base}</span>
                      <span style={{ fontSize: "13px", color: "#374151" }}>{costPct.toFixed(2)}%</span>
                      <span style={{ fontSize: "13px", color: "#374151" }}>{commPct}%</span>

                      <div style={{ background: bgColor, borderRadius: "8px", padding: "8px 4px", textAlign: "center" }}>
                        <p style={{ fontSize: "15px", fontWeight: "800", color: textColor, margin: 0, lineHeight: 1 }}>
                          {marginPct >= 0 ? "+" : ""}{marginPct.toFixed(1)}%
                        </p>
                        <p style={{ fontSize: "9px", fontWeight: "700", color: textColor, margin: "2px 0 0" }}>{statusLabel}</p>
                      </div>
                    </div>
                  );
                });
              })}
            </div>

            {/* Legend + formula */}
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "24px" }}>
              {[
                [GREEN,    "#F0FDF4", "✓ Good",   "≥ 5% margin"],
                ["#D97706","#FFFBEB", "⚡ Tight",  "1–5% margin"],
                ["#DC2626","#FEF2F2", "⚠️ Loss",   "< 1% margin"],
              ].map(([color, bg, label, desc]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px", background: "#fff", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "8px 14px" }}>
                  <div style={{ width: "30px", height: "30px", borderRadius: "6px", background: bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px" }}>
                    {label.split(" ")[0]}
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", fontWeight: "700", color, margin: 0 }}>{label}</p>
                    <p style={{ fontSize: "11px", color: "#9CA3AF", margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "center", background: "#fff", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "8px 14px" }}>
                <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>
                  <strong>Formula:</strong> Net margin = commission % − (pts/$1 ÷ 10)
                </p>
              </div>
            </div>

            {/* Key insight callout */}
            <div style={{ background: "#EFF6FF", border: "1px solid #BFDBFE", borderRadius: "14px", padding: "20px 24px" }}>
              <p style={{ fontSize: "14px", fontWeight: "700", color: "#1E40AF", margin: "0 0 10px" }}>💡 Key Takeaways</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  `Cruises earn ${commissions.cruise}% commission. Standard pts cost ${(5/10).toFixed(1)}% → net ${(commissions.cruise - 0.5).toFixed(1)}%. Double pts cost ${(10/10).toFixed(1)}% → net ${(commissions.cruise - 1).toFixed(1)}%.`,
                  `Hotels & flights earn ${commissions.hotel}% commission. Standard pts cost ${(5/10).toFixed(1)}% → net ${(commissions.hotel - 0.5).toFixed(1)}%. Double pts cost ${(10/10).toFixed(1)}% → net ${(commissions.hotel - 1).toFixed(1)}%.`,
                  "All tiers earn at the same flat rate — tiers are prestige levels, not multipliers.",
                  "Update your commission rates above to see how your actual agreements change these numbers.",
                ].map((text, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px" }}>
                    <span style={{ color: "#3B82F6", flexShrink: 0, fontWeight: "700" }}>→</span>
                    <p style={{ fontSize: "13px", color: "#1E3A8A", margin: 0 }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default function AdminCalculator() {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#6B7280", fontSize: "14px" }}>Loading…</p>
      </div>
    );
  }

  if (!user || !ALLOWED_EMAILS.includes(user.email)) {
    return (
      <div style={{ minHeight: "100vh", background: "#F0F4FF", fontFamily: "system-ui, -apple-system, sans-serif", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
        <div style={{ background: "#fff", borderRadius: "20px", padding: "40px", maxWidth: "380px", textAlign: "center", boxShadow: "0 8px 40px rgba(0,59,149,0.12)" }}>
          <p style={{ fontSize: "40px", margin: "0 0 12px" }}>🔒</p>
          <p style={{ fontSize: "18px", fontWeight: "800", color: "#111827", margin: "0 0 8px" }}>Admin Access Required</p>
          <p style={{ fontSize: "13px", color: "#6B7280", margin: "0 0 20px" }}>Sign in with an authorized account to use the calculator.</p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            <a href="/admin" style={{ padding: "10px 20px", background: NAVY, color: "#fff", borderRadius: "8px", fontWeight: "700", fontSize: "13px", textDecoration: "none" }}>Sign In →</a>
            {user && <button onClick={logout} style={{ padding: "10px 20px", background: "#F3F4F6", color: "#374151", border: "none", borderRadius: "8px", fontWeight: "700", fontSize: "13px", cursor: "pointer" }}>Sign Out</button>}
          </div>
        </div>
      </div>
    );
  }

  return <CalculatorContent />;
}

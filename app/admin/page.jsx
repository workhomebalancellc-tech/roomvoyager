"use client";

import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { collection, query, where, getDocs, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { addPoints, deductPoints, setPoints, getUserPoints } from "../../lib/points";

const ALLOWED_EMAILS = ["workhomebalancellc@gmail.com", "roomvoyager@protonmail.com"];

const NAVY   = "#003B95";
const ORANGE = "#FF6600";
const GREEN  = "#16A34A";

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

function ManualBookingLog() {
  const [form, setForm]       = useState({ guestEmail: "", product: "cruise", amount: "", notes: "" });
  const [submitting, set$]    = useState(false);
  const [done,       setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    set$(true);
    try {
      await fetch("/api/link-clicks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          partner:    "Manual log",
          product:    form.product,
          url:        "",
          userEmail:  form.guestEmail,
          userName:   `Manual — $${form.amount} ${form.product}${form.notes ? ` — ${form.notes}` : ""}`,
        }),
      });
      setDone(true);
      setForm({ guestEmail: "", product: "cruise", amount: "", notes: "" });
      setTimeout(() => setDone(false), 3000);
    } catch (err) {
      console.error(err);
    } finally {
      set$(false);
    }
  }

  return (
    <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "14px", padding: "20px" }}>
      <p style={{ fontSize: "13px", fontWeight: "700", color: "#111827", margin: "0 0 4px" }}>📝 Manual Booking Log</p>
      <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 14px" }}>Log a booking that happened outside the website (phone call, email) to track it in Airtable.</p>
      {done ? (
        <div style={{ textAlign: "center", padding: "20px", background: "#F0FDF4", borderRadius: "10px" }}>
          <p style={{ fontSize: "24px", margin: "0 0 8px" }}>✅</p>
          <p style={{ fontSize: "13px", fontWeight: "700", color: "#15803D", margin: 0 }}>Logged to Airtable!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
            <div>
              <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Guest Email</label>
              <input required type="email" placeholder="guest@example.com" value={form.guestEmail}
                onChange={e => setForm(f => ({ ...f, guestEmail: e.target.value }))}
                style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", boxSizing: "border-box", outline: "none" }} />
            </div>
            <div>
              <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Product</label>
              <select value={form.product} onChange={e => setForm(f => ({ ...f, product: e.target.value }))}
                style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", background: "#fff" }}>
                {PRODUCT_TYPES.map(p => <option key={p.id} value={p.id}>{p.icon} {p.label}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Booking Amount ($)</label>
            <input type="number" min="0" placeholder="0.00" value={form.amount}
              onChange={e => setForm(f => ({ ...f, amount: e.target.value }))}
              style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", boxSizing: "border-box", outline: "none" }} />
          </div>
          <div>
            <label style={{ fontSize: "11px", fontWeight: "600", color: "#6B7280", display: "block", marginBottom: "3px" }}>Notes (optional)</label>
            <input type="text" placeholder="e.g. Royal Caribbean 7-night, booked via phone" value={form.notes}
              onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
              style={{ width: "100%", padding: "8px 10px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", boxSizing: "border-box", outline: "none" }} />
          </div>
          <button type="submit" disabled={submitting}
            style={{ padding: "10px", background: submitting ? "#D1D5DB" : NAVY, color: "#fff", border: "none", borderRadius: "8px", fontSize: "13px", fontWeight: "700", cursor: submitting ? "default" : "pointer" }}>
            {submitting ? "Logging…" : "Log Booking →"}
          </button>
        </form>
      )}
    </div>
  );
}

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
  const [email, setEmail]         = useState("");
  const [found, setFound]         = useState(null); // { uid, name, email, points }
  const [notFound, setNotFound]   = useState(false);
  const [amount, setAmount]       = useState("");
  const [action, setAction]       = useState("add"); // add | deduct | set
  const [status, setStatus]       = useState("");
  const [loading, setLoading]     = useState(false);

  async function lookupUser() {
    setStatus(""); setFound(null); setNotFound(false);
    setLoading(true);
    try {
      const q = query(collection(db, "users"), where("email", "==", email.trim().toLowerCase()));
      const snap = await getDocs(q);
      if (snap.empty) {
        setNotFound(true);
        setLoading(false);
        return;
      }
      const docSnap = snap.docs[0];
      const data = docSnap.data();
      setFound({ uid: docSnap.id, name: data.name, email: data.email, points: data.points || 0 });
    } catch (e) {
      setStatus("❌ Error looking up user: " + e.message);
    }
    setLoading(false);
  }

  async function createMember() {
    setLoading(true); setStatus("");
    try {
      // Generate a manual uid based on email (for members who haven't signed in yet)
      const manualUid = "manual_" + email.trim().toLowerCase().replace(/[^a-z0-9]/g, "_");
      const ref = doc(db, "users", manualUid);
      await setDoc(ref, {
        name:           "",
        email:          email.trim().toLowerCase(),
        points:         0,
        lifetimePoints: 0,
        createdAt:      serverTimestamp(),
        updatedAt:      serverTimestamp(),
        source:         "admin_created",
      });
      setFound({ uid: manualUid, name: "", email: email.trim().toLowerCase(), points: 0 });
      setNotFound(false);
      setStatus("✅ Member record created. You can now adjust their points.");
    } catch (e) {
      console.error("createMember error:", e);
      setStatus("❌ " + (e?.message || "Permission denied. Check Firestore rules or sign in to the rewards page first."));
    }
    setLoading(false);
  }

  async function applyPoints() {
    if (!found || !amount) return;
    const pts = parseInt(amount, 10);
    if (isNaN(pts) || pts <= 0) { setStatus("❌ Enter a valid number of points."); return; }
    setLoading(true); setStatus("");
    try {
      if (action === "add")    await addPoints(found.uid, pts);
      if (action === "deduct") await deductPoints(found.uid, pts);
      if (action === "set")    await setPoints(found.uid, pts);
      const updated = await getUserPoints(found.uid);
      setFound(prev => ({ ...prev, points: updated }));
      setStatus(`✅ Done! ${found.name || found.email} now has ${updated.toLocaleString()} pts.`);
      setAmount("");
    } catch (e) {
      setStatus("❌ " + e.message);
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

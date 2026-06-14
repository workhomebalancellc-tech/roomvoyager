"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../../contexts/AuthContext";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

async function applyReferralCode(uid, code) {
  if (!code) return;
  await fetch("/api/admin/firestore", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ action: "saveReferral", uid, referralCode: code }),
  }).catch(() => {});
}

function SignUpContent() {
  const { signInWithGoogle, signUpWithEmail } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [codeValid, setCodeValid] = useState(null); // null | true | false
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref) setReferralCode(ref.toUpperCase());
  }, [searchParams]);

  async function validateCode(code) {
    if (!code || code.length < 4) { setCodeValid(null); return; }
    const res = await fetch("/api/admin/firestore", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "lookupReferralCode", code }),
    }).catch(() => null);
    if (!res) { setCodeValid(null); return; }
    setCodeValid(res.ok);
  }

  const handleGoogleSignIn = async () => {
    try {
      setError(null);
      const firebaseUser = await signInWithGoogle();
      if (referralCode) await applyReferralCode(firebaseUser.uid, referralCode);
      router.push("/profile");
    } catch (err) {
      console.error("Google sign-up error:", err.code, err.message);
      if (err.code === "auth/popup-blocked") {
        setError("Popup was blocked by your browser. Please allow popups for this site and try again.");
      } else if (err.code === "auth/unauthorized-domain") {
        setError("Sign-in is not authorized for this domain. Please contact support.");
      } else if (err.code === "auth/popup-closed-by-user") {
        setError(null); // User closed the popup — not an error
      } else {
        setError(`Google sign-up failed (${err.code || "unknown"}). Please try again.`);
      }
    }
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    if (password !== confirmPassword) { setError("Passwords do not match"); setLoading(false); return; }
    if (password.length < 8) { setError("Password must be at least 8 characters"); setLoading(false); return; }
    try {
      const firebaseUser = await signUpWithEmail(name, email, password);
      if (referralCode) await applyReferralCode(firebaseUser.uid, referralCode);
      router.push("/profile");
    } catch (err) {
      console.error("Email sign-up error:", err.code, err.message);
      if (err.code === "auth/email-already-in-use") setError("An account with this email already exists.");
      else if (err.code === "auth/weak-password") setError("Password is too weak. Please choose a stronger password.");
      else setError(`Failed to create account (${err.code || "unknown"}). Please try again.`);
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif", display: "flex", flexDirection: "column" }}>
      <nav style={{ background: "#fff", borderBottom: "1px solid #E5E7EB", padding: "0 24px", boxShadow: "0 1px 8px rgba(0,0,0,0.07)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" }}>
          <a href="/" style={{ fontSize: "22px", fontWeight: "800", color: NAVY, textDecoration: "none" }}>Room<span style={{ color: ORANGE }}>Voyager</span></a>
          <a href="/account/signin" style={{ color: NAVY, textDecoration: "none", fontSize: "14px", fontWeight: "600", padding: "7px 16px", border: `1.5px solid ${NAVY}`, borderRadius: "8px" }}>Sign In</a>
        </div>
      </nav>

      <div style={{ background: NAVY, padding: "32px 24px", textAlign: "center" }}>
        <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 8px" }}>Join for free</p>
        <h1 style={{ color: "#fff", fontSize: "28px", fontWeight: "800", margin: "0 0 6px" }}>Create your RoomVoyager account</h1>
        <p style={{ color: "#BFDBFE", fontSize: "14px", margin: 0 }}>Earn rewards on every hotel, flight, and cruise you book</p>
      </div>

      <div style={{ background: LIGHT_BLUE, borderBottom: "1px solid #DBEAFE", padding: "12px 24px" }}>
        <div style={{ maxWidth: "440px", margin: "0 auto", display: "flex", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
          {["🏆 Earn rewards points", "✈️ Exclusive member deals", "📋 Booking history"].map((item, i) => (
            <span key={i} style={{ fontSize: "12px", fontWeight: "600", color: NAVY }}>{item}</span>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "40px 24px 60px" }}>
        <div style={{ background: "#fff", borderRadius: "20px", boxShadow: "0 4px 24px rgba(0,59,149,0.1)", width: "100%", maxWidth: "440px", overflow: "hidden" }}>

          <div style={{ padding: "28px 28px 20px" }}>
            <button onClick={handleGoogleSignIn}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "13px 16px", background: "#fff", border: "1.5px solid #E5E7EB", borderRadius: "12px", fontSize: "15px", fontWeight: "600", color: "#374151", cursor: "pointer" }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.12)"}
              onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}>
              <GoogleIcon />
              Sign up with Google
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "0 28px 20px" }}>
            <div style={{ flex: 1, borderTop: "1px solid #E5E7EB" }} />
            <span style={{ fontSize: "13px", color: "#9CA3AF" }}>or sign up with email</span>
            <div style={{ flex: 1, borderTop: "1px solid #E5E7EB" }} />
          </div>

          <form onSubmit={handleEmailSignUp} style={{ padding: "0 28px 28px" }}>
            {[
              { label: "Full Name (Optional)", type: "text", placeholder: "Jane Doe", value: name, onChange: e => setName(e.target.value), required: false },
              { label: "Email Address", type: "email", placeholder: "you@example.com", value: email, onChange: e => setEmail(e.target.value), required: true },
              { label: "Password", type: "password", placeholder: "Minimum 8 characters", value: password, onChange: e => setPassword(e.target.value), required: true },
              { label: "Confirm Password", type: "password", placeholder: "••••••••", value: confirmPassword, onChange: e => setConfirmPassword(e.target.value), required: true },
            ].map((field, i) => (
              <div key={i} style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#374151", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>{field.label}</label>
                <input type={field.type} required={field.required} placeholder={field.placeholder} value={field.value} onChange={field.onChange}
                  style={{ width: "100%", padding: "11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                  onFocus={e => e.target.style.borderColor = NAVY} onBlur={e => e.target.style.borderColor = "#E5E7EB"} />
              </div>
            ))}

            {/* Referral code */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "12px", fontWeight: "700", color: "#374151", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Referral Code (Optional)</label>
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="e.g. JANE4821"
                  value={referralCode}
                  onChange={e => { setReferralCode(e.target.value.toUpperCase()); setCodeValid(null); }}
                  onBlur={() => validateCode(referralCode)}
                  maxLength={12}
                  style={{ width: "100%", padding: "11px 14px", border: `1.5px solid ${codeValid === true ? "#16A34A" : codeValid === false ? "#DC2626" : "#E5E7EB"}`, borderRadius: "10px", fontSize: "14px", outline: "none", boxSizing: "border-box", fontFamily: "monospace" }}
                />
                {codeValid === true  && <span style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", color: "#16A34A", fontSize: "16px" }}>✓</span>}
                {codeValid === false && <span style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", color: "#DC2626", fontSize: "13px" }}>Invalid</span>}
              </div>
              {codeValid === true && <p style={{ margin: "4px 0 0", fontSize: "12px", color: "#16A34A" }}>Code applied — you&apos;ll both earn bonus points on your first booking!</p>}
            </div>

            {error && <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", color: "#DC2626", padding: "12px 14px", borderRadius: "10px", fontSize: "13px", marginBottom: "16px" }}>{error}</div>}

            <button type="submit" disabled={loading}
              style={{ width: "100%", background: ORANGE, color: "#fff", padding: "13px", borderRadius: "10px", fontSize: "15px", fontWeight: "700", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, boxShadow: "0 4px 14px rgba(255,102,0,0.3)" }}>
              {loading ? "Creating Account..." : "Create Free Account"}
            </button>
          </form>

          <div style={{ borderTop: "1px solid #E5E7EB", padding: "20px 28px", textAlign: "center" }}>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: "0 0 8px" }}>
              Already have an account?{" "}
              <a href="/account/signin" style={{ color: NAVY, fontWeight: "700", textDecoration: "none" }}>Sign in</a>
            </p>
            <p style={{ fontSize: "12px", color: "#9CA3AF", margin: 0 }}>
              By creating an account you agree to our{" "}
              <a href="/terms" style={{ color: NAVY, textDecoration: "none" }}>Terms</a> and{" "}
              <a href="/privacy" style={{ color: NAVY, textDecoration: "none" }}>Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SignUpPage() {
  return (
    <Suspense fallback={null}>
      <SignUpContent />
    </Suspense>
  );
}

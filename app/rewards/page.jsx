"use client";

import { useSession } from "next-auth/react";

const TIERS = [
  { name: "Explorer", icon: "🧭", range: "0–9,999 pts", multiplier: "1x", color: "#6b7280", perks: ["5 pts per $1 on flights & hotels", "10 pts per $1 on cruises & packages", "Redeem from 1,000 pts ($10)", "No blackout dates"] },
  { name: "Voyager", icon: "⚓", range: "10,000–49,999 pts", multiplier: "1.2x", color: "#2563eb", perks: ["1.2x points on all bookings", "All Explorer perks", "Priority email response", "Exclusive member deals"] },
  { name: "Navigator", icon: "🗺️", range: "50,000–99,999 pts", multiplier: "1.5x", color: "#7c3aed", perks: ["1.5x points on all bookings", "All Voyager perks", "Dedicated agent access", "Early access to promotions"] },
  { name: "Admiral", icon: "👑", range: "100,000+ pts", multiplier: "2x", color: "#991b1b", perks: ["2x points on all bookings", "All Navigator perks", "VIP concierge service", "Best available rates guaranteed"] },
];

const EARNING_RATES = [
  { product: "Flights", icon: "✈️", pts: 5, note: "Per $1 spent" },
  { product: "Hotels", icon: "🏨", pts: 5, note: "Per $1 spent" },
  { product: "Cruises (self-book)", icon: "🚢", pts: 10, note: "Per $1 spent" },
  { product: "Cruises (agent)", icon: "🚢", pts: 10, note: "Per $1 spent" },
  { product: "Vacation Packages", icon: "🌴", pts: 10, note: "Per $1 spent" },
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

export default function RewardsPage() {
  const { data: session } = useSession();
  const userPoints = 0; // TODO: fetch from DB once users table is set up
  const cashValue = (userPoints / 100).toFixed(2);
  const canRedeem = userPoints >= 1000;

  function getCurrentTier() {
    if (userPoints >= 100000) return TIERS[3];
    if (userPoints >= 50000) return TIERS[2];
    if (userPoints >= 10000) return TIERS[1];
    return TIERS[0];
  }

  const currentTier = getCurrentTier();

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", fontFamily: "system-ui, sans-serif" }}>

      {/* NAV */}
      <nav style={{ background: "#991B1B", padding: "16px 24px", position: "sticky", top: 0, zIndex: 50, boxShadow: "0 2px 12px rgba(0,0,0,0.15)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ fontSize: "22px", fontWeight: "700", color: "#fff", textDecoration: "none" }}>RoomVoyager</a>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "flex-end" }}>
            <a href="/hotels" style={{ color: "#fca5a5", textDecoration: "none" }}>Hotels</a>
            <a href="/flights" style={{ color: "#fca5a5", textDecoration: "none" }}>Flights</a>
            <a href="/cruises" style={{ color: "#fca5a5", textDecoration: "none" }}>Cruises</a>
            <a href="/rewards" style={{ color: "#fff", fontWeight: "600", textDecoration: "none", borderBottom: "2px solid #fff", paddingBottom: "2px" }}>Rewards</a>
            <a href="/profile" style={{ color: "#fca5a5", textDecoration: "none" }}>Profile</a>
            <a href="/contact" style={{ color: "#fca5a5", textDecoration: "none" }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ background: "linear-gradient(135deg, #7f1d1d 0%, #991b1b 40%, #7f1d1d 100%)", padding: "48px 24px 40px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <p style={{ color: "#fca5a5", fontSize: "11px", fontWeight: "600", margin: "0 0 10px", textTransform: "uppercase", letterSpacing: "0.1em" }}>💰 Cash Back Loyalty Program</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: "700", margin: "0 0 12px", lineHeight: "1.2" }}>RoomVoyager Rewards</h1>
          <p style={{ color: "#fca5a5", fontSize: "16px", margin: "0 0 32px", maxWidth: "520px", lineHeight: "1.6" }}>
            Earn real cash back on every booking — no blackout dates, no travel credit restrictions. Real money, paid to you via Zelle, Cash App, or Venmo.
          </p>

          {session ? (
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "12px", padding: "20px", display: "inline-flex", gap: "32px", flexWrap: "wrap" }}>
              <div>
                <p style={{ color: "#fca5a5", fontSize: "11px", fontWeight: "600", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Your Points</p>
                <p style={{ color: "#fff", fontSize: "32px", fontWeight: "700", margin: 0 }}>{userPoints.toLocaleString()}</p>
              </div>
              <div>
                <p style={{ color: "#fca5a5", fontSize: "11px", fontWeight: "600", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Cash Value</p>
                <p style={{ color: "#fff", fontSize: "32px", fontWeight: "700", margin: 0 }}>${cashValue}</p>
              </div>
              <div>
                <p style={{ color: "#fca5a5", fontSize: "11px", fontWeight: "600", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.05em" }}>Your Tier</p>
                <p style={{ color: "#fff", fontSize: "20px", fontWeight: "700", margin: 0 }}>{currentTier.icon} {currentTier.name}</p>
              </div>
              {canRedeem && (
                <div style={{ display: "flex", alignItems: "flex-end" }}>
                  <a href="mailto:workhomebalancellc@gmail.com?subject=Rewards Redemption Request&body=Hi, I would like to redeem my RoomVoyager Rewards points for cash. Please send me redemption instructions."
                    style={{ background: "#fff", color: "#991b1b", padding: "10px 20px", borderRadius: "8px", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
                    Redeem now →
                  </a>
                </div>
              )}
            </div>
          ) : (
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="/account/signup" style={{ background: "#fff", color: "#991b1b", padding: "12px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: "700", textDecoration: "none" }}>
                Join Rewards — it's free →
              </a>
              <a href="/account/signin" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "12px 24px", borderRadius: "8px", fontSize: "14px", fontWeight: "600", textDecoration: "none" }}>
                Sign in
              </a>
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: "960px", margin: "0 auto", padding: "48px 24px 80px" }}>

        {/* HOW IT WORKS */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: "600" }}>Simple & transparent</p>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", margin: "0 0 28px" }}>How it works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              { step: "1", icon: "🔍", title: "Book through RoomVoyager", desc: "Search and book flights, hotels, or cruises on our site" },
              { step: "2", icon: "⭐", title: "Earn points automatically", desc: "5–10 points per $1 depending on the product booked" },
              { step: "3", icon: "✅", title: "Points activate after travel", desc: "Points post to your account once your trip is completed" },
              { step: "4", icon: "💵", title: "Redeem for real cash", desc: "Cash out via Zelle, Cash App, or Venmo — no restrictions" },
            ].map((item) => (
              <div key={item.step} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "20px" }}>
                <div style={{ width: "32px", height: "32px", background: "#fef2f2", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: "700", color: "#991b1b", marginBottom: "12px" }}>
                  {item.step}
                </div>
                <p style={{ fontSize: "22px", margin: "0 0 8px" }}>{item.icon}</p>
                <p style={{ fontSize: "14px", fontWeight: "600", color: "#111827", margin: "0 0 6px" }}>{item.title}</p>
                <p style={{ fontSize: "13px", color: "#6b7280", margin: 0, lineHeight: "1.5" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EARNING RATES */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: "600" }}>Points per dollar</p>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", margin: "0 0 8px" }}>Earning rates</h2>
          <p style={{ fontSize: "14px", color: "#6b7280", margin: "0 0 24px" }}>Tier multipliers apply on top of base rates. Flights excluded from double-points promotions.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "12px" }}>
            {EARNING_RATES.map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "20px", textAlign: "center" }}>
                <p style={{ fontSize: "28px", margin: "0 0 8px" }}>{item.icon}</p>
                <p style={{ fontSize: "13px", fontWeight: "600", color: "#111827", margin: "0 0 4px" }}>{item.product}</p>
                <p style={{ fontSize: "28px", fontWeight: "700", color: "#991b1b", margin: "0 0 2px" }}>{item.pts}</p>
                <p style={{ fontSize: "11px", color: "#9ca3af", margin: 0 }}>pts/{item.note.toLowerCase()}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TIERS */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: "600" }}>Lifetime points</p>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", margin: "0 0 24px" }}>Membership tiers</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {TIERS.map((tier) => (
              <div key={tier.name} style={{ background: "#fff", border: `2px solid ${session && currentTier.name === tier.name ? tier.color : "#e5e7eb"}`, borderRadius: "12px", padding: "20px", position: "relative" }}>
                {session && currentTier.name === tier.name && (
                  <span style={{ position: "absolute", top: "12px", right: "12px", fontSize: "10px", fontWeight: "700", background: tier.color, color: "#fff", padding: "2px 8px", borderRadius: "999px" }}>YOUR TIER</span>
                )}
                <p style={{ fontSize: "32px", margin: "0 0 8px" }}>{tier.icon}</p>
                <p style={{ fontSize: "18px", fontWeight: "700", color: tier.color, margin: "0 0 2px" }}>{tier.name}</p>
                <p style={{ fontSize: "12px", color: "#6b7280", margin: "0 0 4px" }}>{tier.range}</p>
                <p style={{ fontSize: "22px", fontWeight: "700", color: "#111827", margin: "0 0 16px" }}>{tier.multiplier} <span style={{ fontSize: "13px", fontWeight: "400", color: "#6b7280" }}>multiplier</span></p>
                <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: "14px" }}>
                  {tier.perks.map((perk, i) => (
                    <div key={i} style={{ display: "flex", gap: "6px", marginBottom: "6px" }}>
                      <span style={{ color: tier.color, fontWeight: "700", fontSize: "12px", flexShrink: 0, marginTop: "1px" }}>✓</span>
                      <span style={{ fontSize: "12px", color: "#374151" }}>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* REDEMPTION */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: "600" }}>1,000 points = $10</p>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", margin: "0 0 24px" }}>Redeem for cash</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ background: "#7f1d1d", padding: "14px 20px", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <span style={{ fontSize: "12px", fontWeight: "700", color: "#fca5a5", textTransform: "uppercase" }}>Points</span>
                <span style={{ fontSize: "12px", fontWeight: "700", color: "#fca5a5", textTransform: "uppercase" }}>Cash Value</span>
              </div>
              {REDEMPTION.map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "12px 20px", borderBottom: i < REDEMPTION.length - 1 ? "1px solid #f3f4f6" : "none", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#111827" }}>{row.pts.toLocaleString()}</span>
                  <span style={{ fontSize: "15px", fontWeight: "700", color: "#991b1b" }}>{row.value}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "20px" }}>
                <p style={{ fontWeight: "600", color: "#111827", margin: "0 0 12px", fontSize: "14px" }}>How to redeem</p>
                {["Reach 1,000+ points (points activate after trip completion)", "Email us at workhomebalancellc@gmail.com to request redemption", "Choose your payout method: Zelle, Cash App, or Venmo", "Receive your cash — standard/free transfers only"].map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                    <span style={{ width: "20px", height: "20px", background: "#fef2f2", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "700", color: "#991b1b", flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ fontSize: "13px", color: "#374151", lineHeight: "1.5" }}>{step}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "#fef2f2", borderRadius: "12px", padding: "20px" }}>
                <p style={{ fontWeight: "600", color: "#7f1d1d", margin: "0 0 8px", fontSize: "14px" }}>Payment methods</p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  {["💚 Zelle", "💛 Cash App", "💜 Venmo"].map((m, i) => (
                    <span key={i} style={{ fontSize: "13px", fontWeight: "600", color: "#374151", background: "#fff", padding: "6px 14px", borderRadius: "8px", border: "1px solid #fca5a5" }}>{m}</span>
                  ))}
                </div>
                <p style={{ fontSize: "12px", color: "#9ca3af", margin: "10px 0 0" }}>Minimum redemption: 1,000 points · Standard transfers only (free)</p>
              </div>
            </div>
          </div>
        </section>

        {/* REFERRALS */}
        <section style={{ marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", color: "#9ca3af", margin: "0 0 4px", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: "600" }}>Both of you earn</p>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", margin: "0 0 8px" }}>Refer a friend, earn rewards</h2>
          <p style={{ fontSize: "14px", color: "#6b7280", margin: "0 0 24px" }}>When a friend books through your referral, you both earn bonus points — no cap in Year 1.</p>
          <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", overflow: "hidden", marginBottom: "20px" }}>
            <div style={{ background: "#7f1d1d", padding: "14px 20px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#fca5a5", textTransform: "uppercase" }}>Friend Books</span>
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#fca5a5", textTransform: "uppercase" }}>You Earn</span>
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#fca5a5", textTransform: "uppercase" }}>Friend Earns</span>
            </div>
            {REFERRAL.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "14px 20px", borderBottom: i < REFERRAL.length - 1 ? "1px solid #f3f4f6" : "none", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                <span style={{ fontSize: "14px", fontWeight: "600", color: "#111827" }}>{row.product}</span>
                <span style={{ fontSize: "14px", color: "#991b1b", fontWeight: "600" }}>{row.referrer}</span>
                <span style={{ fontSize: "14px", color: "#374151" }}>{row.friend}</span>
              </div>
            ))}
          </div>
          {session ? (
            <div style={{ background: "#fef2f2", borderRadius: "12px", padding: "20px" }}>
              <p style={{ fontWeight: "600", color: "#7f1d1d", margin: "0 0 8px" }}>Your referral link</p>
              <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>Referral codes are coming soon — check back after launch!</p>
            </div>
          ) : (
            <div style={{ background: "#fef2f2", borderRadius: "12px", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
              <p style={{ color: "#7f1d1d", fontWeight: "600", margin: 0 }}>Sign up to get your referral code</p>
              <a href="/account/signup" style={{ background: "#991b1b", color: "#fff", padding: "10px 20px", borderRadius: "8px", fontSize: "13px", fontWeight: "600", textDecoration: "none" }}>
                Join free →
              </a>
            </div>
          )}
        </section>

        {/* KEY POLICIES */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", margin: "0 0 24px" }}>Program rules & policies</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
            {[
              { icon: "📅", title: "Points activation", desc: "Points post after trip completion, not at booking" },
              { icon: "⏰", title: "Expiration", desc: "Points expire after 3 years of inactivity. Any booking, referral, or redemption resets the clock" },
              { icon: "🔄", title: "Reinstatement", desc: "One-time free reinstatement within 30 days of expiration" },
              { icon: "❌", title: "Cancellations", desc: "Points are voided if travel is not completed" },
              { icon: "🏆", title: "Tier status", desc: "Tiers are based on lifetime points. Tier is never reset for inactivity — only if account is closed" },
              { icon: "👥", title: "Group bookings", desc: "Lead passenger account earns all points for group bookings" },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "16px", display: "flex", gap: "12px" }}>
                <span style={{ fontSize: "20px", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: "600", color: "#111827", margin: "0 0 4px" }}>{item.title}</p>
                  <p style={{ fontSize: "12px", color: "#6b7280", margin: 0, lineHeight: "1.5" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ SNIPPET */}
        <section style={{ marginBottom: "56px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#111827", margin: "0 0 24px" }}>Common questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { q: "When do my points become available?", a: "Points activate after your trip is completed, not at booking. This protects the program from cancellations." },
              { q: "Is there a limit to how many points I can earn?", a: "No earning cap in Year 1. Earn as much as you travel." },
              { q: "Can I combine points with another member?", a: "Points gifting is not available at this time. Points are tied to the booking account." },
              { q: "How long does redemption take?", a: "Redemptions are processed within 2 business days via Zelle, Cash App, or Venmo." },
            ].map((item, i) => (
              <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "10px", padding: "18px 20px" }}>
                <p style={{ fontSize: "14px", fontWeight: "600", color: "#111827", margin: "0 0 6px" }}>Q: {item.q}</p>
                <p style={{ fontSize: "13px", color: "#6b7280", margin: 0, lineHeight: "1.5" }}>A: {item.a}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "16px" }}>
            <a href="/faq" style={{ fontSize: "14px", color: "#991b1b", fontWeight: "600", textDecoration: "underline" }}>View all FAQs →</a>
          </div>
        </section>

        {/* CTA */}
        <div style={{ background: "linear-gradient(135deg, #7f1d1d, #991b1b)", borderRadius: "16px", padding: "40px 32px", textAlign: "center" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", color: "#fff", margin: "0 0 8px" }}>Ready to start earning?</h2>
          <p style={{ color: "#fca5a5", fontSize: "15px", margin: "0 0 24px" }}>Join free — no credit card required. Start earning on your first booking.</p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/account/signup" style={{ background: "#fff", color: "#991b1b", padding: "13px 28px", borderRadius: "8px", fontSize: "15px", fontWeight: "700", textDecoration: "none" }}>
              Join Rewards free →
            </a>
            <a href="/hotels" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "13px 28px", borderRadius: "8px", fontSize: "15px", fontWeight: "600", textDecoration: "none" }}>
              Browse hotels
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

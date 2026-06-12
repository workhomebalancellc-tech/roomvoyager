"use client";

import { useState, useRef, useEffect } from "react";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

const FAQS = [
  { q: ["how do i earn points", "earn points", "how points work", "points", "earn cash back", "cash back"], a: "You earn 5 pts per $1 on hotels and flights, and 10 pts per $1 on cruises and vacation packages. Double points are available on hotels, cruises, and packages." },
  { q: ["redeem points", "how to redeem", "cash out", "withdraw", "get paid", "payout", "pay out"], a: "Redeem at 1,000 pts via Zelle, Cash App, or Venmo. 10,000 pts = $10, 25,000 = $25, 50,000 = $50, 100,000 = $100." },
  { q: ["tiers", "tier", "explorer", "voyager", "navigator", "admiral", "levels", "membership level"], a: "4 tiers: Explorer (0–9,999 pts), Voyager (10k–49,999), Navigator (50k–99,999), Admiral (100k+). Higher tiers unlock birthday bonuses, auto payouts, and VIP perks." },
  { q: ["cancel", "cancellation", "refund", "cancel booking"], a: "Cancellation policies vary by provider. Most hotels offer free cancellation — check listing details before booking. For help with a specific booking, contact us." },
  { q: ["how to book", "book a cruise", "book a hotel", "book flights", "booking", "make a reservation", "reservation"], a: "Browse Hotels, Flights, or Cruises, pick your option, and you'll be directed to our trusted partner to complete the booking securely. Points are credited after your trip." },
  { q: ["contact", "email", "phone", "reach you", "support", "help", "talk to someone"], a: "Email us at roomvoyager@protonmail.com or use the contact form on our Contact page. We respond within 24 hours on business days." },
  { q: ["group", "group booking", "group rate", "group travel", "family trip"], a: "We offer special group rates for cruises, hotels, and packages. Email us at roomvoyager@protonmail.com with your group size and travel dates." },
  { q: ["referral", "refer a friend", "referrals", "refer someone"], a: "Refer a friend and both of you earn bonus points: 200 for flights, 350 for hotels, 500 for cruises or packages — credited after their first booking." },
  { q: ["sign up", "create account", "join", "register", "free", "how to join"], a: "Creating an account is free — no credit card required. Sign up at roomvoyager.com/account/signup to start earning points right away." },
  { q: ["birthday", "birthday bonus", "birthday reward"], a: "Voyager, Navigator, and Admiral members receive a 500-point birthday bonus automatically credited to their account." },
  { q: ["double points", "bonus points", "double pts"], a: "Double points are available on hotels, cruises, and vacation packages. Flights are not eligible for double points." },
  { q: ["when do points post", "points credited", "how long", "pending points"], a: "Points are credited to your account after your trip is completed — typically within 7 days of your check-out or return date." },
  { q: ["minimum redeem", "minimum redemption", "minimum points", "how many points to redeem"], a: "The minimum redemption is 1,000 points ($1). Most members redeem at 10,000+ pts for better value." },
  { q: ["payment method", "zelle", "cash app", "venmo", "how do i get paid"], a: "We pay out via Zelle, Cash App, or Venmo. You choose your preferred method when you request a redemption." },
  { q: ["cruise", "cruises", "cruise deals"], a: "We partner with top cruise lines. Browse our Cruises page to search itineraries and earn 10 pts per $1 — double points eligible!" },
  { q: ["hotel", "hotels", "hotel deals", "hotel points"], a: "Book hotels through RoomVoyager and earn 5 pts per $1 — with double points available! Browse our Hotels page to search by destination." },
  { q: ["flight", "flights", "airfare", "flight deals"], a: "Search flights on our Flights page powered by Kiwi.com. Earn 5 pts per $1 on every flight booking." },
  { q: ["vacation package", "packages", "vacation deal", "all inclusive"], a: "Vacation packages earn 10 pts per $1 with double points available. Visit our Packages page or contact us for custom quotes." },
  { q: ["auto payout", "automatic payout", "auto redeem"], a: "Navigator members get auto payouts at 50,000 pts; Admiral members at 25,000 pts. Lower tiers can request manual redemptions anytime." },
  { q: ["no blackout", "blackout dates", "restrictions"], a: "RoomVoyager has no blackout dates. Earn and redeem points year-round with no restrictions." },
];

function getBotReply(input) {
  const lower = input.toLowerCase();
  for (const faq of FAQS) {
    if (faq.q.some(k => lower.includes(k))) return faq.a;
  }
  return "I'm not sure about that one! Visit our contact page or email roomvoyager@protonmail.com and we'll get back to you within 24 hours.";
}

export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm Compass, your RoomVoyager assistant. Ask me anything about rewards, bookings, or your account." }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  function send() {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages(prev => [...prev, { from: "user", text: trimmed }, { from: "bot", text: getBotReply(trimmed) }]);
    setInput("");
  }

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 9999 }}>
      {open && (
        <div style={{ width: "320px", background: "#fff", borderRadius: "20px", boxShadow: "0 8px 40px rgba(0,59,149,0.18)", overflow: "hidden", marginBottom: "12px" }}>
          {/* Header */}
          <div style={{ background: NAVY, padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "30px", height: "30px", background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0 }}>💬</div>
              <div>
                <p style={{ color: "#93C5FD", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>RoomVoyager Assistant</p>
                <p style={{ color: "#fff", fontSize: "14px", fontWeight: "800", margin: 0 }}>Compass</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "#93C5FD", fontSize: "20px", cursor: "pointer", lineHeight: 1, padding: "0 2px" }}>×</button>
          </div>
          {/* Messages */}
          <div style={{ padding: "14px 16px", height: "220px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "85%", padding: "8px 12px",
                  borderRadius: m.from === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                  background: m.from === "user" ? NAVY : LIGHT_BLUE,
                  color: m.from === "user" ? "#fff" : "#111827",
                  fontSize: "13px", lineHeight: 1.5,
                }}>{m.text}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>
          {/* Suggestion chips */}
          <div style={{ padding: "0 12px 8px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {["Earn points", "Redeem", "Tiers"].map((q, i) => (
              <button key={i} onClick={() => { setMessages(prev => [...prev, { from: "user", text: q }, { from: "bot", text: getBotReply(q) }]); }}
                style={{ background: LIGHT_BLUE, color: NAVY, border: "none", borderRadius: "999px", padding: "5px 12px", fontSize: "11px", fontWeight: "600", cursor: "pointer" }}>
                {q}
              </button>
            ))}
          </div>
          {/* Input */}
          <div style={{ borderTop: "1px solid #E5E7EB", padding: "10px 14px", display: "flex", gap: "8px" }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              placeholder="Ask a question..."
              style={{ flex: 1, padding: "8px 12px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
            />
            <button onClick={send} style={{ background: ORANGE, color: "#fff", border: "none", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>→</button>
          </div>
        </div>
      )}
      {/* Toggle bubble */}
      <button onClick={() => setOpen(o => !o)}
        style={{ width: "56px", height: "56px", background: NAVY, border: "3px solid #fff", borderRadius: "50%", boxShadow: "0 4px 20px rgba(0,59,149,0.35)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginLeft: "auto" }}>
        {open ? "×" : "💬"}
      </button>
    </div>
  );
}

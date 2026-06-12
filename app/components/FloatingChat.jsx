"use client";

import { useState, useRef, useEffect } from "react";

const NAVY = "#003B95";
const ORANGE = "#FF6600";
const LIGHT_BLUE = "#EBF3FF";

// ---------------------------------------------------------------------------
// Knowledge base — each entry has keyword triggers and a response.
// Multi-word phrases score higher than single words.
// ---------------------------------------------------------------------------
const KB = [
  {
    id: "earn",
    triggers: ["earn points", "how do i earn", "how points work", "earning points", "earn cash back", "cash back", "how do points work", "get points", "accumulate points", "points per dollar", "pts per dollar", "points work"],
    answer: "You earn points on every booking:\n• ✈️ Flights: 5 pts per $1\n• 🏨 Hotels: 5 pts per $1 (double pts available!)\n• 🚢 Cruises: 10 pts per $1 (double pts available!)\n• 🌴 Packages: 10 pts per $1 (double pts available!)\n\nPoints post within 7 days of your trip completing.",
    follow: ["double points", "redeem", "tiers"],
  },
  {
    id: "double",
    triggers: ["double points", "double pts", "bonus points", "2x points", "double earning", "earn double", "which products double", "what doubles"],
    answer: "Double points apply to hotels, cruises, and vacation packages — meaning up to 20 pts per $1! Flights earn standard points only (5 pts/$1, not eligible for double).",
    follow: ["earn", "redeem"],
  },
  {
    id: "redeem",
    triggers: ["redeem points", "how to redeem", "cash out", "withdraw", "get paid", "payout", "pay out", "claim points", "use points", "spend points", "how do i redeem", "request payout", "redemption"],
    answer: "Redeem once you hit 10,000 points ($10 minimum). Payouts go via Zelle, Cash App, or Venmo:\n• 10,000 pts = $10\n• 25,000 pts = $25\n• 50,000 pts = $50\n• 100,000 pts = $100\n\nRequest a redemption from your profile or the Rewards page.",
    follow: ["auto payout", "payment methods", "tiers"],
  },
  {
    id: "minimum",
    triggers: ["minimum redeem", "minimum points", "minimum redemption", "how many points to redeem", "least points", "starting points", "redeem minimum", "10000 points", "lowest redemption"],
    answer: "The minimum redemption is 10,000 points = $10. You can redeem via Zelle, Cash App, or Venmo once you hit that threshold.",
    follow: ["redeem", "earn"],
  },
  {
    id: "auto_payout",
    triggers: ["auto payout", "automatic payout", "auto redeem", "automatically paid", "auto cash out"],
    answer: "Navigator members (50k pts) get automatic payouts when they hit 50,000 pts. Admiral members (100k pts) get auto payouts at every 25,000 pts. All other tiers can manually request redemptions anytime.",
    follow: ["tiers", "redeem"],
  },
  {
    id: "payment",
    triggers: ["payment method", "zelle", "cash app", "venmo", "how do i get paid", "how are you paid", "payout method", "payment options", "how to receive money"],
    answer: "We pay out via three methods:\n• 💚 Zelle — phone number or email\n• 💛 Cash App — $cashtag\n• 💜 Venmo — @username\n\nYou pick your preferred method when requesting a redemption.",
    follow: ["redeem", "auto payout"],
  },
  {
    id: "tiers",
    triggers: ["tiers", "tier", "explorer", "voyager", "navigator", "admiral", "membership level", "levels", "membership tiers", "reward tiers", "what tier", "which tier", "my tier"],
    answer: "RoomVoyager has 4 tiers based on lifetime points:\n• 🧭 Explorer: 0–9,999 pts\n• ⚓ Voyager: 10,000–49,999 pts (birthday bonus!)\n• 🗺️ Navigator: 50,000–99,999 pts (auto payouts)\n• 👑 Admiral: 100,000+ pts (VIP concierge)\n\nHigher tiers = better perks and faster payouts.",
    follow: ["earn", "birthday bonus", "auto payout"],
  },
  {
    id: "birthday",
    triggers: ["birthday", "birthday bonus", "birthday reward", "birthday points", "birthday gift"],
    answer: "🎂 Birthday bonus! Voyager, Navigator, and Admiral members automatically receive 500 bonus points on their birthday. Make sure your birthday is saved in your account settings.",
    follow: ["tiers", "earn"],
  },
  {
    id: "posting",
    triggers: ["when do points post", "points credited", "how long points", "pending points", "points post", "when will i get my points", "points take", "points show up"],
    answer: "Points are credited within 7 days of your trip completing (check-out date for hotels, return date for flights/cruises). If it's been longer than 7 days, contact us and we'll look into it.",
    follow: ["earn", "redeem"],
  },
  {
    id: "cancel",
    triggers: ["cancel", "cancellation", "refund", "cancel booking", "cancel reservation", "can i cancel", "cancel my booking", "get a refund", "money back"],
    answer: "Cancellation policies are set by the hotel, airline, or cruise line — they vary by provider. Most hotels offer free cancellation if you cancel before the deadline shown at booking.\n\nFor booking-specific help, email us at roomvoyager@protonmail.com.",
    follow: ["contact", "book"],
  },
  {
    id: "book",
    triggers: ["how to book", "book a cruise", "book a hotel", "book flights", "booking", "make a reservation", "reservation", "how do i book", "where do i book", "place a booking"],
    answer: "Booking is simple:\n1. Go to Hotels, Flights, or Cruises\n2. Search your destination & dates\n3. Choose your option — you'll be sent to our trusted partner to complete checkout securely\n4. Points post within 7 days of your trip!\n\nNo extra fees from us.",
    follow: ["earn", "cancel", "group"],
  },
  {
    id: "group",
    triggers: ["group booking", "group rate", "group travel", "group trip", "group", "family trip", "large group", "corporate travel", "team travel"],
    answer: "We love group travel! We offer special rates for groups booking cruises, hotels, or packages. Email us at roomvoyager@protonmail.com with:\n• Your destination & dates\n• Number of travelers\n• Type of travel (hotel / cruise / package)\n\nWe'll get back to you with options.",
    follow: ["contact", "book"],
  },
  {
    id: "referral",
    triggers: ["referral", "refer a friend", "referrals", "refer someone", "referral bonus", "referral points", "invite a friend", "share roomvoyager"],
    answer: "Refer a friend and you BOTH earn bonus points when they complete their first booking:\n• ✈️ Flight: 200 pts each\n• 🏨 Hotel: 350 pts each\n• 🚢 Cruise or Package: 500 pts each\n\nFind your referral link in your account profile.",
    follow: ["earn", "sign up"],
  },
  {
    id: "signup",
    triggers: ["sign up", "create account", "join", "register", "how to join", "membership", "how do i sign up", "create a free account", "is it free", "cost to join"],
    answer: "Joining is completely free — no credit card required! Sign up at roomvoyager.com/account/signup and start earning points on your very first booking.",
    follow: ["earn", "tiers"],
  },
  {
    id: "contact",
    triggers: ["contact", "email", "phone", "reach you", "talk to someone", "customer service", "customer support", "speak to someone", "human", "agent", "help me", "need help"],
    answer: "Our team is happy to help!\n• 📧 Email: roomvoyager@protonmail.com\n• 📞 Phone: 1-800-VOYAGER (Mon–Fri, 9am–6pm EST)\n• 💬 Contact form: roomvoyager.com/contact\n\nWe respond within 24 hours on business days.",
    follow: ["group", "cancel"],
  },
  {
    id: "blackout",
    triggers: ["blackout", "blackout dates", "restrictions", "no restrictions", "any restrictions", "blocked dates", "limited availability"],
    answer: "No blackout dates — ever! Earn and redeem your points on any booking, any time of year. Your rewards don't expire either.",
    follow: ["redeem", "earn"],
  },
  {
    id: "expire",
    triggers: ["expire", "expiration", "do points expire", "points expire", "lose points", "points lost", "points void"],
    answer: "Your points never expire as long as your account is active. Stay active by making at least one booking per year.",
    follow: ["earn", "redeem"],
  },
  {
    id: "hotels",
    triggers: ["hotel deals", "hotel booking", "search hotels", "find hotels", "hotel search", "hotels page", "book a hotel"],
    answer: "Browse hundreds of hotels worldwide on our Hotels page — from budget-friendly to 5-star luxury. Earn 5 pts per $1 with double points available. Most listings include free cancellation.",
    follow: ["earn", "double", "book"],
  },
  {
    id: "flights",
    triggers: ["flight deals", "flight booking", "search flights", "find flights", "airfare", "flights page", "book flights", "cheap flights", "kiwi"],
    answer: "Search hundreds of airlines on our Flights page, powered by Kiwi.com. Compare fares and earn 5 pts per $1 on every ticket.",
    follow: ["earn", "book"],
  },
  {
    id: "cruises",
    triggers: ["cruise deals", "cruise booking", "search cruises", "find cruises", "cruise lines", "cruises page", "book a cruise", "cruise itinerary"],
    answer: "Our Cruises page features Royal Caribbean, Celebrity, Cunard, Virgin Voyages, and more across the Caribbean, Mediterranean, Alaska, and beyond. Earn 10 pts per $1 — double pts eligible!",
    follow: ["earn", "double", "group", "popup"],
  },
  {
    id: "popup",
    triggers: ["pop up", "popup", "pop-up", "pop up blocker", "popup blocker", "can't see cruise", "cannot see cruise", "cruise not loading", "cruise search not showing", "cruise page not working", "cruise search missing", "cruise search blank", "disable pop up", "allow pop up"],
    answer: "The cruise search opens in a pop-up window. If you don't see it, your browser's pop-up blocker is preventing it from loading.\n\nTo fix it:\n1. Look for a blocked pop-up icon 🚫 in your browser's address bar\n2. Click it and select 'Always allow pop-ups from this site'\n3. Refresh the page\n\nThis applies to Chrome, Safari, Firefox, and Edge.",
    follow: ["cruises", "book", "contact"],
  },
  {
    id: "packages",
    triggers: ["vacation package", "packages", "vacation deal", "all inclusive", "package deal", "bundle", "vacation bundle"],
    answer: "Vacation packages are coming soon! They'll include all-inclusive deals earning 10 pts per $1 with double points available. Contact us for current package inquiries.",
    follow: ["contact", "earn"],
  },
];

// ---------------------------------------------------------------------------
// Smart reply engine
// ---------------------------------------------------------------------------
const GREETINGS = ["hi", "hello", "hey", "howdy", "what's up", "whats up", "yo", "sup", "good morning", "good afternoon", "good evening"];
const THANKS = ["thank", "thanks", "thank you", "thx", "ty", "awesome", "great", "perfect", "got it", "helpful", "that helps", "makes sense"];
const GOODBYES = ["bye", "goodbye", "see you", "later", "cya", "talk later", "that's all", "thats all", "done"];

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/['']/g, "'")
    .replace(/[^a-z0-9\s']/g, " ")
    .replace(/\b(what|how|can|do|does|is|are|will|would|could|should|tell me|i want to know about|explain|about|the|a|an|my|me|i|we|you|please|help)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreEntry(entry, lower, normalized) {
  let score = 0;
  for (const trigger of entry.triggers) {
    if (lower.includes(trigger)) {
      // Longer phrases are more specific — weight them higher
      score = Math.max(score, trigger.split(" ").length * 10);
    } else {
      // Partial word overlap
      const tWords = trigger.split(" ");
      const overlap = tWords.filter(w => w.length > 3 && normalized.includes(w)).length;
      if (overlap > 0) score = Math.max(score, overlap * 3);
    }
  }
  return score;
}

function getBotReply(input, lastTopic) {
  const lower = input.toLowerCase().trim();
  const normalized = normalize(lower);

  // Greetings
  if (GREETINGS.some(g => lower === g || lower.startsWith(g + " ") || lower.endsWith(" " + g))) {
    return { text: "Hey there! 👋 I'm Compass. Ask me anything about earning points, redeeming rewards, booking travel, or your account.", topic: null };
  }

  // Thanks
  if (THANKS.some(t => lower.includes(t))) {
    return { text: "Happy to help! 😊 Anything else you'd like to know about RoomVoyager?", topic: null };
  }

  // Goodbyes
  if (GOODBYES.some(g => lower.includes(g))) {
    return { text: "Safe travels! ✈️ Come back anytime — I'm always here.", topic: null };
  }

  // "Tell me more" / "more info" — expand on last topic
  if (lastTopic && /more|more info|explain|detail|elaborate|tell me more|go on|and then/.test(lower)) {
    const last = KB.find(e => e.id === lastTopic);
    if (last?.follow?.length) {
      const related = KB.find(e => e.id === last.follow[0]);
      if (related) return { text: `Sure! Here's more: ${related.answer}`, topic: related.id, follow: related.follow };
    }
  }

  // Score all KB entries
  const scored = KB.map(entry => ({ entry, score: scoreEntry(entry, lower, normalized) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scored.length > 0) {
    const best = scored[0].entry;
    return { text: best.answer, topic: best.id, follow: best.follow };
  }

  // Soft fallback — suggest topics
  return {
    text: "Hmm, I'm not sure about that one. Here are some things I can help with: earning points, redeeming rewards, membership tiers, booking travel, cancellations, or contacting our team. What would you like to know?",
    topic: null,
  };
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function FloatingChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm Compass, your RoomVoyager assistant. Ask me anything about rewards, bookings, or your account." }
  ]);
  const [input, setInput] = useState("");
  const [lastTopic, setLastTopic] = useState(null);
  const [suggestions, setSuggestions] = useState(["How do I earn points?", "How do I redeem?", "Tell me about tiers"]);
  const bottomRef = useRef(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  function send(text) {
    const trimmed = (text || input).trim();
    if (!trimmed) return;
    const reply = getBotReply(trimmed, lastTopic);
    setMessages(prev => [...prev, { from: "user", text: trimmed }, { from: "bot", text: reply.text }]);
    setInput("");
    if (reply.topic) setLastTopic(reply.topic);
    // Update suggestion chips to follow-ups from this answer
    if (reply.follow?.length) {
      const chips = reply.follow.slice(0, 3).map(id => {
        const entry = KB.find(e => e.id === id);
        return entry ? entry.triggers[0] : null;
      }).filter(Boolean);
      // Capitalize first letter for display
      setSuggestions(chips.map(c => c.charAt(0).toUpperCase() + c.slice(1)));
    }
  }

  return (
    <div style={{ position: "fixed", bottom: "24px", right: "24px", zIndex: 9999 }}>
      {open && (
        <div style={{ width: "320px", background: "#fff", borderRadius: "20px", boxShadow: "0 8px 40px rgba(0,59,149,0.18)", overflow: "hidden", marginBottom: "12px" }}>
          {/* Header */}
          <div style={{ background: NAVY, padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "30px", height: "30px", background: ORANGE, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0 }}>🧭</div>
              <div>
                <p style={{ color: "#93C5FD", fontSize: "10px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>RoomVoyager Assistant</p>
                <p style={{ color: "#fff", fontSize: "14px", fontWeight: "800", margin: 0 }}>Compass</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "#93C5FD", fontSize: "20px", cursor: "pointer", lineHeight: 1, padding: "0 2px" }}>×</button>
          </div>

          {/* Messages */}
          <div style={{ padding: "14px 16px", height: "230px", overflowY: "auto", display: "flex", flexDirection: "column", gap: "10px" }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: "flex", justifyContent: m.from === "user" ? "flex-end" : "flex-start" }}>
                <div style={{
                  maxWidth: "85%", padding: "8px 12px",
                  borderRadius: m.from === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
                  background: m.from === "user" ? NAVY : LIGHT_BLUE,
                  color: m.from === "user" ? "#fff" : "#111827",
                  fontSize: "13px", lineHeight: 1.55,
                  whiteSpace: "pre-line",
                }}>{m.text}</div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Dynamic suggestion chips */}
          <div style={{ padding: "0 12px 8px", display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {suggestions.map((q, i) => (
              <button key={i} onClick={() => send(q)}
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
              onFocus={e => e.target.style.borderColor = NAVY}
              onBlur={e => e.target.style.borderColor = "#E5E7EB"}
            />
            <button onClick={() => send()} style={{ background: ORANGE, color: "#fff", border: "none", borderRadius: "8px", padding: "8px 14px", fontSize: "13px", fontWeight: "700", cursor: "pointer" }}>→</button>
          </div>
        </div>
      )}

      {/* Toggle bubble */}
      <button onClick={() => setOpen(o => !o)}
        style={{ width: "56px", height: "56px", background: NAVY, border: "3px solid #fff", borderRadius: "50%", boxShadow: "0 4px 20px rgba(0,59,149,0.35)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginLeft: "auto" }}>
        {open ? "×" : "🧭"}
      </button>
    </div>
  );
}

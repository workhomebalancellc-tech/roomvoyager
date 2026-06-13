"use client";

import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NAVY   = "#003B95";
const ORANGE = "#FF6600";

const CATEGORY_ICONS = {
  "Booking": "✈️",
  "Rewards Program": "🏆",
  "Account": "👤",
  "Cancellations & Refunds": "🔄",
};

const faqs = [
  {
    category: "Booking",
    questions: [
      {
        q: "How do I book a hotel through RoomVoyager?",
        a: "Use the search widget on our Hotels page to find and book hotels. You'll be taken to Expedia's secure booking platform to complete your reservation.",
      },
      {
        q: "Can I book flights directly on RoomVoyager?",
        a: "Yes! You can start your flight search right on our Flights page — Kiwi.com will handle the rest, including checkout and your booking confirmation.",
      },
      {
        q: "How do I book a cruise?",
        a: "Visit our Cruises page and use the CruiseDirect search widget to find your perfect sailing, or click on any of the cruise line photos to continue shopping on their page.",
      },
      {
        q: "I can't see the cruise search on the Cruises page — what do I do?",
        a: "The cruise search opens in a pop-up window. If you don't see it, your browser's pop-up blocker is likely preventing it from loading. Disable your pop-up blocker for our site (look for a blocked pop-up icon in your browser's address bar and click 'Always allow') and then refresh the page.",
      },
      {
        q: "Are there any booking fees?",
        a: "No — RoomVoyager charges no booking fees. We earn a commission from our travel partners, which does not affect the price you pay.",
      },
    ],
  },
  {
    category: "Rewards Program",
    questions: [
      {
        q: "How do I earn Rewards points?",
        a: "You earn points on every booking made through RoomVoyager — 5 pts per $1 on flights and hotels, 10 pts per $1 on cruises and packages (double points available on hotels, cruises, and packages). Points may take up to 7 days to appear in your account after your booking is confirmed in our system. If you don't see them after 7 days, contact us at roomvoyager@protonmail.com.",
      },
      {
        q: "What is the difference between Pending, Redeemable, and Lifetime points?",
        a: "Pending points are earned when a booking is logged but not yet confirmed — they show up in your account but cannot be redeemed yet. Once your travel is completed, points become Redeemable 45 days after your trip ends. Lifetime points is your all-time total of every point ever earned, including ones already redeemed — it's used to determine your rewards tier.",
      },
      {
        q: "How do I redeem my points?",
        a: "Once you've accumulated 10,000+ points ($10 value), visit your Rewards page and request a redemption. Cash rewards are paid out via Zelle, Cash App, or Venmo within 45 days.",
      },
      {
        q: "When do my points expire?",
        a: "Points are valid for 36 months (3 years) from the date they are earned. Making a new booking resets the expiration clock.",
      },
      {
        q: "What are the Rewards tiers?",
        a: "We have four tiers: Explorer (0–9,999 points), Voyager (10,000–49,999), Navigator (50,000–99,999), and Admiral (100,000+). Higher tiers unlock bonus perks and priority support.",
      },
    ],
  },
  {
    category: "Account",
    questions: [
      {
        q: "I'm not receiving emails from RoomVoyager. What should I do?",
        a: "First, check your spam or junk folder — our emails sometimes land there. If you find them, mark them as 'Not Spam' so future emails go to your inbox. If you still don't see anything, contact us at roomvoyager@protonmail.com.",
      },
      {
        q: "How do I create an account?",
        a: "Click 'Sign Up' in the navigation. You can sign up with your Google account or with an email and password.",
      },
      {
        q: "I forgot my password. How do I reset it?",
        a: "On the sign-in page, click 'Forgot Password' and enter your email. We'll send you a reset link. If you signed up with Google, use the Google sign-in button instead.",
      },
      {
        q: "How do I delete my account?",
        a: "You can delete your account directly from your profile page. Go to your Profile, scroll to the bottom of the Overview tab, and click 'Delete My Account.' You'll be asked to type DELETE to confirm. This permanently removes your account, bookings, and all rewards points and cannot be undone.",
      },
    ],
  },
  {
    category: "Cancellations & Refunds",
    questions: [
      {
        q: "What is the cancellation policy?",
        a: "Cancellation policies vary by travel provider and booking type. Most hotel bookings offer free cancellation if cancelled before a specified date — check the booking terms at the time of reservation.",
      },
      {
        q: "How do I cancel a booking?",
        a: "Log in to the booking platform (Expedia, Kiwi.com, etc.) where you completed your reservation to manage cancellations. You can also contact us and we'll help guide you through the process.",
      },
      {
        q: "Will I lose my Rewards points if I cancel?",
        a: "Points are only credited for completed stays. If you cancel, points for that booking will not be awarded.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (key) => setOpenIndex(openIndex === key ? null : key);

  return (
    <>
    <div style={{ minHeight: "100vh", background: "#F8FAFF", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <NavBar active="faq" />

      {/* HERO */}
      <div style={{ background: NAVY, padding: "48px 24px", borderBottom: `4px solid ${ORANGE}` }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ color: "#93C5FD", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 10px" }}>❓ Help Center</p>
          <h1 style={{ color: "#fff", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "800", margin: "0 0 8px", lineHeight: 1.2 }}>Frequently Asked Questions</h1>
          <p style={{ color: "#93C5FD", fontSize: "14px", margin: 0 }}>Everything you need to know about booking with RoomVoyager</p>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {faqs.map((section) => (
            <div key={section.category}>
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <span style={{ width: "4px", height: "22px", background: ORANGE, borderRadius: "2px", display: "inline-block", flexShrink: 0 }} />
                <span style={{ fontSize: "16px" }}>{CATEGORY_ICONS[section.category]}</span>
                <h2 style={{ fontSize: "17px", fontWeight: "800", color: "#111827", margin: 0 }}>{section.category}</h2>
              </div>

              {/* Accordion */}
              <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "16px", overflow: "hidden" }}>
                {section.questions.map((faq, i) => {
                  const key = `${section.category}-${i}`;
                  const isOpen = openIndex === key;
                  return (
                    <div key={key} style={{ borderBottom: i < section.questions.length - 1 ? "1px solid #F3F4F6" : "none" }}>
                      <button
                        onClick={() => toggle(key)}
                        style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", textAlign: "left", background: isOpen ? "#F8FAFF" : "#fff", border: "none", cursor: "pointer", gap: "16px" }}
                      >
                        <span style={{ fontSize: "14px", fontWeight: "700", color: "#111827", lineHeight: "1.5" }}>{faq.q}</span>
                        <span style={{ fontSize: "20px", color: isOpen ? ORANGE : "#9CA3AF", flexShrink: 0, fontWeight: "300", lineHeight: 1 }}>{isOpen ? "−" : "+"}</span>
                      </button>
                      {isOpen && (
                        <div style={{ padding: "0 22px 18px", fontSize: "14px", color: "#4B5563", lineHeight: "1.7" }}>
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "40px", background: NAVY, borderRadius: "16px", padding: "36px", textAlign: "center" }}>
          <p style={{ color: "#fff", fontSize: "20px", fontWeight: "800", margin: "0 0 8px" }}>Still have questions?</p>
          <p style={{ color: "#93C5FD", fontSize: "14px", margin: "0 0 24px" }}>Our team is happy to help with anything not covered above.</p>
          <a href="/contact" style={{ display: "inline-block", padding: "12px 32px", background: ORANGE, color: "#fff", borderRadius: "10px", fontSize: "14px", fontWeight: "700", textDecoration: "none", boxShadow: "0 4px 14px rgba(255,102,0,0.35)" }}>
            Contact Us →
          </a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

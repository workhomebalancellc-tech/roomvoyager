"use client";

import { useState } from "react";

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
        a: "Yes! Our Flights page uses a Travelpayouts white-label search engine. You can search and book flights directly from the page.",
      },
      {
        q: "How do I book a cruise?",
        a: "Visit our Cruises page to search available cruises. You can also contact our travel advisor at workhomebalancellc@gmail.com for personalized cruise recommendations and group bookings.",
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
        a: "You earn points on eligible bookings made through RoomVoyager. Hotel bookings earn 5 points per $1 spent. Points are credited after your stay is completed.",
      },
      {
        q: "How do I redeem my points?",
        a: "Once you've accumulated enough points, visit your Rewards page and choose a reward to redeem. Cash rewards are paid out via Zelle, Cash App, or Venmo.",
      },
      {
        q: "When do my points expire?",
        a: "Points are valid for 24 months from the date they are earned. Making a new booking resets the expiration clock.",
      },
      {
        q: "What are the Rewards tiers?",
        a: "We have four tiers: Bronze (0–999 points), Silver (1,000–4,999), Gold (5,000–14,999), and Platinum (15,000+). Higher tiers earn points faster and unlock better perks.",
      },
    ],
  },
  {
    category: "Account",
    questions: [
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
        a: "Email us at workhomebalancellc@gmail.com and we'll delete your account and associated data within 30 days.",
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
        a: "Log in to the booking platform (Expedia, Travelpayouts, etc.) where you completed your reservation to manage cancellations. You can also contact us and we'll help guide you through the process.",
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
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#991B1B] px-6 py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white">RoomVoyager</a>
          <div className="flex gap-6">
            <a href="/hotels" className="text-red-100 hover:text-white transition-colors">Hotels</a>
            <a href="/flights" className="text-red-100 hover:text-white transition-colors">Flights</a>
            <a href="/cruises" className="text-red-100 hover:text-white transition-colors">Cruises</a>
            <a href="/faq" className="text-white font-semibold border-b-2 border-white pb-1">FAQ</a>
            <a href="/contact" className="text-red-100 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <div className="bg-[#991B1B] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-red-100">Everything you need to know about booking with RoomVoyager</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-10">
          {faqs.map((section) => (
            <div key={section.category}>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-[#991B1B] rounded-full inline-block"></span>
                {section.category}
              </h2>
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden divide-y divide-gray-100">
                {section.questions.map((faq, i) => {
                  const key = `${section.category}-${i}`;
                  const isOpen = openIndex === key;
                  return (
                    <div key={key}>
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                        <span className="text-[#991B1B] text-xl flex-shrink-0">{isOpen ? "−" : "+"}</span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 bg-[#991B1B] rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Still have questions?</h2>
          <p className="text-red-100 mb-6">Our team is happy to help with anything not covered above.</p>
          <a href="/contact" className="inline-block px-8 py-3 bg-white text-[#991B1B] font-bold rounded-xl hover:bg-gray-100 transition-colors">
            Contact Us
          </a>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center text-sm">
        <p>© 2026 RoomVoyager. All rights reserved.</p>
        <div className="flex gap-6 justify-center mt-3 flex-wrap">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="/faq" className="text-white">FAQ</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}

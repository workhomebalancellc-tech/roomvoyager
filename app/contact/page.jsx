"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to send message");
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-[#991B1B] px-6 py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white">RoomVoyager</a>
          <div className="flex gap-6">
            <a href="/hotels" className="text-red-100 hover:text-white transition-colors">Hotels</a>
            <a href="/flights" className="text-red-100 hover:text-white transition-colors">Flights</a>
            <a href="/cruises" className="text-red-100 hover:text-white transition-colors">Cruises</a>
            <a href="/rewards" className="text-red-100 hover:text-white transition-colors">Rewards</a>
            <a href="/profile" className="text-red-100 hover:text-white transition-colors">Profile</a>
            <a href="/contact" className="text-white font-semibold border-b-2 border-white pb-1">Contact</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-[#991B1B] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-red-100">We're here to help! Get in touch with our team</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 text-2xl">✉️</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600">workhomebalancellc@gmail.com</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 text-2xl">📞</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600">1-800-VOYAGER</p>
            <p className="text-sm text-gray-500 mt-1">Mon-Fri 9am-6pm EST</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 text-2xl">📍</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600">RoomVoyager Travel<br />United States</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>

            {success && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-green-800 font-medium">✓ Thank you for contacting us! We'll get back to you soon.</p>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                <p className="text-red-800 font-medium">✗ {error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Your Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#991B1B] focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#991B1B] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#991B1B] focus:border-transparent outline-none transition-all" placeholder="How can we help you?" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#991B1B] focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us what's on your mind..." />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#991B1B] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[#7f1717] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? "Sending..." : "✉️ Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

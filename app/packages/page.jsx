"use client";

import { useState } from "react";

const packages = [
  {
    id: 1,
    name: "Cancun All-Inclusive",
    destination: "Cancun, Mexico",
    emoji: "🌴",
    duration: "7 nights",
    includes: ["Round-trip flights", "5-star resort", "All meals & drinks", "Airport transfers"],
    price: 1299,
    tag: "Best Seller",
    tagColor: "#991b1b",
  },
  {
    id: 2,
    name: "Paris Romantic Getaway",
    destination: "Paris, France",
    emoji: "🗼",
    duration: "5 nights",
    includes: ["Round-trip flights", "Boutique hotel", "Seine River cruise", "City tour"],
    price: 1899,
    tag: "Most Romantic",
    tagColor: "#7c3aed",
  },
  {
    id: 3,
    name: "Caribbean Cruise Package",
    destination: "Caribbean Islands",
    emoji: "🚢",
    duration: "8 nights",
    includes: ["Round-trip flights", "Cruise cabin", "All meals onboard", "4 island stops"],
    price: 1599,
    tag: "Popular",
    tagColor: "#0891b2",
  },
  {
    id: 4,
    name: "Las Vegas Weekend",
    destination: "Las Vegas, NV",
    emoji: "🎰",
    duration: "3 nights",
    includes: ["Round-trip flights", "Strip hotel", "Show tickets", "Casino credits"],
    price: 699,
    tag: "Best Value",
    tagColor: "#15803d",
  },
  {
    id: 5,
    name: "Orlando Family Fun",
    destination: "Orlando, FL",
    emoji: "🎡",
    duration: "5 nights",
    includes: ["Round-trip flights", "Resort hotel", "Theme park tickets", "Car rental"],
    price: 2499,
    tag: "Family Pick",
    tagColor: "#ea580c",
  },
  {
    id: 6,
    name: "Punta Cana Beach Escape",
    destination: "Punta Cana, DR",
    emoji: "🐚",
    duration: "6 nights",
    includes: ["Round-trip flights", "Beachfront resort", "All-inclusive meals", "Snorkeling tour"],
    price: 1149,
    tag: "Beach Paradise",
    tagColor: "#0284c7",
  },
];

export default function PackagesPage() {
  const [selectedDuration, setSelectedDuration] = useState("all");

  const filtered = selectedDuration === "all"
    ? packages
    : packages.filter((p) => {
        const nights = parseInt(p.duration);
        if (selectedDuration === "short") return nights <= 4;
        if (selectedDuration === "medium") return nights >= 5 && nights <= 7;
        if (selectedDuration === "long") return nights >= 8;
        return true;
      });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-[#991B1B] px-6 py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white">RoomVoyager</a>
          <div className="flex gap-6 flex-wrap justify-end">
            <a href="/hotels" className="text-red-100 hover:text-white transition-colors">Hotels</a>
            <a href="/flights" className="text-red-100 hover:text-white transition-colors">Flights</a>
            <a href="/cruises" className="text-red-100 hover:text-white transition-colors">Cruises</a>
            <a href="/packages" className="text-white font-semibold border-b-2 border-white pb-1">Packages</a>
            <a href="/rewards" className="text-red-100 hover:text-white transition-colors">Rewards</a>
            <a href="/profile" className="text-red-100 hover:text-white transition-colors">Profile</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-[#991B1B] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Vacation Packages</h1>
          <p className="text-red-100 text-lg">Everything bundled — flights, hotel, and experiences in one price</p>
        </div>
      </div>

      {/* Filter */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-3 flex-wrap">
          {[
            { value: "all", label: "All Packages" },
            { value: "short", label: "Weekend (1–4 nights)" },
            { value: "medium", label: "Week (5–7 nights)" },
            { value: "long", label: "Extended (8+ nights)" },
          ].map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedDuration(filter.value)}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-colors ${
                selectedDuration === filter.value
                  ? "bg-[#991B1B] text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#991B1B] hover:text-[#991B1B]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Package Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-red-800 to-red-600 h-40 flex flex-col items-center justify-center">
                <span className="text-6xl mb-2">{pkg.emoji}</span>
                <span className="text-white font-semibold text-sm">{pkg.destination}</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full text-white ml-2 flex-shrink-0" style={{ backgroundColor: pkg.tagColor }}>
                    {pkg.tag}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-4">⏱ {pkg.duration}</p>
                <ul className="space-y-1 mb-6">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="text-green-500">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#991B1B]">${pkg.price.toLocaleString()}</span>
                    <span className="text-gray-500 text-sm"> / person</span>
                  </div>
                  <a
                    href={`mailto:workhomebalancellc@gmail.com?subject=Package Inquiry: ${pkg.name}&body=I'm interested in the ${pkg.name} package (${pkg.duration}, from $${pkg.price}/person). Please send me more details.`}
                    className="px-5 py-2 bg-[#991B1B] text-white font-semibold rounded-xl hover:bg-[#7f1717] transition-colors text-sm"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Package CTA */}
      <div className="bg-[#991B1B] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a custom package?</h2>
          <p className="text-red-100 mb-8">Our travel advisors build fully personalized itineraries — honeymoons, anniversaries, family reunions, and more.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#991B1B] font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Talk to an Advisor
          </a>
        </div>
      </div>
    </div>
  );
}

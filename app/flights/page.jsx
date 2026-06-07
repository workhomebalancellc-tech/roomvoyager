"use client";

export default function FlightsPage() {
  const destinations = [
    { name: "Cancun", subtitle: "Beach paradise", emoji: "🌴" },
    { name: "Miami", subtitle: "Art deco & nightlife", emoji: "🌆" },
    { name: "Las Vegas", subtitle: "Entertainment capital", emoji: "🎰" },
    { name: "Paris", subtitle: "City of light", emoji: "🗼" },
    { name: "Orlando", subtitle: "Theme park capital", emoji: "🎡" },
    { name: "Punta Cana", subtitle: "Caribbean escape", emoji: "🐚" },
    { name: "New York", subtitle: "The Big Apple", emoji: "🗽" },
    { name: "London", subtitle: "Historic & modern", emoji: "🎡" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* RoomVoyager Nav */}
      <nav className="bg-[#991B1B] px-6 py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white">RoomVoyager</a>
          <div className="flex gap-6 flex-wrap justify-end">
            <a href="/hotels" className="text-red-100 hover:text-white transition-colors">Hotels</a>
            <a href="/flights" className="text-white font-semibold border-b-2 border-white pb-1">Flights</a>
            <a href="/cruises" className="text-red-100 hover:text-white transition-colors">Cruises</a>
            <a href="/rewards" className="text-red-100 hover:text-white transition-colors">Rewards</a>
            <a href="/profile" className="text-red-100 hover:text-white transition-colors">Profile</a>
          </div>
        </div>
      </nav>

      {/* Travelpayouts iframe — white label flight search */}
      <iframe
        src="https://flights.roomvoyagertravel.com"
        title="Flight Search"
        style={{ width: "100%", minHeight: "100vh", border: "none", display: "block" }}
        allow="same-origin"
      />

      {/* Destination Ideas */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Destination Ideas</h2>
        <p className="text-gray-500 mb-8">Top spots travelers are flying to right now</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="relative rounded-2xl overflow-hidden h-48 shadow-md group cursor-pointer bg-gradient-to-br from-red-800 to-red-600 flex flex-col items-center justify-center"
            >
              <span className="text-5xl mb-2">{dest.emoji}</span>
              <p className="text-white font-bold text-lg leading-tight">{dest.name}</p>
              <p className="text-red-200 text-xs mt-0.5">{dest.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

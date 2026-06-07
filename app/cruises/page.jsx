"use client";

import { useState, useEffect } from "react";

export default function CruisesPage() {
  const [destination, setDestination] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [duration, setDuration] = useState("");
  const [passengers, setPassengers] = useState(2);
  const [searchDestination, setSearchDestination] = useState("");
  const [searchDuration, setSearchDuration] = useState("");
  const [cruises, setCruises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCruises = async (dest, dur) => {
    setIsLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams();
      if (dest) params.append("destination", dest);
      if (dur) params.append("duration", dur);
      const response = await fetch(`/api/cruises?${params.toString()}`);
      if (!response.ok) throw new Error("Failed to fetch cruises");
      const data = await response.json();
      setCruises(data.cruises || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCruises("", "");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const durationNumber = duration.match(/\d+/)?.[0];
    setSearchDestination(destination);
    setSearchDuration(durationNumber || "");
    fetchCruises(destination, durationNumber || "");
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
            <a href="/cruises" className="text-white font-semibold border-b-2 border-white pb-1">Cruises</a>
            <a href="/rewards" className="text-red-100 hover:text-white transition-colors">Rewards</a>
            <a href="/profile" className="text-red-100 hover:text-white transition-colors">Profile</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-[#991B1B] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Cruise Deals</h1>
          <p className="text-red-100 text-lg">Sail away to amazing destinations</p>
        </div>
      </div>

      {/* Search Form */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 mb-12">
        <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Destination</label>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="Where would you like to cruise?"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#991B1B] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Departure Date</label>
              <input
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#991B1B] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g., 7 nights"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#991B1B] focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Passengers</label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#991B1B] focus:border-transparent outline-none appearance-none bg-white"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <option key={num} value={num}>{num} {num === 1 ? "passenger" : "passengers"}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-[#991B1B] text-white font-bold py-4 rounded-xl hover:bg-[#7f1717] transition-colors flex items-center justify-center gap-2"
          >
            🔍 Search Cruises
          </button>
        </form>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          {searchDestination ? `Cruises to ${searchDestination}` : "Featured Cruises"}
        </h2>

        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#991B1B] mx-auto"></div>
            <p className="text-gray-500 mt-4">Loading cruises...</p>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-6">
            Failed to load cruises.{" "}
            <button onClick={() => fetchCruises(searchDestination, searchDuration)} className="underline">Try Again</button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cruises.map((cruise) => (
            <div key={cruise.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {cruise.image_url && (
                <img src={cruise.image_url} alt={cruise.name} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cruise.name}</h3>
                <p className="text-[#991B1B] font-semibold mb-3">{cruise.cruise_line}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm gap-2">
                    <span>📍</span><span>{cruise.destination}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm gap-2">
                    <span>🚢</span><span>Departs from {cruise.departure_port}</span>
                  </div>
                </div>
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="text-2xl font-bold text-[#991B1B]">${cruise.price_per_person}</div>
                    <div className="text-sm text-gray-500">per person</div>
                    <div className="text-sm text-gray-500 mt-1">{cruise.duration_nights} nights</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-semibold">{cruise.rating}</span>
                  </div>
                </div>
                {cruise.highlights && cruise.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {cruise.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="text-xs bg-red-50 text-[#991B1B] px-3 py-1 rounded-full font-medium">
                        {highlight}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {!isLoading && !error && cruises.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {searchDestination ? "No cruises found for this destination" : "No cruises available"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

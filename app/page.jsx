"use client";

import { useEffect } from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">RoomVoyager</h1>
          <div className="flex gap-6 flex-wrap justify-end">
            <a href="/hotels" className="text-red-100 hover:text-white transition-colors">Hotels</a>
            <a href="/flights" className="text-red-100 hover:text-white transition-colors">Flights</a>
            <a href="/cruises" className="text-red-100 hover:text-white transition-colors">Cruises</a>
            <a href="/rewards" className="text-red-100 hover:text-white transition-colors">Rewards</a>
            <a href="/profile" className="text-red-100 hover:text-white transition-colors">Profile</a>
            <a href="/contact" className="text-red-100 hover:text-white transition-colors">Contact</a>
            <a href="/faq" className="text-red-100 hover:text-white transition-colors">FAQ</a>
            <a href="/account/signin" className="px-6 py-2 text-white font-semibold hover:bg-white/10 rounded-lg transition-colors">Sign In</a>
            <a href="/account/signup" className="px-6 py-2 bg-white text-[#991B1B] font-semibold rounded-lg hover:bg-gray-100 transition-colors">Sign Up</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your Next Adventure
            <br />
            Starts Here
          </h2>
          <p className="text-xl md:text-2xl text-red-100 mb-10 max-w-2xl mx-auto">
            Discover amazing hotels, flights, and cruises. Book with confidence and earn rewards on every journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href="/account/signup" className="px-8 py-4 bg-white text-[#991B1B] text-lg font-bold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
              Get Started Free
            </a>
            <a href="/account/signin" className="px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-xl hover:bg-white/10 transition-all">
              Sign In
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose RoomVoyager?</h3>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#991B1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Best Hotels</h4>
              <p className="text-gray-600">Access thousands of verified hotels worldwide with real-time pricing and availability</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#991B1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Easy Flights</h4>
              <p className="text-gray-600">Compare and book flights from major airlines with the best prices guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#991B1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">Earn Rewards</h4>
              <p className="text-gray-600">Collect points on every booking and unlock exclusive perks and discounts</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-red-900 to-red-800 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h3>
          <p className="text-xl text-red-100 mb-10">Join thousands of travelers who trust RoomVoyager for their booking needs</p>
          <a href="/account/signup" className="inline-block px-10 py-4 bg-white text-[#991B1B] text-lg font-bold rounded-xl hover:bg-gray-100 transition-all shadow-2xl">
            Create Free Account
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm mb-4">© 2026 RoomVoyager. All rights reserved.</p>
          <div className="flex gap-6 justify-center flex-wrap text-sm">
            <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

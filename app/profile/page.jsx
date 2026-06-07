"use client";

import { useSession, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const user = session?.user;
  const loading = status === "loading";

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/", redirect: true });
  };

  const Nav = () => (
    <nav className="bg-[#991B1B] px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">RoomVoyager</a>
        <div className="flex gap-6">
          <a href="/hotels" className="text-red-100 hover:text-white transition-colors">Hotels</a>
          <a href="/flights" className="text-red-100 hover:text-white transition-colors">Flights</a>
          <a href="/cruises" className="text-red-100 hover:text-white transition-colors">Cruises</a>
          <a href="/rewards" className="text-red-100 hover:text-white transition-colors">Rewards</a>
          <a href="/profile" className="text-white font-semibold border-b-2 border-white pb-1">Profile</a>
        </div>
      </div>
    </nav>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Nav />
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#991B1B]"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Nav />
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sign in to view your profile</h2>
          <p className="text-gray-600 mb-8">Please sign in to access your account information</p>
          <a href="/account/signin" className="inline-block px-8 py-3 bg-[#991B1B] text-white font-bold rounded-xl hover:bg-[#7f1717] transition-colors">
            Sign In
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />

      <div className="bg-[#991B1B] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold">My Profile</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 -mt-8 pb-12">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Avatar + name */}
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            <div>
              {user.image ? (
                <img src={user.image} alt={user.name || "Profile"} className="w-20 h-20 rounded-full object-cover" />
              ) : (
                <div className="w-20 h-20 rounded-full bg-[#991B1B] flex items-center justify-center text-white text-3xl font-bold">
                  {(user.name || user.email || "U")[0].toUpperCase()}
                </div>
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-1">{user.name || "Traveler"}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="text-sm font-semibold text-gray-700">Email Address</p>
                <p className="text-gray-900">{user.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
              <span className="text-2xl">👤</span>
              <div>
                <p className="text-sm font-semibold text-gray-700">Full Name</p>
                <p className="text-gray-900">{user.name || "Not provided"}</p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <a href="/rewards" className="flex items-center gap-3 p-4 bg-red-50 rounded-xl hover:bg-red-100 transition-colors">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="font-semibold text-[#991B1B]">My Rewards</p>
                <p className="text-xs text-gray-500">View points & redeem</p>
              </div>
            </a>
            <a href="/hotels" className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <span className="text-2xl">🏨</span>
              <div>
                <p className="font-semibold text-gray-900">Browse Hotels</p>
                <p className="text-xs text-gray-500">Find your next stay</p>
              </div>
            </a>
          </div>

          {/* Sign out */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-red-50 text-[#991B1B] rounded-xl hover:bg-red-100 transition-colors font-semibold"
            >
              <span>🚪</span>
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

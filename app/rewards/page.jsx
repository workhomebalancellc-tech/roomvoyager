"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

export default function RewardsPage() {
  const { data: session, status } = useSession();
  const user = session?.user;
  const userLoading = status === "loading";

  const [rewardsData, setRewardsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user?.email) return;
    setIsLoading(true);
    fetch(`/api/rewards?email=${encodeURIComponent(user.email)}`)
      .then((res) => { if (!res.ok) throw new Error("Failed to fetch rewards"); return res.json(); })
      .then((data) => setRewardsData(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [user?.email]);

  const profile = rewardsData?.profile || {};
  const history = rewardsData?.history || [];
  const availableRewards = rewardsData?.availableRewards || [];

  const getTierColor = (tier) => {
    switch (tier) {
      case "Platinum": return "#E5E4E2";
      case "Gold": return "#FFD700";
      case "Silver": return "#C0C0C0";
      default: return "#CD7F32";
    }
  };

  const getTierEmoji = (tier) => {
    switch (tier) {
      case "Platinum": return "👑";
      case "Gold": return "🏆";
      case "Silver": return "🥈";
      default: return "🥉";
    }
  };

  const getTierBenefits = (tier) => {
    const benefits = {
      Bronze: ["Earn 1 point per $1 spent", "Birthday bonus points", "Member-only deals"],
      Silver: ["Earn 1.5 points per $1 spent", "Free room upgrades", "Early check-in", "Priority support"],
      Gold: ["Earn 2 points per $1 spent", "Lounge access", "Free breakfast", "Suite upgrades", "Flexible cancellation"],
      Platinum: ["Earn 3 points per $1 spent", "Companion tickets", "VIP treatment", "Exclusive events", "Concierge service"],
    };
    return benefits[tier] || benefits["Bronze"];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  const Nav = () => (
    <nav className="bg-[#991B1B] px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">RoomVoyager</a>
        <div className="flex gap-6">
          <a href="/hotels" className="text-red-100 hover:text-white transition-colors">Hotels</a>
          <a href="/flights" className="text-red-100 hover:text-white transition-colors">Flights</a>
          <a href="/cruises" className="text-red-100 hover:text-white transition-colors">Cruises</a>
          <a href="/rewards" className="text-white font-semibold border-b-2 border-white pb-1">Rewards</a>
          <a href="/profile" className="text-red-100 hover:text-white transition-colors">Profile</a>
        </div>
      </div>
    </nav>
  );

  if (userLoading || isLoading) {
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Sign in to view your rewards</h2>
          <p className="text-gray-600 mb-8">Join our rewards program and start earning points on every booking!</p>
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

      {/* Header */}
      <div className="bg-[#991B1B] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Rewards Program</h1>

          {error ? (
            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <p className="text-red-100 mb-4">Failed to load rewards</p>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-white text-[#991B1B] rounded-lg font-semibold hover:bg-gray-100"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2" style={{ borderColor: getTierColor(profile.current_tier) }}>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl" style={{ backgroundColor: getTierColor(profile.current_tier) }}>
                  {getTierEmoji(profile.current_tier)}
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{profile.current_tier || "Bronze"} Member</h2>
                  <p className="text-red-100">{profile.lifetime_bookings || 0} lifetime bookings</p>
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-red-100 mb-2">Your Points</p>
                  <p className="text-5xl font-bold">{(profile.total_points || 0).toLocaleString()}</p>
                </div>
                {profile.current_tier !== "Platinum" && profile.points_to_next_tier && (
                  <div className="text-right">
                    <p className="text-red-100 text-sm mb-1">To Next Tier</p>
                    <p className="text-2xl font-semibold">{profile.points_to_next_tier} points</p>
                  </div>
                )}
              </div>
              {profile.current_tier !== "Platinum" && (
                <div className="mt-6">
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full transition-all duration-500"
                      style={{
                        backgroundColor: getTierColor(profile.current_tier),
                        width: `${Math.min(100, ((profile.total_points || 0) / ((profile.total_points || 0) + (profile.points_to_next_tier || 1))) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Benefits + Rewards */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">✨ Your Benefits</h3>
              <div className="space-y-3">
                {getTierBenefits(profile.current_tier).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#991B1B]" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🎁 Redeem Rewards</h3>
              <div className="space-y-4">
                {availableRewards.map((reward) => {
                  const canAfford = (profile.total_points || 0) >= reward.points_required;
                  return (
                    <div key={reward.id} className={`border-2 rounded-xl p-6 ${canAfford ? "border-[#991B1B]" : "border-gray-200 opacity-60"}`}>
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-900 mb-2">{reward.reward_name}</h4>
                          <p className="text-gray-600 text-sm mb-3">{reward.description}</p>
                          <div className="flex gap-2">
                            <span className={`text-xs px-3 py-1 rounded-full font-semibold ${canAfford ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                              {reward.points_required.toLocaleString()} points
                            </span>
                            {reward.tier_required && (
                              <span className="text-xs bg-red-50 text-[#991B1B] px-3 py-1 rounded-full font-semibold">{reward.tier_required}+</span>
                            )}
                          </div>
                        </div>
                        <button
                          disabled={!canAfford}
                          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${canAfford ? "bg-[#991B1B] text-white hover:bg-[#7f1717]" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                        >
                          Redeem
                        </button>
                      </div>
                    </div>
                  );
                })}
                {availableRewards.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-4xl mb-4">🎁</p>
                    <p className="text-gray-500">No rewards available yet. Start booking to earn points!</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">🕐 Recent Activity</h3>
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {history.slice(0, 10).map((item) => (
                  <div key={item.id} className="border-b border-gray-100 pb-4 last:border-0">
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-sm">
                          {item.description || item.transaction_type?.replace("_", " ")}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">{formatDate(item.created_at)}</p>
                      </div>
                      <span className="text-green-600 font-bold">+{item.points_earned}</span>
                    </div>
                  </div>
                ))}
                {history.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-4xl mb-4">🕐</p>
                    <p className="text-gray-500 text-sm">Start earning points by making bookings!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

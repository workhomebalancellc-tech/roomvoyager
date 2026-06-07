export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#991B1B] px-6 py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white">RoomVoyager</a>
          <div className="flex gap-6">
            <a href="/hotels" className="text-red-100 hover:text-white transition-colors">Hotels</a>
            <a href="/flights" className="text-red-100 hover:text-white transition-colors">Flights</a>
            <a href="/cruises" className="text-red-100 hover:text-white transition-colors">Cruises</a>
            <a href="/contact" className="text-red-100 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <div className="bg-[#991B1B] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-red-100">Last updated: June 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using RoomVoyager Travel ("we," "us," "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
            <p className="mb-3">RoomVoyager is a travel booking platform that connects users with third-party travel providers including:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Hotel bookings via Expedia affiliate network</li>
              <li>Flight bookings via Travelpayouts white-label platform</li>
              <li>Cruise bookings via CruiseDirect and partner networks</li>
              <li>Vacation packages curated by our travel advisors</li>
            </ul>
            <p className="mt-3">RoomVoyager acts as an intermediary and is not itself a hotel, airline, or cruise line.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Booking & Payments</h2>
            <p className="mb-3">All bookings made through RoomVoyager are subject to the terms and conditions of the respective travel provider. By completing a booking, you agree to those providers' terms.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Prices and availability are subject to change until booking is confirmed</li>
              <li>Cancellation and refund policies vary by provider</li>
              <li>RoomVoyager earns affiliate commissions on bookings — this does not affect your price</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Rewards Program</h2>
            <p className="mb-3">The RoomVoyager Rewards program is subject to the following terms:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Points are awarded based on completed bookings at our discretion</li>
              <li>Points have no cash value until redeemed through our rewards portal</li>
              <li>We reserve the right to modify or discontinue the rewards program with notice</li>
              <li>Points cannot be transferred, sold, or combined between accounts</li>
              <li>Fraudulent activity will result in account termination and forfeiture of points</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. User Accounts</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must notify us immediately of any unauthorized use. You must be at least 18 years old to create an account.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Uses</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use our services for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Submit false or fraudulent bookings</li>
              <li>Abuse the rewards program or attempt to game point accumulation</li>
              <li>Scrape, copy, or reproduce our content without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Disclaimer of Warranties</h2>
            <p>RoomVoyager provides its services "as is" without warranties of any kind. We do not guarantee uninterrupted service, and we are not responsible for errors or omissions in travel provider listings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p>RoomVoyager shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or from bookings made through our platform. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
            <p>We may update these Terms of Service at any time. Continued use of our services after changes constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
            <p>Questions about these Terms? Contact us at <a href="mailto:workhomebalancellc@gmail.com" className="text-[#991B1B] hover:underline">workhomebalancellc@gmail.com</a>.</p>
          </section>

        </div>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center text-sm">
        <p>© 2026 RoomVoyager. All rights reserved.</p>
        <div className="flex gap-6 justify-center mt-3 flex-wrap">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="/terms" className="text-white">Terms of Service</a>
          <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}

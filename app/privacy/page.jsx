export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-red-100">Last updated: June 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8 text-gray-700 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="mb-3">We collect information you provide when you create an account, make a booking, or contact us. This includes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name and email address</li>
              <li>Account credentials (passwords are encrypted and never stored in plain text)</li>
              <li>Booking preferences and travel history</li>
              <li>Communications you send us</li>
            </ul>
            <p className="mt-3">We also automatically collect certain technical information when you visit our site, including your IP address, browser type, and pages visited.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Process bookings and provide travel services</li>
              <li>Manage your rewards account and track points</li>
              <li>Send booking confirmations and important account updates</li>
              <li>Respond to your questions and support requests</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing Your Information</h2>
            <p className="mb-3">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Travel partners</strong> (Expedia, Travelpayouts, CruiseDirect) to fulfill bookings</li>
              <li><strong>Service providers</strong> who help us operate our website</li>
              <li><strong>Law enforcement</strong> when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies</h2>
            <p>We use cookies and similar technologies to keep you signed in, remember your preferences, and understand how visitors use our site. You can control cookies through your browser settings, though disabling them may affect site functionality.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p>We use industry-standard security measures including encrypted connections (HTTPS), hashed passwords, and secure database storage. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of marketing emails at any time</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at <a href="mailto:workhomebalancellc@gmail.com" className="text-[#991B1B] hover:underline">workhomebalancellc@gmail.com</a>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
            <p>Our site contains links to third-party booking platforms (Expedia, Travelpayouts, CruiseDirect). These sites have their own privacy policies, and we are not responsible for their practices.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children's Privacy</h2>
            <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by email or by posting a notice on our site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p>Questions about this Privacy Policy? Contact us at <a href="mailto:workhomebalancellc@gmail.com" className="text-[#991B1B] hover:underline">workhomebalancellc@gmail.com</a> or visit our <a href="/contact" className="text-[#991B1B] hover:underline">Contact page</a>.</p>
          </section>

        </div>
      </div>

      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-center text-sm">
        <p>© 2026 RoomVoyager. All rights reserved.</p>
        <div className="flex gap-6 justify-center mt-3 flex-wrap">
          <a href="/privacy" className="text-white">Privacy Policy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="/faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="/contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </footer>
    </div>
  );
}

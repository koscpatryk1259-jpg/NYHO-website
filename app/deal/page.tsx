'use client';

import Navigation from '../components/navigation';

export default function DealPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6">DEAL</h1>
          <p className="text-2xl opacity-95 max-w-3xl">
            Your trusted real estate brokerage in the Bronx. We specialize in connecting investors and homebuyers with premium properties that build wealth.
          </p>
        </div>
      </section>

      {/* Broker Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Meet Our Brokerage Team</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Experienced professionals dedicated to finding you the perfect property investment
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Broker 1 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                JD
              </div>
              <h3 className="text-2xl font-bold mb-2">John Doe</h3>
              <p className="text-blue-600 font-semibold mb-4">Lead Broker</p>
              <p className="text-gray-600 mb-4">
                15+ years experience in Bronx real estate. Specializes in multi-family investment properties.
              </p>
              <a href="mailto:john@nyho.com" className="text-blue-600 font-semibold hover:underline">
                john@nyho.com
              </a>
            </div>

            {/* Broker 2 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                JS
              </div>
              <h3 className="text-2xl font-bold mb-2">Jane Smith</h3>
              <p className="text-blue-600 font-semibold mb-4">Senior Broker</p>
              <p className="text-gray-600 mb-4">
                10+ years connecting first-time buyers with their dream homes and investment opportunities.
              </p>
              <a href="mailto:jane@nyho.com" className="text-blue-600 font-semibold hover:underline">
                jane@nyho.com
              </a>
            </div>

            {/* Broker 3 */}
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-32 h-32 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                MJ
              </div>
              <h3 className="text-2xl font-bold mb-2">Mike Johnson</h3>
              <p className="text-blue-600 font-semibold mb-4">Investment Specialist</p>
              <p className="text-gray-600 mb-4">
                Expert in analyzing ROI and identifying high-yield investment properties in emerging markets.
              </p>
              <a href="mailto:mike@nyho.com" className="text-blue-600 font-semibold hover:underline">
                mike@nyho.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Inventory Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Current Inventory</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Browse our exclusive listings of sales and rental properties in the Bronx
          </p>

          {/* Download PDF Section */}
          <div className="bg-white rounded-2xl p-12 shadow-lg mb-16 text-center border-2 border-blue-600">
            <div className="text-6xl mb-6">📄</div>
            <h3 className="text-3xl font-bold mb-4">Download Our Complete Inventory</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get instant access to our full catalog of available properties including detailed specs, pricing, and high-quality photos.
            </p>
            <a 
              href="/inventory.pdf" 
              download
              className="inline-block bg-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              Download Inventory PDF
            </a>
            <p className="text-sm text-gray-500 mt-4">Updated Weekly • PDF Format • 5.2 MB</p>
          </div>

          {/* Featured Listings */}
          <h3 className="text-3xl font-bold mb-8">Featured Properties</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl">
                🏠
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold">123 Grand Concourse</h4>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">For Sale</span>
                </div>
                <p className="text-gray-600 mb-4">Multi-Family • 4 Units • The Bronx, NY</p>
                <p className="text-3xl font-bold text-blue-600 mb-4">$850,000</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2">🛏️</span> 12 Bedrooms Total
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2">🚿</span> 8 Bathrooms
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2">📏</span> 4,200 sq ft
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Schedule Viewing
                </button>
              </div>
            </div>

            {/* Property 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-4xl">
                🏢
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold">456 Webster Avenue</h4>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">For Rent</span>
                </div>
                <p className="text-gray-600 mb-4">Luxury Apartment • The Bronx, NY</p>
                <p className="text-3xl font-bold text-blue-600 mb-4">$2,800/mo</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2">🛏️</span> 3 Bedrooms
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2">🚿</span> 2 Bathrooms
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2">📏</span> 1,400 sq ft
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Schedule Viewing
                </button>
              </div>
            </div>

            {/* Property 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-4xl">
                🏘️
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold">789 Morris Avenue</h4>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">For Sale</span>
                </div>
                <p className="text-gray-600 mb-4">Single Family • The Bronx, NY</p>
                <p className="text-3xl font-bold text-blue-600 mb-4">$525,000</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2">🛏️</span> 4 Bedrooms
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2">🚿</span> 3 Bathrooms
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="mr-2">📏</span> 2,100 sq ft
                  </li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Schedule Viewing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Broker Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Ready to Find Your Next Property?</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Connect with our brokerage team to discuss your investment goals
          </p>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="First Name"
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
            </div>
            <select className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none mb-6">
              <option value="">I'm interested in...</option>
              <option value="buying">Buying a Property</option>
              <option value="selling">Selling a Property</option>
              <option value="renting">Renting a Property</option>
              <option value="investing">Investment Opportunities</option>
            </select>
            <textarea
              placeholder="Tell us about your property needs..."
              rows={6}
              className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none resize-none mb-6"
            ></textarea>
            <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors">
              Contact Our Brokers
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <p className="opacity-80">&copy; 2024 NYHO - NY HomeOwner Inc. All rights reserved.</p>
        <p className="mt-2 text-sm opacity-70">Building Generational Wealth in the Bronx, NY</p>
      </footer>
    </div>
  );
}
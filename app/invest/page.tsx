'use client';

import Navigation from '../components/navigation';
import { useState } from 'react';

export default function InvestPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6">INVEST</h1>
          <p className="text-2xl opacity-95 max-w-3xl">
            Expert project management and development. We transform properties into profitable investments through strategic renovations and new construction.
          </p>
        </div>
      </section>

      {/* Our Experience Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Our Development Experience</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Decades of combined experience in fix & flip, new construction, and property renovation
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Fix & Flip */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="text-5xl mb-6">🔨</div>
              <h3 className="text-3xl font-bold mb-4">Fix & Flip Expertise</h3>
              <p className="text-lg text-gray-700 mb-6">
                We've successfully completed over 50 fix and flip projects in the Bronx, with an average ROI of 35%. Our process combines market analysis, strategic renovations, and rapid turnaround times.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600">35%</div>
                  <div className="text-sm text-gray-600">Average ROI</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600">90</div>
                  <div className="text-sm text-gray-600">Avg Days to Sale</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600">$8M</div>
                  <div className="text-sm text-gray-600">Total Value Created</div>
                </div>
              </div>
            </div>

            {/* New Construction */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="text-5xl mb-6">🏗️</div>
              <h3 className="text-3xl font-bold mb-4">New Construction</h3>
              <p className="text-lg text-gray-700 mb-6">
                From ground-up development to major additions, we manage every phase of construction. Our team handles permits, contractors, timelines, and quality control.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-600">15</div>
                  <div className="text-sm text-gray-600">New Builds</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-600">98%</div>
                  <div className="text-sm text-gray-600">On-Time Delivery</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-600">12mo</div>
                  <div className="text-sm text-gray-600">Avg Timeline</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-600">$5M</div>
                  <div className="text-sm text-gray-600">Current Pipeline</div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="bg-gray-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Our Development Process</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">1</div>
                <h4 className="font-bold text-lg mb-2">Acquisition</h4>
                <p className="text-gray-600">Identify undervalued properties with high potential</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">2</div>
                <h4 className="font-bold text-lg mb-2">Planning</h4>
                <p className="text-gray-600">Design scope, budget, and timeline for maximum ROI</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">3</div>
                <h4 className="font-bold text-lg mb-2">Execution</h4>
                <p className="text-gray-600">Manage construction with quality contractors</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">4</div>
                <h4 className="font-bold text-lg mb-2">Exit</h4>
                <p className="text-gray-600">Sale or rental placement for optimal returns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Current & Upcoming Projects</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Get an inside look at our active development projects
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-2">🏠</div>
                  <p className="text-sm opacity-80">Project Image Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold">Morris Heights Renovation</h3>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">In Progress</span>
                </div>
                <p className="text-gray-600 mb-4">Complete gut renovation of 3-family home</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold">Fix & Flip</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-semibold">6 months</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Est. Completion:</span>
                    <span className="font-semibold">March 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Investment:</span>
                    <span className="font-semibold">$425,000</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-blue-600 h-3 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(1)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-2">🏗️</div>
                  <p className="text-sm opacity-80">Project Image Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold">Fordham New Build</h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Active</span>
                </div>
                <p className="text-gray-600 mb-4">Ground-up construction of 4-unit building</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold">New Construction</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-semibold">14 months</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Est. Completion:</span>
                    <span className="font-semibold">June 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Investment:</span>
                    <span className="font-semibold">$1,200,000</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold">40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-green-600 h-3 rounded-full" style={{width: '40%'}}></div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(2)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-6xl mb-2">🏘️</div>
                  <p className="text-sm opacity-80">Project Image Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold">Pelham Parkway Duplex</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Planning</span>
                </div>
                <p className="text-gray-600 mb-4">Luxury duplex conversion with modern finishes</p>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-semibold">Renovation</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-semibold">8 months</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Est. Start:</span>
                    <span className="font-semibold">January 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Investment:</span>
                    <span className="font-semibold">$650,000</span>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold">15%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-purple-600 h-3 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedProject(3)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Partner With Us on Your Next Project</h2>
          <p className="text-xl text-gray-600 mb-8">
            Whether you're looking for development expertise or investment opportunities, we're here to help you build wealth through real estate.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Need Project Management?</h3>
              <p className="text-gray-700 mb-6">
                Let us handle your fix & flip or new construction project from start to finish.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Discuss Your Project
              </button>
            </div>
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Looking to Invest?</h3>
              <p className="text-gray-700 mb-6">
                Join our investment partnerships and earn returns on our proven projects.
              </p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Explore Opportunities
              </button>
            </div>
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
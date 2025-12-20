'use client';

import { useState } from 'react';
import Navigation from './components/navigation'

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out to NYHO! We will contact you shortly to discuss your real estate investment goals.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/30 z-10"></div>
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/bronx-aerial.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Building Generational Wealth Through Real Estate
          </h1>
          <p className="text-2xl font-semibold mb-4 opacity-95">
            Your Partner in Creating Lasting Financial Assets
          </p>
          <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
            We guide you from acquisition to management, transforming properties into profitable investments that grow your wealth for generations. NYHO finds the deals, builds the value, manages your assets, and scales your portfolio.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Journey
          </a>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-4">Our Comprehensive Real Estate Solutions</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            From deal sourcing to long-term management, we handle every step of your real estate investment journey
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* DEAL Card */}
            <a href="/deal" className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border-t-4 border-blue-600 block">
              <div className="text-6xl mb-6 text-center">🤝</div>
              <h3 className="text-3xl font-bold mb-2 text-center">DEAL</h3>
              <p className="text-blue-600 font-semibold text-center mb-6">Real Estate Brokerage</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We find and secure the right properties that align with your investment goals. Browse our current inventory and connect with our brokerage team.
              </p>
              <p className="text-blue-600 font-semibold text-center">
                View Our Listings →
              </p>
            </a>

            {/* INVEST Card */}
            <a href="/invest" className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border-t-4 border-blue-600 block">
              <div className="text-6xl mb-6 text-center">🏗️</div>
              <h3 className="text-3xl font-bold mb-2 text-center">INVEST</h3>
              <p className="text-blue-600 font-semibold text-center mb-6">Project Management & Development</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We transform properties into high-performing assets. View our portfolio of fix & flips, new construction, and upcoming projects.
              </p>
              <p className="text-blue-600 font-semibold text-center">
                See Our Projects →
              </p>
            </a>

            {/* MANAGE Card */}
            <a href="/manage" className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border-t-4 border-blue-600 block">
              <div className="text-6xl mb-6 text-center">🏢</div>
              <h3 className="text-3xl font-bold mb-2 text-center">MANAGE</h3>
              <p className="text-blue-600 font-semibold text-center mb-6">Property Management</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional property management services. View available rentals and submit your rental application online.
              </p>
              <p className="text-blue-600 font-semibold text-center">
                View Vacancies →
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                About <span className="text-blue-600">NYHO</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                <strong>NY HomeOwner Inc.</strong> is more than a real estate company – we're your partner in building generational wealth. Based in the Bronx, we specialize in turning real estate into lasting financial assets for our clients.
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our mission is simple: help individuals and families establish real estate portfolios that generate income, appreciate over time, and create opportunities for future generations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-lg text-gray-900">Find:</strong>
                    <span className="text-gray-600"> We identify the best investment opportunities in the Bronx market</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-lg text-gray-900">Build:</strong>
                    <span className="text-gray-600"> We transform properties into valuable, income-generating assets</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-lg text-gray-900">Manage:</strong>
                    <span className="text-gray-600"> We handle day-to-day operations to maximize your returns</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <strong className="text-lg text-gray-900">Scale:</strong>
                    <span className="text-gray-600"> We reinvest your profits to grow your real estate portfolio</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-8 rounded-xl text-center border-2 border-gray-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">100+</div>
                <div className="text-gray-600">Properties Managed</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl text-center border-2 border-gray-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">$10M+</div>
                <div className="text-gray-600">Assets Under Management</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl text-center border-2 border-gray-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl text-center border-2 border-gray-200">
                <div className="text-5xl font-bold text-blue-600 mb-2">Bronx</div>
                <div className="text-gray-600">Our Focus Market</div>
              </div>
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
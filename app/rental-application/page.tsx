'use client';

import Navigation from '../components/navigation';
import { useState } from 'react';

export default function RentalApplicationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentAddress: '',
    employmentStatus: '',
    monthlyIncome: '',
    moveInDate: '',
    numberOfOccupants: '',
    hasPets: '',
    creditScore: '',
    propertyInterested: '',
    additionalInfo: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('Thank you for your rental application! Our property management team will review it and contact you within 24-48 hours.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      currentAddress: '',
      employmentStatus: '',
      monthlyIncome: '',
      moveInDate: '',
      numberOfOccupants: '',
      hasPets: '',
      creditScore: '',
      propertyInterested: '',
      additionalInfo: ''
    });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6">Rental Application</h1>
          <p className="text-2xl opacity-95 max-w-3xl">
            Apply for any of our available properties. Complete the form below and our team will review your application within 24-48 hours.
          </p>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Tenant Rental Application</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Complete this application to be considered for any of our rental properties
          </p>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <input
              type="text"
              name="currentAddress"
              placeholder="Current Address *"
              value={formData.currentAddress}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none mb-6"
            />

            <h3 className="text-2xl font-bold mb-6 mt-8">Employment & Financial Information</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <select
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              >
                <option value="">Employment Status *</option>
                <option value="employed">Employed Full-Time</option>
                <option value="parttime">Employed Part-Time</option>
                <option value="selfemployed">Self-Employed</option>
                <option value="student">Student</option>
                <option value="retired">Retired</option>
                <option value="unemployed">Unemployed</option>
              </select>

              <input
                type="text"
                name="monthlyIncome"
                placeholder="Monthly Income *"
                value={formData.monthlyIncome}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <select
              name="creditScore"
              value={formData.creditScore}
              onChange={handleInputChange}
              required
              className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none mb-6"
            >
              <option value="">Credit Score Range *</option>
              <option value="excellent">Excellent (750+)</option>
              <option value="good">Good (700-749)</option>
              <option value="fair">Fair (650-699)</option>
              <option value="poor">Poor (Below 650)</option>
              <option value="none">No Credit History</option>
            </select>

            <h3 className="text-2xl font-bold mb-6 mt-8">Rental Details</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="date"
                name="moveInDate"
                placeholder="Desired Move-In Date *"
                value={formData.moveInDate}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />

              <input
                type="number"
                name="numberOfOccupants"
                placeholder="Number of Occupants *"
                value={formData.numberOfOccupants}
                onChange={handleInputChange}
                required
                min="1"
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <select
                name="hasPets"
                value={formData.hasPets}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              >
                <option value="">Do you have pets? *</option>
                <option value="no">No</option>
                <option value="dog">Yes - Dog(s)</option>
                <option value="cat">Yes - Cat(s)</option>
                <option value="other">Yes - Other</option>
              </select>

              <input
                type="text"
                name="propertyInterested"
                placeholder="Property/Unit Interested In *"
                value={formData.propertyInterested}
                onChange={handleInputChange}
                required
                className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <textarea
              name="additionalInfo"
              placeholder="Additional Information (References, special requests, etc.)"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none resize-none mb-6"
            ></textarea>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Submitting this application does not guarantee approval. Our team will review your application and contact you within 24-48 hours. A credit check and background check will be performed as part of the application process.
              </p>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              Submit Rental Application
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
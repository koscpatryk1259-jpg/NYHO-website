'use client';

import Navigation from '../components/Navigation';
import { useState } from 'react';

export default function ContactPage() {
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-2xl opacity-95 max-w-3xl">
            Ready to start building generational wealth? Get in touch with our team today.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
              <p className="text-xl text-gray-600 mb-12">
                Whether you're looking to buy, invest, or manage property, we're here to help you achieve your real estate goals.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office Location</h3>
                    <p className="text-gray-600">3301 Barker Avenue<br/>The Bronx, NY 10467</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">(718) 850-4000</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">nyhomeowner@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mr-4 flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br/>
                      Saturday: 10:00 AM - 4:00 PM<br/>
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48274.60409020376!2d-73.9080895446359!3d40.86830231249058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f35dadf04c31%3A0xf9838c74fa1580fa!2sNY%20HomeOwner!5e0!3m2!1sen!2sus!4v1766166237147!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NYHO Office Location"
                ></iframe>
              </div>

              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a href="/deal" className="block text-blue-600 hover:underline">Browse Current Inventory →</a>
                  <a href="/invest" className="block text-blue-600 hover:underline">View Investment Projects →</a>
                  <a href="/manage" className="block text-blue-600 hover:underline">Apply for Rentals →</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
                  />
                </div>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
                >
                  <option value="">Select a Service</option>
                  <option value="deal">DEAL - Real Estate Brokerage</option>
                  <option value="invest">INVEST - Project Management</option>
                  <option value="manage">MANAGE - Property Management</option>
                  <option value="all">Full Service - Complete Solution</option>
                  <option value="other">General Inquiry</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Tell us about your real estate goals..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none resize-none"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
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
'use client';

import Navigation from '../components/navigation';
import { useState, useEffect } from 'react';

interface Property {
  address: string;
  unit: string;
  bedrooms: string;
  bathrooms: string;
  rent: string;
  amenities: string;
  status: string;
  imageUrl: string;
}

export default function ManagePage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const SHEET_ID = '1D1UApUFAKQiJGuXbOHIOrKwhaSs-vWjUCsWzmJtgVMg';
      const response = await fetch(
        `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`
      );
      const text = await response.text();
      const json = JSON.parse(text.substr(47).slice(0, -2));
      
      const rows = json.table.rows;
      const propertyData: Property[] = rows.slice(1).map((row: any) => ({
        address: row.c[0]?.v || '',
        unit: row.c[1]?.v || '',
        bedrooms: row.c[2]?.v || '',
        bathrooms: row.c[3]?.v || '',
        rent: row.c[4]?.v || '',
        amenities: row.c[5]?.v || '',
        status: row.c[6]?.v || '',
        imageUrl: convertGoogleDriveUrl(row.c[7]?.v || '')
      }));

      setProperties(propertyData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setLoading(false);
    }
  };

  const convertGoogleDriveUrl = (url: string) => {
    if (!url) return '';
    
    if (url.includes('drive.google.com/file/d/')) {
      const match = url.match(/\/d\/([^\/]+)/);
      if (match && match[1]) {
        const fileId = match[1];
        return `https://drive.google.com/uc?export=view&id=${fileId}`;
      }
    }
    
    return url;
  };

  const redactAddress = (address: string) => {
    return address.replace(/^\d+\s/, 'XXX ');
  };

  const getStatusBadge = (status: string) => {
    const statusLower = status.toLowerCase();
    if (statusLower === 'available') {
      return <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">Available</span>;
    } else if (statusLower === 'soon') {
      return <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">Soon</span>;
    } else if (statusLower === 'pending') {
      return <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">Pending</span>;
    }
    return <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">{status}</span>;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />

      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-6xl font-bold mb-6">MANAGE</h1>
          <p className="text-2xl opacity-95 max-w-3xl">
            Professional property management services. Allow us to manage your investment property with care and expertise.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Property Management Services</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Comprehensive management solutions that maximize returns and minimize stress
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 rounded-xl p-8">
              <div className="text-5xl mb-4">🏘️</div>
              <h3 className="text-2xl font-bold mb-4">For Property Owners</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Tenant screening & placement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Rent collection & accounting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Property maintenance & repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Legal compliance & evictions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Monthly financial reporting</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-8">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-4">Maintenance Services</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">24/7 emergency repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Regular property inspections</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Vendor coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Preventive maintenance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Capital improvement planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-8">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-2xl font-bold mb-4">For Tenants</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Easy online rent payment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Quick maintenance requests</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Responsive communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Lease renewal assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 font-bold mr-3">✓</span>
                  <span className="text-gray-700">Move-in/move-out support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6 bg-gray-50 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Units Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Occupancy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Emergency Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Avg Days to Lease</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">Available Rental Vacancies</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Quality apartments for immediate occupancy - Apply today!
          </p>

          <div className="text-center mb-16">
            <a 
              href="/rental-application"
              className="inline-block bg-blue-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Apply Now
            </a>
            <p className="text-gray-600 mt-3 text-lg">Rental Application for Tenants</p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="text-2xl text-gray-600">Loading properties...</div>
            </div>
          ) : properties.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-2xl text-gray-600">No properties available at this time. Check back soon!</div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                  <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-4xl">
                    {property.imageUrl ? (
                      <img src={property.imageUrl} alt={property.address} className="w-full h-full object-cover" />
                    ) : (
                      '🏠'
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">Unit {property.unit}</h3>
                      {getStatusBadge(property.status)}
                    </div>
                    <p className="text-gray-600 mb-3 text-sm">{redactAddress(property.address)}</p>
                    <p className="text-3xl font-bold text-blue-600 mb-3">${property.rent}/mo</p>
                    <div className="flex justify-between mb-3 text-sm">
                      <div>
                        <span className="text-gray-600">Bedrooms: </span>
                        <span className="font-semibold">{property.bedrooms}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Bathrooms: </span>
                        <span className="font-semibold">{property.bathrooms}</span>
                      </div>
                    </div>
                    {property.amenities && (
                      <ul className="space-y-1 mb-4 text-sm">
                        {property.amenities.split(',').slice(0, 3).map((amenity, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <span className="text-green-600 mr-2">✓</span> {amenity.trim()}
                          </li>
                        ))}
                      </ul>
                    )}
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Schedule Tour
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Property Owners: Let Us Manage Your Investment</h2>
          <p className="text-xl mb-8 opacity-95">
            Maximize your returns while we handle everything from tenant placement to maintenance. Our proven systems ensure your property is well-maintained and profitable.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Schedule a Consultation
            </button>
            <a 
              href="/property-management-info.pdf"
              download
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Download Info Packet
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 text-center">
        <p className="opacity-80">&copy; 2024 NYHO - NY HomeOwner Inc. All rights reserved.</p>
        <p className="mt-2 text-sm opacity-70">Building Generational Wealth in the Bronx, NY</p>
      </footer>
    </div>
  );
}
'use client';

import React, { useState } from 'react';
import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';
import Footer from './Footer';

const Donors = () => {
  const [selectedBloodType, setSelectedBloodType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const bloodTypes = ['All', 'O+', 'O-', 'A+', 'A-', 'B+', 'B-'];

  const donors = [
    {
      id: 1,
      bloodType: 'O+',
      name: 'Emma Williams',
      lastDonated: '2 months ago',
      location: 'Downtown',
      phone: '(555) 123-4567',
      available: true
    },
    {
      id: 2,
      bloodType: 'A+',
      name: 'David Brown',
      lastDonated: '1 month ago',
      location: 'Northside',
      phone: '(555) 234-5678',
      available: true
    },
    {
      id: 3,
      bloodType: 'B-',
      name: 'Lisa Garcia',
      lastDonated: '3 weeks ago',
      location: 'Southside',
      phone: '(555) 345-6789',
      available: false
    },
    {
      id: 4,
      bloodType: 'O-',
      name: 'Michael Johnson',
      lastDonated: '1 week ago',
      location: 'Eastside',
      phone: '(555) 456-7890',
      available: true
    },
    {
      id: 5,
      bloodType: 'A-',
      name: 'Sarah Davis',
      lastDonated: '4 months ago',
      location: 'Westside',
      phone: '(555) 567-8901',
      available: true
    },
    {
      id: 6,
      bloodType: 'B+',
      name: 'James Wilson',
      lastDonated: '2 weeks ago',
      location: 'Central',
      phone: '(555) 678-9012',
      available: false
    }
  ];

  const filteredDonors = donors.filter(donor => {
    const matchesBloodType = selectedBloodType === 'All' || donor.bloodType === selectedBloodType;
    const matchesSearch = donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      donor.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      donor.bloodType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBloodType && matchesSearch;
  });

  const getBloodTypeColor = (bloodType) => {
    const colors = {
      'O+': 'bg-red-100 text-red-600',
      'O-': 'bg-red-100 text-red-600',
      'A+': 'bg-blue-100 text-blue-600',
      'A-': 'bg-blue-100 text-blue-600',
      'B+': 'bg-green-100 text-green-600',
      'B-': 'bg-green-100 text-green-600'
    };
    return colors[bloodType] || 'bg-gray-100 text-gray-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 mb-10">
      <TopNavbar />

      {/* Header */}
      <div className="px-4 py-6 md:w-[40%] mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Donors</h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search by blood type or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Blood Type Filter */}
        <div className="mb-6">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {bloodTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedBloodType(type)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 ${selectedBloodType === type
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                  }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Donor List */}
        <div className="space-y-4">
          {filteredDonors.map((donor) => (
            <div
              key={donor.id}
              className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getBloodTypeColor(donor.bloodType)}`}>
                      {donor.bloodType}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {donor.name}
                    </h3>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3l-3 3m0-4v-4m0 4v4m3-3l3 3" />
                      </svg>
                      <span>Last donated: {donor.lastDonated}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>{donor.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{donor.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Availability Status */}
                <div className="flex flex-col items-end">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium mb-2 ${donor.available
                    ? 'bg-green-100 text-green-600'
                    : 'bg-red-100 text-red-600'
                    }`}>
                    {donor.available ? 'Available' : 'Unavailable'}
                  </div>

                  {/* Contact Button */}
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNavbar />
      <Footer />
    </div>
  );
};

export default Donors;

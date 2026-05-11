'use client';

import React from 'react';
import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';
import Footer from './Footer';

const AllBloodRequests = () => {
  const requests = [
    {
      id: 1,
      patientName: 'John Smith',
      hospital: 'City General Hospital',
      unitsNeeded: 2,
      location: 'Downtown',
      timeAgo: '15 mins ago',
      bloodType: 'O+',
      theme: 'red'
    },
    {
      id: 2,
      patientName: 'Sarah Johnson',
      hospital: 'Memorial Medical Center',
      unitsNeeded: 3,
      location: 'Westside',
      timeAgo: '1 hour ago',
      bloodType: 'A-',
      theme: 'orange'
    },
    {
      id: 3,
      patientName: 'Michael Chen',
      hospital: 'St. Mary\'s Hospital',
      unitsNeeded: 1,
      location: 'Eastside',
      timeAgo: '3 hours ago',
      bloodType: 'B+',
      theme: 'blue'
    }
  ];

  const getThemeClasses = (theme) => {
    const themes = {
      red: {
        bg: 'bg-gradient-to-r from-red-50 to-pink-50',
        border: 'border-red-200',
        button: 'bg-red-600 hover:bg-red-700',
        bloodType: 'bg-red-100 text-red-600'
      },
      orange: {
        bg: 'bg-gradient-to-r from-orange-50 to-yellow-50',
        border: 'border-orange-200',
        button: 'bg-orange-600 hover:bg-orange-700',
        bloodType: 'bg-orange-100 text-orange-600'
      },
      blue: {
        bg: 'bg-gradient-to-r from-blue-50 to-cyan-50',
        border: 'border-blue-200',
        button: 'bg-blue-600 hover:bg-blue-700',
        bloodType: 'bg-blue-100 text-blue-600'
      }
    };
    return themes[theme] || themes.red;
  };

  return (
    <div className="min-h-screen bg-gray-50 mb-10">
      <TopNavbar />

      {/* Header */}
      <div className="px-4 py-6 md:w-[40%] mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">All Blood Requests</h1>

        {/* Request Cards */}
        <div className="space-y-4">
          {requests.map((request) => {
            const theme = getThemeClasses(request.theme);

            return (
              <div
                key={request.id}
                className={`${theme.bg} rounded-xl p-6 shadow-md border ${theme.border} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {request.patientName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {request.hospital}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="font-medium">Need: {request.unitsNeeded} {request.unitsNeeded === 1 ? 'unit' : 'units'}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span className="font-medium">{request.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3l-3 3m0-4v-4m0 4v4m3-3l3 3" />
                        </svg>
                        <span className="font-medium">{request.timeAgo}</span>
                      </div>
                    </div>
                  </div>

                  {/* Blood Type Badge */}
                  <div className={`${theme.bloodType} w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-sm`}>
                    {request.bloodType}
                  </div>
                </div>

                {/* Respond Button */}
                <button className={`w-full ${theme.button} text-white py-3 rounded-lg transition-colors font-medium shadow-md hover:shadow-lg`}>
                  Respond to Request
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <BottomNavbar />
      <Footer />
    </div>
  );
};

export default AllBloodRequests;

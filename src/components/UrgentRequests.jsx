'use client';

import React from 'react';

const UrgentRequests = () => {
  return (
    <div className="space-y-6 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Urgent Requests</h2>
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
          View All
        </button>
      </div>

      {/* Urgent Request Cards */}
      <div className="space-y-4 w-full">
        {/* John Smith Card */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">John Smith</h3>
              <p className="text-sm text-gray-600">City General Hospital</p>
            </div>
            <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
              A+
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="font-medium">Need: 2 units</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <span className="font-medium">Dhaka Medical Center</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3l-3 3m0-4v-4m0 4v4m3-3l3 3" />
                </svg>
              </div>
              <span className="font-medium">2 hours ago</span>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
            Respond to Request
          </button>
        </div>

        {/* Sarah Johnson Card */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Sarah Johnson</h3>
              <p className="text-sm text-gray-600">National Hospital</p>
            </div>
            <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
              O+
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <span className="font-medium">Need: 1 unit</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <span className="font-medium">Central Hospital</span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <div className="w-8 h-8 bg-orange-50 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3l-3 3m0-4v-4m0 4v4m3-3l3 3" />
                </svg>
              </div>
              <span className="font-medium">5 hours ago</span>
            </div>
          </div>

          <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-medium shadow-md hover:shadow-lg">
            Respond to Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrgentRequests;

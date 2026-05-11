'use client';

import React from 'react';

const YourImpact = () => {
  return (
    <div className="px-4 py-6 space-y-6 w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Impact</h2>

      {/* Impact Cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Donations Card */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 3m0 6l-3-3-3-3m6 0l-3 3-3-3m0 6l3 3 3 3" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">1,234</h3>
            <p className="text-sm text-gray-600 font-medium">Donations</p>
          </div>
        </div>

        {/* Lives Saved Card */}
        <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">567</h3>
            <p className="text-sm text-gray-600 font-medium">Lives Saved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourImpact;

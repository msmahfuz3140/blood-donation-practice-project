'use client';

import React from 'react';

const UpcomingDrives = () => {
  return (
    <div className="px-4 py-6 space-y-6 w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Drives</h2>

      {/* Community Blood Drive Card */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-xl p-6 shadow-lg text-white hover:shadow-xl transition-all duration-300">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Community Blood Drive</h3>
            <div className="space-y-2">
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span>City Convention Center</span>
              </div>
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>March 15, 2024</span>
              </div>
              <div className="flex items-center text-white/90">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3l-3 3m0-4v-4m0 4v4m3-3l3 3" />
                </svg>
                <span>10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
        </div>

        <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md">
          Register Now
        </button>
      </div>

      {/* Quote Card */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 shadow-md border border-gray-200">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <blockquote className="text-lg md:text-xl text-gray-800 font-medium italic leading-relaxed">
            &ldquo;Every drop counts. Your donation can save up to three lives.&rdquo;
          </blockquote>

          <div className="flex items-center justify-center space-x-2 pt-4 border-t border-gray-300">
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            <p className="text-sm text-gray-600 font-medium">Together We Save Lives</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingDrives;

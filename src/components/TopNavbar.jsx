'use client'
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const TopNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  return (
    <div className="bg-red-600 text-white">
      {/* Main navigation */}
      <div className="flex items-center justify-between px-4 py-3 md:w-2/5 lg:w-2/5 xl:w-2/5 mx-auto">
        {/* Left side - Logo and title */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10">
            <Image
              src="/images/logo.jfif"
              alt="Blood Donation Logo"
              width={40}
              height={40}
              className="rounded-full object-cover"
              onError={(e) => {
                e.target.src = '/vercel.svg'; // Fallback image
              }}
              unoptimized={true}
            />
          </div>
          <div>
            <div className="text-sm font-medium">ফ্রি ব্লাড ডোনেশন</div>
            <div className="text-xs">সোসাইটি</div>
          </div>
        </div>

        {/* Right side - Share, notifications, menu */}
        <div className="flex items-center space-x-4">
          <button className="bg-red-700 px-3 py-1 rounded text-sm">
            Share
          </button>
          <button className="p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div ref={dropdownRef} className="absolute top-full right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-800">Profile</div>
                      <div className="text-xs text-gray-600">Manage your profile</div>
                    </div>
                  </button>

                  <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-medium text-gray-800">About Us</div>
                      <div className="text-xs text-gray-600">Learn more about our mission</div>
                    </div>
                  </button>
                </div>

                <div className="border-t border-gray-200 py-2">
                  <button className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <div>
                      <div className="font-medium text-red-600">Log Out</div>
                      <div className="text-xs text-gray-600">Sign out of your account</div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;

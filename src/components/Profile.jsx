'use client';

import React, { useState } from 'react';
import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';
import Footer from './Footer';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const donationHistory = [
    {
      id: 1,
      date: 'March 15, 2024',
      location: 'City Hospital',
      bloodType: 'A+',
      units: 1
    },
    {
      id: 2,
      date: 'January 20, 2024',
      location: 'Medical Center',
      bloodType: 'A+',
      units: 1
    },
    {
      id: 3,
      date: 'November 10, 2023',
      location: 'General Hospital',
      bloodType: 'A+',
      units: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mb-10">
      <TopNavbar />

      {/* Profile Header */}
      <div className="px-4 py-6 md:w-[40%] mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile</h1>

        {/* Profile Card */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                A+
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
              <p className="text-gray-600">Blood Donor</p>
              <div className="flex items-center space-x-2 mt-2">
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                  Available
                </span>
                <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                  Verified
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">12</div>
              <div className="text-xs text-gray-600">Donations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">36</div>
              <div className="text-xs text-gray-600">Lives Saved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">2</div>
              <div className="text-xs text-gray-600">Years Active</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
              Schedule Donation
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('personal')}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'personal'
                ? 'text-red-600 border-b-2 border-red-600'
                : 'text-gray-600 hover:text-gray-800'
                }`}
            >
              Personal Info
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'history'
                ? 'text-red-600 border-b-2 border-red-600'
                : 'text-gray-600 hover:text-gray-800'
                }`}
            >
              Donation History
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`flex-1 py-3 px-4 text-center font-medium transition-colors ${activeTab === 'settings'
                ? 'text-red-600 border-b-2 border-red-600'
                : 'text-gray-600 hover:text-gray-800'
                }`}
            >
              Settings
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'personal' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <div className="bg-gray-50 text-black px-4 py-2 rounded-lg">John Doe</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <div className="bg-gray-50 text-black px-4 py-2 rounded-lg">john.doe@example.com</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <div className="bg-gray-50 text-black px-4 py-2 rounded-lg">(555) 123-4567</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                  <div className="bg-gray-50 text-black px-4 py-2 rounded-lg">A+</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <div className="bg-gray-50 text-black px-4 py-2 rounded-lg">Dhaka, Bangladesh</div>
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="space-y-4">
                {donationHistory.map((donation) => (
                  <div key={donation.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-800">{donation.date}</h4>
                      <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                        {donation.bloodType}
                      </span>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span>{donation.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>{donation.units} {donation.units === 1 ? 'unit' : 'units'} donated</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <h4 className="font-medium text-gray-800">Notifications</h4>
                    <p className="text-sm text-gray-600">Receive donation requests</p>
                  </div>
                  <button className="bg-red-600 relative inline-flex h-6 w-11 items-center rounded-full">
                    <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <h4 className="font-medium text-gray-800">Location Sharing</h4>
                    <p className="text-sm text-gray-600">Share your location for nearby requests</p>
                  </div>
                  <button className="bg-gray-300 relative inline-flex h-6 w-11 items-center rounded-full">
                    <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
                  </button>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-200">
                  <div>
                    <h4 className="font-medium text-gray-800">Privacy</h4>
                    <p className="text-sm text-gray-600">Control your data privacy</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="flex items-center justify-between py-3">
                  <div>
                    <h4 className="font-medium text-gray-800">Help & Support</h4>
                    <p className="text-sm text-gray-600">Get help with the app</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <BottomNavbar />
      <Footer />
    </div>
  );
};

export default Profile;

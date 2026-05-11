'use client';

import React from 'react';

const BloodInfoTable = () => {
  const bloodInfo = [
    {
      bloodType: 'O+',
      canDonateTo: 'O+, A+, B+, AB+',
      cannotDonateTo: 'O-, A-, B-, AB-',
      description: 'Universal donor, can give blood to all blood types'
    },
    {
      bloodType: 'O-',
      canDonateTo: 'O-, A-, B-, AB-',
      cannotDonateTo: 'O+, A+, B+, AB+',
      description: 'Universal recipient, can receive blood from all blood types'
    },
    {
      bloodType: 'A+',
      canDonateTo: 'A+, AB+',
      cannotDonateTo: 'A-, B+, O+',
      description: 'Can donate to A+ and AB+'
    },
    {
      bloodType: 'A-',
      canDonateTo: 'A-, AB-, O+',
      cannotDonateTo: 'A+, B+, O-',
      description: 'Can donate to A-, AB-, and O+'
    },
    {
      bloodType: 'B+',
      canDonateTo: 'B+, AB+',
      cannotDonateTo: 'A+, B-, O+',
      description: 'Can donate to B+ and AB+'
    },
    {
      bloodType: 'B-',
      canDonateTo: 'B-, AB-, O+',
      cannotDonateTo: 'A+, B+, O-',
      description: 'Can donate to B-, AB-, and O+'
    },
    {
      bloodType: 'AB+',
      canDonateTo: 'AB+',
      cannotDonateTo: 'A-, B-, O+, O-',
      description: 'Can donate only to AB+'
    },
    {
      bloodType: 'AB-',
      canDonateTo: 'AB-, A-, B-, O+',
      cannotDonateTo: 'A+, B+, O+, O-',
      description: 'Can donate to AB-, A-, B-, and O+'
    }
  ];

  return (
    <div className="px-4 py-6 md:w-[40%] mx-auto">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4">
          <h2 className="text-xl font-bold text-center">Blood Type Compatibility Chart</h2>
          <p className="text-sm text-center mt-2 text-red-100">
            Find out which blood types you can donate to and receive from
          </p>
        </div>
        
        {/* Table Content */}
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Blood Type
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Can Donate To
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Cannot Donate To
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-700">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {bloodInfo.map((info, index) => (
                  <tr key={info.bloodType} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">
                      <span className="inline-flex items-center">
                        <span className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
                          {info.bloodType}
                        </span>
                      </span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">
                      {info.canDonateTo}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-sm text-red-600">
                      {info.cannotDonateTo}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-xs text-gray-500">
                      {info.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Legend */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-800 mb-3">Quick Reference:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-blue-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Can Donate To</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Cannot Donate To</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodInfoTable;

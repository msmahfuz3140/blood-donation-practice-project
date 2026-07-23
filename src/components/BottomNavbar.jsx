'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const BottomNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 w-screen">
      <div className="flex items-center justify-around py-2 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        {/* Home */}
        <button
          onClick={() => router.push('/')}
          className={`flex flex-col items-center p-2 transition-all duration-200 hover:scale-110 ${pathname === '/' ? 'text-red-600' : 'text-gray-600 hover:text-red-500'}`}
        >
          <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="text-xs">Home</span>
        </button>

        {/* Requests */}
        <button
          onClick={() => router.push('/requests')}
          className={`flex flex-col items-center p-2 transition-all duration-200 hover:scale-110 ${pathname === '/requests' ? 'text-red-600' : 'text-gray-600 hover:text-red-500'}`}
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span className="text-xs">Requests</span>
        </button>

        {/* Donors */}
        <button
          onClick={() => router.push('/donors')}
          className={`flex flex-col items-center p-2 transition-all duration-200 hover:scale-110 ${pathname === '/donors' ? 'text-red-600' : 'text-gray-600 hover:text-red-500'}`}
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="text-xs">Donors</span>
        </button>

        {/* Medical Info */}
        <button
          onClick={() => router.push('/medical-info')}
          className={`flex flex-col items-center p-2 transition-all duration-200 hover:scale-110 ${pathname === '/medical-info' ? 'text-red-600' : 'text-gray-600 hover:text-red-500'}`}
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6m-9 1h18a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs">Medical Info</span>
        </button>

        {/* Profile */}
        <button
          onClick={() => router.push('/profile')}
          className={`flex flex-col items-center p-2 transition-all duration-200 hover:scale-110 ${pathname === '/profile' ? 'text-red-600' : 'text-gray-600 hover:text-red-500'}`}
        >
          <div className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-xs font-bold mb-1">
            A+
          </div>
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavbar;

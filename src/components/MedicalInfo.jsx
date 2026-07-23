'use client';

import React, { useState } from 'react';
import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';
import Footer from './Footer';

const MedicalInfo = () => {
  const [activeTab, setActiveTab] = useState('interval');

  // Calculator State
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('male');
  const [lastDonatedMonths, setLastDonatedMonths] = useState('-1');
  const [calcResult, setCalcResult] = useState(null);

  // Compatibility State
  const [selectedGroup, setSelectedGroup] = useState('O+');

  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);

  const tabs = [
    { id: 'interval', label: 'রক্তদানের সময়সীমা', icon: '📅' },
    { id: 'foods', label: 'রক্ত বৃদ্ধির খাবার', icon: '🍎' },
    { id: 'eligibility', label: 'যোগ্যতা ও অযোগ্যতা', icon: '⚖️' },
    { id: 'benefits', label: 'রক্তদানের উপকারিতা', icon: '💪' },
    { id: 'tips', label: 'আগে ও পরে করণীয়', icon: '📝' },
    { id: 'calculator', label: 'যোগ্যতা যাচাই (ক্যালকুলেটর)', icon: '📱' },
    { id: 'compatibility', label: 'রক্তের গ্রুপ মেলানো', icon: '🧬' },
    { id: 'helplines_faq', label: 'হেল্পলাইন ও প্রশ্নোত্তর', icon: '☎️' },
  ];

  const compatibilityData = {
    'O+': { give: ['O+', 'A+', 'B+', 'AB+'], receive: ['O+', 'O-'], desc: 'O+ সবচেয়ে সাধারণ রক্তের গ্রুপ এবং এটি যেকোনো পজিটিভ গ্রুপকে দেওয়া যায়।' },
    'O-': { give: ['সব রক্তের গ্রুপ (সার্বজনীন দাতা)'], receive: ['O-'], desc: 'O- হলো ইউনিভার্সাল ডোনার (সার্বজনীন দাতা)। এটি যেকোনো গ্রুপকে দেওয়া যায়।' },
    'A+': { give: ['A+', 'AB+'], receive: ['A+', 'A-', 'O+', 'O-'], desc: 'A+ ব্যক্তি শুধুমাত্র A+ এবং AB+ কে দিতে পারেন।' },
    'A-': { give: ['A+', 'A-', 'AB+', 'AB-'], receive: ['A-', 'O-'], desc: 'A- ব্যক্তি যেকোনো A বা AB গ্রুপকে দিতে পারেন।' },
    'B+': { give: ['B+', 'AB+'], receive: ['B+', 'B-', 'O+', 'O-'], desc: 'B+ ব্যক্তি শুধুমাত্র B+ এবং AB+ কে দিতে পারেন।' },
    'B-': { give: ['B+', 'B-', 'AB+', 'AB-'], receive: ['B-', 'O-'], desc: 'B- ব্যক্তি যেকোনো B বা AB গ্রুপকে দিতে পারেন।' },
    'AB+': { give: ['AB+'], receive: ['সব রক্তের গ্রুপ (সার্বজনীন গ্রহীতা)'], desc: 'AB+ হলো ইউনিভার্সাল রিসিপিয়েন্ট (সার্বজনীন গ্রহীতা)। এটি যেকোনো গ্রুপ থেকে রক্ত নিতে পারে।' },
    'AB-': { give: ['AB+', 'AB-'], receive: ['AB-', 'A-', 'B-', 'O-'], desc: 'AB- ব্যক্তি শুধুমাত্র সব নেগেটিভ রক্তের গ্রুপ থেকে গ্রহণ করতে পারেন।' }
  };

  const faqs = [
    {
      q: "রক্ত দিলে কি শরীর দুর্বল হয়ে যায়?",
      a: "না, রক্তদানের পর প্লাজমা বা রক্তের তরল অংশ ২৪ থেকে ৪৮ ঘণ্টার মধ্যে শরীরে পুনরায় পূরণ হয়ে যায়। আর লোহিত রক্তকণিকাগুলো ৪ থেকে ৮ সপ্তাহের মধ্যে আবার তৈরি হয়ে যায়। রক্ত দেওয়ার পর পর্যাপ্ত পানি ও তরল খাবার খেলে কোনো ধরনের দুর্বলতা অনুভব হয় না।"
    },
    {
      q: "রক্তদানের মাধ্যমে কি কোনো রোগ ছড়ানোর ঝুঁকি থাকে?",
      a: "না, কারণ রক্তদানের সময় সম্পূর্ণ নতুন, জীবাণুমুক্ত এবং ওয়ান-টাইম সুই ব্যবহার করা হয় যা একবার ব্যবহারের পর ফেলে দেওয়া হয়। তাই রক্তদাতার কোনো ধরনের সংক্রামক রোগে আক্রান্ত হওয়ার সুযোগ নেই।"
    },
    {
      q: "ধূমপায়ী ব্যক্তি কি রক্ত দিতে পারবেন?",
      a: "হ্যাঁ, পারবেন। তবে রক্তদানের অন্তত ২৪ ঘণ্টা আগে এবং রক্তদানের পর অন্তত ৩-৪ ঘণ্টা ধূমপান না করা ভালো। কারণ ধূমপান করলে রক্তে কার্বন মনোক্সাইডের মাত্রা বাড়ে যা গ্রহীতার জন্য ক্ষতিকর হতে পারে।"
    },
    {
      q: "কত বছর বয়স পর্যন্ত রক্ত দেওয়া যায়?",
      a: "সাধারণত ১৮ থেকে ৬০ বছর পর্যন্ত শারীরিক সুস্থতা সাপেক্ষে নিয়মিত রক্ত দেওয়া যায়। তবে কিছু কিছু ক্ষেত্রে চিকিৎসকের পরামর্শ অনুযায়ী ৬৫ বছর পর্যন্তও রক্ত দেওয়া সম্ভব।"
    },
    {
      q: "ট্যাটু বা আকুপাংচার করানোর পর কতদিন পর রক্ত দেওয়া যায়?",
      a: "শরীরে ট্যাটু আঁকানো বা আকুপাংচার করানোর পর অন্তত ১২ মাস (১ বছর) রক্ত দেওয়া উচিত নয়। কারণ এতে রক্তবাহিত বিভিন্ন ভাইরাসের সংক্রমণ ঘটার সামান্য ঝুঁকি থাকে।"
    }
  ];

  const handleCalculate = (e) => {
    e.preventDefault();
    const a = parseInt(age);
    const w = parseFloat(weight);
    const m = parseInt(lastDonatedMonths);

    if (isNaN(a) || isNaN(w)) {
      setCalcResult({
        status: 'error',
        message: 'অনুগ্রহ করে বয়স ও ওজন সঠিকভাবে সংখ্যায় লিখুন।'
      });
      return;
    }

    const errors = [];
    if (a < 18 || a > 60) {
      errors.push('রক্তদানের বয়স ১৮ থেকে ৬০ বছরের মধ্যে হতে হবে।');
    }
    if (gender === 'male' && w < 50) {
      errors.push('পুরুষদের ক্ষেত্রে সর্বনিম্ন ওজন ৫০ কেজি হওয়া প্রয়োজন।');
    }
    if (gender === 'female' && w < 45) {
      errors.push('নারীদের ক্ষেত্রে সর্বনিম্ন ওজন ৪৫ কেজি হওয়া প্রয়োজন।');
    }
    if (m !== -1) {
      if (gender === 'male' && m < 3) {
        errors.push('পুরুষদের জন্য শেষ রক্তদানের পর অন্তত ৩ মাস (৯০ দিন) পার হতে হবে।');
      }
      if (gender === 'female' && m < 4) {
        errors.push('নারীদের জন্য শেষ রক্তদানের পর অন্তত ৪ মাস (১২০ দিন) পার হতে হবে।');
      }
    }

    if (errors.length > 0) {
      setCalcResult({
        status: 'cannot',
        message: 'দুঃখিত, আপনি আপাতত রক্তদান করতে পারবেন না।',
        details: errors
      });
    } else {
      setCalcResult({
        status: 'can',
        message: 'অভিনন্দন! আপনি রক্তদানের জন্য উপযুক্ত।',
        details: ['আপনার বয়স, ওজন এবং বিরতির সময়সীমা রক্তদানের জন্য সম্পূর্ণ অনুকূল। রক্তদানের পূর্বে অবশ্যই অন্যান্য প্রাথমিক পরীক্ষা (যেমন রক্তচাপ ও হিমোগ্লোবিন) করিয়ে নিবেন।']
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <TopNavbar />

      {/* Hero Banner with Soft Red Gradient */}
      <div className="relative bg-gradient-to-r from-red-700 via-red-600 to-rose-600 text-white py-12 px-4 shadow-md mt-14">
        <div className="max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4 animate-pulse">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-2">রক্তদান সংক্রান্ত চিকিৎসা নির্দেশিকা</h1>
          <p className="text-sm md:text-base text-red-100 font-light">
            নিরাপদে রক্তদান করুন, সুস্থ থাকুন এবং অন্যের জীবন বাঁচান।
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-4 py-8 md:max-w-3xl lg:max-w-4xl mx-auto">
        
        {/* Navigation Tabs */}
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2 border-b border-gray-200 pb-2 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white shadow-md transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-red-600 border border-gray-200'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Contents */}
        <div className="transition-all duration-500">
          
          {/* 1. DONATION INTERVAL */}
          {activeTab === 'interval' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold text-red-600 flex items-center mb-4">
                  <span className="mr-2">📅</span> কতদিন পর পর রক্ত দেওয়া যায়?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-1">👨</div>
                    <h3 className="font-bold text-blue-900 mb-1">পুরুষদের জন্য</h3>
                    <p className="text-sm text-blue-700">প্রতি <span className="font-bold text-lg text-blue-800">৩ মাস</span> পর পর</p>
                    <p className="text-xs text-blue-500 mt-1">বছরে সর্বোচ্চ ৪ বার</p>
                  </div>
                  
                  <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 text-center">
                    <div className="text-3xl mb-1">👩</div>
                    <h3 className="font-bold text-rose-900 mb-1">নারীদের জন্য</h3>
                    <p className="text-sm text-rose-700">প্রতি <span className="font-bold text-lg text-rose-800">৪ মাস</span> পর পর</p>
                    <p className="text-xs text-rose-500 mt-1">বছরে সর্বোচ্চ ৩ বার</p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-2">বিজ্ঞানসম্মত কারণ:</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    রক্তদানের পর রক্তের তরল অংশ (প্লাজমা) ২৪ থেকে ৪৮ ঘণ্টার মধ্যে শরীরে পুনরায় পূরণ হয়ে যায়। কিন্তু লোহিত রক্তকণিকা (Red Blood Cells) তৈরি হতে এবং শরীরে আয়রনের স্বাভাবিক ভারসাম্য ফিরে আসতে প্রায় <strong>৪ থেকে ৮ সপ্তাহ</strong> সময় লাগে। তাই শরীরের ক্ষতি এড়াতে এবং সুস্থ থাকতে ৩ থেকে ৪ মাসের নিরাপদ বিরতি নির্ধারণ করা হয়েছে।
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 2. REPLENISHMENT FOODS */}
          {activeTab === 'foods' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold text-red-600 flex items-center mb-4">
                  <span className="mr-2">🍎</span> কি খেলে রক্ত দ্রুত তৈরি বা ফিলআপ হয়?
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  রক্তদানের পর শরীরে নতুন রক্ত তৈরিতে ত্বরান্বিত করতে এবং রক্তশূন্যতা রোধে নিচের পুষ্টিকর খাবারগুলো গ্রহণ করা উচিত:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 border-b border-gray-100 pb-4">
                    <div className="bg-red-50 text-red-600 p-2 rounded-lg text-xl flex-shrink-0">🥩</div>
                    <div>
                      <h3 className="font-bold text-gray-800">১. আয়রন সমৃদ্ধ খাবার (Iron-Rich Foods)</h3>
                      <p className="text-sm text-gray-600 mt-1">আয়রন হলো হিমোগ্লোবিন তৈরির মূল উপাদান।</p>
                      <ul className="text-xs text-gray-500 list-disc pl-4 mt-1 space-y-0.5">
                        <li><strong>প্রাণিজ উৎস:</strong> কলিজা (মুরগি/গরু), লাল মাংস, ডিমের কুসুম।</li>
                        <li><strong>উদ্ভিজ্জ উৎস:</strong> পালং শাক, কচু শাক, কচুর লতি, ডাল, মটরশুঁটি, ছোলা, খেজুর, কিশমিশ এবং বেদানা/ডালিম।</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 border-b border-gray-100 pb-4">
                    <div className="bg-green-50 text-green-600 p-2 rounded-lg text-xl flex-shrink-0">🥦</div>
                    <div>
                      <h3 className="font-bold text-gray-800">২. ফোলেট বা ফলিক অ্যাসিড (Folate / Vitamin B9)</h3>
                      <p className="text-sm text-gray-600 mt-1">এটি শরীরে নতুন লোহিত রক্তকণিকা তৈরিতে বিশেষভাবে ভূমিকা রাখে।</p>
                      <ul className="text-xs text-gray-500 list-disc pl-4 mt-1 space-y-0.5">
                        <li>সবুজ শাকসবজি, ব্রকলি, পাতাকপি, মটরশুঁটি, কমলা এবং বিভিন্ন শস্যদানা।</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 border-b border-gray-100 pb-4">
                    <div className="bg-blue-50 text-blue-600 p-2 rounded-lg text-xl flex-shrink-0">🥛</div>
                    <div>
                      <h3 className="font-bold text-gray-800">৩. ভিটামিন বি-১২ (Vitamin B12)</h3>
                      <p className="text-sm text-gray-600 mt-1">ডিএনএ তৈরি এবং রক্তকণিকা উৎপাদনে এটি অত্যন্ত গুরুত্বপূর্ণ।</p>
                      <ul className="text-xs text-gray-500 list-disc pl-4 mt-1 space-y-0.5">
                        <li>মাছ, মাংস, ডিম, দুধ এবং দুগ্ধজাত খাবার (পনির, দই)।</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 border-b border-gray-100 pb-4">
                    <div className="bg-yellow-50 text-yellow-600 p-2 rounded-lg text-xl flex-shrink-0">🍋</div>
                    <div>
                      <h3 className="font-bold text-gray-800">৪. ভিটামিন সি (Vitamin C)</h3>
                      <p className="text-sm text-gray-600 mt-1">ভিটামিন সি শরীরকে উদ্ভিদ উৎস থেকে আয়রন শোষণ করতে সাহায্য করে।</p>
                      <ul className="text-xs text-gray-500 list-disc pl-4 mt-1 space-y-0.5">
                        <li>আমলকী, লেবু, পেয়ারা, কমলা, মাল্টা, স্ট্রবেরি এবং টমেটো।</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-teal-50 text-teal-600 p-2 rounded-lg text-xl flex-shrink-0">💧</div>
                    <div>
                      <h3 className="font-bold text-gray-800">৫. প্রচুর পানি ও তরল খাবার</h3>
                      <p className="text-sm text-gray-600 mt-1">রক্ত দেওয়ার পর তরলের ঘাটতি পূরণে পর্যাপ্ত পানি পান করুন।</p>
                      <ul className="text-xs text-gray-500 list-disc pl-4 mt-1 space-y-0.5">
                        <li>ডাবের পানি, স্যালাইন, ফলের তাজা রস বা লেবুর শরবত।</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. ELIGIBILITY CRITERIA */}
          {activeTab === 'eligibility' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold text-red-600 flex items-center mb-6">
                  <span className="mr-2">⚖️</span> রক্তদানের যোগ্যতা ও অযোগ্যতা
                </h2>

                <div className="space-y-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                    <h3 className="font-bold text-green-900 flex items-center mb-3">
                      <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      রক্তদানের যোগ্যতা (কারা দিতে পারবে)
                    </h3>
                    <ul className="text-sm text-green-800 space-y-2 list-inside list-disc pl-2">
                      <li><strong>বয়স:</strong> ১৮ থেকে ৬০ বছর হতে হবে।</li>
                      <li><strong>ওজন:</strong> পুরুষদের ক্ষেত্রে ন্যূনতম ৫০ কেজি এবং নারীদের ক্ষেত্রে ন্যূনতম ৪৫ কেজি।</li>
                      <li><strong>হিমোগ্লোবিন:</strong> রক্তে হিমোগ্লোবিনের পরিমাণ পর্যাপ্ত হতে হবে (পুরুষ: ১২.৫ গ্রাম/ডে.লি., নারী: ১১.৫ গ্রাম/ডে.লি.)।</li>
                      <li><strong>রক্তচাপ:</strong> রক্তচাপ স্বাভাবিক থাকতে হবে (সিস্টোলিক ১০০-১৪০ এবং ডায়াস্টোলিক ৬০-৯০ mmHg)।</li>
                      <li><strong>সাধারণ সুস্থতা:</strong> জ্বর, সর্দি, কাশি বা কোনো সংক্রামক রোগ থেকে মুক্ত থাকতে হবে।</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <h3 className="font-bold text-red-900 flex items-center mb-3">
                      <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      রক্তদানের অযোগ্যতা (কারা দিতে পারবে না)
                    </h3>
                    <ul className="text-sm text-red-800 space-y-2 list-inside list-disc pl-2">
                      <li>হেপাটাইটিস বি বা সি, এইডস (HIV), সিফিলিস এবং ম্যালেরিয়ার রোগীরা।</li>
                      <li>বিগত ৬ মাসের মধ্যে বড় কোনো অস্ত্রোপচার (Surgery) হলে বা অন্যের রক্ত গ্রহণ করলে।</li>
                      <li>বিগত ১২ মাসের মধ্যে ট্যাটু, পিয়ার্সিং বা আকুপাংচার করালে।</li>
                      <li>গর্ভবতী মা ও স্তন্যদানকারী মায়েরা (সন্তান জন্মের অন্তত ১৫ মাস পর দেওয়া যাবে)।</li>
                      <li>জটিল কোনো হৃদরোগ, ক্যানসার, অ্যাজমা, ডায়াবেটিস (ইনসুলিন নির্ভর) বা হেমাটোলজিক্যাল রোগে আক্রান্ত হলে।</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. HEALTH BENEFITS */}
          {activeTab === 'benefits' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold text-red-600 flex items-center mb-4">
                  <span className="mr-2">💪</span> রক্তদানের স্বাস্থ্যগত উপকারিতা
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  রক্তদান কেবল অপরের জীবনই বাঁচায় না, এটি নিজের শরীর ও মনের জন্যও অত্যন্ত উপকারী। নিয়মিত রক্তদানের উপকারিতাগুলো নিম্নরূপ:
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 rounded-r-xl p-4">
                    <h3 className="font-bold text-gray-800">১. হৃদরোগ ও স্ট্রোকের ঝুঁকি কমায়</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      শরীরে অতিরিক্ত আয়রনের উপস্থিতি ধমনী ব্লক করে হৃদরোগের ঝুঁকি বাড়ায়। রক্তদানের ফলে বাড়তি আয়রনের মাত্রা নিয়ন্ত্রণে থাকে, যা হার্ট ভালো রাখে।
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 rounded-r-xl p-4">
                    <h3 className="font-bold text-gray-800">২. নতুন রক্তকণিকা উৎপাদন ত্বরান্বিত করে</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      রক্ত দেওয়ার পর অস্থির মজ্জা (Bone marrow) উদ্দীপিত হয় এবং দ্রুত নতুন লোহিত রক্তকণিকা তৈরি করে। এতে রক্ত সঞ্চালন আরও সতেজ ও উন্নত হয়।
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 rounded-r-xl p-4">
                    <h3 className="font-bold text-gray-800">৩. বিনামূল্যে স্বাস্থ্য পরীক্ষা</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      প্রতিবার রক্তদানের পূর্বে রক্তের গ্রুপ নিশ্চিত করা এবং হেপাটাইটিস বি ও সি, এইডস, সিফিলিস ও ম্যালেরিয়ার মতো ৫টি মারাত্মক রোগের বিনামূল্যে স্ক্রিনিং হয়।
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 rounded-r-xl p-4">
                    <h3 className="font-bold text-gray-800">৪. ক্যালোরি বার্ন এবং ওজন নিয়ন্ত্রণ</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      একবার রক্তদান করলে শরীর থেকে প্রায় ৬৫০ ক্যালোরি বার্ন হয়, যা শরীরের বাড়তি মেদ নিয়ন্ত্রণে ও ওজন ঠিক রাখতে সাহায্য করে।
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-red-50 to-white border-l-4 border-red-500 rounded-r-xl p-4">
                    <h3 className="font-bold text-gray-800">৫. মানসিক শান্তি ও আত্মতৃপ্তি</h3>
                    <p className="text-xs text-gray-600 mt-1">
                      এক ব্যাগ রক্ত ৩ জন মুমূর্ষু রোগীর জীবন বাঁচাতে সাহায্য করতে পারে। এই মহান অনুভূতি ডোনারকে অতুলনীয় মানসিক শান্তি দেয়।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. BEFORE & AFTER TIPS */}
          {activeTab === 'tips' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold text-red-600 flex items-center mb-6">
                  <span className="mr-2">📝</span> রক্তদানের আগে ও পরে করণীয়
                </h2>

                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 bg-blue-50/50 p-4 rounded-r-xl">
                    <h3 className="font-bold text-blue-900 mb-2 flex items-center">
                      <span className="mr-2">🕒</span> রক্তদানের পূর্বে:
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1.5 list-inside list-disc pl-1">
                      <li>আগের রাতে পর্যাপ্ত ও ভালো ঘুম (অন্তত ৭-৮ ঘণ্টা) জরুরি।</li>
                      <li>রক্তদানের দিন খালি পেটে যাবেন না, সুষম ও সহজপাচ্য খাবার খেয়ে নিন।</li>
                      <li>রক্তদানের ২-৩ ঘণ্টা পূর্বে প্রচুর পানি (৫-৬ গ্লাস) এবং তরল খাবার পান করুন।</li>
                      <li>অ্যাসপিরিন বা রক্ত পাতলাকারী জাতীয় কোনো ওষুধ রক্তদানের অন্তত ৩ দিন আগে পরিহার করুন।</li>
                      <li>ধূমপান ও মদ্যপান থেকে রক্তদানের পূর্বে ও পরে বিরত থাকুন।</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 bg-orange-50/50 p-4 rounded-r-xl">
                    <h3 className="font-bold text-orange-900 mb-2 flex items-center">
                      <span className="mr-2">🕒</span> রক্তদানের পরে:
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1.5 list-inside list-disc pl-1">
                      <li>রক্ত দেওয়া শেষ হলে অন্তত ১০-১৫ মিনিট শুয়ে বিশ্রাম নিন। হঠাৎ উঠে দাঁড়াবেন না।</li>
                      <li>সুই প্রবেশ করানোর স্থানটিতে অন্তত ৪-৫ ঘণ্টা প্লাস্টার রাখুন এবং ওই হাত দিয়ে ভারী কাজ করবেন না।</li>
                      <li>রক্তদানের পর স্যালাইন, জুস, ফলের রস বা ডাবের পানি পান করুন এবং হালকা খাবার খান।</li>
                      <li>পরবর্তী ২৪ ঘণ্টা কোনো ভারী ব্যায়াম বা কঠোর শারীরিক পরিশ্রম করবেন না।</li>
                      <li>যদি কোনো কারণে মাথা ঘোরে বা দুর্বলতা লাগে, তবে দ্রুত শুয়ে পড়ুন এবং পা দুটো বালিশের সাহায্যে উঁচু করে রাখুন।</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 6. INTERACTIVE ELIGIBILITY CALCULATOR */}
          {activeTab === 'calculator' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold text-red-600 flex items-center mb-4">
                  <span className="mr-2">📱</span> রক্তদানের যোগ্যতা যাচাই ক্যালকুলেটর
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  আপনার বয়স, ওজন এবং শেষ রক্তদানের বিবরণ দিয়ে এখনই পরীক্ষা করুন আপনি আজ রক্ত দান করতে পারবেন কিনা:
                </p>

                <form onSubmit={handleCalculate} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Age */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">বয়স (বছর)*</label>
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="যেমন: ২৫"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-500"
                        required
                      />
                    </div>
                    {/* Weight */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">ওজন (কেজি)*</label>
                      <input
                        type="number"
                        step="0.1"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        placeholder="যেমন: ৫৮"
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-800 placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Gender */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">লিঙ্গ*</label>
                      <div className="flex space-x-4">
                        <label className="flex items-center space-x-2 cursor-pointer bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl flex-1 justify-center">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === 'male'}
                            onChange={() => setGender('male')}
                            className="text-red-600 focus:ring-red-500"
                          />
                          <span className="text-sm text-gray-700 font-medium">পুরুষ</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer bg-gray-50 border border-gray-200 px-4 py-2 rounded-xl flex-1 justify-center">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === 'female'}
                            onChange={() => setGender('female')}
                            className="text-red-600 focus:ring-red-500"
                          />
                          <span className="text-sm text-gray-700 font-medium">নারী</span>
                        </label>
                      </div>
                    </div>

                    {/* Last Donated */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">শেষ কবে রক্ত দিয়েছেন?</label>
                      <select
                        value={lastDonatedMonths}
                        onChange={(e) => setLastDonatedMonths(e.target.value)}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                      >
                        <option value="-1">আগে কখনো দেওয়া হয়নি</option>
                        <option value="1">১ মাস আগে</option>
                        <option value="2">২ মাস আগে</option>
                        <option value="3">৩ মাস আগে</option>
                        <option value="4">৪ মাস বা তার বেশি আগে</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-colors shadow-md mt-4"
                  >
                    যোগ্যতা পরীক্ষা করুন
                  </button>
                </form>

                {/* Calculation Results */}
                {calcResult && (
                  <div className="mt-6 border-t border-gray-150 pt-6 animate-fade-in">
                    {calcResult.status === 'can' && (
                      <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-3xl">✅</span>
                          <h3 className="text-lg font-bold text-green-900">{calcResult.message}</h3>
                        </div>
                        <ul className="list-disc pl-6 text-sm text-green-800 space-y-1">
                          {calcResult.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {calcResult.status === 'cannot' && (
                      <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-3xl">❌</span>
                          <h3 className="text-lg font-bold text-red-900">{calcResult.message}</h3>
                        </div>
                        <ul className="list-disc pl-6 text-sm text-red-800 space-y-1">
                          {calcResult.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {calcResult.status === 'error' && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 text-center">
                        <span className="text-2xl mr-2">⚠️</span>
                        <span className="text-sm text-yellow-800 font-medium">{calcResult.message}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 7. BLOOD COMPATIBILITY SELECTOR */}
          {activeTab === 'compatibility' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold text-red-600 flex items-center mb-4">
                  <span className="mr-2">🧬</span> রক্তের গ্রুপ ম্যাচিং ও সামঞ্জস্যতা চার্ট
                </h2>
                <p className="text-sm text-gray-600 mb-6">
                  আপনার রক্তের গ্রুপ নির্বাচন করে দেখুন আপনি কাদেরকে রক্ত দান করতে পারবেন এবং কাদের থেকে রক্ত গ্রহণ করতে পারবেন:
                </p>

                {/* Group Selector Buttons */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {Object.keys(compatibilityData).map((group) => (
                    <button
                      key={group}
                      onClick={() => setSelectedGroup(group)}
                      className={`py-3 rounded-xl font-bold transition-all text-center ${
                        selectedGroup === group
                          ? 'bg-red-600 text-white shadow-md transform scale-105 border-transparent'
                          : 'bg-gray-50 text-gray-800 border border-gray-200 hover:bg-gray-100'
                      }`}
                    >
                      {group}
                    </button>
                  ))}
                </div>

                {/* Selected Group details */}
                <div className="bg-red-50 bg-opacity-30 rounded-2xl p-6 border border-red-100">
                  <div className="text-center mb-4">
                    <span className="inline-block bg-red-600 text-white text-2xl font-extrabold px-6 py-2.5 rounded-full shadow-sm mb-2">
                      {selectedGroup}
                    </span>
                    <p className="text-sm text-red-900 font-medium">{compatibilityData[selectedGroup].desc}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {/* Can Give */}
                    <div className="bg-white border border-red-100 p-4 rounded-xl shadow-sm">
                      <h4 className="font-bold text-red-700 flex items-center mb-2.5">
                        <span className="mr-1.5">🎁</span> রক্ত দিতে পারবেন (Donate To):
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {compatibilityData[selectedGroup].give.map((grp) => (
                          <span key={grp} className="bg-red-100 text-red-700 font-semibold px-3 py-1.5 rounded-lg text-xs">
                            {grp}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Can Receive */}
                    <div className="bg-white border border-red-100 p-4 rounded-xl shadow-sm">
                      <h4 className="font-bold text-red-700 flex items-center mb-2.5">
                        <span className="mr-1.5">💉</span> রক্ত নিতে পারবেন (Receive From):
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {compatibilityData[selectedGroup].receive.map((grp) => (
                          <span key={grp} className="bg-red-100 text-red-700 font-semibold px-3 py-1.5 rounded-lg text-xs">
                            {grp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 8. HELPLINES & FAQ */}
          {activeTab === 'helplines_faq' && (
            <div className="space-y-6 animate-fade-in">
              {/* Helplines */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold text-red-600 flex items-center mb-4">
                  <span className="mr-2">☎️</span> জরুরি ব্লাড ব্যাংক ও হটলাইন সমূহ
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  রক্তের প্রয়োজনে বা যেকোনো জিজ্ঞাসায় সরাসরি কল করতে পারেন নিচের হটলাইনগুলোতে:
                </p>

                <div className="grid grid-cols-1 gap-3">
                  {/* Helpline 1 */}
                  <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-150">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">কোয়ান্টাম ফাউন্ডেশন ব্লাড সেন্টার</h4>
                      <p className="text-xs text-gray-500 mt-0.5">ঢাকা, বাংলাদেশ</p>
                    </div>
                    <a
                      href="tel:+8801714010300"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-green-700 transition-colors flex items-center"
                    >
                      📞 কল করুন
                    </a>
                  </div>

                  {/* Helpline 2 */}
                  <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-150">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">সন্ধানী (ঢাকা মেডিকেল কলেজ শাখা)</h4>
                      <p className="text-xs text-gray-500 mt-0.5">জরুরি রক্ত সরবরাহ</p>
                    </div>
                    <a
                      href="tel:+88029668690"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-green-700 transition-colors flex items-center"
                    >
                      📞 কল করুন
                    </a>
                  </div>

                  {/* Helpline 3 */}
                  <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-150">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">বাঁধন (ঢাকা বিশ্ববিদ্যালয়)</h4>
                      <p className="text-xs text-gray-500 mt-0.5">স্বেচ্ছাসেবী রক্তদাতাদের সংগঠন</p>
                    </div>
                    <a
                      href="tel:+8801534298101"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-green-700 transition-colors flex items-center"
                    >
                      📞 কল করুন
                    </a>
                  </div>

                  {/* Helpline 4 */}
                  <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-150">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">রেড ক্রিসেন্ট সোসাইটি ব্লাড ব্যাংক</h4>
                      <p className="text-xs text-gray-500 mt-0.5">জাতীয় সদর দপ্তর, ঢাকা</p>
                    </div>
                    <a
                      href="tel:+88029330188"
                      className="bg-green-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-green-700 transition-colors flex items-center"
                    >
                      📞 কল করুন
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold text-red-600 flex items-center mb-4">
                  <span className="mr-2">❓</span> সাধারণ জিজ্ঞাসা ও ভুল ধারণা (FAQs)
                </h2>

                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                      >
                        <span className="font-bold text-gray-800 text-sm pr-4">{faq.q}</span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                            openFaq === idx ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {openFaq === idx && (
                        <div className="p-4 bg-white border-t border-gray-100 text-xs text-gray-600 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

      <BottomNavbar />
      <Footer />

      {/* Embedded CSS for smooth animations */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MedicalInfo;

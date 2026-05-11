
import TopNavbar from '@/components/TopNavbar';
import BottomNavbar from '@/components/BottomNavbar';
import Banner from '@/components/Banner';
import HomeCards from '@/components/HomeCards';
import BloodInfoTable from '@/components/BloodInfoTable';
import Footer from '@/components/Footer';

export const metadata = {
  title: "ফ্রী ব্লাড ডোনার স্বেচ্ছাসেবী ফাউন্ডেশন",
  description: "  রক্তদান করুন এবং জীবন বাঁচান মানুষের হাতে হাত দিয়ে। রক্তদাতা হোন আপনিও।",
  keywords: "Blood Donation Practice Project, blood donation, blood donors, save lives, emergency blood, blood bank, donate blood, Bangladesh, রক্তদান, রক্তদাতা",
  openGraph: {
    title: "ফ্রী ব্লাড ডোনার স্বেচ্ছাসেবী ফাউন্ডেশন",
    description: "  রক্তদান করুন এবং জীবন বাঁচান মানুষের হাতে হাত দিয়ে। রক্তদাতা হোন আপনিও।",
    siteName: "ফ্রী ব্লাড ডোনার স্বেচ্ছাসেবী ফাউন্ডেশন",
    url: 'https://blood-donation-practice-project.vercel.app',
    images: [
      {
        url: '/images/blood-doctor.jfif',
        width: 1200,
        height: 630,
        alt: '  রক্তদান করুন এবং জীবন বাঁচান মানুষের হাতে হাত দিয়ে। রক্তদাতা হোন আপনিও।',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ফ্রী ব্লাড ডোনার স্বেচ্ছাসেবী ফাউন্ডেশন',
    description: '  রক্তদান করুন এবং জীবন বাঁচান মানুষের হাতে হাত দিয়ে। রক্তদাতা হোন আপনিও।',
    site: '@BloodDonationProject',
    images: ['/images/blood-doctor.jfif'],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />
      <Banner />

      {/* Main content area - space for middle content */}
      <div className="pb-20">
        <HomeCards />
        <div className="mt-8">
          <BloodInfoTable />
        </div>
      </div>

      <BottomNavbar />
      <Footer />
    </div>
  );
}

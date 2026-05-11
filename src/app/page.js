
import TopNavbar from '@/components/TopNavbar';
import BottomNavbar from '@/components/BottomNavbar';
import Banner from '@/components/Banner';
import HomeCards from '@/components/HomeCards';
import BloodInfoTable from '@/components/BloodInfoTable';
import Footer from '@/components/Footer';

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

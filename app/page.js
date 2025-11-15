
import MainCarousel from "@/components/sections/home/MainCarousel";
import AboutSection from "@/components/sections/home/AboutSection";
import FeedbackSections from "@/components/sections/home/FeedbackSections";
import PackagesSection from "@/components/sections/home/PackagesSection";
import FaqSection from "@/components/sections/home/FaqSection";
import WhyBookSection from "@/components/sections/home/WhyBookSection";
import TailorMadeSection from "@/components/sections/home/TailorMadeSection";
import TourCategorySection from "@/components/sections/home/TourCategorySection";
import DestinationsSection from "@/components/sections/home/DestinationsSection";
import PhotoCollageSection from "@/components/sections/home/PhotoCollageSection";
import MemberSection from "@/components/sections/home/MemberSection";
import ServicesOverviewSection from "@/components/sections/home/ServicesOverviewSection";
import InsightsSection from "@/components/sections/home/InsightsSection";
import SustainableTourismSection from "@/components/sections/home/SustainableTourismSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <>
    <Header />
    <div className="mt-[-100px] sm:mt-[-100px] min-h-screen overflow-hidden">
      {/* Hero Section */}
      <MainCarousel />
      
      {/* Company Introduction */}
      <AboutSection />
      <ServicesOverviewSection />
      <WhyBookSection />
      
      {/* Travel Options */}
      <TourCategorySection />
      <DestinationsSection />
      <PackagesSection />
      
      {/* Customization & Experience */}
      <TailorMadeSection />
      <PhotoCollageSection />
      
      {/* Travel Insights */}
      <InsightsSection />
      
      {/* Sustainable Tourism */}
      <SustainableTourismSection />
      
      {/* Social Proof & Support */}
      <FeedbackSections />
      <FaqSection />
      
      {/* Trust & Credentials */}
      <MemberSection />
    </div>
    <Footer />
    </>
  );
}

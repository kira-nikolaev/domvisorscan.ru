import HeroSection from '@/components/HeroSection';
import LogosCarousel from '@/components/LogosCarousel';
import JTBDSection from '@/components/JTBDSection';
import HowItWorks from '@/components/HowItWorks';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function AllComponentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Logos Carousel */}
      <LogosCarousel />
      
      {/* JTBD Section */}
      <JTBDSection />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  );
}

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DestinationsSection from '@/components/DestinationsSection';
import WeatherInfoSection from '@/components/WeatherInfoSection';
import DealsBanner from '@/components/DealsBanner';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTACardsSection from '@/components/CTACardsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <DestinationsSection />
      <WeatherInfoSection />
      <DealsBanner />
      <TestimonialsSection />
      <CTACardsSection />
      <Footer />
    </main>
  );
}
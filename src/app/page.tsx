import Header from '@/components/header';
import Hero from '@/components/hero';
import FeaturedPets from '@/components/featured-pets';
import HowItWorks from '@/components/how-it-works';
import Testimonials from '@/components/testimonials';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedPets />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

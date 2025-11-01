import Header from '@/components/header';
import Hero from '@/components/hero';
import FeaturedServices from '@/components/featured-services';
import OurProcess from '@/components/our-process';
import Testimonials from '@/components/testimonials';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedServices />
        <OurProcess />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

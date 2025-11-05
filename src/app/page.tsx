'use client';
import Header from '@/components/header';
import Hero from '@/components/hero';
import FeaturedServices from '@/components/featured-services';
import OurProcess from '@/components/our-process';
import Testimonials from '@/components/testimonials';
import Faq from '@/components/faq';
import AppointmentForm from '@/components/appointment-form';
import Footer from '@/components/footer';
import BottomNav from '@/components/bottom-nav';
import ScrollToTop from '@/components/scroll-to-top';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pb-16">
        <Hero />
        <FeaturedServices />
        <AppointmentForm />
        <OurProcess />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
      <BottomNav />
      <ScrollToTop />
    </div>
  );
}

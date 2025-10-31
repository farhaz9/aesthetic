import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Gallery from '@/components/gallery';
import Testimonials from '@/components/testimonials';
import AppointmentForm from '@/components/appointment-form';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import BottomNavBar from '@/components/bottom-nav-bar';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Gallery />
        <Testimonials />
        <AppointmentForm />
        <Faq />
      </main>
      <Footer />
      <BottomNavBar />
    </div>
  );
}

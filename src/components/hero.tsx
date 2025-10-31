'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-center text-white p-0">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
         <iframe
            className="absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/nUPgg_L5ko4?autoplay=1&mute=1&loop=1&playlist=nUPgg_L5ko4&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="background-video"
        ></iframe>
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent animate-text-gradient bg-[200%_auto]">
          Redefining Beauty, Restoring Confidence
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
          Experience world-class cosmetic and beauty treatments at Aurelian Aesthetics. Your journey to a more radiant you begins here.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="#appointment">Book a Consultation</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="#services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
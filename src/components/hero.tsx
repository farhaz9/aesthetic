'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] w-full flex items-center p-0">
       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 z-10" />
       <Image
          src="https://picsum.photos/seed/clinic-hero/1800/1200"
          alt="A modern and clean clinic interior"
          fill
          className="object-cover"
          priority
          data-ai-hint="modern clinic"
        />
      <div className="container relative z-20 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
        <div className="text-center md:text-left text-white">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Rediscover Your
            <br />
            <span className="text-accent">Natural Confidence</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-white/90">
            State-of-the-art solutions in hair restoration and cosmetic enhancement, tailored to your unique goals.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Button size="lg" asChild>
              <Link href="#services">Explore Services</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
              <Link href="#contact">Book a Consultation</Link>
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
}

'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] w-full flex items-center justify-center text-center text-white p-0">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
         <Image
            src="https://images-five-gilt.vercel.app/1759649928.png"
            alt="Beautiful woman with elegant hairstyle"
            fill
            className="object-cover"
            priority
         />
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

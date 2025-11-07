'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] w-full flex items-center p-0">
       <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-orange-950/30 to-yellow-600/20 z-10" />
       <Image
          src="https://images-five-gilt.vercel.app/hair%20patch%20smaller.png"
          alt="A man with a full head of hair after receiving a non-surgical hair patch"
          fill
          className="object-cover object-center"
          priority
          data-ai-hint="hair patch"
        />
      <div className="container relative z-20 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
        <div className="text-center md:text-left text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="block animate-fade-in-up fade-in-up-1">The Fastest Way to a Full Head of Hair.</span>
            <span className="text-accent block animate-fade-in-up fade-in-up-2">Instant, Natural-Looking Results.</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-white/90 animate-fade-in-up fade-in-up-3">
            Experience Delhi's finest hair transplant and hair patch solutions, delivered with discretion and expertise in the comfort of your own home.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in-up fade-in-up-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/treatments">Our Solutions</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black w-full sm:w-auto">
              <Link href="/#appointment">Book At-Home Visit</Link>
            </Button>
          </div>
        </div>
        
      </div>
    </section>
  );
}

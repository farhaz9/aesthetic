'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative h-[85vh] min-h-[600px] w-full flex items-center p-0 bg-secondary">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Find Your New <br />
            <span className="text-primary">Best Friend</span>
          </h1>
          <p className="mt-4 max-w-xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground">
            Open your heart and home to a rescue animal. Start your adoption journey today and give a deserving pet a second chance.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Button size="lg" asChild>
              <Link href="#pets">Meet the Pets</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#about">Learn About Adoption</Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <Image
              src="https://picsum.photos/seed/hero-dog/1000/1200"
              alt="A happy dog looking at the camera"
              fill
              className="object-cover"
              priority
              data-ai-hint="happy dog"
          />
        </div>
      </div>
    </section>
  );
}

'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuredServicesData = [
  {
    name: 'Custom Hair Patch Solutions',
    description: 'Get a seamless, non-surgical hair patch made from 100% human hair for an undetectable, confident look.',
    imageId: 'service-injectables',
    link: '/treatments',
  },
  {
    name: 'Painless FUE Hair Transplant',
    description: 'Our cutting-edge FUE technique ensures natural, dense results with minimal downtime, all performed by leading surgeons in Delhi.',
    imageId: 'service-hair-transplant',
    link: '/treatments',
  },
  {
    name: 'Direct Hair Implantation (DHI)',
    description: 'The most advanced method for maximum density and perfectly natural hairlines, performed in the privacy of your home.',
    imageId: 'service-skincare',
    link: '/treatments',
  },
  {
    name: 'PRP & GFC Therapy',
    description: 'Stimulate natural hair growth and strengthen existing hair with our advanced, non-surgical therapies, available at home.',
    imageId: 'service-body',
    link: '/treatments',
  },
];

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find(img => img.id === id);
}

export default function FeaturedServices() {
  return (
    <section id="services" className="bg-secondary relative">
      <div className="absolute inset-0 -z-0 bg-gradient-radial from-amber-100/50 to-transparent to-70% pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Premier At-Home Services</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            We deliver Delhi's best hair restoration expertise right to your doorstep, ensuring privacy, comfort, and exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServicesData.map((service) => {
            const image = getImage(service.imageId);
            return (
              <div key={service.name} className="relative group/card overflow-hidden rounded-lg">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg opacity-75 group-hover/card:opacity-100 transition duration-1000 group-hover/card:duration-200 animate-glowing-border"></div>
                <Card className="relative overflow-hidden transition-all duration-300 group-hover/card:shadow-xl group flex flex-col bg-card h-full">
                  <CardContent className="p-0">
                    {image && (
                        <div className="aspect-[4/3] overflow-hidden">
                            <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={600}
                            height={450}
                            data-ai-hint={image.imageHint}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover/card:scale-110"
                            />
                        </div>
                    )}
                  </CardContent>
                  <CardHeader>
                    <CardTitle className="font-headline text-xl group-hover/card:text-primary transition-colors duration-300">{service.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <Button variant="outline" asChild className="w-full mt-auto">
                        <Link href={service.link}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
            <Button size="lg">
                <Link href="/treatments">View All Solutions</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

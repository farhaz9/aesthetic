'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featuredServicesData = [
  {
    name: 'FUE Hair Transplant',
    description: 'Minimally invasive follicular unit extraction for natural, permanent results.',
    imageId: 'service-hair-transplant',
    link: '#',
  },
  {
    name: 'Cosmetic Injectables',
    description: 'Reduce fine lines and restore volume with our range of dermal fillers.',
    imageId: 'service-injectables',
    link: '#',
  },
  {
    name: 'Advanced Skincare',
    description: 'Revitalize your skin with medical-grade facials and laser treatments.',
    imageId: 'service-skincare',
    link: '#',
  },
  {
    name: 'Body Contouring',
    description: 'Non-surgical solutions to shape and sculpt your body with lasting results.',
    imageId: 'service-body',
    link: '#',
  },
];

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find(img => img.id === id);
}

export default function FeaturedServices() {
  return (
    <section id="services" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            We combine artistry with medical science to deliver exceptional, personalized results. Explore our most sought-after treatments.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServicesData.map((service) => {
            const image = getImage(service.imageId);
            return (
              <Card key={service.name} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group flex flex-col">
                <CardContent className="p-0">
                  {image && (
                      <div className="aspect-[4/3] overflow-hidden">
                          <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={600}
                          height={450}
                          data-ai-hint={image.imageHint}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                          />
                      </div>
                  )}
                </CardContent>
                <CardHeader>
                  <CardTitle className="font-headline text-xl group-hover:text-primary transition-colors duration-300">{service.name}</CardTitle>
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
            );
          })}
        </div>
        <div className="text-center mt-12">
            <Button size="lg">
                <Link href="#">Book a Consultation</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}


'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import BottomNav from '@/components/bottom-nav';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

const featuredServicesData = [
  {
    name: 'Custom Hair Patch Solutions',
    description: 'Get a seamless, non-surgical hair patch made from 100% human hair. Our experts visit you to ensure a perfect match for your hair type, color, and style, delivering an undetectable and confident look.',
    imageId: 'service-injectables',
    link: '#',
  },
  {
    name: 'Hair Transplant',
    description: 'Our cutting-edge Follicular Unit Extraction (FUE) technique ensures natural, dense results with minimal downtime. The entire procedure is performed by Delhi’s leading surgeons in the comfort and privacy of your home.',
    imageId: 'service-hair-transplant',
    link: '#',
  },
  {
    name: 'Growth Factor Concentrate (GFC) Therapy',
    description: 'Stimulate natural hair growth and strengthen your follicles with Growth Factor Concentrate (GFC) therapy. A non-surgical boost for healthier, thicker hair, available at home.',
    imageId: 'service-body',
    link: '#',
  },
];

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find(img => img.id === id);
}

export default function TreatmentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Header />
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold font-headline">Our At-Home Solutions</h1>
              <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                ElysiarCrown brings world-class hair restoration and non-surgical solutions right to your doorstep in Delhi.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {featuredServicesData.map((service, index) => {
                const image = getImage(service.imageId);
                return (
                  <div key={service.name} className="group flex flex-col md:flex-row items-center bg-card p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    {image && (
                      <div className="md:w-1/3 w-full mb-6 md:mb-0 md:mr-6 overflow-hidden rounded-lg">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={400}
                          height={400}
                          data-ai-hint={image.imageHint}
                          className="object-cover w-full h-full aspect-square transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    )}
                    <div className="md:w-2/3 w-full flex flex-col justify-center">
                      <h3 className="text-2xl font-headline font-bold mb-2 text-primary">{service.name}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <Button variant="default" asChild className="w-full md:w-auto mt-auto self-start">
                        <Link href="/#appointment">
                          Book At-Home Visit <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}

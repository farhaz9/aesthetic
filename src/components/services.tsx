'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

const servicesData = [
  {
    title: 'Hair Patches',
    description: 'Non-surgical, natural-looking hair patches for instant volume and coverage. Custom-made to match your hair perfectly.',
    imageId: 'hair-patch-service'
  },
  {
    title: 'Hair Transplants',
    description: 'Advanced FUE and FUT hair transplant procedures for permanent, natural-looking results. Restore your hairline and confidence.',
    imageId: 'hair-transplant-service'
  },
  {
    title: 'Cosmetic Procedures',
    description: 'A wide range of surgical and non-surgical treatments to enhance your natural beauty, from facelifts to fillers.',
    imageId: 'cosmetic-procedure-service'
  },
  {
    title: 'Bridal & Groom Packages',
    description: 'Look your absolute best on your special day with our curated packages including skin, hair, and makeup services.',
    imageId: 'bridal-groom-service'
  },
];

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find(img => img.id === id);
}

export default function Services() {
  return (
    <section id="services" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Signature Services</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Crafted with precision, care, and an artist's touch. We offer bespoke treatments to meet your unique aesthetic goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => {
            const image = getImage(service.imageId);
            return (
              <Card key={service.title} className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {image && (
                     <div className="mb-4 aspect-video overflow-hidden rounded-md">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={600}
                          height={400}
                          data-ai-hint={image.imageHint}
                          className="object-cover w-full h-full"
                        />
                     </div>
                  )}
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

'use client';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import Link from 'next/link';
import { Badge } from './ui/badge';

const featuredPetsData = [
  {
    name: 'Buddy',
    breed: 'Golden Retriever',
    age: '2 years',
    imageId: 'featured-dog-1',
    tags: ['Friendly', 'Active', 'Loves Kids'],
  },
  {
    name: 'Luna',
    breed: 'Tabby Mix',
    age: '1 year',
    imageId: 'featured-cat-1',
    tags: ['Playful', 'Curious', 'Cuddly'],
  },
  {
    name: 'Rocky',
    breed: 'Poodle Mix',
    age: '3 years',
    imageId: 'featured-dog-2',
    tags: ['Smart', 'Hypoallergenic', 'Loyal'],
  },
  {
    name: 'Misty',
    breed: 'Siamese',
    age: '4 years',
    imageId: 'featured-cat-2',
    tags: ['Vocal', 'Affectionate', 'Graceful'],
  },
];

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find(img => img.id === id);
}

export default function FeaturedPets() {
  return (
    <section id="pets" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Waiting for a Home</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Meet some of our adorable pets ready for adoption. Your new best friend might be just a click away!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPetsData.map((pet) => {
            const image = getImage(pet.imageId);
            return (
              <Card key={pet.name} className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group flex flex-col">
                <CardContent className="p-0">
                  {image && (
                      <div className="aspect-square overflow-hidden">
                          <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={600}
                          height={600}
                          data-ai-hint={image.imageHint}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                          />
                      </div>
                  )}
                </CardContent>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors duration-300">{pet.name}</CardTitle>
                  <CardDescription className="text-base">{pet.breed} &bull; {pet.age}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {pet.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                  <Button asChild className="w-full mt-auto">
                      <Link href="#">
                          Adopt {pet.name}
                      </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="text-center mt-12">
            <Button size="lg" variant="outline">
                <Link href="#">View All Pets</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}

'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

const galleryCategories = ['All', 'Hair Transplant', 'Cosmetic Procedures', 'Bridal Packages'];

const galleryItems = [
  {
    category: 'Hair Transplant',
    beforeId: 'gallery-transplant-before-1',
    afterId: 'gallery-transplant-after-1',
  },
  {
    category: 'Cosmetic Procedures',
    beforeId: 'gallery-cosmetic-before-1',
    afterId: 'gallery-cosmetic-after-1',
  },
  {
    category: 'Bridal Packages',
    beforeId: 'gallery-bridal-before-1',
    afterId: 'gallery-bridal-after-1',
  },
  {
    category: 'Hair Transplant',
    beforeId: 'gallery-transplant-before-2',
    afterId: 'gallery-transplant-after-2',
  },
];

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find(img => img.id === id);
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Transformations Gallery</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Seeing is believing. Explore the stunning results our clients have achieved.
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {galleryCategories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className="capitalize"
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => {
              const beforeImg = getImage(item.beforeId);
              const afterImg = getImage(item.afterId);
              if (!beforeImg || !afterImg) return null;

              return(
                <div key={`${item.beforeId}-${item.afterId}`} className="space-y-4">
                    <h3 className="text-xl font-headline text-center">{item.category} Transformation</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <Card className="overflow-hidden group">
                            <CardContent className="p-0 relative">
                                <Image src={beforeImg.imageUrl} alt={beforeImg.description} width={600} height={600} data-ai-hint={beforeImg.imageHint} className="object-cover aspect-square w-full h-auto transition-transform duration-300 group-hover:scale-105" />
                                <div className="absolute bottom-0 w-full bg-black/50 text-white p-2 text-center font-bold font-headline">BEFORE</div>
                            </CardContent>
                        </Card>
                        <Card className="overflow-hidden group">
                            <CardContent className="p-0 relative">
                                <Image src={afterImg.imageUrl} alt={afterImg.description} width={600} height={600} data-ai-hint={afterImg.imageHint} className="object-cover aspect-square w-full h-auto transition-transform duration-300 group-hover:scale-105" />
                                <div className="absolute bottom-0 w-full bg-primary text-primary-foreground p-2 text-center font-bold font-headline">AFTER</div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
              )
          })}
        </div>
      </div>
    </section>
  );
}

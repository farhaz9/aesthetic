'use client';

import Image from 'next/image';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

const getImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find(img => img.id === id);
}

export default function BeforeAfter() {
  const beforeImage = getImage('hair-patch-before');
  const afterImage = getImage('hair-patch-after');

  return (
    <section id="before-after" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            See the Instant Transformation
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            Our non-surgical hair patches provide immediate, natural-looking results. Witness the change for yourself.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto items-center">
          {beforeImage && (
            <div className="relative group">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={beforeImage.imageUrl}
                    alt={beforeImage.description}
                    width={800}
                    height={800}
                    data-ai-hint={beforeImage.imageHint}
                    className="object-cover w-full h-full aspect-square"
                  />
                </CardContent>
              </Card>
              <Badge variant="secondary" className="absolute top-4 left-4 text-lg">Before</Badge>
            </div>
          )}
          {afterImage && (
             <div className="relative group">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={afterImage.imageUrl}
                    alt={afterImage.description}
                    width={800}
                    height={800}
                    data-ai-hint={afterImage.imageHint}
                    className="object-cover w-full h-full aspect-square"
                  />
                </CardContent>
              </Card>
              <Badge variant="default" className="absolute top-4 left-4 text-lg">After</Badge>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

const testimonialsData = [
  {
    name: 'Jessica L.',
    quote: "The results of my hair transplant are beyond my wildest dreams. I feel like a new person! The team at Aurelian Aesthetics was so professional and caring throughout the entire process.",
    avatarId: 'testimonial-avatar-1',
  },
  {
    name: 'Mark T.',
    quote: "I was nervous about getting a cosmetic procedure, but the staff made me feel comfortable and confident. The outcome is subtle, natural, and exactly what I wanted. Highly recommend!",
    avatarId: 'testimonial-avatar-2',
  },
  {
    name: 'Sarah & Tom',
    quote: "Our bridal and groom packages were the best decision we made for our wedding. We both looked and felt incredible. Thank you for making our special day even more perfect!",
    avatarId: 'testimonial-avatar-3',
  },
];

const getImage = (id: string): ImagePlaceholder | undefined => {
    return PlaceHolderImages.find(img => img.id === id);
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Words of Confidence</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Hear from our clients who have experienced the Aurelian transformation firsthand.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => {
                const avatar = getImage(testimonial.avatarId);
                return (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                        <Card className="h-full">
                            <CardContent className="flex flex-col items-center text-center justify-center p-6 gap-4">
                            <p className="text-base italic">"{testimonial.quote}"</p>
                            <div className="flex items-center gap-4 mt-4">
                                <Avatar>
                                {avatar && <AvatarImage src={avatar.imageUrl} alt={avatar.description} data-ai-hint={avatar.imageHint} />}
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <span className="text-lg font-semibold font-headline">{testimonial.name}</span>
                            </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                )
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}

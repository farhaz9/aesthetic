import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

const testimonialsData = [
  {
    name: 'David L.',
    quote: "The results from my hair transplant are incredible, far exceeding my expectations. The team was professional and caring throughout. I feel like I've turned back the clock 10 years!",
    avatarId: 'testimonial-avatar-1',
    procedure: 'FUE Hair Transplant'
  },
  {
    name: 'Jessica M.',
    quote: "I was nervous about getting fillers, but the practitioners at Follicle & Form were amazing. They listened to me and the result is so subtle and natural. I just look refreshed. Highly recommend!",
    avatarId: 'testimonial-avatar-2',
    procedure: 'Cosmetic Injectables'
  },
  {
    name: 'Robert K.',
    quote: "A fantastic experience from the initial consultation to the final follow-up. The professionalism and attention to detail are second to none. My confidence has skyrocketed.",
    avatarId: 'testimonial-avatar-3',
    procedure: 'Hairline Restoration'
  },
];

const getImage = (id: string): ImagePlaceholder | undefined => {
    return PlaceHolderImages.find(img => img.id === id);
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Success Stories</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Hear from our clients who have transformed their lives and regained their confidence.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => {
                const avatar = getImage(testimonial.avatarId);
                return (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-2 h-full">
                        <Card className="h-full flex flex-col bg-secondary border-secondary">
                            <CardContent className="flex flex-col items-center text-center justify-center p-6 gap-4 flex-grow">
                              <p className="text-base italic text-muted-foreground">"{testimonial.quote}"</p>
                              <div className="flex items-center flex-col gap-2 mt-4">
                                  <Avatar>
                                    {avatar && <AvatarImage src={avatar.imageUrl} alt={avatar.description} data-ai-hint={avatar.imageHint} />}
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="text-lg font-semibold font-headline text-primary">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.procedure}</p>
                                  </div>
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

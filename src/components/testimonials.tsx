import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

const testimonialsData = [
  {
    name: 'Sarah J.',
    quote: "Adopting Buddy was the best decision we've ever made. The team at Paws & Claws were so helpful and made the process a breeze. Our family feels complete now!",
    avatarId: 'testimonial-avatar-1',
    pet: 'Buddy, Golden Retriever'
  },
  {
    name: 'Mike R.',
    quote: "I was looking for a calm companion, and the staff pointed me to Luna. She's the sweetest cat. I'm so grateful for their guidance and for bringing this gentle soul into my life.",
    avatarId: 'testimonial-avatar-2',
    pet: 'Luna, Domestic Shorthair'
  },
  {
    name: 'The Lee Family',
    quote: "We adopted two bonded kittens, and it's been double the fun! The facility was so clean, and you can tell they really care about the animals. A wonderful experience from start to finish.",
    avatarId: 'testimonial-avatar-3',
    pet: 'Milo & Otis, Kittens'
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
          <h2 className="text-3xl md:text-4xl font-bold">Happy Tails</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Real stories from families who found their furry friends through Paws & Claws.
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
                        <Card className="h-full flex flex-col">
                            <CardContent className="flex flex-col items-center text-center justify-center p-6 gap-4 flex-grow">
                              <p className="text-base italic text-muted-foreground">"{testimonial.quote}"</p>
                              <div className="flex items-center flex-col gap-2 mt-4">
                                  <Avatar>
                                    {avatar && <AvatarImage src={avatar.imageUrl} alt={avatar.description} data-ai-hint={avatar.imageHint} />}
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="text-lg font-semibold font-headline text-primary">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.pet}</p>
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

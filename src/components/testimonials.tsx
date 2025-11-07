'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const testimonialsData = [
  {
    name: 'Amit S.',
    quote: "The at-home service was a game-changer. The professionalism was top-notch, and the hair transplant results are better than I ever imagined. ElysiarCrown is truly the best in Delhi.",
    avatarId: 'testimonial-avatar-1',
    procedure: 'FUE Hair Transplant at Home'
  },
  {
    name: 'Priya V.',
    quote: "I was hesitant about a hair patch, but the team made me so comfortable. The process was discreet, and my new hair looks completely natural. My confidence is through the roof!",
    avatarId: 'testimonial-avatar-2',
    procedure: 'Custom Hair Patch'
  },
  {
    name: 'Rajesh K.',
    quote: "Incredible experience from start to finish. Having the procedure at home made it so much less stressful. The attention to detail and care from the team was exceptional. Highly recommended!",
    avatarId: 'testimonial-avatar-3',
    procedure: 'DHI Hair Transplant at Home'
  },
];

const getImage = (id: string): ImagePlaceholder | undefined => {
    return PlaceHolderImages.find(img => img.id === id);
}

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section id="testimonials" className="bg-background" ref={ref}>
      <div className={cn("container mx-auto px-4 transition-opacity duration-1000 ease-out", inView ? 'animate-fade-in-up' : 'opacity-0')}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Success Stories from Delhi
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Hear from our clients who transformed their look and confidence with our discreet at-home services.
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

'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';


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

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M12 10.59V12h4.74c-.2 1.39-1.56 3-4.74 3-2.83 0-5.16-2.33-5.16-5.16S9.17 4.67 12 4.67c1.53 0 2.65.64 3.28 1.25l2.14-2.14C15.82 2.33 14.13 1.5 12 1.5 8.12 1.5 5 4.62 5 8.5s3.12 7 7 7c4.15 0 6.8-2.9 6.8-6.92 0-.46-.05-.86-.11-1.28H12z"/></svg>
)

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section id="testimonials" className="bg-background" ref={ref}>
      <div className={cn("container mx-auto px-4 transition-opacity duration-1000 ease-out", inView ? 'animate-fade-in-up' : 'opacity-0')}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Success Stories from Delhi</h2>
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
                              <div className="flex items-center gap-2 mb-2">
                                <div className="flex items-center gap-0.5 text-yellow-500">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                  ))}
                                </div>
                                <GoogleIcon />
                              </div>
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

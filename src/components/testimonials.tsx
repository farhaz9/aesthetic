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
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C42.012,35.195,44,30.028,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
);


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
                              <div className="flex flex-col items-center gap-2">
                                <div className="flex items-center gap-2">
                                  <GoogleIcon />
                                  <span className="font-semibold text-muted-foreground">Google Reviews</span>
                                </div>
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                  ))}
                                </div>
                              </div>
                              <p className="text-base italic text-muted-foreground">"{testimonial.quote}"</p>
                              <div className="flex items-center flex-col gap-2 mt-4">
                                  <Avatar>
                                    {avatar && <AvatarImage src={avatar.imageUrl} alt={avatar.description} data-ai-hint={avatar.imageHint} />}
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="text-lg font-semibold font-headline text-foreground">{testimonial.name}</p>
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

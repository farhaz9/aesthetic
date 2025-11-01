import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Search, Users, Home } from 'lucide-react';


const steps = [
  {
    title: '1. Find Your Friend',
    description: "Browse our online profiles of lovable dogs and cats. Filter by age, breed, and size to find your perfect match.",
    icon: <Search className="w-10 h-10 text-primary" />,
  },
  {
    title: '2. Meet & Greet',
    description: "Schedule a visit to our center to meet the pet you're interested in. Our staff will facilitate a friendly introduction.",
    icon: <Users className="w-10 h-10 text-primary" />,
  },
  {
    title: '3. Take Them Home',
    description: "Once you've found the right companion, complete the adoption paperwork and get ready to welcome your new family member!",
    icon: <Home className="w-10 h-10 text-primary" />,
  },
]

export default function HowItWorks() {
  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Adoption Made Easy</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Our simple three-step process makes finding your new best friend a joyful and stress-free experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.title} className="text-center flex flex-col items-center">
              <div className="mb-4 bg-primary/10 rounded-full p-4 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-2xl font-headline font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

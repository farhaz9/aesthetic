'use client';

import { Award, HeartHandshake, Smile, Stethoscope } from 'lucide-react';
import AnimatedNumber from './animated-number';

const stats = [
  { value: 20, label: 'Years of Experience', icon: Stethoscope },
  { value: 5000, label: 'Happy Clients', icon: Smile },
  { value: 1, label: 'Top Rated Clinic Award', textValue: 'Top Rated', icon: Award },
  { value: 100, label: 'Satisfaction Guaranteed', icon: HeartHandshake, suffix: '%' },
];

export default function Stats() {
  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center group">
              <stat.icon className="w-10 h-10 mb-2 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
              <div className="animate-text-gradient bg-gradient-to-r from-primary via-secondary-foreground to-primary bg-[200%_auto] text-transparent bg-clip-text">
                <p className="text-3xl md:text-4xl font-bold">
                  {stat.textValue ? (
                    stat.textValue
                  ) : (
                    <>
                      <AnimatedNumber value={stat.value} />
                      {stat.value === 5000 ? '+' : stat.suffix || ''}
                    </>
                  )}
                </p>
              </div>
              <p className="text-sm md:text-base text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

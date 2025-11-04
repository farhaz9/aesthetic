'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Preloader() {

  return (
    <div className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ease-out'
    )}>
        <div className="flex flex-col items-center gap-4 animate-pulse">
             <Image 
                src="https://images-five-gilt.vercel.app/elysier%20logo.png" 
                alt="ElysiarCrown Logo" 
                width={80} 
                height={80} 
                className="h-20 w-20"
                priority
              />
            <p className="font-headline text-lg text-primary">ElysiarCrown</p>
        </div>
    </div>
  );
}

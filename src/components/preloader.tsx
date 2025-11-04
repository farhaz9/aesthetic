'use client';

import { cn } from '@/lib/utils';

const PreloaderIcon = () => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="80" 
        height="80" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="hsl(var(--primary))" 
        strokeWidth="1" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <path d="M9 3l-2 10M15 3l2 10" className="preloader-draw" style={{ animationDelay: '0s' }} />
        <path d="M12 13a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4v0Z" className="preloader-draw" style={{ animationDelay: '0.5s' }}/>
        <path d="M8 21a2 2 0 0 0 2-2" className="preloader-draw" style={{ animationDelay: '1s' }}/>
        <path d="M16 21a2 2 0 0 1-2-2" className="preloader-draw" style={{ animationDelay: '1s' }}/>
    </svg>
)

export default function Preloader() {

  return (
    <div className={cn(
        'fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ease-out'
    )}>
        <div className="flex flex-col items-center gap-4">
            <PreloaderIcon />
            <p className="font-headline text-lg text-primary animate-pulse">ElysiarCrown</p>
        </div>
    </div>
  );
}

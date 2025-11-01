'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Stethoscope, Phone, CalendarCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" >
       <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
       <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" fill="currentColor"></path>
       <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a4 4 0 0 1 -4 -4v-1a.5 .5 0 0 0 -1 0v-1a.5 .5 0 0 0 1 0" fill="white"></path>
    </svg>
)

const navLinks = [
  { href: '/#services', label: 'Treatments', icon: Stethoscope },
  { href: '/contact', label: 'Contact', icon: Phone },
  { href: '/', label: 'Home', icon: Home },
  { href: '/#appointment', label: 'Appointment', icon: CalendarCheck },
  { href: 'https://wa.me/13105550101', label: 'WhatsApp', icon: WhatsAppIcon },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t md:hidden">
      <div className="container mx-auto px-2">
        <div className="flex justify-around items-center h-16">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === link.href : pathname.startsWith(link.href) || (link.href.startsWith('/#') && pathname === '/');
            const isWhatsApp = link.label === 'WhatsApp';
            return (
              <Link
                key={link.href}
                href={link.href}
                target={isWhatsApp ? '_blank' : '_self'}
                className={cn(
                  'flex flex-col items-center justify-center text-xs font-medium transition-colors flex-1 text-center px-1',
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary',
                  isWhatsApp && 'animate-blink-whatsapp'
                )}
              >
                <link.icon className="w-6 h-6 mb-1" />
                <span className="truncate">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

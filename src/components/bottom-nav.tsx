'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Stethoscope, Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/#services', label: 'Treatments', icon: Stethoscope },
  { href: '/contact', label: 'Contact', icon: Phone },
  { href: 'https://wa.me/13105550101', label: 'WhatsApp', icon: MessageCircle },
  { href: '/#appointment', label: 'Appointment', icon: Home },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t md:hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === link.href : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                target={link.label === 'WhatsApp' ? '_blank' : '_self'}
                className={cn(
                  'flex flex-col items-center justify-center text-sm font-medium transition-colors',
                  isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                )}
              >
                <link.icon className="w-6 h-6 mb-1" />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

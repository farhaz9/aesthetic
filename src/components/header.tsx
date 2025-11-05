'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navLinks = [
  { href: '/treatments', label: 'Treatments' },
  { href: '/#appointment', label: 'Book Visit' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://wa.me/919876543210', label: 'WhatsApp' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="https://images-five-gilt.vercel.app/elysier%20logo.png" 
              alt="ElysiarCrown Logo" 
              width={40} 
              height={40} 
              className="h-10 w-10"
            />
            <span className="font-bold font-headline text-xl text-primary">ElysiarCrown</span>
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                target={link.label === 'WhatsApp' ? '_blank' : '_self'}
                className="transition-colors hover:text-primary text-foreground/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
           <div className="flex items-center gap-2">
            <Button asChild className="hidden md:inline-flex">
              <Link href="#appointment">Book Now</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="md:hidden mr-2">
                      <Menu className="h-4 w-4" />
                  </Button>
              </SheetTrigger>
              <SheetContent side="left">
                  <div className="grid gap-4 py-4">
                      <Link href="/" className="flex items-center space-x-2">
                          <Image 
                            src="https://images-five-gilt.vercel.app/elysier%20logo.png" 
                            alt="ElysiarCrown Logo" 
                            width={40} 
                            height={40} 
                            className="h-10 w-10"
                          />
                          <span className="font-bold font-headline text-xl text-primary">ElysiarCrown</span>
                      </Link>
                      <nav className="grid gap-2">
                          {navLinks.map(link => (
                              <Link
                                  key={link.href}
                                  href={link.href}
                                  target={link.label === 'WhatsApp' ? '_blank' : '_self'}
                                  className="flex items-center space-x-2 rounded-md p-2 hover:bg-accent"
                              >
                                  <span>{link.label}</span>
                              </Link>
                          ))}
                      </nav>
                  </div>
              </SheetContent>
            </Sheet>
           </div>
        </div>
      </div>
    </header>
  );
}

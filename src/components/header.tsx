import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, MessageCircle } from 'lucide-react';

const navLinks = [
  { href: '#services', label: 'Treatments' },
  { href: '#appointment', label: 'Appointment' },
  { href: '/contact', label: 'Contact' },
  { href: 'https://wa.me/13105550101', label: 'WhatsApp' },
];

const IconPlaceholder = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
        <path d="M9 3l-2 10M15 3l2 10" />
        <path d="M12 13a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4v0Z" />
        <path d="M8 21a2 2 0 0 0 2-2" />
        <path d="M16 21a2 2 0 0 1-2-2" />
    </svg>
)

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <IconPlaceholder />
            <span className="font-bold font-headline text-xl">Follicle & Form</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
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
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
           <Button asChild className="hidden md:inline-flex">
             <Link href="#appointment">Book Now</Link>
           </Button>
           <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-4 w-4" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="grid gap-4 py-4">
                    <Link href="/" className="flex items-center space-x-2">
                        <IconPlaceholder />
                        <span className="font-bold font-headline text-xl">Follicle & Form</span>
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
    </header>
  );
}

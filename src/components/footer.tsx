import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const IconPlaceholder = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
        <path d="M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" />
        <path d="M21 12c-1.66-1-1.66-4-1.66-4-3.34 0-3.34-4-5-4-1.67 0-1.67 4-5 4 0 0 .01 3-1.66 4-1.67 1-1.67 4-1.67 4 3.33 0 3.33 4 5 4 1.66 0 1.66-4 5-4 .01-1-1.66-3-1.67-4Z"/>
    </svg>
)

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <Link href="/" className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <IconPlaceholder />
              <span className="font-bold font-headline text-2xl">Follicle & Form</span>
            </Link>
            <p className="text-muted-foreground">
              Your journey to confidence starts here.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#services" className="hover:text-primary">Services</Link></li>
              <li><Link href="#about" className="hover:text-primary">Our Process</Link></li>
              <li><Link href="#contact" className="hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {year} Follicle & Form. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { PawPrint } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <Link href="/" className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <PawPrint className="h-8 w-8 text-primary" />
              <span className="font-bold font-headline text-2xl">Paws & Claws</span>
            </Link>
            <p className="text-muted-foreground">
              Connecting loving homes with pets in need.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#pets" className="hover:text-primary">Find a Pet</Link></li>
              <li><Link href="#about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="#donate" className="hover:text-primary">Donate</Link></li>
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
          <p>&copy; {year} Paws & Claws Adoption. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

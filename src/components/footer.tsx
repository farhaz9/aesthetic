import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Aurelian Aesthetics</h3>
            <p className="text-muted-foreground">
              Redefining beauty, restoring confidence.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="mailto:contact@aurelian.com" className="hover:text-primary">contact@aurelian.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-primary">(123) 456-7890</a></li>
              <li>123 Beauty Lane, Suite 100<br/>Aesthetics City, 12345</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Youtube /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {year} Aurelian Aesthetics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

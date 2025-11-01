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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="md:col-span-2 lg:col-span-1">
             <Link href="/" className="flex items-center space-x-2 mb-4">
              <IconPlaceholder />
              <span className="font-bold font-headline text-2xl">Follicle & Form</span>
            </Link>
            <p className="text-muted-foreground pr-4">
              Your journey to confidence starts here. Contact us today to book your private consultation.
            </p>
             <div className="flex mt-4 space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link href="#services" className="hover:text-primary">Services</Link></li>
              <li><Link href="#about" className="hover:text-primary">Our Process</Link></li>
              <li><Link href="#testimonials" className="hover:text-primary">Testimonials</Link></li>
              <li><Link href="#faq" className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-muted-foreground">
                <li>123 Beauty Lane, Suite 100</li>
                <li>Beverly Hills, CA 90210</li>
                <li>Email: contact@follicleform.com</li>
                <li>Phone: (310) 555-0101</li>
            </ul>
          </div>

          {/* Map */}
          <div className="md:col-span-2 lg:col-span-1">
             <div className="overflow-hidden rounded-lg h-full w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.599723223122!2d-118.40139138478052!3d34.07362098060499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d1d7b1%3A0x46a6f1925355a297!2sRodeo%20Dr%2C%20Beverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1678886 Rodeo Dr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clinic Location"
                ></iframe>
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

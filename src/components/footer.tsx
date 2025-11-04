import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const IconPlaceholder = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
        <path d="M9 3l-2 10M15 3l2 10" />
        <path d="M12 13a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4v0Z" />
        <path d="M8 21a2 2 0 0 0 2-2" />
        <path d="M16 21a2 2 0 0 1-2-2" />
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
              <span className="font-bold font-headline text-2xl">ElysiarCrown</span>
            </Link>
            <p className="text-muted-foreground pr-4">
             Delhi's premier at-home hair restoration service. Book your confidential consultation today.
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
                <li className="max-w-xs">C-46, Vijay Vihar Phase II, Avantika, Sector 1, Rohini, New Delhi, 110085</li>
                <li className="font-medium">At-Home Services across Delhi & NCR</li>
                <li>Email: contact@elysiarcrown.com</li>
                <li>Phone: +91 98765 43210</li>
            </ul>
          </div>

          {/* Map */}
          <div className="md:col-span-2 lg:col-span-1">
             <div className="overflow-hidden rounded-lg h-full w-full min-h-[200px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.411641088613!2d77.10619147550517!3d28.73693897560866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01248695f24d%3A0x8e8334a1a3e8113e!2sC-46%2C%20Vijay%20Vihar%20II%2C%20Pocket%202%2C%20Sector%201%2C%20Rohini%2C%20New%20Delhi%2C%20Delhi%20110085!5e0!3m2!1sen!2sin!4v1720521199313!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ElysiarCrown Address"
                ></iframe>
            </div>
          </div>

        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {year} ElysiarCrown. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

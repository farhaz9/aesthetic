import Link from 'next/link';
import { Home, Sparkles, ImageIcon, MessageSquare, Phone } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home', icon: <Home className="h-5 w-5" /> },
  { href: '#services', label: 'Services', icon: <Sparkles className="h-5 w-5" /> },
  { href: '#gallery', label: 'Gallery', icon: <ImageIcon className="h-5 w-5" /> },
  { href: '#testimonials', label: 'Reviews', icon: <MessageSquare className="h-5 w-5" /> },
  { href: '#contact', label: 'Contact', icon: <Phone className="h-5 w-5" /> },
];

export default function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <div className="text-muted-foreground group-hover:text-primary transition-colors">
              {item.icon}
            </div>
            <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

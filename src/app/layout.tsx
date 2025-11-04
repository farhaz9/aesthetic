'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Preloader from '@/components/preloader';

// export const metadata: Metadata = {
//   title: 'ElysiarCrown | At-Home Hair Transplant & Patch in Delhi',
//   description: 'Delhi's leading at-home service for premium hair transplant and custom hair patch solutions.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>ElysiarCrown | At-Home Hair Transplant & Patch in Delhi</title>
        <meta name="description" content="Delhi's leading at-home service for premium hair transplant and custom hair patch solutions." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Lora:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        {loading ? (
          <Preloader />
        ) : (
          <>
            {children}
            <Toaster />
          </>
        )}
      </body>
    </html>
  );
}

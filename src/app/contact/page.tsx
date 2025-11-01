import Header from '@/components/header';
import Footer from '@/components/footer';
import BottomNav from '@/components/bottom-nav';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 py-12 md:py-24 lg:py-32 bg-secondary">
                <div className="container mx-auto px-4">
                     <Card className="max-w-4xl mx-auto">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl md:text-4xl font-bold">Contact Us</CardTitle>
                            <CardDescription className="text-lg text-muted-foreground mt-2">
                                We're here to help. Reach out to us with any questions or to schedule your consultation.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-6">
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold font-headline">Email</h3>
                                        <p className="text-muted-foreground">Send us an email for inquiries.</p>
                                        <a href="mailto:contact@follicleform.com" className="text-primary hover:underline">contact@follicleform.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold font-headline">Phone</h3>
                                        <p className="text-muted-foreground">Give us a call during business hours.</p>
                                        <a href="tel:3105550101" className="text-primary hover:underline">(310) 555-0101</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold font-headline">Location</h3>
                                        <p className="text-muted-foreground">123 Beauty Lane, Suite 100</p>
                                        <p className="text-muted-foreground">Beverly Hills, CA 90210</p>
                                    </div>
                                </div>
                            </div>
                             <div className="overflow-hidden rounded-lg h-full w-full min-h-[300px]">
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
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
            <BottomNav />
        </div>
    );
}

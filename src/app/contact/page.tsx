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
                                We bring our expertise to you. Reach out for a confidential at-home consultation in Delhi.
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
                                        <a href="mailto:contact@elysiarcrown.com" className="text-primary hover:underline">contact@elysiarcrown.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold font-headline">Phone</h3>
                                        <p className="text-muted-foreground">Call us to schedule your at-home visit.</p>
                                        <a href="tel:919876543210" className="text-primary hover:underline">+91 98765 43210</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold font-headline">Service Area</h3>
                                        <p className="text-muted-foreground">Proudly serving Delhi & NCR</p>
                                        <p className="text-muted-foreground">With premium at-home services</p>
                                    </div>
                                </div>
                            </div>
                             <div className="overflow-hidden rounded-lg h-full w-full min-h-[300px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5204443912!2d77.06889833534504!3d28.52725273574068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1683886_New_Delhi_Map"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Service Area - Delhi"
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

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
                                        <a href="tel:+919999092516" className="text-primary hover:underline">+91 9999092516</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold font-headline">Our Address</h3>
                                        <p className="text-muted-foreground">C-46, Vijay Vihar Phase II, Avantika, Sector 1, Rohini, New Delhi, Delhi, 110085</p>
                                        <p className="text-muted-foreground mt-2">At-home services available across Delhi & NCR</p>
                                    </div>
                                </div>
                            </div>
                             <div className="overflow-hidden rounded-lg h-full w-full min-h-[300px]">
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
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
            <BottomNav />
        </div>
    );
}

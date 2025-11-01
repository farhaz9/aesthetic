'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { CalendarCheck } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  service: z.string().optional(),
  message: z.string().optional(),
});

export default function AppointmentForm() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            service: '',
            message: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Appointment Request Sent!",
            description: `Thank you, ${values.name}. We will contact you shortly to confirm your consultation.`,
        });
        form.reset();
    }

    return (
        <section id="appointment" className="bg-secondary">
            <div className="container mx-auto px-4">
                <Card className="max-w-3xl mx-auto">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-primary/10 rounded-full p-4 flex items-center justify-center w-fit mb-4">
                           <CalendarCheck className="w-10 h-10 text-primary" />
                        </div>
                        <CardTitle className="text-3xl md:text-4xl font-bold">Book Your Consultation</CardTitle>
                        <CardDescription className="text-lg text-muted-foreground mt-2">
                            Take the first step towards renewed confidence. Fill out the form below to request your private consultation.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John Doe" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email Address</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="john.doe@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="(555) 123-4567" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                     <FormField
                                        control={form.control}
                                        name="service"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Service of Interest (Optional)</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="e.g., FUE Hair Transplant" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message (Optional)</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Tell us anything else you'd like us to know."
                                                    className="resize-none"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" size="lg" className="w-full">Request My Consultation</Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

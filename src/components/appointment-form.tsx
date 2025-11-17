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
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { submitAppointment } from '@/lib/actions';
import { useRef } from 'react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  service: z.string().optional(),
  message: z.string().optional(),
});

export default function AppointmentForm() {
    const { toast } = useToast();
    const formRef = useRef<HTMLFormElement>(null);

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

    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
            if (value) {
                formData.append(key, value);
            }
        });

        const result = await submitAppointment(undefined as any, formData);

        toast({
            title: result.success ? "Request Sent!" : "Uh oh! Something went wrong.",
            description: result.message,
            variant: result.success ? 'default' : 'destructive'
        });

        if (result.success) {
            form.reset();
        }
    }

    return (
        <section id="appointment" className="bg-secondary" ref={ref}>
            <div className={cn("container mx-auto px-4 transition-opacity duration-1000 ease-out", inView ? 'animate-fade-in-up' : 'opacity-0')}>
                <Card className="max-w-3xl mx-auto">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-primary/10 rounded-full p-4 flex items-center justify-center w-fit mb-4">
                           <CalendarCheck className="w-10 h-10 text-primary" />
                        </div>
                        <CardTitle className="text-3xl md:text-4xl font-bold">Book Your At-Home Consultation</CardTitle>
                        <CardDescription className="text-lg text-muted-foreground mt-2">
                            Take the first step towards your transformation. Fill out the form to schedule a private, confidential consultation at your home in Delhi.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                                                    <Input placeholder="+91 9999092516" {...field} />
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
                                            <FormLabel>Your Address & Message (Optional)</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="Please provide your address for the at-home visit and any other details."
                                                    className="resize-none"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                                    {form.formState.isSubmitting ? 'Sending...' : 'Request My Consultation'}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

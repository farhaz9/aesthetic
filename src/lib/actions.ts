'use server';

import { generateFaqSummary, type FaqSummaryInput } from '@/ai/flows/faq-summary-generation';
import { z } from 'zod';
import { Resend } from 'resend';
import AdminNotificationEmail from '@/components/emails/admin-notification';
import ThankYouEmail from '@/components/emails/thank-you';

const FaqSummaryActionSchema = z.object({
  faqAnswer: z.string().min(10, 'FAQ answer is too short.'),
});

export async function getFaqSummaryAction(input: FaqSummaryInput) {
  const validation = FaqSummaryActionSchema.safeParse(input);
  if (!validation.success) {
    return { summary: 'Could not generate summary.', error: validation.error.format() };
  }
  try {
    const result = await generateFaqSummary(validation.data);
    return result;
  } catch (error) {
    console.error('Error generating FAQ summary:', error);
    return { summary: 'An error occurred while generating the summary.' };
  }
}

const appointmentFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  service: z.string().optional(),
  message: z.string().optional(),
});

type AppointmentFormState = {
  success: boolean;
  message: string;
};

export async function submitAppointment(
  prevState: AppointmentFormState,
  formData: FormData
): Promise<AppointmentFormState> {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const validatedFields = appointmentFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Invalid form data."
    };
  }

  const { name, email, phone, service, message } = validatedFields.data;

  try {
    // Send email to admin
    await resend.emails.send({
      from: 'ElysiarCrown <contact@falconaxe.com>',
      to: 'thegreatfarhaz07@gmail.com',
      subject: 'New Consultation Request',
      react: AdminNotificationEmail({ name, email, phone, service, message }),
    });

    // Send thank you email to user
    await resend.emails.send({
      from: 'ElysiarCrown <contact@falconaxe.com>',
      to: email,
      subject: 'Thank You for Your Consultation Request',
      react: ThankYouEmail({ name }),
    });

    return { success: true, message: `Thank you, ${name}. We will contact you shortly.` };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, message: 'An error occurred while sending your request.' };
  }
}

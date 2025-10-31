'use server';

import { generateFaqSummary, type FaqSummaryInput } from '@/ai/flows/faq-summary-generation';
import { z } from 'zod';

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

'use server';

/**
 * @fileOverview A flow for generating concise summaries of FAQ answers using AI.
 *
 * - generateFaqSummary - A function that generates a summary for a given FAQ answer.
 * - FaqSummaryInput - The input type for the generateFaqSummary function.
 * - FaqSummaryOutput - The return type for the generateFaqSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FaqSummaryInputSchema = z.object({
  faqAnswer: z.string().describe('The full text of the FAQ answer.'),
});
export type FaqSummaryInput = z.infer<typeof FaqSummaryInputSchema>;

const FaqSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the FAQ answer.'),
});
export type FaqSummaryOutput = z.infer<typeof FaqSummaryOutputSchema>;

export async function generateFaqSummary(input: FaqSummaryInput): Promise<FaqSummaryOutput> {
  return faqSummaryFlow(input);
}

const faqSummaryPrompt = ai.definePrompt({
  name: 'faqSummaryPrompt',
  input: {schema: FaqSummaryInputSchema},
  output: {schema: FaqSummaryOutputSchema},
  prompt: `Summarize the following FAQ answer in one sentence, focusing on the key information a user would need to decide if the full answer is relevant to them:\n\n{{{faqAnswer}}}`,
});

const faqSummaryFlow = ai.defineFlow(
  {
    name: 'faqSummaryFlow',
    inputSchema: FaqSummaryInputSchema,
    outputSchema: FaqSummaryOutputSchema,
  },
  async input => {
    const {output} = await faqSummaryPrompt(input);
    return output!;
  }
);

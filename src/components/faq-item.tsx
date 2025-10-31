'use client';

import { useEffect, useState } from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getFaqSummaryAction } from '@/lib/actions';
import { Skeleton } from './ui/skeleton';

interface FaqItemProps {
  question: string;
  answer: string;
  value: string;
}

export default function FaqItem({ question, answer, value }: FaqItemProps) {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // This function is called when the accordion is triggered to be opened
  const handleFetchSummary = async () => {
    // Only fetch if we don't have a summary and are not already loading
    if (!summary && !isLoading) {
      setIsLoading(true);
      try {
        const result = await getFaqSummaryAction({ faqAnswer: answer });
        setSummary(result.summary);
      } catch (error) {
        console.error(error);
        setSummary('Could not load summary.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <AccordionItem value={value}>
      <AccordionTrigger onClick={handleFetchSummary} className="text-left text-lg">
        {question}
      </AccordionTrigger>
      <AccordionContent className="space-y-4 text-base">
        {isLoading && <Skeleton className="h-4 w-full" />}
        {summary && (
          <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
            {summary}
          </blockquote>
        )}
        <p>{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
}

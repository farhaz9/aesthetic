'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: 'What is an FUE hair transplant?',
    answer: 'Follicular Unit Extraction (FUE) is a minimally invasive hair transplant method where individual hair follicles are removed from a donor area on your body—most often the sides and back of your head—and transplanted to a balding or thinning area.',
  },
  {
    question: 'Is the hair transplant procedure painful?',
    answer: 'Patients are given local anesthesia in the donor and recipient areas, so you will not feel any pain during the procedure. Some mild discomfort or soreness can be expected after the procedure, but this is manageable with prescribed medication.',
  },
  {
    question: 'How long does it take to see results?',
    answer: 'The transplanted hair will typically shed within 2-3 weeks after the procedure. New hair growth will begin in 3-4 months, with significant results visible after 6-9 months. The final, full results are typically seen at the 12-18 month mark.',
  },
  {
    question: 'Are the results of a hair transplant permanent?',
    answer: 'Yes, the results are considered permanent. The transplanted hair follicles are harvested from areas of the scalp that are resistant to the balding process, so they will continue to grow for a lifetime in the recipient area.',
  },
    {
    question: 'What is the recovery time like?',
    answer: 'Recovery is relatively quick. Most patients can return to non-strenuous work within a few days. We advise avoiding strenuous activities, swimming, and direct sun exposure for a few weeks to ensure the best results.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            Find answers to common questions about our procedures and what to expect.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-headline text-left">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

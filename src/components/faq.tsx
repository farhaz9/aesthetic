'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: 'Is the at-home hair transplant procedure safe?',
    answer: 'Absolutely. We maintain hospital-grade sterility standards and our expert surgeons use the same advanced equipment as in our clinics. Your safety and comfort are our top priorities throughout the procedure.',
  },
  {
    question: 'How does the at-home consultation work?',
    answer: 'You book a consultation, and our expert will visit your home at the scheduled time. We will analyze your hair loss, discuss your goals, and recommend the best solution (FUE, DHI, or a hair patch). The consultation is completely confidential.',
  },
  {
    question: 'What is a non-surgical hair patch?',
    answer: 'A hair patch is a cap-like membrane made with 100% natural human hair. It is custom-designed to fit your bald area and is attached using cosmetic-grade, skin-safe adhesive. It provides an instant, dense, and completely undetectable look without any surgery.',
  },
  {
    question: 'Are the results of a hair transplant permanent?',
    answer: 'Yes, the results are considered permanent. The transplanted hair follicles are harvested from areas of the scalp resistant to balding, so they will continue to grow for a lifetime in the new area.',
  },
    {
    question: 'What is the recovery time for an at-home transplant?',
    answer: 'Recovery is quick. Since the procedure is done at home, you can relax in your own space immediately. Most clients can resume non-strenuous work within a couple of days. We provide a complete post-procedure care kit and guidance.',
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
            Find answers to common questions about our at-home procedures in Delhi.
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

import { Accordion } from '@/components/ui/accordion';
import FaqItem from './faq-item';

const faqData = [
  {
    question: 'What is the recovery time for a hair transplant?',
    answer: 'Recovery time varies, but most patients can return to work within 2-5 days after the procedure. Strenuous activities should be avoided for at least a week. Full results are typically visible after 9-12 months as the new hair grows in.',
  },
  {
    question: 'Are cosmetic procedures painful?',
    answer: 'We prioritize your comfort. Most procedures involve minimal discomfort. We use local anesthesia, and topical numbing creams to ensure a pain-free experience. Post-procedure discomfort is typically mild and manageable with over-the-counter pain relievers.',
  },
  {
    question: 'How long do hair patches last?',
    answer: 'With proper care and maintenance, a high-quality hair patch can last from 6 months to over a year. We provide detailed instructions on how to care for your hair patch to maximize its lifespan and maintain its natural appearance.',
  },
  {
    question: 'Can I customize a bridal package?',
    answer: 'Absolutely! While we offer curated packages, we understand every bride is unique. We are happy to customize a package to perfectly suit your needs, preferences, and wedding timeline. Schedule a consultation to discuss your ideal bridal look.',
  },
];

export default function Faq() {
  return (
    <section id="faq" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Answers to common questions about our procedures and services.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} value={`item-${index}`} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

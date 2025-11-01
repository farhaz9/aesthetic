import { Calendar, UserCheck, Microscope } from 'lucide-react';

export default function OurProcess() {

const steps = [
  {
    title: '1. Consultation',
    description: "Your journey begins with a private consultation to discuss your goals and assess your needs with our expert team.",
    icon: <Calendar className="w-10 h-10 text-primary" />,
  },
  {
    title: '2. Personalized Plan',
    description: "We create a tailored treatment plan using the latest technology and techniques to achieve your desired, natural-looking results.",
    icon: <UserCheck className="w-10 h-10 text-primary" />,
  },
  {
    title: '3. Treatment & Care',
    description: "Receive expert care during your procedure in our state-of-the-art facility, followed by comprehensive aftercare support.",
    icon: <Microscope className="w-10 h-10 text-primary" />,
  },
]

  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Your Journey to Renewal</h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
            We guide you through a seamless and supportive process, ensuring comfort and confidence from start to finish.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.title} className="text-center flex flex-col items-center">
              <div className="mb-4 bg-primary/10 rounded-full p-4 flex items-center justify-center">
                {step.icon}
              </div>
              <h3 className="text-2xl font-headline font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

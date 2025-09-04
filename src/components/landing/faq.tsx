import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./animated-section";

const faqs = [
  {
    question: "How long does installation typically take?",
    answer: "Most residential projects take between 1-3 days for installation, depending on the complexity and size of the project. This doesn't include the template and fabrication time, which typically adds another 1-2 weeks."
  },
  {
    question: "What's the difference between granite and quartz?",
    answer: "Granite is a natural stone that's mined and cut into slabs. It's heat-resistant but requires periodic sealing. Quartz is an engineered product made from stone particles and resin. It's non-porous, doesn't require sealing, and offers more consistent patterns."
  },
  {
    question: "Do you provide samples?",
    answer: "Yes, we encourage clients to take samples home to see how materials look in their space with their lighting. We offer sample kits for a small refundable deposit."
  },
  {
    question: "What's your warranty policy?",
    answer: "We offer a 10-year warranty on fabrication and installation against defects. Natural stone itself is covered by a lifetime limited warranty. Specific terms are provided in your contract."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection animationType="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
              Frequently Asked Questions
            </h2>
          </div>
        </AnimatedSection>
        <AnimatedSection animationType="fade-in-up" delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="text-lg font-medium text-left p-5 bg-muted/50 hover:no-underline flex justify-between items-center w-full">
                    <span>{faq.question}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground p-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

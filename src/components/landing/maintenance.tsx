import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import AnimatedSection from "./animated-section";

const tips = [
  { icon: 'fa-ban', title: 'Avoid Harsh Chemicals', description: 'Never use acidic or abrasive cleaners on natural stone surfaces as they can etch and damage the finish.' },
  { icon: 'fa-tint', title: 'Prompt Spill Cleanup', description: 'Wipe up spills immediately, especially those containing acids like wine, coffee, or citrus juices.' },
  { icon: 'fa-shield-alt', title: 'Regular Sealing', description: 'Most natural stones benefit from periodic sealing to maintain their beauty and resist staining.' },
];

export default function Maintenance() {
  return (
    <section id="maintenance" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection animationType="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
              Maintenance Tips
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-lg">
              How to care for your stone and tile surfaces
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <AnimatedSection key={index} animationType="flip-down" delay={index * 0.15}>
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="text-2xl text-primary">
                    <i className={`fas ${tip.icon}`}></i>
                  </div>
                  <CardTitle className="font-serif">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{tip.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

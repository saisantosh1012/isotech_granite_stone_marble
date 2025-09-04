import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from './animated-section';

const projects = [
  { src: "/images/HC.jpg", hint: "hotel lobby", title: "Hotel Lobbies", description: "Elegant stone finishes that create impressive first impressions." },
  { src: "/images/OC.jpg", hint: "office building", title: "Office Buildings", description: "Durable and professional stone surfaces for corporate environments." },
  { src: "/images/RC.jpg", hint: "restaurant interior", title: "Restaurants", description: "Hygienic and beautiful stone surfaces for dining establishments." },
];

export default function Commercial() {
  return (
    <section id="commercial" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <AnimatedSection animationType="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
              Commercial Projects
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-muted-foreground md:text-lg">
              We provide premium stone and tile solutions for commercial spaces
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} animationType="flip-up" delay={index * 0.1}>
              <Card className="overflow-hidden h-full">
                <div className="relative w-full h-52">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    objectFit="cover"
                    data-ai-hint={project.hint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-serif">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{project.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

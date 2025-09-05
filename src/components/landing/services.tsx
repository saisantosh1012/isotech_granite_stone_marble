import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedSection from './animated-section';

const services = [
  {
    icon: 'fa-kitchen-set',
    title: 'Kitchen Countertops',
    description: 'Custom fabricated and installed kitchen countertops in granite, quartz, marble, and more.',
  },
  {
    icon: 'fa-bath',
    title: 'Bathroom Vanities',
    description: 'Elegant bathroom vanities and countertops that combine functionality with beauty.',
  },
  {
    icon: 'fa-border-all',
    title: 'Tile Installation',
    description: 'Professional tile installation for floors, walls, backsplashes, and showers.',
  },
  {
    icon: 'fa-mountain',
    title: 'Natural Stone',
    description: 'Supply and installation of various natural stones including granite, marble, and quartzite.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection animationType="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
              Our Services
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} animationType="fade-in-up" delay={index * 0.1}>
                <Card className="text-center bg-muted/50 hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 h-full">
                <CardHeader>
                    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full mb-4">
                    <i className={`fas ${service.icon} text-4xl text-primary`}></i>
                    </div>
                    <CardTitle className="font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{service.description}</p>
                </CardContent>
                </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

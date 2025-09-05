import Image from 'next/image';
import AnimatedSection from './animated-section';

const materials = [
  { src: "/images/G1.jpg", hint: "granite slab", name: "Granite", description: "Durable and heat-resistant natural stone with unique patterns." },
  { src: "/images/M1.jpg", hint: "marble slab", name: "Marble", description: "Elegant and timeless stone with distinctive veining patterns." },
  { src: "/images/Q1.jpg", hint: "quartz slab", name: "Quartz", description: "Engineered stone that is non-porous and requires minimal maintenance." },
  { src: "/images/P1.jpg", hint: "porcelain tile", name: "Porcelain Tile", description: "Durable and versatile tile option available in various designs." },
];

export default function Materials() {
  return (
    <section id="materials" className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <AnimatedSection animationType="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
              Our Materials
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((material, index) => (
            <AnimatedSection key={index} animationType="fade-in-up" delay={index * 0.1}>
              <div className="text-center bg-white p-5 rounded-lg shadow-sm h-full">
                <div className="relative w-full h-48 rounded-md overflow-hidden mb-4">
                  <Image
                    src={material.src}
                    alt={material.name}
                    fill
                    objectFit="cover"
                    data-ai-hint={material.hint}
                  />
                </div>
                <h3 className="text-xl font-serif font-bold">{material.name}</h3>
                <p className="text-muted-foreground">{material.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import AnimatedSection from './animated-section';

const projects = [
  { src: "/images/Elegant Marble.jpg", hint: "marble countertop", alt: "Elegant Marble Countertop" },
  { src: "/images/Custom Stone Fireplace.jpg", hint: "stone fireplace", alt: "Custom Stone Fireplace" },
  { src: "/images/Modern Granite Kitchen Island.jpg", hint: "granite island", alt: "Modern Granite Kitchen Island" },
  { src: "/images/Intricate Tile.jpg", hint: "tile backsplash", alt: "Intricate Tile Backsplash" },
  { src: "/images/Luxurious Stone Bathroom.jpg", hint: "stone bathroom", alt: "Luxurious Stone Bathroom" },
  { src: "/images/Outdoor Patio.jpg", hint: "outdoor stonework", alt: "Outdoor Patio Stonework" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection animationType="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
              Our Work
            </h2>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <AnimatedSection key={index} animationType="zoom-in" delay={index * 0.1}>
              <div className="relative rounded-lg overflow-hidden h-64 group">
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={project.hint}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

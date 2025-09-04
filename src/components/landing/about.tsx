import Image from 'next/image';
import AnimatedSection from './animated-section';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection animationType="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
              About Us
            </h2>
          </div>
        </AnimatedSection>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <AnimatedSection animationType="slide-in-left" className="md:w-1/2">
            <h3 className="text-2xl font-serif font-bold mb-4">Quality Craftsmanship Since 2005</h3>
            <p className="mb-4">
              Isotech Granite, Stone and Tileworks has been providing exceptional stone and tile installation services for over 15 years. Our team of skilled craftsmen takes pride in delivering precision workmanship and outstanding customer service.
            </p>
            <p className="mb-4">
              We specialize in custom fabrication and installation of granite, marble, quartz, and other natural stones for kitchens, bathrooms, flooring, and commercial spaces.
            </p>
            <p>
              Our commitment to quality, attention to detail, and use of premium materials sets us apart from the competition.
            </p>
          </AnimatedSection>
          <AnimatedSection animationType="slide-in-right" className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about.jpg"
                data-ai-hint="stone workshop"
                alt="Isotech Granite Workspace"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

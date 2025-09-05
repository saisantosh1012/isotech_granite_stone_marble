import AnimatedSection from "./animated-section";

const features = [
  { icon: 'fa-recycle', title: "Recycled Materials", description: "We utilize recycled content in our products whenever possible." },
  { icon: 'fa-tint', title: "Water Conservation", description: "Our processes minimize water usage and recycle water." },
  { icon: 'fa-leaf', title: "Low-VOC Materials", description: "We use low-VOC sealants and adhesives for better air quality." },
  { icon: 'fa-truck', title: "Local Sourcing", description: "We prioritize locally sourced materials to reduce transportation emissions." },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection animationType="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-serif relative inline-block pb-4 text-white after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
              Sustainable Practices
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-white/80 md:text-lg">
              We're committed to environmentally responsible stoneworks
            </p>
          </div>
        </AnimatedSection>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} animationType="fade-in-up" delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl text-primary mb-4">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

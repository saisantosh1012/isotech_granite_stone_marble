export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-serif relative inline-block pb-4 text-white after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-primary">
            What Our Clients Say
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <div className="testimonial">
            <p className="testimonial-text text-xl italic mb-5">
              "Isotech transformed our kitchen with a beautiful granite countertop. The craftsmanship was exceptional and the installation team was professional and efficient."
            </p>
            <p className="testimonial-author font-bold">- Sarah Johnson, Homeowner</p>
          </div>
        </div>
      </div>
    </section>
  );
}

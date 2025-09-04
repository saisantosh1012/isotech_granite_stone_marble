import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Cta() {
  return (
    <section 
      id="cta"
      className="text-center text-white py-24" 
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://picsum.photos/1350/800')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      data-ai-hint="stone texture"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold mb-5 text-white">Ready to Transform Your Space?</h2>
        <p className="mb-8 text-lg">Contact us today for a free consultation and quote</p>
        <Button size="lg" asChild>
          <Link href="#contact">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}

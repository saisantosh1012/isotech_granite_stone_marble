import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import Services from '@/components/landing/services';
import Gallery from '@/components/landing/gallery';
import Materials from '@/components/landing/materials';
import Commercial from '@/components/landing/commercial';
import Sustainability from '@/components/landing/sustainability';
import Maintenance from '@/components/landing/maintenance';
import Calculator from '@/components/landing/calculator';
import Faq from '@/components/landing/faq';
import Testimonials from '@/components/landing/testimonials';
import Cta from '@/components/landing/cta';
import Contact from '@/components/landing/contact';
import Footer from '@/components/landing/footer';
import WhatsAppFab from '@/components/landing/whatsapp-fab';
import DreamSpaceVisualizer from '@/components/landing/dream-space-visualizer';


export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Materials />
        <DreamSpaceVisualizer />
        <Commercial />
        <Sustainability />
        <Maintenance />
        <Calculator />
        <Faq />
        <Testimonials />
        <Cta />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

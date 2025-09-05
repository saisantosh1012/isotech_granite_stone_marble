import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function WhatsAppFab() {
  const whatsappNumber = '919398624736';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello!%20I'm%20interested%20in%20your%20services.`;

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-10 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <Button
        size="icon"
        className="rounded-full h-16 w-16 bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg transition-transform group-hover:scale-110"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </Button>
    </Link>
  );
}

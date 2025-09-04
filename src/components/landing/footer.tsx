import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-12 pb-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="footer-column">
             <div className="flex items-center gap-3 mb-5">
                <Image
                    src="/W_ISOTECH LOGO.png"
                    alt="Isotech Logo"
                    width={50}
                    height={50}
                    className="object-contain"
                />
                <span className="font-serif font-bold text-sm text-white uppercase leading-tight">Isotech<br/>Granite, Stone, Marble Works</span>
             </div>
            <p className="text-gray-300">Premium granite, stone, and tile installation services for residential and commercial properties.</p>
          </div>
          <div className="footer-column">
            <h3 className="text-xl font-serif font-bold mb-5 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#about" className="text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#gallery" className="text-gray-300 hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="#contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="text-xl font-serif font-bold mb-5 text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-300 hover:text-primary transition-colors">Kitchen Countertops</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-primary transition-colors">Bathroom Vanities</Link></li>
              <li><Link href="#services" className="text-gray-300 hover:text-primary transition-colors">Tile Installation</Link></li>
              <li><Link href="#materials" className="text-gray-300 hover:text-primary transition-colors">Natural Stone</Link></li>
              <li><Link href="#commercial" className="text-gray-300 hover:text-primary transition-colors">Commercial Projects</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="text-xl font-serif font-bold mb-5 text-white">Connect With Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center pt-5 border-t border-white/10">
          <p>&copy; {new Date().getFullYear()} Isotech Granite, Stone and Tileworks. All Rights Reserved.</p>
          <p> Designed and Developed by Sai Santosh </p>
        </div>
      </div>
    </footer>
  );
}

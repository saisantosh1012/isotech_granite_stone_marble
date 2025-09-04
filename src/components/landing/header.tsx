'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#materials', label: 'Materials' },
  { href: '#commercial', label: 'Commercial' },
  { href: '#visualizer', label: 'AI Visualizer' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-shadow duration-300 ${isScrolled ? 'bg-white/95 shadow-lg backdrop-blur' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-5">
          <Link href="#home" className="flex items-center gap-3">
            <Image
              src="/W_ISOTECH LOGO.png"
              alt="Isotech Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="font-serif font-bold text-sm text-secondary uppercase leading-tight">Isotech<br/>Granite, Stone, Marble Works</span>
          </Link>
          
          {/* Desktop Nav */}
          <ul className="hidden lg:flex list-none space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-medium text-gray-700 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Nav Trigger */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="p-4">
                    <Link href="#home" className="flex items-center gap-3">
                       <Image
                          src="/W_ISOTECH LOGO.png"
                          alt="Isotech Logo"
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                        <span className="font-serif font-bold text-sm text-secondary uppercase leading-tight">Isotech<br/>Granite, Stone, Marble Works</span>
                    </Link>
                  </div>
                  <nav className="flex-1 px-4 mt-8">
                    <ul className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <li key={link.href}>
                           <SheetTrigger asChild>
                            <Link href={link.href} className="text-lg font-medium text-gray-700 hover:text-primary transition-colors">
                              {link.label}
                            </Link>
                          </SheetTrigger>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
}

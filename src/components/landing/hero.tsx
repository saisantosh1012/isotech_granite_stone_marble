'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] w-full flex items-center justify-center text-white text-center overflow-hidden bg-cover bg-center bg-[url('/granite-marble-stone-works-home-live.jpg')]"
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 z-10 animate-fade-in-up max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5 font-serif text-white">
          Isotech GRANITE , STONE ,MARBLE WORKS
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
          Transforming spaces with exquisite natural stone and tile solutions
        </p>
        <Button size="lg" asChild>
          <Link href="#contact">Get a Free Quote</Link>
        </Button>
      </div>
    </section>
  );
}

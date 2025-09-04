import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Montserrat, Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Isotech Granite, Stone and Tileworks',
  description: 'Transforming spaces with exquisite natural stone and tile solutions',
  icons: {
    icon: [
      { url: '/W_ISOTECH LOGO.png', type: 'image/png' },
      { url: '/W_ISOTECH LOGO.png', type: 'image/png', sizes: '32x32' },
      { url: '/W_ISOTECH LOGO.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/W_ISOTECH LOGO.png',
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  weight: '700',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={cn(montserrat.variable, playfairDisplay.variable, "font-sans antialiased p-4 border-8 border-secondary")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

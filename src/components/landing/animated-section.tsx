'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'zoom-in' | 'flip-up' | 'flip-down';
  delay?: number;
  duration?: number;
}

const animations = {
  'fade-in-up': {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  },
  'slide-in-left': {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  },
  'slide-in-right': {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
  },
  'zoom-in': {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  },
  'flip-up': {
    initial: { opacity: 0, rotateX: -60, y: 30 },
    animate: { opacity: 1, rotateX: 0, y: 0 },
  },
    'flip-down': {
    initial: { opacity: 0, rotateX: 60, y: -30 },
    animate: { opacity: 1, rotateX: 0, y: 0 },
  },
};

export default function AnimatedSection({
  children,
  className,
  animationType = 'fade-in-up',
  delay = 0,
  duration = 0.6,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px 0px' });

  const selectedAnimation = animations[animationType] || animations['fade-in-up'];

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      variants={selectedAnimation}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

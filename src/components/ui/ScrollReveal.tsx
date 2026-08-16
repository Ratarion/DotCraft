import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  duration = 0.9,
  y = 35,
  className = '',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y,
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
            }
          : {
              opacity: 0,
              y,
            }
      }
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
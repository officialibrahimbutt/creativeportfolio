"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Word-by-word masked reveal. Each word rises out of an overflow-hidden
 * clip as the block enters the viewport. Degrades to static text when
 * reduced motion is requested.
 */
export function TextReveal({
  children,
  className,
  delay = 0,
}: {
  children: string;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const words = children.split(" ");

  if (reduced) return <span className={className}>{children}</span>;

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.035, delayChildren: delay }}
      aria-label={children}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className="inline-block overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em]"
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              hidden: { y: "115%" },
              show: { y: 0, transition: { duration: 0.75, ease: EASE } },
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

const lineVariants: Variants = {
  hidden: { y: "110%" },
  show: { y: 0, transition: { duration: 0.85, ease: EASE } },
};

/** Simple line mask for single-line headings rendered by the server. */
export function MaskLine({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <span className={className}>{children}</span>;
  return (
    <span className={className}>
      <motion.span
        className="block overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        transition={{ delayChildren: delay }}
      >
        <motion.span className="block will-change-transform" variants={lineVariants}>
          {children}
        </motion.span>
      </motion.span>
    </span>
  );
}

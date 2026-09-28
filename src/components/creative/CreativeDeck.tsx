"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Creative } from "@/content/creatives";

/**
 * Hero creative deck — three stacked ad frames with a restrained 3D
 * treatment. The deck straightens and lifts as the page scrolls; the
 * whole composition is decorative (aria-hidden) since the surrounding
 * hero copy carries the meaning.
 */
export function CreativeDeck({ creatives }: { creatives: Creative[] }) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.6], [16, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.6], [-7, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [30, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);

  const frames = creatives.slice(0, 3);

  return (
    <div
      ref={ref}
      className="relative mx-auto w-full max-w-[560px] [perspective:1400px]"
      aria-hidden
    >
      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={
          reduced
            ? undefined
            : { rotateX, rotateY, y, opacity }
        }
      >
        {frames.map((creative, i) => {
          const offsets = [
            "left-0 top-10 z-10 -rotate-[7deg] translate-x-0",
            "left-1/2 top-0 z-20 -translate-x-1/2",
            "right-0 top-14 z-10 rotate-[7deg]",
          ];
          return (
            <motion.div
              key={creative.id}
              className={`absolute w-[46%] ${offsets[i]}`}
              initial={reduced ? false : { opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35 + i * 0.14,
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className="overflow-hidden rounded-xl border border-white/15 shadow-[0_40px_80px_-30px_rgba(3,20,44,0.8)]"
                style={{ transform: `translateZ(${[32, 64, 32][i]}px)` }}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={creative.thumbnail}
                    alt=""
                    fill
                    priority={i === 1}
                    sizes="(max-width: 768px) 45vw, 260px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy-deep/20" />
                  {/* Ad-frame chrome */}
                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
                    <span className="rounded-full bg-white/15 px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                      Ad · {creative.type}
                    </span>
                    <span className="size-1.5 rounded-full bg-accent" />
                  </div>
                  <p className="absolute inset-x-0 bottom-0 p-3 text-[0.68rem] font-semibold leading-snug text-white/95">
                    {creative.hook.replace(/^“|”$/g, "")}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Deck base plate — grounds the composition */}
      <div className="absolute -bottom-10 left-1/2 h-24 w-[78%] -translate-x-1/2 rounded-[50%] bg-brand/25 blur-2xl" />
    </div>
  );
}

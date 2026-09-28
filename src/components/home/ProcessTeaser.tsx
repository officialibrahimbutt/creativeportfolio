"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { SectionHead } from "@/components/ui/SectionHead";
import { processSteps } from "@/content/process";

export function ProcessTeaser() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.6"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px 520px at -10% 0%, rgba(21,101,245,0.18), transparent 60%)",
        }}
      />
      <div className="container-x relative mx-auto max-w-[90rem] section-y">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.6fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHead
              eyebrow="The creative engine"
              tone="dark"
              title="Six steps. Every asset goes through all of them."
              copy="The finished ad is the output. The reasoning — research, hypothesis, angle — is the deliverable. That's what makes the work testable instead of decorative."
            />
            <Link
              href="/process"
              className="group mt-8 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-accent"
            >
              See the full process
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div ref={ref} className="relative">
            {/* Scroll-driven progress rail */}
            <div className="absolute bottom-0 left-[7px] top-2 w-px bg-white/12" aria-hidden>
              <motion.div
                className="h-full w-px origin-top bg-accent"
                style={reduced ? { scaleY: 0 } : { scaleY: progress }}
              />
            </div>

            <div className="space-y-14">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="relative pl-12"
                  initial={reduced ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span
                    className={`absolute left-0 top-1.5 size-[15px] rounded-full border-2 ${
                      i === processSteps.length - 1
                        ? "border-accent bg-accent/25"
                        : "border-accent/60 bg-navy-deep"
                    }`}
                  />
                  <div className="flex flex-wrap items-baseline gap-x-4">
                    <span className="metadata text-accent">{step.number}</span>
                    <h3 className="font-display text-[1.35rem] font-semibold tracking-[-0.015em] md:text-[1.5rem]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-xl leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

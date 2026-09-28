"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { featuredCreatives } from "@/content/creatives";
import { Button } from "@/components/ui/Button";
import { CreativeDeck } from "@/components/creative/CreativeDeck";

const EASE = [0.16, 1, 0.3, 1] as const;

const metaItems = ["Ecommerce & DTC", "Founders & small teams", "Growth-stage brands"];

export function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduced ? false : ({ opacity: 0, y: 34 } as const),
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.9, ease: EASE },
  });

  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 640px at 80% -12%, rgba(21,101,245,0.32), transparent 62%), radial-gradient(900px 520px at -12% 108%, rgba(7,33,71,0.85), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container-x relative mx-auto max-w-[90rem] pb-20 pt-32 md:pb-28 md:pt-44 lg:pb-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
          <div>
            <motion.p {...rise(0.05)} className="eyebrow text-white/60">
              Performance Creative Studio — Meta &amp; TikTok
            </motion.p>

            <h1 className="display-xl mt-7 max-w-[13ch]">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduced ? false : { y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.12, duration: 1, ease: EASE }}
                >
                  Ad creative with
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduced ? false : { y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.22, duration: 1, ease: EASE }}
                >
                  a reason
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  className="block text-accent"
                  initial={reduced ? false : { y: "108%" }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.32, duration: 1, ease: EASE }}
                >
                  to exist.
                </motion.span>
              </span>
            </h1>

            <motion.p
              {...rise(0.42)}
              className="mt-7 max-w-[52ch] text-[1.05rem] leading-relaxed text-white/65 md:mt-9 md:text-[1.15rem]"
            >
              TechGrowth Creative builds research-backed ad creative for brands
              running paid social. Angles, hooks, scripts, finished assets —
              every piece ships with a hypothesis attached.
            </motion.p>

            <motion.div {...rise(0.52)} className="mt-9 flex flex-wrap items-center gap-4">
              <Button href={site.contact.whatsappUrl} external size="lg">
                {site.cta.primary}
              </Button>
              <Button href="/work" variant="outlineLight" size="lg">
                {site.cta.secondary}
              </Button>
            </motion.div>

            <motion.ul
              {...rise(0.62)}
              className="metadata mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-white/45"
            >
              {metaItems.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="size-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="relative">
            <CreativeDeck creatives={featuredCreatives} />
          </div>
        </div>
      </div>
    </section>
  );
}

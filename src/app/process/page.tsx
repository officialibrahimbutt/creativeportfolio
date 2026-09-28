import type { Metadata } from "next";
import { BadgeCheck } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { ProcessTeaser } from "@/components/home/ProcessTeaser";
import { FinalCta } from "@/components/home/FinalCta";
import { missionStatements, principles } from "@/content/process";

export const metadata: Metadata = {
  title: "Mission & Process",
  description:
    "How TechGrowth Creative works: research before production, angles before assets, testing before taste. The six-step creative engine behind every ad we ship.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission & Process"
        title="Creative is a system. Ours runs on research."
        copy="Most agencies start with production. We start with understanding — the market, the buyer, the objection — and let the creative grow from there. This page is the honest version of how that happens."
      />

      {/* Mission statements */}
      <section className="bg-light">
        <div className="container-x mx-auto max-w-[90rem] section-y">
          <div className="space-y-2">
            {missionStatements.map((line, i) => (
              <h2
                key={line}
                className={
                  i === 1 ? "display-lg text-navy" : "display-lg text-navy/35"
                }
              >
                <TextReveal delay={i * 0.08}>{line}</TextReveal>
              </h2>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl leading-relaxed text-muted">
              That ordering isn&apos;t a slogan — it&apos;s the order things
              actually happen here. Production sits last because it&apos;s the
              cheapest part to fix and the most expensive part to guess at.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The engine */}
      <ProcessTeaser />

      {/* Principles */}
      <section className="bg-white">
        <div className="container-x mx-auto max-w-[90rem] section-y">
          <Reveal>
            <p className="eyebrow text-muted">Operating principles</p>
            <h2 className="display-md mt-4 max-w-2xl text-navy">
              Three rules the studio doesn&apos;t bend.
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map((p, i) => (
              <StaggerItem key={p.title} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-line bg-light p-8">
                  <span className="metadata text-accent">
                    Rule {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display-sm mt-4 text-navy">{p.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-start gap-5 rounded-xl border border-brand/20 bg-brand/[0.04] p-8 md:flex-row md:items-center md:p-10">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                <BadgeCheck className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-navy">
                  Quality control is part of production, not a final glance.
                </h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-muted">
                  Every export is checked against platform specs, safe zones,
                  caption timing and the hypothesis it was built on. An ad that
                  renders wrong in-feed isn&apos;t a small mistake — it&apos;s a
                  wasted test.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

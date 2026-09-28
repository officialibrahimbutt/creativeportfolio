import { Check, Minus } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";

const aiDoes = [
  "Production speed that keeps volume affordable",
  "Variations, versions and localization",
  "Editing throughput — cuts, captions, sizing",
  "Consistency across a whole batch",
];

const humansHold = [
  "Market and competitor research",
  "Creative angles and hypotheses",
  "Scripting and direct-response messaging",
  "Creative direction, taste and final calls",
];

export function HowWeThink() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 110% 0%, rgba(21,101,245,0.22), transparent 60%)",
        }}
      />
      <div className="container-x relative mx-auto max-w-[90rem] section-y">
        <SectionHead
          eyebrow="How we think"
          tone="dark"
          title={
            <TextReveal>
              AI is our production advantage. It was never the product.
            </TextReveal>
          }
        />

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl leading-relaxed text-white/65">
            The tools help us produce more variations, faster, without inflating
            budgets or timelines. But the thinking — the research, the angle,
            the hook, the reason a buyer should care — stays human. That is
            where creative wins or loses, and it is the part we refuse to
            automate.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2">
          <Stagger className="rounded-xl border border-white/12 bg-white/[0.04] p-8 md:p-10">
            <StaggerItem>
              <p className="metadata flex items-center gap-2.5 text-accent">
                <span className="grid size-6 place-items-center rounded-full bg-accent/15">
                  <Check className="size-3.5" />
                </span>
                What AI does here
              </p>
            </StaggerItem>
            <ul className="mt-6 space-y-4">
              {aiDoes.map((item) => (
                <StaggerItem key={item}>
                  <li className="flex items-start gap-3 text-[0.98rem] text-white/75">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent/70" />
                    {item}
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </Stagger>

          <Stagger className="rounded-xl border border-white/12 bg-white/[0.04] p-8 md:p-10">
            <StaggerItem>
              <p className="metadata flex items-center gap-2.5 text-white/60">
                <span className="grid size-6 place-items-center rounded-full bg-white/10">
                  <Minus className="size-3.5" />
                </span>
                What stays human
              </p>
            </StaggerItem>
            <ul className="mt-6 space-y-4">
              {humansHold.map((item) => (
                <StaggerItem key={item}>
                  <li className="flex items-start gap-3 text-[0.98rem] text-white/75">
                    <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                </StaggerItem>
              ))}
            </ul>
          </Stagger>
        </div>
      </div>
    </section>
  );
}

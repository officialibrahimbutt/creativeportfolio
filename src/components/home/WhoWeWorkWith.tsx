import { Check, X } from "lucide-react";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/motion/Reveal";

const goodFit = [
  "Ecommerce and DTC brands with a product people already buy",
  "Founders who want creative tied to strategy, not vibes",
  "Growth-stage teams feeding Meta and TikTok every week",
  "Small businesses testing paid social for the first time — properly",
];

const notFit = [
  "You want one viral video and no testing plan",
  "You need an overnight rebrand or a logo",
  "You're shopping purely on price per video",
  "You want unlimited concepts and unlimited revisions",
];

export function WhoWeWorkWith() {
  return (
    <section className="bg-white">
      <div className="container-x mx-auto max-w-[90rem] section-y">
        <SectionHead
          eyebrow="Fit"
          title="Built for brands already in motion."
          copy="We do our best work with teams that have a product, a live account, and an appetite for structured testing. Here's an honest read on fit."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal className="rounded-xl border border-line bg-light p-8 md:p-10">
            <p className="metadata flex items-center gap-2.5 text-brand">
              <span className="grid size-6 place-items-center rounded-full bg-brand/10">
                <Check className="size-3.5" />
              </span>
              A strong fit
            </p>
            <ul className="mt-6 space-y-4">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-relaxed text-ink">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="rounded-xl border border-line p-8 md:p-10">
            <p className="metadata flex items-center gap-2.5 text-muted">
              <span className="grid size-6 place-items-center rounded-full bg-muted/10">
                <X className="size-3.5" />
              </span>
              Probably not
            </p>
            <ul className="mt-6 space-y-4">
              {notFit.map((item) => (
                <li key={item} className="flex items-start gap-3 leading-relaxed text-muted">
                  <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-muted/40" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

const services = [
  {
    n: "01",
    title: "Creative strategy & angle development",
    body: "The idea comes first. Every creative ships with the angle it tests and the belief it challenges.",
  },
  {
    n: "02",
    title: "Hook writing & scripting",
    body: "The first three seconds get written with intent — then the script, the copy, and the on-screen text.",
  },
  {
    n: "03",
    title: "Production & editing",
    body: "AI-assisted, human-directed. Assembly, motion, captions and sound, cut for the feed — not the showreel.",
  },
  {
    n: "04",
    title: "Testing structure",
    body: "Batches built so results tell you something. One variable at a time, learning that compounds.",
  },
];

export function WhatWeDo() {
  return (
    <section className="bg-light">
      <div className="container-x mx-auto max-w-[90rem] section-y">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHead
              eyebrow="What we actually do"
              title="Not edits. Not templates. Finished ads, engineered to be tested."
              copy="Most creative fails before the edit starts — because the idea was never there. We start with your market: competitor ad libraries, buyer objections, the language your customers already use. Then we design angles worth testing and produce them properly."
            />
            <Reveal delay={0.2}>
              <p className="mt-8 border-l-2 border-accent pl-5 text-[0.95rem] leading-relaxed text-ink">
                If a creative can&apos;t explain why it exists, it doesn&apos;t
                leave the studio.
              </p>
            </Reveal>
          </div>

          <Stagger className="divide-y divide-line border-t border-line">
            {services.map((s) => (
              <StaggerItem key={s.n}>
                <div className="group flex gap-6 py-8 transition-colors md:gap-10 md:py-10">
                  <span className="font-display text-[0.85rem] font-semibold text-accent md:pt-1.5">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="display-sm text-navy transition-transform duration-500 group-hover:translate-x-1.5">
                      {s.title}
                    </h3>
                    <p className="mt-3 max-w-md leading-relaxed text-muted">
                      {s.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

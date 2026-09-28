import { SectionHead } from "@/components/ui/SectionHead";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";

const angles = [
  {
    name: "Problem-first",
    example: "\u201CYour serum isn't failing. Your routine is.\u201D",
    note: "Opens on the symptom the buyer already feels.",
  },
  {
    name: "Social proof",
    example: "\u201CThe reason it keeps selling out.\u201D",
    note: "Borrows the confidence of the crowd.",
  },
  {
    name: "Feature breakdown",
    example: "\u201CWhat 10% niacinamide actually does.\u201D",
    note: "Proof for buyers who ignore aesthetics.",
  },
  {
    name: "Myth-breaking",
    example: "\u201CClean beauty is a marketing term. Here's what matters.\u201D",
    note: "Challenges a belief to earn attention.",
  },
  {
    name: "Comparison",
    example: "\u201CNext to the one that costs three times more.\u201D",
    note: "Positions against the known alternative.",
  },
];

export function Angles() {
  return (
    <section className="bg-white">
      <div className="container-x mx-auto max-w-[90rem] section-y">
        <SectionHead
          eyebrow="Creative angles"
          title="One product. Five beliefs worth testing."
          copy="Angles are the strategic ideas under the ads. Take one skincare product — each angle is a different conversation with the same buyer. We ship them as a structured batch, so your ad account tells you which belief converts."
        />

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {angles.map((angle, i) => (
            <StaggerItem key={angle.name} className="h-full">
              <div className="group flex h-full flex-col rounded-xl border border-line bg-light p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/40 hover:bg-white hover:shadow-[0_24px_50px_-30px_rgba(6,44,90,0.35)]">
                <span className="metadata text-accent">
                  Angle {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-sm mt-4 text-navy">{angle.name}</h3>
                <p className="mt-4 font-display text-[0.98rem] font-medium leading-snug text-ink">
                  {angle.example}
                </p>
                <p className="mt-auto pt-5 text-[0.85rem] leading-relaxed text-muted">
                  {angle.note}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-10 max-w-2xl border-l-2 border-brand pl-5 text-[0.95rem] leading-relaxed text-muted">
          We don&apos;t ship one brand video and hope. Structured variation is
          what makes the learning — and the winner — repeatable.
        </p>
      </div>
    </section>
  );
}

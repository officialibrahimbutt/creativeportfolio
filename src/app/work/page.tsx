import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { NicheCard } from "@/components/creative/NicheCard";
import { VaultExplorer } from "@/components/creative/VaultExplorer";
import { Reveal } from "@/components/motion/Reveal";
import { niches } from "@/content/niches";
import { creatives } from "@/content/creatives";

export const metadata: Metadata = {
  title: "The Creative Vault",
  description:
    "A curated archive of ad creative, concepts and spec work from TechGrowth Creative — each entry with its angle, hook and the hypothesis it was built to test.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="The Creative Vault"
        title="An archive of the thinking, not just the output."
        copy={`${creatives.length} creatives and concepts across ${niches.length} niches — every entry shows its angle, its opening line, and what it was designed to test. Some client work, some spec. Both are labeled.`}
      />

      <section className="bg-light">
        <div className="container-x mx-auto max-w-[90rem] section-y">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-muted">Niches</p>
                <h2 className="display-md mt-4 max-w-xl text-navy">
                  Start with your shelf.
                </h2>
              </div>
              <p className="max-w-sm text-[0.92rem] leading-relaxed text-muted">
                Each niche carries its own buyer psychology. Pick yours to see
                how the angles change.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {niches.map((n) => (
                <NicheCard key={n.id} niche={n} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white border-t border-line">
        <div className="container-x mx-auto max-w-[90rem] section-y">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="eyebrow text-muted">The Archive</p>
                <h2 className="display-md mt-4 max-w-xl text-navy">
                  Every creative, with its reasoning attached.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="mt-12">
            <VaultExplorer />
          </div>
        </div>
      </section>
    </>
  );
}
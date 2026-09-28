import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  FlaskConical,
  Lightbulb,
  Quote,
  ScrollText,
  Target,
} from "lucide-react";
import { creatives, getCreative } from "@/content/creatives";
import { nicheLabel } from "@/content/niches";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Reveal } from "@/components/motion/Reveal";
import { CreativeCard } from "@/components/creative/CreativeCard";
import { FinalCta } from "@/components/home/FinalCta";
import { site } from "@/content/site";

export function generateStaticParams() {
  return creatives.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const creative = getCreative(slug);
  if (!creative) return {};
  return {
    title: creative.title,
    description: creative.description,
    alternates: { canonical: `/work/${creative.slug}` },
    openGraph: {
      title: `${creative.title} — ${site.name}`,
      description: creative.description,
      images: [{ url: creative.thumbnail, width: 1200, height: 1500 }],
    },
  };
}

export default async function CreativeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const creative = getCreative(slug);
  if (!creative) notFound();

  const related = creatives
    .filter((c) => c.id !== creative.id)
    .sort((a, b) => (a.niche === creative.niche ? -1 : 0) - (b.niche === creative.niche ? -1 : 0))
    .slice(0, 3);

  return (
    <>
      {/* Hero band */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 520px at 85% -10%, rgba(21,101,245,0.3), transparent 60%)",
          }}
        />
        <div className="container-x relative mx-auto max-w-[90rem] pb-14 pt-32 md:pb-20 md:pt-44">
          <Reveal>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-[0.85rem] font-medium text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Creative Vault
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <StatusBadge status={creative.status} />
              <span className="rounded-full border border-white/20 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/80">
                {creative.type}
              </span>
              <span className="metadata text-white/50">
                {nicheLabel(creative.niche)}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <h1 className="display-lg mt-6 max-w-3xl">{creative.title}</h1>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="bg-light">
        <div className="container-x mx-auto max-w-[90rem] section-y">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            {/* Visual + description */}
            <div>
              <Reveal>
                <div className="relative overflow-hidden rounded-xl border border-line bg-navy-soft">
                  <div className="relative aspect-[4/5] max-h-[760px] w-full">
                    <Image
                      src={creative.thumbnail}
                      alt={`${creative.title} — ${creative.type} ad creative concept for ${nicheLabel(creative.niche)}`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-10 max-w-xl">
                  <p className="eyebrow text-muted">The creative</p>
                  <p className="mt-5 text-[1.05rem] leading-relaxed text-ink">
                    {creative.description}
                  </p>
                  {creative.status === "spec" ? (
                    <p className="mt-6 flex items-start gap-3 rounded-lg border border-accent/30 bg-accent/5 p-4 text-[0.88rem] leading-relaxed text-ink">
                      <FlaskConical className="mt-0.5 size-4 shrink-0 text-accent" />
                      This is a spec concept — produced to demonstrate how the
                      studio thinks. It carries no client performance data and
                      makes no claims.
                    </p>
                  ) : null}
                </div>
              </Reveal>
            </div>

            {/* Strategic detail panel */}
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal delay={0.15}>
                <div className="rounded-xl border border-line bg-white p-8 md:p-9">
                  <p className="metadata text-muted">The brief, decoded</p>

                  <div className="mt-7 space-y-8">
                    <div>
                      <p className="flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-brand">
                        <Target className="size-4" />
                        Creative angle
                      </p>
                      <p className="mt-3 leading-relaxed text-ink">
                        {creative.angle}
                      </p>
                    </div>

                    <div className="rounded-lg bg-light p-5">
                      <p className="flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-navy">
                        <Quote className="size-4" />
                        The hook
                      </p>
                      <p className="mt-3 font-display text-[1.08rem] font-medium leading-snug text-navy">
                        {creative.hook}
                      </p>
                    </div>

                    <div>
                      <p className="flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-brand">
                        <Lightbulb className="size-4" />
                        Concept
                      </p>
                      <p className="mt-3 leading-relaxed text-muted">
                        {creative.concept}
                      </p>
                    </div>

                    <div>
                      <p className="flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-brand">
                        <ScrollText className="size-4" />
                        Test notes
                      </p>
                      <p className="mt-3 leading-relaxed text-muted">
                        {creative.testNotes}
                      </p>
                    </div>
                  </div>

                  {creative.instagramUrl ? (
                    <a
                      href={creative.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-9 flex h-13 w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 font-semibold text-white transition-colors hover:bg-brand-deep"
                    >
                      Watch the Reel
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <p className="mt-9 border-t border-line pt-6 text-[0.85rem] leading-relaxed text-muted">
                      No public reel for this concept yet. Want it produced for
                      your brand? That conversation starts on WhatsApp.
                    </p>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-line bg-white">
        <div className="container-x mx-auto max-w-[90rem] section-y">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="display-md text-navy">Keep digging through the vault.</h2>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-[0.95rem] font-semibold text-brand"
              >
                All creatives
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((c, i) => (
              <Reveal key={c.id} delay={0.06 * i}>
                <CreativeCard creative={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

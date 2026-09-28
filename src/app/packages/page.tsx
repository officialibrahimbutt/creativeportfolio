import type { Metadata } from "next";
import { ArrowUpRight, Check, GitBranch, Layers } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import {
  customScopeIntro,
  customScopeItems,
  packages,
} from "@/content/packages";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Three engagement models — Starter Creative Sprint, Growth Creative Sprint and the Monthly Creative Engine. Scope and deliverables explained; pricing shared when scope is understood.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Engagement models"
        title="Scope first. Pricing when it makes sense."
        copy="Three ways to work with the studio. Each one is a defined scope with defined deliverables — no unlimited concepts, no unlimited revisions, no surprise invoices. Pricing is shared once we understand what you're testing."
      />

      <section className="bg-light">
        <div className="container-x mx-auto max-w-[90rem] section-y">
          <Stagger className="grid gap-6 lg:grid-cols-3 lg:items-start">
            {packages.map((pkg) => (
              <StaggerItem key={pkg.id} className="h-full">
                <article
                  className={cn(
                    "flex h-full flex-col rounded-xl border p-8 md:p-10",
                    pkg.highlight
                      ? "border-navy bg-navy text-white shadow-[0_36px_70px_-40px_rgba(6,44,90,0.7)]"
                      : "border-line bg-white"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <p
                      className={cn(
                        "metadata",
                        pkg.highlight ? "text-accent" : "text-muted"
                      )}
                    >
                      {pkg.id === "monthly" ? "Ongoing" : "Sprint"}
                    </p>
                    {pkg.highlight ? (
                      <span className="rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white">
                        Most structured
                      </span>
                    ) : null}
                  </div>

                  <h2 className="display-sm mt-5">{pkg.name}</h2>
                  <p
                    className={cn(
                      "mt-3 text-[0.95rem] font-medium",
                      pkg.highlight ? "text-white/85" : "text-ink"
                    )}
                  >
                    {pkg.target}
                  </p>
                  <p
                    className={cn(
                      "mt-3 text-[0.9rem] leading-relaxed",
                      pkg.highlight ? "text-white/60" : "text-muted"
                    )}
                  >
                    {pkg.summary}
                  </p>

                  <div
                    className={cn(
                      "mt-8 border-t pt-8",
                      pkg.highlight ? "border-white/15" : "border-line"
                    )}
                  >
                    <p
                      className={cn(
                        "metadata",
                        pkg.highlight ? "text-white/50" : "text-muted"
                      )}
                    >
                      Deliverables
                    </p>
                    <ul className="mt-5 space-y-3.5">
                      {pkg.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-3">
                          <span
                            className={cn(
                              "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full",
                              pkg.highlight
                                ? "bg-accent/15 text-accent"
                                : "bg-brand/10 text-brand"
                            )}
                          >
                            <Check className="size-3" strokeWidth={2.5} />
                          </span>
                          <span
                            className={cn(
                              "text-[0.92rem] leading-relaxed",
                              pkg.highlight ? "text-white/80" : "text-ink"
                            )}
                          >
                            {d}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={site.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group mt-auto inline-flex items-center justify-center gap-2 rounded-full py-3.5 text-[0.92rem] font-semibold transition-colors",
                      pkg.highlight
                        ? "bg-accent text-white hover:bg-[#e66e00]"
                        : "border border-ink/20 text-ink hover:border-navy hover:bg-navy hover:text-white"
                    )}
                  >
                    Discuss this scope
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {pkg.footnote ? (
                    <p
                      className={cn(
                        "mt-5 text-[0.8rem] leading-relaxed",
                        pkg.highlight ? "text-white/50" : "text-muted"
                      )}
                    >
                      {pkg.footnote}
                    </p>
                  ) : null}
                </article>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-10 max-w-2xl text-center text-[0.85rem] leading-relaxed text-muted">
              Every package includes one revision round per asset. Additional
              revision rounds can be added to any scope.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hook rule */}
      <section className="border-t border-line bg-white">
        <div className="container-x mx-auto max-w-[90rem] section-y">
          <Reveal>
            <div className="grid gap-10 rounded-xl border border-navy/15 bg-light p-8 md:p-14 lg:grid-cols-[1fr_1.3fr]">
              <div>
                <p className="eyebrow text-muted">Scope clarity</p>
                <h2 className="display-md mt-4 text-navy">
                  Hooks are openings. Not separate ads.
                </h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                    <Layers className="size-5" />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-navy">
                      1 core video + 5 hook openings
                    </p>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted">
                      Same narrative, same body, five different first three
                      seconds. One creative asset, five tested entry points.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                    <GitBranch className="size-5" />
                  </span>
                  <div>
                    <p className="font-display font-semibold text-navy">
                      5 separate video creatives
                    </p>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-muted">
                      Five genuinely different visual narratives, structures and
                      story arcs. Separate assets, separately scoped.
                    </p>
                  </div>
                </div>
                <p className="border-l-2 border-accent pl-5 text-[0.92rem] leading-relaxed text-ink">
                  We keep that distinction honest in every scope and quote, so
                  you always know what you&apos;re paying for.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Custom scope */}
      <section className="bg-navy text-white">
        <div className="container-x mx-auto max-w-[90rem] section-y">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow text-white/60">Custom creative scope</p>
              <h2 className="display-md mt-5 max-w-md">
                Not every program fits a package.
              </h2>
              <p className="mt-6 max-w-md leading-relaxed text-white/65">
                {customScopeIntro.split("We scope those programs individually")[0]}
              </p>
              <a
                href={site.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-[0.92rem] font-semibold text-white transition-colors hover:bg-[#e66e00]"
              >
                {site.cta.primary}
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-xl border border-white/12 bg-white/[0.04] p-8 md:p-10">
                <p className="metadata text-white/50">
                  Custom quoting covers
                </p>
                <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {customScopeItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.95rem] text-white/80"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-white/10 pt-6 text-[0.85rem] leading-relaxed text-white/50">
                  These are scope categories, not price cards. Numbers come
                  after the conversation — never as a lure.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export type LegalSection = { heading: string; body: string[] };

export function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} copy={intro} />
      <section className="bg-light">
        <div className="container-x mx-auto max-w-[90rem] section-y">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-20">
            <Reveal>
              <aside className="lg:sticky lg:top-32 lg:self-start">
                <p className="metadata text-muted">Document</p>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-ink">
                  Last updated
                  <br />
                  {updated}
                </p>
                <p className="mt-6 border-t border-line pt-6 text-[0.85rem] leading-relaxed text-muted">
                  Questions about this document? Write to{" "}
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="font-medium text-brand hover:underline"
                  >
                    {site.contact.email}
                  </a>
                  .
                </p>
              </aside>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="max-w-2xl">
                {sections.map((section, i) => (
                  <div
                    key={section.heading}
                    className={i > 0 ? "mt-12 border-t border-line pt-12" : ""}
                  >
                    <h2 className="display-sm text-navy">
                      <span className="mr-3 text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {section.heading}
                    </h2>
                    <div className="mt-5 space-y-4">
                      {section.body.map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 32)}
                          className="leading-relaxed text-muted"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

export const legalMetadata = (title: string, description: string): Metadata => ({
  title,
  description,
});

import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/motion/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";

export function FaqSection() {
  return (
    <section className="bg-light">
      <div className="container-x mx-auto max-w-[90rem] section-y">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHead
              eyebrow="Questions"
              title="Asked, answered."
              copy="The practical version — no sales fog. Anything missing, the fastest way to an answer is WhatsApp."
            />
            <Reveal delay={0.15}>
              <a
                href={site.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-brand"
              >
                Ask on WhatsApp — {site.contact.whatsappDisplay}
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessagesSquare } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a creative conversation with TechGrowth Creative. WhatsApp +92 320 003 4282 or creative@techgrowthdigital.com — tell us what you're selling and what you've tested.",
  alternates: { canonical: "/contact" },
};

const steps = [
  {
    n: "01",
    title: "You reach out",
    body: "WhatsApp, email, or the form — whichever feels natural. A few honest lines about your product beat a formal brief.",
  },
  {
    n: "02",
    title: "We do homework first",
    body: "Before replying with a scope, we look at your market and your competitors' ads. The first reply already contains thinking.",
  },
  {
    n: "03",
    title: "Angles, then scope",
    body: "If it's a fit, you get proposed angles and a defined scope — before any production conversation or commitment.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're selling."
        copy="The fastest route is WhatsApp. The form works too — it reaches the same studio, and every message gets read by the people who'd actually run your creative program."
      />

      <section className="bg-light">
        <div className="container-x mx-auto max-w-[90rem] section-y">
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-14">
            <Reveal>
              <ContactForm />
            </Reveal>

            <div className="space-y-5">
              <Reveal delay={0.08}>
                <a
                  href={site.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-xl border border-navy bg-navy p-7 text-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(6,44,90,0.7)]"
                >
                  <div>
                    <p className="metadata flex items-center gap-2 text-white/55">
                      <MessagesSquare className="size-4 text-accent" />
                      Fastest — WhatsApp
                    </p>
                    <p className="mt-3 font-display text-xl font-semibold tracking-[-0.01em]">
                      {site.contact.whatsappDisplay}
                    </p>
                    <p className="mt-1.5 text-[0.88rem] text-white/60">
                      Voice notes welcome. Really.
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="size-5" />
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.14}>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-navy/30 hover:shadow-[0_30px_60px_-40px_rgba(6,44,90,0.5)]"
                >
                  <div>
                    <p className="metadata flex items-center gap-2 text-muted">
                      <Mail className="size-4 text-brand" />
                      Email
                    </p>
                    <p className="mt-3 break-all font-display text-lg font-semibold tracking-[-0.01em] text-navy">
                      {site.contact.email}
                    </p>
                    <p className="mt-1.5 text-[0.88rem] text-muted">
                      Best for briefs and asset links.
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line text-navy transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                    <ArrowUpRight className="size-5" />
                  </span>
                </a>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-xl border border-line bg-white p-7">
                  <p className="metadata text-muted">What happens next</p>
                  <ol className="mt-5 space-y-5">
                    {steps.map((step) => (
                      <li key={step.n} className="flex gap-4">
                        <span className="font-display text-[0.8rem] font-semibold text-accent">
                          {step.n}
                        </span>
                        <div>
                          <p className="font-display text-[0.98rem] font-semibold text-navy">
                            {step.title}
                          </p>
                          <p className="mt-1 text-[0.88rem] leading-relaxed text-muted">
                            {step.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

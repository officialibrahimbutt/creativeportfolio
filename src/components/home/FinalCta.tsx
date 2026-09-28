import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { MaskLine } from "@/components/motion/TextReveal";
import { site } from "@/content/site";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px 540px at 85% 120%, rgba(21,101,245,0.3), transparent 60%), radial-gradient(700px 400px at 0% -20%, rgba(7,33,71,0.9), transparent 60%)",
        }}
      />
      <div className="container-x relative mx-auto max-w-[90rem] section-y text-center">
        <Reveal>
          <p className="eyebrow justify-center text-white/60">
            Next step
          </p>
        </Reveal>
        <h2 className="display-lg mx-auto mt-6 max-w-3xl md:mt-8">
          <MaskLine>You&apos;ve seen how we think.</MaskLine>
          <MaskLine delay={0.12}>
            <span className="text-accent">Tell us what you&apos;re selling.</span>
          </MaskLine>
        </h2>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-xl leading-relaxed text-white/65">
            A short conversation about your product, your buyers, and what
            you&apos;ve already tested. If it&apos;s a fit, we come back with
            angles and a scope — before anything gets produced.
          </p>
        </Reveal>
        <Reveal delay={0.28}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={site.contact.whatsappUrl} external size="lg">
              {site.cta.primary}
            </Button>
            <Button href="/contact" variant="outlineLight" size="lg" arrow="none">
              <Mail className="size-4" />
              Use the form
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.36}>
          <p className="mt-8 text-[0.85rem] text-white/45">
            WhatsApp {site.contact.whatsappDisplay} · {site.contact.email}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

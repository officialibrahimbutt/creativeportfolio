import {
  BadgeCheck,
  Captions,
  Clapperboard,
  Compass,
  Image as ImageIcon,
  MousePointerClick,
  Package,
  PenLine,
  ScrollText,
  Smartphone,
  Zap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { SectionHead } from "@/components/ui/SectionHead";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { capabilities } from "@/content/capabilities";

const icons: Record<string, LucideIcon> = {
  Clapperboard,
  Smartphone,
  Package,
  Zap,
  Image: ImageIcon,
  MousePointerClick,
  Compass,
  PenLine,
  ScrollText,
  Captions,
  BadgeCheck,
};

export function CapabilitiesStrip() {
  return (
    <section className="bg-light">
      <div className="container-x mx-auto max-w-[90rem] section-y">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHead
              eyebrow="Capabilities"
              title="Twelve things we do. Each one has a job."
              copy="No capability exists to pad a proposal. If it doesn't earn attention, carry a message, or test a belief, it isn't on this list."
            />
            <Link
              href="/capabilities"
              className="group mt-8 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-brand"
            >
              Explore capabilities
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <Stagger className="grid gap-x-10 sm:grid-cols-2">
            {capabilities.map((cap, i) => {
              const Icon = icons[cap.icon] ?? Compass;
              return (
                <StaggerItem key={cap.name}>
                  <div className="group flex gap-5 border-t border-line py-6">
                    <span className="metadata w-6 shrink-0 pt-1 text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="flex items-center gap-2.5 font-display text-[1.02rem] font-semibold tracking-[-0.01em] text-navy">
                        <Icon className="size-4 text-brand transition-colors duration-300 group-hover:text-accent" strokeWidth={1.8} />
                        {cap.name}
                      </h3>
                      <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                        {cap.purpose}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

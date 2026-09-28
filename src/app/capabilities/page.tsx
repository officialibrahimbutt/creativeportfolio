import type { Metadata } from "next";
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
  X,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { capabilities, capabilitiesIntro } from "@/content/capabilities";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Strategic short-form video, AI UGC-style creative, static ad concepts, hook variations, motion and direct-response copywriting — every capability with its advertising purpose.",
  alternates: { canonical: "/capabilities" },
};

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

const notThis = [
  "An AI tool you operate yourself",
  "A template marketplace",
  "A cheap editing service",
  "A content calendar agency",
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title="What we make, and what it's for."
        copy={capabilitiesIntro}
      />

      <section className="bg-light">
        <div className="container-x mx-auto max-w-[90rem] section-y">
          <Stagger className="border-t border-line">
            {capabilities.map((cap, i) => {
              const Icon = icons[cap.icon] ?? Compass;
              return (
                <StaggerItem key={cap.name}>
                  <div className="group grid gap-3 border-b border-line py-8 transition-colors duration-300 hover:bg-white md:grid-cols-[5rem_1.1fr_1.6fr] md:items-baseline md:gap-8 md:py-10">
                    <span className="metadata pl-1 text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="display-sm flex items-center gap-3 text-navy transition-transform duration-500 group-hover:translate-x-1.5">
                      <Icon
                        className="size-5 shrink-0 text-brand transition-colors duration-300 group-hover:text-accent"
                        strokeWidth={1.8}
                      />
                      {cap.name}
                    </h2>
                    <p className="max-w-xl leading-relaxed text-muted md:justify-self-end">
                      {cap.purpose}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>

          <Reveal delay={0.1}>
            <div className="mt-16 grid gap-8 rounded-xl border border-line bg-white p-8 md:grid-cols-[1fr_1.4fr] md:items-center md:p-12">
              <div>
                <p className="eyebrow text-muted">Equally important</p>
                <h2 className="display-md mt-4 text-navy">
                  What we are not.
                </h2>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {notThis.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-light px-4 py-3 text-[0.92rem] text-muted"
                  >
                    <X className="size-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}

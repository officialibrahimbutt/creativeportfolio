import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { HowWeThink } from "@/components/home/HowWeThink";
import { VaultPreview } from "@/components/home/VaultPreview";
import { CapabilitiesStrip } from "@/components/home/CapabilitiesStrip";
import { Angles } from "@/components/home/Angles";
import { ProcessTeaser } from "@/components/home/ProcessTeaser";
import { PackagesTeaser } from "@/components/home/PackagesTeaser";
import { WhoWeWorkWith } from "@/components/home/WhoWeWorkWith";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";
import { Marquee } from "@/components/motion/Marquee";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Performance Creative Studio for Meta & TikTok",
  description:
    "TechGrowth Creative builds research-backed ad creative for Meta and TikTok — angles, hooks, scripts and finished assets, each shipped with a hypothesis.",
  alternates: { canonical: "/" },
};

const tickerItems = [
  "Strategic Short-Form",
  "AI UGC-Style",
  "Hook Variations",
  "Static Ad Concepts",
  "Product / Demo",
  "Hypermotion",
  "Direct-Response Copy",
  "Creative Direction",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.contact.email,
  telephone: site.contact.whatsappDisplay,
  areaServed: "Worldwide",
  serviceType: [
    "Advertising creative production",
    "Short-form video ads",
    "UGC-style creative",
    "Static ad design",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <div className="border-y border-white/10 bg-navy-deep py-5">
        <Marquee>
          {tickerItems.map((item) => (
            <span
              key={item}
              className="mx-7 flex items-center gap-7 text-[0.75rem] font-semibold uppercase tracking-[0.24em] text-white/40"
            >
              {item}
              <span className="size-1.5 rounded-full bg-accent/60" />
            </span>
          ))}
        </Marquee>
      </div>
      <WhatWeDo />
      <HowWeThink />
      <VaultPreview />
      <CapabilitiesStrip />
      <Angles />
      <ProcessTeaser />
      <PackagesTeaser />
      <WhoWeWorkWith />
      <FaqSection />
      <FinalCta />
    </>
  );
}

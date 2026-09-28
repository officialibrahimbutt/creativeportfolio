import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CreativeCard } from "@/components/creative/CreativeCard";
import { featuredCreatives } from "@/content/creatives";

export function VaultPreview() {
  return (
    <section className="bg-white">
      <div className="container-x mx-auto max-w-[90rem] section-y">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="The Creative Vault"
            title="Work you can inspect, not just admire."
            copy="Concepts built around specific angles and hooks. Every entry shows its thinking — the angle, the opening line, and what it was designed to test."
          />
          <Button href="/work" variant="outline" arrow="upRight" className="mb-1 shrink-0">
            Open the Creative Vault
          </Button>
        </div>

        <Stagger className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featuredCreatives.map((creative, i) => (
            <StaggerItem key={creative.id}>
              <CreativeCard creative={creative} priority={i < 2} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

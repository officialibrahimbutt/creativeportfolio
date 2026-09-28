import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { TextReveal } from "@/components/motion/TextReveal";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  copy,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy?: ReactNode;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* Restrained atmosphere: deep radial + thin structural lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 75% -10%, rgba(21,101,245,0.28), transparent 60%), radial-gradient(800px 500px at -10% 110%, rgba(3,20,44,0.9), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div
        className={cn(
          "container-x relative mx-auto max-w-[90rem] pb-16 pt-36 md:pb-24 md:pt-48",
          align === "center" && "text-center"
        )}
      >
        <Reveal>
          <p className="eyebrow text-white/60">{eyebrow}</p>
        </Reveal>
        <h1 className="display-xl mt-6 max-w-4xl text-white md:mt-8">
          <TextReveal>{title}</TextReveal>
        </h1>
        {copy ? (
          <Reveal delay={0.2}>
            <p
              className={cn(
                "lead mt-6 max-w-xl text-white/65 md:mt-8",
                align === "center" && "mx-auto"
              )}
            >
              {copy}
            </p>
          </Reveal>
        ) : null}
        {children}
      </div>
    </section>
  );
}

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { MaskLine } from "@/components/motion/TextReveal";

export function SectionHead({
  eyebrow,
  title,
  copy,
  tone = "light",
  align = "left",
  className,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <Reveal>
        <p
          className={cn(
            "eyebrow",
            tone === "dark" ? "text-white/60" : "text-muted"
          )}
        >
          {eyebrow}
        </p>
      </Reveal>
      <h2
        className={cn(
          "display-lg mt-5",
          tone === "dark" ? "text-white" : "text-navy"
        )}
      >
        {typeof title === "string" ? <MaskLine>{title}</MaskLine> : title}
      </h2>
      {copy ? (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "lead mt-6 max-w-xl",
              align === "center" && "mx-auto",
              tone === "dark" && "text-white/65"
            )}
          >
            {copy}
          </p>
        </Reveal>
      ) : null}
      {children}
    </div>
  );
}

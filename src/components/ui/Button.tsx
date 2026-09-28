import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outlineLight" | "white";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-colors duration-300 cursor-pointer select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-deep shadow-[0_10px_30px_-12px_rgba(21,101,245,0.55)]",
  outline:
    "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-white",
  outlineLight:
    "border border-white/25 text-white hover:border-white hover:bg-white hover:text-navy",
  white: "bg-white text-navy hover:bg-light",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-[0.92rem]",
  lg: "h-14 px-8 text-[1rem]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  arrow = "right",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  arrow?: "right" | "upRight" | "none";
  className?: string;
}) {
  const cls = cn(base, variants[variant], sizes[size], className);
  const icon =
    arrow === "none" ? null : arrow === "upRight" ? (
      <ArrowUpRight
        className="size-[1.1em] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={2}
      />
    ) : (
      <ArrowRight
        className="size-[1.1em] transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={2}
      />
    );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
      {icon}
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, SquarePlay } from "lucide-react";
import type { Creative } from "@/content/creatives";
import { nicheLabel } from "@/content/niches";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { cn } from "@/lib/utils";

export function CreativeCard({
  creative,
  priority = false,
  className,
}: {
  creative: Creative;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/work/${creative.slug}`}
      className={cn(
        "group block focus-visible:outline-offset-4",
        className
      )}
      aria-label={`${creative.title} — ${creative.type}`}
    >
      <div className="relative overflow-hidden rounded-xl border border-line bg-navy-soft">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={creative.thumbnail}
            alt={`${creative.title} — ${creative.type} ad creative for ${nicheLabel(creative.niche)}`}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
            <StatusBadge status={creative.status} />
            <span className="rounded-full border border-white/20 bg-navy-deep/40 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm">
              {creative.type}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-display text-[1.15rem] font-semibold tracking-[-0.01em] text-white">
                {creative.title}
              </h3>
              <span className="grid size-9 shrink-0 translate-y-1 place-items-center rounded-full bg-white text-navy opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUpRight className="size-4" />
              </span>
            </div>
            <p className="metadata mt-2 text-white/60">
              {nicheLabel(creative.niche)}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-between gap-4 px-1 pt-4">
        <p className="text-[0.85rem] leading-relaxed text-muted line-clamp-2">
          {creative.angle}
        </p>
        {creative.instagramUrl ? (
          <span className="mt-0.5 inline-flex shrink-0 items-center gap-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-brand">
            <SquarePlay className="size-3.5" />
            Reel
          </span>
        ) : null}
      </div>
    </Link>
  );
}

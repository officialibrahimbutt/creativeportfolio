import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Niche } from "@/content/niches";
import { creatives } from "@/content/creatives";

export function NicheCard({ niche }: { niche: Niche }) {
  const count = creatives.filter((c) => c.niche === niche.id).length;

  return (
    <Link
      href={`/work?niche=${niche.id}`}
      className="group relative block overflow-hidden rounded-xl border border-line bg-navy-soft"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={niche.image}
          alt={`${niche.label} ad creative`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div>
            <h3 className="font-display text-[1.2rem] font-semibold tracking-[-0.01em] text-white">
              {niche.label}
            </h3>
            <p className="metadata mt-1.5 text-white/60">
              {count > 0 ? `${count} creative${count === 1 ? "" : "s"}` : "Vault opening soon"}
            </p>
          </div>
          <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/25 text-white transition-all duration-500 group-hover:border-accent group-hover:bg-accent">
            <ArrowRight className="size-4 transition-transform duration-500 group-hover:-rotate-45" />
          </span>
        </div>
      </div>
      <p className="px-5 py-4 text-[0.88rem] leading-relaxed text-muted">
        {niche.description}
      </p>
    </Link>
  );
}

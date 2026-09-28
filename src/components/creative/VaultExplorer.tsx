"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { SearchX } from "lucide-react";
import {
  creatives,
  creativeTypes,
  type Creative,
} from "@/content/creatives";
import { niches, nicheLabel } from "@/content/niches";
import { CreativeCard } from "@/components/creative/CreativeCard";
import { cn } from "@/lib/utils";

function FilterPill({
  active,
  onClick,
  children,
  count,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  count?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.85rem] font-medium transition-all duration-300",
        active
          ? "border-navy bg-navy text-white"
          : "border-line bg-white text-muted hover:border-navy/40 hover:text-navy"
      )}
    >
      {children}
      {typeof count === "number" ? (
        <span
          className={cn(
            "rounded-full px-1.5 py-0.5 text-[0.65rem] font-semibold",
            active ? "bg-white/15 text-white" : "bg-light text-muted"
          )}
        >
          {count}
        </span>
      ) : null}
    </button>
  );
}

export function VaultExplorer({ initialNiche }: { initialNiche?: string }) {
  const reduced = useReducedMotion();
  const validNiche = niches.some((n) => n.id === initialNiche);
  const [niche, setNiche] = useState<string>(validNiche ? initialNiche! : "all");
  const [type, setType] = useState<string>("all");

  const filtered = useMemo(
    () =>
      creatives.filter(
        (c: Creative) =>
          (niche === "all" || c.niche === niche) &&
          (type === "all" || c.type === type)
      ),
    [niche, type]
  );

  const nicheCount = (id: string) =>
    creatives.filter((c) => c.niche === id).length;
  const typeCount = (t: string) => creatives.filter((c) => c.type === t).length;

  return (
    <div>
      <div className="space-y-4">
        <div
          className="flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter by niche"
        >
          <span className="metadata mr-2 w-14 text-muted">Niche</span>
          <FilterPill active={niche === "all"} onClick={() => setNiche("all")}>
            All
          </FilterPill>
          {niches.map((n) => (
            <FilterPill
              key={n.id}
              active={niche === n.id}
              onClick={() => setNiche(n.id)}
              count={nicheCount(n.id)}
            >
              {n.label}
            </FilterPill>
          ))}
        </div>
        <div
          className="flex flex-wrap items-center gap-2 border-t border-line pt-4"
          role="group"
          aria-label="Filter by creative type"
        >
          <span className="metadata mr-2 w-14 text-muted">Type</span>
          <FilterPill active={type === "all"} onClick={() => setType("all")}>
            All
          </FilterPill>
          {creativeTypes.map((t) => (
            <FilterPill
              key={t}
              active={type === t}
              onClick={() => setType(t)}
              count={typeCount(t)}
            >
              {t}
            </FilterPill>
          ))}
        </div>
      </div>

      <p className="mt-8 metadata text-muted" aria-live="polite">
        {filtered.length} of {creatives.length} creatives
        {niche !== "all" ? ` · ${nicheLabel(niche)}` : ""}
        {type !== "all" ? ` · ${type}` : ""}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-10 flex flex-col items-center gap-4 rounded-xl border border-dashed border-line py-24 text-center">
          <SearchX className="size-8 text-muted" strokeWidth={1.5} />
          <div>
            <p className="font-display text-lg font-semibold text-navy">
              Nothing in this combination yet
            </p>
            <p className="mt-2 max-w-sm text-[0.92rem] text-muted">
              The vault grows with every sprint. Try another niche or type —
              or ask us to build the concept you&apos;re not seeing.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setNiche("all");
              setType("all");
            }}
            className="mt-2 rounded-full border border-line px-5 py-2 text-[0.85rem] font-medium text-ink transition-colors hover:border-navy hover:text-navy"
          >
            Reset filters
          </button>
        </div>
      ) : (
        <motion.div layout className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((creative) => (
              <motion.div
                key={creative.id}
                layout
                initial={reduced ? false : { opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.96, y: 16 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <CreativeCard creative={creative} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}

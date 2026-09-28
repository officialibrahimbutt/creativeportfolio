import { cn } from "@/lib/utils";
import type { CreativeStatus } from "@/content/creatives";

export function StatusBadge({
  status,
  className,
}: {
  status: CreativeStatus;
  className?: string;
}) {
  const spec = status === "spec";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em]",
        spec
          ? "border-accent/40 bg-accent/10 text-accent"
          : "border-brand/30 bg-brand/10 text-brand",
        className
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          spec ? "bg-accent" : "bg-brand"
        )}
      />
      {spec ? "Spec Concept" : "Client Work"}
    </span>
  );
}

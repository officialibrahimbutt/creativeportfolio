import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SectionHead } from "@/components/ui/SectionHead";
import { Stagger, StaggerItem } from "@/components/motion/Reveal";
import { packages } from "@/content/packages";

export function PackagesTeaser() {
  return (
    <section className="bg-light">
      <div className="container-x mx-auto max-w-[90rem] section-y">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="Engagement models"
            title="Three ways to work together. Scope first, pricing later."
            copy="Pricing is shared once we understand what you're testing — never before the scope makes sense."
          />
          <Link
            href="/packages"
            className="group mb-1 inline-flex shrink-0 items-center gap-2 text-[0.95rem] font-semibold text-brand"
          >
            Full package details
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3">
          {packages.map((pkg) => (
            <StaggerItem key={pkg.id} className="h-full">
              <Link
                href="/packages"
                className={`group flex h-full flex-col rounded-xl border p-8 transition-all duration-500 hover:-translate-y-1.5 md:p-9 ${
                  pkg.highlight
                    ? "border-navy bg-navy text-white shadow-[0_30px_60px_-35px_rgba(6,44,90,0.6)]"
                    : "border-line bg-white hover:border-navy/30 hover:shadow-[0_24px_50px_-30px_rgba(6,44,90,0.35)]"
                }`}
              >
                <p
                  className={`metadata ${
                    pkg.highlight ? "text-accent" : "text-muted"
                  }`}
                >
                  {pkg.id === "monthly" ? "Ongoing" : "Sprint"}
                </p>
                <h3 className="display-sm mt-4">{pkg.name}</h3>
                <p
                  className={`mt-3 text-[0.92rem] leading-relaxed ${
                    pkg.highlight ? "text-white/65" : "text-muted"
                  }`}
                >
                  {pkg.target}
                </p>
                <ul
                  className={`mt-6 space-y-2.5 text-[0.9rem] ${
                    pkg.highlight ? "text-white/75" : "text-ink"
                  }`}
                >
                  {pkg.deliverables.slice(0, 3).map((d) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <span
                        className={`mt-2 size-1.5 shrink-0 rounded-full ${
                          pkg.highlight ? "bg-accent" : "bg-brand"
                        }`}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
                <span
                  className={`mt-auto inline-flex items-center gap-2 pt-8 text-[0.88rem] font-semibold ${
                    pkg.highlight ? "text-accent" : "text-brand"
                  }`}
                >
                  View deliverables
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

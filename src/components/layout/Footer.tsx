import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { footerNav, nav, site } from "@/content/site";
import { Marquee } from "@/components/motion/Marquee";

const marqueeItems = [
  "Strategic Short-Form",
  "AI UGC-Style",
  "Hook Variations",
  "Static Concepts",
  "Product / Demo",
  "Hypermotion",
  "Direct-Response Copy",
  "Creative Direction",
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      {/* Discipline ticker */}
      <div className="border-b border-white/10 py-5">
        <Marquee slow>
          {marqueeItems.map((item) => (
            <span
              key={item}
              className="mx-6 flex items-center gap-6 text-[0.78rem] font-semibold uppercase tracking-[0.22em] text-white/45"
            >
              {item}
              <span className="size-1.5 rounded-full bg-accent/70" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container-x mx-auto max-w-[90rem]">
        <div className="grid gap-14 py-16 md:py-20 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-baseline gap-1.5">
              <span className="font-display text-xl font-semibold tracking-[-0.02em]">
                TechGrowth
              </span>
              <span className="size-[7px] rounded-[2px] bg-accent" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/50">
                Creative
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-[0.95rem] leading-relaxed text-white/55">
              A performance creative studio building research-backed ad
              creative for Meta and TikTok. Part of {site.parent}.
            </p>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <p className="metadata text-white/40">{group.title}</p>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[0.95rem] text-white/70 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <p className="metadata text-white/40">Contact</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={site.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[0.95rem] text-white/70 transition-colors hover:text-white"
                >
                  WhatsApp {site.contact.whatsappDisplay}
                  <ArrowUpRight className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="group inline-flex items-center gap-2 text-[0.95rem] text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="size-4 text-accent" />
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-[0.8rem] text-white/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-5">
              {nav.slice(0, 4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-white/70"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <span className="hidden h-3 w-px bg-white/15 md:block" />
            <span>Meta · TikTok</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";

function Wordmark({ light }: { light: boolean }) {
  return (
    <Link href="/" className="group flex items-baseline gap-1.5" aria-label="TechGrowth Creative — home">
      <span
        className={cn(
          "font-display text-[1.15rem] font-semibold tracking-[-0.02em] transition-colors duration-300",
          light ? "text-white" : "text-navy"
        )}
      >
        TechGrowth
      </span>
      <span className="size-[7px] translate-y-[-1px] rounded-[2px] bg-accent transition-transform duration-300 group-hover:rotate-45" />
      <span
        className={cn(
          "font-body text-[0.7rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-300",
          light ? "text-white/60" : "text-muted"
        )}
      >
        Creative
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const light = !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-line bg-white/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="container-x mx-auto flex h-[4.25rem] max-w-[90rem] items-center justify-between md:h-[4.75rem]">
          <Wordmark light={light} />

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-[0.88rem] font-medium transition-colors duration-300",
                    light
                      ? "text-white/75 hover:text-white"
                      : "text-muted hover:text-navy",
                    active && (light ? "text-white" : "text-navy")
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px bg-current transition-all duration-300",
                      active ? "w-full" : "w-0"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={site.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group hidden items-center gap-2 rounded-full px-5 py-2.5 text-[0.85rem] font-semibold transition-all duration-300 md:inline-flex",
                light
                  ? "bg-white text-navy hover:bg-accent hover:text-white"
                  : "bg-brand text-white hover:bg-brand-deep"
              )}
            >
              {site.cta.primaryShort}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={cn(
                "grid size-11 place-items-center rounded-full border transition-colors duration-300 lg:hidden",
                light
                  ? "border-white/25 text-white"
                  : "border-line text-navy"
              )}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 flex flex-col bg-navy-deep lg:hidden"
          >
            <div className="flex flex-1 flex-col justify-center container-x pt-24">
              <nav className="flex flex-col gap-2" aria-label="Mobile">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex items-center justify-between border-b border-white/10 py-4",
                        pathname === item.href ? "text-accent" : "text-white"
                      )}
                    >
                      <span className="font-display text-[2rem] font-semibold tracking-[-0.02em]">
                        {item.label}
                      </span>
                      <ArrowUpRight className="size-6 text-white/40 transition-all duration-300 group-hover:text-accent" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="container-x flex flex-col gap-4 pb-10"
            >
              <a
                href={site.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 items-center justify-center gap-2 rounded-full bg-brand font-semibold text-white"
              >
                {site.cta.primary}
                <ArrowUpRight className="size-5" />
              </a>
              <div className="flex items-center justify-between text-sm text-white/50">
                <span>{site.contact.whatsappDisplay}</span>
                <a href={`mailto:${site.contact.email}`} className="hover:text-white">
                  {site.contact.email}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

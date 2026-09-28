"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Loader2, TriangleAlert } from "lucide-react";
import { niches } from "@/content/niches";
import { platformOptions, site } from "@/content/site";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-line bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-muted/60 transition-colors duration-300 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

const labelClass = "mb-2 block text-[0.85rem] font-semibold text-navy";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [platform, setPlatform] = useState<string>("Meta");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(
          json?.error ??
            "Something went wrong sending your message. Try WhatsApp instead."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      setPlatform("Meta");
    } catch {
      setErrorMsg(
        "Network hiccup — your message didn't send. Try again or reach us on WhatsApp."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-xl border border-brand/25 bg-brand/[0.04] p-10 text-center"
        role="status"
      >
        <span className="grid size-16 place-items-center rounded-full bg-brand/10">
          <CheckCircle2 className="size-8 text-brand" />
        </span>
        <h3 className="display-sm mt-6 text-navy">Message received.</h3>
        <p className="mt-3 max-w-sm leading-relaxed text-muted">
          It lands in the studio&apos;s inbox, not a black hole. If you want a
          faster answer right now, WhatsApp is the direct line.
        </p>
        <a
          href={site.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-deep"
        >
          Message on WhatsApp
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-line bg-white p-7 md:p-10"
      noValidate={false}
    >
      {/* Honeypot — real users never see this */}
      <div className="hidden" aria-hidden>
        <label htmlFor="company-site">Company site</label>
        <input id="company-site" name="company_site" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="business" className={labelClass}>
            Business / Brand <span className="text-accent">*</span>
          </label>
          <input
            id="business"
            name="business"
            type="text"
            required
            autoComplete="organization"
            placeholder="The brand you're building"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@brand.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="website" className={labelClass}>
            Website{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>
          <input
            id="website"
            name="website"
            type="url"
            autoComplete="url"
            placeholder="https://"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="niche" className={labelClass}>
            Niche <span className="text-accent">*</span>
          </label>
          <select id="niche" name="niche" required defaultValue="" className={cn(inputClass, "appearance-none")}>
            <option value="" disabled>
              Select your niche
            </option>
            {niches.map((n) => (
              <option key={n.id} value={n.label}>
                {n.label}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <fieldset>
          <legend className={labelClass}>
            Platform <span className="text-accent">*</span>
          </legend>
          <div className="flex gap-2" role="radiogroup" aria-label="Platform">
            {platformOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                role="radio"
                aria-checked={platform === opt.value}
                onClick={() => setPlatform(opt.value)}
                className={cn(
                  "h-12 flex-1 rounded-lg border text-[0.88rem] font-medium transition-all duration-300",
                  platform === opt.value
                    ? "border-brand bg-brand/5 text-brand"
                    : "border-line text-muted hover:border-navy/40 hover:text-navy"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className={labelClass}>
          Additional message{" "}
          <span className="font-normal text-muted">
            (optional — what are you selling, and what have you already tested?)
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="The more honest the context, the better the first reply."
          className={cn(inputClass, "resize-y")}
        />
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-5">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex h-14 items-center justify-center gap-2.5 rounded-full bg-brand px-8 font-semibold text-white transition-all duration-300 hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send the brief
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>
        <p className="text-[0.8rem] text-muted">
          Goes straight to the studio. No newsletters, no drip.
        </p>
      </div>

      <div aria-live="polite">
        {status === "error" ? (
          <p className="mt-5 flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 p-4 text-[0.88rem] text-red-700">
            <TriangleAlert className="mt-0.5 size-4 shrink-0" />
            {errorMsg}
          </p>
        ) : null}
      </div>
    </form>
  );
}

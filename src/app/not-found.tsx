import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-navy-deep text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 80% -10%, rgba(21,101,245,0.3), transparent 60%)",
        }}
      />
      <div className="container-x relative mx-auto max-w-[90rem] py-32">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-[0.85rem] font-medium text-white/60 transition-colors hover:text-white"
        >
          <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to the studio
        </Link>
        <p className="eyebrow mt-10 text-white/60">404 — Off the storyboard</p>
        <h1 className="display-xl mt-6 max-w-2xl">
          This frame never made the cut.
        </h1>
        <p className="mt-6 max-w-md leading-relaxed text-white/60">
          The page you&apos;re after doesn&apos;t exist — or it was cut in a
          revision. The vault, however, is fully intact.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/work" variant="white" arrow="right">
            Open the Creative Vault
          </Button>
          <Button href={site.contact.whatsappUrl} external variant="outlineLight" arrow="upRight">
            {site.cta.primaryShort}
          </Button>
        </div>
      </div>
    </section>
  );
}

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { site } from "@/content/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Performance Creative Studio for Meta & TikTok`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "performance creative",
    "ad creative agency",
    "Meta ads creative",
    "TikTok ads creative",
    "UGC creative",
    "direct response creative",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — Performance Creative Studio`,
    description: site.description,
    images: [{ url: "/creative/beauty-serum-ugc.jpg", width: 1200, height: 1500 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Performance Creative Studio`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#062c5a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f%5B%5D=general-sans@400,500,600,700&f%5B%5D=switzer@400,500,600&display=swap"
        />
      </head>
      <body className="grain bg-light font-body text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SmoothScroll>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { creatives } from "@/content/creatives";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/work",
    "/capabilities",
    "/packages",
    "/process",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const creativeRoutes = creatives.map((c) => ({
    url: `${site.url}/work/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...creativeRoutes];
}

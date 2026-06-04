import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { portfolio } from "@/content/profile";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aysesenabagdat.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home = locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 1,
  }));

  const projects = locales.flatMap((locale) =>
    portfolio.projects.map((p) => ({
      url: `${SITE_URL}/${locale}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  return [...home, ...projects];
}

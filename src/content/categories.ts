import type { ProjectCategory } from "./types";
import type { Localized } from "./types";

export const categoryLabels: Record<ProjectCategory, Localized> = {
  software: { en: "Software", tr: "Yazılım" },
  design: { en: "Design / UX", tr: "Tasarım / UX" },
  "ai-data": { en: "AI & Data", tr: "Yapay Zeka & Veri" },
  leadership: { en: "Leadership", tr: "Liderlik" },
  security: { en: "Security", tr: "Güvenlik" },
};

export const categoryOrder: ProjectCategory[] = [
  "software",
  "design",
  "ai-data",
  "leadership",
  "security",
];

"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "@/i18n/LocaleProvider";
import { portfolio } from "@/content/profile";
import { categoryLabels, categoryOrder } from "@/content/categories";
import type { ProjectCategory } from "@/content/types";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ProjectCard } from "./ProjectCard";
import { cn } from "@/lib/utils";

type Filter = ProjectCategory | "all";

export function Projects() {
  const { t, dict } = useLocale();
  const [filter, setFilter] = useState<Filter>("all");

  // Only show category filters that actually have projects
  const availableCategories = useMemo(() => {
    const present = new Set(portfolio.projects.map((p) => p.category));
    return categoryOrder.filter((c) => present.has(c));
  }, []);

  const filtered = useMemo(() => {
    const list =
      filter === "all"
        ? portfolio.projects
        : portfolio.projects.filter((p) => p.category === filter);
    // Featured first
    return [...list].sort((a, b) => Number(b.featured) - Number(a.featured));
  }, [filter]);

  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: dict.projects.filterAll },
    ...availableCategories.map((c) => ({
      value: c as Filter,
      label: t(categoryLabels[c]),
    })),
  ];

  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        tag={dict.sections.projectsTag}
        title={dict.sections.projectsTitle}
        subtitle={dict.sections.projectsSubtitle}
      />

      <div
        className="mb-10 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label={dict.sections.projectsTag}
      >
        {filters.map((f) => (
          <button
            key={f.value}
            role="tab"
            aria-selected={filter === f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors",
              filter === f.value
                ? "bg-navy-900 text-white dark:bg-white dark:text-navy-900"
                : "border border-navy-200 text-navy-600 hover:border-accent-400 hover:text-accent-700 dark:border-navy-700 dark:text-navy-300 dark:hover:text-accent-300"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

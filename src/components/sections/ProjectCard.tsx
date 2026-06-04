"use client";

import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, Star } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Project } from "@/content/types";
import { categoryLabels } from "@/content/categories";
import { TechTag, Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function ProjectCard({ project }: { project: Project }) {
  const { t, dict, locale } = useLocale();
  const href = `/${locale}/projects/${project.slug}`;

  return (
    <Card interactive className="group flex h-full flex-col">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-navy-100 to-navy-50 text-2xl dark:from-navy-800 dark:to-navy-900">
          {project.emoji}
        </span>
        <div className="flex flex-wrap items-center justify-end gap-2">
          {project.featured && (
            <Badge className="gap-1 border-accent-200 bg-accent-50 text-accent-700 dark:border-accent-700 dark:bg-accent-950/50 dark:text-accent-300">
              <Star className="h-3 w-3 fill-current" />
              {dict.misc.featured}
            </Badge>
          )}
          <Badge>{t(categoryLabels[project.category])}</Badge>
        </div>
      </div>

      <Link href={href} className="group/title">
        <h3 className="text-lg font-semibold text-navy-900 transition-colors group-hover/title:text-accent-600 dark:text-white dark:group-hover/title:text-accent-300">
          {project.title}
        </h3>
      </Link>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {t(project.tagline)}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 4).map((tech) => (
          <TechTag key={tech}>{tech}</TechTag>
        ))}
        {project.tech.length > 4 && (
          <span className="text-xs text-muted">+{project.tech.length - 4}</span>
        )}
      </div>

      <div className="mt-5 flex items-center gap-4 border-t border-navy-100 pt-4 dark:border-navy-800">
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-medium text-accent-600 hover:gap-1.5 dark:text-accent-400"
        >
          {dict.actions.viewCase}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
        <span className="ml-auto flex items-center gap-3">
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — ${dict.actions.viewCode}`}
              className="text-navy-400 transition-colors hover:text-accent-600 dark:hover:text-accent-300"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — ${dict.actions.liveDemo}`}
              className="text-navy-400 transition-colors hover:text-accent-600 dark:hover:text-accent-300"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </span>
      </div>
    </Card>
  );
}

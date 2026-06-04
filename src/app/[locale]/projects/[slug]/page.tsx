import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Figma,
  Target,
  Lightbulb,
  AlertTriangle,
  GraduationCap,
  TrendingUp,
  Rocket,
} from "lucide-react";
import { locales, isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { portfolio } from "@/content/profile";
import { categoryLabels } from "@/content/categories";
import type { Localized, LocalizedList } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";
import { TechTag, Badge } from "@/components/ui/Badge";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    portfolio.projects.map((p) => ({ locale, slug: p.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const loc: Locale = isLocale(locale) ? locale : "en";
  const project = portfolio.projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline[loc],
    openGraph: { title: project.title, description: project.tagline[loc] },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = portfolio.projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const dict = getDictionary(locale);
  const t = (v: Localized) => v[locale];
  const tl = (v: LocalizedList) => v[locale];

  const blocks: {
    icon: typeof Target;
    label: string;
    content: string;
  }[] = [
    { icon: Target, label: dict.projects.problem, content: t(project.problem) },
    { icon: Lightbulb, label: dict.projects.approach, content: t(project.approach) },
    { icon: AlertTriangle, label: dict.projects.challenges, content: t(project.challenges) },
  ];

  const lists: {
    icon: typeof GraduationCap;
    label: string;
    items: string[];
  }[] = [
    { icon: GraduationCap, label: dict.projects.learnings, items: tl(project.learnings) },
    { icon: TrendingUp, label: dict.projects.results, items: tl(project.results) },
    { icon: Rocket, label: dict.projects.future, items: tl(project.future) },
  ];

  return (
    <article className="pt-28">
      <div className="container-page max-w-4xl">
        <Link
          href={`/${locale}#projects`}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent-600"
        >
          <ArrowLeft className="h-4 w-4" />
          {dict.actions.backToProjects}
        </Link>

        {/* Header */}
        <Reveal className="mt-8">
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy-100 to-navy-50 text-3xl dark:from-navy-800 dark:to-navy-900">
              {project.emoji}
            </span>
            <div className="flex flex-wrap gap-2">
              {project.featured && (
                <Badge className="border-accent-200 bg-accent-50 text-accent-700 dark:border-accent-700 dark:bg-accent-950/50 dark:text-accent-300">
                  {dict.misc.featured}
                </Badge>
              )}
              <Badge>{t(categoryLabels[project.category])}</Badge>
            </div>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-navy-900 dark:text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {t(project.tagline)}
          </p>

          {/* Meta */}
          <dl className="mt-6 grid grid-cols-1 gap-4 rounded-2xl border border-navy-100 bg-card p-5 dark:border-navy-800 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                {dict.projects.role}
              </dt>
              <dd className="mt-1 text-sm font-medium text-navy-900 dark:text-white">
                {t(project.role)}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                {dict.projects.timeline}
              </dt>
              <dd className="mt-1 text-sm font-medium text-navy-900 dark:text-white">
                {project.timeline}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                {dict.projects.category}
              </dt>
              <dd className="mt-1 text-sm font-medium text-navy-900 dark:text-white">
                {t(categoryLabels[project.category])}
              </dd>
            </div>
          </dl>

          {/* Links */}
          {(project.links?.github || project.links?.demo || project.links?.figma) && (
            <div className="mt-5 flex flex-wrap gap-3">
              {project.links?.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent-600/20 transition-transform hover:-translate-y-0.5"
                >
                  <ExternalLink className="h-4 w-4" />
                  {dict.actions.liveDemo}
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-5 py-2.5 text-sm font-medium text-navy-900 transition-colors hover:border-accent-400 hover:text-accent-700 dark:border-navy-700 dark:text-navy-100"
                >
                  <Github className="h-4 w-4" />
                  {dict.actions.viewCode}
                </a>
              )}
              {project.links?.figma && project.links.figma !== "#" && (
                <a
                  href={project.links.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-navy-200 px-5 py-2.5 text-sm font-medium text-navy-900 transition-colors hover:border-accent-400 hover:text-accent-700 dark:border-navy-700 dark:text-navy-100"
                >
                  <Figma className="h-4 w-4" />
                  Figma
                </a>
              )}
            </div>
          )}
        </Reveal>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <Reveal className="mt-10">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
              Screenshots
            </h2>
            <div className="flex flex-wrap gap-4">
              {project.screenshots.map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl border border-navy-100 shadow-md dark:border-navy-800"
                  style={{ maxWidth: 220 }}
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    width={220}
                    height={440}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {/* Tech */}
        <Reveal className="mt-10">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted">
            {dict.projects.tech}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>
        </Reveal>

        {/* Narrative blocks */}
        <div className="mt-12 space-y-10">
          {blocks.map((b) => {
            const BIcon = b.icon;
            return (
              <Reveal key={b.label}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-300">
                    <BIcon className="h-5 w-5" />
                  </span>
                  <h2 className="text-xl font-semibold text-navy-900 dark:text-white">
                    {b.label}
                  </h2>
                </div>
                <p className="mt-3 leading-relaxed text-muted">{b.content}</p>
              </Reveal>
            );
          })}
        </div>

        {/* List blocks */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {lists.map((l) => {
            const LIcon = l.icon;
            return (
              <Reveal key={l.label}>
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-300">
                    <LIcon className="h-5 w-5" />
                  </span>
                  <h2 className="text-lg font-semibold text-navy-900 dark:text-white">
                    {l.label}
                  </h2>
                </div>
                <ul className="mt-3 space-y-2">
                  {l.items.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        {/* Footer nav */}
        <div className="mt-16 border-t border-navy-100 pt-8 dark:border-navy-800">
          <Link
            href={`/${locale}#projects`}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 hover:gap-3 dark:text-accent-400"
          >
            <ArrowLeft className="h-4 w-4" />
            {dict.actions.viewAll}
          </Link>
        </div>
      </div>
    </article>
  );
}

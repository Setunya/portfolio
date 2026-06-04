"use client";

import { GraduationCap, Briefcase, FolderGit2, Sparkles } from "lucide-react";
import type { JourneyKind } from "@/content/types";
import { useLocale } from "@/i18n/LocaleProvider";
import { portfolio } from "@/content/profile";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

const kindIcon: Record<JourneyKind, typeof GraduationCap> = {
  education: GraduationCap,
  experience: Briefcase,
  project: FolderGit2,
  milestone: Sparkles,
};

export function Journey() {
  const { t, dict } = useLocale();

  return (
    <Section id="journey" className="bg-navy-50/40 dark:bg-navy-900/30">
      <SectionHeading
        id="journey"
        tag={dict.sections.journeyTag}
        title={dict.sections.journeyTitle}
        subtitle={dict.sections.journeySubtitle}
      />

      <ol className="relative mx-auto max-w-3xl">
        {/* vertical line */}
        <span
          aria-hidden="true"
          className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent-400 via-navy-200 to-transparent dark:via-navy-700 sm:left-[27px]"
        />
        {portfolio.journey.map((item, i) => {
          const KIcon = kindIcon[item.kind];
          return (
            <Reveal as="li" key={item.id} delay={i * 0.05} className="relative mb-8 pl-14 sm:pl-20">
              <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-navy-200 bg-card text-accent-600 shadow-sm dark:border-navy-700 dark:text-accent-300 sm:h-14 sm:w-14">
                <KIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-semibold text-accent-600 dark:text-accent-400">
                  {item.date}
                </span>
                {item.current && (
                  <Badge className="border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                    <span className="mr-1.5 inline-block h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-500" />
                    {dict.misc.currentlyAt}
                  </Badge>
                )}
              </div>
              <h3 className="mt-1 text-base font-semibold text-navy-900 dark:text-white">
                {t(item.title)}
              </h3>
              <p className="text-sm font-medium text-muted">{t(item.org)}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {t(item.description)}
              </p>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}

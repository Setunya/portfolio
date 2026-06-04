"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { portfolio } from "@/content/profile";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";

export function Skills() {
  const { t, dict } = useLocale();

  return (
    <Section id="skills" className="bg-navy-50/40 dark:bg-navy-900/30">
      <SectionHeading
        id="skills"
        tag={dict.sections.skillsTag}
        title={dict.sections.skillsTitle}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {portfolio.skills.map((group, i) => (
          <Reveal key={group.id} delay={(i % 4) * 0.06}>
            <Card interactive className="h-full">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-300">
                  <Icon name={group.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-semibold text-navy-900 dark:text-white">
                  {t(group.label)}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-navy-100 bg-navy-50/60 px-2.5 py-1 text-sm text-navy-700 dark:border-navy-700 dark:bg-navy-800/50 dark:text-navy-200"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

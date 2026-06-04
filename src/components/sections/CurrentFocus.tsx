"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import { portfolio } from "@/content/profile";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function CurrentFocus() {
  const { t, dict } = useLocale();

  return (
    <Section id="focus">
      <SectionHeading
        id="focus"
        tag={dict.sections.focusTag}
        title={dict.sections.focusTitle}
        subtitle={dict.sections.focusSubtitle}
      />

      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        {portfolio.focus.map((item, i) => (
          <Reveal key={item.id} delay={(i % 2) * 0.06}>
            <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-card p-5 transition-colors hover:border-accent-300 dark:border-navy-800 dark:hover:border-accent-600/60">
              <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-300">
                <Icon name={item.icon} className="h-5 w-5" />
                <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-500" />
                </span>
              </span>
              <p className="pt-1 text-sm leading-relaxed text-navy-700 dark:text-navy-200">
                {t(item.text)}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

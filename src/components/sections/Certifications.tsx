"use client";

import { Award, ExternalLink } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { portfolio } from "@/content/profile";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";

/**
 * Renders nothing unless portfolio.showCertifications is true.
 * Flip the flag in profile.ts once credential links are ready.
 */
export function Certifications() {
  const { t, dict } = useLocale();

  if (!portfolio.showCertifications || portfolio.certifications.length === 0) {
    return null;
  }

  return (
    <Section id="certifications">
      <SectionHeading
        id="certifications"
        tag={dict.sections.certsTag}
        title={dict.sections.certsTitle}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.certifications.map((cert, i) => (
          <Reveal key={cert.id} delay={(i % 3) * 0.06}>
            <Card interactive className="flex h-full flex-col">
              <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-300">
                <Award className="h-5 w-5" />
              </span>
              <h3 className="font-semibold text-navy-900 dark:text-white">
                {t(cert.title)}
              </h3>
              <p className="mt-1 text-sm text-muted">{t(cert.issuer)}</p>
              <p className="mt-1 text-sm text-muted">{cert.date}</p>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent-600 dark:text-accent-400"
                >
                  {dict.actions.viewCode}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

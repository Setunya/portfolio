"use client";

import { GraduationCap, Lightbulb, Users } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { portfolio } from "@/content/profile";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";

const highlights = [
  {
    icon: GraduationCap,
    en: { title: "Business + Technology", body: "MIS student bridging real business processes and software." },
    tr: { title: "İş + Teknoloji", body: "Gerçek iş süreçleri ile yazılımı birleştiren MIS öğrencisi." },
  },
  {
    icon: Lightbulb,
    en: { title: "Builder, not just learner", body: "I turn coursework into shipped projects and case studies." },
    tr: { title: "Sadece öğrenen değil, üreten", body: "Dersleri yayınlanan projelere ve vaka çalışmalarına dönüştürürüm." },
  },
  {
    icon: Users,
    en: { title: "Founder & team captain", body: "I lead student teams across tech and social initiatives." },
    tr: { title: "Kurucu & ekip kaptanı", body: "Teknoloji ve sosyal girişimlerde öğrenci ekiplerine liderlik ederim." },
  },
];

export function About() {
  const { dict, locale } = useLocale();
  const { about } = portfolio.profile;

  return (
    <Section id="about">
      <SectionHeading
        id="about"
        tag={dict.sections.aboutTag}
        title={dict.sections.aboutTitle}
      />

      <div className="grid gap-10 lg:grid-cols-5">
        <Reveal className="space-y-5 lg:col-span-3">
          {about[locale].map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </Reveal>

        <div className="grid gap-4 lg:col-span-2">
          {highlights.map((h, i) => {
            const HIcon = h.icon;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <Card className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-300">
                    <HIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-900 dark:text-white">
                      {h[locale].title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{h[locale].body}</p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

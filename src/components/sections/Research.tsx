"use client";

import Image from "next/image";
import { FlaskConical, BookOpen, Award } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Research() {
  const { dict } = useLocale();

  return (
    <Section id="research" className="bg-navy-50/40 dark:bg-navy-900/30">
      <SectionHeading
        id="research"
        tag={dict.sections.researchTag}
        title={dict.sections.researchTitle}
        subtitle={dict.sections.researchSubtitle}
      />

      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="rounded-2xl border border-navy-100 bg-card p-6 dark:border-navy-800 md:p-8">
            {/* Header */}
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-300">
                <FlaskConical className="h-6 w-6" />
              </span>
              <div>
                <span className="inline-block rounded-full border border-accent-200 bg-accent-50 px-3 py-0.5 text-xs font-semibold text-accent-700 dark:border-accent-700 dark:bg-accent-950/50 dark:text-accent-300">
                  TÜBİTAK 2209-A
                </span>
                <h3 className="mt-2 text-xl font-bold text-navy-900 dark:text-white">
                  Yapay Zeka Gelişiminin Bilişim Sektöründeki İstihdama Etkisi
                </h3>
                <p className="mt-0.5 text-sm font-medium text-muted">
                  The Impact of AI Development on Employment in the IT Sector
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-5 leading-relaxed text-muted">
              Yapay zekanın bilişim sektörü istihdamına etkisini inceleyen bu araştırmada anket verisi toplandı, SPSS analizi uygulandı ve bulgular SWOT çerçevesiyle sentezlendi. Araştırma, IV. Uluslararası 21. Yüzyıl Eğitim Araştırmaları Kongresi&apos;nde (INER 2026) tam bildiri olarak sunuldu — dergide yayımlanmak üzere.
            </p>

            {/* Meta */}
            <div className="mt-5 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-muted">
                <BookOpen className="h-4 w-4 text-accent-500" />
                <span>Proje Yürütücüsü</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <Award className="h-4 w-4 text-accent-500" />
                <span>INER Congress 2026 — Tam Bildiri Sunumu</span>
              </div>
            </div>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {["SPSS", "Quantitative Research", "SWOT Analysis", "Data Collection", "Academic Writing"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-navy-200 bg-navy-50 px-3 py-1 text-xs font-medium text-navy-700 dark:border-navy-700 dark:bg-navy-800 dark:text-navy-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Certificate image */}
            <div className="mt-6 overflow-hidden rounded-xl border border-navy-100 dark:border-navy-800">
              <Image
                src="/images/research/iner-2026-certificate.png"
                alt="INER 2026 Katılım Belgesi"
                width={800}
                height={560}
                className="w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

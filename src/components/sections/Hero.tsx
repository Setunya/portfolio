"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Download, FolderGit2, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { portfolio } from "@/content/profile";
import { LinkButton } from "@/components/ui/Button";
import { scrollToId } from "@/lib/utils";

export function Hero() {
  const { t, dict, locale } = useLocale();
  const { profile } = portfolio;
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  };
  const item = reduce
    ? {}
    : {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-16"
      aria-label="Intro"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-light bg-[size:28px_28px] opacity-70 dark:bg-grid-dark"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 -z-10 h-[420px] w-[420px] rounded-full bg-accent-400/20 blur-[120px] dark:bg-accent-600/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-[360px] w-[360px] rounded-full bg-navy-300/30 blur-[120px] dark:bg-navy-700/30"
      />

      <div className="container-page">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-card px-3 py-1 text-sm text-muted dark:border-navy-700">
              <MapPin className="h-3.5 w-3.5 text-accent-500" />
              {t(profile.location)}
              <span className="mx-1 h-1 w-1 rounded-full bg-accent-500" />
              {t(profile.role)}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-navy-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{t(profile.headline)}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            {t(profile.subtitle)}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <LinkButton href={t(profile.cvPath)} external variant="primary" size="lg">
              <Download className="h-4 w-4" />
              {dict.actions.downloadCv}
            </LinkButton>
            <button
              onClick={() => scrollToId("projects")}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 bg-card px-6 py-3 text-base font-medium text-navy-900 transition-all hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-700 dark:border-navy-700 dark:text-navy-100 dark:hover:text-accent-300"
            >
              <FolderGit2 className="h-4 w-4" />
              {dict.actions.viewProjects}
            </button>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-navy-500 transition-colors hover:text-accent-600 dark:text-navy-400 dark:hover:text-accent-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-navy-500 transition-colors hover:text-accent-600 dark:text-navy-400 dark:hover:text-accent-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.social.email}`}
              aria-label="Email"
              className="text-navy-500 transition-colors hover:text-accent-600 dark:text-navy-400 dark:hover:text-accent-300"
            >
              <Mail className="h-5 w-5" />
            </a>
            <span className="text-sm text-muted" lang={locale}>
              {profile.social.email}
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

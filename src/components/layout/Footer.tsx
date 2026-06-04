"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { portfolio } from "@/content/profile";
import { scrollToId } from "@/lib/utils";

export function Footer() {
  const { dict } = useLocale();
  const { social, name } = portfolio.profile;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-100 py-10 dark:border-navy-800">
      <div className="container-page flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-navy-900 dark:text-white">{name}</p>
          <p className="mt-1 text-sm text-muted">{dict.footer.builtWith}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-navy-600 transition-colors hover:bg-navy-100 hover:text-accent-600 dark:text-navy-300 dark:hover:bg-navy-800"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-navy-600 transition-colors hover:bg-navy-100 hover:text-accent-600 dark:text-navy-300 dark:hover:bg-navy-800"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${social.email}`}
            aria-label="Email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-navy-600 transition-colors hover:bg-navy-100 hover:text-accent-600 dark:text-navy-300 dark:hover:bg-navy-800"
          >
            <Mail className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => scrollToId("home")}
            aria-label={dict.footer.backToTop}
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-200 text-navy-600 transition-colors hover:border-accent-400 hover:text-accent-600 dark:border-navy-700 dark:text-navy-300"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="container-page mt-6 text-center text-xs text-muted sm:text-left">
        © {year} {name}. {dict.footer.rights}
      </p>
    </footer>
  );
}

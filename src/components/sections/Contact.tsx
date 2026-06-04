"use client";

import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import { portfolio } from "@/content/profile";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const { dict } = useLocale();
  const { social } = portfolio.profile;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!values.name.trim()) e.name = dict.form.required;
    if (!values.email.trim()) e.email = dict.form.required;
    else if (!EMAIL_RE.test(values.email)) e.email = dict.form.invalidEmail;
    if (!values.message.trim()) e.message = dict.form.required;
    else if (values.message.trim().length < 10) e.message = dict.form.tooShort;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const field =
    "w-full rounded-xl border bg-card px-4 py-3 text-sm text-navy-900 outline-none transition-colors placeholder:text-muted focus:border-accent-500 dark:text-white";

  const links = [
    { icon: Mail, label: social.email, href: `mailto:${social.email}`, external: false },
    { icon: Linkedin, label: "LinkedIn", href: social.linkedin, external: true },
    { icon: Github, label: "GitHub", href: social.github, external: true },
  ];

  return (
    <Section id="contact" className="bg-navy-50/40 dark:bg-navy-900/30">
      <SectionHeading
        id="contact"
        tag={dict.sections.contactTag}
        title={dict.sections.contactTitle}
        subtitle={dict.sections.contactSubtitle}
      />

      <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-5">
        {/* Direct links */}
        <Reveal className="space-y-3 lg:col-span-2">
          {links.map((l) => {
            const LIcon = l.icon;
            return (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 rounded-xl border border-navy-100 bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-accent-300 dark:border-navy-800 dark:hover:border-accent-600/60"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-50 text-accent-600 dark:bg-accent-950/50 dark:text-accent-300">
                  <LIcon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-navy-800 dark:text-navy-100">
                  {l.label}
                </span>
              </a>
            );
          })}
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1} className="lg:col-span-3">
          {status === "success" ? (
            <div
              role="status"
              className="flex h-full flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center dark:border-emerald-800 dark:bg-emerald-950/30"
            >
              <CheckCircle2 className="h-10 w-10 text-emerald-500" />
              <p className="mt-3 font-medium text-emerald-800 dark:text-emerald-200">
                {dict.form.success}
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-800 dark:text-navy-200">
                  {dict.form.name}
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  placeholder={dict.form.namePlaceholder}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={cn(field, errors.name ? "border-red-400" : "border-navy-200 dark:border-navy-700")}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-800 dark:text-navy-200">
                  {dict.form.email}
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  placeholder={dict.form.emailPlaceholder}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={cn(field, errors.email ? "border-red-400" : "border-navy-200 dark:border-navy-700")}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-800 dark:text-navy-200">
                  {dict.form.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={values.message}
                  onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  placeholder={dict.form.messagePlaceholder}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={cn(field, "resize-none", errors.message ? "border-red-400" : "border-navy-200 dark:border-navy-700")}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-500">
                  <AlertCircle className="h-4 w-4" />
                  {dict.form.error}{" "}
                  <a href={`mailto:${social.email}`} className="underline">
                    {social.email}
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-600 to-accent-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent-600/20 transition-all hover:-translate-y-0.5 disabled:opacity-60"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {dict.actions.sending}
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    {dict.actions.sendMessage}
                  </>
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </Section>
  );
}

import type { Locale } from "@/i18n/config";

/** A string available in every supported language. */
export type Localized = Record<Locale, string>;
/** A list of strings available in every supported language. */
export type LocalizedList = Record<Locale, string[]>;

export interface SocialLinks {
  email: string;
  phone?: string;
  linkedin: string;
  github: string;
}

export interface Profile {
  name: string;
  /** Short role line, localized. */
  role: Localized;
  location: Localized;
  headline: Localized;
  subtitle: Localized;
  about: LocalizedList;
  /** Path to the downloadable CV in /public. */
  cvPath: Localized;
  social: SocialLinks;
}

export interface SkillGroup {
  id: string;
  label: Localized;
  /** lucide-react icon name handled in the component. */
  icon: string;
  skills: string[];
}

export type ProjectCategory =
  | "software"
  | "design"
  | "ai-data"
  | "leadership"
  | "security";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  featured: boolean;
  /** Emoji or short visual marker used on cards. */
  emoji: string;
  tagline: Localized;
  role: Localized;
  timeline: string;
  tech: string[];
  links?: {
    github?: string;
    demo?: string;
    figma?: string;
  };
  /** Full case study fields. */
  problem: Localized;
  approach: Localized;
  challenges: Localized;
  learnings: LocalizedList;
  results: LocalizedList;
  future: LocalizedList;
}

export type JourneyKind = "education" | "experience" | "project" | "milestone";

export interface JourneyItem {
  id: string;
  kind: JourneyKind;
  date: string;
  title: Localized;
  org: Localized;
  description: Localized;
  current?: boolean;
}

export interface Certification {
  id: string;
  title: Localized;
  issuer: Localized;
  date: string;
  credentialUrl?: string;
}

export interface FocusItem {
  id: string;
  text: Localized;
  /** lucide-react icon name. */
  icon: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: SkillGroup[];
  projects: Project[];
  journey: JourneyItem[];
  /** Hidden until real certifications are added. */
  certifications: Certification[];
  showCertifications: boolean;
  focus: FocusItem[];
}

import {
  Code2,
  BarChart3,
  BrainCircuit,
  PenTool,
  Workflow,
  ShieldCheck,
  Wrench,
  Languages,
  Rocket,
  Briefcase,
  Globe,
  Layers,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Code2,
  BarChart3,
  BrainCircuit,
  PenTool,
  Workflow,
  ShieldCheck,
  Wrench,
  Languages,
  Rocket,
  Briefcase,
  Globe,
  Layers,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = map[name] ?? Code2;
  return <Cmp className={className} aria-hidden="true" />;
}

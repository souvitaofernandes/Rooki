import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "surface" | "surface2" | "gradient" | "snow" | "linen" | "olive";
  id?: string;
}

const bgStyles: Record<string, string> = {
  default: "bg-brand-bg",
  surface: "bg-brand-surface",
  surface2: "bg-brand-surface2",
  gradient: "relative overflow-hidden bg-brand-surface",
  // legacy aliases
  snow: "bg-brand-bg",
  linen: "bg-brand-surface",
  olive: "bg-brand-surface2",
};

export function Section({
  children,
  className,
  background = "default",
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("section-padding", bgStyles[background] || "bg-brand-bg", className)}>
      <div className="container-wide">{children}</div>
    </section>
  );
}

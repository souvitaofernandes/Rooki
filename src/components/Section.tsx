import { cn } from "@/lib/utils";

type SectionVariant = "white" | "off-white" | "gradient" | "dark";

const variantClasses: Record<SectionVariant, string> = {
  white: "bg-white",
  "off-white": "bg-off-white",
  gradient: "bg-gradient-brand",
  dark: "bg-[#0A0E27] text-white",
};

interface SectionProps {
  variant?: SectionVariant;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export function Section({
  variant = "white",
  className,
  children,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-20 md:py-32", variantClasses[variant], className)}
    >
      {children}
    </section>
  );
}

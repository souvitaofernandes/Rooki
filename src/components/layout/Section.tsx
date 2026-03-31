import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "snow" | "linen" | "olive";
  id?: string;
}

const bgStyles = {
  snow: "bg-brand-snow",
  linen: "bg-brand-linen/40",
  olive: "bg-brand-olive text-brand-snow",
};

export function Section({
  children,
  className,
  background = "snow",
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("section-padding", bgStyles[background], className)}>
      <div className="container-wide">{children}</div>
    </section>
  );
}

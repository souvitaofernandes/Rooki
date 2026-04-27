import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
  gradient?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  dark = false,
  gradient = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {badge && (
        <Badge variant="lime" className="mb-4">
          {badge}
        </Badge>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
          gradient ? "gradient-text" : "text-white"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg text-brand-muted",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  dark = false,
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
          "text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
          dark ? "text-brand-snow" : "text-brand-olive"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg",
            align === "center" && "mx-auto",
            dark ? "text-brand-snow/70" : "text-brand-grey"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "lime" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-brand-linen text-brand-olive",
  lime: "bg-brand-lime/20 text-brand-olive",
  outline: "border border-brand-grey/30 text-brand-grey",
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

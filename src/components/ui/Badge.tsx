import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "lime" | "outline" | "gradient";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-white/10 text-brand-muted border border-white/10",
  lime: "bg-brand-accent/15 text-brand-accent border border-brand-accent/30",
  outline: "border border-white/20 text-brand-muted",
  gradient: "bg-brand-gradient text-[#0D0F12] font-semibold",
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

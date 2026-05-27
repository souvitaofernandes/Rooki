import { cn } from "@/lib/utils";

interface CardProps {
  variant?: "light" | "dark";
  className?: string;
  children: React.ReactNode;
}

const variantClasses = {
  light: "rounded-xl border border-gray-200 bg-white p-8 transition-shadow hover:shadow-md",
  dark: "rounded-xl border border-white/[0.08] bg-white/[0.04] p-8 transition-colors hover:border-white/[0.15] hover:bg-white/[0.06]",
};

export function Card({ variant = "light", className, children }: CardProps) {
  return (
    <div className={cn(variantClasses[variant], className)}>
      {children}
    </div>
  );
}

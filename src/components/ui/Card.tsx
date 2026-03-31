import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-linen bg-white p-6 md:p-8",
        hover && "transition-all duration-200 hover:border-brand-lime/40 hover:shadow-lg hover:shadow-brand-lime/5",
        className
      )}
    >
      {children}
    </div>
  );
}

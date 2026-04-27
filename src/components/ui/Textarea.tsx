import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-brand-muted"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={id}
          className={cn(
            "flex min-h-[120px] w-full rounded-xl border border-white/12 bg-white/6 px-4 py-3 text-sm text-white placeholder:text-brand-soft transition-colors focus:border-brand-accent/60 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 disabled:cursor-not-allowed disabled:opacity-50 resize-y",
            error && "border-red-400 focus:border-red-400 focus:ring-red-400/30",
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

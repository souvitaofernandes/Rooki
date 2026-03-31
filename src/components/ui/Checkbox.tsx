"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, id, ...props }, ref) => {
    return (
      <div className="space-y-1">
        <label
          htmlFor={id}
          className={cn(
            "flex items-start gap-3 cursor-pointer group",
            className
          )}
        >
          <input
            ref={ref}
            type="checkbox"
            id={id}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-brand-grey accent-brand-lime cursor-pointer"
            {...props}
          />
          <span className="text-sm text-brand-grey leading-relaxed group-hover:text-brand-olive transition-colors">
            {label}
          </span>
        </label>
        {error && <p className="text-xs text-red-500 ml-7">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

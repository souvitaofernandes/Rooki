import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonSize = "default" | "small";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const base =
  "inline-flex items-center justify-center font-body font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white rounded-full hover:bg-primary/90 disabled:opacity-60",
  secondary:
    "border border-primary text-primary rounded-full bg-transparent hover:bg-primary/5 disabled:opacity-60",
  ghost:
    "border border-white/20 text-white rounded-full bg-transparent hover:bg-white/8 disabled:opacity-60",
  link: "text-primary gap-1 group p-0",
};

const sizes: Record<ButtonSize, string> = {
  default: "py-4 px-8 text-[15px]",
  small: "py-2.5 px-5 text-[14px]",
};

export function Button({
  variant = "primary",
  size = "default",
  href,
  onClick,
  className,
  children,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(
    base,
    variants[variant],
    variant !== "link" && sizes[size],
    className
  );

  const content =
    variant === "link" ? (
      <>
        <span>{children}</span>
        <span
          className="inline-block transition-transform group-hover:translate-x-1"
          aria-hidden
        >
          →
        </span>
      </>
    ) : (
      children
    );

  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

"use client";

import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "whatsapp" | "primary";
}

export function WhatsAppButton({
  message,
  label = "Analisar no WhatsApp",
  size = "lg",
  className,
  variant = "primary",
}: WhatsAppButtonProps) {
  const handleClick = () => {
    trackEvent("cta_whatsapp_click", {
      page: typeof window !== "undefined" ? window.location.pathname : "",
    });
    window.open(getWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleClick}
    >
      <MessageCircle className="h-5 w-5" />
      {label}
    </Button>
  );
}

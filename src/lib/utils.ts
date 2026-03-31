import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getWhatsAppUrl(message?: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5511999999999";
  const defaultMessage =
    "Olá! Quero analisar uma mensagem, link ou print suspeito com a Rooki.";
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${number}?text=${text}`;
}

export function getSubstackUrl(): string {
  return process.env.NEXT_PUBLIC_SUBSTACK_URL || "https://rooki.substack.com";
}

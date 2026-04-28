import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_URL = "https://wa.me/551151999871";
export const CONTACT_EMAIL = "contato@rooki.com.br";

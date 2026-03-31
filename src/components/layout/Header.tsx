"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/shared/Logo";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-linen/80 bg-brand-snow/95 backdrop-blur-md">
      <div className="container-full flex h-16 items-center justify-between px-5 md:h-18 md:px-8">
        <Logo width={100} height={40} />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-brand-grey transition-colors hover:bg-brand-linen/60 hover:text-brand-olive"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton size="sm" label="Analisar agora" />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-brand-olive transition-colors hover:bg-brand-linen lg:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-brand-linen/80 bg-brand-snow transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-brand-grey transition-colors hover:bg-brand-linen/60 hover:text-brand-olive"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 px-3">
            <WhatsAppButton size="md" label="Analisar no WhatsApp" className="w-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}

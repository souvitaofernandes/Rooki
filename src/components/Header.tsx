"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#para-empresas", label: "Para empresas" },
  { href: "#piloto", label: "Piloto" },
  { href: "#metricas", label: "Métricas" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-bg/90 backdrop-blur-md transition-all duration-200",
        scrolled ? "border-b border-border shadow-sm" : "border-b border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-[72px]">
        <Link href="/" aria-label="Rooki — página inicial" className="flex items-center">
          <img
            src="/LOGO-HORIZONTAL-PRINCIPAL.svg"
            alt="Rooki"
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium text-text/70 hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#contato"
            className="btn-primary inline-flex items-center justify-center px-5 py-2.5 text-[14px]"
          >
            Quero testar
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <Container className="py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-[15px] font-medium text-text hover:bg-gray-50"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contato"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 inline-flex items-center justify-center px-5 py-3 text-[15px]"
            >
              Quero testar
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}

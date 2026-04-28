"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { CONTACT_EMAIL, cn } from "@/lib/utils";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#para-empresas", label: "Para empresas" },
  { href: "#quem-somos", label: "Quem somos" },
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
        "sticky top-0 z-50 w-full bg-bg/85 backdrop-blur-md transition-colors",
        scrolled ? "border-b border-border" : "border-b border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-[72px]">
        <Link href="/" className="flex items-center gap-2" aria-label="Rooki — página inicial">
          <span className="inline-flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-success" aria-hidden />
            <span className="font-extrabold text-[20px] tracking-tight2 text-ink">Rooki</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-text/80 hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-primary/90"
          >
            Falar com a gente
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-text hover:bg-border/40"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-[15px] font-semibold text-white"
            >
              Falar com a gente
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}

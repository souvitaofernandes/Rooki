"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/produto", label: "Produto" },
  { href: "/solucao", label: "Solução" },
  { href: "/resultados", label: "Resultados" },
  { href: "/empresa", label: "Empresa" },
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
        "sticky top-0 z-50 w-full bg-[#0A0E27]/90 backdrop-blur-md transition-colors",
        scrolled ? "border-b border-white/10" : "border-b border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Link href="/" aria-label="Rooki — página inicial">
          <Image
            src="/LOGO-HORIZONTAL-PRINCIPAL.svg"
            alt="Rooki"
            width={120}
            height={39}
            priority
            className="brightness-0 invert"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-body text-[15px] font-medium text-white/60 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contato" variant="primary" size="small">
            Agendar conversa
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/70"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0A0E27]">
          <Container className="py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-body text-[15px] font-medium text-white/70 hover:bg-white/5 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-2">
              <Button
                href="/contato"
                variant="primary"
                className="w-full justify-center"
                onClick={() => setOpen(false)}
              >
                Agendar conversa
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

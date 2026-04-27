"use client";

import { Badge } from "@/components/ui/Badge";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { homeContent } from "@/data/home";
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden bg-brand-bg">
      {/* Glow blobs */}
      <div className="pointer-events-none absolute -right-60 -top-60 h-[600px] w-[600px] rounded-full bg-brand-purple/20 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[400px] w-[400px] rounded-full bg-brand-aqua/10 blur-[100px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-brand-accent/8 blur-[80px]" />

      <div className="container-wide relative px-5 pb-12 pt-16 md:px-8 md:pb-20 md:pt-28 lg:pb-28 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <div>
            {hero.badge && (
              <Badge variant="lime" className="mb-6">
                {hero.badge}
              </Badge>
            )}

            <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              {hero.headline}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-brand-muted md:text-xl">
              {hero.subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton label="Testar no WhatsApp" size="lg" />
              <Link href="/como-funciona">
                <Button variant="outline" size="lg">
                  Como funciona
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {hero.proofLine && (
              <p className="mt-6 text-sm text-brand-soft">
                {hero.proofLine}
              </p>
            )}
          </div>

          {/* Right — WhatsApp mock */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[320px]">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-brand-surface shadow-2xl shadow-brand-purple/20">
                {/* Header */}
                <div className="flex items-center gap-3 bg-[#128C7E] px-4 py-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent text-xs font-bold text-brand-bg">R</div>
                  <div>
                    <p className="text-sm font-semibold text-white">Rooki</p>
                    <p className="text-xs text-white/70">online</p>
                  </div>
                </div>
                {/* Messages */}
                <div className="space-y-3 bg-[#0B141A] p-4">
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#005C4B] px-4 py-2.5">
                      <p className="text-sm text-white">Recebi esse link dos Correios, é golpe?</p>
                      <p className="mt-1 text-right text-[10px] text-white/50">09:41</p>
                    </div>
                  </div>
                  {/* Rooki response */}
                  <div className="flex justify-start">
                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-brand-surface2 px-4 py-3">
                      <div className="mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 flex-shrink-0 text-amber-400" />
                        <span className="text-xs font-semibold text-amber-400">RISCO ALTO</span>
                      </div>
                      <p className="text-sm text-white">Esse link <strong>não é dos Correios</strong>. O domínio "correios-entrega.xyz" é falso.</p>
                      <p className="mt-2 text-sm text-brand-muted">Não clique. Bloqueie o número.</p>
                      <p className="mt-1 text-right text-[10px] text-white/40">09:41 ✓✓</p>
                    </div>
                  </div>
                  {/* Confirmation */}
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-[#005C4B] px-4 py-2.5">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                        <p className="text-sm text-white">Obrigada! Salvei de boa 🙏</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

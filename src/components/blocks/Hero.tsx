"use client";

import { Badge } from "@/components/ui/Badge";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { homeContent } from "@/data/home";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden bg-brand-snow">
      {/* Subtle accent gradient */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-brand-lime/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-brand-lime/5 blur-3xl" />

      <div className="container-wide relative px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-32 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          {hero.badge && (
            <Badge variant="lime" className="mb-6">
              {hero.badge}
            </Badge>
          )}

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-brand-olive md:text-5xl lg:text-6xl">
            {hero.headline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-grey md:text-xl">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <WhatsAppButton label={hero.ctaText} size="lg" />
            <Link href="/como-funciona">
              <Button variant="outline" size="lg">
                Como funciona
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

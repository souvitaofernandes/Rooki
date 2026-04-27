import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { casosDeUsoContent } from "@/data/casos-de-uso";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Casos de uso",
  description: "Conheça situações reais onde a Rooki ajuda: links suspeitos, mensagens de golpe, falsas cobranças e mais.",
};

export default function CasosDeUso() {
  const { pageTitle, pageSubtitle, cases, ctaFinal } = casosDeUsoContent;

  return (
    <>
      <Section>
        <SectionHeading badge="Casos reais" title={pageTitle} subtitle={pageSubtitle} />
      </Section>

      <Section background="surface">
        <div className="space-y-8">
          {cases.map((c, i) => (
            <Card key={c.slug} className={i % 2 === 0 ? "" : "border-white/12"}>
              <div className="flex flex-wrap gap-2 mb-3">
                {c.tags.map((tag) => (
                  <Badge key={tag} variant="lime">{tag}</Badge>
                ))}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
              <p className="text-brand-muted mb-4">{c.description}</p>

              <div className="rounded-xl bg-white/4 border border-white/8 p-4 mb-4">
                <p className="text-sm font-medium text-brand-accent mb-1">Cenário</p>
                <p className="text-sm text-brand-muted leading-relaxed">{c.scenario}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-white mb-2">O que a Rooki faz:</p>
                <ul className="space-y-2">
                  {c.whatRookiDoes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-brand-muted">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="surface2">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">{ctaFinal.headline}</h2>
          <p className="mx-auto mt-4 max-w-lg text-brand-muted">{ctaFinal.subtitle}</p>
          <div className="mt-8">
            <WhatsAppButton label={ctaFinal.ctaText} size="lg" />
          </div>
        </div>
      </Section>
    </>
  );
}

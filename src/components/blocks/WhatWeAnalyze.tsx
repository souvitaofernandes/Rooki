import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { homeContent } from "@/data/home";
import { Link2, MessageSquare, Mail, ShoppingBag } from "lucide-react";

const icons = [Link2, MessageSquare, Mail, ShoppingBag];

export function WhatWeAnalyze() {
  const { analisa } = homeContent;

  return (
    <Section id="analisa">
      <SectionHeading
        badge="Análise inteligente"
        title={analisa.sectionTitle}
        subtitle={analisa.sectionSubtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {analisa.items.map((item, i) => {
          const Icon = icons[i] || Link2;
          return (
            <Card key={item.title} hover>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-olive/5">
                <Icon className="h-5 w-5 text-brand-olive" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-brand-olive">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-grey">
                {item.description}
              </p>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 rounded-xl border border-brand-linen bg-brand-linen/30 p-4 text-center">
        <Badge variant="outline" className="mb-2">Em breve</Badge>
        <p className="text-sm text-brand-grey">
          Estamos trabalhando na análise de imagens. Por enquanto, a Rooki funciona com textos e links.
        </p>
      </div>
    </Section>
  );
}

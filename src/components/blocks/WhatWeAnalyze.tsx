import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { homeContent } from "@/data/home";
import { Link2, Camera, MessageSquare, FileText, UserCheck, Mail } from "lucide-react";

const icons = [Link2, Camera, MessageSquare, FileText, UserCheck, Mail];

export function WhatWeAnalyze() {
  const { analisa } = homeContent;

  return (
    <Section id="analisa">
      <SectionHeading
        badge="Análise inteligente"
        title={analisa.sectionTitle}
        subtitle={analisa.sectionSubtitle}
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {analisa.items.map((item, i) => {
          const Icon = icons[i];
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
    </Section>
  );
}

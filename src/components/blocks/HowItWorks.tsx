import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { homeContent } from "@/data/home";
import { Send, Brain, ShieldCheck } from "lucide-react";

const icons = [Send, Brain, ShieldCheck];

export function HowItWorks() {
  const { comoFunciona } = homeContent;

  return (
    <Section background="linen" id="como-funciona">
      <SectionHeading
        badge="Simples assim"
        title={comoFunciona.sectionTitle}
        subtitle={comoFunciona.sectionSubtitle}
      />

      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {comoFunciona.steps.map((step, i) => {
          const Icon = icons[i];
          return (
            <Card key={step.number} hover>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lime/20">
                <Icon className="h-6 w-6 text-brand-olive" />
              </div>
              <div className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-lime">
                Passo {step.number}
              </div>
              <h3 className="mb-2 text-lg font-semibold text-brand-olive">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-brand-grey">
                {step.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}

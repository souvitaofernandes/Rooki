import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { homeContent } from "@/data/home";
import { AlertTriangle } from "lucide-react";

export function ProblemaSection() {
  const { problema } = homeContent;

  return (
    <Section background="default">
      <SectionHeading
        title={problema.sectionTitle}
        subtitle={problema.sectionSubtitle}
        gradient
      />

      <p className="mx-auto mb-12 max-w-2xl text-center text-brand-muted">
        {problema.body}
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {problema.cards.map((card, i) => (
          <div
            key={card.title}
            className="glass-card glass-card-hover flex items-start gap-4 p-5"
          >
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/15">
              <AlertTriangle className="h-4 w-4 text-amber-400" />
            </div>
            <div>
              <h3 className="mb-1 font-heading text-sm font-semibold text-white">{card.title}</h3>
              <p className="text-xs leading-relaxed text-brand-muted">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

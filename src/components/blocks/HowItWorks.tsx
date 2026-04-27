import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { homeContent } from "@/data/home";

export function HowItWorks() {
  const { comoFunciona } = homeContent;

  return (
    <Section background="surface" id="como-funciona">
      <SectionHeading
        title={comoFunciona.sectionTitle}
        subtitle={comoFunciona.sectionSubtitle}
        gradient
      />

      <div className="relative grid gap-8 md:grid-cols-3">
        {/* Connecting line */}
        <div className="absolute left-0 top-7 hidden h-px w-full bg-gradient-to-r from-brand-accent/40 via-brand-cyan/40 to-brand-purple/40 md:block" style={{ zIndex: 0 }} />

        {comoFunciona.steps.map((step, i) => {
          const gradientColors = [
            "from-brand-accent to-brand-aqua",
            "from-brand-aqua to-brand-cyan",
            "from-brand-cyan to-brand-purple",
          ];
          return (
            <div key={step.number} className="relative z-10 text-center">
              <div className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradientColors[i]} shadow-lg`}>
                <span className="font-heading text-xl font-bold text-brand-bg">{step.number}</span>
              </div>
              <h3 className="font-heading mb-3 text-lg font-bold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-brand-muted">{step.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

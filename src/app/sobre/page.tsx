import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { sobreContent } from "@/data/sobre";

export const metadata: Metadata = {
  title: "Sobre a Rooki",
  description: "Conheça a história e a missão da Rooki: IA brasileira contra golpes digitais.",
};

export default function Sobre() {
  const { pageTitle, pageSubtitle, missao, problema, solucao, valores, historia, comoConstruimos, ctaFinal } =
    sobreContent;

  return (
    <>
      <Section>
        <SectionHeading badge="Sobre" title={pageTitle} subtitle={pageSubtitle} />
      </Section>

      <Section background="surface">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">{missao.headline}</h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-muted">{missao.body}</p>
        </div>
      </Section>

      <Section background="default">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">{problema.headline}</h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-muted">{problema.body}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {problema.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="mt-1 text-sm text-brand-soft">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="surface">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">{solucao.headline}</h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-muted">{solucao.body}</p>
        </div>
      </Section>

      <Section background="default">
        <SectionHeading title={valores.sectionTitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valores.items.map((value) => (
            <Card key={value.title} hover>
              <h3 className="mb-2 font-heading font-semibold text-white">{value.title}</h3>
              <p className="text-sm text-brand-muted">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="surface">
        <SectionHeading title={historia.sectionTitle} />
        <div className="mx-auto max-w-2xl">
          <p className="mb-8 text-center text-lg leading-relaxed text-brand-muted">{historia.body}</p>
          <div className="space-y-6">
            {historia.timeline.map((event) => (
              <div key={event.period} className="flex gap-4">
                <div className="flex h-auto w-20 shrink-0 items-start justify-center pt-1">
                  <span className="text-sm font-bold gradient-text">{event.period}</span>
                </div>
                <div className="border-l-2 border-brand-accent/30 pl-4 pb-4">
                  <h3 className="font-semibold text-white">{event.title}</h3>
                  <p className="text-sm text-brand-muted">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="default">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">{comoConstruimos.headline}</h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-muted">{comoConstruimos.body}</p>
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

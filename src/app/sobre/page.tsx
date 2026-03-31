import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { sobreContent } from "@/data/sobre";

export const metadata: Metadata = {
  title: "Sobre a Rooki",
  description:
    "Conheça a história e a missão da Rooki: inteligência artificial brasileira contra golpes digitais.",
};

export default function Sobre() {
  const { pageTitle, pageSubtitle, missao, problema, solucao, valores, historia, comoConstruimos, ctaFinal } =
    sobreContent;

  return (
    <>
      {/* Hero */}
      <Section>
        <SectionHeading
          badge="Sobre"
          title={pageTitle}
          subtitle={pageSubtitle}
        />
      </Section>

      {/* Mission */}
      <Section background="linen">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-brand-olive md:text-4xl">{missao.headline}</h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-grey">{missao.body}</p>
        </div>
      </Section>

      {/* Problem */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-brand-olive md:text-4xl">{problema.headline}</h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-grey">{problema.body}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {problema.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-brand-lime">{stat.value}</div>
                <div className="mt-1 text-sm text-brand-grey">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Solution */}
      <Section background="linen">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-brand-olive md:text-4xl">{solucao.headline}</h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-grey">{solucao.body}</p>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeading title={valores.sectionTitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {valores.items.map((value) => (
            <Card key={value.title} hover>
              <h3 className="mb-2 font-semibold text-brand-olive">{value.title}</h3>
              <p className="text-sm text-brand-grey">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* History */}
      <Section background="linen">
        <SectionHeading title={historia.sectionTitle} />
        <div className="mx-auto max-w-2xl">
          <p className="mb-8 text-lg leading-relaxed text-brand-grey text-center">{historia.body}</p>
          <div className="space-y-6">
            {historia.timeline.map((event) => (
              <div key={event.period} className="flex gap-4">
                <div className="flex h-auto w-20 shrink-0 items-start justify-center pt-1">
                  <span className="text-sm font-bold text-brand-lime">{event.period}</span>
                </div>
                <div className="border-l-2 border-brand-lime/30 pl-4 pb-4">
                  <h3 className="font-semibold text-brand-olive">{event.title}</h3>
                  <p className="text-sm text-brand-grey">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* How we build */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-brand-olive md:text-4xl">{comoConstruimos.headline}</h2>
          <p className="mt-6 text-lg leading-relaxed text-brand-grey">{comoConstruimos.body}</p>
        </div>
      </Section>

      {/* CTA */}
      <Section background="olive">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-snow md:text-4xl">{ctaFinal.headline}</h2>
          <p className="mx-auto mt-4 max-w-lg text-brand-snow/70">{ctaFinal.subtitle}</p>
          <div className="mt-8">
            <WhatsAppButton label={ctaFinal.ctaText} size="lg" />
          </div>
        </div>
      </Section>
    </>
  );
}

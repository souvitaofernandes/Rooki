import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { legalDisclaimer } from "@/data/legal";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso Legal da Rooki. Limitações e natureza do serviço.",
};

export default function AvisoLegal() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-brand-olive md:text-4xl">
          {legalDisclaimer.title}
        </h1>
        <p className="mt-2 text-sm text-brand-grey">
          Última atualização: {legalDisclaimer.lastUpdated}
        </p>

        <div className="mt-10 space-y-8">
          {legalDisclaimer.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-semibold text-brand-olive mb-3">
                {section.heading}
              </h2>
              <p className="text-sm leading-relaxed text-brand-grey">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

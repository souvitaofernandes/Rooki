import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { termsOfUse } from "@/data/legal";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de Uso da Rooki. Condições para utilização do serviço.",
};

export default function TermosDeUso() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-white md:text-4xl">
          {termsOfUse.title}
        </h1>
        <p className="mt-2 text-sm text-brand-muted">
          Última atualização: {termsOfUse.lastUpdated}
        </p>

        <div className="mt-10 space-y-8">
          {termsOfUse.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-semibold text-white mb-3">
                {section.heading}
              </h2>
              <p className="text-sm leading-relaxed text-brand-muted">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

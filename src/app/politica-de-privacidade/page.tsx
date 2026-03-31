import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { privacyPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da Rooki. Saiba como tratamos seus dados.",
};

export default function PoliticaDePrivacidade() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-brand-olive md:text-4xl">
          {privacyPolicy.title}
        </h1>
        <p className="mt-2 text-sm text-brand-grey">
          Última atualização: {privacyPolicy.lastUpdated}
        </p>

        <div className="mt-10 space-y-8">
          {privacyPolicy.sections.map((section) => (
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

import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { faqContent } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ — Perguntas Frequentes",
  description: "Tire suas dúvidas sobre a Rooki: como funciona, privacidade, limites do serviço e mais.",
};

export default function FAQ() {
  const { pageTitle, pageSubtitle, items } = faqContent;
  const categories = [...new Set(items.map((i) => i.category))];

  return (
    <>
      <Section>
        <SectionHeading badge="FAQ" title={pageTitle} subtitle={pageSubtitle} />
      </Section>

      {categories.map((cat, i) => (
        <FAQBlock
          key={cat}
          title={cat}
          items={items
            .filter((item) => item.category === cat)
            .map(({ question, answer }) => ({ question, answer }))}
          background={i % 2 === 0 ? "surface" : "default"}
        />
      ))}

      <Section background="surface2">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Não encontrou sua resposta?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-brand-muted">
            Mande sua dúvida direto no WhatsApp ou entre em contato pelo formulário.
          </p>
          <div className="mt-8">
            <WhatsAppButton label="Falar com a Rooki" size="lg" />
          </div>
        </div>
      </Section>
    </>
  );
}

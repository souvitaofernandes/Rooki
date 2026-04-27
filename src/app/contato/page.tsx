import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { B2BForm } from "@/components/forms/B2BForm";
import { contatoContent } from "@/data/contato";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com a Rooki para parcerias, pilotos B2B ou dúvidas.",
};

export default function Contato() {
  const { pageTitle, pageSubtitle, formTitle, formSubtitle, channels } = contatoContent;

  return (
    <>
      <Section>
        <SectionHeading badge="Contato" title={pageTitle} subtitle={pageSubtitle} />
      </Section>

      <Section background="surface">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="font-heading text-2xl font-bold text-white mb-2">{formTitle}</h2>
            <p className="text-brand-muted mb-8">{formSubtitle}</p>
            <B2BForm />
          </div>

          <div className="lg:col-span-2">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">{channels.title}</h2>
            <div className="space-y-4">
              {channels.items.map((ch) => (
                <Card key={ch.label}>
                  <p className="text-sm text-brand-soft mb-1">{ch.label}</p>
                  {ch.href ? (
                    <a
                      href={ch.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-brand-accent hover:text-brand-aqua transition-colors"
                    >
                      {ch.value}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-white">{ch.value}</p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { educacaoContent } from "@/data/educacao";
import { ArrowRight, CheckCircle, Download, Rocket } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Educação",
  description:
    "Palestras, workshops e materiais gratuitos sobre segurança digital. Leve a Rooki para sua empresa, comunidade ou evento.",
};

export default function Educacao() {
  const { pageTitle, pageSubtitle, intro, programs, materiais, futureProducts, ctaFinal } =
    educacaoContent;

  return (
    <>
      <Section>
        <SectionHeading
          badge="Educação"
          title={pageTitle}
          subtitle={pageSubtitle}
        />
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg text-brand-grey leading-relaxed">{intro.body}</p>
        </div>
      </Section>

      {/* Programs */}
      <Section background="linen">
        <SectionHeading title="Nossos programas" />
        <div className="grid gap-8 md:grid-cols-2">
          {programs.map((prog) => (
            <Card key={prog.slug} hover>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge variant="lime">{prog.format}</Badge>
                <Badge variant="outline">{prog.audience}</Badge>
                {prog.duration && <Badge variant="outline">{prog.duration}</Badge>}
              </div>
              <h3 className="text-xl font-bold text-brand-olive mb-2">{prog.title}</h3>
              <p className="text-sm text-brand-grey mb-4">{prog.description}</p>
              <div className="space-y-2 mb-4">
                {prog.topics.map((topic) => (
                  <div key={topic} className="flex items-start gap-2 text-sm text-brand-grey">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" />
                    {topic}
                  </div>
                ))}
              </div>
              <Link href={prog.cta.href}>
                <Button variant="outline" size="sm">
                  {prog.cta.text}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* Free materials */}
      <Section>
        <SectionHeading
          title={materiais.sectionTitle}
          subtitle={materiais.sectionSubtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {materiais.items.map((mat) => (
            <Card key={mat.title} hover>
              <Download className="mb-3 h-6 w-6 text-brand-lime" />
              <Badge variant="outline" className="mb-3">{mat.format}</Badge>
              <h3 className="mb-2 font-semibold text-brand-olive">{mat.title}</h3>
              <p className="text-sm text-brand-grey">{mat.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Future products */}
      <Section background="linen">
        <SectionHeading
          title={futureProducts.sectionTitle}
          subtitle={futureProducts.sectionSubtitle}
        />
        <div className="mx-auto max-w-2xl space-y-4">
          {futureProducts.items.map((prod) => (
            <div key={prod.title} className="flex gap-4 rounded-xl border border-brand-linen bg-white p-5">
              <Rocket className="mt-0.5 h-5 w-5 shrink-0 text-brand-lime" />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-brand-olive">{prod.title}</h3>
                  <Badge variant="outline" className="text-xs">{prod.status}</Badge>
                </div>
                <p className="text-sm text-brand-grey">{prod.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="olive">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-snow md:text-4xl">{ctaFinal.headline}</h2>
          <p className="mx-auto mt-4 max-w-lg text-brand-snow/70">{ctaFinal.subtitle}</p>
          <div className="mt-8">
            <Link href={ctaFinal.ctaHref}>
              <Button variant="primary" size="lg">
                {ctaFinal.ctaText}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

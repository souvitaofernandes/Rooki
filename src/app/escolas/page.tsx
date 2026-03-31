import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { escolasContent } from "@/data/escolas";
import { ArrowRight, CheckCircle, Shield, BookOpen, Users, School, Quote } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rooki para Escolas",
  description:
    "Programa de segurança digital para escolas. Conteúdo adaptado para alunos, professores e famílias.",
};

const benefitIcons = [Shield, BookOpen, Users, School, CheckCircle, CheckCircle];

export default function Escolas() {
  const { pageTitle, pageSubtitle, intro, porQue, modules, stakeholders, comoContratar, depoimentos, ctaFinal } =
    escolasContent;

  return (
    <>
      {/* Hero */}
      <Section>
        <SectionHeading
          badge="Escolas"
          title={pageTitle}
          subtitle={pageSubtitle}
        />
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg text-brand-grey leading-relaxed mb-8">{intro.body}</p>
          <div className="flex flex-wrap justify-center gap-6">
            {intro.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-brand-lime">{stat.value}</div>
                <div className="text-sm text-brand-grey mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why */}
      <Section background="linen">
        <SectionHeading title={porQue.sectionTitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {porQue.benefits.map((benefit, i) => {
            const Icon = benefitIcons[i] || Shield;
            return (
              <Card key={benefit.title} hover>
                <Icon className="mb-3 h-6 w-6 text-brand-lime" />
                <h3 className="mb-2 font-semibold text-brand-olive">{benefit.title}</h3>
                <p className="text-sm text-brand-grey">{benefit.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Modules */}
      <Section>
        <SectionHeading
          title={modules.sectionTitle}
          subtitle={modules.sectionSubtitle}
        />
        <div className="grid gap-8 md:grid-cols-2">
          {modules.items.map((mod) => (
            <Card key={mod.title} hover>
              <Badge variant="lime" className="mb-3">{mod.audience}</Badge>
              <h3 className="text-lg font-bold text-brand-olive mb-2">{mod.title}</h3>
              <p className="text-sm text-brand-grey mb-4">{mod.description}</p>
              <div className="space-y-2">
                {mod.topics.map((topic) => (
                  <div key={topic} className="flex items-start gap-2 text-sm text-brand-grey">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" />
                    {topic}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stakeholders */}
      <Section background="linen">
        <SectionHeading
          title={stakeholders.sectionTitle}
          subtitle={stakeholders.sectionSubtitle}
        />
        <div className="space-y-8">
          {stakeholders.items.map((st) => (
            <div key={st.role} className="rounded-2xl border border-brand-linen bg-white p-6 md:p-8">
              <Badge variant="lime" className="mb-3">{st.role}</Badge>
              <h3 className="text-xl font-bold text-brand-olive mb-2">{st.headline}</h3>
              <p className="text-brand-grey mb-4">{st.description}</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {st.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2 text-sm text-brand-grey">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-lime" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* How to hire */}
      <Section>
        <SectionHeading title={comoContratar.sectionTitle} />
        <div className="mx-auto max-w-2xl space-y-6">
          {comoContratar.steps.map((step) => (
            <div key={step.number} className="flex gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-lime text-sm font-bold text-brand-olive">
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-brand-olive">{step.title}</h3>
                <p className="text-sm text-brand-grey">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="linen">
        <SectionHeading title={depoimentos.sectionTitle} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {depoimentos.items.map((dep) => (
            <Card key={dep.author}>
              <Quote className="mb-3 h-6 w-6 text-brand-lime/40" />
              <p className="mb-4 text-sm italic leading-relaxed text-brand-grey">
                &ldquo;{dep.quote}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-brand-olive">{dep.author}</p>
                <p className="text-xs text-brand-grey">{dep.role}{dep.school ? ` — ${dep.school}` : ""}</p>
              </div>
            </Card>
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

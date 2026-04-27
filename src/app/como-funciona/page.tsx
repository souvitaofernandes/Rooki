import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { comoFuncionaContent } from "@/data/como-funciona";
import { Send, Brain, ShieldCheck, AlertTriangle, CheckCircle, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Como funciona",
  description: "Entenda como a Rooki analisa links e mensagens pelo WhatsApp para identificar golpes em segundos.",
};

const stepIcons = [Send, Brain, ShieldCheck];
const returnIcons = [AlertTriangle, CheckCircle, Info, ShieldCheck];

export default function ComoFunciona() {
  const { steps, oQueEnviar, oQueRetorna, limites, boasPraticas, pageTitle, pageSubtitle } = comoFuncionaContent;

  return (
    <>
      <Section>
        <SectionHeading badge="Como funciona" title={pageTitle} subtitle={pageSubtitle} />
      </Section>

      <Section background="surface">
        <SectionHeading title="Passo a passo" subtitle="Simples, rápido e sem cadastro." gradient />
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => {
            const Icon = stepIcons[i] || Send;
            return (
              <Card key={step.number} hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-gradient">
                  <Icon className="h-6 w-6 text-brand-bg" />
                </div>
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-accent">
                  Passo {step.number}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mb-3 text-sm leading-relaxed text-brand-muted">{step.description}</p>
                <ul className="space-y-1.5">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-brand-muted">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section background="default">
        <SectionHeading badge="Veja em ação" title="A Rooki na prática" subtitle="Assista ao chatbot funcionando no WhatsApp." />
        <div className="mx-auto flex justify-center">
          <div className="w-[280px] sm:w-[320px]">
            <div className="overflow-hidden rounded-[2rem] border-[4px] border-white/10 bg-brand-surface shadow-2xl shadow-brand-purple/20">
              <video className="w-full" controls playsInline preload="metadata">
                <source src="/Demo1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </Section>

      <Section background="surface">
        <SectionHeading title={oQueEnviar.sectionTitle} subtitle={oQueEnviar.sectionSubtitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {oQueEnviar.items.map((item) => (
            <Card key={item.type} hover>
              <h3 className="mb-2 font-heading font-semibold text-white">{item.type}</h3>
              <p className="mb-3 text-sm text-brand-muted">{item.description}</p>
              <div className="space-y-1">
                {item.examples.map((ex) => (
                  <p key={ex} className="text-xs text-brand-soft">&bull; {ex}</p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="default">
        <SectionHeading title={oQueRetorna.sectionTitle} subtitle={oQueRetorna.sectionSubtitle} />
        <div className="grid gap-6 sm:grid-cols-2">
          {oQueRetorna.items.map((item, i) => {
            const Icon = returnIcons[i] || Info;
            return (
              <div key={item.label} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15">
                  <Icon className="h-5 w-5 text-brand-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-white">{item.label}</h3>
                  <p className="text-sm leading-relaxed text-brand-muted">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section background="surface">
        <SectionHeading title={limites.sectionTitle} subtitle={limites.sectionSubtitle} />
        <div className="mx-auto max-w-2xl space-y-6">
          {limites.items.map((limit) => (
            <div key={limit.title} className="border-b border-white/8 pb-6 last:border-0">
              <h3 className="mb-1 font-semibold text-white">{limit.title}</h3>
              <p className="text-sm leading-relaxed text-brand-muted">{limit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="default">
        <SectionHeading title={boasPraticas.sectionTitle} />
        <div className="mx-auto max-w-2xl space-y-4">
          {boasPraticas.items.map((bp) => (
            <div key={bp.title} className="flex gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
              <div>
                <h3 className="font-medium text-white">{bp.title}</h3>
                <p className="text-sm text-brand-muted">{bp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="surface2">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Pronto para testar?</h2>
          <p className="mx-auto mt-4 max-w-lg text-brand-muted">Mande uma mensagem e veja a Rooki em ação.</p>
          <div className="mt-8">
            <WhatsAppButton label="Testar no WhatsApp" size="lg" />
          </div>
        </div>
      </Section>
    </>
  );
}

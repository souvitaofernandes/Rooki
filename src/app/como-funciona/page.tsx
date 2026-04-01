import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { comoFuncionaContent } from "@/data/como-funciona";
import { Send, Brain, ShieldCheck, AlertTriangle, CheckCircle, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Entenda como a Rooki analisa links e mensagens pelo WhatsApp para identificar golpes em segundos.",
};

const stepIcons = [Send, Brain, ShieldCheck];
const returnIcons = [AlertTriangle, CheckCircle, Info, ShieldCheck];

export default function ComoFunciona() {
  const { steps, oQueEnviar, oQueRetorna, limites, boasPraticas, pageTitle, pageSubtitle } =
    comoFuncionaContent;

  return (
    <>
      {/* Hero */}
      <Section>
        <SectionHeading
          badge="Como funciona"
          title={pageTitle}
          subtitle={pageSubtitle}
        />
      </Section>

      {/* Steps */}
      <Section background="linen">
        <SectionHeading title="Passo a passo" subtitle="Simples, rápido e sem cadastro." />
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => {
            const Icon = stepIcons[i] || Send;
            return (
              <Card key={step.number} hover>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-lime/20">
                  <Icon className="h-6 w-6 text-brand-olive" />
                </div>
                <div className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-lime">
                  Passo {step.number}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-brand-olive">
                  {step.title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-brand-grey">
                  {step.description}
                </p>
                <ul className="space-y-1.5">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm text-brand-grey">
                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-lime" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Product demo */}
      <Section>
        <SectionHeading
          badge="Veja em ação"
          title="A Rooki na prática"
          subtitle="Assista ao chatbot funcionando de verdade no WhatsApp."
        />
        <div className="mx-auto max-w-2xl">
          <div className="overflow-hidden rounded-2xl border border-brand-linen bg-brand-olive shadow-xl">
            <video
              className="w-full"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/Demo1.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeo.
            </video>
          </div>
        </div>
      </Section>

      {/* What you can send */}
      <Section background="linen">
        <SectionHeading
          title={oQueEnviar.sectionTitle}
          subtitle={oQueEnviar.sectionSubtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {oQueEnviar.items.map((item) => (
            <Card key={item.type} hover>
              <h3 className="mb-2 font-semibold text-brand-olive">{item.type}</h3>
              <p className="mb-3 text-sm text-brand-grey">{item.description}</p>
              <div className="space-y-1">
                {item.examples.map((ex) => (
                  <p key={ex} className="text-xs text-brand-grey/70">
                    &bull; {ex}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* What Rooki returns */}
      <Section background="linen">
        <SectionHeading
          title={oQueRetorna.sectionTitle}
          subtitle={oQueRetorna.sectionSubtitle}
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {oQueRetorna.items.map((item, i) => {
            const Icon = returnIcons[i] || Info;
            return (
              <div key={item.label} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-lime/15">
                  <Icon className="h-5 w-5 text-brand-olive" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-brand-olive">{item.label}</h3>
                  <p className="text-sm leading-relaxed text-brand-grey">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Limits */}
      <Section>
        <SectionHeading
          title={limites.sectionTitle}
          subtitle={limites.sectionSubtitle}
        />
        <div className="mx-auto max-w-2xl space-y-6">
          {limites.items.map((limit) => (
            <div key={limit.title} className="border-b border-brand-linen pb-6 last:border-0">
              <h3 className="mb-1 font-semibold text-brand-olive">{limit.title}</h3>
              <p className="text-sm leading-relaxed text-brand-grey">{limit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Best practices */}
      <Section background="linen">
        <SectionHeading title={boasPraticas.sectionTitle} />
        <div className="mx-auto max-w-2xl space-y-4">
          {boasPraticas.items.map((bp) => (
            <div key={bp.title} className="flex gap-3">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-lime" />
              <div>
                <h3 className="font-medium text-brand-olive">{bp.title}</h3>
                <p className="text-sm text-brand-grey">{bp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="olive">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-brand-snow md:text-4xl">
            Pronto para testar?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-brand-snow/70">
            Mande uma mensagem no WhatsApp e veja a Rooki em ação.
          </p>
          <div className="mt-8">
            <WhatsAppButton label="Conversar no WhatsApp" size="lg" />
          </div>
        </div>
      </Section>
    </>
  );
}

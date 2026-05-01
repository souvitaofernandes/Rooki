import Link from "next/link";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { Settings, Activity, BrainCircuit, Rocket, CheckCircle2 } from "lucide-react";

const phases = [
  {
    icon: Settings,
    phase: "Fase 1",
    title: "Setup",
    text: "Definição do público inicial, comunicação de ativação, canal WhatsApp e critérios de categorização.",
  },
  {
    icon: Activity,
    phase: "Fase 2",
    title: "Operação",
    text: "Usuários enviam situações suspeitas, recebem orientação e geram dados sobre golpes reais.",
  },
  {
    icon: BrainCircuit,
    phase: "Fase 3",
    title: "Inteligência",
    text: "A Rooki entrega métricas, aprendizados, principais categorias de risco e recomendações de prevenção.",
  },
  {
    icon: Rocket,
    phase: "Fase 4",
    title: "Escala",
    text: "Com dados reais do piloto, a empresa decide como expandir para novos públicos, campanhas ou integrações.",
  },
];

const deliverables = [
  "Canal WhatsApp ativo para a base selecionada",
  "Análise de mensagens, links, prints e situações suspeitas",
  "Categorização dos golpes recebidos",
  "Relatório de uso e principais aprendizados",
  "Recomendações de comunicação preventiva",
  "Reunião executiva de fechamento",
  "Proposta de escala",
];

export function PilotSection() {
  return (
    <section id="piloto" className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
              Piloto B2B
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-3 leading-tight">
              Comece com um piloto controlado de 90 dias
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Valide adoção, volume, categorias de golpes, percepção de valor e
              inteligência gerada antes de escalar para toda a base.
            </p>
          </div>
        </FadeIn>

        {/* Phases */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {phases.map(({ icon: Icon, phase, title, text }, i) => (
            <FadeIn key={phase} delay={i * 0.07}>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm h-full flex flex-col gap-3">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center flex-shrink-0">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xs font-bold text-muted uppercase tracking-widest">{phase}</span>
                </div>
                <h3 className="font-bold text-ink text-lg">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Deliverables */}
        <FadeIn delay={0.3}>
          <div className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm">
            <h3 className="font-bold text-ink text-lg mb-5">Entregáveis do piloto</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-8 flex justify-start">
            <Link
              href="#contato"
              className="btn-primary inline-flex items-center justify-center px-6 py-3.5 text-[15px]"
            >
              Quero testar com minha base
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

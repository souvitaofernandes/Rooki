import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { Lock, Bot, PieChart, FileCheck } from "lucide-react";

const cards = [
  {
    icon: Lock,
    title: "Privacidade",
    text: "Coleta apenas o necessário para análise, orientação e geração de inteligência agregada, respeitando princípios de minimização e finalidade.",
  },
  {
    icon: Bot,
    title: "Governança de IA",
    text: "As respostas devem ser orientativas, explicáveis e revisadas continuamente para reduzir erros, ambiguidades e interpretações indevidas.",
  },
  {
    icon: PieChart,
    title: "Dados agregados",
    text: "Métricas para o parceiro são trabalhadas de forma agregada, priorizando padrões de golpe e comportamento de risco, não exposição individual.",
  },
  {
    icon: FileCheck,
    title: "LGPD by design",
    text: "O desenho da solução considera bases legais, transparência, retenção, segurança da informação e direitos dos titulares.",
  },
];

export function TrustGovernance() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
              Confiança e governança
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-3 leading-tight">
              Segurança, privacidade e responsabilidade desde o desenho
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              A Rooki deve ser implementada com critérios claros de privacidade,
              retenção de dados, consentimento, governança e uso responsável de IA.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <FadeIn key={title} delay={i * 0.07}>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex gap-5 h-full">
                <div className="w-10 h-10 rounded-xl bg-ink/5 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-ink" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-1.5">{title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="mt-8 text-sm text-muted text-center max-w-xl mx-auto">
            A Rooki oferece orientação preventiva e educativa. A solução não substitui canais oficiais,
            suporte da empresa parceira ou análise especializada em casos críticos.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { Shield, Lightbulb, Database } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Proteção no momento certo",
    text: "A Rooki orienta o usuário antes da decisão de risco, ajudando a evitar cliques, pagamentos indevidos e compartilhamento de dados sensíveis.",
    accent: "border-t-primary",
  },
  {
    icon: Lightbulb,
    title: "Educação embutida",
    text: "Cada resposta explica o motivo do risco em linguagem simples, reforçando comportamentos seguros sem depender de treinamentos longos ou campanhas genéricas.",
    accent: "border-t-cyan",
  },
  {
    icon: Database,
    title: "Inteligência antifraude",
    text: "A empresa recebe dados estruturados sobre os golpes que chegam à sua base, permitindo enxergar padrões, temas emergentes e oportunidades de prevenção.",
    accent: "border-t-success",
  },
];

export function ValueProposition() {
  return (
    <section id="para-empresas" className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
              Proposta de valor
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-4 leading-tight">
              Mais do que responder dúvidas.{" "}
              <span className="text-brand-gradient">A Rooki gera proteção, educação e inteligência</span>
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, title, text, accent }, i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <div className={`bg-white rounded-2xl border border-gray-100 border-t-4 ${accent} p-7 shadow-sm h-full flex flex-col gap-4`}>
                <div className="w-11 h-11 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-ink" />
                </div>
                <div>
                  <h3 className="font-bold text-ink text-lg mb-2">{title}</h3>
                  <p className="text-muted leading-relaxed">{text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

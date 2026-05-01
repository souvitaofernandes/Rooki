import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { AlertTriangle, Clock, BookOpen, Eye } from "lucide-react";

const cards = [
  {
    icon: AlertTriangle,
    title: "O usuário decide sob pressão",
    text: "Golpistas exploram urgência, medo e falta de clareza para induzir cliques, pagamentos e envio de dados.",
  },
  {
    icon: Clock,
    title: "A empresa só descobre depois",
    text: "Muitas organizações só entram na jornada quando o dano já aconteceu: contestação, chargeback, reclamação ou suporte.",
  },
  {
    icon: BookOpen,
    title: "Educação tradicional não acompanha o golpe",
    text: "Campanhas genéricas ajudam, mas não orientam o usuário exatamente no momento em que ele precisa decidir.",
  },
  {
    icon: Eye,
    title: "Falta inteligência sobre o que chega na base",
    text: "Sem dados estruturados, a empresa não enxerga quais golpes estão crescendo, quais canais são mais usados e quais públicos estão mais expostos.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
              O problema
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-4 leading-tight">
              Golpes acontecem antes do suporte, antes do banco e antes da empresa conseguir agir
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              O usuário recebe uma mensagem suspeita no WhatsApp, um SMS com link
              falso, um e-mail simulando uma cobrança ou uma ligação pressionando
              uma decisão rápida. Na maioria das vezes, ele precisa decidir
              sozinho — em segundos.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <FadeIn key={title} delay={i * 0.07}>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm h-full flex flex-col gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-2 leading-snug">{title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

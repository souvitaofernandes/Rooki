import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { Smartphone, MapPin, Zap, BarChart2 } from "lucide-react";

const cards = [
  {
    icon: Smartphone,
    title: "WhatsApp-first",
    text: "Começamos pelo canal que o brasileiro já usa todos os dias. Menos fricção, mais chance de uso no momento real da dúvida.",
    highlight: true,
  },
  {
    icon: MapPin,
    title: "Foco no cenário brasileiro",
    text: "A Rooki é pensada para golpes, linguagem, marcas, canais e comportamentos comuns no Brasil.",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Educação no fluxo da decisão",
    text: "Em vez de ensinar segurança digital longe do problema, a Rooki educa quando o usuário está prestes a decidir.",
    highlight: false,
  },
  {
    icon: BarChart2,
    title: "Dados estruturados para o parceiro",
    text: "Além de orientar o usuário, a Rooki organiza as interações em categorias úteis para prevenção, comunicação e estratégia antifraude.",
    highlight: false,
  },
];

export function Differentiators() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="max-w-xl mb-12">
            <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
              Diferenciais
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-3 leading-tight">
              Por que a Rooki é diferente
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map(({ icon: Icon, title, text, highlight }, i) => (
            <FadeIn key={title} delay={i * 0.07}>
              <div
                className={`rounded-2xl border p-7 shadow-sm h-full flex flex-col gap-4 transition-colors ${
                  highlight
                    ? "bg-white border-primary/20"
                    : "bg-white border-gray-100"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    highlight ? "bg-brand-gradient" : "bg-gray-50"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${highlight ? "text-white" : "text-ink"}`} />
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

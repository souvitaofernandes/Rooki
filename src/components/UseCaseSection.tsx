import Link from "next/link";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

const blocks = [
  {
    label: "Antes da Rooki",
    bg: "bg-red-50 border-red-100",
    labelColor: "text-red-600",
    text: "O usuário recebe um SMS dizendo que uma encomenda foi taxada e precisa pagar uma taxa em poucos minutos. O link parece legítimo, mas leva para uma página falsa que coleta dados bancários.",
  },
  {
    label: "Com a Rooki",
    bg: "bg-indigo-50 border-indigo-100",
    labelColor: "text-indigo-600",
    text: "O usuário encaminha a mensagem pelo WhatsApp. A Rooki identifica sinais de risco, explica o problema e orienta a não clicar nem pagar. A decisão muda — com clareza e sem pressão.",
  },
  {
    label: "Para a empresa",
    bg: "bg-green-50 border-green-100",
    labelColor: "text-green-700",
    text: "A interação é registrada como golpe de falsa entrega, com canal de origem, nível de risco e padrão de mensagem. Se o volume crescer, a empresa pode agir com campanhas, alertas e comunicação preventiva.",
  },
];

export function UseCaseSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="max-w-xl mb-12">
            <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
              Caso de uso
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-3 leading-tight">
              Exemplo prático: golpe de falsa entrega
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {blocks.map(({ label, bg, labelColor, text }, i) => (
            <FadeIn key={label} delay={i * 0.08}>
              <div className={`rounded-2xl border p-6 h-full flex flex-col gap-3 ${bg}`}>
                <p className={`text-xs font-bold uppercase tracking-widest ${labelColor}`}>
                  {label}
                </p>
                <p className="text-text leading-relaxed">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25}>
          <div className="bg-ink rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-2xl font-bold text-white leading-snug text-center md:text-left">
              O usuário recebe clareza.{" "}
              <span className="text-brand-gradient">A empresa recebe inteligência.</span>
            </p>
            <Link
              href="#contato"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3.5 text-[15px] flex-shrink-0"
            >
              Quero testar <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

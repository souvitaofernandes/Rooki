import Link from "next/link";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { MessageSquare, Send, CheckCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "1",
    title: "O usuário suspeita",
    text: "Recebe um link, mensagem, print, áudio, ligação ou e-mail suspeito.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Send,
    number: "2",
    title: "Envia para a Rooki",
    text: "Pelo WhatsApp, em um canal simples, familiar e de baixa fricção.",
    color: "bg-cyan/10 text-cyan",
  },
  {
    icon: CheckCircle,
    number: "3",
    title: "Recebe orientação",
    text: "A Rooki analisa o conteúdo, explica o risco e indica o que fazer.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: TrendingUp,
    number: "4",
    title: "A empresa aprende",
    text: "Cada interação gera dados categorizados sobre golpes, canais, padrões e temas recorrentes.",
    color: "bg-success/15 text-green-700",
  },
];

export function SolutionFlow() {
  return (
    <section id="como-funciona" className="bg-white py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="max-w-2xl mb-4">
            <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
              Como funciona
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-4 leading-tight">
              A Rooki entra exatamente no momento da dúvida
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              O usuário não precisa instalar um novo app, abrir chamado ou
              entender segurança digital. Ele envia a situação suspeita pelo
              WhatsApp e recebe uma orientação simples, rápida e acionável.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/20 via-cyan/20 to-success/20"
            aria-hidden
          />

          {steps.map(({ icon: Icon, number, title, text, color }, i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <div className="flex flex-col gap-4 relative">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-muted uppercase tracking-widest mb-1">
                    Passo {number}
                  </p>
                  <h3 className="font-semibold text-ink mb-1.5">{title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 flex justify-start">
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

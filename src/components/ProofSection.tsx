import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { FlaskConical, MessageCircle, Database, TrendingUp } from "lucide-react";

const proofCards = [
  {
    icon: FlaskConical,
    label: "MVP em validação",
    text: "Em validação com usuários reais no WhatsApp.",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp como canal inicial",
    text: "Canal de menor fricção para o usuário brasileiro.",
  },
  {
    icon: Database,
    label: "Dataset em construção",
    text: "Estruturando base categorizada de golpes brasileiros.",
  },
  {
    icon: TrendingUp,
    label: "Evolução B2B2C",
    text: "Buscando pilotos com empresas parceiras para validação em escala.",
  },
];

export function ProofSection() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
              Sobre a Rooki
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-4 leading-tight">
              Construída a partir de uma dor real do mercado brasileiro
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              A Rooki nasceu para responder a um problema cada vez mais comum:
              pessoas recebendo golpes digitais todos os dias e precisando decidir
              rapidamente se devem clicar, pagar, responder ou compartilhar dados.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {proofCards.map(({ icon: Icon, label, text }, i) => (
            <FadeIn key={label} delay={i * 0.07}>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex flex-col gap-3 h-full">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-semibold text-ink text-sm">{label}</p>
                <p className="text-sm text-muted leading-relaxed">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

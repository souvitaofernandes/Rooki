import Link from "next/link";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { CreditCard, Wifi, HeartHandshake, Umbrella } from "lucide-react";

const segments = [
  {
    icon: CreditCard,
    title: "Fintechs e bancos digitais",
    text: "Ajude clientes a validar mensagens, cobranças, links e abordagens suspeitas antes que o golpe gere perda financeira, contestação ou atrito com a marca.",
  },
  {
    icon: Wifi,
    title: "Operadoras de telecom",
    text: "Ofereça proteção digital em escala para uma base exposta diariamente a SMS falsos, links de cobrança, falsas promoções e golpes de engenharia social.",
  },
  {
    icon: HeartHandshake,
    title: "Benefícios e bem-estar financeiro",
    text: "Inclua segurança digital como benefício para colaboradores e famílias, reduzindo vulnerabilidade financeira e aumentando percepção de cuidado.",
  },
  {
    icon: Umbrella,
    title: "Seguradoras e assistências",
    text: "Amplie a proposta de proteção para o ambiente digital, oferecendo orientação preventiva antes que o incidente aconteça.",
  },
];

export function SegmentsSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
              Para quem é
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-3 leading-tight">
              Feita para empresas que têm relação direta com grandes bases de consumidores
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              A Rooki pode ser oferecida como benefício, camada de confiança,
              proteção antifraude ou recurso educativo dentro da jornada do
              cliente.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {segments.map(({ icon: Icon, title, text }, i) => (
            <FadeIn key={title} delay={i * 0.07}>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex gap-5 items-start h-full hover:border-primary/20 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-brand-gradient-subtle flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
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
          <p className="mt-8 text-sm text-muted text-center">
            Também indicado para plataformas de bem-estar financeiro, empresas com grandes bases B2C e programas de benefícios corporativos.
          </p>
          <div className="mt-6 flex justify-center">
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

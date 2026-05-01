import Link from "next/link";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { CheckCircle2 } from "lucide-react";

const tiers = [
  {
    tag: "Início",
    title: "Piloto B2B2C",
    description: "Ideal para validar uso com uma base controlada, medir comportamento real e gerar os primeiros dados de inteligência.",
    items: [
      "Duração definida",
      "Base limitada",
      "Volume de análises incluso",
      "Relatório executivo",
      "Recomendação de escala",
    ],
    cta: "Quero um piloto",
    highlight: false,
  },
  {
    tag: "Crescimento",
    title: "Contrato por volume",
    description: "Para empresas que querem oferecer a Rooki para uma base maior de usuários.",
    items: [
      "Cobrança por faixa de usuários",
      "Franquia de análises",
      "Excedente por uso",
      "Dashboard e relatórios",
      "Possibilidade de co-branding",
    ],
    cta: "Conversar sobre escala",
    highlight: true,
  },
  {
    tag: "Estratégico",
    title: "Parceria customizada",
    description: "Para empresas com milhões de usuários, múltiplos canais ou necessidade de integrações específicas.",
    items: [
      "Desenho conjunto da operação",
      "Integrações futuras",
      "Relatórios avançados",
      "Campanhas educativas",
      "Governança executiva",
    ],
    cta: "Desenhar parceria",
    highlight: false,
  },
];

export function PricingModel() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
              Modelo comercial
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-3 leading-tight">
              Modelo comercial flexível para diferentes volumes de base
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              A Rooki pode ser contratada de acordo com o tamanho da base, volume
              esperado de uso e profundidade de inteligência desejada.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {tiers.map(({ tag, title, description, items, cta, highlight }, i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <div
                className={`rounded-2xl border p-7 shadow-sm h-full flex flex-col gap-5 ${
                  highlight
                    ? "border-primary/30 bg-gradient-to-b from-primary/5 to-white"
                    : "border-gray-100 bg-white"
                }`}
              >
                {highlight && (
                  <span className="badge-brand self-start rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-widest">
                    Mais procurado
                  </span>
                )}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">{tag}</p>
                  <h3 className="font-bold text-ink text-xl">{title}</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed flex-1">{description}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-text">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contato"
                  className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    highlight
                      ? "btn-primary"
                      : "border border-gray-200 text-ink hover:border-primary/30 hover:bg-gray-50"
                  }`}
                >
                  {cta}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <p className="text-center text-sm text-muted bg-gray-50 rounded-xl py-3 px-5 border border-gray-100 max-w-xl mx-auto">
            O investimento depende do tamanho da base, volume de análises e escopo do piloto.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}

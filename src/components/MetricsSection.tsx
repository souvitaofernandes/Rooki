import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { TrendingUp, Users, Tag, Radio, AlertTriangle, ArrowUpRight } from "lucide-react";

const dashCards = [
  { icon: Tag, label: "Golpes analisados", value: "—", sub: "volume por período" },
  { icon: Users, label: "Usuários únicos", value: "—", sub: "base ativa" },
  { icon: TrendingUp, label: "Categoria principal", value: "—", sub: "golpes mais frequentes" },
  { icon: Radio, label: "Canal mais ativo", value: "—", sub: "origem do golpe" },
  { icon: AlertTriangle, label: "Nível de risco médio", value: "—", sub: "por tipo de golpe" },
  { icon: ArrowUpRight, label: "Temas em crescimento", value: "—", sub: "semana anterior" },
];

const metricsList = [
  "Volume de análises por período",
  "Categorias de golpes mais frequentes",
  "Canais de origem: WhatsApp, SMS, e-mail, ligação, redes sociais",
  "Marcas mais utilizadas em tentativas de golpe",
  "Horários e períodos de maior incidência",
  "Nível de risco por tipo de golpe",
  "Taxa de recorrência de usuários",
  "Dúvidas mais comuns da base",
  "Campanhas educativas recomendadas",
];

export function MetricsSection() {
  return (
    <section id="metricas" className="bg-white py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
              Inteligência
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-3 leading-tight">
              Transforme dúvidas dos usuários em inteligência sobre golpes reais
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Cada análise feita pela Rooki pode alimentar uma visão estruturada
              sobre as ameaças que estão chegando à sua base.
            </p>
          </div>
        </FadeIn>

        {/* Simulated dashboard */}
        <FadeIn delay={0.05}>
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 mb-10">
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm font-semibold text-ink">Painel de inteligência — exemplo</p>
              <span className="text-xs text-muted bg-white border border-gray-200 rounded-full px-2.5 py-1">
                Dados simulados
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {dashCards.map(({ icon: Icon, label, value, sub }) => (
                <div key={label} className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted">{label}</span>
                  </div>
                  <p className="text-2xl font-bold text-ink">{value}</p>
                  <p className="text-xs text-muted">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <FadeIn delay={0.1}>
            <h3 className="font-semibold text-ink mb-4 text-lg">Dados disponíveis por interação</h3>
            <ul className="space-y-2.5">
              {metricsList.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-gradient-to-br from-primary/5 to-cyan/5 rounded-2xl border border-primary/10 p-7">
              <p className="text-lg font-semibold text-ink mb-3 leading-snug">
                De reativo a preventivo
              </p>
              <p className="text-muted leading-relaxed">
                Com esses dados, a empresa deixa de enxergar apenas reclamações e
                passa a acompanhar{" "}
                <strong className="text-ink">sinais antecipados de risco</strong>{" "}
                na própria base — antes que o golpe vire contestação, chargeback
                ou atrito com a marca.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { MessageSquare, ScanLine, Navigation, BookOpen, Table2, LayoutDashboard } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Canal WhatsApp co-branded",
    text: "Uma experiência simples para o usuário final, com identidade da Rooki e possibilidade de comunicação associada à marca parceira.",
  },
  {
    icon: ScanLine,
    title: "Análise de mensagens suspeitas",
    text: "Avaliação de textos, links, prints e situações de risco enviadas pelo usuário.",
  },
  {
    icon: Navigation,
    title: "Orientação acionável",
    text: "Respostas objetivas indicando nível de risco, sinais de alerta e próximos passos recomendados.",
  },
  {
    icon: BookOpen,
    title: "Educação embutida",
    text: "Explicações curtas que ajudam o usuário a entender o golpe e melhorar sua tomada de decisão futura.",
  },
  {
    icon: Table2,
    title: "Dataset categorizado",
    text: "Classificação dos golpes por tipo, canal, tema, risco, recorrência e outros atributos relevantes.",
  },
  {
    icon: LayoutDashboard,
    title: "Painel e relatórios",
    text: "Métricas de uso, categorias de golpes, tendências e insights para ações educativas e preventivas.",
  },
];

export function ProductFeatures() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="max-w-xl mb-12">
            <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
              Produto
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-3 leading-tight">
              O que a Rooki entrega
            </h2>
            <p className="text-lg text-muted leading-relaxed">
              Uma solução integrada de orientação, educação e inteligência para empresas que querem proteger seus usuários de forma preventiva.
            </p>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, text }, i) => (
            <FadeIn key={title} delay={i * 0.06}>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm h-full flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="text-sm text-muted leading-relaxed">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

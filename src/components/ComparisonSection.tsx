import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

const rows = [
  {
    approach: "Campanhas educativas",
    timing: "Antes do problema",
    limitation: "Dependem de lembrança e engajamento",
    rookiRole: "Reforça a educação no momento real da dúvida",
  },
  {
    approach: "Suporte ao cliente",
    timing: "Depois da dúvida ou do incidente",
    limitation: "Pode ser lento e reativo",
    rookiRole: "Orienta antes da decisão de risco",
  },
  {
    approach: "Antifraude transacional",
    timing: "Durante ou depois da transação",
    limitation: "Nem sempre cobre golpes fora do ambiente da empresa",
    rookiRole: "Captura riscos que começam em mensagens, links e abordagens externas",
  },
  {
    approach: "Chatbots genéricos",
    timing: "Atendimento amplo",
    limitation: "Não são especializados em golpes e educação de segurança",
    rookiRole: "Foca em segurança digital, categorização e inteligência antifraude",
  },
];

export function ComparisonSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="max-w-2xl mb-12">
            <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
              Posicionamento
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-3 leading-tight">
              Onde a Rooki se encaixa na estratégia de proteção do usuário
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-5 py-4 font-semibold text-ink">Abordagem</th>
                  <th className="text-left px-5 py-4 font-semibold text-ink">Quando atua</th>
                  <th className="text-left px-5 py-4 font-semibold text-ink">Limitação</th>
                  <th className="text-left px-5 py-4 font-semibold text-primary">Papel da Rooki</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ approach, timing, limitation, rookiRole }, i) => (
                  <tr
                    key={approach}
                    className={`border-b border-gray-50 last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                  >
                    <td className="px-5 py-4 font-medium text-ink">{approach}</td>
                    <td className="px-5 py-4 text-muted">{timing}</td>
                    <td className="px-5 py-4 text-muted">{limitation}</td>
                    <td className="px-5 py-4 text-primary font-medium">{rookiRole}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {rows.map(({ approach, timing, limitation, rookiRole }) => (
              <div key={approach} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <p className="font-semibold text-ink mb-3">{approach}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-muted text-xs uppercase tracking-wide">Quando atua</span>
                    <p className="text-text">{timing}</p>
                  </div>
                  <div>
                    <span className="text-muted text-xs uppercase tracking-wide">Limitação</span>
                    <p className="text-text">{limitation}</p>
                  </div>
                  <div className="pt-1 border-t border-gray-100">
                    <span className="text-primary text-xs uppercase tracking-wide font-semibold">Papel da Rooki</span>
                    <p className="text-primary font-medium">{rookiRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

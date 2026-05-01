import Link from "next/link";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { ShieldCheck, BarChart3, MessageCircle } from "lucide-react";

const microproofs = [
  { icon: MessageCircle, label: "WhatsApp-first" },
  { icon: ShieldCheck, label: "Educação embutida" },
  { icon: BarChart3, label: "Métricas dos golpes" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-14 pb-20 lg:pt-20 lg:pb-28">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(68,60,255,0.07) 0%, rgba(4,197,255,0.04) 40%, transparent 70%)",
            transform: "translate(200px, -250px)",
          }}
        />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            <FadeIn>
              <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                Segurança digital para bases B2C
              </span>
            </FadeIn>

            <FadeIn delay={0.05}>
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-ink leading-[1.1]">
                Proteja seus usuários contra golpes{" "}
                <span className="text-brand-gradient">no momento da dúvida</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-lg text-muted leading-relaxed max-w-xl">
                A Rooki é uma camada de proteção digital via WhatsApp que ajuda
                empresas a orientar seus usuários quando eles recebem links,
                mensagens, prints ou abordagens suspeitas.
              </p>
              <p className="mt-3 text-base text-text/80 leading-relaxed max-w-xl">
                Enquanto o usuário recebe clareza em segundos, sua empresa ganha
                inteligência sobre os golpes que estão atingindo a base.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="#contato"
                  className="btn-primary inline-flex items-center justify-center px-6 py-3.5 text-[15px]"
                >
                  Quero testar com minha base
                </Link>
                <Link
                  href="#como-funciona"
                  className="inline-flex items-center justify-center rounded-full border border-gray-200 bg-white px-6 py-3.5 text-[15px] font-semibold text-ink hover:border-primary/30 hover:bg-gray-50 transition-colors"
                >
                  Ver como funciona
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-wrap gap-5 pt-1">
                {microproofs.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-1.5 text-sm text-muted">
                    <Icon className="h-4 w-4 text-primary" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Right column — mockup */}
          <FadeIn delay={0.1} className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              {/* Chat header */}
              <div className="bg-brand-gradient px-4 py-3.5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <img src="/SIMBOLO-PRINCIPAL.svg" alt="" className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">Rooki</p>
                  <p className="text-white/70 text-xs">Proteção digital</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-300 inline-block" />
                  <span className="text-white/70 text-xs">Online</span>
                </div>
              </div>

              {/* Messages */}
              <div className="bg-white px-4 py-4 space-y-3">
                <div className="flex justify-end">
                  <div className="max-w-[82%] bg-gray-100 rounded-2xl rounded-tr-sm px-3.5 py-2.5">
                    <p className="text-sm text-text leading-snug">
                      Recebi esse link dizendo que minha entrega foi taxada. É seguro clicar?
                    </p>
                    <p className="text-right text-[10px] text-muted mt-1">14:23</p>
                  </div>
                </div>

                <div className="flex justify-start gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-auto">
                    <img src="/SIMBOLO-PRINCIPAL.svg" alt="" className="w-4 h-4" />
                  </div>
                  <div className="max-w-[82%] bg-indigo-50 border border-indigo-100 rounded-2xl rounded-tl-sm px-3.5 py-2.5">
                    <p className="text-sm text-text leading-snug">
                      Parece uma tentativa de golpe.{" "}
                      <strong className="text-ink">Não clique no link</strong>{" "}
                      nem informe seus dados. O sinal de alerta é o domínio
                      estranho e a urgência no pagamento.
                    </p>
                    <p className="text-[10px] text-muted mt-1">14:23</p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 mb-2">
                    Análise da Rooki
                  </p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
                    {[
                      ["Categoria", "Falsa entrega", false],
                      ["Risco", "Alto", true],
                      ["Canal", "SMS / WhatsApp", false],
                      ["Ação recomendada", "Não clicar", false],
                    ].map(([k, v, isRisk]) => (
                      <div key={k as string}>
                        <span className="text-muted">{k}</span>
                        <p className={`font-semibold ${isRisk ? "text-red-600" : "text-text"}`}>{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Intelligence card */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted mb-2.5">
                Para sua empresa — esta semana
              </p>
              <div className="space-y-2">
                {[
                  { dot: "bg-primary", text: "Golpes analisados:", value: "1.247" },
                  { dot: "bg-red-400", text: "Tendência em alta:", value: "Falsa entrega" },
                  { dot: "bg-success", text: "Canal mais ativo:", value: "WhatsApp" },
                ].map(({ dot, text, value }) => (
                  <div key={text} className="flex items-center gap-2 text-sm">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${dot}`} />
                    <span className="text-muted">{text}</span>
                    <span className="font-semibold text-ink ml-auto">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

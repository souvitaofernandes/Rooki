import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Hash, Timer } from "lucide-react";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";
import { GradientBar } from "@/components/GradientBar";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rooki — Camada antifraude para o canal onde seu cliente já está",
  description:
    "A Rooki ajuda seus clientes a identificar golpes no WhatsApp antes da decisão errada. Camada antifraude B2B2C para empresas que protegem grandes bases.",
  openGraph: {
    title: "Rooki — Camada antifraude para o canal onde seu cliente já está",
    description:
      "A Rooki ajuda seus clientes a identificar golpes no WhatsApp antes da decisão errada.",
    url: "https://rooki.com.br",
    siteName: "Rooki",
    locale: "pt_BR",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── 1. Hero — dark ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#0A0E27] pt-16 pb-24 md:pt-20 md:pb-36">
          {/* Noise texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
            }}
          />
          {/* Radial gradient accent */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-[200px] -right-[200px] h-[600px] w-[600px]"
            style={{
              background:
                "radial-gradient(circle, rgba(68,60,255,0.18) 0%, transparent 70%)",
            }}
          />
          {/* Bottom-left secondary accent */}
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-100px] left-[-100px] h-[400px] w-[400px]"
            style={{
              background:
                "radial-gradient(circle, rgba(4,197,255,0.07) 0%, transparent 70%)",
            }}
          />

          <Container className="relative z-10">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Left */}
              <div>
                <FadeIn>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[#00FC6E]"
                      aria-hidden
                    />
                    <span className="font-body text-[13px] font-medium text-white/60">
                      Camada antifraude B2B2C — em operação
                    </span>
                  </div>
                </FadeIn>

                <FadeIn delay={0.06}>
                  <h1
                    className="mt-7 font-display font-bold leading-[1.04] tracking-tightest text-white text-balance"
                    style={{ fontSize: "clamp(42px, 6.5vw, 88px)" }}
                  >
                    Camada antifraude que o seu cliente usa antes da{" "}
                    <span className="gradient-text">decisão errada.</span>
                  </h1>
                </FadeIn>

                <FadeIn delay={0.12}>
                  <p
                    className="mt-7 leading-relaxed text-white/60 max-w-[480px]"
                    style={{ fontSize: "clamp(16px, 1.5vw, 20px)" }}
                  >
                    Seu cliente recebe uma mensagem suspeita. Em segundos, a
                    Rooki responde no WhatsApp se aquilo é golpe — antes que ele
                    clique, pague ou confie.
                  </p>
                </FadeIn>

                <FadeIn delay={0.18}>
                  <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Button href="/contato" variant="primary">
                      Agendar conversa
                    </Button>
                    <a
                      href="#o-problema"
                      className="font-body font-semibold text-white/50 hover:text-white transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>Ver como funciona</span>
                      <span
                        className="inline-block transition-transform group-hover:translate-y-0.5"
                        aria-hidden
                      >
                        ↓
                      </span>
                    </a>
                  </div>
                </FadeIn>
              </div>

              {/* Right — Chat mock */}
              <FadeIn delay={0.22}>
                <HeroChatMock />
              </FadeIn>
            </div>
          </Container>
        </section>

        <GradientBar />

        {/* ── 2. O Problema — off-white ────────────────────────────────── */}
        <Section
          variant="off-white"
          id="o-problema"
          className="scroll-mt-20"
        >
          <Container>
            <div className="max-w-3xl">
              <FadeIn>
                <h2
                  className="font-display font-semibold leading-[1.08] tracking-tight2 text-ink"
                  style={{ fontSize: "clamp(30px, 4vw, 56px)" }}
                >
                  O golpe não acontece mais no seu app. Acontece na cabeça do
                  seu cliente.
                </h2>
              </FadeIn>
              <FadeIn delay={0.08}>
                <p className="mt-8 font-body text-lg leading-relaxed text-muted">
                  O golpe migrou. Saiu do link suspeito e entrou na conversa
                  que parece legítima — no WhatsApp, no SMS, na ligação que
                  imita o atendimento oficial. Sua arquitetura antifraude
                  protege seu sistema, mas o golpe acontece num canal que você
                  não controla.
                </p>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p className="mt-5 font-body text-lg leading-relaxed text-muted">
                  E o prejuízo, mesmo que aconteça fora, chega na sua DRE:
                  chargeback, ressarcimento, volume de SAC, churn, exposição
                  regulatória, erosão de confiança.
                </p>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* ── 3. Para o cliente — dark ─────────────────────────────────── */}
        <Section variant="dark">
          <Container>
            <FadeIn>
              <h2
                className="font-display font-semibold leading-[1.08] tracking-tight2 text-white mb-14"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
              >
                Para o seu cliente: segunda opinião em segundos.
              </h2>
            </FadeIn>
            <div className="grid gap-5 md:grid-cols-3">
              <FadeIn delay={0}>
                <Card variant="dark" className="h-full">
                  <h3 className="font-display font-semibold text-xl text-white">
                    Veredito claro
                  </h3>
                  <p className="mt-3 font-body text-white/60 leading-relaxed">
                    Em segundos, ele entende se a mensagem é confiável,
                    suspeita ou golpe. Com explicação.
                  </p>
                </Card>
              </FadeIn>
              <FadeIn delay={0.06}>
                <Card variant="dark" className="h-full">
                  <h3 className="font-display font-semibold text-xl text-white">
                    No canal que ele já usa
                  </h3>
                  <p className="mt-3 font-body text-white/60 leading-relaxed">
                    Sem instalar app, sem cadastro complicado. É no WhatsApp,
                    onde ele já está.
                  </p>
                </Card>
              </FadeIn>
              <FadeIn delay={0.12}>
                <Card variant="dark" className="h-full">
                  <h3 className="font-display font-semibold text-xl text-white">
                    Aprende enquanto se protege
                  </h3>
                  <p className="mt-3 font-body text-white/60 leading-relaxed">
                    A cada análise, ele entende como o golpe funciona. Educação
                    no momento da dúvida — não em cartilha que ninguém lê.
                  </p>
                </Card>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* ── 4. Para a empresa — white ────────────────────────────────── */}
        <Section variant="white">
          <Container>
            <FadeIn>
              <h2
                className="font-display font-semibold leading-[1.08] tracking-tight2 text-ink mb-14"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
              >
                Para a sua empresa: a defesa que faltava.
              </h2>
            </FadeIn>
            <div className="grid gap-5 md:grid-cols-3">
              <FadeIn delay={0}>
                <Card className="h-full">
                  <h3 className="font-display font-semibold text-xl text-ink">
                    Motor de detecção próprio
                  </h3>
                  <p className="mt-3 font-body text-muted leading-relaxed">
                    Treinado em golpes brasileiros, atualizado conforme novas
                    variantes aparecem.
                  </p>
                </Card>
              </FadeIn>
              <FadeIn delay={0.06}>
                <Card className="h-full">
                  <h3 className="font-display font-semibold text-xl text-ink">
                    Sem reescrever sua arquitetura
                  </h3>
                  <p className="mt-3 font-body text-muted leading-relaxed">
                    Começa no WhatsApp. Expande para os canais que importam pra
                    você, no ritmo da sua operação.
                  </p>
                </Card>
              </FadeIn>
              <FadeIn delay={0.12}>
                <Card className="h-full">
                  <h3 className="font-display font-semibold text-xl text-ink">
                    Inteligência sobre o que ataca sua base
                  </h3>
                  <p className="mt-3 font-body text-muted leading-relaxed">
                    Dados estruturados sobre tipologias, frequência e padrões
                    dos golpes que tentam atingir seus clientes.
                  </p>
                </Card>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* ── 5. Como funciona — dark ──────────────────────────────────── */}
        <Section variant="dark">
          <Container>
            <FadeIn>
              <h2
                className="font-display font-semibold leading-[1.08] tracking-tight2 text-white mb-14"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
              >
                Como funciona, do ponto de vista do seu cliente.
              </h2>
            </FadeIn>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  n: "01",
                  title: "Recebe mensagem suspeita",
                  body: "Link estranho, oferta tentadora, cobrança esquisita, suposta central bancária. Qualquer coisa que ele queira checar antes de agir.",
                },
                {
                  n: "02",
                  title: "Encaminha pra Rooki no WhatsApp",
                  body: "Um toque, sem cadastro, sem instalar nada.",
                },
                {
                  n: "03",
                  title: "Recebe veredito em segundos",
                  body: "A Rooki responde com a análise: é golpe ou não, por que, e o que fazer.",
                },
              ].map((step, i) => (
                <FadeIn key={step.n} delay={i * 0.07}>
                  <Card variant="dark" className="h-full">
                    <span className="block font-display font-bold text-4xl gradient-text leading-none">
                      {step.n}
                    </span>
                    <h3 className="mt-6 font-display font-semibold text-xl text-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 font-body text-white/60 leading-relaxed">
                      {step.body}
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.24}>
              <div className="mt-10">
                {/* TODO: inserir vídeo real do produto aqui */}
                <div className="aspect-video rounded-xl border border-white/8 bg-white/[0.03] flex items-center justify-center">
                  <p className="text-white/30 font-body text-sm">
                    Uso real do produto.
                  </p>
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* ── 6. Tipologias — off-white ────────────────────────────────── */}
        <Section variant="off-white">
          <Container>
            <FadeIn>
              <h2
                className="font-display font-semibold leading-[1.08] tracking-tight2 text-ink"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
              >
                O que a Rooki identifica hoje.
              </h2>
            </FadeIn>
            <FadeIn delay={0.06}>
              <p className="mt-4 font-body text-lg text-muted max-w-2xl">
                A base de tipologias é calibrada para golpes brasileiros e
                expande continuamente.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Phishing",
                  body: "Links e páginas falsas que imitam serviços legítimos.",
                },
                {
                  title: "Falsa central bancária",
                  body: "Ligações e mensagens fingindo ser do seu banco.",
                },
                {
                  title: "Pirâmide de investimento",
                  body: "Promessas de retorno irreal disfarçadas de oportunidade.",
                },
                {
                  title: "Falso prêmio",
                  body: "Sorteios, premiações e cashback inexistentes.",
                },
                {
                  title: "Falso órgão público",
                  body: "Mensagens fingindo ser de Receita, Detran, INSS e similares.",
                },
                {
                  title: "+ outras em expansão",
                  body: "Novas variantes entram na detecção continuamente.",
                },
              ].map((t, i) => (
                <FadeIn key={t.title} delay={i * 0.05}>
                  <Card className="h-full">
                    <h3 className="font-display font-semibold text-lg text-ink">
                      {t.title}
                    </h3>
                    <p className="mt-2 font-body text-sm text-muted leading-relaxed">
                      {t.body}
                    </p>
                  </Card>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.32}>
              <div className="mt-10">
                <Button variant="link" href="/resultados">
                  Ver casos reais
                </Button>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* ── 7. Para quem é — dark ────────────────────────────────────── */}
        <Section variant="dark">
          <Container>
            <div className="max-w-3xl">
              <FadeIn>
                <h2
                  className="font-display font-semibold leading-[1.08] tracking-tight2 text-white"
                  style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
                >
                  Para quem a Rooki faz sentido.
                </h2>
              </FadeIn>
              <FadeIn delay={0.08}>
                <p className="mt-8 font-body text-lg leading-relaxed text-white/60">
                  Empresas que atendem grandes bases de clientes e absorvem,
                  direta ou indiretamente, o custo do golpe.
                </p>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p className="mt-5 font-body text-lg leading-relaxed text-white/60">
                  Instituições financeiras, operadoras de telecom, saúde
                  suplementar, varejo, seguradoras, e qualquer organização cujo
                  cliente seja alvo direto de fraude no canal pessoal.
                </p>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* ── 8. LGPD — white ──────────────────────────────────────────── */}
        <Section variant="white">
          <Container>
            <FadeIn>
              <h2
                className="font-display font-semibold leading-[1.08] tracking-tight2 text-ink mb-14"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
              >
                Como a Rooki trata o que passa por ela.
              </h2>
            </FadeIn>
            <div className="grid gap-10 md:grid-cols-3">
              {[
                {
                  Icon: ShieldCheck,
                  title: "Dados sensíveis removidos",
                  body: "CPF, CNPJ, telefone, e-mail e valores monetários são removidos antes da persistência.",
                },
                {
                  Icon: Hash,
                  title: "Telefone em hash",
                  body: "Nunca armazenamos o número do usuário em texto claro.",
                },
                {
                  Icon: Timer,
                  title: "Retenção limitada",
                  body: "Conteúdo de mensagem é apagado após 90 dias. Apenas metadados agregados permanecem.",
                },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.07}>
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-off-white">
                      <item.Icon
                        className="h-5 w-5 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="mt-5 font-display font-semibold text-xl text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-body text-muted leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.24}>
              <div className="mt-12">
                <Button variant="link" href="/privacidade">
                  Política de Privacidade
                </Button>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* ── 9. Time — off-white ──────────────────────────────────────── */}
        <Section variant="off-white">
          <Container>
            <FadeIn>
              <h2
                className="font-display font-semibold leading-[1.08] tracking-tight2 text-ink mb-14"
                style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
              >
                Quem está construindo.
              </h2>
            </FadeIn>
            {/* TODO: fotos do time em /public/team/ a adicionar antes do go-live */}
            <div className="grid gap-5 md:grid-cols-3">
              {[
                { name: "Vitão Fernandes", role: "CEO" },
                { name: "Hudson TODO", role: "CTO" },
                { name: "Larissa TODO", role: "CMO" },
              ].map((person, i) => (
                <FadeIn key={person.name} delay={i * 0.07}>
                  <Card className="flex gap-5">
                    <div className="h-12 w-12 shrink-0 rounded-full bg-off-white border border-border flex items-center justify-center">
                      <span className="font-display font-bold text-base text-muted">
                        {person.name[0]}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="font-display font-semibold text-ink">
                        {person.name}
                      </p>
                      <p className="font-body text-sm text-muted">
                        {person.role}
                      </p>
                      {/* TODO: bio curta de {person.name} — 2-3 linhas */}
                      <p className="mt-2 font-body text-sm text-muted leading-relaxed">
                        Bio a preencher.
                      </p>
                      {/* TODO: LinkedIn de {person.name} */}
                      <p className="mt-2 font-body text-sm text-muted/50">
                        LinkedIn: TODO
                      </p>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.24}>
              <div className="mt-10">
                <Button variant="link" href="/empresa">
                  Conheça a Rooki
                </Button>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* ── 10. CTA final — dark ─────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#0A0E27] py-24 md:py-36">
          {/* Accent radial */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(circle, rgba(68,60,255,0.12) 0%, transparent 70%)",
            }}
          />
          <Container className="relative z-10">
            <div className="mx-auto max-w-2xl text-center">
              <FadeIn>
                <h2
                  className="font-display font-bold leading-[1.06] tracking-tightest text-white"
                  style={{ fontSize: "clamp(36px, 5vw, 72px)" }}
                >
                  Vamos colocar a Rooki na{" "}
                  <span className="gradient-text">frente do seu cliente.</span>
                </h2>
              </FadeIn>
              <FadeIn delay={0.08}>
                <p className="mt-7 font-body text-lg text-white/55 leading-relaxed">
                  Em uma conversa de 30 minutos, mapeamos o tipo de golpe que
                  atinge sua base hoje e se a Rooki faz sentido para você.
                </p>
              </FadeIn>
              <FadeIn delay={0.14}>
                <div className="mt-10">
                  <Link
                    href="/contato"
                    className="inline-flex items-center justify-center font-body font-semibold bg-white text-primary rounded-full py-4 px-10 text-[15px] hover:bg-white/90 transition-colors"
                  >
                    Agendar conversa
                  </Link>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

function HeroChatMock() {
  return (
    <div className="mx-auto max-w-[420px] rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)] backdrop-blur-sm">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-white/8">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary">
          <span className="font-display font-bold text-[13px] text-white">
            R
          </span>
        </div>
        <div>
          <p className="text-[14px] font-semibold text-white leading-none">
            Rooki
          </p>
          <p className="mt-1 text-[12px] text-white/40 leading-none">
            Segunda opinião antifraude
          </p>
        </div>
        <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-medium text-[#00FC6E]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00FC6E]" />
          online
        </span>
      </div>

      {/* Messages */}
      <div className="mt-4 space-y-3">
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-br-md bg-white/8 px-4 py-3">
            <p className="text-[13px] leading-relaxed text-white/80">
              Recebi isso agora, é golpe?
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-br-md bg-white/8 px-4 py-3">
            <p className="mb-1.5 text-[11px] font-medium text-white/30">
              Encaminhada
            </p>
            <p className="text-[13px] leading-relaxed text-white/60">
              ATENÇÃO: Sua conta do Itaú será bloqueada em 1h. Confirme seus
              dados: bit.ly/itau-seguro
            </p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-primary/30 bg-primary/15 px-4 py-3">
            <div className="mb-2.5 inline-flex items-center gap-1.5 rounded-full bg-red-500/15 px-2.5 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              <span className="text-[11px] font-semibold text-red-400 tracking-wide uppercase">
                Golpe identificado
              </span>
            </div>
            <p className="text-[13px] leading-relaxed text-white/80">
              Banco não pede confirmação por link encurtado, principalmente
              bit.ly. Não clique. Se tiver dúvida real sobre sua conta, ligue
              no número do cartão.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

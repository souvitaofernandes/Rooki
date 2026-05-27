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
        {/* Bloco 1 — Hero */}
        <Section variant="white" className="pt-16 pb-24 md:pt-20 md:pb-32">
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <FadeIn>
                  <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.05] tracking-tight2 text-ink text-balance">
                    Camada antifraude que o seu cliente usa antes da decisão
                    errada.
                  </h1>
                </FadeIn>
                <FadeIn delay={0.08}>
                  <p className="mt-6 font-body text-xl text-muted leading-relaxed max-w-lg">
                    Seu cliente recebe uma mensagem suspeita. Em segundos, a
                    Rooki responde no WhatsApp se aquilo é golpe — antes que ele
                    clique, pague ou confie.
                  </p>
                </FadeIn>
                <FadeIn delay={0.14}>
                  <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <Button href="/contato" variant="primary">
                      Agendar conversa
                    </Button>
                    <a
                      href="#o-problema"
                      className="font-body font-semibold text-primary inline-flex items-center gap-1.5 group"
                    >
                      <span>Ver como funciona</span>
                      <span
                        className="inline-block transition-transform group-hover:translate-y-1"
                        aria-hidden
                      >
                        ↓
                      </span>
                    </a>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.2}>
                <div className="flex items-center justify-center">
                  {/* TODO: inserir mockup de WhatsApp aqui */}
                  <div className="TODO-mockup-whatsapp w-full max-w-[360px] aspect-[9/16] rounded-3xl bg-off-white border border-border flex items-center justify-center">
                    <p className="font-body text-sm text-muted text-center px-8">
                      TODO: mockup de WhatsApp
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>

        <GradientBar />

        {/* Bloco 2 — O Problema */}
        <Section variant="off-white" id="o-problema" className="scroll-mt-20 py-20 md:py-32">
          <Container>
            <div className="max-w-3xl">
              <FadeIn>
                <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight2 text-ink">
                  O golpe não acontece mais no seu app. Acontece na cabeça do
                  seu cliente.
                </h2>
              </FadeIn>
              <FadeIn delay={0.08}>
                <p className="mt-8 font-body text-lg leading-relaxed text-muted">
                  O golpe migrou. Saiu do link suspeito e entrou na conversa que
                  parece legítima — no WhatsApp, no SMS, na ligação que imita o
                  atendimento oficial. Sua arquitetura antifraude protege seu
                  sistema, mas o golpe acontece num canal que você não controla.
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

        {/* Bloco 3 — Para o cliente */}
        <Section variant="white">
          <Container>
            <FadeIn>
              <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight2 text-ink mb-12">
                Para o seu cliente: segunda opinião em segundos.
              </h2>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-3">
              <FadeIn delay={0}>
                <Card className="h-full">
                  <h3 className="font-display font-semibold text-xl text-ink">
                    Veredito claro
                  </h3>
                  <p className="mt-3 font-body text-muted leading-relaxed">
                    Em segundos, ele entende se a mensagem é confiável, suspeita
                    ou golpe. Com explicação.
                  </p>
                </Card>
              </FadeIn>
              <FadeIn delay={0.06}>
                <Card className="h-full">
                  <h3 className="font-display font-semibold text-xl text-ink">
                    No canal que ele já usa
                  </h3>
                  <p className="mt-3 font-body text-muted leading-relaxed">
                    Sem instalar app, sem cadastro complicado. É no WhatsApp,
                    onde ele já está.
                  </p>
                </Card>
              </FadeIn>
              <FadeIn delay={0.12}>
                <Card className="h-full">
                  <h3 className="font-display font-semibold text-xl text-ink">
                    Aprende enquanto se protege
                  </h3>
                  <p className="mt-3 font-body text-muted leading-relaxed">
                    A cada análise, ele entende como o golpe funciona. Educação
                    no momento da dúvida — não em cartilha que ninguém lê.
                  </p>
                </Card>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* Bloco 4 — Para a empresa */}
        <Section variant="off-white">
          <Container>
            <FadeIn>
              <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight2 text-ink mb-12">
                Para a sua empresa: a defesa que faltava.
              </h2>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-3">
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

        {/* Bloco 5 — Como funciona */}
        <Section variant="white">
          <Container>
            <FadeIn>
              <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight2 text-ink mb-12">
                Como funciona, do ponto de vista do seu cliente.
              </h2>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
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
                  <div className="rounded-xl border border-border bg-bg p-8 hover:border-ink/15 transition-colors h-full">
                    <span className="block font-display font-bold text-4xl text-primary leading-none">
                      {step.n}
                    </span>
                    <h3 className="mt-5 font-display font-semibold text-xl text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-3 font-body text-muted leading-relaxed">
                      {step.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.24}>
              <div className="mt-12">
                {/* TODO: inserir vídeo real do produto aqui */}
                <div className="TODO-video-placeholder aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                  <p className="text-muted font-body text-sm">
                    Uso real do produto.
                  </p>
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>

        {/* Bloco 6 — Tipologias */}
        <Section variant="off-white">
          <Container>
            <FadeIn>
              <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight2 text-ink">
                O que a Rooki identifica hoje.
              </h2>
            </FadeIn>
            <FadeIn delay={0.06}>
              <p className="mt-4 font-body text-lg text-muted max-w-2xl">
                A base de tipologias é calibrada para golpes brasileiros e
                expande continuamente.
              </p>
            </FadeIn>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* Bloco 7 — Para quem é */}
        <Section variant="white">
          <Container>
            <div className="max-w-3xl">
              <FadeIn>
                <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight2 text-ink">
                  Para quem a Rooki faz sentido.
                </h2>
              </FadeIn>
              <FadeIn delay={0.08}>
                <p className="mt-8 font-body text-lg leading-relaxed text-muted">
                  Empresas que atendem grandes bases de clientes e absorvem,
                  direta ou indiretamente, o custo do golpe.
                </p>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p className="mt-5 font-body text-lg leading-relaxed text-muted">
                  Instituições financeiras, operadoras de telecom, saúde
                  suplementar, varejo, seguradoras, e qualquer organização cujo
                  cliente seja alvo direto de fraude no canal pessoal.
                </p>
              </FadeIn>
            </div>
          </Container>
        </Section>

        {/* Bloco 8 — Dados / LGPD teaser */}
        <Section variant="off-white">
          <Container>
            <FadeIn>
              <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight2 text-ink mb-12">
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
                    <item.Icon
                      className="h-7 w-7 text-primary"
                      strokeWidth={1.5}
                    />
                    <h3 className="mt-4 font-display font-semibold text-xl text-ink">
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

        {/* Bloco 9 — Time */}
        <Section variant="white">
          <Container>
            <FadeIn>
              <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight2 text-ink mb-12">
                Quem está construindo.
              </h2>
            </FadeIn>
            {/* TODO: fotos do time em /public/team/ a adicionar antes do go-live */}
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { name: "Vitão Fernandes", role: "CEO" },
                { name: "Hudson TODO", role: "CTO" },
                { name: "Larissa TODO", role: "CMO" },
              ].map((person, i) => (
                <FadeIn key={person.name} delay={i * 0.07}>
                  <Card className="flex gap-5">
                    <div className="h-14 w-14 shrink-0 rounded-full bg-off-white border border-border flex items-center justify-center">
                      <span className="font-display font-bold text-lg text-muted">
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

        {/* Bloco 10 — CTA final */}
        <Section variant="gradient">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <FadeIn>
                <h2 className="font-display font-bold text-4xl md:text-5xl text-white leading-[1.1] tracking-tight2">
                  Vamos colocar a Rooki na frente do seu cliente.
                </h2>
              </FadeIn>
              <FadeIn delay={0.08}>
                <p className="mt-6 font-body text-lg text-white/80 leading-relaxed">
                  Em uma conversa de 30 minutos, mapeamos o tipo de golpe que
                  atinge sua base hoje e se a Rooki faz sentido para você.
                </p>
              </FadeIn>
              <FadeIn delay={0.14}>
                <div className="mt-8">
                  <Link
                    href="/contato"
                    className="inline-flex items-center justify-center font-body font-semibold bg-white text-primary rounded-full py-4 px-8 text-[15px] hover:bg-white/90 transition-opacity"
                  >
                    Agendar conversa
                  </Link>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

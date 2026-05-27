import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function DevComponentsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Buttons */}
        <Section variant="white" className="py-16">
          <Container>
            <h2 className="font-display text-2xl font-bold text-ink mb-2">
              Buttons
            </h2>
            <p className="font-body text-sm text-muted mb-8">
              Variantes primary, secondary, link · tamanhos default e small
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="primary">Primary default</Button>
              <Button variant="primary" size="small">
                Primary small
              </Button>
              <Button variant="secondary">Secondary default</Button>
              <Button variant="secondary" size="small">
                Secondary small
              </Button>
              <Button variant="link">Link variant</Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-4 items-center">
              <Button variant="primary" href="/contato">
                Primary com href
              </Button>
              <Button variant="secondary" href="/contato">
                Secondary com href
              </Button>
              <Button variant="link" href="/contato">
                Link com href
              </Button>
            </div>
          </Container>
        </Section>

        {/* Cards */}
        <Section variant="off-white" className="py-16">
          <Container>
            <h2 className="font-display text-2xl font-bold text-ink mb-2">
              Cards
            </h2>
            <p className="font-body text-sm text-muted mb-8">
              Card padrão — borda sutil, hover shadow
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              <Card>
                <h3 className="font-display font-semibold text-ink">
                  Título do card
                </h3>
                <p className="mt-2 font-body text-muted text-sm leading-relaxed">
                  Corpo do card com texto de exemplo para visualizar espaçamento
                  e tipografia.
                </p>
              </Card>
              <Card>
                <h3 className="font-display font-semibold text-ink">
                  Título do card
                </h3>
                <p className="mt-2 font-body text-muted text-sm leading-relaxed">
                  Corpo do card com texto de exemplo para visualizar espaçamento
                  e tipografia.
                </p>
              </Card>
              <Card>
                <h3 className="font-display font-semibold text-ink">
                  Título do card
                </h3>
                <p className="mt-2 font-body text-muted text-sm leading-relaxed">
                  Corpo do card com texto de exemplo para visualizar espaçamento
                  e tipografia.
                </p>
              </Card>
            </div>
          </Container>
        </Section>

        {/* Section variants */}
        <Section variant="white" className="py-12">
          <Container>
            <p className="font-body font-semibold text-ink">
              Section variant: <code className="text-primary">white</code>
            </p>
            <p className="font-body text-sm text-muted mt-1">bg-white</p>
          </Container>
        </Section>

        <Section variant="off-white" className="py-12">
          <Container>
            <p className="font-body font-semibold text-ink">
              Section variant:{" "}
              <code className="text-primary">off-white</code>
            </p>
            <p className="font-body text-sm text-muted mt-1">
              bg-off-white (#FAFAFB)
            </p>
          </Container>
        </Section>

        <Section variant="dark" className="py-12">
          <Container>
            <p className="font-body font-semibold text-white">
              Section variant: <code className="text-cyan">dark</code>
            </p>
            <p className="font-body text-sm text-white/60 mt-1">
              bg-[#1A1D2E]
            </p>
          </Container>
        </Section>

        <Section variant="gradient" className="py-12">
          <Container>
            <p className="font-body font-semibold text-white">
              Section variant: <code className="text-white/80">gradient</code>
            </p>
            <p className="font-body text-sm text-white/70 mt-1">
              bg-gradient-brand (45deg, #443CFF → #04C5FF → #00FC6E)
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="inline-flex items-center justify-center font-body font-semibold rounded-full bg-white text-primary py-4 px-8 text-[15px] hover:bg-white/90 transition-opacity">
                CTA sobre gradiente
              </button>
            </div>
          </Container>
        </Section>

        {/* Typography */}
        <Section variant="white" className="py-16">
          <Container>
            <h2 className="font-display text-2xl font-bold text-ink mb-8">
              Tipografia
            </h2>
            <div className="space-y-6 max-w-2xl">
              <div>
                <p className="font-body text-xs text-muted uppercase tracking-wider mb-2">
                  font-display (Sora)
                </p>
                <h1 className="font-display font-bold text-5xl text-ink">
                  H1 — Sora Bold 700
                </h1>
                <h2 className="font-display font-semibold text-3xl text-ink mt-3">
                  H2 — Sora Semibold 600
                </h2>
                <h3 className="font-display font-normal text-2xl text-ink mt-3">
                  H3 — Sora Regular 400
                </h3>
              </div>
              <div>
                <p className="font-body text-xs text-muted uppercase tracking-wider mb-2">
                  font-body (Montserrat)
                </p>
                <p className="font-body text-lg text-text">
                  Body large — Montserrat Regular 400
                </p>
                <p className="font-body font-medium text-text mt-2">
                  Body medium — Montserrat Medium 500
                </p>
                <p className="font-body font-semibold text-text mt-2">
                  Body semibold — Montserrat Semibold 600
                </p>
                <p className="font-body text-muted mt-2">
                  Muted text — Montserrat Regular
                </p>
              </div>
              <div>
                <p className="font-body text-xs text-muted uppercase tracking-wider mb-2">
                  Paleta de cores
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "primary", bg: "bg-primary", text: "text-white" },
                    { name: "ink", bg: "bg-ink", text: "text-white" },
                    { name: "text", bg: "bg-text", text: "text-white" },
                    { name: "muted", bg: "bg-muted", text: "text-white" },
                    { name: "cyan", bg: "bg-cyan", text: "text-ink" },
                    { name: "success", bg: "bg-success", text: "text-ink" },
                    {
                      name: "off-white",
                      bg: "bg-off-white",
                      text: "text-ink border border-border",
                    },
                  ].map((c) => (
                    <div
                      key={c.name}
                      className={`${c.bg} ${c.text} rounded-lg px-4 py-2 font-body text-sm font-medium`}
                    >
                      {c.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Container } from "./Container";

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

export function LegalLayout({
  title,
  updatedAt,
  sections,
}: {
  title: string;
  updatedAt: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Header />
      <main className="py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-[720px]">
            <p className="text-[13px] font-semibold uppercase tracking-wider text-primary">
              Documento legal
            </p>
            <h1 className="mt-3 text-[36px] md:text-[48px] font-extrabold tracking-tight2 leading-[1.1] text-ink">
              {title}
            </h1>
            <p className="mt-3 text-[14px] text-muted">Última atualização: {updatedAt}</p>

            <nav
              aria-label="Sumário"
              className="mt-8 rounded-2xl border border-border bg-[#F8F9FB] p-5"
            >
              <p className="text-[12px] font-semibold uppercase tracking-wider text-ink/70">
                Sumário
              </p>
              <ol className="mt-3 grid gap-1.5 text-[14px] sm:grid-cols-2">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-text/85 hover:text-primary transition-colors"
                    >
                      {String(i + 1).padStart(2, "0")}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-12 space-y-12">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-24">
                  <h2
                    id={`${s.id}-h`}
                    className="text-[22px] md:text-[26px] font-bold tracking-tight2 text-ink"
                  >
                    {i + 1}. {s.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-[16px] leading-[1.7] text-text/90">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-16 flex items-center justify-between border-t border-border pt-8 text-[14px]">
              <Link href="/" className="font-medium text-primary hover:underline">
                ← Voltar para a página inicial
              </Link>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

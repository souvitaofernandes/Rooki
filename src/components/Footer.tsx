import Link from "next/link";
import { Container } from "./Container";
import { CONTACT_EMAIL } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          <div>
            {/* Substituir pelo SVG real da Rooki */}
            <span className="font-extrabold text-[20px] tracking-tight2 text-ink">Rooki</span>
            <p className="mt-3 text-[14px] leading-relaxed text-muted max-w-[260px]">
              Antes de cair, pergunta pra Rooki.
            </p>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-ink/70">
              Empresa
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li>
                <Link href="#como-funciona" className="text-text/85 hover:text-ink transition-colors">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link href="#para-empresas" className="text-text/85 hover:text-ink transition-colors">
                  Para empresas
                </Link>
              </li>
              <li>
                <Link href="#quem-somos" className="text-text/85 hover:text-ink transition-colors">
                  Quem somos
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-text/85 hover:text-ink transition-colors">
                  Política de privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-text/85 hover:text-ink transition-colors">
                  Termos de uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-wider text-ink/70">
              Contato
            </h3>
            <ul className="mt-4 space-y-2.5 text-[14px]">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-text/85 hover:text-ink transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                {/* Substituir pelo link real */}
                <a
                  href="https://www.linkedin.com/company/rooki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/85 hover:text-ink transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                {/* Substituir pelo link real */}
                <a
                  href="https://www.instagram.com/rooki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/85 hover:text-ink transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-[12px] text-muted">
          © 2026 Rooki Tecnologia LTDA · CNPJ 49.444.116/0001-09 · Mogi das Cruzes/SP · Feita
          no Brasil, contra os golpes daqui.
        </p>
      </Container>
    </footer>
  );
}

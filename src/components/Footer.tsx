import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="bg-[#1A1D2E]">
      <Container className="py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          {/* Coluna 1 — Marca */}
          <div className="sm:col-span-2 md:col-span-1">
            {/* TODO: adicionar versão branca do logo em /public/LOGO-HORIZONTAL-BRANCO.svg */}
            <Image
              src="/LOGO-HORIZONTAL-PRINCIPAL.svg"
              alt="Rooki"
              width={120}
              height={39}
              className="brightness-0 invert"
            />
            <p className="mt-4 text-[14px] leading-relaxed text-white/60 max-w-[220px]">
              Camada antifraude para o canal onde seu cliente já está.
            </p>
          </div>

          {/* Coluna 2 — Site */}
          <div>
            <h3 className="text-[12px] font-body font-semibold uppercase tracking-wider text-white/40">
              Site
            </h3>
            <ul className="mt-4 space-y-3 text-[14px]">
              <li>
                <Link
                  href="/produto"
                  className="font-body text-white/70 hover:text-white transition-colors"
                >
                  Produto
                </Link>
              </li>
              <li>
                <Link
                  href="/solucao"
                  className="font-body text-white/70 hover:text-white transition-colors"
                >
                  Solução
                </Link>
              </li>
              <li>
                <Link
                  href="/resultados"
                  className="font-body text-white/70 hover:text-white transition-colors"
                >
                  Resultados
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 — Empresa */}
          <div>
            <h3 className="text-[12px] font-body font-semibold uppercase tracking-wider text-white/40">
              Empresa
            </h3>
            <ul className="mt-4 space-y-3 text-[14px]">
              <li>
                <Link
                  href="/empresa"
                  className="font-body text-white/70 hover:text-white transition-colors"
                >
                  Empresa
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="font-body text-white/70 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
              <li>
                {/* TODO: confirmar URL LinkedIn da empresa */}
                <a
                  href="https://www.linkedin.com/company/rooki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white/70 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4 — Dados */}
          <div>
            <h3 className="text-[12px] font-body font-semibold uppercase tracking-wider text-white/40">
              Contato
            </h3>
            <ul className="mt-4 space-y-3 text-[14px]">
              <li>
                {/* TODO: confirmar e-mail comercial */}
                <span className="font-body text-white/40">
                  E-mail comercial: TODO
                </span>
              </li>
              <li>
                <a
                  href="mailto:victor@rooki.com.br"
                  className="font-body text-white/70 hover:text-white transition-colors"
                >
                  LGPD: victor@rooki.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-[13px] text-white/40">
            {/* TODO: confirmar CNPJ */}
            © 2026 Rooki. Todos os direitos reservados. · CNPJ: TODO
          </p>
          <div className="flex gap-4 text-[13px]">
            <Link
              href="/privacidade"
              className="font-body text-white/40 hover:text-white/70 transition-colors"
            >
              Política de Privacidade
            </Link>
            <span className="text-white/20" aria-hidden>
              ·
            </span>
            <Link
              href="/termos"
              className="font-body text-white/40 hover:text-white/70 transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

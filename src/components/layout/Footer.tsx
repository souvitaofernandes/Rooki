import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  const { footerNav } = siteConfig;

  const sections = [
    { title: "Produto", links: footerNav.produto },
    { title: "Conteúdo", links: footerNav.conteudo },
    { title: "Institucional", links: footerNav.institucional },
    { title: "Legal", links: footerNav.legal },
  ];

  return (
    <footer className="border-t border-white/8 bg-brand-surface">
      <div className="container-full px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo width={90} height={36} />
            <p className="mt-4 text-sm leading-relaxed text-brand-soft">
              Motor de detecção de golpes digitais. Onde o usuário já está.
            </p>
          </div>

          {/* Nav columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-white">
                {section.title}
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-soft transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 md:flex-row">
          <p className="text-xs text-brand-soft">
            &copy; {new Date().getFullYear()} Rooki. Todos os direitos reservados.
          </p>
          <p className="text-xs text-brand-soft">
            A Rooki oferece análise informativa. Não substitui polícia, advogado ou banco.
          </p>
        </div>
      </div>
    </footer>
  );
}

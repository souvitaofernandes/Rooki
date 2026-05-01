import Link from "next/link";
import { Container } from "./Container";

const links = {
  Produto: [
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#para-empresas", label: "Para empresas" },
    { href: "#metricas", label: "Métricas" },
  ],
  Piloto: [
    { href: "#piloto", label: "Piloto 90 dias" },
    { href: "#precos", label: "Modelo comercial" },
    { href: "#contato", label: "Solicitar piloto" },
  ],
  Contato: [
    { href: "#contato", label: "Falar com a Rooki" },
    { href: "#faq", label: "FAQ" },
  ],
  Legal: [
    { href: "/privacidade", label: "Privacidade" },
    { href: "/termos", label: "Termos de uso" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-ink text-white/60 pt-14 pb-8">
      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src="/LOGO-HORIZONTAL-PRINCIPAL.svg"
              alt="Rooki"
              className="h-7 w-auto mb-3 brightness-0 invert"
            />
            <p className="text-sm text-white/50 leading-relaxed">
              Segurança digital para o momento da dúvida.
            </p>
          </div>

          {/* Nav groups */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p className="text-white/80 font-semibold text-sm mb-3">{group}</p>
              <ul className="space-y-2">
                {items.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-white/50 hover:text-white/80 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Rooki. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/30 text-center max-w-xl">
            A Rooki oferece orientação preventiva e educativa. A solução não substitui canais
            oficiais, suporte da empresa parceira ou análise especializada em casos críticos.
          </p>
        </div>
      </Container>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    q: "A Rooki substitui antifraude bancário ou ferramentas de segurança existentes?",
    a: "Não. A Rooki atua em uma camada anterior e complementar: o momento da dúvida do usuário. Ela ajuda a orientar decisões antes que o golpe vire transação, chamado ou prejuízo.",
  },
  {
    q: "O usuário precisa instalar aplicativo?",
    a: "Na primeira fase, não. A experiência é WhatsApp-first para reduzir fricção e aumentar a chance de uso. Futuras versões podem incluir app, painel e integrações.",
  },
  {
    q: "A Rooki atende apenas golpes financeiros?",
    a: "Não. O foco inicial inclui golpes digitais que envolvem links, mensagens, engenharia social, falsas cobranças, falsa entrega, phishing, clonagem e abordagens suspeitas.",
  },
  {
    q: "A empresa recebe dados individuais dos usuários?",
    a: "O modelo deve priorizar dados agregados e inteligência sobre padrões de golpe, respeitando privacidade, finalidade e minimização de dados.",
  },
  {
    q: "Como funciona o piloto?",
    a: "O piloto define uma base inicial, ativa o canal WhatsApp, mede uso real, categoriza os golpes recebidos e entrega relatórios com aprendizados e recomendações.",
  },
  {
    q: "A Rooki garante que o usuário nunca cairá em golpes?",
    a: "Não. Nenhuma solução séria deve prometer eliminação total de risco. A Rooki reduz incerteza, melhora a tomada de decisão e ajuda empresas a orientar seus usuários de forma preventiva.",
  },
  {
    q: "Como a Rooki ganha dinheiro?",
    a: "O modelo comercial pode combinar fee de piloto, cobrança por faixa de usuários, franquia de análises e contratos customizados para grandes bases.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <Container>
        <FadeIn>
          <div className="max-w-xl mb-12">
            <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
              Perguntas frequentes
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink leading-tight">
              Perguntas frequentes
            </h2>
          </div>
        </FadeIn>

        <div className="max-w-3xl space-y-2">
          {items.map(({ q, a }, i) => (
            <FadeIn key={q} delay={i * 0.04}>
              <div className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm">
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-medium text-ink text-[15px] leading-snug">{q}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-muted flex-shrink-0 transition-transform duration-200",
                      open === i && "rotate-180"
                    )}
                  />
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-sm text-muted leading-relaxed border-t border-gray-50 pt-3">
                    {a}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

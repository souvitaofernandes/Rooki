"use client";

import { useState } from "react";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

const B2B_MAILTO =
  "mailto:contato@rooki.com.br?subject=Interesse%20em%20parceria%20Rooki&body=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20parceria%20com%20a%20Rooki.";

export function ParaEmpresas() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="para-empresas" className="bg-ink py-20 md:py-28 text-white">
      <Container>
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="text-[28px] sm:text-[32px] md:text-[44px] font-extrabold tracking-tight2 leading-[1.1]">
              Quer levar a Rooki pra dentro da sua empresa?
            </h2>
          </FadeIn>

          <FadeIn delay={0.06}>
            <p className="mt-6 text-[16px] md:text-[18px] leading-[1.7] text-white">
              Banco, telecom, seguradora, plano de saúde, varejo. Empresas que vivem da confiança
              do cliente. Seus clientes recebem golpe todo dia. Quando caem, ligam pra você. Vocês
              ressarcem. Respondem no Reclame Aqui. Gastam horas de operação.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-5 text-[16px] md:text-[18px] leading-[1.7] text-white">
              Tudo isso poderia ter sido evitado com uma checagem de 5 segundos antes da decisão
              errada.
            </p>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="mt-5 text-[16px] md:text-[18px] leading-[1.7] text-white">
              A Rooki entra ali. Você distribui pra sua base, a gente cuida da proteção. Modelo
              parecido com o que operadoras já fazem com{" "}
              <span className="font-semibold text-cyan">Spotify, Netflix, Deezer</span> — mas pra
              confiança digital.
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p className="mt-8 text-[16px] md:text-[18px] leading-[1.7] font-semibold text-white rounded-xl bg-white/[0.06] border border-white/10 px-5 py-4">
              Empregadores também: se você quer proteger seus colaboradores contra golpes que
              afetam folha, benefício e produtividade, a gente conversa.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            {!showForm && !submitted && (
              <div className="mt-10">
                <a
                  href={B2B_MAILTO}
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-[16px] font-bold text-white transition-all hover:brightness-110 hover:-translate-y-0.5"
                >
                  Falar com o time comercial
                </a>
                <button
                  type="button"
                  onClick={() => setShowForm(true)}
                  className="mt-3 block text-[14px] font-medium text-white/60 hover:text-white transition-colors"
                >
                  ou preencher formulário detalhado
                </button>
              </div>
            )}

            {showForm && !submitted && (
              <ContactForm
                onSubmit={() => setSubmitted(true)}
                onCancel={() => setShowForm(false)}
              />
            )}

            {submitted && (
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.06] p-6">
                <p className="text-[16px] font-semibold text-white">Mensagem enviada.</p>
                <p className="mt-1 text-[14px] text-white/75">
                  A gente responde em até 48h úteis.
                </p>
              </div>
            )}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function ContactForm({
  onSubmit,
  onCancel,
}: {
  onSubmit: () => void;
  onCancel: () => void;
}) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const subject = `Contato comercial — ${fd.get("empresa")}`;
    const body = [
      `Nome: ${fd.get("nome")}`,
      `Empresa: ${fd.get("empresa")}`,
      `Cargo: ${fd.get("cargo")}`,
      `E-mail: ${fd.get("email")}`,
      "",
      fd.get("mensagem"),
    ].join("\n");
    window.open(
      `mailto:contato@rooki.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
      "_self"
    );
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-lg">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="nome"
          required
          placeholder="Nome"
          className="h-11 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 text-[14px] text-white placeholder:text-white/40 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20"
        />
        <input
          name="empresa"
          required
          placeholder="Empresa"
          className="h-11 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 text-[14px] text-white placeholder:text-white/40 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          name="cargo"
          placeholder="Cargo"
          className="h-11 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 text-[14px] text-white placeholder:text-white/40 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="E-mail corporativo"
          className="h-11 w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 text-[14px] text-white placeholder:text-white/40 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20"
        />
      </div>
      <textarea
        name="mensagem"
        rows={3}
        placeholder="Mensagem (opcional)"
        className="w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 text-[14px] text-white placeholder:text-white/40 focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/20 resize-y"
      />
      <div className="flex gap-3">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-[14px] font-bold text-white transition-all hover:brightness-110"
        >
          Enviar
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-3 text-[14px] font-medium text-white/70 transition-colors hover:bg-white/[0.06]"
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

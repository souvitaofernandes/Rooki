"use client";

import { useState } from "react";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { CheckCircle2 } from "lucide-react";

type FormState = {
  nome: string;
  empresa: string;
  cargo: string;
  email: string;
  segmento: string;
  base: string;
  mensagem: string;
};

const initialState: FormState = {
  nome: "",
  empresa: "",
  cargo: "",
  email: "",
  segmento: "",
  base: "",
  mensagem: "",
};

const segmentos = [
  "Fintech / Banco digital",
  "Operadora de telecom",
  "Benefícios / Bem-estar financeiro",
  "Seguradora / Assistência",
  "Plataforma B2C",
  "Outro",
];

const faixasBase = [
  "Até 50 mil usuários",
  "50 mil a 500 mil usuários",
  "500 mil a 2 milhões de usuários",
  "Mais de 2 milhões de usuários",
];

export function ContactFormSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Wire up to /api/contato or a form service of your choice
      await new Promise((r) => setTimeout(r, 900)); // simulated delay
      setSubmitted(true);
    } catch {
      setError("Algo deu errado. Tente novamente ou envie um e-mail direto.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — copy */}
          <FadeIn>
            <span className="badge-brand inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4">
              Iniciar piloto
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-ink mb-4 leading-tight">
              Fale com a Rooki
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Preencha o formulário e vamos analisar seu contexto para entender se faz
              sentido iniciar um piloto com a Rooki na sua base.
            </p>

            <div className="space-y-5">
              {[
                { title: "Piloto em 90 dias", text: "Validação real com usuários e dados reais antes de escalar." },
                { title: "Sem compromisso de escala", text: "Você decide o que fazer com os dados e aprendizados do piloto." },
                { title: "Inteligência desde o dia 1", text: "Cada interação gera dados sobre golpes que chegam à sua base." },
              ].map(({ title, text }) => (
                <div key={title} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink">{title}</p>
                    <p className="text-sm text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn delay={0.1}>
            {submitted ? (
              <div className="bg-gray-50 rounded-2xl border border-gray-100 p-10 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-success/15 flex items-center justify-center">
                  <CheckCircle2 className="h-7 w-7 text-green-700" />
                </div>
                <p className="text-xl font-bold text-ink">Recebemos sua mensagem!</p>
                <p className="text-muted leading-relaxed max-w-sm">
                  Obrigado. Vamos analisar seu contexto e entrar em contato para entender
                  se faz sentido iniciar um piloto com a Rooki.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-7 shadow-sm space-y-4"
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-text mb-1.5">
                      Nome
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={form.nome}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-text mb-1.5">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required
                      value={form.empresa}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cargo" className="block text-sm font-medium text-text mb-1.5">
                      Cargo
                    </label>
                    <input
                      id="cargo"
                      name="cargo"
                      type="text"
                      required
                      value={form.cargo}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
                      placeholder="Seu cargo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
                      E-mail corporativo
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
                      placeholder="voce@empresa.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="segmento" className="block text-sm font-medium text-text mb-1.5">
                      Segmento
                    </label>
                    <select
                      id="segmento"
                      name="segmento"
                      required
                      value={form.segmento}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
                    >
                      <option value="">Selecione</option>
                      {segmentos.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="base" className="block text-sm font-medium text-text mb-1.5">
                      Tamanho da base de usuários
                    </label>
                    <select
                      id="base"
                      name="base"
                      required
                      value={form.base}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition"
                    >
                      <option value="">Selecione</option>
                      {faixasBase.map((f) => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-text mb-1.5">
                    Mensagem <span className="text-muted font-normal">(opcional)</span>
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={3}
                    value={form.mensagem}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition resize-none"
                    placeholder="Conte um pouco sobre o contexto da sua empresa..."
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-600 bg-red-50 rounded-xl px-4 py-3">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-3.5 text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando..." : "Solicitar conversa"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

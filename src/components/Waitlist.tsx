"use client";

import { useState } from "react";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="waitlist" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-primary to-cyan"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_25%_70%,rgba(255,255,255,0.12),transparent)]"
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <h2 className="text-[32px] sm:text-[36px] md:text-[48px] font-extrabold tracking-tight2 leading-[1.1] text-white">
              O app tá quase aí.
            </h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="mt-5 text-[16px] md:text-[18px] leading-relaxed text-white/85">
              iOS primeiro, Android depois. Quem entra na lista agora recebe acesso antecipado e
              desconto de fundador no plano pago.
            </p>
          </FadeIn>

          <FadeIn delay={0.12}>
            {status === "success" ? (
              <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-6">
                <p className="text-[16px] font-semibold text-white">Pronto. Você tá na lista.</p>
                <p className="mt-1 text-[14px] text-white/75">
                  A gente te avisa assim que o app sair.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 mx-auto flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="h-12 flex-1 rounded-full bg-white/15 border border-white/20 px-5 text-[15px] text-white placeholder:text-white/50 focus:bg-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 backdrop-blur-sm"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-12 rounded-full bg-white px-6 text-[14px] font-bold text-primary transition-colors hover:bg-white/90 disabled:opacity-70"
                >
                  {status === "loading" ? "Enviando..." : "Quero acesso antecipado"}
                </button>
              </form>
            )}
          </FadeIn>

          {status !== "success" && (
            <FadeIn delay={0.16}>
              <p className="mt-4 text-[13px] text-white/60">
                A gente só usa seu e-mail pra avisar do lançamento. Sem spam, sem repassar pra
                ninguém. Você pode sair quando quiser.
              </p>
            </FadeIn>
          )}

          {status === "error" && (
            <p className="mt-3 text-[14px] text-white/90">
              Algo deu errado. Tenta de novo?
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}

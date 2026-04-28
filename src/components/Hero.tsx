import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-20 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(68,60,255,0.07),transparent)]"
      />
      <Container className="relative pt-12 pb-16 md:pt-20 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <FadeIn>
              <h1 className="text-[36px] leading-[1.05] tracking-tight2 font-extrabold text-ink sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px]">
                Aquela mensagem que parece golpe, geralmente é. Mostra pra Rooki antes de clicar.
              </h1>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted md:text-[19px]">
                A Rooki é uma segunda opinião sobre mensagens suspeitas. Funciona no WhatsApp, em
                segundos, e fala português brasileiro porque os golpes daqui são daqui.
              </p>
            </FadeIn>
            <FadeIn delay={0.14}>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Falar com a gente
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-bg px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-border/40"
                >
                  Quero usar a Rooki
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={0.2}>
              <ChatMock />
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ChatMock() {
  return (
    <div className="mx-auto max-w-[420px] rounded-3xl border border-border bg-white p-5 shadow-[0_30px_80px_-30px_rgba(10,14,39,0.18)]">
      <div className="flex items-center gap-3 pb-4 border-b border-border/70">
        <div className="h-9 w-9 rounded-full bg-gradient-brand" aria-hidden />
        <div>
          <p className="text-[14px] font-semibold text-ink leading-none">Rooki</p>
          <p className="mt-1 text-[12px] text-muted leading-none">online</p>
        </div>
        <span className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden />
          ativa
        </span>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex justify-end">
          <div className="max-w-[88%] rounded-2xl rounded-br-md bg-[#F1F2F6] px-4 py-2.5">
            <p className="text-[14px] leading-relaxed text-ink">
              URGENTE: Sua conta foi bloqueada. Confirme seus dados em: bit.ly/banco-confirmar
            </p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-primary px-4 py-3 text-white">
            <p className="text-[14px] leading-relaxed">
              Isso é golpe. O domínio bit.ly é encurtador, e bancos nunca pedem confirmação por
              link. Não clique. Se quiser confirmar algo da sua conta, ligue direto pro banco
              usando o número do cartão.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

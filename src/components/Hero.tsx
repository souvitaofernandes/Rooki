import Link from "next/link";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { WHATSAPP_URL } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-20 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(68,60,255,0.07),transparent)]"
      />
      <Container className="relative pt-10 pb-16 md:pt-16 md:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <FadeIn>
              <div className="inline-flex flex-col">
                <div className="inline-flex items-center gap-2 rounded-full bg-success/10 px-3.5 py-1.5 text-[13px] font-medium text-[#0a6b2e]">
                  <span className="h-2 w-2 rounded-full bg-success" aria-hidden />
                  Rooki ativa no WhatsApp · App em breve
                </div>
                <div className="mt-1 mx-2 h-[2px] rounded-full bg-[linear-gradient(90deg,#443CFF_0%,#04C5FF_50%,#00FC6E_100%)] opacity-50" aria-hidden />
              </div>
            </FadeIn>
            <FadeIn delay={0.06}>
              <h1 className="mt-6 max-w-[720px] text-[36px] leading-[1.05] tracking-tight2 font-extrabold text-ink text-balance sm:text-[44px] md:text-[56px] lg:text-[64px] xl:text-[72px] xl:max-w-none">
                A mensagem que parecia golpe era golpe. E você quase pagou.
              </h1>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted md:text-[19px]">
                A Rooki é uma segunda opinião na hora da dúvida. Você recebe algo estranho, manda
                pra Rooki, e em segundos sabe se pode confiar. Funciona hoje no WhatsApp. App tá
                vindo.
              </p>
            </FadeIn>
            <FadeIn delay={0.18}>
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                <Link
                  href="#waitlist"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Entrar na lista do app
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-bg px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-border/40"
                >
                  Usar agora no WhatsApp
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5">
            <FadeIn delay={0.22}>
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
          <div className="max-w-[88%] rounded-2xl rounded-br-md bg-[#F3F4F6] px-4 py-2.5">
            <p className="text-[14px] leading-relaxed text-ink">Recebi isso agora, é golpe?</p>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="max-w-[88%] rounded-2xl rounded-br-md bg-[#F3F4F6] px-4 py-2.5">
            <p className="mb-1 text-[11px] font-medium text-muted">Encaminhada</p>
            <p className="text-[14px] leading-relaxed text-ink">
              ATENÇÃO: Sua conta do Itaú será bloqueada em 1h. Confirme seus dados:
              bit.ly/itau-seguro
            </p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="max-w-[92%] rounded-2xl rounded-bl-md bg-primary px-4 py-3 text-white">
            <p className="text-[14px] leading-relaxed">
              É golpe. Banco não pede confirmação por link encurtado, principalmente bit.ly. Não
              clique. Se tiver dúvida real sobre sua conta, liga no número que tá atrás do seu
              cartão.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

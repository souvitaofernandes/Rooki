import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/utils";

export function ParaQuem() {
  return (
    <section id="para-empresas" className="bg-[#F8F9FB] py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <FadeIn>
            <h2 className="text-[28px] sm:text-[32px] md:text-[44px] font-extrabold tracking-tight2 leading-[1.1] text-ink">
              Pra quem a Rooki foi feita.
            </h2>
          </FadeIn>
        </div>

        <div className="mt-12 md:mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <FadeIn>
            <article className="h-full rounded-2xl border border-border bg-bg p-7 md:p-10">
              <h3 className="text-[22px] md:text-[26px] font-bold tracking-tight2 text-ink">
                Para empresas que vivem da confiança do cliente.
              </h3>
              <div className="mt-5 space-y-4 text-[15px] md:text-[16px] leading-relaxed text-muted">
                <p>
                  Você é banco, telecom, seguradora, plano de saúde? Seus clientes são alvo de
                  golpe todo dia.
                </p>
                <p>
                  Quando caem, ligam pra você. Vocês ressarcem. Respondem no Reclame Aqui. Gastam
                  horas de operação. Tudo isso poderia ter sido evitado com uma checagem de 5
                  segundos antes da decisão errada.
                </p>
                <p>
                  A Rooki entra ali — antes do prejuízo, no canal onde seu cliente já está.
                </p>
              </div>
              <div className="mt-7">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Parceria%20Rooki`}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Quero conversar sobre parceria
                </a>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.08}>
            <article className="h-full rounded-2xl border border-border bg-bg p-7 md:p-10">
              <h3 className="text-[22px] md:text-[26px] font-bold tracking-tight2 text-ink">
                Para você, sua mãe, seu colega de trabalho.
              </h3>
              <div className="mt-5 space-y-4 text-[15px] md:text-[16px] leading-relaxed text-muted">
                <p>Recebeu mensagem estranha e ficou na dúvida? Manda pra Rooki.</p>
                <p>
                  Funciona hoje, no WhatsApp. A gente não pede seus dados bancários, nem precisa.
                  Pede a mensagem suspeita. Devolve clareza.
                </p>
              </div>
              <div className="mt-7">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-bg px-5 py-3 text-[14px] font-semibold text-ink transition-colors hover:bg-border/40"
                >
                  Usar a Rooki no WhatsApp
                </a>
              </div>
            </article>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/utils";

export function CtaFinal() {
  return (
    <section id="contato" className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <FadeIn>
            <h2 className="text-[36px] md:text-[56px] font-extrabold tracking-tight2 leading-[1] text-ink">
              Bora?
            </h2>
          </FadeIn>
        </div>

        <div className="mt-12 md:mt-14 grid gap-6 md:grid-cols-2 md:gap-7">
          <FadeIn>
            <article className="h-full rounded-2xl border border-border bg-bg p-7 md:p-9">
              <h3 className="text-[20px] md:text-[24px] font-bold tracking-tight2 text-ink">
                Quer levar a Rooki pra dentro da sua empresa?
              </h3>
              <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-muted">
                A gente conversa sobre piloto, integração e o que faz sentido pro seu negócio.
              </p>
              <div className="mt-6">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Comercial%20Rooki`}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-primary/90"
                >
                  Falar com o time comercial
                </a>
              </div>
            </article>
          </FadeIn>

          <FadeIn delay={0.06}>
            <article className="h-full rounded-2xl border border-border bg-bg p-7 md:p-9">
              <h3 className="text-[20px] md:text-[24px] font-bold tracking-tight2 text-ink">
                Quer só usar a Rooki agora?
              </h3>
              <p className="mt-3 text-[15px] md:text-[16px] leading-relaxed text-muted">
                Abre o WhatsApp e manda a primeira mensagem suspeita.
              </p>
              <div className="mt-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-bg px-5 py-3 text-[14px] font-semibold text-ink transition-colors hover:bg-border/40"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </article>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

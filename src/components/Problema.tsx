import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

const stats = [
  {
    value: "R$ 10,1 bi",
    label: "perdas com fraudes financeiras no Brasil em 2024",
  },
  {
    value: "40+ mi",
    label: "brasileiros que já sofreram tentativa de golpe digital",
  },
  {
    value: "3,5x",
    label: "aumento de golpes no WhatsApp nos últimos 2 anos",
  },
];
/* Atualizar fontes e números antes do deploy. Larissa valida. */

export function Problema() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="text-[28px] sm:text-[32px] md:text-[44px] font-extrabold tracking-tight2 leading-[1.1] text-ink">
              Você já passou perto.
            </h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-muted">
              Todo brasileiro já recebeu algo estranho no celular. Quase todo brasileiro já se
              enganou em alguma.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-muted">
              Aquele PIX que era pra ser do banco. O boleto que parecia da escola. O
              &ldquo;filho&rdquo; do número novo pedindo dinheiro. A central ligando pra &ldquo;te
              proteger&rdquo; de uma fraude que nunca existiu.
            </p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="mt-8 text-[18px] md:text-[22px] font-semibold leading-snug text-ink tracking-tight2">
              A informação pra identificar golpe existe. Ela só não chega na hora que você precisa.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-14 grid gap-12 border-t border-border pt-10 sm:grid-cols-3 sm:gap-16">
            {stats.map((s) => (
              <div key={s.value}>
                <p className="text-[48px] md:text-[64px] font-extrabold tracking-[-0.03em] text-primary leading-none">
                  {s.value}
                </p>
                <p className="mt-2 text-[14px] md:text-[15px] leading-relaxed text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

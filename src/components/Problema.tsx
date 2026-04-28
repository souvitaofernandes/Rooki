import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export function Problema() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="text-[28px] sm:text-[32px] md:text-[44px] font-extrabold tracking-tight2 leading-[1.1] text-ink">
              Todo brasileiro conhece esse problema.
            </h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-muted">
              Todo brasileiro já recebeu uma mensagem suspeita. Quase todo brasileiro já se enganou
              em alguma.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-muted">
              PIX que não era pra ser pago. Boleto vencendo de uma conta que não existe.
              &ldquo;Filho&rdquo; pedindo dinheiro de um número novo. Central do banco ligando pra
              avisar de uma fraude que ela mesma está fazendo.
            </p>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="mt-8 text-[18px] md:text-[22px] font-semibold leading-snug text-ink tracking-tight2">
              O problema não é falta de informação. É que a informação certa nunca chega na hora da
              dúvida.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

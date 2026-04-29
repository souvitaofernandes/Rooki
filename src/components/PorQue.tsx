import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export function PorQue() {
  return (
    <section className="bg-[#F8F9FB] py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="text-[28px] sm:text-[32px] md:text-[44px] font-extrabold tracking-tight2 leading-[1.1] text-ink">
              Por que a Rooki, e não outra coisa.
            </h2>
          </FadeIn>
        </div>

        <div className="mt-14 md:mt-16 grid gap-12 md:gap-16">
          <FadeIn>
            <div className="grid gap-6 md:grid-cols-12 md:gap-10 items-start">
              <h3 className="md:col-span-5 text-[22px] md:text-[28px] font-bold tracking-tight2 text-ink">
                A Rooki é brasileira de fato.
              </h3>
              <p className="md:col-span-7 text-[16px] md:text-[18px] leading-relaxed text-muted">
                Os golpes daqui têm sotaque, têm gancho, têm gente por trás. PIX falso, boleto
                adulterado, falsa central, &ldquo;filho&rdquo; pedindo dinheiro — isso é cardápio
                brasileiro. IA treinada com fraude americana não pega isso.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="grid gap-6 md:grid-cols-12 md:gap-10 items-start">
              <h3 className="md:col-span-7 md:order-2 text-[22px] md:text-[28px] font-bold tracking-tight2 text-ink">
                A Rooki não promete o que não pode.
              </h3>
              <p className="md:col-span-5 md:order-1 text-[16px] md:text-[18px] leading-relaxed text-muted">
                A gente acerta na maioria dos casos. Erra em alguns. Quando erra, continua do seu
                lado: te orienta no que fazer pós-clique, em quem acionar, em como tentar reverter.
                Antifraude honesta vale mais que antifraude que se vende como infalível.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid gap-6 md:grid-cols-12 md:gap-10 items-start">
              <h3 className="md:col-span-5 text-[22px] md:text-[28px] font-bold tracking-tight2 text-ink">
                A Rooki aprende todo dia.
              </h3>
              <p className="md:col-span-7 text-[16px] md:text-[18px] leading-relaxed text-muted">
                Os golpes mudam toda semana. A gente muda junto. Cada caso analisado vira
                aprendizado. A base de conhecimento sobre fraude brasileira é nossa, e cresce
                diariamente.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

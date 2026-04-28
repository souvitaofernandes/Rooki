import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export function PorQue() {
  return (
    <section className="py-20 md:py-28">
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
                A Rooki é brasileira.
              </h3>
              <p className="md:col-span-7 text-[16px] md:text-[18px] leading-relaxed text-muted">
                Os golpes daqui têm sotaque, têm referência cultural, têm modus operandi próprio.
                Uma IA treinada com fraudes americanas não pega isso. A gente treina com o que
                acontece aqui, todo dia.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="grid gap-6 md:grid-cols-12 md:gap-10 items-start">
              <h3 className="md:col-span-7 md:order-2 text-[22px] md:text-[28px] font-bold tracking-tight2 text-ink">
                A Rooki não promete o que não pode.
              </h3>
              <p className="md:col-span-5 md:order-1 text-[16px] md:text-[18px] leading-relaxed text-muted">
                A gente acerta na maioria. Erra às vezes. Quando erramos, continuamos do lado do
                usuário: orientamos no que fazer pós-clique, no que recuperar, em quem acionar.
                Antifraude honesta vale mais que antifraude infalível no papel.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid gap-6 md:grid-cols-12 md:gap-10 items-start">
              <h3 className="md:col-span-5 text-[22px] md:text-[28px] font-bold tracking-tight2 text-ink">
                A Rooki aprende todo dia.
              </h3>
              <p className="md:col-span-7 text-[16px] md:text-[18px] leading-relaxed text-muted">
                Os golpes mudam toda semana. A gente muda junto. O motor de detecção melhora a
                cada caso analisado, e a base de conhecimento sobre fraude brasileira é ativo
                nosso — não está em prateleira de fornecedor estrangeiro.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

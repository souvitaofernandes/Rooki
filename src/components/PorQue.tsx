import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

const blocks = [
  {
    title: "A Rooki é brasileira de fato.",
    body: "Os golpes daqui têm sotaque, têm gancho, têm gente por trás. PIX falso, boleto adulterado, falsa central, “filho” pedindo dinheiro — isso é cardápio brasileiro. IA treinada com fraude americana não pega isso.",
  },
  {
    title: "A Rooki não promete o que não pode.",
    body: "A gente acerta na maioria dos casos. Erra em alguns. Quando erra, continua do seu lado: te orienta no que fazer pós-clique, em quem acionar, em como tentar reverter. Antifraude honesta vale mais que antifraude que se vende como infalível.",
  },
  {
    title: "A Rooki aprende todo dia.",
    body: "Os golpes mudam toda semana. A gente muda junto. Cada caso analisado vira aprendizado. A base de conhecimento sobre fraude brasileira é nossa, e cresce diariamente.",
  },
];

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

        <div className="mt-12 md:mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8 items-stretch">
          {blocks.map((b, i) => (
            <FadeIn key={b.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-bg p-7 md:p-8">
                <h3 className="text-[20px] md:text-[24px] font-bold tracking-tight2 text-ink">
                  {b.title}
                </h3>
                <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-muted">
                  {b.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

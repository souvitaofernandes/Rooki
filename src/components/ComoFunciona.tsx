import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    n: "01",
    title: "Recebeu algo estranho?",
    body: "Mensagem, link, print, áudio. Aquele que dá um aperto no peito antes de você decidir o que fazer.",
  },
  {
    n: "02",
    title: "Encaminha pra Rooki.",
    body: "WhatsApp da Rooki, conversa direta. Cola, manda print, encaminha. Tanto faz.",
  },
  {
    n: "03",
    title: "Em segundos, você sabe.",
    body: "A Rooki responde se é golpe, suspeito ou seguro. E explica o porquê. Aí você decide o que fazer, agora bem informado.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <FadeIn>
            <h2 className="text-[28px] sm:text-[32px] md:text-[44px] font-extrabold tracking-tight2 leading-[1.1] text-ink">
              Funciona assim.
            </h2>
          </FadeIn>
        </div>

        <div className="mt-12 md:mt-14 grid gap-6 md:grid-cols-3 md:gap-7">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.06}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-bg transition-colors hover:border-ink/15">
                <div className="h-[3px] bg-[linear-gradient(90deg,#443CFF_0%,#04C5FF_50%,#00FC6E_100%)] opacity-80 transition-opacity group-hover:opacity-100" aria-hidden />
                <div className="p-7">
                <span className="block text-[34px] font-extrabold tracking-tight2 text-cyan leading-none">
                  {s.n}
                </span>
                <h3 className="mt-5 text-[20px] font-bold tracking-tight2 text-ink">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.body}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

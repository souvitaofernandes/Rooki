import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

const steps = [
  {
    n: "01",
    title: "Você recebe",
    body: "Mensagem suspeita no WhatsApp, SMS, e-mail, rede social. Aquela que dá um nó na barriga.",
  },
  {
    n: "02",
    title: "Você manda pra Rooki",
    body: "Encaminha pra Rooki no WhatsApp. Texto, print, link. Tanto faz.",
  },
  {
    n: "03",
    title: "Em segundos, você sabe",
    body: "A Rooki responde: é golpe, é suspeito, ou pode confiar. Com explicação clara do porquê. Aí você decide o que fazer — agora bem informado.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <FadeIn>
            <h2 className="text-[28px] sm:text-[32px] md:text-[44px] font-extrabold tracking-tight2 leading-[1.1] text-ink">
              Como funciona, na prática.
            </h2>
          </FadeIn>
        </div>

        <div className="mt-12 md:mt-14 grid gap-6 md:grid-cols-3 md:gap-7">
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.06}>
              <article className="h-full rounded-2xl border border-border bg-bg p-7 transition-colors hover:border-ink/15">
                <span className="block text-[34px] font-extrabold tracking-tight2 text-cyan leading-none">
                  {s.n}
                </span>
                <h3 className="mt-5 text-[20px] font-bold tracking-tight2 text-ink">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">{s.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

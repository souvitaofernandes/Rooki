import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

const cards = [
  {
    title: "Sem app, por enquanto.",
    body: "Funciona no WhatsApp que você já usa.",
  },
  {
    title: "Sem cadastro complicado.",
    body: "Você fala. A Rooki responde.",
  },
  {
    title: "Sem pedir seus dados bancários.",
    body: "Pede a mensagem suspeita. Devolve clareza.",
  },
];

export function OQueE() {
  return (
    <section className="bg-ink py-20 md:py-28 text-white">
      <Container>
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="text-[28px] sm:text-[32px] md:text-[44px] font-extrabold tracking-tight2 leading-[1.1]">
              A Rooki é uma segunda opinião.
            </h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="mt-6 text-[19px] md:text-[24px] leading-snug font-medium tracking-tight2 text-white">
              A Rooki é o que sua mãe ligaria pra te perguntar, se ela soubesse de cibersegurança.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-white/75">
              Você manda a mensagem suspeita. A Rooki olha o link, lê o texto, compara com o que
              ela já viu. Em segundos, responde: é golpe, é suspeito, ou pode confiar. E explica o
              porquê em uma linguagem que sua mãe entende.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.14}>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {cards.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <h3 className="text-[16px] font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-white/65">{c.body}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

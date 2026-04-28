import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export function OQueE() {
  return (
    <section className="bg-ink py-20 md:py-28 text-white">
      <Container>
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="text-[28px] sm:text-[32px] md:text-[44px] font-extrabold tracking-tight2 leading-[1.1]">
              O que é a Rooki?
            </h2>
          </FadeIn>
          <FadeIn delay={0.06}>
            <p className="mt-6 text-[19px] md:text-[24px] leading-snug font-medium tracking-tight2 text-white">
              A Rooki é o que sua mãe ligaria pra te perguntar, se ela soubesse de cibersegurança.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-[16px] md:text-[18px] leading-relaxed text-white/75">
              Você manda a mensagem suspeita pelo WhatsApp. A Rooki olha, analisa o link, lê o
              texto, compara com golpes que ela já viu. Em segundos, ela responde: é golpe, é
              suspeito, ou pode confiar. E explica o porquê.
            </p>
          </FadeIn>

          <FadeIn delay={0.14}>
            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-[16px] md:text-[18px] leading-relaxed text-white/85">
                Sem app. Sem cadastro complicado. Sem pedir seus dados bancários.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

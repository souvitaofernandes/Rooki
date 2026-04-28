import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

export function QuemSomos() {
  return (
    <section id="quem-somos" className="bg-[#F8F9FB] py-20 md:py-28">
      <Container>
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="text-[28px] sm:text-[32px] md:text-[44px] font-extrabold tracking-tight2 leading-[1.1] text-ink">
              Por que a gente criou a Rooki.
            </h2>
          </FadeIn>

          <FadeIn delay={0.06}>
            <p className="mt-7 text-[17px] md:text-[19px] leading-relaxed text-muted">
              A Rooki nasceu de uma conversa que se repetia muito.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <blockquote className="mt-6 border-l-2 border-primary pl-5 italic text-[17px] md:text-[20px] leading-relaxed text-ink">
              &ldquo;Esse link é confiável?&rdquo; &ldquo;Esse Pix é o do banco mesmo?&rdquo;
              &ldquo;Recebi uma mensagem do meu filho pedindo dinheiro, mas o número é
              estranho...&rdquo;
            </blockquote>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-muted">
              A gente percebeu que a maioria das pessoas não tem com quem tirar essa dúvida na hora
              que ela aparece. Procurar no Google é genérico. Perguntar pra família às vezes ajuda,
              às vezes confunde mais. E o golpe está lá, esperando o clique.
            </p>
          </FadeIn>

          <FadeIn delay={0.18}>
            <p className="mt-5 text-[17px] md:text-[19px] leading-relaxed text-muted">
              Construímos a Rooki pra ser essa pessoa de confiança que responde rápido, fala
              simples, e está disponível 24 horas por dia.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <p className="mt-10 text-[14px] text-muted">
              Construído por Vitão Fernandes (CEO), Hudson (CTO) e Larissa (CMO).
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

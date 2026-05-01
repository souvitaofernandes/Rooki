import Link from "next/link";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-ink py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: "linear-gradient(45deg, #443CFF 0%, #04C5FF 50%, #00FC6E 100%)",
          }}
        />
      </div>
      <Container className="relative">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              Quer entender quais golpes estão chegando à sua base antes que eles virem prejuízo?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Teste a Rooki com um grupo controlado de usuários e veja, em dados reais, como sua base
              reage, quais golpes aparecem e quais oportunidades de prevenção existem.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <Link
                href="#contato"
                className="btn-primary inline-flex items-center gap-2 px-7 py-4 text-[15px]"
              >
                Quero testar com minha base <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contato"
                className="inline-flex items-center justify-center rounded-full border border-white/20 text-white px-7 py-4 text-[15px] font-semibold hover:bg-white/10 transition-colors"
              >
                Falar com a Rooki
              </Link>
            </div>

            <p className="text-white/40 text-sm">
              Piloto B2B2C para fintechs, telecoms, benefícios, seguradoras e empresas com grandes bases de consumidores.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

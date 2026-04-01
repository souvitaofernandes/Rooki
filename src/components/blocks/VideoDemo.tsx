"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function VideoDemo() {
  return (
    <Section background="linen">
      <SectionHeading
        badge="Veja em ação"
        title="A Rooki funcionando de verdade"
        subtitle="Assista como é simples: você manda a mensagem, a Rooki analisa e responde na hora."
      />

      <div className="mx-auto flex justify-center">
        <div className="w-[280px] sm:w-[320px]">
          <div className="overflow-hidden rounded-[2rem] border-[6px] border-brand-olive bg-brand-olive shadow-2xl">
            <video
              className="w-full"
              controls
              playsInline
              preload="metadata"
              poster=""
            >
              <source src="/Demo1.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeo.
            </video>
          </div>
          <p className="mt-4 text-center text-sm text-brand-grey">
            Demonstração real no WhatsApp
          </p>
        </div>
      </div>
    </Section>
  );
}

"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function VideoDemo() {
  return (
    <Section background="default">
      <SectionHeading
        badge="Veja em ação"
        title="A Rooki funcionando de verdade"
        subtitle="Você manda, a Rooki analisa e responde na hora."
      />

      <div className="mx-auto flex justify-center">
        <div className="w-[280px] sm:w-[320px]">
          <div className="overflow-hidden rounded-[2rem] border-[4px] border-white/10 bg-brand-surface shadow-2xl shadow-brand-purple/20">
            <video
              className="w-full"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/Demo1.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeo.
            </video>
          </div>
          <p className="mt-4 text-center text-sm text-brand-soft">
            Demonstração real no WhatsApp
          </p>
        </div>
      </div>
    </Section>
  );
}

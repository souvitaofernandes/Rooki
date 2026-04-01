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

      <div className="mx-auto max-w-2xl">
        <div className="overflow-hidden rounded-2xl border border-brand-linen bg-brand-olive shadow-xl">
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
          Demonstração real do chatbot da Rooki no WhatsApp
        </p>
      </div>
    </Section>
  );
}

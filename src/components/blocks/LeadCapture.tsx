"use client";

import { Section } from "@/components/layout/Section";
import { homeContent } from "@/data/home";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

export function LeadCapture() {
  const { leadCapture } = homeContent;

  return (
    <Section background="surface2" id="lead-capture">
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl p-px">
        {/* Gradient border */}
        <div className="absolute inset-0 rounded-3xl bg-brand-gradient opacity-40" />
        <div className="relative rounded-3xl bg-brand-surface2 p-8 text-center md:p-12">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            {leadCapture.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-brand-muted">
            {leadCapture.subtitle}
          </p>
          <div className="mt-8">
            <WhatsAppButton label="Testar no WhatsApp" size="lg" />
          </div>
          <p className="mt-4 text-xs text-brand-soft">
            {leadCapture.disclaimer}
          </p>
        </div>
      </div>
    </Section>
  );
}

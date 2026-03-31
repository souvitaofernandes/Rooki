"use client";

import { Section } from "@/components/layout/Section";
import { homeContent } from "@/data/home";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { Mail } from "lucide-react";

export function LeadCapture() {
  const { leadCapture } = homeContent;

  return (
    <Section background="olive" id="lead-capture">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-lime/20">
          <Mail className="h-6 w-6 text-brand-lime" />
        </div>

        <h2 className="text-3xl font-bold text-brand-snow md:text-4xl">
          {leadCapture.headline}
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-brand-snow/70">
          {leadCapture.subtitle}
        </p>

        <div className="mt-8">
          <WhatsAppButton
            label="Começar a usar a Rooki"
            size="lg"
            variant="primary"
          />
        </div>

        <p className="mt-4 text-xs text-brand-snow/50">
          {leadCapture.disclaimer}
        </p>
      </div>
    </Section>
  );
}

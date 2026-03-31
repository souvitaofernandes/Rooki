"use client";

import { useState } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQBlockProps {
  title: string;
  items: FAQItem[];
  ctaText?: string;
  ctaHref?: string;
  background?: "snow" | "linen";
}

function AccordionItem({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-brand-linen last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-brand-olive"
      >
        <span className="text-base font-medium text-brand-olive">
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-brand-grey transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          open ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-sm leading-relaxed text-brand-grey">{answer}</p>
      </div>
    </div>
  );
}

export function FAQBlock({
  title,
  items,
  ctaText,
  ctaHref,
  background = "snow",
}: FAQBlockProps) {
  return (
    <Section background={background} id="faq">
      <SectionHeading title={title} />

      <div className="mx-auto max-w-2xl rounded-2xl border border-brand-linen bg-white p-6 md:p-8">
        {items.map((item) => (
          <AccordionItem key={item.question} {...item} />
        ))}
      </div>

      {ctaText && ctaHref && (
        <div className="mt-10 text-center">
          <Link href={ctaHref}>
            <Button variant="ghost" size="md">
              {ctaText}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
    </Section>
  );
}

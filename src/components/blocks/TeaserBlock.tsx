import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import type { TeaserSection } from "@/data/home";

interface TeaserBlockProps {
  content: TeaserSection;
  background?: "snow" | "linen";
  align?: "left" | "center";
}

export function TeaserBlock({
  content,
  background = "snow",
  align = "center",
}: TeaserBlockProps) {
  return (
    <Section background={background}>
      <div
        className={`mx-auto max-w-2xl ${
          align === "center" ? "text-center" : ""
        }`}
      >
        <Badge variant="lime" className="mb-4">
          {content.label}
        </Badge>

        <h2 className="text-3xl font-bold text-brand-olive md:text-4xl">
          {content.headline}
        </h2>

        <p className="mt-4 text-lg text-brand-grey">{content.description}</p>

        <div className="mt-8">
          <Link href={content.ctaHref}>
            <Button variant="outline" size="md">
              {content.ctaText}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}

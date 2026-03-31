import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { insightsContent } from "@/data/insights";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Rooki Insights",
  description:
    "Análises, alertas e tendências sobre golpes digitais no Brasil. Conteúdo direto para te manter protegido.",
};

export default function Insights() {
  const { pageTitle, pageSubtitle, categories, featured, substackCta, newsletterCta } =
    insightsContent;

  return (
    <>
      <Section>
        <SectionHeading
          badge="Rooki Insights"
          title={pageTitle}
          subtitle={pageSubtitle}
        />

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Badge key={cat.slug} variant="outline" className="px-4 py-2 text-sm">
              {cat.label}
            </Badge>
          ))}
        </div>
      </Section>

      {/* Featured articles */}
      <Section background="linen">
        <SectionHeading title="Destaques" align="left" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((article) => (
            <Card key={article.slug} hover>
              <Badge variant="lime" className="mb-3">
                {article.category}
              </Badge>
              <h3 className="mb-2 text-lg font-semibold text-brand-olive">
                {article.title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-brand-grey">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-brand-grey">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {article.readingTime}
                </span>
                {article.date && <span>{article.date}</span>}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Substack CTA */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <BookOpen className="mx-auto mb-4 h-10 w-10 text-brand-lime" />
          <h2 className="text-3xl font-bold text-brand-olive md:text-4xl">
            {substackCta.headline}
          </h2>
          <p className="mt-4 text-lg text-brand-grey">{substackCta.subtitle}</p>
          <div className="mt-8">
            <a
              href={process.env.NEXT_PUBLIC_SUBSTACK_URL || "https://rooki.substack.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg">
                {substackCta.ctaText}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* Newsletter */}
      <Section background="olive">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-brand-snow md:text-4xl">
            {newsletterCta.headline}
          </h2>
          <p className="mt-4 text-brand-snow/70">{newsletterCta.subtitle}</p>
          <div className="mt-8">
            <a
              href={process.env.NEXT_PUBLIC_SUBSTACK_URL || "https://rooki.substack.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg">
                {newsletterCta.ctaText}
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}

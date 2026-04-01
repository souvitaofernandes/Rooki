import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { insightsContent } from "@/data/insights";
import { ArrowUpRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Rooki Insights",
  description:
    "Análises, alertas e educação sobre golpes digitais no Brasil. Conteúdo publicado no Substack pela Rooki.",
};

export default function Insights() {
  const { pageTitle, pageSubtitle, intro, articles, substackUrl, newsletterCta } =
    insightsContent;

  return (
    <>
      {/* Hero */}
      <Section>
        <SectionHeading
          badge="Rooki Insights"
          title={pageTitle}
          subtitle={pageSubtitle}
        />
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-brand-grey">{intro}</p>
        </div>
      </Section>

      {/* Articles */}
      <Section background="linen">
        <SectionHeading
          title="Publicações recentes"
          subtitle="Conteúdo publicado no Substack da Rooki. Clique para ler na íntegra."
          align="left"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <a
              key={article.url}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card hover className="h-full transition-all group-hover:border-brand-lime/40">
                <Badge variant="lime" className="mb-3">
                  {article.category}
                </Badge>
                <h3 className="mb-2 text-lg font-semibold text-brand-olive group-hover:text-brand-olive/80 transition-colors">
                  {article.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-brand-grey">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-olive">
                  Ler no Substack
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Card>
            </a>
          ))}
        </div>
      </Section>

      {/* Substack CTA */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <BookOpen className="mx-auto mb-4 h-10 w-10 text-brand-lime" />
          <h2 className="text-3xl font-bold text-brand-olive md:text-4xl">
            Todos os conteúdos no Substack
          </h2>
          <p className="mt-4 text-lg text-brand-grey">
            Acesse o Substack da Rooki para ver todos os artigos, assinar a newsletter e receber conteúdo novo direto no e-mail.
          </p>
          <div className="mt-8">
            <a
              href={substackUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary" size="lg">
                Acessar Substack da Rooki
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
              href={substackUrl}
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

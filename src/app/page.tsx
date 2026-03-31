import { Hero } from "@/components/blocks/Hero";
import { HowItWorks } from "@/components/blocks/HowItWorks";
import { WhatWeAnalyze } from "@/components/blocks/WhatWeAnalyze";
import { ForWhom } from "@/components/blocks/ForWhom";
import { LeadCapture } from "@/components/blocks/LeadCapture";
import { TeaserBlock } from "@/components/blocks/TeaserBlock";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { homeContent } from "@/data/home";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <WhatWeAnalyze />
      <ForWhom />
      <LeadCapture />
      <TeaserBlock content={homeContent.insightsTeaser} background="snow" />
      <TeaserBlock content={homeContent.educacaoTeaser} background="linen" />
      <TeaserBlock content={homeContent.escolasTeaser} background="snow" />
      <FAQBlock
        title={homeContent.faq.sectionTitle}
        items={homeContent.faq.items}
        ctaText={homeContent.faq.ctaText}
        ctaHref={homeContent.faq.ctaHref}
        background="linen"
      />
    </>
  );
}

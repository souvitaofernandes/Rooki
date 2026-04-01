import { Hero } from "@/components/blocks/Hero";
import { SocialProof } from "@/components/blocks/SocialProof";
import { HowItWorks } from "@/components/blocks/HowItWorks";
import { VideoDemo } from "@/components/blocks/VideoDemo";
import { WhatWeAnalyze } from "@/components/blocks/WhatWeAnalyze";
import { Recognition } from "@/components/blocks/Recognition";
import { ForWhom } from "@/components/blocks/ForWhom";
import { LeadCapture } from "@/components/blocks/LeadCapture";
import { TeaserBlock } from "@/components/blocks/TeaserBlock";
import { FAQBlock } from "@/components/blocks/FAQBlock";
import { homeContent } from "@/data/home";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <HowItWorks />
      <VideoDemo />
      <WhatWeAnalyze />
      <ForWhom />
      <Recognition />
      <LeadCapture />
      <TeaserBlock content={homeContent.insightsTeaser} background="snow" />
      <TeaserBlock content={homeContent.educacaoTeaser} background="linen" />
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

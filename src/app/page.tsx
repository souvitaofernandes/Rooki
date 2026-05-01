import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { GradientBar } from "@/components/GradientBar";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionFlow } from "@/components/SolutionFlow";
import { ValueProposition } from "@/components/ValueProposition";
import { SegmentsSection } from "@/components/SegmentsSection";
import { ProductFeatures } from "@/components/ProductFeatures";
import { MetricsSection } from "@/components/MetricsSection";
import { Differentiators } from "@/components/Differentiators";
import { UseCaseSection } from "@/components/UseCaseSection";
import { PilotSection } from "@/components/PilotSection";
import { PricingModel } from "@/components/PricingModel";
import { TrustGovernance } from "@/components/TrustGovernance";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ProofSection } from "@/components/ProofSection";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { ContactFormSection } from "@/components/ContactFormSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GradientBar />
        <ProblemSection />
        <SolutionFlow />
        <ValueProposition />
        <SegmentsSection />
        <GradientBar />
        <ProductFeatures />
        <MetricsSection />
        <Differentiators />
        <UseCaseSection />
        <PilotSection />
        <PricingModel />
        <TrustGovernance />
        <ComparisonSection />
        <ProofSection />
        <GradientBar />
        <FAQ />
        <FinalCTA />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}

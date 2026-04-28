import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problema } from "@/components/Problema";
import { OQueE } from "@/components/OQueE";
import { ComoFunciona } from "@/components/ComoFunciona";
import { ParaQuem } from "@/components/ParaQuem";
import { PorQue } from "@/components/PorQue";
import { QuemSomos } from "@/components/QuemSomos";
import { CtaFinal } from "@/components/CtaFinal";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <OQueE />
        <ComoFunciona />
        <ParaQuem />
        <PorQue />
        <QuemSomos />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problema } from "@/components/Problema";
import { OQueE } from "@/components/OQueE";
import { ComoFunciona } from "@/components/ComoFunciona";
import { PorQue } from "@/components/PorQue";
import { ParaEmpresas } from "@/components/ParaEmpresas";
import { QuemSomos } from "@/components/QuemSomos";
import { Waitlist } from "@/components/Waitlist";
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
        <PorQue />
        <ParaEmpresas />
        <QuemSomos />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}

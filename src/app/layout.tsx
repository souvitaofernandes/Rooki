import type { Metadata } from "next";
import { Sora, Montserrat } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rooki — Camada antifraude para o canal onde seu cliente já está",
  description:
    "A Rooki ajuda seus clientes a identificar golpes no WhatsApp antes da decisão errada. Camada antifraude B2B2C para empresas que protegem grandes bases.",
  openGraph: {
    title: "Rooki — Camada antifraude para o canal onde seu cliente já está",
    description:
      "A Rooki ajuda seus clientes a identificar golpes no WhatsApp antes da decisão errada.",
    url: "https://rooki.com.br",
    siteName: "Rooki",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooki",
    description: "Camada antifraude para o canal onde seu cliente já está.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-bg font-body text-text antialiased">
        {children}
      </body>
    </html>
  );
}

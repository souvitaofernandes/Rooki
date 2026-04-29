import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rooki — Sua segunda opinião contra golpes digitais",
  description:
    "A Rooki te ajuda a saber, em segundos, se aquela mensagem suspeita é golpe. Funciona no WhatsApp. App em breve.",
  openGraph: {
    title: "Rooki — Antes de cair, pergunta pra Rooki",
    description:
      "A Rooki é uma segunda opinião na hora da dúvida. Você manda a mensagem suspeita, em segundos sabe se pode confiar.",
    url: "https://rooki.com.br",
    siteName: "Rooki",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooki",
    description: "Antes de cair, pergunta pra Rooki.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen bg-bg font-sans text-text antialiased">
        {children}
      </body>
    </html>
  );
}

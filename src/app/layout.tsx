import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rooki — Antes de cair em um golpe, pergunte à Rooki",
  description:
    "A Rooki é uma segunda opinião sobre mensagens suspeitas. Funciona no WhatsApp, em segundos, e fala português brasileiro porque os golpes daqui são daqui.",
  openGraph: {
    title: "Rooki — Mostra pra Rooki antes de clicar",
    description:
      "A Rooki é uma segunda opinião sobre mensagens suspeitas. Funciona no WhatsApp, em segundos.",
    url: "https://rooki.com.br",
    siteName: "Rooki",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooki",
    description: "Mostra pra Rooki antes de clicar.",
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

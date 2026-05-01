import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rooki | Proteção digital contra golpes para bases de usuários",
  description:
    "A Rooki ajuda empresas a protegerem seus usuários contra golpes digitais pelo WhatsApp, com orientação em tempo real, educação embutida e inteligência sobre ameaças.",
  openGraph: {
    title: "Rooki | Proteção digital contra golpes para bases de usuários",
    description:
      "A Rooki ajuda empresas a protegerem seus usuários contra golpes digitais pelo WhatsApp, com orientação em tempo real, educação embutida e inteligência sobre ameaças.",
    url: "https://rooki.com.br",
    siteName: "Rooki",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooki | Proteção digital contra golpes",
    description:
      "Proteja seus usuários contra golpes digitais no momento da dúvida.",
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

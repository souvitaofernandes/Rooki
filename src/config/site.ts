export const siteConfig = {
  name: "Rooki",
  tagline: "Você suspeita, a gente detecta",
  description:
    "Rooki é a inteligência artificial que ajuda você a identificar golpes pelo WhatsApp. Envie um link ou mensagem suspeita e receba uma análise em segundos.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rooki.com.br",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "551151999871",
  substackUrl:
    process.env.NEXT_PUBLIC_SUBSTACK_URL || "https://rooki.substack.com",
  socialLinks: {
    instagram: "https://instagram.com/rooki",
    linkedin: "https://linkedin.com/company/rooki",
  },
  nav: [
    { label: "Como funciona", href: "/como-funciona" },
    { label: "Casos de uso", href: "/casos-de-uso" },
    { label: "Insights", href: "/insights" },
    { label: "Sobre", href: "/sobre" },
    { label: "FAQ", href: "/faq" },
    { label: "Contato", href: "/contato" },
  ],
  footerNav: {
    produto: [
      { label: "Como funciona", href: "/como-funciona" },
      { label: "Casos de uso", href: "/casos-de-uso" },
      { label: "FAQ", href: "/faq" },
    ],
    conteudo: [
      { label: "Rooki Insights", href: "/insights" },
    ],
    institucional: [
      { label: "Sobre", href: "/sobre" },
      { label: "Contato", href: "/contato" },
    ],
    legal: [
      { label: "Política de Privacidade", href: "/politica-de-privacidade" },
      { label: "Termos de Uso", href: "/termos-de-uso" },
      { label: "Aviso Legal", href: "/aviso-legal" },
    ],
  },
};

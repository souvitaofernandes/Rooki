// Insights page content — Rooki website

export interface InsightsCategory {
  slug: string;
  label: string;
  description: string;
}

export interface FeaturedArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  date?: string;
}

export interface InsightsContent {
  pageTitle: string;
  pageSubtitle: string;
  newsletterCta: {
    headline: string;
    subtitle: string;
    ctaText: string;
    placeholder: string;
  };
  categories: InsightsCategory[];
  featured: FeaturedArticle[];
  substackCta: {
    headline: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
  };
}

export const insightsContent: InsightsContent = {
  pageTitle: "Rooki Insights",
  pageSubtitle:
    "Análises, alertas e tendências sobre golpes digitais no Brasil. Conteúdo direto e prático para te manter um passo à frente dos golpistas.",

  newsletterCta: {
    headline: "Receba os Insights na sua caixa de entrada",
    subtitle:
      "Alertas sobre novos golpes, análises de tendências e dicas de proteção. Toda semana, sem spam.",
    ctaText: "Assinar newsletter",
    placeholder: "Seu melhor e-mail",
  },

  categories: [
    {
      slug: "alertas",
      label: "Alertas",
      description:
        "Novos golpes identificados pela Rooki. Atualizações rápidas sobre ameaças em circulação no Brasil.",
    },
    {
      slug: "analises",
      label: "Análises",
      description:
        "Investigações detalhadas sobre como golpes funcionam, quem está por trás e por que as pessoas caem.",
    },
    {
      slug: "guias",
      label: "Guias práticos",
      description:
        "Passo a passo para se proteger em situações específicas: compras online, Pix, redes sociais e mais.",
    },
    {
      slug: "dados",
      label: "Dados e tendências",
      description:
        "Números, estatísticas e padrões sobre fraudes digitais no Brasil, com base nas análises da Rooki.",
    },
    {
      slug: "educacao-digital",
      label: "Educação digital",
      description:
        "Conteúdo para quem quer entender mais sobre segurança online, privacidade e cidadania digital.",
    },
  ],

  featured: [
    {
      slug: "golpe-do-pix-reverso",
      title: "Golpe do Pix reverso: como funciona e como se proteger",
      excerpt:
        "Uma nova variação do golpe do Pix está circulando: a vítima recebe um comprovante falso de transferência e é pressionada a \"devolver\" um valor que nunca entrou. Entenda como identificar.",
      category: "alertas",
      readingTime: "4 min",
    },
    {
      slug: "anatomia-de-um-phishing",
      title: "Anatomia de um phishing: desmontando um golpe de e-mail passo a passo",
      excerpt:
        "Recebemos um e-mail falso que imita perfeitamente o Nubank. Veja como identificamos cada detalhe que denuncia a fraude — e aprenda a fazer o mesmo.",
      category: "analises",
      readingTime: "7 min",
    },
    {
      slug: "como-verificar-se-um-site-e-confiavel",
      title: "Como verificar se um site é confiável antes de comprar",
      excerpt:
        "Sete verificações simples que qualquer pessoa pode fazer antes de colocar o cartão em um site desconhecido. Sem ferramentas técnicas, sem complicação.",
      category: "guias",
      readingTime: "5 min",
    },
    {
      slug: "golpes-mais-comuns-brasil-2025",
      title: "Os 10 golpes digitais mais comuns no Brasil em 2025",
      excerpt:
        "Com base em milhares de análises, listamos os golpes que mais aparecem no dia a dia dos brasileiros — e o que mudou em relação ao ano passado.",
      category: "dados",
      readingTime: "8 min",
    },
    {
      slug: "como-ensinar-idosos-seguranca-digital",
      title: "Como conversar sobre segurança digital com quem tem mais de 60 anos",
      excerpt:
        "Dicas práticas para ajudar pais, avós e familiares mais velhos a se protegerem online — sem parecer que você está dando uma aula ou subestimando a inteligência deles.",
      category: "educacao-digital",
      readingTime: "6 min",
    },
    {
      slug: "golpe-falso-emprego-whatsapp",
      title: "Ofertas de emprego por WhatsApp: por que parecem reais e como desmascarar",
      excerpt:
        "\"Trabalhe de casa e ganhe R$ 3.000 por semana.\" Entenda a mecânica por trás dos golpes de emprego falso que lotam os grupos de WhatsApp.",
      category: "alertas",
      readingTime: "5 min",
    },
  ],

  substackCta: {
    headline: "Acompanhe no Substack",
    subtitle:
      "Todos os nossos conteúdos estão disponíveis gratuitamente no Substack. Assine para receber direto no e-mail.",
    ctaText: "Acessar Substack",
    ctaHref: "https://rooki.substack.com",
  },
};

// Insights page content — Rooki website
// Uses REAL Substack articles

export interface SubstackArticle {
  title: string;
  excerpt: string;
  url: string;
  category: string;
}

export interface InsightsContent {
  pageTitle: string;
  pageSubtitle: string;
  intro: string;
  articles: SubstackArticle[];
  substackUrl: string;
  newsletterCta: {
    headline: string;
    subtitle: string;
    ctaText: string;
  };
}

export const insightsContent: InsightsContent = {
  pageTitle: "Rooki Insights",
  pageSubtitle:
    "Análises, alertas e educação sobre golpes digitais no Brasil. Conteúdo publicado no Substack e atualizado regularmente.",

  intro:
    "A gente publica aqui o que descobre: golpes que estão circulando, tendências de fraude, alertas sobre ameaças novas e conteúdo educativo sobre segurança digital. Tudo no Substack, de graça, escrito pra qualquer pessoa entender.",

  articles: [
    {
      title: "Tire seu filho do Roblox agora",
      excerpt:
        "Riscos reais que crianças enfrentam em plataformas de jogos online e o que pais precisam saber para agir.",
      url: "https://rooki.substack.com/p/tire-seu-filho-do-roblox-agora",
      category: "Educação digital",
    },
    {
      title: "Hacktivismo: entre o clique de protesto e o crime",
      excerpt:
        "O que é hacktivismo, como funciona e onde fica a linha entre ativismo digital e crime cibernético.",
      url: "https://rooki.substack.com/p/hacktivismo-entre-o-clique-de-protesto",
      category: "Análise",
    },
    {
      title: "ECA Digital entrou em vigor ontem",
      excerpt:
        "O que muda com a nova legislação de proteção digital de crianças e adolescentes no Brasil.",
      url: "https://rooki.substack.com/p/eca-digital-entrou-em-vigor-ontem",
      category: "Legislação",
    },
    {
      title: "Do 'quase caiu' ao palco: a jornada da Rooki",
      excerpt:
        "A história de como a Rooki saiu de uma experiência pessoal com golpe para se tornar uma startup de segurança digital.",
      url: "https://rooki.substack.com/p/do-quase-caiu-ao-palco-a-jornada",
      category: "Sobre a Rooki",
    },
    {
      title: "30 segundos que salvam: por que golpes funcionam tão rápido",
      excerpt:
        "A ciência por trás da urgência nos golpes e como esses segundos de hesitação podem te proteger.",
      url: "https://rooki.substack.com/p/30-segundos-que-salvam-por-que-golpes",
      category: "Análise",
    },
    {
      title: "Carnaval e cibersegurança: proteja-se na folia",
      excerpt:
        "Golpes sazonais que circulam durante o Carnaval e como se proteger enquanto aproveita a festa.",
      url: "https://rooki.substack.com/p/carnaval-e-ciberseguranca-proteja",
      category: "Alerta",
    },
  ],

  substackUrl: "https://rooki.substack.com",

  newsletterCta: {
    headline: "Quer receber direto no e-mail?",
    subtitle:
      "Alertas de golpes novos, análises de tendências e dicas de proteção. É de graça no Substack.",
    ctaText: "Assinar no Substack",
  },
};

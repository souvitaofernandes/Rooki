// Educação page content — Rooki website

export interface EducationProgram {
  slug: string;
  title: string;
  description: string;
  format: string;
  audience: string;
  duration?: string;
  topics: string[];
  cta: {
    text: string;
    href: string;
  };
}

export interface FreeMaterial {
  title: string;
  description: string;
  format: string;
  downloadHref?: string;
}

export interface FutureProduct {
  title: string;
  description: string;
  status: string;
}

export interface EducationProof {
  escola: string;
  cidade: string;
  publico: string;
  tipo: string;
}

export interface EducacaoContent {
  pageTitle: string;
  pageSubtitle: string;
  intro: {
    headline: string;
    body: string;
  };
  prova: {
    sectionTitle: string;
    items: EducationProof[];
  };
  programs: EducationProgram[];
  materiais: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: FreeMaterial[];
  };
  futureProducts: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: FutureProduct[];
  };
  ctaFinal: {
    headline: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
  };
}

export const educacaoContent: EducacaoContent = {
  pageTitle: "Educação",
  pageSubtitle:
    "Conhecimento é a melhor defesa contra golpes digitais. A Rooki leva informação prática para quem precisa — de escolas a empresas, de eventos comunitários a conferências.",

  intro: {
    headline: "Por que investir em educação digital",
    body: "No Brasil, uma tentativa de golpe acontece a cada 6 segundos. A maioria das vítimas não cai por falta de inteligência, mas por falta de informação. A Rooki acredita que segurança digital é uma habilidade essencial — tão importante quanto saber atravessar a rua. Por isso, criamos programas educacionais acessíveis, práticos e adaptados para diferentes públicos.",
  },

  prova: {
    sectionTitle: "Onde já estivemos",
    items: [
      {
        escola: "Colégio Gaspar Vaz",
        cidade: "Mogi das Cruzes, SP",
        publico: "Professores e pais",
        tipo: "Palestra",
      },
      {
        escola: "Colégio Alma Mater",
        cidade: "Mogi das Cruzes, SP",
        publico: "Professores e pais",
        tipo: "Palestra",
      },
    ],
  },

  programs: [
    {
      slug: "palestras",
      title: "Palestras",
      description:
        "Apresentações dinâmicas sobre golpes digitais, segurança online e cidadania digital. Adaptamos o conteúdo para o perfil do público — de adolescentes a idosos, de colaboradores a lideranças.",
      format: "Presencial ou online",
      audience: "Empresas, escolas, eventos, associações, comunidades",
      duration: "45 a 90 minutos",
      topics: [
        "Panorama dos golpes digitais no Brasil: o que está acontecendo agora",
        "Como golpistas exploram emoções: urgência, medo, ganância e curiosidade",
        "Pix, WhatsApp e redes sociais: os novos campos de batalha",
        "Proteção prática: o que fazer (e o que nunca fazer) ao receber algo suspeito",
        "Ferramentas e hábitos para navegar com mais segurança no dia a dia",
      ],
      cta: {
        text: "Solicitar palestra",
        href: "/contato?assunto=palestra",
      },
    },
    {
      slug: "workshops",
      title: "Workshops",
      description:
        "Sessões práticas e interativas onde os participantes aprendem a identificar golpes na prática. Com exercícios reais, simulações e dinâmicas em grupo.",
      format: "Presencial (preferencialmente) ou online",
      audience: "Equipes corporativas, professores, grupos de idosos, comunidades",
      duration: "2 a 4 horas",
      topics: [
        "Exercício: analisando mensagens reais — é golpe ou não?",
        "Como verificar links, perfis e sites antes de confiar",
        "Simulação de golpes: entendendo a perspectiva do golpista",
        "Criando uma cultura de verificação no ambiente de trabalho e em casa",
        "Plano de ação individual: seus próximos passos para se proteger",
      ],
      cta: {
        text: "Solicitar workshop",
        href: "/contato?assunto=workshop",
      },
    },
    {
      slug: "programa-escolas",
      title: "Programa para Escolas",
      description:
        "Um programa completo de segurança digital para instituições de ensino, com conteúdo adaptado para alunos de diferentes faixas etárias, capacitação de professores e materiais para famílias.",
      format: "Presencial e/ou online",
      audience: "Escolas de ensino fundamental e médio",
      duration: "Programa contínuo ou módulos avulsos",
      topics: [
        "Cidadania digital para crianças e adolescentes",
        "Identificação de golpes e fraudes nas redes sociais",
        "Privacidade e proteção de dados pessoais",
        "Cyberbullying, fake news e desinformação",
        "Capacitação de educadores em segurança digital",
        "Materiais e orientações para as famílias",
      ],
      cta: {
        text: "Conhecer o programa",
        href: "/escolas",
      },
    },
  ],

  materiais: {
    sectionTitle: "Materiais gratuitos",
    sectionSubtitle:
      "Conteúdos que você pode baixar, compartilhar e usar livremente para se proteger e proteger quem está à sua volta.",
    items: [
      {
        title: "Guia rápido: como identificar golpes no WhatsApp",
        description:
          "Um PDF de duas páginas com os sinais mais comuns de golpes por mensagem e o que fazer em cada situação.",
        format: "PDF",
      },
      {
        title: "Checklist de segurança digital para famílias",
        description:
          "Uma lista prática de verificações e hábitos que toda família pode adotar para navegar com mais segurança.",
        format: "PDF",
      },
      {
        title: "Cartilha de segurança digital para idosos",
        description:
          "Material com linguagem acessível e exemplos visuais, pensado para quem tem menos familiaridade com tecnologia.",
        format: "PDF",
      },
      {
        title: "Infográfico: os 5 golpes mais comuns de 2025",
        description:
          "Um resumo visual dos golpes que mais circulam no Brasil, com dicas rápidas de como evitar cada um.",
        format: "Imagem / PDF",
      },
      {
        title: "Kit para professores: segurança digital em sala de aula",
        description:
          "Planos de aula, atividades e dinâmicas para trabalhar segurança digital com alunos do ensino fundamental e médio.",
        format: "PDF",
      },
    ],
  },

  futureProducts: {
    sectionTitle: "Em breve",
    sectionSubtitle:
      "Estamos desenvolvendo novos formatos para levar educação digital para ainda mais pessoas.",
    items: [
      {
        title: "Curso online: Segurança Digital Essencial",
        description:
          "Um curso autodirigido com vídeos curtos, exercícios práticos e certificado. Para quem quer se aprofundar no tema no próprio ritmo.",
        status: "Em desenvolvimento",
      },
      {
        title: "Série de vídeos curtos para redes sociais",
        description:
          "Conteúdos de 60 segundos explicando golpes e dicas de proteção, pensados para compartilhar no Instagram, TikTok e WhatsApp.",
        status: "Em planejamento",
      },
      {
        title: "Programa de certificação para multiplicadores",
        description:
          "Formação para profissionais que querem se tornar referência em segurança digital nas suas comunidades e organizações.",
        status: "Em planejamento",
      },
    ],
  },

  ctaFinal: {
    headline: "Quer levar a Rooki para o seu evento ou organização?",
    subtitle:
      "Entre em contato e vamos montar juntos o formato ideal para o seu público.",
    ctaText: "Falar com a Rooki",
    ctaHref: "/contato?assunto=educacao",
  },
};

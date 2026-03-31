// Home page content — Rooki website

export interface HeroContent {
  headline: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  badge?: string;
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon?: string;
}

export interface AnalysisItem {
  title: string;
  description: string;
  icon?: string;
}

export interface AudienceSegment {
  title: string;
  description: string;
  icon?: string;
}

export interface LeadCaptureContent {
  headline: string;
  subtitle: string;
  ctaText: string;
  placeholder: string;
  disclaimer: string;
}

export interface TeaserSection {
  label: string;
  headline: string;
  description: string;
  ctaText: string;
  ctaHref: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HomeContent {
  hero: HeroContent;
  comoFunciona: {
    sectionTitle: string;
    sectionSubtitle: string;
    steps: Step[];
  };
  analisa: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: AnalysisItem[];
  };
  paraQuemServe: {
    sectionTitle: string;
    sectionSubtitle: string;
    segments: AudienceSegment[];
  };
  leadCapture: LeadCaptureContent;
  insightsTeaser: TeaserSection;
  educacaoTeaser: TeaserSection;
  escolasTeaser: TeaserSection;
  faq: {
    sectionTitle: string;
    items: FAQItem[];
    ctaText: string;
    ctaHref: string;
  };
}

export const homeContent: HomeContent = {
  hero: {
    headline: "Recebeu algo suspeito? Manda pra Rooki.",
    subtitle:
      "A Rooki é uma inteligência artificial que analisa links, mensagens e prints pelo WhatsApp e te diz se é golpe — em segundos, sem complicação.",
    ctaText: "Conversar no WhatsApp",
    ctaHref: "https://wa.me/5511999999999",
    badge: "Gratuito no WhatsApp",
  },

  comoFunciona: {
    sectionTitle: "Como funciona",
    sectionSubtitle:
      "Três passos simples entre a dúvida e a resposta. Sem cadastro, sem app, sem enrolação.",
    steps: [
      {
        number: 1,
        title: "Envie pelo WhatsApp",
        description:
          "Mande o link suspeito, o print da conversa ou encaminhe a mensagem diretamente para a Rooki.",
      },
      {
        number: 2,
        title: "A Rooki analisa",
        description:
          "Nossa IA cruza padrões de golpes conhecidos, verifica domínios, avalia o contexto da mensagem e identifica sinais de fraude.",
      },
      {
        number: 3,
        title: "Receba o resultado",
        description:
          "Em segundos, você recebe uma análise clara com o nível de risco e orientações sobre o que fazer.",
      },
    ],
  },

  analisa: {
    sectionTitle: "O que a Rooki analisa",
    sectionSubtitle:
      "Você não precisa ser especialista em segurança digital. Manda o que parecer estranho — a Rooki cuida do resto.",
    items: [
      {
        title: "Links suspeitos",
        description:
          "URLs recebidas por WhatsApp, SMS, e-mail ou redes sociais. A Rooki verifica o domínio, a reputação e os padrões técnicos do link.",
      },
      {
        title: "Prints de conversas",
        description:
          "Capturas de tela de mensagens no WhatsApp, Instagram, Telegram ou qualquer outro app. A Rooki lê e interpreta o conteúdo.",
      },
      {
        title: "Mensagens encaminhadas",
        description:
          "Textos que você recebeu e quer verificar. Basta encaminhar direto para o número da Rooki.",
      },
      {
        title: "Comprovantes e boletos",
        description:
          "Imagens de boletos, faturas ou comprovantes de pagamento que parecem falsos ou adulterados.",
      },
      {
        title: "Perfis e anúncios",
        description:
          "Prints de perfis suspeitos em redes sociais ou anúncios com ofertas que parecem boas demais para ser verdade.",
      },
      {
        title: "E-mails e notificações",
        description:
          "Prints ou textos de e-mails que simulam bancos, lojas, governo ou serviços de entrega.",
      },
    ],
  },

  paraQuemServe: {
    sectionTitle: "Para quem serve",
    sectionSubtitle:
      "A Rooki foi feita para qualquer pessoa que usa a internet no dia a dia — e quer se proteger sem precisar entender de tecnologia.",
    segments: [
      {
        title: "Famílias",
        description:
          "Pais, mães, avós e responsáveis que querem proteger quem mais importa. A Rooki é simples o suficiente para qualquer pessoa usar.",
      },
      {
        title: "Idosos",
        description:
          "Pessoas que usam WhatsApp no dia a dia e são alvo frequente de golpes por mensagem. A Rooki fala de um jeito direto e acessível.",
      },
      {
        title: "Jovens e estudantes",
        description:
          "Quem vive conectado e recebe links, promoções e abordagens o tempo todo. A Rooki ajuda a separar o real do falso.",
      },
      {
        title: "Pequenos empreendedores",
        description:
          "Quem recebe propostas, boletos e mensagens de fornecedores e clientes — e precisa saber se é legítimo antes de agir.",
      },
      {
        title: "Educadores e escolas",
        description:
          "Profissionais que querem levar segurança digital para dentro da sala de aula e preparar alunos para o mundo conectado.",
      },
      {
        title: "Qualquer pessoa online",
        description:
          "Se você usa internet, você é alvo. A Rooki está a uma mensagem de distância para quem quer tirar a dúvida antes de clicar.",
      },
    ],
  },

  leadCapture: {
    headline: "Fique por dentro das novas formas de golpe",
    subtitle:
      "Receba alertas, análises e dicas de proteção digital direto no seu e-mail. Sem spam, sem enrolação — só conteúdo que te protege.",
    ctaText: "Quero receber",
    placeholder: "Seu melhor e-mail",
    disclaimer:
      "Você pode cancelar a qualquer momento. Não compartilhamos seu e-mail com ninguém.",
  },

  insightsTeaser: {
    label: "Rooki Insights",
    headline: "Golpes mudam rápido. A gente acompanha.",
    description:
      "Análises, alertas e tendências sobre fraudes digitais no Brasil. Conteúdo direto, sem terrorismo, feito para te manter informado.",
    ctaText: "Ver Insights",
    ctaHref: "/insights",
  },

  educacaoTeaser: {
    label: "Educação",
    headline: "Conhecimento é a melhor proteção",
    description:
      "Palestras, workshops e materiais gratuitos sobre segurança digital para empresas, comunidades e eventos.",
    ctaText: "Conhecer programas",
    ctaHref: "/educacao",
  },

  escolasTeaser: {
    label: "Rooki para Escolas",
    headline: "Segurança digital começa na escola",
    description:
      "Um programa pensado para escolas que querem preparar alunos, professores e famílias para navegar com mais segurança.",
    ctaText: "Saiba mais",
    ctaHref: "/escolas",
  },

  faq: {
    sectionTitle: "Perguntas frequentes",
    items: [
      {
        question: "A Rooki é gratuita?",
        answer:
          "Sim. A análise básica pelo WhatsApp é gratuita. Nosso objetivo é que qualquer pessoa consiga verificar uma mensagem suspeita sem custo.",
      },
      {
        question: "Preciso instalar algum aplicativo?",
        answer:
          "Não. A Rooki funciona direto pelo WhatsApp. Basta mandar uma mensagem para o nosso número e pronto.",
      },
      {
        question: "A análise da Rooki é 100% garantida?",
        answer:
          "Não. A Rooki é uma ferramenta de apoio que usa inteligência artificial para identificar padrões de golpe. Ela ajuda muito, mas não substitui seu bom senso nem a consulta a órgãos oficiais quando necessário.",
      },
      {
        question: "A Rooki armazena minhas mensagens?",
        answer:
          "A Rooki processa o conteúdo enviado para gerar a análise e não armazena mensagens pessoais de forma permanente. Consulte nossa Política de Privacidade para todos os detalhes.",
      },
      {
        question: "Posso usar a Rooki para proteger minha família?",
        answer:
          "Com certeza. Muitos dos nossos usuários são pais e filhos que adicionaram a Rooki no grupo da família. Sempre que alguém recebe algo estranho, encaminha direto pra ela.",
      },
    ],
    ctaText: "Ver todas as perguntas",
    ctaHref: "/faq",
  },
};

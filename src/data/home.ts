// Home page content — Rooki website

export interface HeroContent {
  headline: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  badge?: string;
  proofLine?: string;
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

export interface SocialProofItem {
  value: string;
  label: string;
}

export interface RecognitionItem {
  title: string;
  description: string;
}

export interface HomeContent {
  hero: HeroContent;
  socialProof: SocialProofItem[];
  recognition: RecognitionItem[];
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
  faq: {
    sectionTitle: string;
    items: FAQItem[];
    ctaText: string;
    ctaHref: string;
  };
}

export const homeContent: HomeContent = {
  hero: {
    headline: "Você suspeita, a gente detecta!",
    subtitle:
      "A Rooki é uma IA que analisa links e mensagens suspeitas direto pelo WhatsApp. Em segundos, você sabe se é golpe — e o que fazer.",
    ctaText: "Analisar no WhatsApp",
    ctaHref: "https://wa.me/551151999871",
    badge: "Gratuito no WhatsApp",
    proofLine: "Mais de 1.000 mensagens já analisadas por pessoas reais.",
  },

  socialProof: [
    { value: "1.000+", label: "mensagens analisadas" },
    { value: "40+", label: "pessoas já usaram" },
    { value: "<10s", label: "tempo médio de resposta" },
    { value: "100%", label: "respondidas" },
  ],

  recognition: [
    {
      title: "TOP 10 — Startup One 2026",
      description: "Indicada entre os melhores projetos do programa de empreendedorismo da FIAP.",
    },
    {
      title: "Rock New Ventures — Batch 10",
      description: "Aprovada para aceleração no programa de 2026 da Rock New Ventures.",
    },
  ],

  comoFunciona: {
    sectionTitle: "Como funciona",
    sectionSubtitle:
      "Três passos entre a dúvida e a resposta. Sem cadastro, sem app, sem enrolação.",
    steps: [
      {
        number: 1,
        title: "Manda pelo WhatsApp",
        description:
          "Cola o link suspeito ou encaminha a mensagem direto pra Rooki.",
      },
      {
        number: 2,
        title: "A IA analisa",
        description:
          "A Rooki cruza com padrões de golpe, checa domínios e avalia o contexto.",
      },
      {
        number: 3,
        title: "Recebe o resultado",
        description:
          "Em segundos vem a análise: nível de risco e o que fazer.",
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
        title: "Mensagens encaminhadas",
        description:
          "Textos que você recebeu e quer verificar. Basta encaminhar direto para o número da Rooki.",
      },
      {
        title: "Textos de e-mails suspeitos",
        description:
          "Copie e cole o texto de e-mails que simulam bancos, lojas, governo ou serviços de entrega.",
      },
      {
        title: "Propostas e ofertas",
        description:
          "Mensagens com ofertas boas demais para ser verdade, propostas de investimento ou emprego suspeitas.",
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
        title: "Qualquer pessoa online",
        description:
          "Se você usa internet, você é alvo. A Rooki está a uma mensagem de distância para quem quer tirar a dúvida antes de clicar.",
      },
    ],
  },

  leadCapture: {
    headline: "Quer ficar sabendo dos golpes novos?",
    subtitle:
      "Alertas, análises e dicas de proteção direto no seu e-mail — conteúdo do Rooki Insights, sem spam.",
    ctaText: "Quero receber",
    placeholder: "Seu melhor e-mail",
    disclaimer:
      "Cancela quando quiser. Não compartilhamos seu e-mail com ninguém.",
  },

  insightsTeaser: {
    label: "Rooki Insights",
    headline: "Golpe novo toda semana. A gente acompanha.",
    description:
      "Análises, alertas e tendências sobre fraudes digitais no Brasil. Publicamos no Substack, de graça, pra quem quer ficar por dentro.",
    ctaText: "Ver Insights",
    ctaHref: "/insights",
  },

  faq: {
    sectionTitle: "Perguntas frequentes",
    items: [
      {
        question: "A Rooki é gratuita?",
        answer:
          "Sim. A análise pelo WhatsApp é gratuita. Nosso objetivo é que qualquer pessoa consiga verificar uma mensagem suspeita sem custo.",
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
        question: "A Rooki analisa imagens?",
        answer:
          "Ainda não. Hoje a Rooki trabalha com textos e links. Estamos desenvolvendo a análise de imagens, mas por enquanto o foco é fazer muito bem o que já funciona.",
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

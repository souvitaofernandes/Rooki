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
  problema: {
    sectionTitle: string;
    sectionSubtitle: string;
    body: string;
    cards: { title: string; description: string }[];
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
    headline: "Você suspeita. A Rooki verifica.",
    subtitle:
      "Envie o link, mensagem ou número suspeito pelo WhatsApp e receba em segundos uma orientação clara sobre o risco — antes de clicar, pagar ou responder.",
    ctaText: "Testar no WhatsApp",
    ctaHref: "https://wa.me/551151999871",
    badge: "MVP gratuito aberto",
    proofLine: "Mais de 1.000 mensagens analisadas. Resposta em menos de 10 segundos.",
  },

  socialProof: [
    { value: "1.000+", label: "mensagens analisadas" },
    { value: "40+", label: "usuários ativos" },
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

  problema: {
    sectionTitle: "Golpes digitais não parecem golpes no começo.",
    sectionSubtitle: "Eles chegam como mensagem de banco, promoção imperdível, entrega dos Correios. A pressão é rápida. E é aí que as pessoas caem.",
    body: "O Brasil tem uma das maiores taxas de fraude digital do mundo. E o problema não é falta de inteligência — é falta de tempo para pensar. Golpistas criam urgência, simulam confiança e exploram o momento de pressão. Entre receber a mensagem e tomar a decisão errada, são segundos.",
    cards: [
      { title: "Link de entrega falsa", description: "Correios, transportadora, Shopee — o domínio nunca é o real." },
      { title: "Boleto adulterado", description: "Parece legítimo. Mas o beneficiário mudou." },
      { title: "Falso suporte bancário", description: "\"Sua conta foi bloqueada.\" Urgência criada para você agir sem pensar." },
      { title: "Número novo no WhatsApp", description: "Parente ou amigo pedindo Pix urgente de número desconhecido." },
      { title: "Promoção boa demais", description: "iPhone por R$ 800. Existe, mas o site foi criado ontem." },
      { title: "Oferta de emprego suspeita", description: "Trabalho fácil, pagamento alto, pede dados pessoais logo." },
    ],
  },

  comoFunciona: {
    sectionTitle: "Três passos. Segundos.",
    sectionSubtitle: "Sem cadastro, sem download, sem complicação. A Rooki opera onde você já está.",
    steps: [
      {
        number: 1,
        title: "Você envia",
        description: "Mande o link, mensagem ou texto suspeito para o WhatsApp da Rooki. Do jeito que recebeu.",
      },
      {
        number: 2,
        title: "A IA analisa",
        description: "O motor cruza sinais de risco, verifica domínios e detecta padrões de golpes brasileiros em tempo real.",
      },
      {
        number: 3,
        title: "Você decide com clareza",
        description: "Receba uma orientação direta: nível de risco, o que foi encontrado, e o que fazer agora.",
      },
    ],
  },

  analisa: {
    sectionTitle: "O que a Rooki analisa",
    sectionSubtitle: "Manda o que parecer estranho. A Rooki cuida do resto.",
    items: [
      {
        title: "Links e URLs",
        description: "Qualquer endereço recebido por WhatsApp, SMS ou e-mail. A Rooki verifica domínio, reputação e padrões técnicos.",
      },
      {
        title: "Mensagens encaminhadas",
        description: "Encaminhe direto. Não precisa copiar, não precisa explicar.",
      },
      {
        title: "Textos de e-mail suspeito",
        description: "Copie e cole o texto de e-mails simulando banco, loja ou governo.",
      },
      {
        title: "Propostas e ofertas",
        description: "Emprego fácil, investimento garantido, promoção imperdível — a Rooki identifica os padrões.",
      },
    ],
  },

  paraQuemServe: {
    sectionTitle: "Para quem é",
    sectionSubtitle: "A Rooki opera em dois modelos: direto com o usuário final, ou integrada ao canal do parceiro B2B.",
    segments: [
      {
        title: "Pessoas e famílias",
        description: "Qualquer pessoa que usa WhatsApp e quer verificar antes de clicar, pagar ou responder.",
      },
      {
        title: "Idosos",
        description: "Público-alvo frequente de golpes por mensagem. A Rooki fala de um jeito simples e direto.",
      },
      {
        title: "Empresas e suas equipes",
        description: "Telcos, bancos e seguradoras que querem proteger sua base de clientes ou funcionários operacionais.",
      },
      {
        title: "Parceiros B2B2C",
        description: "A Rooki pode operar sob a marca do parceiro ou em co-branding — motor de detecção, não produto de prateleira.",
      },
    ],
  },

  leadCapture: {
    headline: "Quer ficar sabendo dos golpes novos?",
    subtitle: "Alertas, análises e tendências direto no seu e-mail — sem spam.",
    ctaText: "Quero receber",
    placeholder: "Seu melhor e-mail",
    disclaimer: "Cancela quando quiser. Não compartilhamos seu e-mail.",
  },

  insightsTeaser: {
    label: "Rooki Insights",
    headline: "Golpe novo toda semana. A gente acompanha.",
    description: "Análises e alertas sobre fraudes digitais no Brasil. Publicamos no Substack, de graça.",
    ctaText: "Ver Insights",
    ctaHref: "/insights",
  },

  faq: {
    sectionTitle: "Perguntas frequentes",
    items: [
      {
        question: "A Rooki é gratuita?",
        answer: "Sim. A análise pelo WhatsApp é gratuita. O objetivo é que qualquer pessoa consiga verificar uma mensagem suspeita sem custo.",
      },
      {
        question: "Preciso instalar algum aplicativo?",
        answer: "Não. A Rooki funciona direto pelo WhatsApp. Basta mandar uma mensagem para o nosso número.",
      },
      {
        question: "A análise da Rooki é 100% garantida?",
        answer: "Não. A Rooki é uma ferramenta de apoio que usa IA para identificar padrões de golpe. Ela ajuda muito, mas não substitui seu bom senso nem canais oficiais quando necessário.",
      },
      {
        question: "A Rooki analisa imagens?",
        answer: "Ainda não. Hoje a Rooki trabalha com textos e links. Estamos desenvolvendo análise de imagens.",
      },
      {
        question: "Posso usar a Rooki para proteger minha família?",
        answer: "Com certeza. Muitos usuários adicionaram a Rooki no grupo da família. Sempre que chega algo estranho, encaminham direto pra ela.",
      },
    ],
    ctaText: "Ver todas as perguntas",
    ctaHref: "/faq",
  },
};

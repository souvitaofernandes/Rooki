// Como Funciona page content — Rooki website

export interface DetailedStep {
  number: number;
  title: string;
  description: string;
  details: string[];
}

export interface SendableItem {
  type: string;
  description: string;
  examples: string[];
}

export interface AnalysisReturn {
  label: string;
  description: string;
}

export interface ServiceLimit {
  title: string;
  description: string;
}

export interface BestPractice {
  title: string;
  description: string;
}

export interface ComoFuncionaContent {
  pageTitle: string;
  pageSubtitle: string;
  steps: DetailedStep[];
  oQueEnviar: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: SendableItem[];
  };
  oQueRetorna: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: AnalysisReturn[];
  };
  limites: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: ServiceLimit[];
  };
  boasPraticas: {
    sectionTitle: string;
    items: BestPractice[];
  };
  ctaFinal: {
    headline: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
  };
}

export const comoFuncionaContent: ComoFuncionaContent = {
  pageTitle: "Como a Rooki funciona",
  pageSubtitle:
    "Tudo pelo WhatsApp. Sem cadastro, sem app, sem enrolação. Mandou a dúvida, recebeu a resposta.",

  steps: [
    {
      number: 1,
      title: "Manda o que te deixou com a pulga atrás da orelha",
      description:
        "Abre o WhatsApp e envia pro número da Rooki. Pode ser um link, uma mensagem encaminhada ou o texto de uma proposta estranha.",
      details: [
        "Não precisa explicar nada — só manda o conteúdo",
        "Aceita texto, link ou mensagem encaminhada",
        "Pode mandar mais de um item de uma vez",
      ],
    },
    {
      number: 2,
      title: "A IA analisa em segundos",
      description:
        "A Rooki cruza o conteúdo com padrões de golpes conhecidos no Brasil, checa domínios, analisa o tom da mensagem e procura sinais de manipulação.",
      details: [
        "URLs: domínio, certificado, reputação e redirecionamentos",
        "Texto: gatilhos emocionais, urgência forçada, linguagem típica de golpe",
        "Base de padrões de fraude atualizada constantemente",
      ],
    },
    {
      number: 3,
      title: "Você recebe a resposta com o que fazer",
      description:
        "A Rooki devolve uma análise clara: nível de risco, os motivos e o que você deveria fazer. Tudo em linguagem simples, ali mesmo no WhatsApp.",
      details: [
        "Risco classificado como baixo, moderado ou alto",
        "Os motivos por trás da classificação",
        "Orientações diretas: o que fazer e o que evitar",
        "Se necessário, indica canais oficiais pra denúncia",
      ],
    },
  ],

  oQueEnviar: {
    sectionTitle: "O que dá pra mandar",
    sectionSubtitle:
      "Não precisa formatar nada. Só manda do jeito que recebeu.",
    items: [
      {
        type: "Links e URLs",
        description:
          "Qualquer endereço de site que você recebeu e quer verificar antes de clicar.",
        examples: [
          "Link recebido por SMS de suposta entrega dos Correios",
          "URL de promoção compartilhada no grupo do WhatsApp",
          "Link de cadastro enviado por e-mail de banco",
        ],
      },
      {
        type: "Mensagens de texto",
        description:
          "Encaminhe diretamente a mensagem suspeita ou copie e cole o texto.",
        examples: [
          "Mensagem dizendo que seu CPF foi bloqueado",
          "Texto pedindo confirmação de dados bancários",
          "Mensagem de número desconhecido dizendo ser parente",
        ],
      },
      {
        type: "Propostas e ofertas suspeitas",
        description:
          "Textos de ofertas de emprego, investimento ou promoções que parecem boas demais para ser verdade.",
        examples: [
          "Mensagem com oferta de emprego que paga adiantado",
          "Proposta de investimento com retorno garantido",
          "Promoção de produto com preço muito abaixo do normal",
        ],
      },
    ],
  },

  oQueRetorna: {
    sectionTitle: "O que a Rooki retorna",
    sectionSubtitle:
      "Cada análise inclui informações práticas para você tomar a melhor decisão.",
    items: [
      {
        label: "Nível de risco",
        description:
          "Uma classificação clara — baixo, moderado ou alto — para você saber rapidamente se deve se preocupar.",
      },
      {
        label: "Motivos da análise",
        description:
          "Os sinais específicos que a Rooki identificou: domínio suspeito, linguagem manipuladora, padrão de golpe conhecido, entre outros.",
      },
      {
        label: "O que fazer",
        description:
          "Orientações diretas: ignorar, bloquear, denunciar, não clicar, verificar com o banco, etc.",
      },
      {
        label: "Contexto adicional",
        description:
          "Quando relevante, a Rooki explica o tipo de golpe identificado e como ele costuma funcionar.",
      },
    ],
  },

  limites: {
    sectionTitle: "O que a Rooki não faz",
    sectionSubtitle:
      "Transparência é parte do nosso compromisso. É importante saber onde a Rooki pode te ajudar — e onde ela não vai.",
    items: [
      {
        title: "Não substitui a polícia",
        description:
          "A Rooki não registra boletins de ocorrência nem investiga crimes. Se você foi vítima de golpe, procure a delegacia ou registre um B.O. online.",
      },
      {
        title: "Não substitui seu banco",
        description:
          "A Rooki não bloqueia transações, não recupera dinheiro e não acessa sua conta. Para questões financeiras, entre em contato com seu banco pelos canais oficiais.",
      },
      {
        title: "Não garante 100% de acerto",
        description:
          "A inteligência artificial é muito boa em identificar padrões, mas não é infalível. Use a análise como mais uma camada de proteção, não como única fonte de decisão.",
      },
      {
        title: "Não armazena dados pessoais",
        description:
          "A Rooki processa o conteúdo enviado para gerar a análise e descarta os dados conforme nossa Política de Privacidade. Não salvamos conversas.",
      },
    ],
  },

  boasPraticas: {
    sectionTitle: "Pra tirar mais proveito da Rooki",
    items: [
      {
        title: "Manda o conteúdo original",
        description:
          "Encaminha a mensagem como veio ou cola o link inteiro. Quanto mais contexto, melhor a análise.",
      },
      {
        title: "Primeiro manda, depois clica",
        description:
          "Ficou na dúvida com um link? Manda pra Rooki antes de abrir. Prevenir é sempre mais fácil.",
      },
      {
        title: "Texto longo? Cola tudo",
        description:
          "Não precisa resumir a mensagem. Quanto mais completo o texto, mais precisa a análise.",
      },
      {
        title: "Bota a Rooki no grupo da família",
        description:
          "Dá pra adicionar a Rooki em grupos de WhatsApp. Qualquer pessoa do grupo pode usar quando quiser.",
      },
      {
        title: "Na dúvida, manda",
        description:
          "Não tem pergunta boba. Se pareceu estranho, vale checar. A Rooki tá ali pra isso.",
      },
    ],
  },

  ctaFinal: {
    headline: "Pronto para testar?",
    subtitle:
      "Mande qualquer conteúdo suspeito pelo WhatsApp e veja a Rooki em ação. É rápido, gratuito e direto ao ponto.",
    ctaText: "Conversar no WhatsApp",
    ctaHref: "https://wa.me/5511951999871",
  },
};

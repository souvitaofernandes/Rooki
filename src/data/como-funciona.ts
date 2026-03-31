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
    "Tudo acontece pelo WhatsApp. Sem cadastro, sem download, sem complicação. Você manda a dúvida, a Rooki devolve a resposta.",

  steps: [
    {
      number: 1,
      title: "Você envia o conteúdo suspeito",
      description:
        "Abra o WhatsApp e mande para o número da Rooki aquilo que te deixou com a pulga atrás da orelha. Pode ser um link, um print, uma mensagem encaminhada ou até uma imagem de boleto.",
      details: [
        "Não precisa explicar nada — basta enviar o conteúdo",
        "Funciona com texto, imagem, link ou mensagem encaminhada",
        "Você pode mandar mais de um item por vez",
      ],
    },
    {
      number: 2,
      title: "A Rooki analisa com inteligência artificial",
      description:
        "Em poucos segundos, a nossa IA avalia o conteúdo cruzando padrões de golpes conhecidos no Brasil, verificando domínios, analisando o tom da mensagem e identificando sinais de manipulação.",
      details: [
        "Análise de URLs: verifica domínio, certificado, reputação e redirecionamentos",
        "Análise de texto: identifica gatilhos emocionais, urgência forçada e linguagem típica de golpes",
        "Análise de imagem: lê prints e identifica elementos visuais suspeitos",
        "Cruzamento com base de padrões de fraudes atualizados constantemente",
      ],
    },
    {
      number: 3,
      title: "Você recebe o resultado com orientações",
      description:
        "A Rooki responde com uma análise clara: o nível de risco do conteúdo, os motivos da avaliação e o que você deve fazer. Tudo em linguagem simples, direto no WhatsApp.",
      details: [
        "Classificação de risco: baixo, moderado ou alto",
        "Explicação dos motivos que levaram à classificação",
        "Orientações práticas sobre o que fazer (ou não fazer)",
        "Quando necessário, indicação de canais oficiais para denúncia",
      ],
    },
  ],

  oQueEnviar: {
    sectionTitle: "O que você pode enviar",
    sectionSubtitle:
      "A Rooki entende diferentes tipos de conteúdo. Você não precisa formatar nada — basta mandar.",
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
        type: "Capturas de tela (prints)",
        description:
          "Fotos da tela do celular mostrando a conversa, o e-mail ou o anúncio suspeito.",
        examples: [
          "Print de conversa no WhatsApp com proposta de investimento",
          "Captura de e-mail simulando ser de uma loja conhecida",
          "Print de anúncio no Instagram com preço muito abaixo do normal",
        ],
      },
      {
        type: "Imagens de boletos e comprovantes",
        description:
          "Fotos de boletos, faturas ou comprovantes que parecem adulterados ou falsos.",
        examples: [
          "Boleto recebido por e-mail com dados que não batem",
          "Fatura de operadora que você não reconhece",
          "Comprovante de Pix enviado por um comprador",
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
    sectionTitle: "Dicas para aproveitar melhor a Rooki",
    items: [
      {
        title: "Envie o conteúdo original",
        description:
          "Sempre que possível, encaminhe a mensagem original ou envie o link completo. Quanto mais contexto, melhor a análise.",
      },
      {
        title: "Mande antes de clicar",
        description:
          "Se recebeu um link e ficou em dúvida, mande para a Rooki antes de abrir. Prevenir é sempre mais fácil do que remediar.",
      },
      {
        title: "Use prints legíveis",
        description:
          "Se for mandar uma captura de tela, garanta que o texto está visível e não cortado. Imagens escuras ou embaçadas dificultam a análise.",
      },
      {
        title: "Adicione a Rooki nos grupos da família",
        description:
          "Você pode convidar a Rooki para grupos de WhatsApp. Assim, qualquer pessoa do grupo pode usar quando precisar.",
      },
      {
        title: "Na dúvida, manda",
        description:
          "Não existe pergunta boba. Se algo pareceu estranho, vale verificar. A Rooki está ali pra isso.",
      },
    ],
  },

  ctaFinal: {
    headline: "Pronto para testar?",
    subtitle:
      "Mande qualquer conteúdo suspeito pelo WhatsApp e veja a Rooki em ação. É rápido, gratuito e direto ao ponto.",
    ctaText: "Conversar no WhatsApp",
    ctaHref: "https://wa.me/5511999999999",
  },
};

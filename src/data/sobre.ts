// Sobre page content — Rooki website

export interface Value {
  title: string;
  description: string;
}

export interface TimelineEvent {
  period: string;
  title: string;
  description: string;
}

export interface SobreContent {
  pageTitle: string;
  pageSubtitle: string;
  missao: {
    headline: string;
    body: string;
  };
  problema: {
    headline: string;
    body: string;
    stats: { value: string; label: string }[];
  };
  solucao: {
    headline: string;
    body: string;
  };
  valores: {
    sectionTitle: string;
    items: Value[];
  };
  historia: {
    sectionTitle: string;
    body: string;
    timeline: TimelineEvent[];
  };
  comoConstruimos: {
    headline: string;
    body: string;
  };
  ctaFinal: {
    headline: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
  };
}

export const sobreContent: SobreContent = {
  pageTitle: "Sobre a Rooki",
  pageSubtitle:
    "Uma startup brasileira que usa inteligência artificial para proteger pessoas contra golpes digitais.",

  missao: {
    headline: "Nossa missão",
    body: "Tornar a proteção contra golpes digitais acessível para qualquer pessoa — independente de idade, conhecimento técnico ou condição social. Acreditamos que ninguém deveria precisar de um diploma em segurança da informação para saber se uma mensagem é golpe.",
  },

  problema: {
    headline: "O problema que a gente resolve",
    body: "O Brasil é um dos países com mais golpes digitais no mundo. Milhões de brasileiros são alvos todos os dias — pelo WhatsApp, por SMS, por e-mail, pelas redes sociais. Os golpistas são rápidos, criativos e exploram a confiança das pessoas. Do outro lado, as vítimas muitas vezes não têm a quem recorrer no momento da dúvida. Entre receber a mensagem suspeita e cair no golpe, existem poucos segundos. A Rooki existe para ocupar esse espaço: ser a primeira consulta que você faz antes de clicar, responder ou transferir.",
    stats: [
      {
        value: "4.7 milhões",
        label: "de brasileiros foram vítimas de golpes financeiros digitais em 2024",
      },
      {
        value: "R$ 25 bilhões",
        label: "em prejuízos estimados por fraudes digitais no Brasil em 2024",
      },
      {
        value: "1 a cada 6s",
        label: "é a frequência de tentativas de golpe digital no país",
      },
    ],
  },

  solucao: {
    headline: "A nossa abordagem",
    body: "A Rooki combina inteligência artificial com conhecimento profundo sobre os golpes que circulam no Brasil. Nossa tecnologia analisa links, mensagens e padrões de comportamento para identificar fraudes — tudo isso direto pelo WhatsApp, em segundos, sem complicação. Mas não paramos na tecnologia. Acreditamos que educação é tão importante quanto detecção. Por isso, investimos em conteúdo, palestras e programas para escolas. Queremos que as pessoas não apenas se protejam hoje, mas entendam como se proteger sempre.",
  },

  valores: {
    sectionTitle: "Nossos valores",
    items: [
      {
        title: "Acessibilidade",
        description:
          "Segurança digital não pode ser privilégio. Usamos o WhatsApp porque é onde as pessoas já estão. Falamos de um jeito que todo mundo entende.",
      },
      {
        title: "Transparência",
        description:
          "Somos honestos sobre o que a Rooki faz e o que ela não faz. Não prometemos 100% de acerto. Não usamos medo para vender. Dizemos exatamente como funciona.",
      },
      {
        title: "Praticidade",
        description:
          "Soluções complicadas não protegem ninguém. Cada decisão que tomamos passa por uma pergunta simples: isso facilita a vida de quem usa?",
      },
      {
        title: "Responsabilidade",
        description:
          "Lidamos com a confiança das pessoas em momentos de vulnerabilidade. Isso exige cuidado com dados, com linguagem e com o impacto das nossas respostas.",
      },
      {
        title: "Educação",
        description:
          "Detectar golpes é importante. Ensinar as pessoas a se proteger sozinhas é ainda mais. Queremos tornar o conhecimento acessível, não criar dependência.",
      },
      {
        title: "Empatia",
        description:
          "Cair em golpe não é burrice. Todo mundo pode ser enganado. Tratamos cada pessoa com respeito e sem julgamento.",
      },
    ],
  },

  historia: {
    sectionTitle: "Nossa história",
    body: "A Rooki nasceu de uma experiência pessoal. Quando alguém próximo ao nosso fundador quase caiu em um golpe por WhatsApp — um daqueles com a história do \"troquei de número\" — ficou claro que faltava uma ferramenta simples e acessível para verificar se algo era golpe. A partir daí, começamos a construir.",
    timeline: [
      {
        period: "2024",
        title: "A ideia",
        description:
          "Pesquisa inicial sobre o cenário de golpes digitais no Brasil e validação do conceito de análise por WhatsApp.",
      },
      {
        period: "Início de 2025",
        title: "Construção",
        description:
          "Desenvolvimento da inteligência artificial, definição da experiência do usuário e primeiros testes com usuários reais.",
      },
      {
        period: "2025",
        title: "Lançamento do MVP",
        description:
          "Lançamento da primeira versão da Rooki no WhatsApp, com foco em análise de links e mensagens suspeitas.",
      },
      {
        period: "2026",
        title: "Reconhecimento e aceleração",
        description:
          "Indicada ao TOP 10 do Startup One (FIAP). Aprovada no Batch 10 de 2026 da Rock New Ventures para aceleração. Primeiras palestras em escolas de Mogi das Cruzes.",
      },
    ],
  },

  comoConstruimos: {
    headline: "Como a gente constrói",
    body: "Somos uma startup enxuta, focada e com opinião. Construímos em público, ouvimos nossos usuários e iteramos rápido. Não temos medo de dizer \"isso a gente ainda não faz\" quando é verdade. Preferimos ser excelentes em poucas coisas do que medianos em muitas. Nossa stack é moderna, nosso time é pequeno e nosso compromisso é grande.",
  },

  ctaFinal: {
    headline: "Quer fazer parte dessa missão?",
    subtitle:
      "Seja como usuário, parceiro, educador ou apoiador — há muitas formas de contribuir para um Brasil mais seguro digitalmente.",
    ctaText: "Fale com a gente",
    ctaHref: "/contato",
  },
};

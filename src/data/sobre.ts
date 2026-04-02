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
    headline: "O que a gente faz",
    body: "A Rooki existe pra que qualquer pessoa consiga verificar se algo é golpe — sem precisar entender de tecnologia, sem pagar nada, sem sair do WhatsApp. Não importa se você tem 15 ou 75 anos. Se a mensagem te deixou com a pulga atrás da orelha, manda pra Rooki.",
  },

  problema: {
    headline: "O problema que a gente resolve",
    body: "O Brasil é um dos países com mais golpes digitais no mundo. Pelo WhatsApp, SMS, e-mail, redes sociais — todo dia tem alguém tentando enganar alguém. Os golpistas são rápidos e criativos. As vítimas, na maioria das vezes, não têm a quem recorrer no momento da dúvida. Entre receber a mensagem e cair no golpe, são poucos segundos. A Rooki ocupa esse espaço: é a primeira consulta que você faz antes de clicar, responder ou transferir.",
    stats: [
      {
        value: "4.7 milhões",
        label: "de vítimas de golpes digitais em 2024, segundo pesquisa DataSenado/Nexus",
      },
      {
        value: "R$ 25 bi",
        label: "em prejuízos estimados por fraudes digitais no Brasil (Fonte: Serasa Experian, 2024)",
      },
      {
        value: "1 a cada 6s",
        label: "uma tentativa de fraude digital acontece no Brasil (Serasa, 2024)",
      },
    ],
  },

  solucao: {
    headline: "Como a Rooki ataca isso",
    body: "A gente junta inteligência artificial com conhecimento real sobre os golpes que circulam no Brasil. A Rooki analisa links e mensagens, cruza com padrões de fraude e devolve uma resposta clara — tudo pelo WhatsApp, em segundos. A ideia é que as pessoas aprendam a se proteger, não que dependam da gente pra sempre.",
  },

  valores: {
    sectionTitle: "No que a gente acredita",
    items: [
      {
        title: "Acessibilidade",
        description:
          "Segurança digital não pode ser coisa de quem entende de tecnologia. A Rooki funciona no WhatsApp porque é onde todo mundo já está. E fala num jeito que qualquer pessoa entende.",
      },
      {
        title: "Transparência",
        description:
          "A Rooki não acerta sempre e a gente diz isso abertamente. Não usamos medo pra vender, não inflamos números e não prometemos o que não conseguimos entregar.",
      },
      {
        title: "Praticidade",
        description:
          "Se a solução é complicada, ela não protege ninguém. Tudo que a gente faz passa por uma pergunta: isso facilita a vida de quem usa?",
      },
      {
        title: "Responsabilidade",
        description:
          "Quando alguém manda uma mensagem pra Rooki, geralmente está preocupado ou com medo. Isso exige cuidado — com os dados, com a linguagem, com o impacto da resposta.",
      },
      {
        title: "Empatia",
        description:
          "Cair em golpe não é burrice — todo mundo pode ser enganado. A gente trata cada pessoa com respeito, sem julgamento.",
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
          "Indicada ao TOP 10 do Startup One (FIAP). Aprovada no Batch 10 de 2026 da Rock New Ventures para aceleração.",
      },
    ],
  },

  comoConstruimos: {
    headline: "Como a gente trabalha",
    body: "Time pequeno. Foco total. A gente conversa com quem usa, lança rápido e melhora toda semana. Se algo ainda não funciona, a gente avisa — prefere ser honesto do que parecer maior do que é. Hoje a Rooki faz poucas coisas, mas faz bem feito.",
  },

  ctaFinal: {
    headline: "Quer fazer parte disso?",
    subtitle:
      "Como usuário, parceiro, educador ou apoiador — tem várias formas de ajudar mais gente a não cair em golpe.",
    ctaText: "Fale com a gente",
    ctaHref: "/contato",
  },
};

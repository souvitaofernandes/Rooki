// Educação page content — Rooki website (consolidado com Escolas)

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

export interface SchoolModule {
  title: string;
  description: string;
  audience: string;
  topics: string[];
}

export interface SchoolBenefit {
  title: string;
  description: string;
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
  escolasSection: {
    headline: string;
    body: string;
    benefits: SchoolBenefit[];
    modules: {
      sectionTitle: string;
      sectionSubtitle: string;
      items: SchoolModule[];
    };
    comoContratar: {
      sectionTitle: string;
      steps: { number: number; title: string; description: string }[];
    };
  };
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
    "Golpe se combate com informação. A Rooki leva conteúdo prático sobre segurança digital pra escolas, empresas e comunidades.",

  intro: {
    headline: "Por que falar de segurança digital",
    body: "No Brasil, tentativas de golpe acontecem o tempo todo — e a maioria das vítimas não cai por falta de inteligência, cai por falta de informação. A gente acredita que saber se proteger online deveria ser tão natural quanto olhar pros dois lados antes de atravessar a rua. Por isso criamos programas educativos que são práticos, acessíveis e pensados pra gente de verdade.",
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
        "Bate-papos sobre golpes digitais, segurança online e cidadania digital. A gente adapta a linguagem pro público — de adolescentes a idosos, de funcionários a gestores.",
      format: "Presencial ou online",
      audience: "Empresas, escolas, eventos, comunidades",
      duration: "45 a 90 minutos",
      topics: [
        "O cenário atual de golpes no Brasil: o que tá rolando agora",
        "Como golpistas mexem com suas emoções: urgência, medo, ganância",
        "Pix, WhatsApp e redes sociais: onde os golpes mais acontecem",
        "O que fazer (e o que nunca fazer) quando receber algo suspeito",
        "Hábitos simples pra navegar com mais segurança no dia a dia",
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
        "Aqui a galera põe a mão na massa. Exercícios com mensagens reais, simulações de golpe e dinâmicas em grupo. O pessoal sai sabendo reconhecer golpe na prática.",
      format: "Presencial (de preferência) ou online",
      audience: "Equipes de trabalho, professores, grupos de idosos",
      duration: "2 a 4 horas",
      topics: [
        "Exercício prático: essa mensagem é golpe ou não?",
        "Como checar links, perfis e sites antes de confiar",
        "Entrando na cabeça do golpista: simulação real",
        "Criando o hábito de verificar — no trabalho e em casa",
        "Plano de ação: seus próximos passos pra se proteger",
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
        "Um programa completo de segurança digital pra escolas. Conteúdo adaptado por faixa etária, capacitação de professores e material pros pais levarem pra casa.",
      format: "Presencial e/ou online",
      audience: "Ensino fundamental e médio",
      duration: "Programa contínuo ou módulos avulsos",
      topics: [
        "Cidadania digital pra crianças e adolescentes",
        "Como reconhecer golpes e fraudes nas redes",
        "Privacidade e proteção de dados pessoais",
        "Cyberbullying, fake news e desinformação",
        "Formação de educadores em segurança digital",
        "Materiais e orientações pras famílias",
      ],
      cta: {
        text: "Ver detalhes do programa",
        href: "#programa-escolas",
      },
    },
  ],

  escolasSection: {
    headline: "Programa para Escolas — em detalhe",
    body: "Crianças e adolescentes estão online mais cedo e por mais tempo do que qualquer geração anterior. Criam contas, recebem mensagens, clicam em links e compartilham informações todos os dias — muitas vezes sem noção do risco. Professores e famílias nem sempre sabem como orientar. O programa Rooki pra Escolas existe pra preencher essa lacuna.",

    benefits: [
      {
        title: "Material atualizado com golpes reais",
        description:
          "Os golpes mudam toda semana. Nosso conteúdo acompanha o que tá acontecendo de verdade, não exemplos teóricos de dois anos atrás.",
      },
      {
        title: "Linguagem certa pra cada idade",
        description:
          "O que funciona pra uma turma de 10 anos não funciona pra adolescentes de 16. A gente adapta exemplos, dinâmicas e linguagem.",
      },
      {
        title: "Professores também aprendem",
        description:
          "Não adianta só falar com os alunos. Capacitamos os educadores pra que o tema continue presente no dia a dia da escola.",
      },
      {
        title: "Envolve as famílias",
        description:
          "Segurança digital precisa chegar em casa. Por isso incluímos encontros e materiais pra pais e responsáveis.",
      },
      {
        title: "Aprender fazendo",
        description:
          "Nada de aula teórica sobre internet. Os workshops usam exemplos reais, simulações e atividades onde os alunos praticam de verdade.",
      },
      {
        title: "Conectado com a BNCC e LGPD",
        description:
          "O programa se alinha com competências da Base Nacional Comum Curricular e com os princípios da LGPD.",
      },
    ],

    modules: {
      sectionTitle: "Módulos disponíveis",
      sectionSubtitle:
        "Cada escola monta o programa do jeito que faz sentido. Os módulos funcionam sozinhos ou integrados.",
      items: [
        {
          title: "Cidadania digital e identidade online",
          description:
            "O que significa existir na internet? Como cuidar da sua identidade, privacidade e reputação no mundo digital.",
          audience: "Alunos de 10 a 18 anos",
          topics: [
            "O que são dados pessoais e por que protegê-los",
            "Configurações de privacidade nas redes sociais",
            "Pegada digital: o que você deixa pra trás na internet",
            "Senhas seguras e autenticação em dois fatores",
          ],
        },
        {
          title: "Identificação de golpes e fraudes",
          description:
            "Como reconhecer tentativas de golpe em mensagens, links, anúncios e perfis falsos. Com exercícios usando exemplos reais.",
          audience: "Alunos de 12 a 18 anos",
          topics: [
            "Phishing: golpes por link e e-mail",
            "Engenharia social: quando o golpista manipula suas emoções",
            "Golpes por WhatsApp: número novo, Pix urgente, promoções falsas",
            "Como verificar se algo é verdadeiro antes de agir",
          ],
        },
        {
          title: "Fake news e desinformação",
          description:
            "Como identificar notícia falsa, entender por que ela se espalha e desenvolver pensamento crítico.",
          audience: "Alunos de 12 a 18 anos",
          topics: [
            "O que são fake news e por que funcionam",
            "Checagem de fatos: ferramentas e métodos simples",
            "Imagens e vídeos manipulados: como perceber",
            "Cada um tem um papel no combate à desinformação",
          ],
        },
        {
          title: "Convivência digital e cyberbullying",
          description:
            "Relações saudáveis no ambiente digital, como identificar cyberbullying e o que fazer.",
          audience: "Alunos de 10 a 15 anos",
          topics: [
            "O que é cyberbullying e como ele acontece",
            "Brincadeira vs. agressão online",
            "O que fazer se você for vítima ou testemunha",
            "Por trás de cada tela tem uma pessoa",
          ],
        },
        {
          title: "Capacitação de educadores",
          description:
            "Formação pra professores e coordenadores, com ferramentas pra trazer segurança digital pro dia a dia da escola.",
          audience: "Professores e coordenadores",
          topics: [
            "O que os alunos estão enfrentando online hoje",
            "Como encaixar segurança digital no currículo que já existe",
            "Protocolos pra lidar com incidentes digitais na escola",
            "Materiais de apoio pra uso contínuo",
          ],
        },
        {
          title: "Encontro com famílias",
          description:
            "Sessão dedicada a pais e responsáveis, com dicas práticas pra acompanhar a vida digital dos filhos sem invadir a privacidade deles.",
          audience: "Pais e responsáveis",
          topics: [
            "O que seus filhos fazem online (e o que você precisa saber)",
            "Como puxar o assunto sem gerar conflito",
            "Controle parental: o que funciona de verdade",
            "Quando se preocupar e onde buscar ajuda",
          ],
        },
      ],
    },

    comoContratar: {
      sectionTitle: "Como levar a Rooki pra sua escola",
      steps: [
        {
          number: 1,
          title: "Fala com a gente",
          description:
            "Preenche o formulário ou manda um e-mail contando sobre a escola e o que você busca. A gente responde em até 48 horas.",
        },
        {
          number: 2,
          title: "A gente planeja junto",
          description:
            "Marcamos uma conversa pra entender o perfil dos alunos, as necessidades da escola e montar a proposta certa.",
        },
        {
          number: 3,
          title: "Execução e acompanhamento",
          description:
            "Realizamos os módulos escolhidos, acompanhamos o processo e no final entregamos um relatório de impacto.",
        },
      ],
    },
  },

  materiais: {
    sectionTitle: "Materiais gratuitos",
    sectionSubtitle:
      "Conteúdo pra baixar, compartilhar e usar livremente. Pra você e pra quem tá à sua volta.",
    items: [
      {
        title: "Guia rápido: golpes no WhatsApp",
        description:
          "PDF de duas páginas com os sinais mais comuns de golpe por mensagem e o que fazer em cada caso.",
        format: "PDF",
      },
      {
        title: "Checklist de segurança digital pra famílias",
        description:
          "Lista prática de hábitos e verificações que qualquer família pode adotar pra navegar com mais segurança.",
        format: "PDF",
      },
      {
        title: "Cartilha de segurança digital pra idosos",
        description:
          "Material com linguagem acessível e exemplos visuais, feito pra quem tem menos familiaridade com tecnologia.",
        format: "PDF",
      },
      {
        title: "Infográfico: os 5 golpes mais comuns de 2025",
        description:
          "Resumo visual dos golpes que mais circulam no Brasil, com dicas rápidas de como evitar cada um.",
        format: "Imagem / PDF",
      },
      {
        title: "Kit pra professores: segurança digital em aula",
        description:
          "Planos de aula, atividades e dinâmicas pra trabalhar segurança digital com alunos do fundamental e médio.",
        format: "PDF",
      },
    ],
  },

  futureProducts: {
    sectionTitle: "Em breve",
    sectionSubtitle:
      "Estamos preparando novos formatos pra alcançar mais gente.",
    items: [
      {
        title: "Curso online: Segurança Digital Essencial",
        description:
          "Curso no seu ritmo, com vídeos curtos e exercícios práticos. Pra quem quer se aprofundar sem depender de agenda.",
        status: "Em desenvolvimento",
      },
      {
        title: "Vídeos curtos pra redes sociais",
        description:
          "Conteúdos de 60 segundos explicando golpes e dicas de proteção, feitos pra compartilhar no Instagram, TikTok e WhatsApp.",
        status: "Em planejamento",
      },
      {
        title: "Programa de multiplicadores",
        description:
          "Formação pra pessoas que querem se tornar referência em segurança digital nas suas comunidades e organizações.",
        status: "Em planejamento",
      },
    ],
  },

  ctaFinal: {
    headline: "Quer levar a Rooki pro seu evento ou escola?",
    subtitle:
      "Fala com a gente e montamos juntos o formato ideal pro seu público.",
    ctaText: "Entrar em contato",
    ctaHref: "/contato?assunto=educacao",
  },
};

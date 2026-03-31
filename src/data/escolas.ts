// Escolas page content — Rooki website

export interface SchoolBenefit {
  title: string;
  description: string;
  icon?: string;
}

export interface SchoolModule {
  title: string;
  description: string;
  audience: string;
  topics: string[];
}

export interface StakeholderSection {
  role: string;
  headline: string;
  description: string;
  benefits: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  school?: string;
}

export interface EscolasContent {
  pageTitle: string;
  pageSubtitle: string;
  intro: {
    headline: string;
    body: string;
    stats: { value: string; label: string }[];
  };
  porQue: {
    sectionTitle: string;
    benefits: SchoolBenefit[];
  };
  modules: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: SchoolModule[];
  };
  stakeholders: {
    sectionTitle: string;
    sectionSubtitle: string;
    items: StakeholderSection[];
  };
  comoContratar: {
    sectionTitle: string;
    steps: { number: number; title: string; description: string }[];
  };
  depoimentos: {
    sectionTitle: string;
    items: Testimonial[];
  };
  ctaFinal: {
    headline: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
  };
}

export const escolasContent: EscolasContent = {
  pageTitle: "Rooki para Escolas",
  pageSubtitle:
    "Um programa de segurança digital pensado para escolas que querem preparar alunos, professores e famílias para o mundo conectado.",

  intro: {
    headline: "Segurança digital é assunto de escola",
    body: "Crianças e adolescentes estão online mais cedo e por mais tempo do que qualquer geração anterior. Eles criam contas, recebem mensagens, clicam em links e compartilham informações todos os dias — muitas vezes sem saber os riscos. Ao mesmo tempo, professores e famílias nem sempre têm ferramentas para orientar sobre esses temas. O programa Rooki para Escolas existe para preencher essa lacuna: levamos educação digital prática, acessível e atualizada para dentro do ambiente escolar.",
    stats: [
      {
        value: "85%",
        label: "dos adolescentes brasileiros usam WhatsApp diariamente",
      },
      {
        value: "1 em 4",
        label: "jovens já recebeu abordagem suspeita online",
      },
      {
        value: "62%",
        label: "dos pais dizem não saber como orientar os filhos sobre segurança digital",
      },
    ],
  },

  porQue: {
    sectionTitle: "Por que trazer a Rooki para a sua escola",
    benefits: [
      {
        title: "Conteúdo atualizado e relevante",
        description:
          "Os golpes mudam o tempo todo. Nosso material é atualizado constantemente com base nas fraudes mais recentes identificadas pela Rooki.",
      },
      {
        title: "Linguagem adaptada por faixa etária",
        description:
          "O conteúdo para alunos de 10 anos é diferente do conteúdo para adolescentes de 16. Adaptamos a linguagem, os exemplos e as dinâmicas para cada público.",
      },
      {
        title: "Formação para educadores",
        description:
          "Não basta falar com os alunos. Capacitamos professores e coordenadores para que o tema continue vivo no dia a dia da escola.",
      },
      {
        title: "Envolvimento das famílias",
        description:
          "Incluímos materiais e encontros para pais e responsáveis, porque segurança digital é um assunto que precisa chegar em casa.",
      },
      {
        title: "Abordagem prática, não teórica",
        description:
          "Nossos workshops usam exemplos reais, simulações e atividades interativas. Os alunos aprendem fazendo, não apenas ouvindo.",
      },
      {
        title: "Alinhamento com a BNCC e LGPD",
        description:
          "O programa dialoga com competências da Base Nacional Comum Curricular e com os princípios da Lei Geral de Proteção de Dados.",
      },
    ],
  },

  modules: {
    sectionTitle: "Módulos do programa",
    sectionSubtitle:
      "Cada escola pode montar o programa de acordo com suas necessidades. Os módulos funcionam de forma independente ou integrada.",
    items: [
      {
        title: "Cidadania digital e identidade online",
        description:
          "O que significa existir online? Como proteger sua identidade, sua privacidade e sua reputação no mundo digital.",
        audience: "Alunos de 10 a 18 anos",
        topics: [
          "O que são dados pessoais e por que protegê-los",
          "Configurações de privacidade nas redes sociais",
          "Pegada digital: o que você deixa para trás na internet",
          "Senhas seguras e autenticação em dois fatores",
        ],
      },
      {
        title: "Identificação de golpes e fraudes",
        description:
          "Como reconhecer tentativas de golpe em mensagens, links, anúncios e perfis falsos. Com exercícios práticos usando exemplos reais.",
        audience: "Alunos de 12 a 18 anos",
        topics: [
          "Phishing: como funcionam os golpes por link e e-mail",
          "Engenharia social: quando o golpista manipula suas emoções",
          "Golpes por WhatsApp: número novo, Pix urgente, falsas promoções",
          "Como verificar se algo é verdadeiro antes de agir",
        ],
      },
      {
        title: "Fake news e desinformação",
        description:
          "Como identificar notícias falsas, entender por que elas se espalham e desenvolver pensamento crítico diante da informação.",
        audience: "Alunos de 12 a 18 anos",
        topics: [
          "O que são fake news e por que funcionam",
          "Checagem de fatos: ferramentas e métodos simples",
          "Imagens e vídeos manipulados: como identificar",
          "O papel de cada um no combate à desinformação",
        ],
      },
      {
        title: "Convivência digital e cyberbullying",
        description:
          "Como construir relações saudáveis no ambiente digital, identificar situações de cyberbullying e saber o que fazer.",
        audience: "Alunos de 10 a 15 anos",
        topics: [
          "O que é cyberbullying e como ele se manifesta",
          "A diferença entre brincadeira e agressão online",
          "O que fazer se você for vítima ou testemunha",
          "Empatia digital: por trás de cada tela tem uma pessoa",
        ],
      },
      {
        title: "Capacitação de educadores",
        description:
          "Formação específica para professores e coordenadores, com ferramentas para abordar segurança digital na rotina escolar.",
        audience: "Professores, coordenadores, orientadores",
        topics: [
          "Panorama atual: o que os alunos estão enfrentando online",
          "Como integrar segurança digital no currículo existente",
          "Protocolos para lidar com incidentes digitais na escola",
          "Recursos e materiais de apoio para uso contínuo",
        ],
      },
      {
        title: "Encontro com famílias",
        description:
          "Sessão dedicada a pais e responsáveis, com orientações práticas para acompanhar a vida digital dos filhos sem invadir a privacidade.",
        audience: "Pais e responsáveis",
        topics: [
          "O que seus filhos fazem online (e o que você precisa saber)",
          "Como conversar sobre segurança digital sem gerar conflito",
          "Configurações de controle parental que realmente funcionam",
          "Quando se preocupar e onde buscar ajuda",
        ],
      },
    ],
  },

  stakeholders: {
    sectionTitle: "Para cada público, um benefício",
    sectionSubtitle:
      "O programa foi desenhado para atender as necessidades de todos os envolvidos na comunidade escolar.",
    items: [
      {
        role: "Diretores e gestores",
        headline: "Posicione sua escola como referência em educação digital",
        description:
          "O programa fortalece o posicionamento institucional da escola e demonstra compromisso com a formação integral dos alunos.",
        benefits: [
          "Diferencial competitivo frente a outras escolas",
          "Conformidade com diretrizes da BNCC e LGPD",
          "Material de comunicação para apresentar às famílias",
          "Relatório de impacto ao final do programa",
        ],
      },
      {
        role: "Coordenadores pedagógicos",
        headline: "Conteúdo pronto e adaptável para integrar ao currículo",
        description:
          "O programa vem com planos de aula, materiais de apoio e suporte da equipe Rooki para facilitar a implementação.",
        benefits: [
          "Módulos flexíveis que se encaixam na grade existente",
          "Material didático testado e atualizado",
          "Capacitação dos professores incluída no programa",
          "Suporte contínuo da equipe Rooki",
        ],
      },
      {
        role: "Professores",
        headline: "Ferramentas práticas para abordar o tema com confiança",
        description:
          "Você não precisa ser especialista em tecnologia. O programa fornece tudo o que você precisa para facilitar as atividades com os alunos.",
        benefits: [
          "Formação prática e acessível sobre o tema",
          "Planos de aula detalhados com dinâmicas prontas",
          "Exemplos atuais que engajam os alunos",
          "Apoio para lidar com situações reais em sala de aula",
        ],
      },
      {
        role: "Famílias",
        headline: "Orientação para acompanhar seus filhos no mundo digital",
        description:
          "O programa inclui materiais e encontros para que pais e responsáveis se sintam preparados para orientar e proteger.",
        benefits: [
          "Encontros presenciais ou online com especialistas",
          "Guias práticos para usar em casa",
          "Canal de comunicação para tirar dúvidas",
          "Mais segurança e menos ansiedade sobre o uso de tecnologia",
        ],
      },
    ],
  },

  comoContratar: {
    sectionTitle: "Como levar a Rooki para a sua escola",
    steps: [
      {
        number: 1,
        title: "Entre em contato",
        description:
          "Preencha o formulário ou mande um e-mail contando sobre a sua escola e o que você busca. Respondemos em até 48 horas.",
      },
      {
        number: 2,
        title: "Planejamos juntos",
        description:
          "Agendamos uma conversa para entender o perfil dos alunos, as necessidades da escola e montar a proposta ideal.",
      },
      {
        number: 3,
        title: "Execução e acompanhamento",
        description:
          "Realizamos os módulos escolhidos com acompanhamento completo. Ao final, entregamos um relatório de impacto e recomendações.",
      },
    ],
  },

  depoimentos: {
    sectionTitle: "O que dizem sobre o programa",
    items: [
      {
        quote:
          "Os alunos saíram do workshop identificando golpes que os próprios pais não percebiam. O nível de engajamento foi impressionante.",
        author: "Carla Mendes",
        role: "Coordenadora pedagógica",
        school: "Colégio Vila Nova, São Paulo",
      },
      {
        quote:
          "Finalmente um material que fala a língua dos adolescentes. Os exemplos são reais, atuais e fazem sentido para eles.",
        author: "Ricardo Alves",
        role: "Professor de tecnologia",
        school: "Escola Parque, Rio de Janeiro",
      },
      {
        quote:
          "O encontro com as famílias foi transformador. Muitos pais vieram me agradecer depois dizendo que não tinham ideia dos riscos.",
        author: "Ana Beatriz Costa",
        role: "Diretora",
        school: "Instituto Educacional Horizontes, Belo Horizonte",
      },
    ],
  },

  ctaFinal: {
    headline: "Vamos conversar sobre a sua escola?",
    subtitle:
      "Cada escola é diferente. Conte sobre a sua realidade e montamos uma proposta sob medida.",
    ctaText: "Solicitar proposta",
    ctaHref: "/contato?assunto=escolas",
  },
};

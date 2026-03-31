// Casos de Uso page content — Rooki website

export interface UseCase {
  slug: string;
  title: string;
  description: string;
  scenario: string;
  whatRookiDoes: string[];
  tags: string[];
}

export interface CasosDeUsoContent {
  pageTitle: string;
  pageSubtitle: string;
  cases: UseCase[];
  ctaFinal: {
    headline: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
  };
}

export const casosDeUsoContent: CasosDeUsoContent = {
  pageTitle: "Casos de uso",
  pageSubtitle:
    "Veja situações reais em que a Rooki pode te ajudar a identificar golpes antes que seja tarde.",

  cases: [
    {
      slug: "link-suspeito",
      title: "Link suspeito recebido por SMS ou WhatsApp",
      description:
        "Você recebe uma mensagem com um link que parece ser de uma empresa conhecida, mas algo não parece certo. O domínio é estranho, a URL é longa demais ou veio de um número desconhecido.",
      scenario:
        "Você recebe um SMS dizendo: \"Seu pacote está retido na alfândega. Clique aqui para liberar: rastreio-correios.xyz/entrega\". O link parece dos Correios, mas o domínio não é oficial. Você copia o link e manda para a Rooki pelo WhatsApp.",
      whatRookiDoes: [
        "Analisa o domínio e identifica que não pertence aos Correios",
        "Verifica a reputação da URL em bases de dados de phishing",
        "Detecta que o site pede dados pessoais (CPF, endereço) sem motivo legítimo",
        "Classifica como alto risco e orienta a não clicar e bloquear o número",
      ],
      tags: ["phishing", "sms", "link"],
    },
    {
      slug: "print-mensagem",
      title: "Print de conversa suspeita",
      description:
        "Alguém te mandou uma mensagem estranha no WhatsApp, Instagram ou Telegram. Pode ser uma proposta de investimento, uma oferta de emprego ou uma abordagem romântica que parece boa demais.",
      scenario:
        "Um perfil desconhecido te aborda no Instagram oferecendo um trabalho de meio período que paga R$ 500 por dia para \"avaliar produtos online\". Você tira um print da conversa e manda para a Rooki.",
      whatRookiDoes: [
        "Lê o conteúdo do print e identifica padrões de golpe de tarefa/comissão",
        "Reconhece gatilhos clássicos: dinheiro fácil, pouco esforço, urgência",
        "Explica como esse tipo de golpe funciona (você paga uma \"taxa\" e nunca recebe)",
        "Classifica como alto risco e orienta a bloquear e denunciar o perfil",
      ],
      tags: ["print", "instagram", "emprego falso"],
    },
    {
      slug: "numero-novo",
      title: "\"Oi, troquei de número\" — golpe do número novo",
      description:
        "Alguém manda mensagem de um número desconhecido dizendo ser um parente ou amigo que trocou de número. Em seguida, pede dinheiro emprestado ou um Pix urgente.",
      scenario:
        "Você recebe uma mensagem: \"Oi mãe, troquei de número. Salva aí. Preciso de um favor urgente, pode fazer um Pix de R$ 800 pra mim? Depois te explico.\" Você encaminha a mensagem para a Rooki antes de responder.",
      whatRookiDoes: [
        "Identifica o padrão do golpe do \"número novo\" — um dos mais comuns no Brasil",
        "Destaca os sinais: número desconhecido, pedido urgente de dinheiro, falta de contexto",
        "Orienta a ligar para o número antigo do suposto parente para confirmar",
        "Classifica como alto risco e recomenda não enviar nenhum valor sem confirmação por voz",
      ],
      tags: ["whatsapp", "pix", "identidade falsa"],
    },
    {
      slug: "central-falsa",
      title: "Falsa central de atendimento bancário",
      description:
        "Você recebe uma ligação ou mensagem dizendo ser do seu banco. Pedem para confirmar dados, instalar um app de segurança ou fazer uma transferência para \"proteger\" sua conta.",
      scenario:
        "Você recebe uma mensagem no WhatsApp com logo do Banco do Brasil dizendo: \"Detectamos uma compra suspeita no seu cartão. Para cancelar, clique no link abaixo ou ligue para nossa central.\" Você tira um print e manda para a Rooki.",
      whatRookiDoes: [
        "Identifica que bancos não entram em contato por WhatsApp pedindo dados ou cliques em links",
        "Analisa o número do remetente e confirma que não é o canal oficial do banco",
        "Explica o golpe da falsa central: engenharia social para roubar dados de acesso",
        "Orienta a entrar em contato com o banco apenas pelos canais oficiais (app ou número do cartão)",
      ],
      tags: ["banco", "engenharia social", "phishing"],
    },
    {
      slug: "boleto-falso",
      title: "Boleto ou fatura falsa",
      description:
        "Você recebe um boleto por e-mail ou WhatsApp que parece ser de uma conta real — operadora de celular, escola, condomínio — mas os dados do beneficiário não batem.",
      scenario:
        "Você recebe por e-mail um boleto da sua operadora de internet com vencimento próximo. O layout parece real, mas o remetente do e-mail é \"fatura@operadoranet-cobranca.com\" e o beneficiário no boleto é um CNPJ que você não reconhece. Você manda o print para a Rooki.",
      whatRookiDoes: [
        "Analisa o remetente do e-mail e identifica que o domínio não é da operadora oficial",
        "Destaca a divergência no CNPJ do beneficiário",
        "Explica como funciona o golpe do boleto falso: o pagamento vai para a conta do golpista",
        "Orienta a verificar a fatura diretamente no app ou site oficial da operadora",
      ],
      tags: ["boleto", "e-mail", "fatura falsa"],
    },
    {
      slug: "oferta-irresistivel",
      title: "Oferta boa demais para ser verdade",
      description:
        "Você vê um anúncio com um preço absurdamente baixo para um produto popular. Pode ser um iPhone pela metade do preço, uma passagem aérea por R$ 99 ou um eletrodoméstico com 80% de desconto.",
      scenario:
        "No Instagram, você vê um anúncio de um iPhone 15 por R$ 1.200 em um site chamado \"megaofertas-br.shop\". O anúncio parece profissional e tem vários comentários positivos. Você copia o link e manda para a Rooki.",
      whatRookiDoes: [
        "Analisa o domínio do site e identifica que foi registrado há poucos dias",
        "Verifica que o preço está muito abaixo do valor de mercado",
        "Identifica que comentários positivos em anúncios não garantem legitimidade",
        "Classifica como alto risco e orienta a comprar apenas em lojas conhecidas e verificadas",
      ],
      tags: ["oferta falsa", "site falso", "compra online"],
    },
    {
      slug: "perfil-falso",
      title: "Perfil falso em rede social",
      description:
        "Alguém com um perfil aparentemente normal te aborda para amizade, relacionamento ou negócio. O perfil tem poucas fotos, foi criado recentemente ou tem seguidores estranhos.",
      scenario:
        "Uma pessoa com perfil no Instagram te manda mensagem elogiando suas fotos e começa a conversar. Depois de alguns dias, diz que trabalha com investimentos em criptomoedas e quer te ensinar a ganhar dinheiro. Você manda o print do perfil e da conversa para a Rooki.",
      whatRookiDoes: [
        "Identifica o padrão de golpe romântico combinado com pirâmide financeira",
        "Destaca sinais do perfil: poucas publicações, fotos genéricas, seguidores sem interação real",
        "Explica que abordagens não solicitadas oferecendo dinheiro são quase sempre golpe",
        "Orienta a não compartilhar dados pessoais e a denunciar o perfil na plataforma",
      ],
      tags: ["perfil falso", "golpe romântico", "criptomoeda"],
    },
    {
      slug: "pix-urgente",
      title: "Pedido urgente de Pix",
      description:
        "Alguém te procura com extrema urgência pedindo um Pix. Pode ser um contato real que foi hackeado ou alguém se passando por outra pessoa. A urgência é sempre o principal gatilho.",
      scenario:
        "Um amigo manda mensagem pelo WhatsApp: \"Cara, tô numa emergência. Preciso que você faça um Pix de R$ 1.500 agora, te pago amanhã sem falta. A chave é esse CPF aqui.\" A foto e o nome batem, mas o tom da mensagem é diferente do normal. Você encaminha para a Rooki.",
      whatRookiDoes: [
        "Identifica os sinais de conta hackeada: pedido urgente, valor alto, chave Pix de terceiro",
        "Destaca que a urgência forçada é o principal instrumento de golpes por Pix",
        "Orienta a ligar para o amigo (de preferência por vídeo) antes de transferir qualquer valor",
        "Recomenda avisar o amigo por outro canal que a conta dele pode ter sido comprometida",
      ],
      tags: ["pix", "whatsapp", "conta hackeada"],
    },
  ],

  ctaFinal: {
    headline: "Recebeu algo parecido?",
    subtitle:
      "Manda para a Rooki pelo WhatsApp. É rápido, gratuito e pode evitar uma dor de cabeça enorme.",
    ctaText: "Conversar no WhatsApp",
    ctaHref: "https://wa.me/5511999999999",
  },
};

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
    "Situações do dia a dia em que a Rooki pode te ajudar a não cair em golpe.",

  cases: [
    {
      slug: "link-suspeito",
      title: "Link estranho por SMS ou WhatsApp",
      description:
        "Chegou um link que parece ser de uma empresa conhecida, mas tem algo esquisito. O domínio é diferente, a URL é enorme ou veio de um número que você não conhece.",
      scenario:
        "Você recebe um SMS: \"Seu pacote está retido na alfândega. Clique aqui para liberar: rastreio-correios.xyz/entrega\". Parece dos Correios, mas o endereço não bate. Você copia o link e manda pra Rooki.",
      whatRookiDoes: [
        "Checa o domínio e percebe que não tem nada a ver com os Correios",
        "Cruza a URL com bases de phishing conhecidas",
        "Aponta que o site pede CPF e endereço sem motivo legítimo",
        "Resultado: alto risco. Orientação: não clique e bloqueie o número",
      ],
      tags: ["phishing", "sms", "link"],
    },
    {
      slug: "mensagem-suspeita",
      title: "Proposta de emprego ou investimento pelo chat",
      description:
        "Alguém te mandou uma mensagem estranha no WhatsApp, Instagram ou Telegram. Oferta de trabalho fácil, investimento milagroso, comissão garantida.",
      scenario:
        "Um perfil desconhecido te aborda no Instagram: trabalho de meio período, R$ 500 por dia, só precisa \"avaliar produtos online\". Você copia o texto e manda pra Rooki.",
      whatRookiDoes: [
        "Reconhece o padrão de golpe de tarefa/comissão no texto",
        "Aponta os gatilhos: dinheiro fácil, esforço mínimo, tom urgente",
        "Explica como funciona — em geral você paga uma \"taxa\" e nunca vê o dinheiro prometido",
        "Resultado: alto risco. Melhor bloquear e denunciar o perfil",
      ],
      tags: ["mensagem", "instagram", "emprego falso"],
    },
    {
      slug: "numero-novo",
      title: "\"Oi, troquei de número\"",
      description:
        "Mensagem de número desconhecido dizendo ser um parente ou amigo. Logo depois, vem o pedido de Pix urgente.",
      scenario:
        "Chega uma mensagem: \"Oi mãe, troquei de número. Salva aí. Preciso de um favor urgente, faz um Pix de R$ 800 pra mim? Depois te explico.\" Você encaminha pra Rooki antes de responder.",
      whatRookiDoes: [
        "Bate com o padrão do golpe do \"número novo\" — um dos mais comuns do Brasil",
        "Sinais claros: número desconhecido + pedido de dinheiro + urgência + zero contexto",
        "Recomendação imediata: ligar pro número antigo da pessoa e confirmar por voz",
        "Resultado: alto risco. Não mande nenhum valor sem falar com a pessoa de verdade",
      ],
      tags: ["whatsapp", "pix", "identidade falsa"],
    },
    {
      slug: "central-falsa",
      title: "Falsa central de atendimento do banco",
      description:
        "Ligação ou mensagem dizendo ser do seu banco. Pedem pra confirmar dados, instalar um app ou fazer uma transferência \"de segurança\".",
      scenario:
        "Mensagem no WhatsApp supostamente do Banco do Brasil: \"Detectamos uma compra suspeita no seu cartão. Para cancelar, clique no link abaixo.\" Você encaminha pra Rooki.",
      whatRookiDoes: [
        "Primeiro ponto: bancos não pedem dados nem mandam links por WhatsApp",
        "O número do remetente não bate com os canais oficiais do banco",
        "Esse é o golpe da falsa central — usam engenharia social pra roubar seus dados de acesso",
        "O certo é ignorar a mensagem e ligar pro banco pelo número que está no seu cartão",
      ],
      tags: ["banco", "engenharia social", "phishing"],
    },
    {
      slug: "boleto-falso",
      title: "Boleto ou fatura que não bate",
      description:
        "Boleto por e-mail ou WhatsApp que parece legítimo — operadora, escola, condomínio — mas os dados do beneficiário são estranhos.",
      scenario:
        "Chega um boleto por e-mail da sua operadora de internet. Só que o remetente é \"fatura@operadoranet-cobranca.com\" e o CNPJ do beneficiário você não reconhece. Você copia os dados e manda pra Rooki.",
      whatRookiDoes: [
        "O domínio do remetente não é da operadora oficial",
        "O CNPJ do beneficiário diverge do esperado — sinal clássico de boleto falso",
        "Nesse golpe, o pagamento vai direto pra conta do golpista",
        "Antes de pagar, confira a fatura no app ou site oficial da operadora",
      ],
      tags: ["boleto", "e-mail", "fatura falsa"],
    },
    {
      slug: "oferta-irresistivel",
      title: "Preço bom demais pra ser verdade",
      description:
        "Anúncio com desconto absurdo num produto popular. iPhone pela metade do preço, passagem por R$ 99, eletrodoméstico com 80% de desconto.",
      scenario:
        "Você vê no Instagram um iPhone 15 por R$ 1.200 num site chamado \"megaofertas-br.shop\". Anúncio bonito, comentários positivos. Copia o link e manda pra Rooki.",
      whatRookiDoes: [
        "O domínio foi registrado há poucos dias — site novinho, sem histórico",
        "Preço está muito abaixo do que qualquer loja legítima cobra",
        "Comentários positivos em anúncios podem ser fabricados — não são prova de nada",
        "Resultado: alto risco. Compre só em lojas que você já conhece e confia",
      ],
      tags: ["oferta falsa", "site falso", "compra online"],
    },
    {
      slug: "perfil-falso",
      title: "Perfil falso que vem conversar",
      description:
        "Alguém com perfil aparentemente normal te aborda pra amizade, namoro ou negócio. Poucas fotos, conta recente, seguidores estranhos.",
      scenario:
        "Uma pessoa no Instagram elogia suas fotos e puxa conversa. Depois de uns dias, diz que trabalha com criptomoedas e quer te \"ensinar a ganhar dinheiro\". Você copia a mensagem e manda pra Rooki.",
      whatRookiDoes: [
        "Padrão clássico de golpe romântico misturado com pirâmide financeira",
        "Os sinais estão todos ali: abordagem do nada, elogios, promessa de dinheiro fácil, roteiro ensaiado",
        "Regra geral: estranho te oferecendo dinheiro pela internet é golpe até que se prove o contrário",
        "Não compartilhe dados pessoais e denuncie o perfil na plataforma",
      ],
      tags: ["perfil falso", "golpe romântico", "criptomoeda"],
    },
    {
      slug: "pix-urgente",
      title: "Pix urgente de amigo ou parente",
      description:
        "Alguém te procura com desespero pedindo um Pix. Pode ser a conta real da pessoa, só que hackeada.",
      scenario:
        "Seu amigo manda pelo WhatsApp: \"Cara, tô numa emergência. Faz um Pix de R$ 1.500 agora, te pago amanhã. A chave é esse CPF.\" Foto e nome batem, mas o jeito de falar é diferente. Você encaminha pra Rooki.",
      whatRookiDoes: [
        "Pedido urgente + valor alto + chave Pix de terceiro = sinais fortes de conta hackeada",
        "A urgência forçada é o instrumento número 1 dos golpes por Pix",
        "Antes de qualquer coisa: liga pro amigo (vídeo, se possível) e confirma se é ele mesmo",
        "Se não conseguir falar com ele, avise por outro canal que a conta pode ter sido invadida",
      ],
      tags: ["pix", "whatsapp", "conta hackeada"],
    },
  ],

  ctaFinal: {
    headline: "Recebeu algo parecido?",
    subtitle:
      "Manda para a Rooki pelo WhatsApp. É rápido, gratuito e pode evitar uma dor de cabeça enorme.",
    ctaText: "Conversar no WhatsApp",
    ctaHref: "https://wa.me/551151999871",
  },
};

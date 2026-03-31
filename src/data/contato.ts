export interface ContatoContent {
  pageTitle: string;
  pageSubtitle: string;
  formTitle: string;
  formSubtitle: string;
  channels: {
    title: string;
    items: { label: string; value: string; href?: string }[];
  };
}

export const contatoContent: ContatoContent = {
  pageTitle: "Fale com a Rooki",
  pageSubtitle:
    "Quer levar a Rooki para sua empresa, escola ou evento? Tem uma proposta de parceria? Estamos abertos para conversar.",

  formTitle: "Envie sua mensagem",
  formSubtitle:
    "Preencha o formulário abaixo e nosso time entrará em contato em até 48h úteis.",

  channels: {
    title: "Outros canais",
    items: [
      {
        label: "WhatsApp (análise de golpes)",
        value: "Enviar mensagem",
        href: "https://wa.me/5511999999999",
      },
      {
        label: "E-mail",
        value: "contato@rooki.com.br",
        href: "mailto:contato@rooki.com.br",
      },
      {
        label: "Instagram",
        value: "@rooki",
        href: "https://instagram.com/rooki",
      },
      {
        label: "LinkedIn",
        value: "Rooki",
        href: "https://linkedin.com/company/rooki",
      },
    ],
  },
};

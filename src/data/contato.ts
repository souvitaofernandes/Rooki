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
  pageTitle: "Fale com a gente",
  pageSubtitle:
    "Quer levar a Rooki pra sua empresa, escola ou evento? Tem uma ideia de parceria? A gente tá aberto pra conversar.",

  formTitle: "Manda sua mensagem",
  formSubtitle:
    "Preenche o formulário e a gente responde em até 48h úteis.",

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

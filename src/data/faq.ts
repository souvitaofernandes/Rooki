export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface FAQContent {
  pageTitle: string;
  pageSubtitle: string;
  items: FAQItem[];
}

export const faqContent: FAQContent = {
  pageTitle: "Perguntas frequentes",
  pageSubtitle:
    "Reunimos aqui as dúvidas mais comuns sobre a Rooki. Se não encontrar sua resposta, fale com a gente.",

  items: [
    {
      category: "Produto",
      question: "A Rooki funciona pelo WhatsApp?",
      answer:
        "Sim. A Rooki funciona 100% pelo WhatsApp. Você não precisa instalar nenhum aplicativo, criar conta ou acessar nenhum site. Basta enviar uma mensagem para o nosso número e a análise começa.",
    },
    {
      category: "Produto",
      question: "A Rooki é gratuita?",
      answer:
        "Sim. A análise básica de links, mensagens e prints pelo WhatsApp é gratuita. Nosso objetivo é democratizar o acesso à proteção contra golpes digitais.",
    },
    {
      category: "Produto",
      question: "O que eu posso enviar para a Rooki?",
      answer:
        "Você pode enviar links suspeitos, prints de conversas, mensagens encaminhadas, imagens de boletos, capturas de perfis em redes sociais, e-mails suspeitos e qualquer outro conteúdo que te deixou desconfiado.",
    },
    {
      category: "Produto",
      question: "A análise da Rooki é 100% garantida?",
      answer:
        "Não. A Rooki utiliza inteligência artificial para identificar padrões de golpes conhecidos e sinais de fraude. Ela é uma ferramenta de apoio muito eficaz, mas nenhuma tecnologia é infalível. Sempre use seu bom senso e, em caso de dúvida, consulte órgãos oficiais.",
    },
    {
      category: "Produto",
      question: "A Rooki substitui a polícia, o banco ou um advogado?",
      answer:
        "Não. A Rooki é uma ferramenta informativa e educativa. Se você for vítima de golpe, registre um boletim de ocorrência, entre em contato com seu banco e, se necessário, consulte um advogado. A Rooki ajuda na prevenção e na identificação de risco, não na resolução jurídica.",
    },
    {
      category: "Privacidade",
      question: "A Rooki armazena minhas mensagens?",
      answer:
        "A Rooki processa o conteúdo enviado para gerar a análise em tempo real. Não armazenamos o conteúdo das suas mensagens de forma permanente. Dados anonimizados podem ser utilizados para melhorar nossos modelos. Consulte nossa Política de Privacidade para detalhes completos.",
    },
    {
      category: "Privacidade",
      question: "A Rooki guarda meus dados pessoais?",
      answer:
        "Mantemos apenas os dados necessários para operar o serviço, como seu número de WhatsApp para identificar a conversa. Não compartilhamos suas informações com terceiros para fins comerciais.",
    },
    {
      category: "Família",
      question: "A Rooki é para pais e famílias?",
      answer:
        "Com certeza. A Rooki foi pensada para ser acessível a qualquer pessoa. Muitas famílias adicionam a Rooki no grupo familiar — quando alguém recebe algo suspeito, encaminha direto para ela. É uma forma simples de proteger todo mundo.",
    },
    {
      category: "Família",
      question: "Posso usar a Rooki para proteger meus pais ou avós?",
      answer:
        "Sim! É um dos usos mais comuns. Você pode salvar o número da Rooki no celular dos seus pais ou avós e orientá-los a encaminhar qualquer mensagem estranha. A Rooki responde de forma simples e direta.",
    },
    {
      category: "Educação",
      question: "Vocês fazem palestras sobre golpes digitais?",
      answer:
        "Sim. Oferecemos palestras e workshops sobre segurança digital para empresas, escolas, comunidades e eventos. Os temas vão desde reconhecimento de golpes até práticas de proteção no dia a dia. Entre em contato para saber mais.",
    },
    {
      category: "Educação",
      question: "Posso levar a Rooki para minha escola?",
      answer:
        "Sim! Temos um programa específico para escolas, com conteúdo adaptado para alunos, professores e famílias. O objetivo é levar educação em segurança digital de forma prática e acessível. Visite a página Escolas ou entre em contato.",
    },
    {
      category: "Contato",
      question: "Como entro em contato com a Rooki?",
      answer:
        "Você pode nos encontrar pela página de Contato neste site, pelo nosso e-mail ou pelas redes sociais. Para análise de conteúdo suspeito, basta mandar mensagem direto no WhatsApp.",
    },
  ],
};

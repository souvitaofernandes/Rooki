export interface LegalPage {
  title: string;
  lastUpdated: string;
  sections: { heading: string; content: string }[];
}

export const privacyPolicy: LegalPage = {
  title: "Política de Privacidade",
  lastUpdated: "Março de 2026",
  sections: [
    {
      heading: "1. Introdução",
      content:
        "A Rooki respeita sua privacidade e se compromete a proteger seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos as informações que você compartilha conosco ao utilizar nossos serviços.",
    },
    {
      heading: "2. Dados que coletamos",
      content:
        "Coletamos os seguintes tipos de dados: (a) dados de contato fornecidos voluntariamente, como nome, e-mail e telefone, quando você preenche formulários em nosso site; (b) conteúdo enviado para análise via WhatsApp, como links, mensagens e imagens, processado temporariamente para gerar a análise; (c) dados técnicos como endereço IP, tipo de navegador e sistema operacional, coletados automaticamente para melhorar a experiência do usuário; (d) dados de navegação e interação com o site, coletados via cookies e ferramentas de analytics.",
    },
    {
      heading: "3. Como usamos seus dados",
      content:
        "Utilizamos seus dados para: fornecer o serviço de análise de conteúdo suspeito; enviar comunicações que você solicitou, como newsletters e alertas; melhorar nossos modelos de inteligência artificial com dados anonimizados; responder a solicitações de contato; cumprir obrigações legais.",
    },
    {
      heading: "4. Armazenamento e retenção",
      content:
        "O conteúdo enviado para análise via WhatsApp é processado em tempo real e não é armazenado de forma permanente. Dados de contato fornecidos via formulários são armazenados de forma segura enquanto houver relação ativa ou pelo período exigido por lei. Você pode solicitar a exclusão dos seus dados a qualquer momento.",
    },
    {
      heading: "5. Compartilhamento de dados",
      content:
        "Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins comerciais. Podemos compartilhar dados com prestadores de serviço que nos auxiliam na operação (como hospedagem e analytics), sempre sob obrigações de confidencialidade e proteção de dados.",
    },
    {
      heading: "6. Segurança",
      content:
        "Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, perda, destruição ou alteração. Utilizamos criptografia, controle de acesso e monitoramento contínuo.",
    },
    {
      heading: "7. Seus direitos",
      content:
        "Conforme a Lei Geral de Proteção de Dados (LGPD), você tem direito a: acessar seus dados; corrigir dados incompletos ou desatualizados; solicitar a exclusão de dados desnecessários; revogar consentimento; solicitar portabilidade dos dados. Para exercer seus direitos, entre em contato conosco pelo e-mail contato@rooki.com.br.",
    },
    {
      heading: "8. Cookies",
      content:
        "Nosso site pode utilizar cookies para melhorar a experiência de navegação e coletar dados de analytics. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.",
    },
    {
      heading: "9. Alterações nesta política",
      content:
        "Esta política pode ser atualizada periodicamente. Recomendamos que você a consulte regularmente. A data da última atualização está indicada no topo desta página.",
    },
    {
      heading: "10. Contato",
      content:
        "Para dúvidas sobre esta política ou sobre o tratamento dos seus dados, entre em contato: contato@rooki.com.br.",
    },
  ],
};

export const termsOfUse: LegalPage = {
  title: "Termos de Uso",
  lastUpdated: "Março de 2026",
  sections: [
    {
      heading: "1. Aceitação dos termos",
      content:
        "Ao utilizar os serviços da Rooki, incluindo o site e o atendimento via WhatsApp, você concorda com estes Termos de Uso. Se não concordar, não utilize nossos serviços.",
    },
    {
      heading: "2. Descrição do serviço",
      content:
        "A Rooki é uma ferramenta de inteligência artificial que analisa conteúdos digitais (links, mensagens, imagens) enviados pelo usuário via WhatsApp, com o objetivo de identificar padrões associados a golpes e fraudes digitais. O serviço é informativo e educativo.",
    },
    {
      heading: "3. Limitações do serviço",
      content:
        "A Rooki oferece análises baseadas em inteligência artificial e padrões conhecidos de fraude. Nenhuma análise é 100% garantida. A Rooki não substitui órgãos policiais, instituições financeiras, advogados ou qualquer autoridade competente. As orientações fornecidas têm caráter informativo e não constituem aconselhamento jurídico, financeiro ou profissional.",
    },
    {
      heading: "4. Responsabilidade do usuário",
      content:
        "O usuário é responsável pelo conteúdo que envia para análise. Não utilize o serviço para fins ilegais, abusivos ou que violem direitos de terceiros. O usuário deve manter seus dispositivos seguros e protegidos.",
    },
    {
      heading: "5. Propriedade intelectual",
      content:
        "Todo o conteúdo do site, incluindo textos, imagens, marca, logotipo e tecnologia, é propriedade da Rooki ou de seus licenciadores. É proibida a reprodução, distribuição ou modificação sem autorização prévia.",
    },
    {
      heading: "6. Disponibilidade",
      content:
        "A Rooki se esforça para manter o serviço disponível, mas não garante operação ininterrupta. Manutenções e atualizações podem causar indisponibilidades temporárias.",
    },
    {
      heading: "7. Limitação de responsabilidade",
      content:
        "A Rooki não se responsabiliza por danos diretos, indiretos, incidentais ou consequentes resultantes do uso ou da impossibilidade de uso do serviço. O uso é por conta e risco do usuário.",
    },
    {
      heading: "8. Alterações nos termos",
      content:
        "Estes termos podem ser atualizados a qualquer momento. O uso continuado do serviço após alterações constitui aceitação dos novos termos.",
    },
    {
      heading: "9. Foro",
      content:
        "Este contrato é regido pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de São Paulo/SP para dirimir qualquer controvérsia.",
    },
  ],
};

export const legalDisclaimer: LegalPage = {
  title: "Aviso Legal",
  lastUpdated: "Março de 2026",
  sections: [
    {
      heading: "Natureza do serviço",
      content:
        "A Rooki é uma ferramenta de inteligência artificial que oferece análises informativas sobre conteúdos digitais suspeitos. O serviço tem caráter educativo e preventivo.",
    },
    {
      heading: "Não substitui autoridades",
      content:
        "A Rooki não substitui a polícia, o Ministério Público, o Procon, instituições financeiras, advogados ou qualquer outra autoridade ou profissional competente. Se você foi vítima de golpe ou fraude, procure os órgãos oficiais.",
    },
    {
      heading: "Sem garantia de exatidão",
      content:
        "As análises da Rooki são baseadas em inteligência artificial e padrões conhecidos. Nenhuma análise é infalível. Resultados podem conter falsos positivos (identificar como golpe algo que não é) ou falsos negativos (não identificar um golpe real). Use a Rooki como uma ferramenta de apoio, nunca como fonte única de decisão.",
    },
    {
      heading: "Responsabilidade do usuário",
      content:
        "A decisão final sobre como agir diante de um conteúdo suspeito é sempre do usuário. A Rooki oferece informação e orientação, mas a responsabilidade pela ação é de quem a toma.",
    },
    {
      heading: "Conteúdo do site",
      content:
        "As informações publicadas neste site, incluindo artigos, alertas e materiais educativos, têm caráter informativo e podem ser atualizadas sem aviso prévio. A Rooki não garante a completude ou atualização permanente de todo o conteúdo.",
    },
    {
      heading: "Links externos",
      content:
        "Este site pode conter links para sites de terceiros. A Rooki não se responsabiliza pelo conteúdo, políticas de privacidade ou práticas de sites externos.",
    },
    {
      heading: "Uso educativo",
      content:
        "Os materiais educativos, palestras e workshops oferecidos pela Rooki têm caráter informativo. Não substituem formação profissional em segurança da informação, direito ou áreas correlatas.",
    },
  ],
};

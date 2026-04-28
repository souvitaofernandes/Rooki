import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Termos de Uso — Rooki",
  description: "Condições para uso do serviço Rooki.",
};

const sections: LegalSection[] = [
  {
    id: "sobre",
    title: "Sobre estes termos",
    body: (
      <>
        <p>
          Estes Termos de Uso regem o uso da Rooki, plataforma operada pela Rooki Tecnologia LTDA,
          CNPJ 49.444.116/0001-09, com sede na Rua Pedro Ramos Julio, 245, Mogi das Cruzes/SP, CEP
          08737-240 (&ldquo;Rooki&rdquo;, &ldquo;nós&rdquo;).
        </p>
        <p>
          Ao usar a Rooki — pelo WhatsApp, pelo site, ou por qualquer outro canal — você concorda
          com estes termos. Se não concordar, não use o serviço.
        </p>
      </>
    ),
  },
  {
    id: "o-que-e",
    title: "O que é a Rooki",
    body: (
      <p>
        A Rooki é um serviço que analisa mensagens, links, imagens e outros conteúdos digitais que
        você nos enviar, e devolve uma orientação sobre a probabilidade desse conteúdo ser um
        golpe ou tentativa de fraude.
      </p>
    ),
  },
  {
    id: "o-que-nao-e",
    title: "O que a Rooki NÃO é",
    body: (
      <>
        <p>Esta seção é importante. Leia com atenção.</p>
        <p>
          <strong>A Rooki não é infalível.</strong> A análise da Rooki é baseada em inteligência
          artificial e bases de dados de fraudes conhecidas. A Rooki pode errar — tanto sinalizando
          como golpe algo que não é (falso positivo), quanto deixando de sinalizar algo que é golpe
          (falso negativo).
        </p>
        <p>
          <strong>A Rooki não substitui seu julgamento.</strong> A orientação da Rooki é uma
          segunda opinião. A decisão final de clicar, pagar, responder ou compartilhar é sempre
          sua.
        </p>
        <p>
          <strong>A Rooki não é instituição financeira, autoridade policial nem perito judicial.</strong>{" "}
          Nossas análises não constituem prova judicial, parecer técnico oficial nem laudo
          pericial.
        </p>
        <p>
          <strong>A Rooki não recupera dinheiro perdido em golpes.</strong> Se você caiu em um
          golpe, podemos orientá-lo sobre os próximos passos (registrar boletim, contatar o banco,
          etc.), mas não somos responsáveis por recuperar valores nem ressarcir prejuízos.
        </p>
        <p>
          <strong>A Rooki não bloqueia mensagens nem links automaticamente.</strong> Você nos envia
          o conteúdo, a gente responde. Não interferimos no seu celular, no seu WhatsApp ou em
          qualquer outra plataforma.
        </p>
      </>
    ),
  },
  {
    id: "como-usar",
    title: "Como usar",
    body: (
      <p>
        Para usar a Rooki, basta encaminhar a mensagem suspeita pelo nosso canal no WhatsApp. A
        primeira interação faz seu cadastro automaticamente, com seu nome (informado por você),
        seu e-mail (informado por você) e seu número de telefone (capturado pela própria conexão).
      </p>
    ),
  },
  {
    id: "idade",
    title: "Idade mínima",
    body: (
      <p>
        Você precisa ter 18 anos ou mais para usar a Rooki. Ao usar o serviço, você declara que tem
        essa idade.
      </p>
    ),
  },
  {
    id: "cadastro",
    title: "Cadastro e veracidade",
    body: (
      <p>
        Você se compromete a fornecer informações verdadeiras no cadastro. Cadastros com dados
        falsos podem ser suspensos sem aviso prévio.
      </p>
    ),
  },
  {
    id: "conteudo",
    title: "Conteúdo enviado por você",
    body: (
      <>
        <p>Ao enviar conteúdo para análise (texto, link, imagem, áudio), você declara que:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>O envio é voluntário</li>
          <li>Você tem direito de compartilhar esse conteúdo com a Rooki</li>
          <li>O conteúdo não viola direitos de terceiros nem leis aplicáveis</li>
        </ul>
        <p>
          A Rooki processa esse conteúdo conforme descrito na nossa Política de Privacidade.
        </p>
      </>
    ),
  },
  {
    id: "limitacao",
    title: "Limitação de responsabilidade",
    body: (
      <>
        <p>Esta seção também é importante.</p>
        <p>
          A Rooki é fornecida &ldquo;no estado em que se encontra&rdquo;. Fazemos o melhor possível
          para que a análise seja precisa e útil, mas não garantimos:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Acerto em 100% dos casos</li>
          <li>Disponibilidade ininterrupta do serviço</li>
          <li>Tempo de resposta específico</li>
          <li>Compatibilidade com qualquer dispositivo ou plataforma</li>
        </ul>
        <p>A Rooki não se responsabiliza por:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Prejuízos decorrentes de você ter clicado, pago ou compartilhado conteúdo após análise
            da Rooki, ainda que a análise tenha indicado risco
          </li>
          <li>
            Prejuízos decorrentes de a Rooki ter classificado equivocadamente um conteúdo (falso
            positivo ou falso negativo)
          </li>
          <li>Indisponibilidade temporária do serviço</li>
          <li>Conteúdo de terceiros mencionado em nossas respostas (links, sites, etc.)</li>
          <li>Perda de dados causada por falha em sistemas de terceiros</li>
        </ul>
        <p>
          A responsabilidade total da Rooki, em qualquer hipótese, fica limitada ao valor pago por
          você pelo serviço nos últimos 12 meses — ou a R$ 100,00 (cem reais), o que for menor —
          salvo nos casos em que a lei vedar essa limitação.
        </p>
      </>
    ),
  },
  {
    id: "propriedade",
    title: "Propriedade intelectual",
    body: (
      <>
        <p>
          Todo o sistema, marca, logo, base de conhecimento, taxonomia de golpes e demais ativos da
          Rooki são de propriedade da Rooki Tecnologia LTDA. Você não pode copiar, distribuir,
          fazer engenharia reversa, ou usar comercialmente esses ativos sem autorização expressa
          por escrito.
        </p>
        <p>
          O conteúdo que você envia continua sendo seu. Você nos concede uma licença limitada para
          processar esse conteúdo conforme a Política de Privacidade.
        </p>
      </>
    ),
  },
  {
    id: "conduta",
    title: "Conduta proibida",
    body: (
      <>
        <p>Você se compromete a não:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Usar a Rooki para fins ilícitos</li>
          <li>Tentar sobrecarregar, hackear, fazer engenharia reversa ou comprometer a segurança do serviço</li>
          <li>Enviar volume massivo de mensagens com objetivo de teste, spam ou ataque</li>
          <li>Usar a Rooki para validar golpes que você mesmo está aplicando ou planejando aplicar</li>
          <li>Fingir ser outra pessoa ou usar dados de terceiros sem autorização</li>
          <li>Reproduzir, redistribuir ou comercializar as respostas da Rooki como se fossem suas</li>
        </ul>
      </>
    ),
  },
  {
    id: "suspensao",
    title: "Suspensão e encerramento",
    body: (
      <>
        <p>
          Podemos suspender ou encerrar seu acesso a qualquer momento, sem aviso prévio, se
          identificarmos violação destes termos, atividade suspeita ou risco à plataforma.
        </p>
        <p>
          Você pode encerrar seu cadastro a qualquer momento, pelos canais da seção 10 da Política
          de Privacidade.
        </p>
      </>
    ),
  },
  {
    id: "mudancas",
    title: "Mudanças nestes termos",
    body: (
      <p>
        Podemos atualizar estes termos periodicamente. Mudanças relevantes serão comunicadas por
        e-mail e/ou pelo chatbot, com pelo menos 15 dias de antecedência. O uso continuado do
        serviço após a mudança implica aceitação dos novos termos.
      </p>
    ),
  },
  {
    id: "foro",
    title: "Lei aplicável e foro",
    body: (
      <p>
        Estes termos são regidos pelas leis brasileiras. Qualquer conflito será resolvido no foro
        da comarca de Mogi das Cruzes/SP, salvo disposição legal em contrário.
      </p>
    ),
  },
  {
    id: "contato",
    title: "Contato",
    body: (
      <>
        <p>Dúvidas, sugestões ou reclamações:</p>
        <p>
          <a className="text-primary hover:underline" href="mailto:contato@rooki.com.br">
            contato@rooki.com.br
          </a>
        </p>
      </>
    ),
  },
];

export default function TermosPage() {
  return (
    <LegalLayout title="Termos de Uso" updatedAt="28 de abril de 2026" sections={sections} />
  );
}

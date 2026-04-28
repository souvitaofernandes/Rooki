import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidade — Rooki",
  description: "Como a Rooki trata seus dados pessoais.",
};

const sections: LegalSection[] = [
  {
    id: "quem-somos",
    title: "Quem somos",
    body: (
      <>
        <p>
          Esta Política de Privacidade explica como a Rooki Tecnologia LTDA, inscrita no CNPJ sob
          o nº 49.444.116/0001-09, com sede na Rua Pedro Ramos Julio, 245, Mogi das Cruzes/SP, CEP
          08737-240, doravante referida como &ldquo;Rooki&rdquo;, trata os dados pessoais de seus
          usuários.
        </p>
        <p>
          A Rooki é uma plataforma que ajuda pessoas a identificar mensagens suspeitas e potenciais
          golpes digitais antes de tomarem decisões prejudiciais.
        </p>
        <p>
          Levamos privacidade a sério. Coletamos o mínimo necessário, somos diretos sobre o que
          fazemos com seus dados, e damos a você controle real sobre eles.
        </p>
      </>
    ),
  },
  {
    id: "quais-dados",
    title: "Quais dados coletamos",
    body: (
      <>
        <p>
          <strong>2.1. Dados de cadastro.</strong> Para usar a Rooki, coletamos:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Nome</li>
          <li>E-mail</li>
          <li>Número de telefone</li>
        </ul>
        <p>
          <strong>2.2. Conteúdo enviado por você.</strong> Quando você encaminha uma mensagem para
          análise (texto, link, captura de tela ou outro conteúdo digital), esse conteúdo é
          processado pela Rooki e por sistemas de inteligência artificial parceiros (ver seção 5).
        </p>
        <p>
          <strong>2.3. Dados técnicos.</strong> Coletamos automaticamente, ao usar nosso serviço:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Data e horário da interação</li>
          <li>Identificador do número de WhatsApp utilizado</li>
          <li>Logs técnicos necessários ao funcionamento e segurança da plataforma</li>
        </ul>
        <p>
          Não coletamos: dados bancários, senhas, números de documento (CPF, RG, CNH), dados de
          localização precisa, dados de saúde, ou qualquer dado pessoal sensível na forma definida
          pela LGPD.
        </p>
      </>
    ),
  },
  {
    id: "como-usamos",
    title: "Como usamos os dados",
    body: (
      <>
        <p>Usamos seus dados exclusivamente para:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Operar o serviço da Rooki (analisar mensagens, devolver orientação)</li>
          <li>Enviar comunicações relacionadas ao serviço (suporte, alertas, mudanças)</li>
          <li>Aprimorar nossa capacidade de detectar golpes, de forma anonimizada e agregada</li>
          <li>Cumprir obrigações legais</li>
        </ul>
        <p>
          Não vendemos seus dados. Não compartilhamos com terceiros para fins de marketing. Não
          usamos seus dados para perfilamento publicitário.
        </p>
      </>
    ),
  },
  {
    id: "base-legal",
    title: "Base legal (LGPD)",
    body: (
      <>
        <p>
          O tratamento dos seus dados se baseia nas seguintes hipóteses legais previstas no art. 7º
          da Lei nº 13.709/2018 (LGPD):
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Execução de contrato</strong> (art. 7º, V): dados necessários para prestar o
            serviço que você contratou ao se cadastrar
          </li>
          <li>
            <strong>Legítimo interesse</strong> (art. 7º, IX): análise anonimizada para evolução do
            nosso sistema de detecção
          </li>
          <li>
            <strong>Cumprimento de obrigação legal</strong> (art. 7º, II): quando exigido por lei
            ou autoridade competente
          </li>
          <li>
            <strong>Consentimento</strong> (art. 7º, I): para comunicações que você optar por
            receber
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "compartilhamento",
    title: "Com quem compartilhamos seus dados",
    body: (
      <>
        <p>
          A Rooki utiliza serviços de inteligência artificial de terceiros para analisar as
          mensagens enviadas. Especificamente:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>OpenAI (operada pela OpenAI, L.L.C., com sede nos Estados Unidos)</li>
          <li>Anthropic (operada pela Anthropic, PBC, com sede nos Estados Unidos)</li>
        </ul>
        <p>
          Quando você envia uma mensagem para análise, o conteúdo dessa mensagem é processado por
          essas APIs. Isso configura transferência internacional de dados pessoais, conforme art.
          33 da LGPD.
        </p>
        <p>
          Essas empresas operam sob políticas próprias de privacidade e segurança e oferecem
          garantias adequadas de proteção. As mensagens enviadas via API não são utilizadas por
          essas empresas para treinamento de seus modelos, conforme termos contratuais aplicáveis a
          clientes pagantes (modo &ldquo;API standard&rdquo;).
        </p>
        <p>Além desses parceiros de IA, podemos compartilhar dados:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Com nosso provedor de infraestrutura em nuvem (ver seção 7)</li>
          <li>Com autoridades públicas, mediante ordem judicial ou requisição legal formal</li>
          <li>
            Em caso de fusão, aquisição ou venda da Rooki, hipótese em que você será previamente
            comunicado
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "retencao",
    title: "Por quanto tempo guardamos seus dados",
    body: (
      <>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            <strong>Dados de cadastro:</strong> enquanto sua conta estiver ativa e por até 5 anos
            após o encerramento, conforme prazos legais aplicáveis (Código de Defesa do Consumidor,
            art. 27, e legislação fiscal)
          </li>
          <li>
            <strong>Conteúdo de mensagens analisadas:</strong> processado em tempo real e mantido
            por até 90 dias para fins de auditoria, suporte e melhoria do serviço, salvo exceções
            previstas em lei
          </li>
          <li>
            <strong>Logs técnicos:</strong> mantidos por 6 meses para fins de segurança da
            informação
          </li>
          <li>
            <strong>Dados anonimizados:</strong> podem ser mantidos indefinidamente, pois deixam de
            ser dados pessoais conforme art. 12 da LGPD
          </li>
        </ul>
        <p>Após esses prazos, os dados são eliminados de forma segura ou anonimizados.</p>
      </>
    ),
  },
  {
    id: "onde-ficam",
    title: "Onde seus dados ficam",
    body: (
      <>
        <p>
          Nossa infraestrutura é hospedada na Google Cloud Platform, em datacenter localizado no
          Brasil (região São Paulo). Os dados de cadastro e conteúdos enviados são armazenados
          nessa infraestrutura.
        </p>
        <p>
          As mensagens enviadas para análise são processadas por APIs de inteligência artificial
          sediadas nos Estados Unidos (ver seção 5), o que configura transferência internacional de
          dados.
        </p>
        <p>
          A Rooki adota essa arquitetura por entender que os benefícios da análise por IA superam o
          risco da transferência, desde que respeitadas as garantias previstas na LGPD.
        </p>
      </>
    ),
  },
  {
    id: "protecao",
    title: "Como protegemos seus dados",
    body: (
      <>
        <p>Adotamos medidas técnicas e administrativas razoáveis para proteger seus dados, incluindo:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Criptografia em trânsito (HTTPS/TLS)</li>
          <li>Controle de acesso baseado em função</li>
          <li>Monitoramento de segurança</li>
          <li>Princípio da minimização (coletamos só o necessário)</li>
        </ul>
        <p>
          Nenhum sistema é 100% seguro. Em caso de incidente que possa gerar risco ou dano
          relevante a você, comunicaremos a Autoridade Nacional de Proteção de Dados (ANPD) e os
          titulares afetados, conforme art. 48 da LGPD.
        </p>
      </>
    ),
  },
  {
    id: "direitos",
    title: "Seus direitos",
    body: (
      <>
        <p>Você tem direito, a qualquer momento, a:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Confirmar que tratamos seus dados</li>
          <li>Acessar os dados que temos sobre você</li>
          <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
          <li>
            Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em
            desconformidade com a LGPD
          </li>
          <li>Solicitar a portabilidade dos seus dados a outro fornecedor</li>
          <li>Solicitar a eliminação de dados tratados com base em consentimento</li>
          <li>Obter informação sobre com quem compartilhamos seus dados</li>
          <li>Revogar consentimento a qualquer momento</li>
          <li>Apresentar reclamação à ANPD</li>
        </ul>
      </>
    ),
  },
  {
    id: "exercer",
    title: "Como exercer seus direitos",
    body: (
      <>
        <p>Você pode exercer qualquer um dos direitos acima:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>
            Por e-mail:{" "}
            <a className="text-primary hover:underline" href="mailto:privacidade@rooki.com.br">
              privacidade@rooki.com.br
            </a>
          </li>
          <li>
            Pelo próprio chatbot da Rooki, enviando o comando &ldquo;apagar meus dados&rdquo; ou
            &ldquo;meus dados&rdquo;
          </li>
        </ul>
        <p>Responderemos em até 15 dias da solicitação, conforme prazo da LGPD.</p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        A Rooki utiliza cookies estritamente necessários ao funcionamento do site. Você pode
        gerenciar cookies pelo seu navegador.
      </p>
    ),
  },
  {
    id: "criancas",
    title: "Crianças e adolescentes",
    body: (
      <p>
        A Rooki não é direcionada a menores de 18 anos e não coleta intencionalmente dados de
        menores. Caso identifiquemos cadastro de menor, eliminaremos os dados imediatamente. Pais
        ou responsáveis que identificarem essa situação podem nos contatar pelos canais da seção
        10.
      </p>
    ),
  },
  {
    id: "dpo",
    title: "Encarregado pelo Tratamento de Dados (DPO)",
    body: (
      <>
        <p>
          A Rooki conta com Encarregado pelo Tratamento de Dados Pessoais conforme exigido pelo
          art. 41 da LGPD.
        </p>
        <p>
          Encarregado: Vítor Fernandes (Vitão), CEO e profissional com atuação em proteção de
          dados.
        </p>
        <p>
          E-mail para contato:{" "}
          <a className="text-primary hover:underline" href="mailto:dpo@rooki.com.br">
            dpo@rooki.com.br
          </a>
        </p>
        <p>
          Você pode contatar o Encarregado a qualquer momento para exercer seus direitos como
          titular de dados, esclarecer dúvidas sobre o tratamento dos seus dados ou apresentar
          reclamações.
        </p>
      </>
    ),
  },
  {
    id: "mudancas",
    title: "Mudanças nesta política",
    body: (
      <p>
        Esta política pode ser atualizada periodicamente. Sempre que houver mudança relevante,
        comunicaremos por e-mail e/ou pelo próprio chatbot, com pelo menos 15 dias de antecedência.
        A versão vigente sempre estará disponível em rooki.com.br/privacidade.
      </p>
    ),
  },
  {
    id: "foro",
    title: "Foro",
    body: (
      <p>
        Esta política é regida pelas leis brasileiras, especialmente pela Lei nº 13.709/2018
        (LGPD). Eventuais conflitos serão resolvidos no foro da comarca de Mogi das Cruzes/SP,
        salvo disposição legal em contrário.
      </p>
    ),
  },
];

export default function PrivacidadePage() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      updatedAt="28 de abril de 2026"
      sections={sections}
    />
  );
}

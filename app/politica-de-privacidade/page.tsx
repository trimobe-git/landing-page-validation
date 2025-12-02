import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidade - Campota',
  description: 'Política de Privacidade do sistema Campota de documentação de visitas técnicas',
};

export default function PoliticaDePrivacidade() {
  return (
    <div className="min-h-screen bg-[#02152b] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 max-w-4xl">
        {/* Cabeçalho */}
        <div className="mb-8 md:mb-12">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 text-[#e8ff80] hover:text-[#d4e670] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar para página inicial
          </Link>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Política de Privacidade
          </h1>
          <p className="text-gray-400">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </div>

        {/* Conteúdo */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">1. Introdução</h2>
            <p className="text-gray-300 leading-relaxed">
              O Campota respeita sua privacidade e está comprometido em proteger seus dados pessoais.
              Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos
              suas informações quando você utiliza nosso serviço de documentação de visitas técnicas
              via WhatsApp.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">2. Informações que Coletamos</h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.1 Informações Fornecidas por Você</h3>
            <ul className="text-gray-300 space-y-2 ml-6 mb-4">
              <li><strong className="text-white">Número de telefone:</strong> Coletado automaticamente através do WhatsApp para identificação e comunicação</li>
              <li><strong className="text-white">Conteúdo de mensagens:</strong> Textos, áudios e fotos enviados para geração de relatórios</li>
              <li><strong className="text-white">Informações de pagamento:</strong> Dados relacionados a transações via PIX (quando aplicável)</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.2 Informações Coletadas Automaticamente</h3>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li><strong className="text-white">Dados de uso:</strong> Data e hora de interações, tipos de conteúdo enviado</li>
              <li><strong className="text-white">Metadados:</strong> Informações técnicas sobre os arquivos enviados (formato, tamanho, data de criação)</li>
              <li><strong className="text-white">Logs do sistema:</strong> Registros de atividades para fins de segurança e melhoria do serviço</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">3. Como Usamos suas Informações</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Utilizamos suas informações para:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li><strong className="text-white">Prestação do serviço:</strong> Processar seu conteúdo e gerar relatórios personalizados</li>
              <li><strong className="text-white">Processamento via IA:</strong> Analisar áudios, textos e imagens para criar documentação profissional</li>
              <li><strong className="text-white">Comunicação:</strong> Enviar notificações, confirmações e suporte via WhatsApp</li>
              <li><strong className="text-white">Pagamentos:</strong> Processar transações e gerenciar créditos</li>
              <li><strong className="text-white">Melhorias:</strong> Aprimorar nossos algoritmos e qualidade dos relatórios</li>
              <li><strong className="text-white">Segurança:</strong> Prevenir fraudes e garantir a integridade do sistema</li>
              <li><strong className="text-white">Cumprimento legal:</strong> Atender requisitos legais e regulatórios</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Compartilhamento de Informações</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              <strong className="text-white">Não vendemos seus dados pessoais.</strong> Compartilhamos informações apenas quando:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li><strong className="text-white">Prestadores de serviço:</strong> Com fornecedores de IA (OpenAI) e infraestrutura necessários para operação do serviço</li>
              <li><strong className="text-white">WhatsApp:</strong> Através da plataforma WhatsApp Business API para comunicação</li>
              <li><strong className="text-white">Pagamentos:</strong> Com processadores de pagamento PIX para transações financeiras</li>
              <li><strong className="text-white">Requisitos legais:</strong> Quando exigido por lei, ordem judicial ou autoridades competentes</li>
              <li><strong className="text-white">Proteção de direitos:</strong> Para proteger nossos direitos, segurança ou propriedade</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">5. Armazenamento e Segurança</h2>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.1 Armazenamento de Dados</h3>
            <ul className="text-gray-300 space-y-2 ml-6 mb-4">
              <li>Seus dados são armazenados em servidores seguros localizados no Brasil</li>
              <li>Mantemos seus dados apenas pelo tempo necessário para prestação do serviço</li>
              <li>Conteúdo de mensagens é mantido por até 90 dias após a geração do relatório</li>
              <li>Relatórios gerados ficam disponíveis por 90 dias</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mb-3 mt-4">5.2 Medidas de Segurança</h3>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li>Criptografia de dados em trânsito e em repouso</li>
              <li>Acesso restrito a informações pessoais</li>
              <li>Monitoramento contínuo de segurança</li>
              <li>Backups regulares e seguros</li>
              <li>Conformidade com LGPD (Lei Geral de Proteção de Dados)</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">6. Seus Direitos (LGPD)</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              De acordo com a LGPD, você tem direito a:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li><strong className="text-white">Acesso:</strong> Confirmar se processamos seus dados e solicitar cópia</li>
              <li><strong className="text-white">Correção:</strong> Solicitar correção de dados incompletos ou desatualizados</li>
              <li><strong className="text-white">Exclusão:</strong> Solicitar a exclusão de seus dados pessoais</li>
              <li><strong className="text-white">Portabilidade:</strong> Solicitar seus dados em formato estruturado</li>
              <li><strong className="text-white">Revogação:</strong> Revogar consentimento a qualquer momento</li>
              <li><strong className="text-white">Oposição:</strong> Opor-se ao processamento de seus dados</li>
              <li><strong className="text-white">Informação:</strong> Saber com quem compartilhamos seus dados</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              Para exercer esses direitos, entre em contato através do email:{' '}
              <a href="mailto:contato@trimobe.com" className="text-[#e8ff80] hover:text-[#d4e670] transition-colors font-semibold">
                contato@trimobe.com
              </a>
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">7. Uso de IA e Processamento de Dados</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              O Campota utiliza tecnologia de Inteligência Artificial para:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6 mb-4">
              <li>Transcrever áudios em texto</li>
              <li>Analisar e descrever imagens</li>
              <li>Organizar e formatar informações em relatórios</li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Importante:</strong> Utilizamos serviços de terceiros (como OpenAI) para
              processamento via IA. Esses provedores têm suas próprias políticas de privacidade e podem processar
              dados em servidores fora do Brasil. Não utilizamos seus dados para treinar modelos de IA de terceiros.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">8. Cookies e Tecnologias Similares</h2>
            <p className="text-gray-300 leading-relaxed">
              Como o Campota funciona exclusivamente pelo WhatsApp, não utilizamos cookies em navegadores.
              No entanto, a plataforma WhatsApp pode usar suas próprias tecnologias de rastreamento conforme
              sua política de privacidade.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">9. Menores de Idade</h2>
            <p className="text-gray-300 leading-relaxed">
              Nosso serviço não é direcionado a menores de 18 anos. Não coletamos intencionalmente
              informações de menores. Se você é pai ou responsável e acredita que seu filho nos forneceu
              dados pessoais, entre em contato para que possamos removê-los.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">10. Transferência Internacional de Dados</h2>
            <p className="text-gray-300 leading-relaxed">
              Alguns de nossos prestadores de serviço (como serviços de IA) podem estar localizados
              fora do Brasil. Garantimos que essas transferências são realizadas com medidas adequadas
              de proteção conforme a LGPD.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">11. Alterações nesta Política</h2>
            <p className="text-gray-300 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre
              mudanças significativas através do WhatsApp. A data da "Última atualização" no topo
              indica quando esta política foi revisada pela última vez.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">12. Encarregado de Dados (DPO)</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Para questões relacionadas à proteção de dados pessoais, você pode entrar em contato
              com nosso Encarregado de Dados:
            </p>
            <p className="text-[#e8ff80] font-semibold">
              Email: <a href="mailto:contato@trimobe.com" className="hover:text-[#d4e670] transition-colors">
                contato@trimobe.com
              </a>
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              Assunto: Proteção de Dados - LGPD
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">13. Contato</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Para dúvidas, sugestões ou solicitações relacionadas a esta Política de Privacidade:
            </p>
            <div className="space-y-2">
              <p className="text-[#e8ff80] font-semibold">
                Email: <a href="mailto:contato@trimobe.com" className="hover:text-[#d4e670] transition-colors">
                  contato@trimobe.com
                </a>
              </p>
              <p className="text-gray-300">
                Respondemos todas as solicitações em até 15 dias úteis.
              </p>
            </div>
          </div>

          <div className="bg-[#e8ff80]/10 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-[#e8ff80]/30">
            <h2 className="text-2xl font-bold text-[#e8ff80] mb-4">Compromisso com sua Privacidade</h2>
            <p className="text-gray-300 leading-relaxed">
              O Campota está comprometido em proteger sua privacidade e tratar seus dados com
              transparência e segurança. Utilizamos suas informações exclusivamente para fornecer
              o melhor serviço possível de documentação de visitas técnicas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

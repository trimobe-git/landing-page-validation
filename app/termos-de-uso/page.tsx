import Link from 'next/link';

export const metadata = {
  title: 'Termos de Uso - Campota',
  description: 'Termos de Uso do sistema Campota de documentação de visitas técnicas',
};

export default function TermosDeUso() {
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
            Termos de Uso
          </h1>
          <p className="text-gray-400">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
        </div>

        {/* Conteúdo */}
        <div className="prose prose-invert prose-lg max-w-none">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-300 leading-relaxed">
              Ao acessar e utilizar o Campota, você concorda com estes Termos de Uso e todas as leis
              e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido
              de usar ou acessar este serviço.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">2. Descrição do Serviço</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              O Campota é um sistema de documentação de visitas técnicas que funciona 100% pelo WhatsApp.
              O serviço permite que usuários:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li>Enviem observações por áudio, foto ou texto durante visitas técnicas</li>
              <li>Trabalhem offline e sincronizem quando houver internet</li>
              <li>Solicitem relatórios formatados por IA com base nas informações enviadas</li>
              <li>Recebam relatórios profissionais em formato PDF</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">3. Cadastro e Uso do Serviço</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              O Campota não requer cadastro prévio. Para utilizar o serviço:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li>Basta iniciar uma conversa pelo WhatsApp no número fornecido</li>
              <li>Você receberá 2 relatórios gratuitos para teste</li>
              <li>Após o período de teste, você pode adquirir créditos via PIX</li>
              <li>Não é necessário fornecer cartão de crédito ou dados bancários</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">4. Pagamentos e Reembolsos</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              <strong className="text-white">4.1 Teste Gratuito:</strong> Novos usuários recebem 2 relatórios gratuitos
              sem necessidade de pagamento ou cadastro de cartão.
            </p>
            <p className="text-gray-300 leading-relaxed mb-3">
              <strong className="text-white">4.2 Créditos:</strong> Após o teste, você pode adquirir créditos para
              geração de relatórios. Os créditos têm validade de 90 dias a partir da data de compra.
            </p>
            <p className="text-gray-300 leading-relaxed mb-3">
              <strong className="text-white">4.3 Forma de Pagamento:</strong> O pagamento é realizado exclusivamente
              via PIX através do próprio WhatsApp.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">4.4 Reembolsos:</strong> Não oferecemos reembolso de créditos já adquiridos,
              exceto em casos de falha técnica comprovada do sistema.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">5. Uso Aceitável</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Ao utilizar o Campota, você concorda em:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li>Usar o serviço apenas para fins legítimos e profissionais</li>
              <li>Não enviar conteúdo ilegal, ofensivo ou que viole direitos de terceiros</li>
              <li>Não tentar comprometer a segurança ou disponibilidade do serviço</li>
              <li>Não usar o serviço para spam ou comunicações em massa não autorizadas</li>
              <li>Respeitar as políticas de uso do WhatsApp</li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">6. Propriedade Intelectual</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              <strong className="text-white">6.1 Conteúdo do Usuário:</strong> Você mantém todos os direitos sobre
              o conteúdo que envia (fotos, áudios, textos). Ao usar o serviço, você nos concede uma licença limitada
              para processar esse conteúdo e gerar relatórios.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">6.2 Conteúdo do Campota:</strong> O sistema, marca, logotipo e todos
              os materiais relacionados ao Campota são de propriedade exclusiva e protegidos por direitos autorais.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">7. Limitação de Responsabilidade</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              O Campota é fornecido "como está". Não garantimos que:
            </p>
            <ul className="text-gray-300 space-y-2 ml-6">
              <li>O serviço estará sempre disponível ou livre de erros</li>
              <li>Os relatórios gerados estarão 100% isentos de imprecisões</li>
              <li>O serviço atenderá todas as suas necessidades específicas</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-3">
              Não nos responsabilizamos por danos indiretos, incidentais ou consequenciais decorrentes
              do uso ou impossibilidade de uso do serviço.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">8. Modificações no Serviço</h2>
            <p className="text-gray-300 leading-relaxed">
              Reservamos o direito de modificar, suspender ou descontinuar o Campota a qualquer momento,
              com ou sem aviso prévio. Não seremos responsáveis por qualquer modificação, suspensão ou
              descontinuação do serviço.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">9. Alterações nos Termos</h2>
            <p className="text-gray-300 leading-relaxed">
              Podemos atualizar estes Termos de Uso periodicamente. Continuando a usar o serviço após
              alterações, você concorda com os novos termos. Recomendamos revisar esta página regularmente.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">10. Lei Aplicável</h2>
            <p className="text-gray-300 leading-relaxed">
              Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer
              disputa será submetida ao foro da comarca de São Paulo, SP.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 mb-6 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-4">11. Contato</h2>
            <p className="text-gray-300 leading-relaxed mb-3">
              Para questões sobre estes Termos de Uso, entre em contato conosco:
            </p>
            <p className="text-[#e8ff80] font-semibold">
              Email: <a href="mailto:contato@trimobe.com" className="hover:text-[#d4e670] transition-colors">
                contato@trimobe.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

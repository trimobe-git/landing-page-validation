'use client';

import { trackCTAClick } from '@/lib/gtm';

export default function Pricing() {

  return (
    <section id="pricing" className="py-12 md:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
            Comece sem compromisso
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            Teste grátis. Pague só quando precisar. Zero burocracia.
          </p>
        </div>

        {/* Card Único Centralizado */}
        <div className="max-w-lg mx-auto mb-8 md:mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-10 border-2 border-[#e8ff80] shadow-2xl shadow-[#e8ff80]/20 transition-all duration-300">

            {/* Headline do Card */}
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-block bg-[#e8ff80] text-[#02152b] px-4 py-1.5 rounded-full text-sm font-bold mb-3 md:mb-4">
                Comece Agora
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3 leading-tight">
                Comece grátis. Pague só quando precisar.
              </h3>
              <p className="text-gray-300 text-base">
                2 relatórios gratuitos para você testar
              </p>
            </div>

            {/* Benefícios */}
            <div className="space-y-2.5 md:space-y-3 mb-6 md:mb-8">
              {[
                'Tudo pelo WhatsApp',
                'Sem cadastro',
                'Sem cartão de crédito',
                'Sem assinaturas ou mensalidades',
                'Pagamento só via PIX',
                'Créditos válidos por 90 dias'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 md:gap-3">
                  <svg
                    className="w-5 h-5 text-[#e8ff80] flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white text-base leading-snug">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Principal */}
            <a
              href="https://wa.me/5511920483501?text=oi"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick('comecar_whatsapp', 'pricing')}
              className="block w-full text-center py-4 rounded-lg font-bold text-base bg-[#e8ff80] text-[#02152b] hover:bg-[#d4e670] shadow-lg active:scale-95 md:hover:scale-[1.02] transition-all duration-300 mb-5 md:mb-6"
            >
              Começar pelo WhatsApp
            </a>

            {/* Informação Secundária de Preços */}
            <div className="text-center pt-5 md:pt-6 border-t border-white/10">
              <p className="text-sm md:text-sm text-gray-400 leading-relaxed">
                Depois do teste: <span className="text-white font-semibold">R$ 10</span>/relatório avulso ou pacotes de <span className="text-white font-semibold">10</span> e <span className="text-white font-semibold">25 relatórios</span> com desconto progressivo
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

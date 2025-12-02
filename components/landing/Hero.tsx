'use client';

import { trackCTAClick } from '@/lib/gtm';

export default function Hero() {
  return (
    <section className="relative flex items-center py-12 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-[2.5rem] leading-[1.15] md:text-5xl lg:text-6xl font-bold text-white mb-5 md:mb-6">
            WhatsApp no Campo.{' '}
            <span className="block mt-1 md:mt-2 bg-gradient-to-r from-[#e8ff80] to-[#d4e670] bg-clip-text text-transparent">
              Relatório na Mão.
            </span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-7 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforme notas de campo em relatórios profissionais sem digitação. Fale, fotografe, a IA organiza tudo pra você. Funciona até offline.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-3 md:mb-4">
            <a
              href="https://wa.me/5511920483501?text=oi"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackCTAClick('testar_gratis_whatsapp', 'hero')}
              className="bg-[#e8ff80] text-[#02152b] px-6 py-4 md:px-8 md:py-4 rounded-lg hover:bg-[#d4e670] transition-all font-bold text-base md:text-base shadow-lg shadow-[#e8ff80]/20 hover:shadow-xl hover:shadow-[#e8ff80]/30 active:scale-95 md:hover:scale-105"
            >
              Testar Grátis no WhatsApp
            </a>
          </div>

          <p className="text-sm md:text-sm text-gray-400">
            2 relatórios grátis para você testar
          </p>
        </div>
      </div>

      {/* Background decoration - otimizado para mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40 md:opacity-100">
        <div className="absolute top-1/4 -left-32 md:-left-48 w-64 h-64 md:w-96 md:h-96 bg-[#e8ff80]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 md:-right-48 w-64 h-64 md:w-96 md:h-96 bg-[#e8ff80]/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}

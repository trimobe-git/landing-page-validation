'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como funciona o teste grátis?',
      answer: 'Você recebe 2 créditos gratuitos assim que iniciar conversa com o Campota no WhatsApp. Use para gerar 2 relatórios completos e conhecer todas as funcionalidades. Sem necessidade de cadastro ou cartão de crédito.'
    },
    {
      question: 'Preciso instalar algum aplicativo?',
      answer: 'Não! Campota funciona 100% pelo WhatsApp. Não precisa baixar app, criar conta ou aprender uma nova ferramenta. Use o WhatsApp que você já tem.'
    },
    {
      question: 'Funciona sem internet?',
      answer: 'Sim! Você pode capturar dados offline. O WhatsApp guarda as mensagens e sincroniza automaticamente quando você reconectar. O Campota processa tudo na ordem correta.'
    },
    {
      question: 'Quanto tempo demora para gerar o relatório?',
      answer: 'Em média 2-3 minutos. Nossa IA processa áudios, analisa imagens e gera um relatório técnico completo. Você recebe uma notificação no WhatsApp quando estiver pronto.'
    },
    {
      question: 'Quanto custa depois do teste?',
      answer: 'Relatório avulso: R$ 10 | Pacote de 10 relatórios: R$ 57 (R$ 5,70 cada) | Pacote de 25 relatórios: R$ 97 (R$ 3,88 cada). Créditos válidos por 90 dias.'
    },
    {
      question: 'Como faço o pagamento?',
      answer: 'Tudo é feito pelo próprio WhatsApp via PIX. Você solicita créditos, recebe o QR Code, paga e em até 2 minutos os créditos são adicionados automaticamente. Sem mensalidades ou assinaturas.'
    },
    {
      question: 'Posso editar o relatório depois?',
      answer: 'O relatório é gerado em PDF pronto para usar. Se precisar ajustar, você pode abrir no editor de PDF de sua preferência. No futuro, teremos edição integrada.'
    },
    {
      question: 'Posso usar para várias fazendas/clientes?',
      answer: 'Sim! Cada visita é independente. Você informa o nome do cliente/fazenda durante a captura e o relatório sai personalizado. Sem limite de clientes.'
    },
    {
      question: 'E se eu tiver dúvidas durante o uso?',
      answer: 'Envie "ajuda" no WhatsApp a qualquer momento. O Campota explica comandos e tira dúvidas. Para suporte técnico, fale com nossa equipe via WhatsApp mesmo.'
    },
  ];

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
              Perguntas frequentes
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              Tudo que você precisa saber sobre o Campota
            </p>
          </div>

          <div className="space-y-2.5 md:space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl border border-white/10 overflow-hidden transition-all duration-300 active:bg-white/10"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left p-4 md:p-5 flex justify-between items-start md:items-center gap-3 active:bg-white/5 md:hover:bg-white/5 transition-all duration-300"
                >
                  <span className="font-semibold text-white text-[15px] md:text-base leading-snug">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 md:w-5 md:h-5 text-[#e8ff80] flex-shrink-0 transition-transform mt-0.5 md:mt-0 ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-4 md:px-5 pb-4 md:pb-5">
                    <p className="text-gray-300 leading-relaxed text-[15px] md:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

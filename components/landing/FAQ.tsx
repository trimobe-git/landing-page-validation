'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Quando o Campota estará disponível?',
      answer: 'Estamos finalizando o desenvolvimento e planejamos lançar em breve. Quem entrar na lista de espera agora terá acesso prioritário e será notificado assim que começarmos a liberar as primeiras contas.'
    },
    {
      question: 'Vou precisar instalar algum aplicativo?',
      answer: 'Não! O Campota funcionará 100% pelo WhatsApp. Não vai precisar baixar app, criar conta complexa ou aprender uma nova ferramenta. Usará o WhatsApp que você já tem no celular.'
    },
    {
      question: 'Vai funcionar sem internet no campo?',
      answer: 'Sim! Você poderá capturar dados offline. O WhatsApp guarda as mensagens e sincroniza automaticamente quando você reconectar. O Campota processará tudo na ordem correta.'
    },
    {
      question: 'Quanto tempo vai demorar para gerar cada relatório?',
      answer: 'Estimamos entre 2-3 minutos por relatório. Nossa IA processará áudios, analisará imagens e gerará um relatório técnico completo em PDF. Você receberá uma notificação no WhatsApp quando estiver pronto.'
    },
    {
      question: 'Qual será o preço?',
      answer: 'Planejamos um modelo flexível sem mensalidade: relatório avulso (R$ 10) ou pacotes com desconto (quanto mais créditos, menor o custo por relatório). Quem se cadastrar agora terá descontos especiais de lançamento que não estarão disponíveis depois.'
    },
    {
      question: 'Poderei editar o relatório depois?',
      answer: 'Os relatórios sairão em PDF prontos para usar. Inicialmente, você poderá abrir em qualquer editor de PDF para ajustes. Futuramente, planejamos adicionar edição integrada direto no WhatsApp.'
    },
    {
      question: 'Vou poder usar para várias fazendas/clientes?',
      answer: 'Sim! Cada visita será independente. Você informará o nome do cliente/fazenda durante a captura e o relatório sairá personalizado. Sem limite de clientes ou propriedades atendidas.'
    },
    {
      question: 'Por que devo entrar na lista de espera agora?',
      answer: 'Cadastrando-se agora você garante: (1) créditos gratuitos para testar sem compromisso, (2) descontos especiais que só estarão disponíveis no lançamento, (3) acesso prioritário antes da abertura ao público geral. Esses benefícios não estarão disponíveis depois.'
    },
    {
      question: 'Meus dados estarão seguros?',
      answer: 'Sim! Levamos privacidade a sério. Seus dados e relatórios serão criptografados e não compartilharemos nenhuma informação com terceiros. Você terá controle total sobre seus documentos.'
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

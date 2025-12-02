'use client';

import { useState } from 'react';

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function Pricing() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: '' });

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: data.message || 'Cadastro realizado com sucesso!'
        });
        setFormData({ name: '', email: '', phone: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Erro ao processar cadastro. Tente novamente.'
        });
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setStatus({
        type: 'error',
        message: 'Erro de conexão. Verifique sua internet e tente novamente.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (status.type === 'error') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  return (
    <section id="pricing" className="py-12 md:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
            Garanta Seu Acesso Antecipado
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            Entre agora e faça parte do grupo seleto que terá acesso prioritário ao lançamento
          </p>
        </div>

        <div className="max-w-lg mx-auto mb-8 md:mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-10 border-2 border-[#e8ff80] shadow-2xl shadow-[#e8ff80]/20 transition-all duration-300">

            <div className="text-center mb-6 md:mb-8">
              <div className="inline-block bg-[#e8ff80] text-[#02152b] px-4 py-1.5 rounded-full text-sm font-bold mb-3 md:mb-4">
                🚀 Vagas Limitadas
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3 leading-tight">
                Seja um dos primeiros
              </h3>
              <p className="text-gray-300 text-base mb-5 md:mb-6">
                Cadastre-se agora e garanta benefícios exclusivos de lançamento:
              </p>

              <div className="bg-white/5 rounded-lg p-4 md:p-5 space-y-3 text-left border border-white/10">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#e8ff80] flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#02152b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm md:text-base">Testes Gratuitos</p>
                    <p className="text-gray-400 text-xs md:text-sm">Créditos grátis para testar o Campota antes de pagar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#e8ff80] flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#02152b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm md:text-base">Descontos Especiais</p>
                    <p className="text-gray-400 text-xs md:text-sm">Valores promocionais exclusivos para early adopters</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#e8ff80] flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#02152b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm md:text-base">Acesso Prioritário</p>
                    <p className="text-gray-400 text-xs md:text-sm">Seja notificado primeiro quando abrirmos as vagas</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
              {status.type !== 'idle' && (
                <div
                  className={`p-4 rounded-lg border ${
                    status.type === 'success'
                      ? 'bg-green-500/10 border-green-500/50 text-green-400'
                      : status.type === 'error'
                      ? 'bg-red-500/10 border-red-500/50 text-red-400'
                      : 'bg-blue-500/10 border-blue-500/50 text-blue-400'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {status.type === 'loading' && (
                      <svg className="w-5 h-5 animate-spin flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    )}
                    {status.type === 'success' && (
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                    {status.type === 'error' && (
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <p className="text-sm font-medium">
                      {status.type === 'loading' ? 'Processando seu cadastro...' : status.message}
                    </p>
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status.type === 'loading'}
                  className="w-full px-4 py-3 md:py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e8ff80] focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status.type === 'loading'}
                  className="w-full px-4 py-3 md:py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e8ff80] focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  WhatsApp/Celular
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  disabled={status.type === 'loading'}
                  className="w-full px-4 py-3 md:py-3.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e8ff80] focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full py-4 rounded-lg font-bold text-base bg-[#e8ff80] text-[#02152b] hover:bg-[#d4e670] shadow-lg active:scale-95 md:hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#e8ff80] disabled:hover:scale-100"
              >
                {status.type === 'loading' ? 'Processando...' : 'Garantir Meu Acesso Antecipado'}
              </button>
            </form>

            <div className="text-center mt-5 md:mt-6 pt-5 md:pt-6 border-t border-white/10">
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                ✓ Sem compromisso • ✓ Dados 100% seguros • ✓ Benefícios exclusivos de lançamento
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

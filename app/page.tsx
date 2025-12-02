import Hero from '@/components/landing/Hero';
import HowItWorks from '@/components/landing/HowItWorks';
import Pricing from '@/components/landing/Pricing';
import FAQ from '@/components/landing/FAQ';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Campota - Relatórios Técnicos via WhatsApp com IA',
  description:
    'Imagine documentar visitas técnicas direto do campo via WhatsApp. IA que transforma áudios e fotos em relatórios profissionais PDF em minutos. Acesso antecipado disponível!',
  keywords:
    'relatório técnico, whatsapp, agronomia, veterinária, visita técnica, IA, agronegócio, brasil',
};

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#02152b]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

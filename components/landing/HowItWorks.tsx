export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 md:py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
            Veja como o Campota vai transformar suas visitas técnicas
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            Assista como será simples documentar tudo direto do campo, pelo WhatsApp
          </p>
        </div>

        {/* Vídeo do YouTube Short - Formato Vertical */}
        <div className="max-w-md mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg md:rounded-xl"
              src="https://www.youtube-nocookie.com/embed/ohutofg6AmA?modestbranding=1&rel=0&playsinline=1&controls=1"
              title="Como funciona o Campota"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

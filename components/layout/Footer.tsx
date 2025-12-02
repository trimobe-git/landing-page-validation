import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-sm md:text-sm">
          {/* Esquerda - Nome da aplicação */}
          <div className="text-[#e8ff80] font-bold text-base md:text-sm font-[family-name:var(--font-roboto)]">
            Campota
          </div>

          {/* Centro - Email */}
          <div className="text-gray-400 text-base md:text-sm">
            <a
              href="mailto:contato@trimobe.com"
              className="hover:text-[#e8ff80] transition-colors duration-300"
            >
              contato@trimobe.com
            </a>
          </div>

          {/* Direita - Links legais */}
          <div className="flex gap-3 md:gap-4 text-gray-400 text-sm md:text-sm">
            <Link
              href="/termos-de-uso"
              className="hover:text-[#e8ff80] transition-colors duration-300 whitespace-nowrap"
            >
              Termos de Uso
            </Link>
            <span className="text-gray-600">•</span>
            <Link
              href="/politica-de-privacidade"
              className="hover:text-[#e8ff80] transition-colors duration-300 whitespace-nowrap"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

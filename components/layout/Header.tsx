import { Bug } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#02152b] sticky top-0 z-50 backdrop-blur-sm bg-[#02152b]/95">
      <nav className="container mx-auto px-4 md:px-8 lg:px-12 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <Bug className="w-7 h-7 md:w-6 md:h-6 text-[#e8ff80]" />
          <span className="text-2xl md:text-xl font-bold text-[#e8ff80] font-[family-name:var(--font-roboto)]">
            Campota
          </span>
        </Link>
      </nav>
    </header>
  );
}

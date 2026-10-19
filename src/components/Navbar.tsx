import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0d17]/80 border-b border-white/10 transition-all">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="#inicio"
          className="inline-flex items-center gap-2.5 font-bold text-sm tracking-[1.4px] font-mono group"
          aria-label="Ir al inicio"
        >
          <span className="grid place-items-center w-8 h-8 rounded-xl text-[#10111c] font-black text-base bg-gradient-to-br from-[#67e8f9] to-[#a78bfa] shadow-sm group-hover:scale-105 transition-transform">
            A
          </span>
          <span className="text-[#f4f5fb] font-semibold">
            PORTAFOLIO<span className="text-[#67e8f9]">.</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8 text-xs sm:text-sm text-[#a0a5bd]" aria-label="Navegación principal">
          <Link
            href="#proyectos"
            className="hover:text-[#67e8f9] transition-colors"
          >
            Proyectos
          </Link>
          <Link
            href="#sobre-mi"
            className="hover:text-[#67e8f9] transition-colors hidden sm:inline-block"
          >
            Sobre el portafolio
          </Link>
          <a
            href="https://github.com/Adasuro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f4f5fb] border border-white/15 hover:border-[#67e8f9] hover:bg-[#67e8f9]/10 rounded-full px-4 py-2 transition-all flex items-center gap-1.5 font-medium"
          >
            <span>Mi GitHub</span>
            <span className="text-[#67e8f9]">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

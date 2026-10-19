import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090b14]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a0a5bd]">
        <Link
          href="#inicio"
          className="inline-flex items-center gap-2 font-bold font-mono tracking-wider text-white"
        >
          <span className="grid place-items-center w-6 h-6 rounded-lg text-[#10111c] font-black text-xs bg-gradient-to-br from-[#67e8f9] to-[#a78bfa]">
            A
          </span>
          <span>
            PORTAFOLIO<span className="text-[#67e8f9]">.</span>
          </span>
        </Link>

        <p className="text-center sm:text-left text-[11px]">
          Desarrollado con Next.js 16, React 19, TypeScript y Tailwind CSS · Arlette Suárez
        </p>

        <Link
          href="#inicio"
          className="inline-flex items-center gap-1 text-[#67e8f9] hover:text-[#a78bfa] transition-colors font-medium"
        >
          <span>Volver arriba</span>
          <span>↑</span>
        </Link>
      </div>
    </footer>
  );
}

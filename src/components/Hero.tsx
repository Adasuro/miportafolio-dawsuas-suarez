import Image from "next/image";
import Link from "next/link";
import { PROYECTOS_DATA } from "@/data/projects";

export default function Hero() {
  const projectCount = PROYECTOS_DATA.length.toString().padStart(2, "0");

  return (
    <section id="inicio" className="relative max-w-6xl mx-auto px-6 pt-16 pb-20 md:py-24 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 overflow-hidden">
      {/* Left text column */}
      <div className="lg:col-span-7 z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[#67e8f9] text-xs font-semibold tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-[#67e8f9] shadow-[0_0_8px_#67e8f9] animate-pulse"></span>
          PORTAFOLIO ACADÉMICO · DESARROLLO WEB
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
          Ideas que se convierten en{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#67e8f9]">
            experiencias digitales.
          </span>
        </h1>

        <p className="text-[#a0a5bd] text-base sm:text-lg max-w-xl leading-relaxed mb-8">
          Una colección de proyectos web desarrollados durante mi formación en Ingeniería de Sistemas en la UNCP. Explora cada trabajo, conoce sus tecnologías aplicadas y accede directamente al repositorio en GitHub.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#proyectos"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl text-sm font-bold text-[#0c0d17] bg-gradient-to-r from-[#67e8f9] to-[#b6a2ff] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_10px_25px_rgba(103,232,249,0.25)]"
          >
            <span>Explorar proyectos</span>
            <span className="text-base font-bold">↓</span>
          </Link>

          <a
            href="https://github.com/Adasuro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Ver GitHub</span>
            <span className="text-[#67e8f9]">↗</span>
          </a>
        </div>

        <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
          <div>
            <strong className="block text-xl font-bold text-white tracking-tight">{projectCount}</strong>
            <span className="text-xs text-[#a0a5bd]">proyectos registrados</span>
          </div>
          <div className="h-8 w-px bg-white/15"></div>
          <div>
            <strong className="block text-xl font-bold text-white tracking-tight">Next.js · React · TS · CSS</strong>
            <span className="text-xs text-[#a0a5bd]">tecnologías principales</span>
          </div>
        </div>
      </div>

      {/* Right visual art column */}
      <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[440px]">
        {/* Orbits */}
        <div className="orbit orbit-a"></div>
        <div className="orbit orbit-b"></div>

        {/* Profile Photo Card */}
        <div className="profile-photo-card">
          <div className="relative w-full h-[210px] rounded-[15px] overflow-hidden bg-slate-800">
            <Image
              src="/img/arlette.jpg"
              alt="Fotografía de Arlette Suárez"
              fill
              className="object-cover object-center"
              sizes="(max-width: 800px) 150px, 190px"
              priority
            />
          </div>
          <div className="profile-photo-caption">
            <span className="profile-online-dot"></span>
            <div>
              <strong className="text-xs text-white">Arlette Suárez</strong>
              <small className="text-[10px] text-[#a0a5bd]">Ingeniería de Sistemas · UNCP</small>
            </div>
          </div>
        </div>

        {/* Code Window */}
        <div className="code-window">
          <div className="h-12 flex items-center gap-2 px-4 border-b border-white/10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#fb7185]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#4ade80]"></span>
            <i className="ml-auto text-xs text-[#858ba5] not-italic font-mono">web-project.tsx</i>
          </div>

          <div className="p-4 font-mono text-xs leading-relaxed space-y-1">
            <p className="flex gap-2">
              <span className="text-[#5b617b] select-none">01</span>
              <span>
                <span className="text-[#c4b5fd]">&lt;section</span>{" "}
                <span className="text-[#67e8f9]">className</span>=
                <span className="text-[#fdba74]">&quot;portfolio&quot;</span>
                <span className="text-[#c4b5fd]">&gt;</span>
              </span>
            </p>
            <p className="flex gap-2">
              <span className="text-[#5b617b] select-none">02</span>
              <span className="pl-4">
                <span className="text-[#c4b5fd]">&lt;h1&gt;</span>
                Construyendo el futuro
                <span className="text-[#c4b5fd]">&lt;/h1&gt;</span>
              </span>
            </p>
            <p className="flex gap-2">
              <span className="text-[#5b617b] select-none">03</span>
              <span className="pl-4">
                <span className="text-[#c4b5fd]">&lt;p&gt;</span>
                Aprender creando soluciones
                <span className="text-[#c4b5fd]">&lt;/p&gt;</span>
              </span>
            </p>
            <p className="flex gap-2">
              <span className="text-[#5b617b] select-none">04</span>
              <span>
                <span className="text-[#c4b5fd]">&lt;/section&gt;</span>
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <span className="text-[#5b617b] select-none">05</span>
              <span className="cursor-blink"></span>
            </p>
          </div>

          {/* Badges */}
          <div className="absolute top-16 -right-4 px-3 py-1 rounded-lg text-xs font-bold text-[#fdba74] bg-[#332318] border border-[#70452b] shadow-lg">
            Next.js
          </div>
          <div className="absolute -bottom-3 left-4 px-3 py-1 rounded-lg text-xs font-bold text-[#a5b4fc] bg-[#202444] border border-[#444c88] shadow-lg">
            TypeScript
          </div>
          <div className="absolute -bottom-4 right-16 px-3 py-1 rounded-lg text-xs font-bold text-[#fde68a] bg-[#353018] border border-[#6b5b24] shadow-lg">
            Tailwind
          </div>
        </div>

        {/* Floating Note */}
        <div className="absolute -right-2 -bottom-2 sm:bottom-2 flex items-center gap-3 px-4 py-3 bg-[#1c2032] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md">
          <div className="grid place-items-center w-8 h-8 rounded-xl bg-[#67e8f9] text-[#10111c] font-black text-sm">
            ✦
          </div>
          <div>
            <strong className="block text-xs text-white">Aprender haciendo</strong>
            <small className="text-[10px] text-[#a0a5bd]">Proyectos y buenas prácticas</small>
          </div>
        </div>
      </div>
    </section>
  );
}

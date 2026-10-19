export default function AboutSection() {
  return (
    <section id="sobre-mi" className="max-w-6xl mx-auto px-6 mb-24">
      <div className="relative rounded-[22px] border border-white/10 bg-gradient-to-r from-[#a78bfa]/10 via-[#67e8f9]/5 to-transparent p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-8">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Symbol badge */}
        <div className="grid place-items-center w-14 h-14 rounded-2xl bg-[#67e8f9]/15 border border-[#67e8f9]/30 text-[#67e8f9] text-3xl font-bold shrink-0">
          ✳
        </div>

        {/* Content */}
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-[#67e8f9] mb-1">
            ACERCA DE ESTA COLECCIÓN
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
            Aprender, colaborar y <span className="text-[#a78bfa]">crear soluciones.</span>
          </h2>
          <p className="text-sm text-[#a0a5bd] leading-relaxed max-w-2xl">
            Este portafolio reúne trabajos y proyectos realizados durante la carrera de Ingeniería de Sistemas en la Universidad Nacional del Centro del Perú (UNCP). Integra prácticas de maquetación semántica, programación reactiva, arquitectura web y desarrollo colaborativo en equipo con Git y GitHub.
          </p>
        </div>

        {/* Quick info chip */}
        <div className="w-full md:w-auto shrink-0 flex flex-col gap-2 p-4 rounded-xl bg-[#121522]/90 border border-white/10 text-xs">
          <div className="flex items-center justify-between gap-4">
            <span className="text-[#a0a5bd]">Universidad:</span>
            <span className="font-semibold text-white">UNCP · FIS</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-[#a0a5bd]">GitHub:</span>
            <a
              href="https://github.com/Adasuro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#67e8f9] hover:underline font-mono"
            >
              @Adasuro
            </a>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-[#a0a5bd]">Stack:</span>
            <span className="text-[#a78bfa] font-medium">React, Next.js, TS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

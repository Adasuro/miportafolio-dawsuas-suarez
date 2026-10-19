"use client";

import { useState, useMemo } from "react";
import { PROYECTOS_DATA, Project } from "@/data/projects";

const CATEGORIAS = ["Todos", "Desarrollo web", "Prácticas", "Guías", "Aplicaciones"] as const;

export default function ProjectsSection() {
  const [busqueda, setBusqueda] = useState("");
  const [categoriaActiva, setCategoriaActiva] = useState<string>("Todos");

  const proyectosFiltrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase();
    return PROYECTOS_DATA.filter((proyecto) => {
      const coincideCategoria =
        categoriaActiva === "Todos" || proyecto.categoria === categoriaActiva;
      const textoCompleto = `${proyecto.titulo} ${proyecto.descripcion} ${proyecto.categoria} ${proyecto.tecnologias.join(" ")}`.toLowerCase();
      const coincideBusqueda = q === "" || textoCompleto.includes(q);
      return coincideCategoria && coincideBusqueda;
    });
  }, [busqueda, categoriaActiva]);

  return (
    <section id="proyectos" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#67e8f9] mb-2">
            TRABAJOS SELECCIONADOS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proyectos <span>académicos y personales</span>
          </h2>
          <p className="text-sm text-[#a0a5bd] mt-2 max-w-lg">
            Cada proyecto cuenta con su repositorio versionado en GitHub y refleja competencias prácticas en desarrollo frontend y backend.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a0a5bd] text-sm pointer-events-none">
            🔍
          </span>
          <input
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar tecnología o proyecto..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#121522] border border-white/10 text-xs sm:text-sm text-white placeholder-[#777d96] focus:outline-none focus:border-[#67e8f9] focus:ring-1 focus:ring-[#67e8f9] transition-all"
            aria-label="Buscar proyectos"
          />
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex flex-wrap items-center gap-2 mb-10" aria-label="Filtrar por categoría">
        {CATEGORIAS.map((cat) => {
          const isActive = categoriaActiva === cat;
          const count =
            cat === "Todos"
              ? PROYECTOS_DATA.length
              : PROYECTOS_DATA.filter((p) => p.categoria === cat).length;

          return (
            <button
              key={cat}
              onClick={() => setCategoriaActiva(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                isActive
                  ? "bg-[#a78bfa]/20 text-white border border-[#a78bfa]/60 shadow-[0_0_12px_rgba(167,139,250,0.2)]"
                  : "bg-transparent text-[#a0a5bd] border border-white/10 hover:border-white/20 hover:text-white"
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] ${isActive ? "text-[#67e8f9]" : "opacity-60"}`}>
                ({count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      {proyectosFiltrados.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-white/15 p-12 text-center">
          <p className="text-base text-[#a0a5bd] mb-3">
            No se encontraron proyectos que coincidan con la búsqueda &quot;{busqueda}&quot;.
          </p>
          <button
            onClick={() => {
              setBusqueda("");
              setCategoriaActiva("Todos");
            }}
            className="text-xs font-semibold text-[#67e8f9] hover:underline"
          >
            Limpiar filtros y ver todos los proyectos
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectosFiltrados.map((proyecto) => (
            <ProjectCard key={proyecto.id} proyecto={proyecto} />
          ))}
        </div>
      )}

      {/* Local Note */}
      <div className="mt-8 flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-[#a0a5bd]">
        <span className="text-[#67e8f9] text-base leading-none">ⓘ</span>
        <p>
          Los repositorios se encuentran conectados al perfil de GitHub{" "}
          <a
            href="https://github.com/Adasuro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#67e8f9] font-medium hover:underline"
          >
            @Adasuro
          </a>
          . Puedes clonar cada uno o inspeccionar su código directamente desde cada ficha.
        </p>
      </div>
    </section>
  );
}

function ProjectCard({ proyecto }: { proyecto: Project }) {
  return (
    <article className="group rounded-[22px] border border-white/10 bg-gradient-to-br from-[#191d31]/90 to-[#10121f]/95 overflow-hidden hover:-translate-y-1.5 hover:border-[#67e8f9]/50 transition-all duration-300 shadow-lg hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex flex-col justify-between">
      {/* Top Preview Card */}
      <div
        className="relative h-44 w-full flex items-center justify-center overflow-hidden p-4"
        style={{ background: proyecto.color }}
      >
        {/* Subtle decorative circles */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full border border-white/10 pointer-events-none"></div>
        <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full border border-white/10 pointer-events-none"></div>

        {/* Number badge */}
        <span className="absolute top-4 left-4 text-xs font-mono font-bold tracking-wider text-white/70">
          {proyecto.numero} / PROYECTO
        </span>

        {/* Category tag */}
        <span className="absolute top-4 right-4 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-black/40 border border-white/20 text-white backdrop-blur-sm">
          {proyecto.categoria}
        </span>

        {/* Mock window */}
        <div className="w-[70%] max-w-[260px] p-2.5 rounded-lg bg-[#090b15]/80 border border-white/20 shadow-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-300">
          <div className="flex gap-1 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fb7185]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#fbbf24]"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"></span>
          </div>
          <div
            className="h-2 rounded mb-1.5 w-1/2"
            style={{ backgroundColor: proyecto.acento }}
          ></div>
          <div className="h-2 rounded mb-1.5 w-4/5 bg-white/15"></div>
          <div className="h-2 rounded mb-2 w-3/5 bg-white/10"></div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-7 rounded bg-white/5 border border-white/5"></div>
            <div className="h-7 rounded bg-white/5 border border-white/5"></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#67e8f9] transition-colors mb-2">
            {proyecto.titulo}
          </h3>
          <p className="text-xs sm:text-sm text-[#a0a5bd] line-clamp-3 leading-relaxed mb-4">
            {proyecto.descripcion}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {proyecto.tecnologias.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-white/5 text-[#c6c9d8] border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5">
          <a
            href={proyecto.repositorio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#0b0d17] bg-[#67e8f9] hover:bg-[#a78bfa] hover:text-white transition-all shadow-sm"
          >
            <span>Código en GitHub</span>
            <span>↗</span>
          </a>

          <a
            href={proyecto.repositorio}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-white border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all"
            title="Inspeccionar rama y commits"
          >
            <span>Ver detalles</span>
          </a>
        </div>
      </div>
    </article>
  );
}

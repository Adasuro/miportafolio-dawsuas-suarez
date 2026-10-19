export interface Project {
  id: string;
  numero: string;
  titulo: string;
  categoria: "Prácticas" | "Guías" | "Desarrollo web" | "Aplicaciones";
  descripcion: string;
  tecnologias: string[];
  repositorio: string;
  sitioLocal?: string;
  color: string;
  acento: string;
}

export const PROYECTOS_DATA: Project[] = [
  {
    id: "sem06-daw1",
    numero: "01",
    titulo: "Semana 06 — DAW1",
    categoria: "Desarrollo web",
    descripcion: "Aplicación y ejercicios prácticos de desarrollo de aplicaciones web con JavaScript, manipulación del DOM y componentes interactivos.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    repositorio: "https://github.com/Adasuro/sem06_DAW1",
    sitioLocal: "#",
    color: "linear-gradient(135deg, #54401e, #30315e)",
    acento: "#fcd34d"
  },
  {
    id: "pract07-sem-daw2",
    numero: "02",
    titulo: "Práctica 07 — DAW2",
    categoria: "Desarrollo web",
    descripcion: "Desarrollo avanzado de frontend y arquitectura web para el curso de DAW, estructurando vistas dinámicas y componentes modulares.",
    tecnologias: ["JavaScript", "HTML5", "CSS3"],
    repositorio: "https://github.com/Adasuro/PRACT07_SEM_DAW2",
    sitioLocal: "#",
    color: "linear-gradient(135deg, #1e3a5f, #2e1065)",
    acento: "#38bdf8"
  },
  {
    id: "pract05-daw",
    numero: "03",
    titulo: "Práctica 05 — DAW",
    categoria: "Prácticas",
    descripcion: "Laboratorio enfocado en diseño responsivo, maquetación adaptativa e interactividad para sistemas web académicos.",
    tecnologias: ["HTML5", "CSS3", "JavaScript"],
    repositorio: "https://github.com/Adasuro/Pract05_DAW",
    sitioLocal: "#",
    color: "linear-gradient(135deg, #38255f, #173e59)",
    acento: "#c4b5fd"
  },
  {
    id: "practica-semana-6-react",
    numero: "04",
    titulo: "Práctica Semana 06 — React",
    categoria: "Desarrollo web",
    descripcion: "Construcción de interfaces de usuario modernas utilizando la librería React, estado reactivo y estilos estilizados.",
    tecnologias: ["React", "JavaScript", "CSS"],
    repositorio: "https://github.com/Adasuro/practica-semana-6-react",
    sitioLocal: "#",
    color: "linear-gradient(135deg, #0f4c5c, #1a202c)",
    acento: "#67e8f9"
  },
  {
    id: "practica-2",
    numero: "05",
    titulo: "Práctica 2 — Colaborativa",
    categoria: "Prácticas",
    descripcion: "Trabajo práctico de desarrollo web colaborativo. Estructura semántica, diseño limpio y estilos CSS organizados.",
    tecnologias: ["HTML5", "CSS3"],
    repositorio: "https://github.com/KatyTorres-web/practica-2",
    sitioLocal: "#",
    color: "linear-gradient(135deg, #4b2a42, #253b66)",
    acento: "#f9a8d4"
  },
  {
    id: "guia-02-web",
    numero: "06",
    titulo: "Guía 02 — Web",
    categoria: "Guías",
    descripcion: "Desarrollo de los ejercicios de la guía formativa de desarrollo web con buenas prácticas de estándares W3C.",
    tecnologias: ["HTML5", "CSS3"],
    repositorio: "https://github.com/StoneFind22/guia-02-web",
    sitioLocal: "#",
    color: "linear-gradient(135deg, #194d58, #282b61)",
    acento: "#67e8f9"
  },
  {
    id: "enruta-front",
    numero: "07",
    titulo: "EnRuta Frontend",
    categoria: "Aplicaciones",
    descripcion: "Frontend de sistema de gestión y rutas geográficas integrador para transporte universitario y seguimiento.",
    tecnologias: ["TypeScript", "Next.js", "Tailwind CSS"],
    repositorio: "https://github.com/Adasuro/enruta-front",
    sitioLocal: "#",
    color: "linear-gradient(135deg, #065f46, #1e293b)",
    acento: "#34d399"
  },
  {
    id: "asist-front",
    numero: "08",
    titulo: "Asistencia Escolar / UNCP Frontend",
    categoria: "Aplicaciones",
    descripcion: "Módulo de interfaz de usuario para el registro y monitoreo de asistencia estudiantil con validaciones en tiempo real.",
    tecnologias: ["TypeScript", "React", "REST API"],
    repositorio: "https://github.com/Adasuro/asist-front",
    sitioLocal: "#",
    color: "linear-gradient(135deg, #701a75, #1e1b4b)",
    acento: "#f472b6"
  }
];

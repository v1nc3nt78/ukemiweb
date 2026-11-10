export type ProjectFilter = "all" | "React" | "Next.js" | "Node.js" | "Full-stack"

export type PortfolioProject = {
  title: string
  description: string
  image: string
  imageAlt: string
  year: string
  category: "fullstack" | "frontend" | "ecommerce"
  categoryLabel: string
  stack: string[]
  demoUrl: string
  codeUrl: string
  featured?: boolean
  breakdown?: { label: string; text: string }[]
}

export const contactEmail = "hola@tu-dominio.com"

export const projects: PortfolioProject[] = [
  {
    title: "Atlas Finance",
    description: "Una vista más clara de tus finanzas: gastos, ingresos y objetivos en un mismo lugar.",
    image: "/projects/atlas-finance.png",
    imageAlt: "Vista de muestra de un panel financiero con gráficos e indicadores",
    year: "2026",
    category: "fullstack",
    categoryLabel: "Producto digital",
    stack: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/tu-usuario/atlas-finance",
    featured: true,
    breakdown: [
      { label: "Reto", text: "Demasiados datos dificultan las decisiones financieras del día a día." },
      { label: "Solución", text: "Un panel que organiza ingresos, gastos y objetivos en un mismo flujo." },
      { label: "Resultado", text: "Información más fácil de consultar, con foco en decisiones sencillas." },
    ],
  },
  {
    title: "Selva Studio",
    description: "Una tienda online serena para una marca de cuidado personal hecha con ingredientes naturales.",
    image: "/projects/selva-store.png",
    imageAlt: "Diseño de muestra de una tienda online de cuidado personal",
    year: "2026",
    category: "ecommerce",
    categoryLabel: "E-commerce",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/tu-usuario/selva-studio",
  },
  {
    title: "Ritmo",
    description: "Un espacio compartido para dar orden a las ideas, priorizar tareas y avanzar en equipo.",
    image: "/projects/ritmo-workspace.png",
    imageAlt: "Interfaz de muestra para organizar tareas y proyectos de equipo",
    year: "2025",
    category: "fullstack",
    categoryLabel: "Full-stack",
    stack: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/tu-usuario/ritmo",
  },
  {
    title: "Terminal",
    description: "Una interfaz de observabilidad para entender lo importante de un vistazo y responder antes.",
    image: "/projects/terminal-observability.png",
    imageAlt: "Panel de muestra con métricas de rendimiento y eventos técnicos",
    year: "2025",
    category: "frontend",
    categoryLabel: "Dashboard",
    stack: ["React", "TypeScript", "Recharts"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/tu-usuario/terminal",
  },
  {
    title: "Miga",
    description: "Recetas sencillas, ingredientes de temporada y una forma más amable de planear la semana.",
    image: "/projects/miga-recetas.png",
    imageAlt: "Página de recetas de muestra con fotografía editorial de alimentos",
    year: "2025",
    category: "frontend",
    categoryLabel: "Editorial",
    stack: ["Next.js", "React", "Sanity", "CSS"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/tu-usuario/miga",
  },
  {
    title: "Casa Norte",
    description: "Una experiencia inmobiliaria que pone la luz, los espacios y sus detalles en primer plano.",
    image: "/projects/casa-norte.png",
    imageAlt: "Interfaz inmobiliaria de muestra con fichas de viviendas",
    year: "2024",
    category: "frontend",
    categoryLabel: "Web app",
    stack: ["React", "Next.js", "TypeScript", "Maps"],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/tu-usuario/casa-norte",
  },
]

export const technologyGroups = [
  {
    title: "Frontend",
    description: "Interfaces accesibles, rápidas y fáciles de mantener.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  },
  {
    title: "Backend",
    description: "Datos y lógica de producto con una base clara.",
    items: ["Node.js", "PostgreSQL", "APIs REST", "Autenticación"],
  },
  {
    title: "Herramientas",
    description: "Del primer esquema a una experiencia lista para crecer.",
    items: ["Figma", "Git / GitHub", "Accesibilidad", "Diseño responsive"],
  },
]

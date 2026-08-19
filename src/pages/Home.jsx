import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function FloatingChip({ text, className }) {
  return (
    <span
      className={`absolute font-mono text-xs px-3 py-1.5 rounded-full bg-surface border border-border text-ink shadow-lg ${className}`}
    >
      {text}
    </span>
  );
}

function HeroPanel() {
  return (
    <div className="relative w-full max-w-sm mx-auto md:mx-0">
      <FloatingChip text="React" className="-top-3 -right-2" />
      <FloatingChip text="Next.js" className="top-10 -left-6" />
      <FloatingChip text="Flutter" className="bottom-24 -right-8" />
      <FloatingChip text="Python" className="bottom-6 -left-8" />
      <FloatingChip text="Firebase" className="-bottom-3 right-6" />

      <div className="rounded-3xl border border-border bg-surface aspect-4/5 overflow-hidden">
        <img
          src="/img/mario.jpg"
          alt="Mario Guerra Vázquez"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
const stackGroups = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "Flask", "Streamlit", "PHP"],
  },
  {
    label: "Bases de datos",
    items: ["MySQL / MariaDB", "Firebase / Firestore"],
  },
  {
    label: "DevOps y sistemas",
    items: ["Linux", "Nginx", "HTTPS/SSL", "Git/GitHub", "Hetzner", "systemd"],
  },
];

function ProjectsSection() {
  const [filter, setFilter] = useState("todos");
  const filtered =
    filter === "todos" ? projects : projects.filter((p) => p.status === filter);
  const filters = [
    { key: "todos", label: "Todos" },
    { key: "producción", label: "En producción" },
    { key: "académico", label: "Académicos" },
  ];

  return (
    <section id="proyectos" className="py-14 border-t border-border">
      <h2 className="font-display text-xl font-bold text-ink mb-2">
        Proyectos
      </h2>
      <p className="text-ink-soft mb-6">
        Proyectos propios: arquitectura, backend, interfaz y despliegue de
        principio a fin.
      </p>
      <div className="flex gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
              filter === f.key
                ? "bg-ink text-white border-ink"
                : "border-border text-ink-soft hover:border-accent hover:text-accent"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function StackSection() {
  return (
    <section id="stack" className="py-14 border-t border-border">
      <h2 className="font-display text-xl font-bold text-ink mb-6">Stack</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {stackGroups.map((g) => (
          <div key={g.label}>
            <p className="font-mono text-[11px] text-accent uppercase tracking-wide mb-2">
              {g.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-2 py-1 rounded bg-bg text-ink-soft border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 md:px-10">
      <section className="pt-16 pb-20 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border border-border text-ink-soft mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-2"></span>
            Buscando incorporarme a un equipo de desarrollo
          </span>

          <h1 className="font-display text-5xl font-bold leading-tight">
            <span className="text-ink">Hola, soy</span>
            <br />
            <span className="bg-linear-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              Mario Guerra
            </span>
          </h1>

          <p className="text-lg text-ink mt-4 font-medium">
            Desarrollador Web Full Stack Junior.
          </p>

          <p className="text-ink-soft mt-3 max-w-lg leading-relaxed">
            Construyo interfaces con React y Next.js, APIs con Node.js y Python,
            y he llevado proyectos completos a producción — incluida una app
            real en uso por un club deportivo de 40 personas.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="#proyectos"
              className="text-sm font-medium px-5 py-2.5 rounded-full bg-accent text-white hover:opacity-90 transition-opacity"
            >
              Ver proyectos →
            </a>
            <a
              href="/cv-mario-guerra.pdf"
              target="_blank"
              className="text-sm font-medium px-5 py-2.5 rounded-full border border-border text-ink hover:border-accent transition-colors"
            >
              Descargar CV
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            <a
              href="https://github.com/MarioGuerra71"
              target="_blank"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink-soft hover:text-accent hover:border-accent transition-colors"
            >
              GH
            </a>
            <a
              href="https://www.linkedin.com/in/mario-guerra-v%C3%A1zquez-13850a413/"
              target="_blank"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink-soft hover:text-accent hover:border-accent transition-colors"
            >
              in
            </a>
            <a
              href="mailto:mario.guerra.vaz@gmail.com"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-ink-soft hover:text-accent hover:border-accent transition-colors"
            >
              @
            </a>
          </div>
        </div>

        <HeroPanel />
      </section>

      <section
        id="sobre-mi"
        className="py-14 border-t border-border grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10"
      >
        <div>
          <h2 className="font-display text-xl font-bold text-ink mb-4">
            Sobre mí
          </h2>
          <p className="text-ink-soft leading-relaxed mb-4">
            Técnico Superior en Desarrollo de Aplicaciones Web, con paso también
            por Ingeniería Informática de Computadores en la Universidad de
            Sevilla. Esa base me da soltura tanto en frontend como en la parte
            de sistemas: no solo escribo la interfaz, también despliego,
            configuro servidores y mantengo lo que construyo en producción.
          </p>
          <p className="text-ink-soft leading-relaxed mb-4">
            Durante mis prácticas en CactusLab desarrollé herramientas internas
            reales (gestión documental, email marketing) y aprendí a trabajar
            con código que ya está en uso por gente de verdad — algo que también
            aplico en{" "}
            <a
              href="/proyectos/papo-roman"
              className="text-accent hover:underline"
            >
              Papo Román FS
            </a>
            , una app que mantengo activamente para un club de fútbol sala con
            40 socios.
          </p>
          <p className="text-ink-soft leading-relaxed">
            Ahora mismo busco un equipo de desarrollo donde seguir creciendo,
            aprender de perfiles con más experiencia y aportar desde el primer
            día.
          </p>
        </div>
        <aside className="space-y-5 h-fit md:border-l md:border-border md:pl-8">
          <div>
            <p className="font-mono text-[11px] text-accent uppercase tracking-wide">
              Formación
            </p>
            <p className="text-sm text-ink mt-1">Técnico Superior en DAW</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-accent uppercase tracking-wide">
              Stack principal
            </p>
            <p className="text-sm text-ink mt-1">
              React · Next.js · Node.js · Python
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-accent uppercase tracking-wide">
              Ubicación
            </p>
            <p className="text-sm text-ink mt-1">Sevilla, España</p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-accent uppercase tracking-wide">
              Idiomas
            </p>
            <p className="text-sm text-ink mt-1">
              Español (nativo) · Inglés (B1)
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-accent uppercase tracking-wide">
              Buscando
            </p>
            <p className="text-sm text-ink mt-1">
              Equipo de desarrollo Frontend, Backend o Full Stack
            </p>
          </div>
        </aside>
      </section>

      <ProjectsSection />
      <StackSection />

      <section id="contacto" className="py-14 border-t border-border">
        <h2 className="font-display text-xl font-bold text-ink mb-3">
          Hablemos
        </h2>
        <p className="text-ink-soft max-w-lg mb-6">
          Busco incorporarme a un equipo de desarrollo. Si tienes una
          oportunidad que encaje, estaré encantado de hablar contigo.
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href="mailto:mario.guerra.vaz@gmail.com"
            className="text-ink hover:text-accent font-medium"
          >
            mario.guerra.vaz@gmail.com
          </a>
          <a
            href="https://github.com/MarioGuerra71"
            target="_blank"
            className="text-ink hover:text-accent font-medium"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mario-guerra-v%C3%A1zquez-13850a413/"
            target="_blank"
            className="text-ink hover:text-accent font-medium"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

import { useState } from "react";
import { projects, experiencia } from "../data/projects";
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

// Iconos (paths SVG de Simple Icons / Material, sin dependencias)
const redes = [
  {
    label: "GitHub",
    href: "https://github.com/MarioGuerra71",
    icono:
      "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mario-guerra-v%C3%A1zquez-13850a413/",
    icono:
      "M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zm1.8 13.1H3.6V9h3.5v11.5zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6c0 .9.8 1.7 1.8 1.7h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0z",
  },
  {
    label: "Email",
    href: "mailto:mario.guerra.vaz@gmail.com",
    icono:
      "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
  },
];

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
    label: "Móvil",
    items: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "FCM (push)"],
  },
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
    items: ["MySQL", "MariaDB", "Firebase", "Cloud Firestore"],
  },
  {
    label: "IA y NLP",
    items: ["spaCy", "OpenAI API"],
  },
  {
    label: "DevOps y sistemas",
    items: [
      "Linux",
      "Nginx",
      "HTTPS/SSL",
      "Git/GitHub",
      "Hetzner",
      "systemd",
      "Vercel (serverless)",
      "Firebase Hosting",
    ],
  },
  {
    label: "Otras herramientas",
    items: ["REST APIs", "WordPress", "Mautic", "AWS SES"],
  },
];

function ExperienciaSection() {
  return (
    <section id="experiencia" className="py-14 border-t border-border">
      <h2 className="font-display text-xl font-bold text-ink mb-6">
        Experiencia
      </h2>
      <ol className="space-y-8">
        {experiencia.map((e) => (
          <li
            key={e.empresa}
            className="relative pl-6 border-l border-border"
          >
            <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-display text-lg font-bold text-ink">
                {e.puesto} · <span className="text-accent">{e.empresa}</span>
              </h3>
              <span className="font-mono text-xs text-ink-soft">
                {e.fechas}
              </span>
            </div>
            {e.lugar && <p className="text-sm text-ink-soft">{e.lugar}</p>}
            <ul className="mt-3 space-y-1.5">
              {e.puntos.map((p) => (
                <li key={p} className="flex gap-2 text-ink-soft text-sm">
                  <span className="text-accent font-mono">›</span> {p}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

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
                ? "bg-accent text-bg border-accent"
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
            Desarrollador Full Stack Junior · web y móvil.
          </p>

          <p className="text-ink-soft mt-3 max-w-lg leading-relaxed">
            Construyo interfaces con React y Next.js, apps móviles con Flutter y
            APIs con Node.js y Python, y he llevado proyectos completos a
            producción — incluida una app real que usa a diario un club
            deportivo de 40 personas.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <a
              href="#proyectos"
              className="text-sm font-medium px-5 py-2.5 rounded-full bg-accent text-bg hover:opacity-90 transition-opacity"
            >
              Ver proyectos →
            </a>
            <a
              href="/cv-mario-guerra.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-5 py-2.5 rounded-full border border-border text-ink hover:border-accent transition-colors"
            >
              Descargar CV
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            {redes.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target={r.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={r.label}
                title={r.label}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-ink-soft hover:text-accent hover:border-accent transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
                  <path d={r.icono} />
                </svg>
              </a>
            ))}
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
              className="text-accent underline underline-offset-2 hover:opacity-80"
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
            <p className="text-sm text-ink mt-1">
              Técnico Superior en DAW (2024 – 2026)
            </p>
            <p className="text-xs text-ink-soft">
              I.E.S. Cristóbal de Monroy · antes, Ing. Informática de
              Computadores (US, parcial)
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-accent uppercase tracking-wide">
              Stack principal
            </p>
            <p className="text-sm text-ink mt-1">
              React · Next.js · Flutter · Node.js · Python
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] text-accent uppercase tracking-wide">
              Ubicación
            </p>
            <p className="text-sm text-ink mt-1">Carmona (Sevilla)</p>
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

      <ExperienciaSection />
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
              rel="noopener noreferrer"
            className="text-ink hover:text-accent font-medium"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mario-guerra-v%C3%A1zquez-13850a413/"
            target="_blank"
              rel="noopener noreferrer"
            className="text-ink hover:text-accent font-medium"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  );
}

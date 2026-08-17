import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <section className="mb-16">
        <p className="font-mono text-xs text-accent mb-3">
          ~/mario-guerra $ portfolio --stack=fullstack
        </p>
        <h1 className="font-display text-4xl font-bold text-ink">
          Mario Guerra Vázquez
        </h1>
        <p className="text-ink-soft mt-3 max-w-xl">
          Desarrollador Web Full Stack Junior. React, Node.js, TypeScript, MySQL
          — con base en sistemas y DevOps.
        </p>
      </section>
      <section id="sobre-mi" className="mb-16 border-t border-border pt-10">
        <h2 className="font-display text-xl font-bold text-ink mb-3">
          Sobre mí
        </h2>
        <p className="text-ink-soft max-w-xl leading-relaxed">
          Técnico Superior en Desarrollo de Aplicaciones Web, con paso también
          por Ingeniería Informática. Me muevo cómodo tanto en frontend (React,
          Next.js) como en backend y sistemas (Node.js, Python, Nginx,
          despliegue en servidores propios). Los proyectos de aquí abajo son una
          mezcla de trabajo académico, una app real usada por un club de fútbol
          sala, y herramientas internas hechas durante mis prácticas.
        </p>
      </section>
      <section id="proyectos" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </section>
    </main>
  );
}

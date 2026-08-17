import { useParams, Link } from "react-router-dom";
import { projects, statusLabels } from "../data/projects";
import ImageSlider from "../components/ImageSlider";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="max-w-3xl mx-auto px-6 py-20">
        <p className="text-ink-soft">Proyecto no encontrado.</p>
        <Link to="/" className="text-accent font-medium">← Volver</Link>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16" style={{ "--color-accent": project.color }}>
      <Link to="/" className="text-sm text-ink-soft hover:text-accent">← Volver a proyectos</Link>

      <div className="mt-6 flex items-center gap-3">
        <span className="font-mono text-[11px] tracking-wide text-accent px-2 py-1 rounded-full border border-accent/30">
          {statusLabels[project.status]}
        </span>
      </div>

      <h1 className="font-display text-3xl font-bold text-ink mt-3">{project.title}</h1>
      <p className="text-ink-soft mt-2">{project.tagline}</p>

      <div className="flex flex-wrap gap-2 mt-4">
        {project.stack.map((tech) => (
          <span key={tech} className="font-mono text-xs px-2 py-1 rounded bg-bg text-ink-soft border border-border">
            {tech}
          </span>
        ))}
      </div>

      <ImageSlider images={project.images} alt={project.title} />

      <p className="text-ink mt-8 leading-relaxed">{project.description}</p>

      {project.highlights.length > 0 && (
        <ul className="mt-6 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-ink-soft">
              <span className="text-accent font-mono">›</span> {h}
            </li>
          ))}
        </ul>
      )}

      <div className="flex gap-4 mt-8">
        {project.github && (
          <a href={project.github} target="_blank" className="text-sm font-medium text-ink hover:text-accent">
            Ver código →
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target="_blank" className="text-sm font-medium text-ink hover:text-accent">
            Ver demo →
          </a>
        )}
      </div>
    </main>
  );
}
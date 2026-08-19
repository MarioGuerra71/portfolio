import { statusLabels } from "../data/projects";

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden flex flex-col hover:border-accent/60 hover:-translate-y-0.5 transition-all">
      <div className="h-44 bg-bg flex items-center justify-center text-ink-soft text-sm">
        {project.images[0] ? (
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          "Captura pendiente"
        )}
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <span className="font-mono text-[11px] tracking-wide text-accent-2 w-fit px-2 py-1 rounded-full bg-accent-2/10 border border-accent-2/30">
          {statusLabels[project.status]}
        </span>
        <div>
          <h3 className="font-display text-lg font-bold text-ink">
            {project.title}
          </h3>
          <p className="text-sm text-ink-soft mt-1">{project.tagline}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2 py-1 rounded bg-bg text-ink-soft"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={`/proyectos/${project.id}`}
          className="text-sm font-medium text-ink hover:text-accent"
        >
          Ver detalle →
        </a>
      </div>
    </div>
  );
}

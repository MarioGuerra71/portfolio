import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-ink">
          Mario Guerra
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#proyectos" className="text-ink-soft hover:text-accent">Proyectos</a>
          <a href="#sobre-mi" className="text-ink-soft hover:text-accent">Sobre mí</a>
          <a
            href="/cv-mario-guerra.pdf"
            target="_blank"
            className="font-mono text-xs px-3 py-1.5 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition-colors"
          >
            CV ↓
          </a>
        </nav>
      </div>
    </header>
  );
}
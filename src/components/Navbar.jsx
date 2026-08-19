import { Link, useLocation } from "react-router-dom";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#stack", label: "Stack" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-bg/80 border-b border-border">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-mono font-bold text-ink">
          Mario<span className="text-accent"> Guerra</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ink-soft hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="text-sm font-medium px-4 py-2 rounded-full bg-accent text-white hover:opacity-90 transition-opacity"
        >
          Contactar
        </a>
      </div>
    </header>
  );
}

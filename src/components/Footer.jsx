export default function Footer() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-ink-soft">
        <p className="font-mono text-xs">© {new Date().getFullYear()} Mario Guerra Vázquez</p>
        <div className="flex gap-5">
          <a href="https://github.com/MarioGuerra71" target="_blank" className="hover:text-accent">GitHub</a>
          <a href="mailto:mario.guerra.vaz@gmail.com" className="hover:text-accent">Email</a>
          <a href="https://www.linkedin.com/in/mario-guerra-v%C3%A1zquez-13850a413/" target="_blank" className="hover:text-accent">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
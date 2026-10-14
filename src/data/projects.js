export const projects = [
  {
    id: "checkpoint",
    color: "#7C3AED",
    title: "Checkpoint",
    category: "académico",
    tagline:
      "Red social para descubrir, valorar y hacer seguimiento de videojuegos",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL", "REST API", "RAWG API"],
    status: "académico",
    description:
      "Plataforma social inspirada en Letterboxd/Backloggd pero orientada a videojuegos. Los usuarios descubren juegos vía la API de RAWG, escriben reseñas, registran sesiones de juego, crean listas y siguen a otros usuarios. Incluye un sistema de gamificación propio con logros, monedas, sobres, tienda de objetos e inventario de personalización (avatares y bordes).",
    highlights: [
      "Catálogo y búsqueda de videojuegos en tiempo real vía RAWG API",
      "Reseñas, valoraciones, comentarios y listas personalizadas",
      "Perfiles públicos con seguidores y actividad reciente",
      "Sistema de gamificación: logros, monedas, sobres y tienda de objetos",
      "Autenticación con cookies + bcryptjs y rutas privadas protegidas por middleware",
    ],
    images: ["/img/checkpoint-1.png", "/img/checkpoint-2.png", "/img/checkpoint-3.png", "/img/checkpoint-4.png", "/img/checkpoint-5.png", "/img/checkpoint-6.png", "/img/checkpoint-7.png", "/img/checkpoint-8.png", "/img/checkpoint-9.png", "/img/checkpoint-10.png", "/img/checkpoint-11.png", "/img/checkpoint-12.png", "/img/checkpoint-13.png", "/img/checkpoint-14.png", "/img/checkpoint-15.png", "/img/checkpoint-16.png", "/img/checkpoint-17.png", "/img/checkpoint-18.png", "/img/checkpoint-19.png"],
    github: "https://github.com/MarioGuerra71/checkpoint",
    demo: "https://checkpoint-rho-indol.vercel.app/home",
  },
  {
    id: "papo-roman",
    color: "#B8975B",
    title: "Papo Román FS",
    category: "producción",
    tagline: "App móvil para gestionar un club de fútbol sala real",
    stack: ["Flutter", "Dart", "Firebase Auth", "Cloud Firestore", "FCM", "Vercel Serverless", "Firebase Hosting"],
    status: "producción",
    description:
      "App Android y web (iPhone) que usa a diario un club de fútbol sala de Carmona con unos 40 socios. Cubre todo el día a día: partidos con marcador, goles, asistencias y convocatoria; estadísticas por jugador y por liga (Verano/Invierno) calculadas al vuelo desde los partidos; votación del MVP en dos fases y MVP de temporada; plantilla por edición, entrenadores con su balance, cara a cara contra cada rival, cuotas y gestión completa del club desde la propia app. Seguridad por roles con reglas de Firestore y notificaciones push a través de una función serverless propia que verifica el token del usuario. Todo en planes gratuitos: coste de mantenimiento 0 €.",
    highlights: [
      "Estadísticas derivadas de los partidos (sin contadores): editar o borrar un partido corrige todo solo",
      "Votación MVP en dos fases con desempates, y MVP de temporada entre los más votados de la liga",
      "Plantilla distinta por edición, ficha de jugador y de entrenador, y cara a cara contra cada rival",
      "Gestión del club sin tocar Firebase: socios con roles, equipos, pabellones, patrocinadores y ediciones",
      "Push seguras: función en Vercel que verifica el ID token de Firebase y exige rol de admin",
      "Tema claro/oscuro, caché de imágenes y fotos optimizadas (de 18 MB a menos de 1 MB)",
    ],
    images: [],
    github: null,
    privado: true,
    demo: "https://paporoman-demo-mg.web.app",
    demoNota: "Demo con datos ficticios: entra como visitante (eres admin) y toca lo que quieras.",
  },
  {
    id: "cactus-nlp",
    color: "#C2410C",
    title: "Cactus NLP",
    category: "académico",
    tagline: "Herramienta CAQDAS de análisis cualitativo de transcripciones",
    stack: ["Python", "Streamlit", "spaCy", "OpenAI API"],
    status: "académico",
    description:
      "Herramienta local de análisis cualitativo (CAQDAS) inspirada en ATLAS.ti. Permite cargar transcripciones en PDF, Word, Excel o CSV y analizarlas con NLP clásico (spaCy): frecuencias léxicas, entidades nombradas, análisis KWIC y co-ocurrencias. Incorpora codificación automática por reglas/regex y generación asistida de codebooks con OpenAI, siempre con confirmación explícita antes de enviar datos fuera del entorno local.",
    highlights: [
      "Análisis NLP con spaCy: entidades nombradas, n-gramas, riqueza léxica, KWIC",
      "Matrices código-documento y co-ocurrencias estilo ATLAS.ti",
      "Codebooks asistidos por IA (GPT-4o-mini) con control explícito del usuario sobre qué datos se envían",
      "Exportación completa (Excel con heatmaps, CSV, PNG, TXT)",
    ],
    images: ["/img/nlp-1.png", "/img/nlp-2.png", "/img/nlp-3.png", "/img/nlp-4.png", "/img/nlp-5.png", "/img/nlp-6.png"],
    github: null,
    demo: null,
  },
  {
    id: "pdf-tools",
    color: "#2563EB",
    title: "PDF Tools",
    category: "producción",
    tagline:
      "Herramientas de gestión de PDF sin depender de servicios externos",
    stack: [
      "Python",
      "Flask",
      "Gunicorn",
      "pypdf",
      "pikepdf",
      "Ghostscript",
      "Nginx",
    ],
    status: "producción",
    description:
      "Herramienta web para manipular PDFs directamente desde el navegador: unir, extraer páginas, comprimir con control de calidad y convertir Word a PDF. Pensada como alternativa interna a servicios como iLovePDF, evitando exponer documentos a terceros. Elimina automáticamente los metadatos de cada archivo generado.",
    highlights: [
      "Unir, extraer y comprimir PDFs con control de calidad (pantalla / equilibrado / impresión)",
      "Conversión de Word (.doc/.docx) a PDF",
      "Borrado automático de metadatos en todos los documentos generados",
      "Desplegado en VPS propio (Hetzner) con Nginx, HTTPS y systemd; limpieza automática de archivos temporales cada 30 min",
    ],
    images: ["/img/pdf-tools-1.png", "/img/pdf-tools-2.png"],
    github: null,
    demo: null,
  },
];

export const statusLabels = {
  producción: "EN PRODUCCIÓN",
  académico: "PROYECTO ACADÉMICO",
  privado: "PRIVADO",
};

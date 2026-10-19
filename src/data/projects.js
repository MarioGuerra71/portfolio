export const projects = [
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
    images: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/img/papo-roman-demo-${n}.webp`),
    github: null,
    privado: true,
    portada: "50% 16%", // el marcador del partido
    demo: "https://paporoman-demo-mg.web.app",
    demoNota: "Demo con datos ficticios: entra como visitante (eres admin) y toca lo que quieras.",
  },
  {
    id: "comicverse",
    color: "#DC2626",
    title: "ComicVerse",
    category: "producción",
    tagline: "Biblioteca de cómics donde cada lectura desbloquea personajes y relaciones",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "Better Auth", "Zod", "Vitest", "Playwright", "Vercel Cron", "Comic Vine API"],
    status: "producción",
    description:
      "Biblioteca personal de cómics de Marvel y DC en la que tu colección empieza «a lápiz» y se va entintando a medida que lees. Al marcar un cómic como leído se descubren sus personajes, y al leer 5 cómics de uno pasa a estar coleccionado. Los personajes se guardan en álbumes de cartas con fundas 3×3, páginas que se pasan en 3D y cartas con brillo holográfico. Las relaciones (aliados, enemigos, familia…) se descubren al conocer a los dos personajes. El catálogo crece bajo demanda desde Comic Vine y un cron diario trae las novedades. La biblioteca se puede ver por series, como carpetas, y cada lector elige la imagen de cada versión de un personaje (el Batman de Absolute Batman no es el de siempre). Incluye logros, perfiles públicos, seguir a otros lectores y comparar álbumes sin spoilers.",
    highlights: [
      "Sin spoilers por diseño: de un personaje no descubierto al navegador solo le llega su número; su ficha da el mismo 404 que uno inexistente",
      "Los desbloqueos se calculan con una consulta indexada, no se guardan: sin estado duplicado ni carreras",
      "Relaciones derivadas de coapariciones con el coeficiente de Ochiai, combinadas con relaciones curadas",
      "Importación idempotente y bajo demanda desde Comic Vine respetando su límite de 200 peticiones/hora",
      "Arquitectura por capas (route handlers → servicios → dominio puro → repositorios Prisma)",
      "149 tests unitarios, 86 de integración contra PostgreSQL real y E2E con Playwright en el CI",
    ],
    images: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => `/img/comicverse-${n}.webp`),
    github: "https://github.com/MarioGuerra71/comicverse",
    demo: "https://comicverse-eight.vercel.app",
    demoNota: "Pulsa «Probar la demo»: entras sin registrarte en una cuenta propia con cómics ya leídos. Marca otro como leído para ver cómo se entintan sus personajes.",
  },
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
  maqueta: "MAQUETA",
};

// Experiencia profesional (misma que en el CV)
export const experiencia = [
  {
    empresa: "CactusLab",
    puesto: "Desarrollador Web (prácticas)",
    lugar: "Carmona, Sevilla",
    fechas: "Enero 2026 – Junio 2026",
    puntos: [
      "Desarrollo y mantenimiento de aplicaciones web internas para distintos procesos de la empresa.",
      "Plataforma de email marketing con Mautic y AWS SES: envíos, gestión de rebotes y entregabilidad.",
      "Configuración de SFTP, DNS, DKIM y dominios para poner en marcha los servicios de email.",
      "Herramientas internas de gestión documental y edición colaborativa.",
      "Despliegue y mantenimiento de aplicaciones web y APIs en servidores Linux.",
    ],
  },
  {
    empresa: "jesusmorales.net",
    puesto: "Desarrollo web (apoyo)",
    lugar: "",
    fechas: "Enero 2025 – Febrero 2025",
    puntos: [
      "Diseño, desarrollo y mantenimiento de páginas web con WordPress.",
      "Maquetación y configuración de sitios según las necesidades de cada proyecto.",
    ],
  },
];

// Maquetas: webs de demostración para empresas ficticias (diseño, front-end y buenas prácticas)
const capturas = (id, n) => Array.from({ length: n }, (_, i) => `/img/maquetas/${id}-${i + 1}.webp`);

export const maquetas = [
  {
    id: "brasa-olivo",
    color: "#D4B48A",
    title: "Brasa & Olivo",
    tipo: "Restaurante",
    status: "maqueta",
    imagen: "/img/maqueta-brasa.webp",
    alt: "Portada de la web Brasa & Olivo: título en Bodoni, aviso de horario y foto de chuletas sobre la brasa",
    tagline: "Web de un asador ficticio de Carmona que cambia según la hora real",
    resumen:
      "Web de un asador ficticio de Carmona: la portada cambia según la hora real (menú del día, cena o cerrado), carta con filtro de los 14 alérgenos y reserva en cuatro pasos con validación.",
    description:
      "Maqueta de la web que encargaría un restaurante local: un asador de brasa de encina con aceite de su propio olivar. El diseño es un cartel impreso y sobrio en blanco, negro, madera y oliva, con letra Didone y fotos «impresas» en dos pasadas de tinta. La portada lee la hora de Madrid y anuncia el menú del día, la brasa de la noche o cuándo vuelve a abrir. Incluye la carta completa con filtro de alérgenos, el menú del día, horario, mapa bajo demanda y una reserva por pasos que valida días de cierre, turnos y horas pasadas.",
    highlights: [
      "Portada que sigue la hora real de Carmona (Europe/Madrid), aunque el móvil del visitante esté en otra zona horaria",
      "Carta con filtro de los 14 alérgenos de la UE, indicados con texto y no solo con iconos",
      "Reserva en cuatro estaciones (día, hora, personas, datos) con validación: lunes cerrado, cenas de jueves a sábado y horas pasadas bloqueadas",
      "Mapa de OpenStreetMap que no carga nada externo hasta que el visitante lo pide",
      "CSP con hashes generada por Astro, sin 'unsafe-inline', y cabeceras de seguridad en Vercel",
      "Fotos optimizadas a AVIF/WebP en varios tamaños; Lighthouse 100 en accesibilidad, buenas prácticas y SEO",
    ],
    stack: ["Astro 7", "HTML", "CSS", "JavaScript", "Astro Assets (AVIF/WebP)", "Fontsource", "OpenStreetMap", "node --test", "Vercel"],
    images: capturas("brasa", 6),
    github: "https://github.com/MarioGuerra71/brasa-olivo",
    demo: "https://brasa-olivo-xi.vercel.app",
    demoNota: "Restaurante ficticio: carta, precios, horario y dirección son inventados. La reserva es simulada y no envía nada.",
  },
  {
    id: "terra",
    color: "#A9B89A",
    title: "Terra",
    tipo: "Tienda online",
    status: "maqueta",
    imagen: "/img/maqueta-terra.webp",
    alt: "Portada de la tienda Terra: titular sobre fondo color barro y una bola de barro en 3D sobre el torno",
    tagline: "Tienda de cerámica con una historia en 3D al estilo de las páginas de Apple",
    resumen:
      "Tienda de cerámica con una historia en 3D al hacer scroll: un jarrón se tornea, se esmalta y se cuece mientras bajas. Debajo, una tienda completa con filtros en la URL, carrito y checkout simulado.",
    description:
      "Tienda online de un taller de cerámica ficticio. Al hacer scroll, un jarrón en 3D real se modela como en un torno de alfarero: empieza siendo una bola de barro amasada, sube las paredes, coge forma, se esmalta en el color que elige el visitante, se pone incandescente en el horno y se posa en una peana donde empieza la tienda. Cada fase cambia el fondo de la página. Debajo hay una tienda funcional: catálogo con filtros guardados en la URL, ficha de producto con formatos, carrito persistente y checkout en tres pasos con el pago simulado.",
    highlights: [
      "Jarrón en Three.js como superficie de revolución (LatheGeometry): el perfil se interpola entre las fases del torno al hacer scroll",
      "El esmalte elegido en la historia cambia el jarrón al momento y filtra el catálogo por ese esmalte",
      "Three.js se carga bajo demanda (import dinámico): la primera pantalla pinta en menos de 1 s con CPU ×4 y 4G",
      "Carrito en localStorage validado al leerlo (cualquiera puede manipularlo) y precios en céntimos",
      "Checkout en tres pasos con validación, envío gratis desde 80 € y pago simulado sin ningún campo de tarjeta",
      "Con «reducir movimiento» el jarrón aparece terminado y quieto; diálogos nativos (<dialog>) con foco atrapado; Lighthouse 100",
    ],
    stack: ["React 19", "Vite 8", "Tailwind CSS 4", "Three.js", "JavaScript", "CSS scroll-driven animations", "localStorage", "node --test", "Vercel"],
    images: capturas("terra", 8),
    github: "https://github.com/MarioGuerra71/terra-ceramica",
    demo: "https://terra-ceramica.vercel.app",
    demoNota: "Tienda ficticia: baja despacio para ver el jarrón tornearse, elige un esmalte y prueba el carrito. El pago es simulado.",
  },
  {
    id: "norte-estudio",
    color: "#D99A7C",
    title: "Norte Estudio",
    tipo: "Estudio de arquitectura",
    status: "maqueta",
    imagen: "/img/maqueta-norte.webp",
    alt: "Portada de la web Norte Estudio: titular sobrio sobre fondo claro y fotografía de arquitectura blanca",
    tagline: "Web editorial y multipágina de un estudio de arquitectura ficticio",
    resumen:
      "Web editorial de un estudio de arquitectura ficticio: varias páginas con transiciones nativas del navegador (la foto de cada obra viaja a su página), índice con vista previa solo con CSS y ficha técnica por proyecto.",
    description:
      "Web de un estudio de arquitectura de Sevilla planteada como una monografía: fondo de cal, texto grafito y un único acento color ladrillo para los estados. Son varias páginas estáticas (portada, índice, una página por obra, estudio y contacto) unidas por transiciones nativas del navegador: la foto de un proyecto en el índice se transforma en la portada de su página, sin librerías. El índice muestra la foto de cada obra al pasar el ratón o el foco, solo con CSS, y cada proyecto tiene su ficha técnica, galería y navegación al anterior y siguiente.",
    highlights: [
      "View Transitions entre documentos (@view-transition): la foto de cada obra «viaja» del índice a su página, sin JavaScript",
      "Una página estática por proyecto generada con getStaticPaths, con ficha técnica, galería y anterior/siguiente",
      "Índice tipográfico con vista previa en CSS puro al pasar el ratón o el foco; miniaturas en móvil",
      "Animaciones de scroll nativas (animation-timeline: view()) que se desactivan con «reducir movimiento»",
      "Formulario de contacto con validación, foco en el primer error y contraste AA también en los bordes de los campos",
      "CSP con hashes, URLs limpias y canonical correctos; Lighthouse 100 en accesibilidad, buenas prácticas y SEO",
    ],
    stack: ["Astro 7", "HTML", "CSS", "View Transitions API", "CSS scroll-driven animations", "JavaScript", "Astro Assets (AVIF/WebP)", "node --test", "Vercel"],
    images: capturas("norte", 7),
    github: "https://github.com/MarioGuerra71/norte-estudio",
    demo: "https://norte-estudio-gamma.vercel.app",
    demoNota: "Estudio ficticio: proyectos, personas y datos son inventados, y las fotos de Unsplash muestran edificios sin relación. Abre el índice y entra en un proyecto para ver la transición.",
  },
];

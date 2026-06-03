// Datos de las páginas de servicio. Un objeto por servicio → ruta /servicios/<slug>/.
// Voz Chago: frases cortas, sin «yo», sin manifiesto, específico.

export const servicios = [
  {
    slug: 'branding',
    title: 'Branding e identidad de marca',
    serviceType: 'Branding',
    description:
      'Branding e identidad de marca en CDMX: estrategia, naming, identidad visual y brand book para negocios en crecimiento. Marca coherente de la raíz a la aplicación.',
    lede: 'Una marca coherente, de la estrategia a la aplicación. Identidad que la gente reconoce y recuerda.',
    intro:
      'El branding ordena lo que una marca dice, muestra y promete. Empieza por la estrategia —a quién le habla y qué lugar quiere ocupar— y baja hasta el logo, los colores y la voz. Cuando esas capas concuerdan, la marca se vuelve fácil de reconocer y de elegir.',
    incluye: [
      'Estrategia y posicionamiento de marca',
      'Naming y arquitectura de marca',
      'Identidad visual: logo, color, tipografía, sistema gráfico',
      'Identidad verbal: voz, tono y mensajes clave',
      'Brand book con reglas de uso',
      'Aplicaciones: papelería, redes, presentaciones',
    ],
    paraQuien:
      'PyMEs y founders que lanzan una marca o que necesitan ordenar una identidad que creció sin guía.',
    proceso: [
      { name: 'Inmersión', text: 'Entrevistas, revisión del negocio y del mercado. Qué problema resuelve la marca y para quién.' },
      { name: 'Estrategia', text: 'Posicionamiento, territorio y mensajes. La base que defiende cada decisión visual.' },
      { name: 'Identidad', text: 'Diseño del sistema visual y verbal. Pruebas en contextos reales, a tamaño pequeño y grande.' },
      { name: 'Brand book', text: 'Reglas de uso y entrega de archivos. La marca queda lista para aplicarse sola.' },
    ],
    faqs: [
      { question: '¿Cuánto cuesta un proyecto de branding?', answer: 'Depende del alcance. Una identidad básica ronda los $15,000–$45,000 MXN y un proyecto integral de branding boutique va de $60,000 a $250,000 MXN. La calculadora de presupuesto da un rango según tu caso.' },
      { question: '¿Cuánto tarda?', answer: 'Una identidad básica toma de 2 a 4 semanas. Un brand book completo, de 3 a 6 semanas. El plazo depende de la velocidad de las revisiones y de la investigación previa que requiera el proyecto.' },
      { question: '¿La diferencia entre logo y branding?', answer: 'El logo es una pieza. El branding es el sistema completo: estrategia, identidad visual, voz y reglas de uso. Un logo solo, sin estrategia detrás, queda como decoración.' },
    ],
    relacionados: [
      { label: 'Qué es la identidad de marca', href: '/blog/que-es-la-identidad-de-marca/' },
      { label: 'Qué es el branding boutique', href: '/blog/que-es-el-branding-boutique/' },
      { label: 'Cuánto cobra un diseñador en México', href: '/blog/cuanto-cobra-un-disenador-grafico-en-mexico/' },
    ],
  },
  {
    slug: 'marca-personal',
    title: 'Marca personal',
    serviceType: 'Marca personal',
    description:
      'Marca personal para profesionales y founders en CDMX. Posicionamiento, narrativa, portafolio y presencia en redes para atraer mejores clientes y proyectos.',
    lede: 'Tu nombre como activo. Posicionamiento, narrativa y presencia para atraer mejores proyectos.',
    intro:
      'La marca personal trabaja cuando tu nombre comunica algo concreto antes de la primera reunión. Define un territorio, una voz y una forma de mostrar el trabajo. El resultado: clientes que llegan ya convencidos y tarifas que sostienen el valor.',
    incluye: [
      'Posicionamiento y elección de nicho',
      'Narrativa y mensajes clave',
      'Identidad visual personal',
      'Estructura de portafolio',
      'Plan de contenido para LinkedIn e Instagram',
      'Guía de presencia y consistencia',
    ],
    paraQuien:
      'Profesionales, consultores y founders que venden por reputación y quieren que su nombre haga parte del trabajo.',
    proceso: [
      { name: 'Diagnóstico', text: 'Dónde estás hoy, qué te reconocen y qué quieres que te reconozcan.' },
      { name: 'Territorio', text: 'Nicho, mensajes y voz. El ángulo que te separa del resto.' },
      { name: 'Sistema', text: 'Identidad visual, portafolio y plantillas de contenido.' },
      { name: 'Plan', text: 'Calendario de publicación realista y métricas para saber si funciona.' },
    ],
    faqs: [
      { question: '¿Marca personal o marca de agencia?', answer: 'Si vendes tu criterio y tu trato directo, la marca personal pesa más. Si el negocio debe operar sin ti, conviene una marca de empresa. Muchos founders sostienen las dos en paralelo.' },
      { question: '¿Qué debo publicar?', answer: 'Trabajo real y lo que aprendiste al hacerlo. Casos, procesos y decisiones concretas comunican más que frases motivacionales. La consistencia importa más que el volumen.' },
      { question: '¿Cuánto tarda en dar resultados?', answer: 'Los primeros meses construyen base. La autoridad y los clientes por reputación suelen llegar entre el tercer y el sexto mes de publicación constante con un mensaje claro.' },
    ],
    relacionados: [
      { label: 'Marca personal para diseñadores', href: '/blog/marca-personal-para-disenador-grafico/' },
      { label: 'Qué es la identidad de marca', href: '/blog/que-es-la-identidad-de-marca/' },
    ],
  },
  {
    slug: 'diseno-web',
    title: 'Diseño web',
    serviceType: 'Diseño y desarrollo web',
    description:
      'Diseño web en CDMX: sitios rápidos, claros y optimizados para SEO y conversión. Landing pages y sitios multisección para PyMEs y founders.',
    lede: 'Sitios rápidos y claros, pensados para que la gente entienda y actúe.',
    intro:
      'Un buen sitio carga rápido, dice lo importante arriba y guía hacia una acción. El diseño parte de la estrategia de marca y se construye sobre bases técnicas sólidas: velocidad, estructura y datos para buscadores y para IA.',
    incluye: [
      'Diseño UX/UI a medida',
      'Desarrollo rápido y optimizado',
      'SEO técnico y on-page',
      'Schema y datos estructurados',
      'Core Web Vitals en verde',
      'Medición con analytics',
    ],
    paraQuien:
      'Negocios que necesitan una landing de campaña o un sitio multisección que capte y convierta.',
    proceso: [
      { name: 'Arquitectura', text: 'Qué páginas, qué jerarquía y qué acción buscas en cada una.' },
      { name: 'Diseño', text: 'Interfaz alineada a la marca, legible y rápida en móvil.' },
      { name: 'Desarrollo', text: 'Construcción optimizada, con SEO técnico y schema desde la base.' },
      { name: 'Medición', text: 'Analytics, Search Console y ajustes sobre datos reales.' },
    ],
    faqs: [
      { question: '¿Cuánto cuesta un sitio web?', answer: 'Una landing de una sección ronda los $12,000–$40,000 MXN. Un sitio multisección va de $40,000 a $120,000 MXN o más. El precio depende del número de páginas, las integraciones y el contenido.' },
      { question: '¿En qué plataforma?', answer: 'Según el caso. Sitios estáticos rápidos para portafolios y campañas; WordPress cuando el cliente edita seguido; soluciones a medida para herramientas. La velocidad y el SEO mandan en la decisión.' },
      { question: '¿Incluye SEO?', answer: 'Sí. El SEO técnico, la estructura y el schema vienen de fábrica. El posicionamiento sostenido se trabaja aparte con contenido y autoridad, en la consultoría de SEO y AI SEO.' },
    ],
    relacionados: [
      { label: 'Qué es GEO (AI SEO)', href: '/blog/que-es-geo-generative-engine-optimization/' },
      { label: 'Qué es el branding boutique', href: '/blog/que-es-el-branding-boutique/' },
    ],
  },
  {
    slug: 'estrategia',
    title: 'Estrategia de marca',
    serviceType: 'Estrategia de marca',
    description:
      'Estrategia de marca y posicionamiento en CDMX. Investigación, territorio, mensajes y arquitectura para decidir con claridad y crecer con coherencia.',
    lede: 'La base que defiende cada decisión. Posicionamiento, mensajes y dirección.',
    intro:
      'La estrategia responde preguntas que evitan gastar mal: a quién le hablas, qué lugar quieres ocupar y por qué te elegirían. De ahí salen el posicionamiento, los mensajes y la arquitectura de marca. Sin esa base, el diseño avanza a ciegas.',
    incluye: [
      'Investigación de mercado y audiencia',
      'Posicionamiento y territorio de marca',
      'Mensajes clave y propuesta de valor',
      'Arquitectura de marca',
      'Workshops con el equipo',
      'Documento de estrategia accionable',
    ],
    paraQuien:
      'Equipos que van a invertir en marca o marketing y quieren decidir sobre una base clara, no sobre intuiciones sueltas.',
    proceso: [
      { name: 'Investigación', text: 'Negocio, mercado, competencia y audiencia. Datos antes que opiniones.' },
      { name: 'Posicionamiento', text: 'El lugar que la marca quiere ocupar y la razón para elegirla.' },
      { name: 'Mensajes', text: 'Propuesta de valor y mensajes por audiencia.' },
      { name: 'Documento', text: 'Estrategia escrita, corta y aplicable. La usa todo el equipo.' },
    ],
    faqs: [
      { question: '¿Sirve si ya tengo logo?', answer: 'Sí. La estrategia ordena lo que ya existe y marca el rumbo. Muchas marcas tienen identidad visual pero no un posicionamiento claro, y ahí se pierden las decisiones.' },
      { question: '¿Cuánto tarda?', answer: 'Un proyecto de estrategia toma de 2 a 5 semanas, según la profundidad de la investigación y la disponibilidad del equipo para los workshops.' },
      { question: '¿Qué me llevo al final?', answer: 'Un documento corto y accionable: posicionamiento, audiencias, mensajes y arquitectura. Pensado para guiar diseño, contenido y campañas, no para guardarse en un cajón.' },
    ],
    relacionados: [
      { label: 'Qué es la identidad de marca', href: '/blog/que-es-la-identidad-de-marca/' },
      { label: 'Qué es el branding boutique', href: '/blog/que-es-el-branding-boutique/' },
    ],
  },
  {
    slug: 'consultoria-ai-seo',
    title: 'Consultoría SEO y AI SEO',
    serviceType: 'Consultoría SEO y AI SEO (GEO/AEO)',
    description:
      'Consultoría de SEO y AI SEO en CDMX. Posicionamiento en Google y citación en ChatGPT, Perplexity, Gemini y Claude con el método PRISMA (SEO + GEO + AEO).',
    lede: 'Visible en buscadores y en respuestas de IA. SEO clásico más GEO y AEO, con método.',
    intro:
      'La búsqueda cambió. Muchas consultas terminan sin clic, resueltas por un resumen de IA. Ser citado por esos sistemas pide trabajo distinto: entidades claras, datos citables y estructura legible para máquinas. El método PRISMA ordena ese trabajo en seis capas.',
    incluye: [
      'Auditoría SEO técnica y on-page',
      'Estrategia de contenido citable',
      'Schema y datos estructurados (JSON-LD)',
      'Configuración de llms.txt y robots para IA',
      'Optimización para AI Overviews (GEO/AEO)',
      'Medición de citación en LLMs y en Search Console',
    ],
    paraQuien:
      'Negocios y profesionales que quieren aparecer cuando alguien pregunta por su tema, en Google y en asistentes de IA.',
    proceso: [
      { name: 'Auditoría', text: 'Estado técnico, contenido y presencia como entidad. Brechas por capa PRISMA.' },
      { name: 'Cimientos', text: 'SEO técnico, schema y llms.txt. La base que las máquinas leen bien.' },
      { name: 'Contenido', text: 'Piezas citables con respuestas directas y datos propios.' },
      { name: 'Medición', text: 'Seguimiento de posiciones y de citas en ChatGPT, Perplexity, Gemini y Claude.' },
    ],
    faqs: [
      { question: '¿Qué es AI SEO o GEO?', answer: 'GEO (Generative Engine Optimization) busca que tu contenido aparezca en respuestas de IA, no solo en enlaces azules. Combina SEO clásico con datos citables, schema y entidades claras. Hay una guía completa en el blog.' },
      { question: '¿Sirve si ya hago SEO?', answer: 'Sí. El SEO técnico sigue siendo el cimiento. La consultoría agrega las capas de reconocimiento e influencia: que los modelos te identifiquen como entidad y te citen como fuente.' },
      { question: '¿Cómo se mide la citación en IA?', answer: 'Con seguimiento de preguntas clave en ChatGPT, Perplexity, Gemini y Claude, más métricas de Search Console. Al inicio el monitoreo es manual; luego se automatiza con herramientas de tracking.' },
    ],
    relacionados: [
      { label: 'Qué es GEO (Generative Engine Optimization)', href: '/blog/que-es-geo-generative-engine-optimization/' },
      { label: 'Validador de llms.txt', href: '/herramientas/validador-llms-txt/' },
    ],
  },
];

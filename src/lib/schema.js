/**
 * schema.js — Componentes JSON-LD reutilizables (schema.org) para AEO/GEO.
 * Objetos base de entidad + funciones para Article, FAQPage, BreadcrumbList,
 * SoftwareApplication y HowTo. Datos verificables: nada inventado.
 */

const SITE = 'https://santiagogil.com.mx';

/** @id estable para enlazar entidades entre bloques. */
export const PERSON_ID = `${SITE}/#santiago-gil`;
export const ORG_ID = `${SITE}/#nebugrama`;
export const WEBSITE_ID = `${SITE}/#website`;

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Santiago Gil',
  alternateName: 'Chago Gil',
  url: `${SITE}/`,
  image: `${SITE}/icon-512.png`,
  jobTitle: 'Branding & Marketing Strategist',
  description:
    'Estratega de branding y marketing en CDMX con más de 10 años de experiencia. Diseña identidad de marca, estrategia de posicionamiento, sitios web y consultoría de SEO y AI SEO para negocios en crecimiento.',
  knowsLanguage: ['es', 'en'],
  nationality: { '@type': 'Country', name: 'México' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ciudad de México',
    addressRegion: 'CDMX',
    addressCountry: 'MX',
  },
  knowsAbout: [
    'Branding',
    'Identidad de marca',
    'Estrategia de marca',
    'Posicionamiento de marca',
    'Marca personal',
    'Naming',
    'Diseño gráfico',
    'Diseño web',
    'Dirección creativa',
    'Marketing digital',
    'SEO',
    'AI SEO',
    'Generative Engine Optimization (GEO)',
    'Answer Engine Optimization (AEO)',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidad Nacional Autónoma de México — Facultad de Artes y Diseño',
    sameAs: 'https://www.fad.unam.mx/',
  },
  worksFor: { '@id': ORG_ID },
  sameAs: [
    'https://www.linkedin.com/in/gil-rivera/',
    'https://www.instagram.com/chago.gil/',
  ],
};

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Nebugrama',
  url: 'https://www.nebugrama.com/',
  description:
    'Agencia boutique de branding y marketing digital en CDMX. Identidad de marca, diseño web y estrategia para PyMEs y founders en México y Latinoamérica.',
  founder: { '@id': PERSON_ID },
  areaServed: [
    { '@type': 'Country', name: 'México' },
    { '@type': 'Place', name: 'Latinoamérica' },
  ],
};

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE}/#service`,
  name: 'Santiago Gil — Branding & Marketing Strategist',
  url: `${SITE}/`,
  image: `${SITE}/icon-512.png`,
  description:
    'Servicios de branding, identidad visual, diseño web, estrategia de marca y consultoría de SEO y AI SEO para negocios en crecimiento en México y Latinoamérica.',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ciudad de México',
    addressRegion: 'CDMX',
    addressCountry: 'MX',
  },
  areaServed: [
    { '@type': 'Country', name: 'México' },
    { '@type': 'Place', name: 'Latinoamérica' },
  ],
  serviceType: [
    'Branding',
    'Identidad visual',
    'Marca personal',
    'Diseño web',
    'Estrategia de marca',
    'Consultoría SEO y AI SEO',
  ],
  provider: { '@id': PERSON_ID },
  founder: { '@id': PERSON_ID },
  sameAs: [
    'https://www.linkedin.com/in/gil-rivera/',
    'https://www.instagram.com/chago.gil/',
  ],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: 'Santiago Gil',
  url: `${SITE}/`,
  inLanguage: 'es-MX',
  publisher: { '@id': PERSON_ID },
};

/**
 * Article + Author + DatePublished para posts del blog.
 * @param {{title:string, description:string, url:string, datePublished:string, dateModified?:string, image?:string}} a
 */
export function articleSchema(a) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    inLanguage: 'es-MX',
    mainEntityOfPage: { '@type': 'WebPage', '@id': a.url },
    image: a.image ? new URL(a.image, SITE).href : `${SITE}/icon-512.png`,
    datePublished: a.datePublished,
    dateModified: a.dateModified ?? a.datePublished,
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
  };
}

/**
 * FAQPage para los bloques de preguntas frecuentes.
 * @param {{question:string, answer:string}[]} faqs
 */
export function faqPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

/**
 * BreadcrumbList.
 * @param {{name:string, url:string}[]} items
 */
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: new URL(it.url, SITE).href,
    })),
  };
}

/**
 * SoftwareApplication para las herramientas gratuitas.
 * @param {{name:string, description:string, url:string}} t
 */
export function softwareApplicationSchema(t) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: t.name,
    description: t.description,
    url: new URL(t.url, SITE).href,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    inLanguage: 'es-MX',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'MXN' },
    author: { '@id': PERSON_ID },
  };
}

/**
 * HowTo para herramientas/guías con pasos.
 * @param {{name:string, description:string, steps:{name:string, text:string}[]}} h
 */
export function howToSchema(h) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: h.name,
    description: h.description,
    inLanguage: 'es-MX',
    step: h.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

/**
 * Service para páginas de servicio individuales.
 * @param {{name:string, description:string, url:string, serviceType:string}} s
 */
export function serviceSchema(s) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    description: s.description,
    url: new URL(s.url, SITE).href,
    serviceType: s.serviceType,
    provider: { '@id': PERSON_ID },
    areaServed: [
      { '@type': 'Country', name: 'México' },
      { '@type': 'Place', name: 'Latinoamérica' },
    ],
  };
}

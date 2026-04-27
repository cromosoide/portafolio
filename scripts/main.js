/* ============================================
   Santiago Gil — Portfolio JS
   Vanilla JS — cursor, parallax, reveals, modal
   ============================================ */

(function () {
  'use strict';

  /* ----- Loader ----- */
  var loader = document.getElementById('loader');
  var progress = loader.querySelector('.loader__progress');
  var loadStart = Date.now();

  function finishLoad() {
    progress.style.width = '100%';
    setTimeout(function () {
      loader.classList.add('done');
      document.body.classList.remove('loading');
      document.body.classList.add('loaded');
    }, 400);
  }

  document.body.classList.add('loading');

  // Simulate progress while resources load
  var pct = 0;
  var loadInterval = setInterval(function () {
    pct += Math.random() * 15;
    if (pct > 90) pct = 90;
    progress.style.width = pct + '%';
  }, 120);

  window.addEventListener('load', function () {
    clearInterval(loadInterval);
    var elapsed = Date.now() - loadStart;
    var wait = Math.max(0, 800 - elapsed); // Min 800ms for visual effect
    setTimeout(finishLoad, wait);
  });

  /* ----- Custom Cursor ----- */
  var cursor = document.getElementById('cursor');
  var cursorDot = cursor.querySelector('.cursor__dot');
  var cursorRing = cursor.querySelector('.cursor__ring');
  var cursorText = cursor.querySelector('.cursor__text');
  var mouseX = -100, mouseY = -100;
  var ringX = -100, ringY = -100;
  var isTouch = 'ontouchstart' in window;

  if (!isTouch) {
    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = 'translate(' + mouseX + 'px,' + mouseY + 'px)';
    });

    // Smooth ring follow
    function animateCursor() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      cursorRing.style.transform = 'translate(' + ringX + 'px,' + ringY + 'px)';
      cursorText.style.transform = 'translate(' + (ringX - cursorText.offsetWidth / 2) + 'px,' + (ringY - cursorText.offsetHeight / 2) + 'px)';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover states for links/buttons
    document.querySelectorAll('a, button, input, textarea, [data-cursor-text]').forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        var text = el.getAttribute('data-cursor-text');
        if (text) {
          cursor.classList.add('big');
          cursor.classList.remove('hover');
          cursorText.textContent = text;
        } else {
          cursor.classList.add('hover');
          cursor.classList.remove('big');
          cursorText.textContent = '';
        }
      });
      el.addEventListener('mouseleave', function () {
        cursor.classList.remove('hover', 'big');
        cursorText.textContent = '';
      });
    });

    // Sections with data-cursor-text
    document.querySelectorAll('section[data-cursor-text]').forEach(function (sec) {
      sec.addEventListener('mouseenter', function () {
        cursor.classList.add('big');
        cursorText.textContent = sec.getAttribute('data-cursor-text');
      });
      sec.addEventListener('mouseleave', function () {
        cursor.classList.remove('big');
        cursorText.textContent = '';
      });
    });
  }

  /* ----- Nav Scroll ----- */
  var nav = document.getElementById('nav');

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----- Mobile Menu ----- */
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');

  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  /* ----- Contact Modal ----- */
  var modal = document.getElementById('modal-contact');
  var modalOverlay = modal.querySelector('.modal__overlay');
  var modalClose = modal.querySelector('.modal__close');

  function openModal() {
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-modal="contact"]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      // Also close mobile nav if open
      links.classList.remove('open');
      toggle.classList.remove('active');
      openModal();
    });
  });

  modalOverlay.addEventListener('click', closeModal);
  modalClose.addEventListener('click', closeModal);

  /* ----- Project Modal ----- */
  var PROJECT_DATA = {
    'praxium': {
      name: 'Praxium',
      tagline: 'Consultoría fiscal estratégica para PyMEs',
      hero: 'images/portfolio/praxis.png',
      summary: 'Despacho fiscal premium dirigido a empresarios y profesionistas con +$3M de facturación anual. Posicionado como diferenciador entre "tener contador" y "tener estrategia fiscal".',
      scope: ['Identidad visual', 'Diseño y desarrollo web', 'Funnels de captación', 'Plan de marketing', 'Estrategia de contenidos', 'SEO técnico'],
      highlights: [
        { title: 'Sitio web premium', text: 'Multi-sección con narrativa B2B: cuatro pilares estratégicos, proceso, equipo, FAQ y blog. Animaciones cinemáticas y scroll suave para transmitir solidez.' },
        { title: 'Lead magnet', text: 'Diagnóstico fiscal gratuito como puerta de entrada. Convierte visitantes en conversaciones calificadas sin pedir compromiso inmediato.' },
        { title: 'Funnels y plan de marketing', text: 'Funnels de captación documentados + plan de contenidos para conversión continua a través de blog y redes.' }
      ],
      url: 'https://praxium.vercel.app/'
    },
    'nebugrama': {
      name: 'Nebugrama',
      tagline: 'Mi agencia de branding y marketing digital',
      hero: 'images/portfolio/nebugrama.png',
      summary: 'La marca propia: agencia boutique en CDMX especializada en branding estratégico, identidad visual, marketing digital y diseño web para PyMEs en México y LATAM. Manifiesto: "La nebulosa hecha diagrama".',
      scope: ['Naming', 'Identidad visual propia', 'Brand book / ADN', 'Diseño y desarrollo web', 'Posicionamiento', 'Blog estratégico'],
      highlights: [
        { title: 'Construcción de marca propia', text: 'Naming, ADN de marca y brand book completos. Identidad construida desde cero para diferenciarse de agencias tradicionales.' },
        { title: 'Sitio Next.js', text: 'Web premium con servicios, blog editorial y narrativa para founders. SEO técnico optimizado para PyMEs LATAM.' },
        { title: 'Posicionamiento boutique', text: 'Studio of one — branding sin overhead de agencia. Pitch dirigido a marcas que quieren pasar "de invisibles a inolvidables".' }
      ],
      url: 'https://www.nebugrama.com/'
    },
    'rivenza': {
      name: 'Rivenza',
      tagline: 'Firma legal especializada en pensiones IMSS y patrimonio',
      hero: 'images/portfolio/rivenza.png',
      summary: 'Despacho legal mexicano enfocado en pensiones IMSS Ley 73, Modalidad 40, despidos LFT y patrimonio. Posicionamiento premium con cálculos verificables y diagnóstico inicial sin costo.',
      scope: ['Brief de logo', 'Manual de identidad', 'ADN de marca', 'Propuesta tipográfica', 'Análisis de mercado', 'Plan de marketing', 'PRD del sitio web', 'Web con calculadora interactiva', 'Email automation'],
      highlights: [
        { title: 'Branding integral', text: 'Manual de identidad, ADN de marca y propuesta tipográfica desde brief de logo. Tono serio y verificable propio del sector legal.' },
        { title: 'Calculadora de pensión interactiva', text: 'Herramienta principal de captación: el usuario calcula su pensión IMSS en 30 segundos, generando lead calificado. PRD diseñado a medida.' },
        { title: 'Plan de marketing + análisis de mercado', text: 'Estrategia de captación con análisis del competitive landscape, blog de ideas y guías prácticas, y diagnóstico inicial gratuito como CTA principal.' },
        { title: 'Email marketing', text: 'Integración de email automatizado para nurturing de leads que descargan diagnóstico.' }
      ],
      url: 'https://www.rivenza.com.mx/'
    },
    'acelerarh': {
      name: 'AceleraRH',
      tagline: 'Consultoría ejecutiva premium de Recursos Humanos',
      hero: 'images/portfolio/acelerarh.png',
      summary: 'Consultoría que combina arquitectura organizacional, formación estratégica y soberanía profesional para ejecutivos C-Level. +15 años de experiencia, operación CDMX/MTY/GDL/remoto.',
      scope: ['Naming descriptivo', 'Manual de identidad', 'ADN de marca expandido', 'Manual de brand voice', 'Buyer personas', 'Sales deck B2B', 'Plan de marketing 360°', 'Benchmark de competidores', 'Web con suite de herramientas'],
      highlights: [
        { title: 'Sistema de marca completo', text: 'Naming, manual de identidad, ADN expandido, brand voice manual y fichas de buyer persona. Toda la base estratégica documentada.' },
        { title: 'Suite de herramientas digitales', text: 'Web con sección "Herramientas" — diagnósticos auto-aplicables (incluido "Descubre tu nivel de soberanía") como producto editorial que demuestra autoridad.' },
        { title: 'Plan de marketing 360° + sales deck', text: 'Plan integral con sales deck B2B para procesos comerciales, benchmark del mercado y estrategia de contenidos por vertical.' },
        { title: 'Posicionamiento premium', text: '"Erradicamos la obsolescencia humana mediante la soberanía profesional absoluta" — copy diferenciador de consultoras tradicionales.' }
      ],
      url: 'https://acelerarh.vercel.app/'
    },
    'coyotl-can': {
      name: 'Coyotl Can',
      tagline: 'Clínica veterinaria integral en Lindavista, CDMX',
      hero: 'images/portfolio/coyotl-can.png',
      summary: 'Clínica veterinaria con propuesta de "medicina con alma": consulta, intervención de mínima invasión, estancia, estética y vacunación. Negocio local con escalado digital.',
      scope: ['Manual de identidad visual', 'Manual de marca y ADN', 'Sistema de assets', 'Estrategia de contenido 90 días', 'Plan omnicanal', 'Web multi-sección con blog'],
      highlights: [
        { title: 'Branding completo', text: 'Manual de identidad visual + manual de marca y ADN + sistema de assets. Documentación lista para escalar el negocio sin perder consistencia.' },
        { title: 'Sitio web integral', text: 'Multi-sección con catálogo de servicios médicos, perfiles del equipo, testimonios, blog de cuidado animal y agenda de cita. Integración con Instagram.' },
        { title: 'Plan omnicanal + 90 días de contenido', text: 'Estrategia para coordinar redes, blog y consulta. Calendario de contenidos para activar engagement los primeros tres meses post-lanzamiento.' }
      ],
      url: 'https://coyotl-can.vercel.app/'
    },
    'poxahuac': {
      name: 'Poxahuac',
      tagline: 'Restaurante de pozole tradicional en Amecameca',
      hero: 'images/portfolio/poxahuac.png',
      summary: '"El pozole más esponjoso de Amecameca" — restaurante familiar con vista a los volcanes, terraza pet-friendly y antojitos mexicanos. Posicionamiento local fuerte para captar turismo gastronómico.',
      scope: ['Branboard / sistema de marca', 'Diseño y desarrollo web', 'SEO local', 'Integración Instagram + Google Maps'],
      highlights: [
        { title: 'Branboard completo', text: 'Sistema de marca documentado: paleta, tipografía, fotografía, voz. Coherencia entre menú impreso, redes y experiencia en sitio.' },
        { title: 'Landing local de captación', text: 'Web con menú, platillos estrella, testimonios, ubicación con maps embed, IG embed y FAQ. Construida para SEO local "pozole Amecameca".' },
        { title: 'Reservas + integración social', text: 'CTA directos a reserva por contacto y feed de Instagram embebido para mostrar experiencia real del lugar.' }
      ],
      url: 'https://poxahuac-web.vercel.app/'
    },
    'creandoando': {
      name: 'CreandoAndo by Sandy',
      tagline: 'Party planner en Chimalhuacán, Edomex',
      hero: 'images/portfolio/creandoando.png',
      summary: 'Decoración de fiestas con arcos de globos, mesas de dulces, invitaciones digitales y entrega a domicilio en Edomex. +100 fiestas, 5 estrellas en Facebook. Negocio local de servicio.',
      scope: ['Brief creativo', 'Refresh de paleta', 'Arquitectura de servicios', 'Plan de cross-selling', 'Posicionamiento local SEO', 'Web con cotización por WhatsApp', 'Producto: invitaciones digitales'],
      highlights: [
        { title: 'Refresh de paleta y voz', text: 'Identidad visual lúdica y cálida que refleja el tono "hecho con amor". Refresh de paleta para diferenciarse de la competencia local.' },
        { title: 'Sitio web con cotización', text: 'Landing con paquetes, galería interactiva, FAQ y cotización por WhatsApp embebido. UI playful con badges de prueba social.' },
        { title: 'Arquitectura de servicios + cross-selling', text: 'Servicios documentados con plan de venta cruzada: el cliente que pide arco de globos también recibe propuesta de mesa de dulces e invitaciones.' },
        { title: 'Invitaciones digitales como producto', text: 'Línea de invitaciones digitales desde $199 como producto de entrada — convierte clientes de evento físico en pipeline recurrente.' }
      ],
      url: 'https://www.creandoandobysandy.com/'
    },
    'fanmorita': {
      name: 'FanMorita',
      tagline: 'Portfolio de motion design — Estefany Rodríguez Mora',
      hero: 'images/portfolio/fanmorita.png',
      summary: '+7 años de experiencia en motion graphics, diseño editorial, branding e ilustración. Portafolio digital para clientes como Netlogistik y Econecta. Tono creativo y memorable, multilenguaje (ES/EN).',
      scope: ['Identidad visual', 'Portfolio SPA en React + Vite', 'Animaciones cinemáticas', 'Marquee de servicios', 'Multilenguaje'],
      highlights: [
        { title: 'Identidad para creativa', text: 'Logotipo expresivo "Fan_Morita" con onda gestual — refleja el motion craft sin caer en cliché de portfolio de diseñadora.' },
        { title: 'SPA con animaciones', text: 'React + Vite con interacciones cinemáticas, marquee continuo de servicios, transiciones suaves entre proyectos. Diseñada para sentirse como reel animado.' },
        { title: 'Multilenguaje ES/EN', text: 'Selector de idioma para apuntar a clientes locales y prospectos internacionales sin duplicar sitio.' }
      ],
      url: 'https://www.fanmorita.com/'
    }
  };

  var projectModal = document.getElementById('modal-project');
  var projectModalOverlay = projectModal.querySelector('.modal__overlay');
  var projectModalClose = projectModal.querySelector('.modal__close');
  var projectModalImg = projectModal.querySelector('.project-modal__img');
  var projectModalName = projectModal.querySelector('.project-modal__name');
  var projectModalTagline = projectModal.querySelector('.project-modal__tagline');
  var projectModalSummary = projectModal.querySelector('.project-modal__summary');
  var projectModalScope = projectModal.querySelector('.project-modal__scope');
  var projectModalHighlights = projectModal.querySelector('.project-modal__highlights');
  var projectModalCta = projectModal.querySelector('.project-modal__cta');
  var projectModalContent = projectModal.querySelector('.modal__content');

  function openProjectModal(slug) {
    var data = PROJECT_DATA[slug];
    if (!data) return;

    projectModalImg.src = data.hero;
    projectModalImg.alt = data.name + ' — captura del sitio';
    projectModalName.textContent = data.name;
    projectModalTagline.textContent = data.tagline;
    projectModalSummary.textContent = data.summary;

    projectModalScope.innerHTML = '';
    data.scope.forEach(function (s) {
      var li = document.createElement('li');
      li.textContent = s;
      projectModalScope.appendChild(li);
    });

    projectModalHighlights.innerHTML = '';
    data.highlights.forEach(function (h) {
      var div = document.createElement('div');
      div.className = 'project-modal__highlight';
      var heading = document.createElement('h4');
      heading.textContent = h.title;
      var p = document.createElement('p');
      p.textContent = h.text;
      div.appendChild(heading);
      div.appendChild(p);
      projectModalHighlights.appendChild(div);
    });

    projectModalCta.href = data.url;

    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (projectModalContent) projectModalContent.scrollTop = 0;
  }

  function closeProjectModal() {
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.portfolio__link[data-project]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var slug = this.getAttribute('data-project');
      if (PROJECT_DATA[slug]) {
        e.preventDefault();
        openProjectModal(slug);
      }
    });
  });

  projectModalOverlay.addEventListener('click', closeProjectModal);
  projectModalClose.addEventListener('click', closeProjectModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeModal();
      closeProjectModal();
    }
  });

  /* ----- Reveal on Scroll (IntersectionObserver) ----- */
  var reveals = document.querySelectorAll('.reveal, .reveal-mask');

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
          setTimeout(function () {
            entry.target.classList.add('visible');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ----- Parallax Images on Scroll ----- */
  var parallaxImages = document.querySelectorAll('.parallax-img');

  function updateParallax() {
    var scrollY = window.scrollY;
    var vh = window.innerHeight;

    parallaxImages.forEach(function (img) {
      var rect = img.parentElement.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh) return;

      var progress = (rect.top + rect.height / 2) / (vh + rect.height);
      var offset = (progress - 0.5) * -60; // Subtle parallax
      img.style.transform = 'translateY(' + offset + 'px) scale(1.05)';
    });
  }

  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();

  /* ----- Word Switcher ----- */
  var words = document.querySelectorAll('.intro__word');
  if (words.length > 1) {
    var current = 0;
    setInterval(function () {
      words[current].classList.remove('active');
      current = (current + 1) % words.length;
      words[current].classList.add('active');
    }, 2200);
  }

  /* ----- Smooth Scroll for Anchor Links ----- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ----- Magnetic Effect on Buttons ----- */
  if (!isTouch) {
    document.querySelectorAll('.btn, .nav__cta, .footer__social a').forEach(function (el) {
      el.classList.add('magnetic');

      el.addEventListener('mousemove', function (e) {
        var rect = el.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = 'translate(' + x * 0.25 + 'px,' + y * 0.25 + 'px)';
      });

      el.addEventListener('mouseleave', function () {
        el.style.transform = '';
      });
    });
  }

})();

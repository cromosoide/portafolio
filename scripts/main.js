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

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
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

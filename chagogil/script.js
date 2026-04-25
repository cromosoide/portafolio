/* ============================================
   @chagogil — Linkpage JS
   Vanilla JS · cursor + reveals
   ============================================ */

(function () {
  'use strict';

  /* ----- Reveal on scroll/load with stagger from data-delay ----- */
  var reveals = document.querySelectorAll('.reveal');

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
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ----- Custom cursor (desktop only, with feature detection) ----- */
  var supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  if (supportsHover) {
    var cursor = document.getElementById('cursor');
    if (!cursor) return;

    var dot = cursor.querySelector('.cursor__dot');
    var ring = cursor.querySelector('.cursor__ring');
    var mouseX = -100, mouseY = -100;
    var ringX = -100, ringY = -100;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = 'translate(' + mouseX + 'px,' + mouseY + 'px)';
    });

    function animateRing() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = 'translate(' + ringX + 'px,' + ringY + 'px)';
      requestAnimationFrame(animateRing);
    }
    animateRing();

    /* Hover states: trigger on links/buttons */
    document.querySelectorAll('a, button, [data-cursor="hover"]').forEach(function (el) {
      el.addEventListener('mouseenter', function () {
        cursor.classList.add('hover');
      });
      el.addEventListener('mouseleave', function () {
        cursor.classList.remove('hover');
      });
    });

    /* Hide cursor when leaving window */
    document.addEventListener('mouseleave', function () {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', function () {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    });
  }

  /* ----- Track outbound clicks (analytics-ready, opt-in) ----- */
  document.querySelectorAll('a[href^="http"]').forEach(function (a) {
    a.addEventListener('click', function () {
      var href = this.getAttribute('href');
      // Hook for future analytics: window.gtag, plausible, etc.
      if (typeof window.linkClick === 'function') {
        window.linkClick(href);
      }
    });
  });

})();

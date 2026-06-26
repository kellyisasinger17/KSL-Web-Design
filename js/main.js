import { animate, stagger } from '../node_modules/animejs/dist/modules/index.js';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  const revealSections = document.querySelectorAll('section');

  revealSections.forEach((section) => {
    Array.from(section.children).forEach((child) => {
      if (child.classList.contains('section-bridge-logo')) {
        return;
      }

      child.style.opacity = '0';
      child.style.transform = 'translateY(28px)';
    });
  });

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const revealChildren = Array.from(entry.target.children).filter((child) => {
        return !child.classList.contains('section-bridge-logo');
      });

      animate(revealChildren, {
        opacity: [0, 1],
        translateY: [28, 0],
        delay: stagger(170),
        duration: 1400,
        ease: 'outSine'
      });

      observer.unobserve(entry.target);
    });
  }, { threshold: 0.18 });

  revealSections.forEach((section) => revealObserver.observe(section));

}

if (window.lucide) {
  lucide.createIcons();
}

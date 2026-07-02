if (window.lucide) {
  lucide.createIcons();
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  const DURATION = '1200ms';
  const EASE    = 'cubic-bezier(0.22, 1, 0.36, 1)';
  const STAGGER = 180;
  const SLIDE   = '30px';

  // Animate direct children of every section except the homepage hero
  // (hero is already visible on load and contains the navbar)
  const sections = document.querySelectorAll('section:not(.homepage-hero)');

  sections.forEach(section => {
    Array.from(section.children).forEach(child => {
      if (child.classList.contains('section-bridge-logo') || child.tagName === 'HEADER') return;
      child.style.opacity = '0';
      child.style.transform = `translateY(${SLIDE})`;
      child.style.transition = `opacity ${DURATION} ${EASE}, transform ${DURATION} ${EASE}`;
    });
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const children = Array.from(entry.target.children).filter(
        c => !c.classList.contains('section-bridge-logo') && c.tagName !== 'HEADER'
      );

      children.forEach((child, i) => {
        setTimeout(() => {
          child.style.opacity = '1';
          child.style.transform = 'translateY(0)';
        }, i * STAGGER);
      });

      obs.unobserve(entry.target);
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));
}

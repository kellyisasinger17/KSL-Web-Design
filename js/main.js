document.documentElement.classList.add('js');

const interiorPage = document.body.classList.contains('jewelry-inner') && !document.body.classList.contains('static-shell');

if (interiorPage) {
  const existingHeader = document.querySelector('.site-header');
  const existingHero = document.querySelector('.standard-hero');

  if (existingHero) {
    const pageHeading = existingHero.querySelector('h1');
    const titleBand = document.createElement('div');
    titleBand.className = 'inner-page-title';
    if (pageHeading) titleBand.append(pageHeading.cloneNode(true));
    existingHero.replaceWith(titleBand);
  }

  if (existingHeader) {
    existingHeader.outerHTML = `
      <header class="jewelry-header" data-header>
        <a class="jewelry-brand" href="index.html" aria-label="Cédille and Co. Jewelry home"><img src="Images/Cedille and Co Stone Logo - Transparent.png" alt="Cédille and Co. Jewelry"></a>
        <button class="menu-toggle" type="button" aria-controls="primary-menu" aria-expanded="false"><span>Menu</span><i data-lucide="menu" aria-hidden="true"></i></button>
        <nav class="jewelry-nav" id="primary-menu" aria-label="Primary navigation"><a href="index.html#newest-arrivals">Shop All</a><a href="index.html#our-story">Our Story</a><a href="contact.html">Contact</a></nav>
        <a class="bag-link" href="#" aria-label="Shopping bag — store coming soon" title="Store coming soon"><i data-lucide="shopping-bag" aria-hidden="true"></i><span>0</span></a>
      </header>`;
  }

}

document.querySelectorAll('.navbar .dropdown').forEach((item) => {
  item.querySelector('.dropdown-menu')?.remove();
  item.classList.remove('dropdown');
  const link = item.querySelector('.dropdown-toggle');
  if (link) {
    link.classList.remove('dropdown-toggle');
    link.removeAttribute('data-bs-toggle');
    link.removeAttribute('aria-expanded');
    link.removeAttribute('role');
  }
});

if (window.lucide) window.lucide.createIcons();

const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.jewelry-nav');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('is-open', !open);
    menuButton.querySelector('svg')?.setAttribute('data-lucide', open ? 'menu' : 'x');
    if (window.lucide) window.lucide.createIcons();
  });
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelector('.bag-link')?.addEventListener('click', (event) => event.preventDefault());
document.querySelectorAll('a[aria-disabled="true"]').forEach((link) => {
  link.addEventListener('click', (event) => event.preventDefault());
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll('.reveal');

if (reduceMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
  reveals.forEach((element) => observer.observe(element));
}

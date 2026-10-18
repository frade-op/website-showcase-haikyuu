/* ==========================================================================
   Menu: só aparece depois que a animação do banner termina e destaca
   a seção visível. No celular vira um dropdown aberto por um botão.
   ========================================================================== */

(() => {
  const menu = document.getElementById('menu');
  const toggle = document.getElementById('menuToggle');
  const banner = document.getElementById('scroll');
  const links = [...menu.querySelectorAll('.menu__link')];
  const sections = links.map(link => document.getElementById(link.dataset.section));

  function setOpen(open) {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  function update() {
    const bannerDone = scrollY >= banner.offsetHeight - innerHeight - 2;
    menu.classList.toggle('is-visible', bannerDone);
    menu.setAttribute('aria-hidden', String(!bannerDone));
    toggle.tabIndex = bannerDone ? 0 : -1;
    links.forEach(link => { link.tabIndex = bannerDone ? 0 : -1; });
    if (!bannerDone) setOpen(false);

    const line = innerHeight * 0.4;
    let active = null;
    sections.forEach((section, i) => {
      if (section.getBoundingClientRect().top <= line) active = links[i];
    });
    links.forEach(link => {
      if (link === active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  }

  toggle.addEventListener('click', () => setOpen(!menu.classList.contains('is-open')));
  links.forEach(link => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('click', event => {
    if (!menu.contains(event.target)) setOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
  update();
})();

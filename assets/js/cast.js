/* ==========================================================================
   Seção "Elenco": monta o seletor a partir de CAST_SCHOOLS.
   Hover mostra uma prévia, clique fixa o conteúdo.
   Deve ser carregado antes de i18n.js, que lê o português do DOM.
   ========================================================================== */

(() => {
  const layout = document.getElementById('castLayout');
  if (!layout) return;

  const nav = layout.querySelector('.cast__nav');
  const stage = layout.querySelector('.cast__stage');

  function element(tag, className, props = {}) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    Object.assign(el, props);
    return el;
  }

  function i18nNode(tag, className, key, html) {
    const el = element(tag, className, { innerHTML: html });
    el.dataset.i18n = key;
    return el;
  }

  function panel(id, name, img, roleKey, role, textKey, text) {
    const article = element('article', 'cast__panel', { id });
    if (img) article.appendChild(element('img', 'cast__img', { src: img, alt: name, loading: 'lazy' }));
    article.appendChild(element('h3', 'cast__name', { textContent: name }));
    article.appendChild(i18nNode('p', 'cast__role', roleKey, role));
    article.appendChild(i18nNode('p', '', textKey, text));
    return article;
  }

  CAST_SCHOOLS.forEach(school => {
    const wrapper = element('div', 'cast__school');
    const listId = `cast-list-${school.id}`;

    const button = element('button', 'cast__item cast__item--school', { type: 'button' });
    button.dataset.target = `panel-${school.id}`;
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', listId);
    const chevron = element('span', 'cast__chevron', { textContent: '▾' });
    chevron.setAttribute('aria-hidden', 'true');
    button.append(element('span', '', { textContent: school.name }), chevron);

    const list = element('ul', 'cast__list', { id: listId });
    wrapper.append(button, list);
    nav.appendChild(wrapper);

    stage.appendChild(panel(
      `panel-${school.id}`, school.name, null,
      `cast.${school.id}.role`, school.role.pt,
      `cast.${school.id}.p`, school.text.pt
    ));

    school.chars.forEach(char => {
      const item = element('li');
      const charButton = element('button', 'cast__item cast__item--char', {
        type: 'button',
        textContent: char.name,
      });
      charButton.dataset.target = `panel-${char.id}`;
      item.appendChild(charButton);
      list.appendChild(item);

      stage.appendChild(panel(
        `panel-${char.id}`, char.name, char.img,
        `cast.${char.id}.role`, char.role.pt,
        `cast.${char.id}.p`, char.text.pt
      ));
    });
  });

  const items = [...layout.querySelectorAll('.cast__item')];
  const panels = [...stage.querySelectorAll('.cast__panel')];
  let pinned = items[0];
  let previewed = null;

  function openSchool(button, open) {
    button.closest('.cast__school').classList.toggle('is-open', open);
    button.setAttribute('aria-expanded', String(open));
  }

  function render() {
    const shown = (previewed || pinned).dataset.target;
    panels.forEach(p => p.classList.toggle('is-visible', p.id === shown));
    items.forEach(item => item.classList.toggle('is-active', item === pinned));
  }

  items.forEach(item => {
    const preview = () => { previewed = item; render(); };
    item.addEventListener('mouseenter', preview);
    item.addEventListener('focus', preview);
    item.addEventListener('blur', () => { previewed = null; render(); });
    item.addEventListener('click', () => {
      pinned = item;
      previewed = null;
      if (item.classList.contains('cast__item--school')) {
        openSchool(item, !item.closest('.cast__school').classList.contains('is-open'));
      }
      render();
      // No celular o conteúdo fica abaixo da lista; leva a tela até ele
      if (matchMedia('(max-width: 760px)').matches) {
        stage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  nav.addEventListener('mouseleave', () => {
    previewed = null;
    render();
  });

  openSchool(items[0], true);
  render();
})();

/* ==========================================================================
   Idiomas (PT/EN)
   O português fica no próprio HTML e é lido uma vez ao carregar; aqui ficam
   apenas as traduções para o inglês. Atributos usados no HTML:
     data-i18n="chave"       → troca o conteúdo do elemento (aceita <span>, <em>)
     data-i18n-alt="chave"   → troca o atributo alt
     data-i18n-aria="chave"  → troca o atributo aria-label
   ========================================================================== */

const EN = {
  'court.alt': 'Volleyball court',
  'scene.aria': 'Volleyball match: Kageyama sets for Hinata to spike',
  'kageyama.alt': 'Kageyama, the setter',
  'ball.alt': 'Volleyball',
  'hinata.alt': 'Hinata, the spiker',
  'hint': 'Scroll down',

  'corner.tl': 'Nishinoya sticker',
  'corner.tr': 'Yachi sticker',
  'corner.bl': 'Daichi sticker',
  'corner.br': 'Tsukishima sticker',

  'about.title1': 'What is <span>Haikyuu!!</span>',
  'about.p1': 'Haikyuu!! is a sports manga by Haruichi Furudate, published in Weekly Shōnen Jump from 2012 to 2020 and adapted into an anime by Production I.G.',
  'about.p2': 'The story follows Shoyo Hinata, a short boy with an extraordinary jump, and Tobio Kageyama, a genius setter. Together on the Karasuno High volleyball team, they must turn rivalry into partnership to reach the top.',
  'about.title2': 'Why <span>talk about it</span>',
  'why1.h': 'A story worth your time',
  'why1.p': 'Lovable characters, a well-built plot and very useful life lessons. Overcoming obstacles here is neither a cliché nor unrealistic: having friends does not fix everything. It is a down-to-earth story and yet an optimistic one.',
  'why2.h': 'It teaches real volleyball',
  'why2.p': 'The anime explains the sport and leaves viewers hooked and cheering, like in a World Cup final or a Brazilian men\u2019s national team match at its peak.',
  'why3.h': 'One of my favorites',
  'why3.p': 'It only loses to One Piece on my list of favorite anime.',
  'why4.h': 'More portfolio projects',
  'why4.p': 'I wanted more projects to show, and this was a fun way to practice scroll animations with a theme I like.',

  'clip.eyebrow': 'Scene · 場面',
  'clip.title': 'Straight from the <span>court</span>',
  'clip.play': 'Play the anime clip',
  'clip.iframe': 'Haikyuu!! anime clip',
  'clip.caption': 'A clip from the anime to feel the speed of the game.',
  'clip.link': 'Open on YouTube ↗',

  'manga.eyebrow': 'Manga · 漫画 · Final arc',
  'manga.title': 'Hinata in <span>Brazil</span>',
  'manga.lead': 'In the final stretch of the manga, Hinata crosses the world to learn a different version of the sport he loves: beach volleyball.',
  'spoiler.title': 'Spoiler alert',
  'spoiler.p': 'This section covers events from the manga\u2019s final arc (chapters 371 to 377), including what happens to Hinata after high school. If you have not read it yet, it is best to stop here.',
  'spoiler.btn': 'I\u2019ve read it, show me',

  'p1.h': 'On the other side of the world',
  'p1.p': 'After high school, Hinata did not wait for a chance to show up. He flew to Brazil on his own, a country with a huge volleyball tradition, and went to live the sport on the sand, far from his team, his language and everything he knew.',
  'p1.src': 'Ch. 371 · 地球の裏側で (\u201COn the Other Side of the World\u201D)',
  'p2.h': 'It was not a quick trip',
  'p2.p': 'Hinata had arrived in Brazil over a year and a half before chapter 371 and only returned to Japan in March 2018. That was plenty of time to make mistakes, get lost and start over.',
  'p2.l1': 'He struggled to play on the sand.',
  'p2.l2': 'He worked part-time in food delivery, got lost and had his wallet stolen.',
  'p2.l3': 'He had a hard time with the language and with homesickness.',
  'p2.l4': 'He picked himself up after seeing people of all ages playing on the beach.',
  'p3.h': '\u201CNinja Shoyo\u201D',
  'p3.p': 'Over time he became a known figure among beach players. He was up for playing with any partner, learned from everyone and even earned a nickname. That is how he teamed up with the Brazilian Heitor Santana.',

  'vs.title': 'Court <span>×</span> Beach',
  'vs.court.h': 'Indoor volleyball',
  'vs.court.l1': 'Six players per side, each with a role.',
  'vs.court.l2': 'Firm floor: Hinata\u2019s jump is the main weapon.',
  'vs.court.l3': 'Setter, blockers and libero: the game is collective and specialized.',
  'vs.court.l4': 'Indoors, with no weather to get in the way.',
  'vs.sand.h': 'Beach volleyball',
  'vs.sand.l1': 'Only two players per side: nobody can hide.',
  'vs.sand.l2': 'Sand that grips the feet and tires the legs.',
  'vs.sand.l3': 'Wind and sun change the ball and the choice of court side.',
  'vs.sand.l4': 'Strict touch rules: a dink only counts with the fingertips (<em>cobra</em>) or the knuckles (<em>pokey</em>), and overhand setting is risky.',

  'back.title': 'What he <span>brought back</span>',
  'back.a.h': 'Complete game',
  'back.a.p': 'In a pair, everyone receives, defends, blocks and attacks. Hinata, who used to live for the attack, learned to handle every fundamental.',
  'back.b.h': 'Reading the game',
  'back.b.p': 'In pair duels, he teases the opponent, stands on one side and runs to the other, as if he already knew where the ball would go. It is brains, not just jumping.',
  'back.c.h': 'Adaptation',
  'back.c.p': 'Wind, sand, language and different partners: Hinata learned to perform in any condition and to be grateful for every ball he receives, which matters on his return to the court.',

  'why.h': 'Why Brazil matters so much',
  'why.p': 'This stretch is not a break in the middle of the story: it spans several chapters of the final arc and is told with care, with routine, setbacks, friends and even a nickname. In Brazil, Hinata learns to fend for himself in a two-on-two game, and that is the baggage he carries back to the court.',
  'why.final': 'In March 2018, he returns to Japan and goes after V.League teams, starting with the MSBY Black Jackals.',

  'rival.title': 'A <span>healthy</span> rivalry',
  'rival.hinata': 'Hinata',
  'rival.kageyama': 'Kageyama',
  'rival.p': 'The Black Jackals, the team Hinata joins, face the Schweiden Adlers in the V.League, where Kageyama, his old Karasuno partner, plays as the starting setter. The duo behind Karasuno\u2019s famous quick attack is now on opposite sides of the net: each wants to beat the other, and each hopes the other keeps getting better.',

  'cast.eyebrow': 'Cast · キャラクター',
  'cast.title': 'Meet the <span>characters</span>',
  'cast.hint': 'Hover to peek, click to pin.',
  'cast.nav': 'Schools and characters',
  'menu.aria': 'Main menu',
  'menu.toggle': 'Menu',
  'menu.about': 'About',
  'menu.cast': 'Characters',
  'menu.clip': 'Anime',
  'menu.manga': 'Hinata in Brazil',

  'manga.source': 'Reference: chapters 371 (\u201COn the Other Side of the World\u201D), 376 (\u201CBeach Volleyball\u201D) and 377 (\u201CGoing Home!\u201D) of Haikyū!!, by Haruichi Furudate.',
};

// Textos do elenco vêm de cast-data.js (carregado antes deste arquivo)
CAST_SCHOOLS.forEach(school => {
  EN[`cast.${school.id}.role`] = school.role.en;
  EN[`cast.${school.id}.p`] = school.text.en;
  school.chars.forEach(char => {
    EN[`cast.${char.id}.role`] = char.role.en;
    EN[`cast.${char.id}.p`] = char.text.en;
  });
});

const STORAGE_KEY = 'haikyuu-lang';
const ATTRIBUTES = [['data-i18n-alt', 'alt'], ['data-i18n-aria', 'aria-label']];

const collapse = text => text.replace(/\s+/g, ' ').trim();

// Guarda o português que já está no HTML antes de qualquer troca
const PT = {};
document.querySelectorAll('[data-i18n]').forEach(el => {
  PT[el.dataset.i18n] = collapse(el.innerHTML);
});
ATTRIBUTES.forEach(([marker, attribute]) => {
  document.querySelectorAll(`[${marker}]`).forEach(el => {
    PT[el.getAttribute(marker)] = el.getAttribute(attribute);
  });
});
PT['clip.iframe'] = 'Trecho do anime Haikyuu!!';

const dictionaries = { pt: PT, en: EN };

function initialLanguage() {
  let saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (error) { /* armazenamento indisponível */ }
  if (saved in dictionaries) return saved;
  return navigator.language && navigator.language.toLowerCase().startsWith('en') ? 'en' : 'pt';
}

const i18n = {
  lang: 'pt',
  t(key) {
    return dictionaries[this.lang][key] ?? PT[key] ?? key;
  },
  set(lang) {
    this.lang = lang;
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      el.innerHTML = this.t(el.dataset.i18n);
    });
    ATTRIBUTES.forEach(([marker, attribute]) => {
      document.querySelectorAll(`[${marker}]`).forEach(el => {
        el.setAttribute(attribute, this.t(el.getAttribute(marker)));
      });
    });

    const iframe = document.querySelector('#clipPlayer iframe');
    if (iframe) iframe.title = this.t('clip.iframe');

    const toggle = document.getElementById('langToggle');
    toggle.textContent = lang === 'en' ? 'PT' : 'EN';
    toggle.setAttribute('aria-label', lang === 'en' ? 'Mudar para português' : 'Switch to English');

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (error) { /* armazenamento indisponível */ }
  },
};

document.getElementById('langToggle').addEventListener('click', () => {
  i18n.set(i18n.lang === 'en' ? 'pt' : 'en');
});

i18n.set(initialLanguage());

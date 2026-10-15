/* ==========================================================================
   Haikyuu!! – animação guiada pela rolagem
   Progresso (0 → 1) = posição da rolagem. Um valor suavizado (`current`)
   persegue o valor real (`target`) a cada frame, e a diferença entre frames
   indica a velocidade, usada nos rastros e nas linhas de velocidade.
   ========================================================================== */

/* ---------- Configuração ---------- */

const GHOST_COUNT = 6;          // cópias de rastro por elemento
const SMOOTHING = 0.12;         // 0–1: quanto maior, mais rápido segue a rolagem
const SPEED_GAIN = 70;          // converte variação por frame em intensidade (0–1)

const CAMERA_ZOOM = 0.14;       // zoom adicional no fim da rolagem
const CAMERA_SHIFT_X = -1.5;    // deslocamento do fundo (% da cena)
const CAMERA_SHIFT_Y = 1;

const KAGEYAMA_START_X = -70;   // px
const KAGEYAMA_TRAVEL_X = -80;  // px percorridos durante a rolagem
const KAGEYAMA_RISE_Y = -2.5;   // % da altura dele (profundidade/parallax)

// Câmera no celular (retrato): foco em % da largura da cena
const MOBILE_QUERY = '(max-width: 700px) and (orientation: portrait)';
const MOBILE_FOCUS_START = 38;  // perto do Kageyama
const MOBILE_FOCUS_END = 68;    // perto do Hinata
const MOBILE_CAMERA_ZOOM = 0.05;
const CAMERA_ORIGIN_X = 65;     // transform-origin da cena (CSS), em %

const BALL_SPIN = 900;          // graus de rotação até o fim
const BALL_START_OFFSET_X = 70; // px de deslocamento extra no início

/* ---------- Elementos ---------- */

const byId = id => document.getElementById(id);

const sceneBack = byId('sceneBack');
const sceneFront = byId('scene');
const kageyama = byId('kageyama');
const ball = byId('ball');
const hinata = byId('hinata');
const kageyamaShadow = document.querySelector('.shadow.kageyama');
const hinataShadow = byId('shHinata');
const ballShadow = byId('shBall');
const speedLines = byId('speed');
const hint = byId('hint');

/* ---------- Utilitários ---------- */

const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const easeOut = t => 1 - Math.pow(1 - t, 2.2);
const easeInOut = t => t * t * (3 - 2 * t);
const mobileQuery = matchMedia(MOBILE_QUERY);

/* ---------- Trajetórias ---------- */

// Bola (centro, em % da cena): sai das mãos do Kageyama e vai até o Hinata, em arco.
function ballAt(t) {
  const arc = 12 * Math.sin(Math.PI * t) * (1 - t * 0.35);
  return {
    x: lerp(42, 75.8, t),
    y: lerp(56, 40.5, t) - arc,
    scale: lerp(1.25, 1, t),
  };
}

// Hinata (% do próprio tamanho): sai de baixo/esquerda e sobe até a posição de ataque.
function hinataAt(t) {
  const eased = easeOut(t);
  return {
    x: lerp(-80, 12, eased),
    y: lerp(48, 0, eased),
  };
}

/* ---------- Posicionamento ---------- */

function placeBall(element, t, opacity) {
  const { x, y, scale } = ballAt(t);
  const offsetX = BALL_START_OFFSET_X * (1 - t);

  element.style.left = `${x}%`;
  element.style.top = `${y}%`;
  element.style.transform =
    `translate(calc(-50% - ${offsetX}px), -50%) scale(${scale}) rotate(${t * BALL_SPIN}deg)`;
  if (opacity !== undefined) element.style.opacity = opacity;
}

function placeHinata(element, t, opacity) {
  const { x, y } = hinataAt(t);

  element.style.transform = `translate(${x}%, ${y}%)`;
  if (opacity !== undefined) element.style.opacity = opacity;
}

// Rastro: clona o elemento e o posiciona logo antes dele (atrás na ordem de camadas).
function createGhosts(element) {
  return Array.from({ length: GHOST_COUNT }, () => {
    const ghost = element.cloneNode();
    ghost.removeAttribute('id');
    ghost.alt = '';
    ghost.classList.add('ghost');
    element.before(ghost);
    return ghost;
  });
}

const ballGhosts = createGhosts(ball);
const hinataGhosts = createGhosts(hinata);

/* ---------- Loop de animação ---------- */

let target = 0;   // progresso real da rolagem
let current = 0;  // progresso suavizado exibido
let previous = 0; // progresso do frame anterior

// O progresso considera apenas o banner; seções abaixo dele não afetam a animação.
function readScroll() {
  const max = byId('scroll').offsetHeight - innerHeight;
  target = max > 0 ? clamp(scrollY / max) : 0;
}

// No celular em retrato só cabe ~1/3 da cena: a câmera acompanha a ação,
// do Kageyama (esquerda) até o Hinata (direita), sem exigir alinhamento exato com o passe.
function mobileShiftX(progress, zoom) {
  const focus = lerp(MOBILE_FOCUS_START, MOBILE_FOCUS_END, easeInOut(progress));
  return (50 - CAMERA_ORIGIN_X) / zoom + CAMERA_ORIGIN_X - focus;
}

function updateCamera(progress) {
  const isMobile = mobileQuery.matches;
  const zoom = 1 + progress * (isMobile ? MOBILE_CAMERA_ZOOM : CAMERA_ZOOM);
  const shiftX = isMobile ? mobileShiftX(progress, zoom) : progress * CAMERA_SHIFT_X;
  const shiftY = progress * CAMERA_SHIFT_Y;
  const transform =
    `translate(-50%, -50%) scale(${zoom}) translate(${shiftX}%, ${shiftY}%)`;

  sceneBack.style.transform = transform;
  sceneFront.style.transform = transform;
}

function updateKageyama(progress) {
  const x = KAGEYAMA_START_X + progress * KAGEYAMA_TRAVEL_X;

  kageyama.style.transform = `translate(${x}px, ${progress * KAGEYAMA_RISE_Y}%)`;
  kageyamaShadow.style.transform = `translateX(calc(-50% + ${x}px))`;
}

function updateTrails(progress, speed, direction) {
  ballGhosts.forEach((ghost, i) => {
    const lag = (i + 1) * 0.012 * speed * 3;
    const opacity = speed * 0.45 * (1 - i / GHOST_COUNT);
    placeBall(ghost, clamp(progress - direction * lag), opacity);
  });

  hinataGhosts.forEach((ghost, i) => {
    const lag = (i + 1) * 0.02 * speed * 3;
    const opacity = speed * 0.3 * (1 - i / GHOST_COUNT);
    placeHinata(ghost, clamp(progress - direction * lag), opacity);
  });
}

// As sombras acompanham o deslocamento horizontal e encolhem com a altura.
function updateShadows(progress) {
  const eased = easeOut(progress);

  hinataShadow.style.left = `${lerp(60, 75, eased)}%`;
  hinataShadow.style.transform = `translateX(-50%) scale(${lerp(1, 0.6, eased)})`;
  hinataShadow.style.opacity = lerp(0.9, 0.55, eased);

  ballShadow.style.left = `${ballAt(progress).x}%`;
  ballShadow.style.transform =
    `translateX(-50%) scale(${lerp(0.9, 0.5, Math.sin(Math.PI * progress))})`;
  ballShadow.style.opacity = 0.4;
}

function frame() {
  current += (target - current) * SMOOTHING;
  if (Math.abs(target - current) < 0.0002) current = target;

  const delta = current - previous;           // velocidade por frame, com sinal
  previous = current;
  const speed = clamp(Math.abs(delta) * SPEED_GAIN);
  const direction = Math.sign(delta) || 1;

  updateCamera(current);
  updateKageyama(current);
  placeBall(ball, current);
  placeHinata(hinata, current);
  updateTrails(current, speed, direction);
  updateShadows(current);

  speedLines.style.opacity = clamp(speed * 0.9);
  hint.style.opacity = clamp(1 - current * 12);

  requestAnimationFrame(frame);
}

/* ---------- Figurinhas: fade-in/out conforme a seção entra e sai da tela ---------- */

const about = byId('about');

if ('IntersectionObserver' in window) {
  about.classList.add('has-reveal');
  new IntersectionObserver(([entry]) => {
    about.classList.toggle('is-visible', entry.isIntersecting);
  }, { threshold: 0.15 }).observe(about);
}

/* ---------- Trecho do anime: o player só é criado ao clicar ---------- */

const clipPlayer = byId('clipPlayer');
const clipThumb = byId('clipThumb');

// Algumas miniaturas não existem em alta resolução
clipThumb.addEventListener('error', () => {
  const fallback = `https://i.ytimg.com/vi/${clipPlayer.dataset.videoId}/hqdefault.jpg`;
  if (clipThumb.src !== fallback) clipThumb.src = fallback;
}, { once: true });

clipPlayer.querySelector('.clip__play').addEventListener('click', () => {
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube-nocookie.com/embed/${clipPlayer.dataset.videoId}?autoplay=1&rel=0`;
  iframe.title = 'Trecho do anime Haikyuu!!';
  iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  iframe.allowFullscreen = true;
  clipPlayer.classList.add('is-playing');
  clipPlayer.replaceChildren(iframe);
});

/* ---------- Início ---------- */

addEventListener('scroll', readScroll, { passive: true });
addEventListener('resize', readScroll);

readScroll();
current = previous = target;
requestAnimationFrame(frame);

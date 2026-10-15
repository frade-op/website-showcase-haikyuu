# Haikyuu!! — Showcase

Uma página de fã sobre *Haikyuu!!*, feita para praticar animações acionadas pela rolagem. A experiência atual apresenta uma jogada de Kageyama e Hinata e, abaixo dela, uma breve introdução à série.

## Como visualizar

Abra `index.html` em um navegador. O projeto usa HTML, CSS e JavaScript sem etapa de build ou dependências de instalação.

## Estrutura

- `index.html`: marcação da cena animada e da seção “Sobre”.
- `assets/css/style.css`: composição visual, camadas, layout responsivo e estilos da seção de conteúdo.
- `assets/js/main.js`: animação da jogada, sincronizada com a rolagem.
- `Images/`: imagens usadas na cena e nos elementos decorativos.

## Comportamento e efeitos

### Banner animado (rolagem)

- A jogada é guiada pelo progresso da rolagem do banner (`.scroll`); a seção abaixo não interfere.
- **Celular em retrato** (`max-width: 700px` e `orientation: portrait`): só cabe cerca de 1/3 da cena, então a câmera acompanha a ação, indo do Kageyama (início) ao Hinata (fim) com leve zoom. O alinhamento com o passe não é exato, mas a bola fica sempre visível e o Hinata termina centralizado. No desktop o comportamento original não muda.
- Ajustes ficam nas constantes `MOBILE_*` de `assets/js/main.js` (`MOBILE_FOCUS_START`, `MOBILE_FOCUS_END`, `MOBILE_CAMERA_ZOOM`).

### Figurinhas dos cantos (seção "Sobre")

- **Imagens:** `Images/corner-tl.png`, `corner-tr.png`, `corner-bl.png` e `corner-br.png`. Use sempre `Images/` com “I” maiúsculo, pois hospedagens costumam diferenciar maiúsculas.
- **Fade-in/fade-out:** aparecem quando a seção entra na tela e somem quando ela sai (`IntersectionObserver` em `main.js`, classes `has-reveal` e `is-visible`). A transição dura 1,6 s, com atraso de 0,4 s a 1,3 s entre uma figurinha e outra, para ser percebida com clareza.
- **Quique constante:** animação `bounce` (2,4 s, cerca de 14 px de altura) que imita uma bola quicando, defasada entre as figurinhas.
- **Celular (até 1300px):** as figurinhas ficam em duas linhas (topo e rodapé) e o texto desce para não cobri-las; até 600px elas ficam menores.
- **Acessibilidade:** com `prefers-reduced-motion` ativo, quique e transições são desligados.

## Próximos passos

Estas são ideias planejadas; ainda não fazem parte da página:

1. **Personagens e seus status/estatísticas** — criar uma seção com perfis dos personagens. Definir quais informações serão exibidas (por exemplo, time, posição e estatísticas) e apresentar os dados de forma clara e responsiva.
2. **Trecho do anime** — adicionar uma seção para assistir a um trecho relacionado à série. Priorizar um vídeo ou incorporação de fonte oficial/autorizada, com controles acessíveis e sem reprodução automática.
3. **Mangá e a passagem de Hinata pelo Brasil** — criar uma parte dedicada à história no mangá, incluindo o período em que Hinata treina e joga vôlei de praia no Brasil. Organizar o conteúdo para evitar spoilers ou sinalizá-los claramente.

### Ordem sugerida

Começar pela seção de personagens, pois ela estabelece o padrão de apresentação de conteúdo. Depois, adicionar o trecho do anime e, por fim, a seção sobre o mangá e a jornada de Hinata no Brasil. Antes de implementar, definir as fontes das informações e das mídias, além do nível de spoilers permitido.

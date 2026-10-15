# Haikyuu!! — Showcase

Uma página de fã sobre *Haikyuu!!*, feita para praticar animações acionadas pela rolagem. A experiência atual apresenta uma jogada de Kageyama e Hinata e, abaixo dela, uma breve introdução à série.

## Como visualizar

O projeto usa HTML, CSS e JavaScript sem etapa de build ou dependências de instalação. Para ver tudo funcionando, sirva a pasta com um servidor local usando Python:

```powershell
cd caminho\para\Site-showcase-haikyuu
python -m http.server 8000
```

Depois acesse <http://localhost:8000> no navegador. Para encerrar o servidor, pressione `Ctrl+C` no terminal. Se a porta 8000 estiver ocupada, use outra (por exemplo, `python -m http.server 8080`).

### Por que usar um servidor local

Abrir o `index.html` com duplo clique carrega a página por `file://`, e nesse modo o player do YouTube (seção "Cena") pode ser bloqueado, pois o vídeo é incorporado e o YouTube costuma recusar a incorporação quando a página não tem uma origem `http://` ou `https://`. Com `python -m http.server`, a página é servida em `http://localhost`, que é o mesmo cenário de uma hospedagem real. Assim, o que você vê no teste é o que o visitante verá. O Python já traz esse servidor embutido, então não é preciso instalar nada.

Abrir o `index.html` direto continua funcionando para o banner e a seção "Sobre"; só o vídeo é afetado.

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

### Trecho do anime (seção "Cena")

- Vídeo: <https://www.youtube.com/watch?v=QArog-oWuDk> (ID `QArog-oWuDk`, definido em `data-video-id` no `index.html`).
- Carregamento sob demanda: a página mostra só a miniatura do YouTube com botão de play; o player (`youtube-nocookie.com`) é criado ao clicar, então nada pesado carrega antes e não há reprodução automática.
- Visual: moldura laranja do Karasuno com sombra deslocada, cantos de “câmera” e faixa de título, no mesmo estilo da seção "Sobre". O botão de play pulsa e ganha destaque ao passar o mouse ou focar com o teclado.
- Se a miniatura em alta resolução não existir, usa-se a de qualidade menor; há também um link “Abrir no YouTube” como alternativa. O player pode não funcionar abrindo o arquivo direto (`file://`); veja [Como visualizar](#como-visualizar).

## Próximos passos

Ideia planejada; ainda não faz parte da página:

- **Mangá e a passagem de Hinata pelo Brasil** — criar uma parte dedicada à história no mangá, incluindo o período em que Hinata treina e joga vôlei de praia no Brasil. Definir as fontes das informações e das imagens e organizar o conteúdo para evitar spoilers ou sinalizá-los claramente.

A seção de personagens e estatísticas foi descartada.

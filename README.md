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

- `index.html`: marcação da cena animada e das seções (Sobre, Cena, Mangá).
- `assets/css/style.css`: composição visual, camadas, layout responsivo e estilos das seções.
- `assets/js/main.js`: animação da jogada, sincronizada com a rolagem, e interações das seções.
- `assets/js/i18n.js`: troca de idioma (PT/EN).
- `Images/`: imagens usadas na cena, nos elementos decorativos e o favicon.

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

### Mangá: Hinata no Brasil (seção "Mangá")

- **Estilo:** página de mangá, com papel claro, retícula de pontos, quadros de borda preta grossa e sombra dura, onomatopeias decorativas ao fundo e laranja como único acento.
- **Alerta de spoiler:** com JavaScript, o conteúdo fica oculto até o clique em “Já li, mostrar” (`#spoilerGate`, `#mangaStory`, `aria-expanded`). Sem JavaScript, o conteúdo fica visível.
- **Conteúdo:** a chegada ao Brasil, a duração da estadia e as dificuldades, o apelido “Ninja Shoyo”, a comparação entre vôlei de quadra e de praia, o que Hinata trouxe de volta e por que o Brasil é importante na história. Fontes: capítulos 371, 376 e 377 do mangá (conferidos na wiki da série). Ao editar o texto, evite afirmações que não estejam nos capítulos.
- **Celular (até 760px):** os quadros viram uma coluna só e a comparação é empilhada; o selo “VS” fica centralizado na faixa entre os dois blocos (grid, sem posicionamento absoluto).
- **Rivalidade:** bloco “Uma rivalidade saudável” com Hinata (MSBY Black Jackals) × Kageyama (Schweiden Adlers). Atenção: o Kageyama joga no **Schweiden Adlers**, não no Black Jackals; a rivalidade vem do confronto entre os dois times na V.League (conferido na wiki da série).
- **Acessibilidade:** com `prefers-reduced-motion` ativo, a entrada animada e as transições são desligadas.

### Idiomas (PT/EN)

- O botão fixo no canto superior direito alterna entre português e inglês. A escolha é salva no navegador (`localStorage`, chave `haikyuu-lang`); na primeira visita, usa-se o idioma do navegador (inglês se começar com `en`, senão português).
- O texto em português fica no próprio `index.html` (assim a página funciona mesmo sem JavaScript). As traduções para inglês ficam no objeto `EN` de `assets/js/i18n.js`.
- Para traduzir um novo trecho: adicione `data-i18n="chave"` ao elemento (aceita `<span>` e `<em>`), ou `data-i18n-alt` / `data-i18n-aria` para os atributos `alt` e `aria-label`, e crie a mesma chave em `EN`. Chave sem tradução cai no português.
- O atributo `lang` do `<html>` muda junto (`pt-BR` / `en`). O título da aba é sempre “Haikyuu”.

### Aba do navegador

- Título: “Haikyuu”.
- Favicon: `Images/favicon.png` (128 × 128), gerado a partir de `Images/bola.png`, a bola do banner.

## Próximos passos

Todas as seções planejadas já foram implementadas. Ideias futuras:

- Adicionar imagens ou ilustrações próprias na seção do mangá (as páginas originais têm direitos autorais, então use apenas material autorizado).
- Revisar o texto com atenção aos spoilers e à fidelidade aos capítulos.

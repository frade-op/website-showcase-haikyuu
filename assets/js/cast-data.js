/* ==========================================================================
   Dados do elenco. Para adicionar uma escola ou personagem, basta incluir um
   objeto aqui; cast.js monta a interface e i18n.js usa os textos em inglês.
   O campo `img` aponta para a imagem do personagem em Images/.
   ========================================================================== */

const CAST_SCHOOLS = [
  {
    id: 'karasuno',
    name: 'Karasuno',
    role: { pt: 'Escola · Miyagi', en: 'School · Miyagi' },
    text: {
      pt: 'O Colégio Karasuno já foi chamado de “corvos sem asas”: um time que viveu de glórias passadas. É onde Hinata e Kageyama se encontram e, junto de colegas muito diferentes entre si, voltam a fazer o time voar.',
      en: 'Karasuno High was once called the “flightless crows”: a team living off past glory. It is where Hinata and Kageyama meet and, alongside very different teammates, make the team fly again.',
    },
    chars: [
      {
        id: 'kageyama', name: 'Tobio Kageyama', img: 'Images/kageyama.png',
        role: { pt: 'Levantador · Karasuno', en: 'Setter · Karasuno' },
        text: {
          pt: 'Um gênio do levantamento, conhecido como “Rei da Quadra”. Começou exigindo demais dos colegas, mas aprendeu a confiar neles. Sua parceria com Hinata deu origem ao ataque rápido que marcou o Karasuno.',
          en: 'A setting genius known as the “King of the Court”. He started out demanding too much from teammates but learned to trust them. His partnership with Hinata created Karasuno’s signature quick attack.',
        },
      },
      {
        id: 'hinata', name: 'Shoyo Hinata', img: 'Images/hinata.png',
        role: { pt: 'Atacante · Karasuno', en: 'Spiker · Karasuno' },
        text: {
          pt: 'Baixo, mas com um salto e uma velocidade extraordinários. Sonha em ser o “Pequeno Gigante” e nunca desiste: compensa a altura com coragem, reflexo e muita vontade de evoluir.',
          en: 'Short, yet with an extraordinary jump and speed. He dreams of becoming the “Little Giant” and never gives up: courage, reflexes and a hunger to improve make up for his height.',
        },
      },
      {
        id: 'daichi', name: 'Daichi Sawamura', img: 'Images/sawamura.png',
        role: { pt: 'Capitão · Ponta', en: 'Captain · Wing spiker' },
        text: {
          pt: 'O capitão calmo e firme do Karasuno. Mantém um grupo de personalidades fortes unido e é o alicerce emocional do time na recepção e na liderança.',
          en: 'Karasuno’s calm, steady captain. He keeps a group of strong personalities together and is the team’s emotional foundation in receiving and leadership.',
        },
      },
      {
        id: 'sugawara', name: 'Koshi Sugawara', img: 'Images/sugawara.png',
        role: { pt: 'Levantador · Vice-capitão', en: 'Setter · Vice-captain' },
        text: {
          pt: 'O levantador veterano que perdeu a vaga de titular para Kageyama, mas nunca deixou de apoiar o time. Gentil, atento e decisivo nos momentos de pressão.',
          en: 'The veteran setter who lost his starting spot to Kageyama yet never stopped supporting the team. Kind, perceptive and decisive under pressure.',
        },
      },
      {
        id: 'asahi', name: 'Asahi Azumane', img: 'Images/azumane.png',
        role: { pt: 'Ás · Ponta', en: 'Ace · Wing spiker' },
        text: {
          pt: 'O ás do Karasuno: aparência intimidadora e coração sensível. Depois de uma derrota que o abalou, volta à quadra para carregar o time nos ataques.',
          en: 'Karasuno’s ace: intimidating looks, sensitive heart. After a crushing defeat shook him, he returns to the court to carry the team’s attack.',
        },
      },
      {
        id: 'nishinoya', name: 'Yu Nishinoya', img: 'Images/nishinoya.png',
        role: { pt: 'Líbero', en: 'Libero' },
        text: {
          pt: 'O líbero explosivo e confiante, o “Guardião” do time. Recebe praticamente qualquer bola e anima os colegas com sua energia.',
          en: 'The explosive, confident libero, the team’s “Guardian Deity”. He receives almost anything and lifts his teammates with his energy.',
        },
      },
      {
        id: 'tanaka', name: 'Ryunosuke Tanaka', img: 'Images/tanaka.png',
        role: { pt: 'Ponta', en: 'Wing spiker' },
        text: {
          pt: 'Barulhento e destemido, esconde um enorme senso de lealdade. Cresce na pressão e é o primeiro a gritar pelo time.',
          en: 'Loud and fearless, with a huge sense of loyalty. He thrives under pressure and is first to cheer for the team.',
        },
      },
      {
        id: 'tsukishima', name: 'Kei Tsukishima', img: 'Images/tsukishima.png',
        role: { pt: 'Bloqueador central', en: 'Middle blocker' },
        text: {
          pt: 'Alto, sarcástico e muito inteligente. Lê o jogo adversário como poucos e transforma o bloqueio em arma estratégica.',
          en: 'Tall, sarcastic and very smart. He reads opposing play like few others and turns blocking into a strategic weapon.',
        },
      },
      {
        id: 'yamaguchi', name: 'Tadashi Yamaguchi', img: 'Images/yamaguchi.png',
        role: { pt: 'Ponta · Sacador', en: 'Pinch server' },
        text: {
          pt: 'Amigo de longa data de Tsukishima. Inseguro no início, ganha confiança com o saque flutuante que muda partidas.',
          en: 'Tsukishima’s longtime friend. Insecure at first, he grows confident with a float serve that can swing matches.',
        },
      },
    ],
  },
  {
    id: 'nekoma',
    name: 'Nekoma',
    role: { pt: 'Escola · Tóquio', en: 'School · Tokyo' },
    text: {
      pt: 'O eterno rival do Karasuno, famoso pela defesa e pelo jogo de “sangue”, onde cada bola é mantida viva. O confronto entre os dois, a “Batalha do Lixão”, é lendário.',
      en: 'Karasuno’s long-time rival, known for defense and a “blood” style of play that keeps every ball alive. Their clash, the “Battle of the Garbage Dump”, is legendary.',
    },
    chars: [
      {
        id: 'kuroo', name: 'Tetsuro Kuroo', img: 'Images/kuroo.png',
        role: { pt: 'Capitão · Bloqueador central', en: 'Captain · Middle blocker' },
        text: {
          pt: 'O capitão estrategista do Nekoma. Provocador e brilhante no bloqueio, empurra o Karasuno a evoluir.',
          en: 'Nekoma’s strategic captain. A tease and brilliant at the block, he pushes Karasuno to grow.',
        },
      },
      {
        id: 'kenma', name: 'Kozume Kenma', img: 'Images/kenma.png',
        role: { pt: 'Levantador', en: 'Setter' },
        text: {
          pt: 'O “cérebro” do Nekoma. Reservado e calculista, descobre a diversão do vôlei ao enfrentar Hinata.',
          en: 'Nekoma’s “brain”. Reserved and calculating, he discovers the fun of volleyball while facing Hinata.',
        },
      },
      {
        id: 'yaku', name: 'Morisuke Yaku', img: 'Images/yaku.png',
        role: { pt: 'Líbero', en: 'Libero' },
        text: {
          pt: 'O líbero do Nekoma e peça central da sua defesa, um dos melhores recebedores do campeonato.',
          en: 'Nekoma’s libero and the core of its defense, among the best receivers in the tournament.',
        },
      },
    ],
  },
  {
    id: 'aoba',
    name: 'Aoba Johsai',
    role: { pt: 'Escola · Miyagi', en: 'School · Miyagi' },
    text: {
      pt: 'Uma das potências de Miyagi, com um time equilibrado e treinado em todos os fundamentos. Rival direto do Karasuno nas eliminatórias.',
      en: 'One of Miyagi’s powerhouses, a balanced team trained in every fundamental. A direct rival of Karasuno in the qualifiers.',
    },
    chars: [
      {
        id: 'oikawa', name: 'Tooru Oikawa', img: 'Images/oikawa.png',
        role: { pt: 'Capitão · Levantador', en: 'Captain · Setter' },
        text: {
          pt: 'O levantador veterano e rival obstinado de Kageyama. Charmoso, mas movido por muito esforço e pelo desejo de vencer.',
          en: 'The veteran setter and stubborn rival of Kageyama. Charming, but driven by hard work and the desire to win.',
        },
      },
      {
        id: 'iwaizumi', name: 'Hajime Iwaizumi', img: 'Images/iwaizumi.png',
        role: { pt: 'Ás · Ponta', en: 'Ace · Wing spiker' },
        text: {
          pt: 'O ás de Aoba Johsai e amigo de infância de Oikawa. Direto e confiável, é quem melhor o conhece.',
          en: 'Aoba Johsai’s ace and Oikawa’s childhood friend. Direct and dependable, he knows him best.',
        },
      },
    ],
  },
  {
    id: 'shiratorizawa',
    name: 'Shiratorizawa',
    role: { pt: 'Escola · Miyagi', en: 'School · Miyagi' },
    text: {
      pt: 'A escola mais forte de Miyagi, com jogadores de elite e alta estatura. Sempre foi o grande obstáculo para quem sonha com o torneio nacional.',
      en: 'Miyagi’s strongest school, with elite, tall players. It has always been the great obstacle for anyone dreaming of nationals.',
    },
    chars: [
      {
        id: 'ushijima', name: 'Wakatoshi Ushijima', img: 'Images/ushijima.png',
        role: { pt: 'Ás · Ponta', en: 'Ace · Wing spiker' },
        text: {
          pt: 'Um dos três melhores atacantes do Japão. Canhoto e poderoso, é a face do domínio do Shiratorizawa.',
          en: 'One of Japan’s top three spikers. Left-handed and powerful, he is the face of Shiratorizawa’s dominance.',
        },
      },
      {
        id: 'tendou', name: 'Satori Tendou', img: 'Images/tendou.png',
        role: { pt: 'Bloqueador central', en: 'Middle blocker' },
        text: {
          pt: 'O “Guess Monster”, que adivinha a direção dos ataques para bloquear. Imprevisível e divertido de assistir.',
          en: 'The “Guess Monster”, who guesses attack directions to block them. Unpredictable and fun to watch.',
        },
      },
    ],
  },
];

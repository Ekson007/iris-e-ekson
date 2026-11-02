/* =====================================================================
   config.js  —  TUDO o que você precisa editar está neste arquivo.
   ---------------------------------------------------------------------
   Regras simples:
   • Mexa só no que está entre aspas "assim".
   • Não apague vírgulas, chaves { } nem colchetes [ ].
   • Para pular linha dentro de um texto, escreva \n
   • As fotos ficam na pasta  fotos/  e as músicas na pasta  musicas/
   • Para testar tudo (inclusive cartas trancadas), abra o site com
     ?abrirtudo no final do endereço. Ex.: index.html?abrirtudo
   • Para pular o envelope durante os testes: index.html?pular
   ===================================================================== */

window.SITE = {

  /* ---------- NOMES ---------- */
  nomes: { ela: "Íris", ele: "Ekson" },
  de: "Ekson",          // quem assina as mensagens
  para: "Íris",         // para quem são as mensagens

  tituloPagina: "Íris & Ekson | 1 ano e 7 meses",

  /* ---------- DATAS ---------- */
  // Início do namoro (ano-mês-dia). O contador é calculado a partir daqui.
  inicio: "2025-04-18T00:00:00",

  // A data comemorativa: aparece como um selo com contagem regressiva.
  // 18/04/2025 + 1 ano e 7 meses = 18/11/2026
  marco: { titulo: "1 ano e 7 meses", data: "2026-11-18T00:00:00" },

  /* ---------- ENVELOPE DE ABERTURA ---------- */
  envelope: {
    dica: "Toque no selo para abrir",
    frase: "Preparei uma coisa pra você.\nAbre com calma e carinho?",
    botao: "Abrir nossa história"
  },

  /* ---------- TOPO DO SITE ---------- */
  hero: {
    frase: "Cada dia ao seu lado virou o meu lugar favorito no mundo."
  },

  /* ---------- MÚSICAS ----------
     Coloque os arquivos na pasta musicas/ com estes nomes (ou troque os
     nomes aqui). Pode ter quantas quiser. A primeira toca ao abrir o envelope.
     O site também aceita .m4a, .ogg e .wav com o mesmo nome. */
  musicas: [
    { arquivo: "musicas/musica1.mp3", titulo: "Nossa música" },
    { arquivo: "musicas/musica2.mp3", titulo: "A que me lembra você" }
  ],

  // Opcional: cole aqui o link normal de uma música ou playlist do Spotify ou
  // do YouTube e ela aparece num player dentro do site. Deixe "" para não usar.
  musicaLink: "",

  /* ---------- LINHA DO TEMPO ----------
     Cada momento pode ter foto, mensagem ou os dois (os botões só aparecem
     se o campo estiver preenchido). Pode copiar um bloco { ... }, colar e
     criar quantos momentos quiser. */
  linhaDoTempo: [
    {
      data: "18 de abril de 2025",
      titulo: "O dia em que tudo começou",
      resumo: "Era só mais um dia. Depois dele, nunca mais foi.",
      foto: "fotos/foto1.jpg",
      legenda: "Onde a nossa história começou",
      mensagem: "Eu ainda não sabia, mas esse dia ia virar a minha data favorita do calendário.\nDepois de você, o comum ganhou cor e o ordinário virou memória.\nObrigado por ter aberto a porta pra mim."
    },
    {
      data: "18 de maio de 2025",
      titulo: "Um mês de nós",
      resumo: "O primeiro mês e a certeza de que eu queria muitos outros.",
      foto: "fotos/foto2.jpg",
      legenda: "Primeiro mês",
      mensagem: "Um mês parece pouco, mas já era o suficiente pra eu saber que você era diferente de tudo.\nO seu jeito de rir, de olhar e de cuidar foi me conquistando devagarinho."
    },
    {
      data: "18 de julho de 2025",
      titulo: "Quando virou rotina (a melhor delas)",
      resumo: "As mensagens de bom dia, os planos, o hábito de pensar em você.",
      foto: "fotos/foto3.jpg",
      legenda: "Nossa rotina favorita",
      mensagem: "Foi aqui que eu percebi: o que eu mais gosto não são os grandes momentos.\nSão os pequenos. Uma conversa boba, um olhar no meio do silêncio, o seu abraço no fim do dia."
    },
    {
      data: "18 de outubro de 2025",
      titulo: "Seis meses",
      resumo: "Meio ano de risadas, aprendizados e muito carinho.",
      foto: "fotos/foto4.jpg",
      legenda: "Seis meses juntos",
      mensagem: "Seis meses e eu continuo escolhendo você todos os dias.\nVocê me faz querer ser alguém melhor, e isso é o maior elogio que eu sei fazer."
    },
    {
      data: "18 de abril de 2026",
      titulo: "Um ano juntos",
      resumo: "365 dias. E eu repetiria todos.",
      foto: "fotos/foto5.jpg",
      legenda: "Nosso primeiro ano",
      mensagem: "Um ano inteiro ao seu lado.\nTeve dia fácil, teve dia difícil, e em todos eles você foi o meu lugar seguro.\nObrigado por caminhar comigo."
    },
    {
      data: "18 de novembro de 2026",
      titulo: "1 ano e 7 meses",
      resumo: "E a nossa história continua sendo escrita.",
      foto: "fotos/foto6.jpg",
      legenda: "1 ano e 7 meses",
      mensagem: "Hoje a gente celebra 1 ano e 7 meses.\nE o melhor de tudo é saber que ainda tem muita página em branco pra gente preencher juntos."
    }
  ],

  /* ---------- GALERIA ----------
     Coloque as fotos na pasta fotos/ com os nomes abaixo.
     Aceita .jpg, .jpeg, .png e .webp (o nome precisa ser o mesmo). */
  galeria: [
    { arquivo: "fotos/foto1.jpg",  legenda: "peimeira foto" },
    { arquivo: "fotos/foto2.jpg",  legenda: "um mes junto" },
    { arquivo: "fotos/foto3.jpg",  legenda: "guloseimas no niver" },
    { arquivo: "fotos/foto4.jpg",  legenda: "Você, sempre linda" },
    { arquivo: "fotos/foto5.jpg",  legenda: "momento guloseimas" },
    { arquivo: "fotos/foto6.jpg",  legenda: "fazendo o L :/" },
    { arquivo: "fotos/foto7.jpg",  legenda: "biscoitando" },
    { arquivo: "fotos/foto8.jpg",  legenda: "nosso primeiro movel" },
    { arquivo: "fotos/foto9.jpg",  legenda: "vindo de carpina" },
    { arquivo: "fotos/foto10.jpg", legenda: "primeiro buque" },
    { arquivo: "fotos/foto11.jpg", legenda: "Do meu lado" },
    { arquivo: "fotos/foto12.jpg", legenda: "deusa mais linda" }
  ],

  /* ---------- CARTAS ----------
     "liberarEm": a carta fica trancada (com cadeado) até essa data.
     Deixe "" para ficar aberta desde o começo. */
  cartas: [
    {
      titulo: "Abra quando estiver com saudade",
      quando: "para os dias em que a distância pesa",
      texto: "Fecha os olhos um instante e lembra do meu abraço.\nEu também estou pensando em você agora, mesmo sem você saber.\nA saudade é só o amor querendo atravessar o espaço. E ele sempre chega."
    },
    {
      titulo: "Abra quando precisar sorrir",
      quando: "um remédio rápido para o dia ruim",
      texto: "Lembra de uma risada nossa, daquelas que doem a barriga.\nÉ essa Íris que eu conheço: forte, divertida, impossível de não amar.\nSe o dia estiver pesado, respira. Eu estou torcendo por você daqui."
    },
    {
      titulo: "Abra quando o dia for difícil",
      quando: "para lembrar que você não está sozinha",
      texto: "Eu não tenho todas as respostas, mas tenho o meu abraço e a minha paciência.\nVocê já superou tantas coisas e eu tenho muito orgulho de quem você é.\nDescansa um pouco. Amanhã a gente recomeça junto."
    },
    {
      titulo: "Abra quando duvidar do quanto é amada",
      quando: "a carta mais importante",
      texto: "Você é amada de um jeito que não cabe em palavras, mas eu tento.\nÉ no seu cuidado, no seu jeito de me entender e em tudo que você faz sem perceber que faz.\nSe um dia a dúvida aparecer, volta aqui e lê de novo."
    },
    {
      titulo: "Para abrir em 18/11/2026",
      quando: "só abre no nosso 1 ano e 7 meses",
      liberarEm: "2026-11-18T00:00:00",
      texto: "Se você está lendo isto, é porque chegamos juntos até aqui: 1 ano e 7 meses.\nEu não troco nenhum desses dias por nada, nem os difíceis, porque foram eles que provaram que a gente é de verdade.\nObrigado por ser minha namorada, minha amiga e meu lugar favorito.\nQue venham muitos outros meses, anos e histórias."
    }
  ],

  /* ---------- MOTIVOS PARA AMAR VOCÊ ----------
     O botão sorteia um por vez, sem repetir. Escreva quantos quiser. */
  motivos: [
    "O seu sorriso, que muda o meu dia inteiro.",
    "O jeito que você ri das minhas piadas ruins.",
    "A sua forma de cuidar de quem você ama.",
    "Você me faz sentir em casa em qualquer lugar.",
    "Sua risada, que é a minha música favorita.",
    "A maneira como você me escuta de verdade.",
    "Você acredita em mim, mesmo quando eu duvido.",
    "O seu abraço, que resolve quase tudo.",
    "Você torna os dias simples em dias especiais.",
    "A sua coragem de ser quem você é.",
    "O carinho que você coloca nos detalhes.",
    "Você me faz querer ser uma pessoa melhor.",
    "O seu olhar quando você está feliz.",
    "A paciência que você tem comigo.",
    "Você é leve, mesmo quando o dia é pesado.",
    "A sua companhia, que nunca cansa.",
    "O jeito que você diz o meu nome.",
    "Você é minha pessoa favorita para qualquer plano.",
    "A sua força, que me inspira todos os dias.",
    "Você transforma o silêncio em algo confortável.",
    "O seu cheiro, que eu reconheço de longe.",
    "Os planos que a gente faz juntos.",
    "Você me ensinou o que é amar sem medo.",
    "Simplesmente por ser você."
  ],

  // Frases do botão flutuante de coração (aparecem a cada toque)
  frasesRapidas: [
    "Eu te amo mais do que ontem.",
    "Você é a minha parte favorita do dia.",
    "Pensei em você agora.",
    "Obrigado por existir.",
    "Você é demais, sabia?",
    "Meu coração é seu.",
    "Sorria. Alguém aqui é muito apaixonado por você.",
    "Com você, tudo é melhor.",
    "Vem cá, quero um abraço.",
    "Eu escolheria você em qualquer vida."
  ],

  /* ---------- QUIZ ----------
     "correta" é a posição da resposta certa, contando a partir de 0
     (0 = primeira, 1 = segunda, 2 = terceira, 3 = quarta).
     TROQUE as perguntas pelas que só vocês dois sabem. */
  quiz: [
    {
      pergunta: "Em que dia a gente começou a namorar?",
      opcoes: ["18/04/2025", "18/05/2025", "18/03/2025", "18/04/2024"],
      correta: 0,
      explicacao: "18 de abril de 2025: o melhor dia do calendário."
    },
    {
      pergunta: "Quem disse \"eu te amo\" primeiro?",
      opcoes: ["A Íris", "O Ekson", "Os dois ao mesmo tempo", "Ninguém lembra"],
      correta: 0,
      explicacao: "tu falou quando não eramos namorados kk."
    },
    {
      pergunta: "Qual é o nosso programa perfeito?",
      opcoes: ["Sair para comer", "Filme e coberta", "Passear sem rumo", "Qualquer coisa, desde que juntos"],
      correta: 0,
      explicacao: "Com você, qualquer lugar vira o melhor lugar."
    },
    {
      pergunta: "Quem acorda de pior humor?",
      opcoes: ["A Íris", "O Ekson", "Os dois", "Nenhum dos dois, somos anjos"],
      correta: 0,
      explicacao: "Mas as besteira resolve tudo."
    },
    {
      pergunta: "O que eu mais amo em você?",
      opcoes: ["O sorriso", "O abraço", "O jeito de cuidar", "Tudo isso e mais um pouco"],
      correta: 3,
      explicacao: "A lista é longa. A resposta é todas."
    }
  ],

  // Mensagem final do quiz, conforme a porcentagem de acertos
  quizResultados: [
    { min: 0,   titulo: "Opa, precisamos conversar",  texto: "Brincadeira. Eu te amo igual, mesmo assim. Vamos criar mais memórias para você decorar." },
    { min: 0.5, titulo: "Bom, mas dá pra melhorar",   texto: "Você me conhece bem, só falta prestar um pouco mais de atenção. Eu perdoo." },
    { min: 0.8, titulo: "Quase perfeita",             texto: "Você me conhece quase tanto quanto eu mesmo. Impressionante." },
    { min: 1,   titulo: "Nota máxima",                texto: "Acertou tudo! Nenhuma surpresa: você presta atenção em mim como ninguém." }
  ],

  /* ---------- PERGUNTA FINAL ---------- */
  final: {
    pergunta: "Íris, você topa continuar escrevendo essa história comigo?",
    sim: "Sim, claro!",
    frasesNao: ["Não", "Tem certeza?", "Pensa com carinho...", "Olha pra minha carinha", "Última chance!", "O botão está quebrado, desiste"],
    desistiu: "Tá bom, sim!",
    tituloResposta: "Eu sabia.",
    mensagem: "Obrigado por cada dia, por cada risada e por cada abraço.\nEu prometo continuar escolhendo você, nos dias bons e nos difíceis.\n\nQue venham muitos meses, muitos anos e muitas páginas.\nEu te amo, Íris.",
    // Opcional: para ela te responder pelo WhatsApp com um clique, coloque seu
    // número com DDI e DDD, só números. Ex.: "5581999999999". Deixe "" para ocultar.
    whatsapp: "",
    textoWhatsapp: "Sim! Eu topo continuar escrevendo essa história com você. Te amo!"
  },

  /* ---------- MENSAGEM SECRETA ----------
     Aparece quando ela toca 7 vezes no coração do rodapé. */
  segredo: "Se você achou este cantinho, é porque presta atenção em tudo, como eu gosto.\nSaiba que cada detalhe deste site foi feito pensando em você.\nTe amo. Agora volta pra cima e abre o resto das cartas.",

  /* ---------- RODAPÉ ---------- */
  rodape: "Feito com todo o carinho do mundo."
};

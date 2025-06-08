const questions = [
  {
    text: "Maior número primo conhecido?",
    options: ["2^77.232.917−1", "10^100", "2^61−1", "3^45−1"],
    answer: 0,
  },
  {
    text: "Raiz quadrada de 625?",
    options: ["20", "25", "30", "15"],
    answer: 1,
  },
  {
    text: "Ano da queda de Constantinopla?",
    options: ["1453", "1492", "1415", "1500"],
    answer: 0,
  },
  {
    text: "Quem inventou o cálculo?",
    options: ["Newton", "Leibniz", "Galileu", "Descartes"],
    answer: 1,
  },
  {
    text: "Elemento de número atômico 92?",
    options: ["Urânio", "Tório", "Plutônio", "Cúrio"],
    answer: 0,
  },
  {
    text: "Capital da Mongólia?",
    options: ["Astana", "Ulaanbaatar", "Tashkent", "Bishkek"],
    answer: 1,
  },
  {
    text: "Língua mais falada no mundo?",
    options: ["Inglês", "Hindi", "Mandarim", "Espanhol"],
    answer: 2,
  },
  {
    text: "Maior deserto do mundo?",
    options: ["Saara", "Atacama", "Antártida", "Gobi"],
    answer: 2,
  },
  {
    text: "Criador de '1984'?",
    options: ["Orwell", "Huxley", "Kafka", "Bradbury"],
    answer: 0,
  },
  {
    text: "Planeta com maior número de luas?",
    options: ["Saturno", "Júpiter", "Urano", "Netuno"],
    answer: 1,
  },
  {
    text: "Qual a velocidade da luz no vácuo, aproximadamente?",
    options: ["300.000 km/s", "150.000 km/s", "450.000 km/s", "100.000 km/s"],
    answer: 0,
  },
  {
    text: "Qual comida indispensável para ela?",
    options: ["Pizza", "Pipoca", "Sushi", "Macarrão"],
    answer: 1,
  },
  {
    text: "Qual superpoder ele escolheria?",
    options: ["Invisibilidade", "Força", "Voar", "Teletransporte"],
    answer: 2,
  },
  {
    text: "Qual viagem ela sonha em fazer?",
    options: ["Paris", "Lençóis Maranhenses", "Gramado", "Fernando de Noronha"],
    answer: 1,
  },
  {
    text: "Onde eles se viram pela primeira vez?",
    options: ["Chácara", "Escola", "Shopping", "Praia"],
    answer: 0,
  },
  {
    text: "Quem mandou a primeira mensagem?",
    options: ["Ele", "Ela", "Ao mesmo tempo", "Nenhum dos dois"],
    answer: 1,
  },
  {
    text: "Onde foi o primeiro encontro?",
    options: ["Cinema", "Bar", "Parque", "Praia"],
    answer: 1,
  },
  {
    text: "Sobremesa da viagem dos dois sozinhos?",
    options: [
      "Brigadeiro",
      "Pudim",
      "Sorvete de queijo com goiabada",
      "Torta de limão",
    ],
    answer: 2,
  },
  {
    text: "Qual suco ele prefere?",
    options: ["Laranja", "Uva", "Maracujá", "Manga"],
    answer: 2,
  },
  {
    text: "Achocolatado?",
    options: ["Nescau", "Toddy", "Chocomilk", "Toddyinho"],
    answer: 1,
  },
  {
    text: "Quem é melhor no pebolim?",
    options: ["Ela", "Ele", "Empate", "Nunca jogaram"],
    answer: 1,
  },
  {
    text: "Livro que leram 'juntos'?",
    options: [
      "A paciente Silenciosa",
      "1984",
      "É assim que acaba",
      "O Pequeno Príncipe",
    ],
    answer: 0,
  },
  {
    text: "Primeiro prato que ele fez para ela?",
    options: ["Lasanha", "Estrogonofe", "Fricassê", "Risoto"],
    answer: 2,
  },
  {
    text: "Quantos ossos ele já quebrou?",
    options: ["0", "1", "2", "3"],
    answer: 0,
  },
  {
    text: "Cor do olho dele?",
    options: ["Verde", "Azul", "Castanho", "Mel"],
    answer: 2,
  },
  {
    text: "Qual prato eles fizeram juntos uma vez e ela sempre comenta?",
    options: ["Feijoada", "Pizza", "Macarronada", "Panqueca"],
    answer: 0,
  },
  {
    text: "Quem sente mais calor?",
    options: ["Ele", "Ela", "Os dois", "Depende"],
    answer: 1,
  },
  {
    text: "Quem sente mais frio nos pés?",
    options: ["Ele", "Ela", "Empate", "Nenhum"],
    answer: 1,
  },
  {
    text: "Encontro que deu 'errado'?",
    options: ["Cinemark", "Outback", "Show", "Café"],
    answer: 1,
  },
  {
    text: "Quem puxa a coberta e deixa o outro com frio?",
    options: ["Ele", "Ela", "Nenhum", "Os dois"],
    answer: 0,
  },
  {
    text: "Quem é mais estudioso?",
    options: ["Ele", "Ela", "Empate", "Nenhum dos dois"],
    answer: 1,
  },
  {
    text: "Quem já viajou mais?",
    options: ["Ele", "Ela", "Empate", "Não se sabe"],
    answer: 1,
  },
  {
    text: "Qual filme viram juntos com a família no cinema?",
    options: ["A Órfã 2", "Vingadores", "Barbie", "Oppenheimer"],
    answer: 0,
  },
];

const audio = document.getElementById("bg-audio");
const playBtn = document.getElementById("play-audio");
const pauseBtn = document.getElementById("pause-audio");
const resetBtn = document.getElementById("reset-btn");
const buttons = document.querySelector(".buttons");
audio.volume = 0.2;
document.getElementsByClassName("start-btn")[0].onclick = () => {
  audio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
  shuffleArray(questions);
  loadQuestion(); // só carrega as perguntas após clique
};

playBtn.onclick = () => {
  audio.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
};

pauseBtn.onclick = () => {
  audio.pause();
  pauseBtn.style.display = "none";
  playBtn.style.display = "inline-block";
};

let currentQuestion = 1;
let prize = 1;
const maxQuestions = 20;
const maxPrize = 300;
let skipAvailable = true;
let hintAvailable = true;

const questionText = document.getElementById("question-text");
const optionsDiv = document.getElementById("options");
const questionNumber = document.getElementById("question-number");
const prizeDisplay = document.getElementById("prize");
const statusDisplay = document.getElementById("status");
const skipBtn = document.getElementById("skip-btn");
const hintBtn = document.getElementById("hint-btn");

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadQuestion() {
  optionsDiv.style.display = "block";
  buttons.style.display = "block";
  prizeDisplay.style.display = "block";
  questionNumber.style.display = "block";
  if (currentQuestion >= 21) {
    questionText.innerHTML =
      "Parabéns! Você ganhou R$ " +
      maxPrize +
      "!" +
      "<br> Entre em contato com o seu admirador <br> secreto para um passeio no shopping e <br> gastar  seu prêmio!";
    optionsDiv.innerHTML = "";
    resetBtn.style.display = "inline-block";
    document.querySelector(".buttons").style.display = "none";
    return;
  }
  resetBtn.style.display = "none";
  const q = questions[currentQuestion % questions.length]; // repetir se faltarem
  questionNumber.textContent = `Pergunta ${currentQuestion} de 20`;
  questionText.textContent = q.text;

  optionsDiv.innerHTML = "";
  q.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "option";
    btn.textContent = opt;
    btn.setAttribute("data-number", index + 1); // número 1,2,3,4
    btn.onclick = () => checkAnswer(index, btn);
    optionsDiv.appendChild(btn);
  });

  prizeDisplay.textContent = `Prêmio atual: R$ ${formatCurrency(prize)}`;
  statusDisplay.textContent = "";
}

function checkAnswer(index, btn) {
  const q = questions[currentQuestion % questions.length];
  const optionButtons = document.querySelectorAll(".option");

  optionButtons.forEach((b) => {
    b.disabled = true;
    b.classList.add("disabled");
  });

  if (index === q.answer) {
    btn.classList.remove("disabled");
    btn.classList.add("correct");
    const factor = maxPrize / maxQuestions ** 2;
    prize = Math.round(factor * (currentQuestion + 1) ** 2);
    currentQuestion++;
    setTimeout(loadQuestion, 1200);
  } else {
    btn.classList.add("incorrect");
    statusDisplay.innerHTML =
      "Que pena... você errou! Fim de jogo.<br>Entre em contato com o seu admirador<br>" +
      " secreto para resgastar seu prêmio! Ou jogue novamente!";
    document.querySelector(".buttons").style.display = "none";
    resetBtn.style.display = "inline-block";
  }
}

hintBtn.onclick = () => {
  if (hintAvailable) {
    hintAvailable = false;
    hintBtn.disabled = true;
    hintBtn.textContent = "Dica usada";
    hintBtn.style.color = "#fff";
    hintBtn.style.backgroundColor = "#888";

    const q = questions[currentQuestion % questions.length];
    const correct = q.answer;
    const optionButtons = Array.from(document.querySelectorAll(".option"));

    let removed = 0;
    optionButtons.forEach((btn, i) => {
      if (i !== correct && removed < 2) {
        btn.style.display = "none";
        removed++;
      }
    });
  }
};

skipBtn.onclick = () => {
  if (skipAvailable) {
    skipAvailable = false;
    skipBtn.disabled = true;
    skipBtn.textContent = "Pulo usado";
    skipBtn.style.color = "#fff";
    skipBtn.style.backgroundColor = "#888";
    loadQuestion();
  }
};

function formatCurrency(value) {
  return value.toLocaleString("pt-BR", { minimumFractionDigits: 0 });
}

resetBtn.onclick = () => {
  currentQuestion = 1;
  prize = 1;
  skipAvailable = true;
  hintAvailable = true;

  skipBtn.disabled = false;
  hintBtn.disabled = false;
  skipBtn.textContent = "Pular (1)";
  hintBtn.textContent = "Dica (1)";

  skipBtn.style.color = "";
  skipBtn.style.backgroundColor = "";
  hintBtn.style.color = "";
  hintBtn.style.backgroundColor = "";

  document.querySelector(".buttons").style.display = "block";
  resetBtn.style.display = "none";
  shuffleArray(questions);
  loadQuestion();
};

window.onload = () => {
  const startBtn = document.getElementsByClassName("start-btn")[0];
  const now = new Date();
  const targetDate = new Date(2025, 5, 12, 0, 0, 0);
  const countdownDiv = document.getElementById("countdown");

  if (now >= targetDate) {
    startBtn.style.display = "inline-block";
    countdownDiv.style.display = "none";
  } else {
    countdownDiv.style.display = "inline-block";
    countdownDiv.style.color = "#fff";
    countdownDiv.style.fontSize = "16px";

    function updateCountdown() {
      const now = new Date();
      const diff = targetDate - now;
      const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
      const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
      const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
      const seconds = Math.max(0, Math.floor((diff / 1000) % 60));

      countdownDiv.innerHTML = `O jogo será liberado em: ${days}d ${hours}h ${minutes}m ${seconds}s. <br>
       Quando relógio zerar, recarregue a página!`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }
};

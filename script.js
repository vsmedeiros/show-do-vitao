const questions = [
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Quem escreveu 'Dom Casmurro'?",
    options: [
      "Machado de Assis",
      "José de Alencar",
      "Clarice Lispector",
      "Carlos Drummond",
    ],
    answer: 0,
  },
  {
    text: "Quanto é 9 x 8?",
    options: ["72", "81", "64", "88"],
    answer: 0,
  },
  {
    text: "Em que continente fica a Austrália?",
    options: ["Ásia", "América", "Europa", "Oceania"],
    answer: 3,
  },
  {
    text: "Qual é o maior planeta do sistema solar?",
    options: ["Terra", "Júpiter", "Saturno", "Marte"],
    answer: 1,
  },
  {
    text: "Quem pintou a Mona Lisa?",
    options: ["Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: 2,
  },
  {
    text: "Qual o símbolo químico da água?",
    options: ["H2O", "O2", "CO2", "NaCl"],
    answer: 0,
  },
  {
    text: "Em que país se fala português?",
    options: ["França", "Brasil", "Alemanha", "Itália"],
    answer: 1,
  },
  {
    text: "Qual é o menor número primo?",
    options: ["1", "2", "3", "5"],
    answer: 1,
  },
  {
    text: "Qual animal é conhecido como 'rei da selva'?",
    options: ["Tigre", "Leão", "Elefante", "Pantera"],
    answer: 1,
  },
  {
    text: "Que instrumento mede a temperatura?",
    options: ["Barômetro", "Termômetro", "Anemômetro", "Altímetro"],
    answer: 1,
  },
  {
    text: "Qual é a fórmula da área do triângulo?",
    options: ["b × h", "b × h / 2", "πr²", "2 × (b + h)"],
    answer: 1,
  },
  {
    text: "Qual planeta é conhecido como planeta vermelho?",
    options: ["Vênus", "Júpiter", "Marte", "Saturno"],
    answer: 2,
  },
  {
    text: "Qual o idioma falado no Egito?",
    options: ["Francês", "Inglês", "Árabe", "Turco"],
    answer: 2,
  },
  {
    text: "Quantos continentes existem?",
    options: ["5", "6", "7", "8"],
    answer: 2,
  },
  {
    text: "Qual o resultado de 2³?",
    options: ["6", "8", "9", "12"],
    answer: 1,
  },
  {
    text: "Quem descobriu o Brasil?",
    options: [
      "Pedro Álvares Cabral",
      "Cristóvão Colombo",
      "Dom Pedro I",
      "Tiradentes",
    ],
    answer: 0,
  },
  {
    text: "Quantos segundos há em um minuto?",
    options: ["60", "100", "30", "90"],
    answer: 0,
  },
  {
    text: "Qual é a capital da França?",
    options: ["Paris", "Berlim", "Londres", "Roma"],
    answer: 0,
  },
  {
    text: "O que é um triângulo equilátero?",
    options: [
      "Todos os lados diferentes",
      "Dois lados iguais",
      "Todos os lados iguais",
      "Sem lados iguais",
    ],
    answer: 2,
  },
  {
    text: "Quantas cores tem o arco-íris?",
    options: ["6", "7", "8", "9"],
    answer: 1,
  },
  {
    text: "Em que estado brasileiro fica o Cristo Redentor?",
    options: ["São Paulo", "Minas Gerais", "Rio de Janeiro", "Bahia"],
    answer: 2,
  },
  {
    text: "O que usamos para respirar?",
    options: ["Boca", "Estômago", "Pulmões", "Coração"],
    answer: 2,
  },
  {
    text: "Qual é a moeda dos EUA?",
    options: ["Euro", "Dólar", "Libra", "Peso"],
    answer: 1,
  },
  {
    text: "Quem é o autor de 'O Pequeno Príncipe'?",
    options: [
      "J.K. Rowling",
      "Antoine de Saint-Exupéry",
      "George Orwell",
      "Paulo Coelho",
    ],
    answer: 1,
  },
  {
    text: "Qual é a fórmula da água?",
    options: ["H2", "O2", "CO2", "H2O"],
    answer: 3,
  },
  {
    text: "Quantos lados tem um hexágono?",
    options: ["4", "5", "6", "7"],
    answer: 2,
  },
  {
    text: "Qual o nome do satélite natural da Terra?",
    options: ["Sol", "Lua", "Marte", "Estrela"],
    answer: 1,
  },
  {
    text: "O que é fotossíntese?",
    options: [
      "Processo de digestão",
      "Processo de respiração",
      "Processo das plantas produzirem energia",
      "Evaporação da água",
    ],
    answer: 2,
  },
  {
    text: "Qual desses é um mamífero?",
    options: ["Tubarão", "Jacaré", "Golfinho", "Galinha"],
    answer: 2,
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
      "<br> Entre em contato com o seu admirador <br> secreto para resgastar seu prêmio!";
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
      "secreto para um passeio no shopping e <br> gastar  seu prêmio! Ou jogue novamente!";
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

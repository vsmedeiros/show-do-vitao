const questions = [
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
  },
  {
    text: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: 1,
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
  loadQuestion(); // só carrega as perguntas após clique
  document.getElementById("start-btn").style.display = "none";
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

function loadQuestion() {
  optionsDiv.style.display = "block";
  buttons.style.display = "block";
  prizeDisplay.style.display = "block";
  questionNumber.style.display = "block";
  if (currentQuestion >= maxQuestions + 1) {
    questionText.textContent =
      "Parabéns! Você ganhou R$ " +
      maxPrize +
      "!" +
      " Entre em contato com o seu admirador secreto para um passeio no shopping e gastar seu prêmio!";
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

  loadQuestion();
};

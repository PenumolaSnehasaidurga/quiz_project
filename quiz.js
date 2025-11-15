const quizData = [
  {
    question: "Which of the following is not a Java feature?",
    a: "Object-Oriented",
    b: "Portable",
    c: "Dynamic",
    d: "Pointer Arithmetic",
    correct: "d",
  },
  {
    question: "Which keyword is used to inherit a class in Java?",
    a: "implements",
    b: "extends",
    c: "super",
    d: "inherits",
    correct: "b",
  },
  {
    question: "Which of the following is used to define a constant in Java?",
    a: "static",
    b: "final",
    c: "const",
    d: "constant",
    correct: "b",
  },
  {
    question: "Which method is the entry point of a Java program?",
    a: "start()",
    b: "run()",
    c: "main()",
    d: "init()",
    correct: "c",
  },
  {
    question: "Which of these is not a primitive data type in Java?",
    a: "int",
    b: "float",
    c: "String",
    d: "boolean",
    correct: "c",
  },
  {
    question: "Which operator is used for comparison in Java?",
    a: "=",
    b: "==",
    c: ":=",
    d: "!==",
    correct: "b",
  },
  {
    question: "Which package contains the Scanner class?",
    a: "java.util",
    b: "java.io",
    c: "java.lang",
    d: "java.net",
    correct: "a",
  },
  {
    question: "What is the size of an int in Java?",
    a: "8 bits",
    b: "16 bits",
    c: "32 bits",
    d: "64 bits",
    correct: "c",
  },
  {
    question: "Which keyword is used to create an object in Java?",
    a: "create",
    b: "new",
    c: "alloc",
    d: "make",
    correct: "b",
  },
  {
    question: "What is JVM?",
    a: "Java Variable Machine",
    b: "Java Virtual Memory",
    c: "Java Virtual Machine",
    d: "Java Version Manager",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});

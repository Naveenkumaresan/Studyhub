const quizData = [
    {
        question: "1.Which of the following constraints ensures that a column cannot contain NULL values?",
        a: " PRIMARY KEY",
        b: "UNIQUE",
        c: "NOT NULL",
        d: " CHECK",
        correct: "c",
    },
    {
        question: "2.Which constraint uniquely identifies each record in a table?",
        a: " PRIMARY KEY",
        b: "UNIQUE",
        c: "NOT NULL",
        d: "FOREIGN KEY",
        correct: "a",
    },
    {
        question: "3.The CHECK constraint is used to?",
        a: " Ensure uniqueness of values in a column",
        b: "Enforce referential integrity between tables",
        c: "Specify a condition that must be met for the data to be valid",
        d: "Provide a default value for a column",
        correct: "c",
    },
    {
        question: "4.What constraint is used to enforce referential integrity by linking data between tables?",
        a: "PRIMARY KEY",
        b: "UNIQUE",
        c: "FOREIGN KEY",
        d: "CHECK",
        correct: "c",
    },
    {
        question: "5.Which constraint provides a default value for a column if no value is specified during insertion?",
        a: " PRIMARY KEY",
        b: "UNIQUE",
        c: "NOT NULL",
        d: "DEFAULT",
        correct: "d",
    },
    // {
    //     question: "6.In the context of DBMS, what does the 'I' stand for in ACID? ",
    //     a: "Interference",
    //     b: "Integrity",
    //     c: "Independence",
    //     d: "Isolation",
    //     correct: "d",
    // },
    // {
    //     question: "7.Which ACID property ensures that either all operations of a transaction are completed successfully, or none of them are? ",
    //     a: "Consistency",
    //     b: "Isolation",
    //     c: "Atomicity",
    //     d: "Durability",
    //     correct: "c",
    // },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

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
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            if (score > 2) {
                quiz.innerHTML = `
                <h2>You scored ${score}/${quizData.length}! 🎉</h2>
                <p>You nailed it! 😄</p>
                <button onclick="location.reload()">Reload</button>
                `;
            } else {
                quiz.innerHTML = `
                <h2>You scored ${score}/${quizData.length}!</h2>
                <p>Keep practicing! 👏🏼</p>
                <button onclick="location.reload()" style="outline: 0; background-color: blue;color: aliceblue;border-radius: 20px;padding: 5px; margin-left: -1rem;">Reload</button>
                `;
            }
        }
    }
});
const quizData = [
    {
        question: "1.What does the 'A' stand for in ACID properties?",
        a: "Association",
        b: "Atomicity",
        c: "Accuracy",
        d: "Adaptability",
        correct: "b",
    },
    {
        question: "2.Which ACID property ensures that a transaction is treated as a single unit of work?",
        a: "Consistency",
        b: "Isolation",
        c: "Atomicity",
        d: "Durability",
        correct: "c",
    },
    {
        question: "3.Which ACID property ensures that the database remains in a valid state before and after the transaction?",
        a: "Atomicity",
        b: "Consistency",
        c: "Isolation",
        d: "Durability",
        correct: "b",
    },
    {
        question: "4.Which ACID property ensures that transactions execute independently without interfering with each other? ",
        a: "Atomicity",
        b: "Consistency",
        c: "Isolation",
        d: "Durability",
        correct: "c",
    },
    {
        question: "5.Which ACID property ensures that the effects of a committed transaction are permanent?",
        a: "Atomicity",
        b: "Consistency",
        c: "Isolation",
        d: "Durability",
        correct: "d",
    },
    {
        question: "6.In the context of DBMS, what does the 'I' stand for in ACID? ",
        a: "Interference",
        b: "Integrity",
        c: "Independence",
        d: "Isolation",
        correct: "d",
    },
    {
        question: "7.Which ACID property ensures that either all operations of a transaction are completed successfully, or none of them are? ",
        a: "Consistency",
        b: "Isolation",
        c: "Atomicity",
        d: "Durability",
        correct: "c",
    },
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
            if (score > 5) {
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

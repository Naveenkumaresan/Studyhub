const quizData = [
    {
        question: "1.What is the purpose of the SAVEPOINT command in SQL?",
        a: "Saves all transactions to the database",
        b: "Reverts all changes made during the current transaction",
        c: "Sets a point within a transaction that can be rolled back to",
        d: "Commits the transaction to the database",
        correct: "c",
    },
    {
        question: "2.Which SQL command is used to create a named point within a transaction?",
        a: "COMMIT",
        b: "ROLLBACK",
        c: "SAVEPOINT",
        d: "BEGIN TRANSACTION",
        correct: "c",
    },
    {
        question: "3.What does the SAVEPOINT command allow you to do within a transaction?",
        a: "Create intermediate points of recovery",
        b: "Rollback the entire transaction",
        c: "Commit the transaction to the database",
        d: "Execute DML commands",
        correct: "a",
    },
    {
        question: "4.When might you use the SAVEPOINT command in SQL?",
        a: " To save all transactions to the database ",
        b: "To create intermediate points of recovery within a transaction ",
        c: " To revert all changes made during the current transaction",
        d: "To commit the transaction to the database ",
        correct: "b",
    },
    {
        question: "5.Which command is used to roll back to a named point within a transaction?",
        a: "ROLLBACK",
        b: "COMMIT",
        c: "SAVEPOINT",
        d: "BEGIN TRANSACTION",
        correct: "a",
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
            if (score > 3) {
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



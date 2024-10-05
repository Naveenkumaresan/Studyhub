const quizData = [
    {
        question: "1.What is the purpose of the GRANT command in SQL?",
        a: "Adds new records to a table",
        b: "Modifies existing records in a table",
        c: "Provides specific privileges to database users",
        d: "Removes specific privileges from database users",
        correct: "c",
    },
    {
        question: "2.Which SQL command is used to grant privileges to database users or roles?",
        a: "GRANT",
        b: "REVOKE",
        c: "ALLOW",
        d: " PRIVILEGE",
        correct: "a",
    },
    {
        question: "3.What does the REVOKE command do in SQL?",
        a: "Retrieves data from one or more tables",
        b: "Adds new records to a table",
        c: "Removes specific privileges from database users",
        d: "Modifies existing records in a table",
        correct: "c",
    },
    {
        question: "4. If you want to revoke privileges from a database user, which command would you use?",
        a: "GRANT",
        b: "REVOKE",
        c: "DENY",
        d: "REMOVE",
        correct: "b",
    },
    {
        question: "5.Which SQL command is used to grant privileges to all users?",
        a: "GRANT PUBLIC",
        b: "GRANT ALL",
        c: "GRANT EVERYONE",
        d: " GRANT TO ALL",
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

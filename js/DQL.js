const quizData = [
    {
        question: "1. What is the primary purpose of the SELECT command in SQL?",
        a: "Modifies existing records in a table        ",
        b: "Retrieves data from one or more tables",
        c: " Adds new records to a table",
        d: "Removes records from a table",
        correct: "b",
    },
    {
        question: "2.Which clause is used to specify the columns to retrieve in a SELECT statement?",
        a: "WHERE",
        b: "FROM",
        c: "SELECT",
        d: "HAVING",
        correct: "c",
    },
    {
        question: "3.In a SELECT statement, what does the FROM clause specify?",
        a: "The conditions to filter rows",
        b: "The columns to retrieve",
        c: "The order in which to sort the result set",
         d: "The tables from which to retrieve data",
        correct: "d",
    },
    {
        question: "4.Which clause is used to filter rows based on specific conditions in a SELECT statement?",
        a: "WHERE",
        b: "FROM",
        c: "SELECT",
        d: "GROUP BY",
        correct: "a",
    },
    {
        question: "5.What does a SELECT statement without a WHERE clause do?",
        a: " Retrieves all records from the specified tables",
        b: "Retrieves no records from the specified tables",
        c: " Retrieves records randomly from the specified tables",
        d: "Retrieves records in a random order from the specified tables",
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

const quizData = [
    {
        question: "1.What type of join returns all rows from both tables, joining records where the specified condition is met?",
        a: "INNER JOIN",
        b: "LEFT JOIN",
        c: "RIGHT JOIN",
        d: "FULL JOIN",
        correct: "d",
    },
    {
        question: "2.Which join returns all rows from the left table and the matched rows from the right table, with unmatched rows in the right table having NULL values?",
        a: "INNER JOIN",
        b: "LEFT JOIN",
        c: "RIGHT JOIN",
        d: "FULL JOIN",
        correct: "b",
    },
    {
        question: "3.The result of a RIGHT JOIN includes?",
        a: " All rows from the left table and matched rows from the right table",
        b: "All rows from the right table and matched rows from the left table",
        c: "Only matched rows from both tables",
        d: "All rows from both tables",
        correct: "b",
    },
    {
        question: "4.A self-join is?",
        a: "A join between two different tables",
        b: "A join that returns only matching rows between two tables",
        c: "A join where a table is joined with itself",
        d: "A join that returns all rows from both tables",
        correct: "c",
    },
    {
        question: "5.Which join returns all rows from the left table and the right table, with NULL values in columns where there is no match?",
        a: "INNER JOIN",
        b: "LEFT JOIN",
        c: "RIGHT JOIN",
        d: "FULL JOIN",
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


function myFunction(element) {
    var copyText = element.parentNode.previousElementSibling;
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value)
        .then(function() {
            var button = element.parentNode;
            button.classList.add('copied');
            setTimeout(function() {
                button.classList.remove('copied');
            }, 2000);
        })
        .catch(function(err) {
            console.error('Failed to copy: ', err);
        });
}
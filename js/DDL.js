const quizData = [
    {
        question: "1.Which SQL command is used to create a new table in a database?",
        a: "SELECT",
        b: "CREATE",
        c: "INSERT",
        d: " UPDATE",
        correct: "b",
    },
    {
        question: "2.What does the ALTER command do in SQL?",
        a: "Adds new records to a table",
        b: "Modifies existing records in a table",
        c: "Modifies existing database objects like tables, views, etc.",
        d: " Deletes existing database objects",
        correct: "c",
    },
    {
        question: "3.If you want to remove a table named 'Products' from the database, which SQL command would you use?",
        a: "DELETE TABLE Products",
        b: "REMOVE TABLE Products",
        c: "DROP TABLE Products",
        d: " TRUNCATE TABLE Products",
        correct: "c",
    },
    {
        question: "4.What is the purpose of the TRUNCATE command in SQL?",
        a: "Deletes a table's structure",
        b: "Removes all records from a table, but not the table structure itself",
        c: "Adds new records to a table",
        d: "Modifies existing records in a table",
        correct: "b",
    },
    {
        question: "5.Which DDL command is used to rename a table?",
        a: "RENAME TABLE",
        b: "MODIFY TABLE",
        c: "RENAME OBJECT",
        d: "ALTER TABLE",
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


// function myFunction() {
//   // Get the text field
//   var copyText = document.getElementById("myInput");

//   // Select the text field
//   copyText.select();
//   copyText.setSelectionRange(0, 99999); // For mobile devices

//   // Copy the text inside the text field
//   navigator.clipboard.writeText(copyText.value);
  
//   // Alert the copied text
//   alert("Copied the text: " + copyText.value);
// }

// function myFunction() {
//     var copyText = document.getElementById("myInput");
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); // For mobile devices
//     navigator.clipboard.writeText(copyText.value)
//         .then(function() {
//             var button = document.querySelector('.copy-text button');
//             button.classList.add('copied');
//             setTimeout(function() {
//                 button.classList.remove('copied');
//             }, 2000);
//         })
//         .catch(function(err) {
//             console.error('Failed to copy: ', err);
//         })};


// function myFunction(element) {
//     var copyText = element.parentNode.previousElementSibling;
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); // For mobile devices
//     navigator.clipboard.writeText(copyText.value)
//         .then(function() {
//             var button = element.parentNode;
//             button.classList.add('copied');
//             setTimeout(function() {
//                 button.classList.remove('copied');
//             }, 2000);
//         })
//         .catch(function(err) {
//             console.error('Failed to copy: ', err);
//         });
// }

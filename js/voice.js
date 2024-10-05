let text_speak = null;
let isPaused = false;
let interval;
let currentWordIndex = 0;
let currentWordsDiv = null;

function speak(sentence, targetDiv) {
    if (isPaused && targetDiv === currentWordsDiv) {
        window.speechSynthesis.resume();
        isPaused = false;
        resumeWordDisplay();
        return;
    }

    if (text_speak && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
        clearInterval(interval);
    }

    text_speak = new SpeechSynthesisUtterance(sentence);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    currentWordsDiv = targetDiv;
    currentWordsDiv.classList.add('styled-output'); // Add the class when starting to speak

    const words = sentence.split(' ');
    let index = 0;

    interval = setInterval(() => {
        if (index < words.length) {
            currentWordsDiv.innerText = words.slice(0, index + 3).join(' ');
            index++;
        } else {
            clearInterval(interval);
        }
    }, 350);

    text_speak.onstart = function(event) {
        currentWordIndex = 0;
    };

    text_speak.onpause = function(event) {
        currentWordIndex = index;
        clearInterval(interval);
    };

    text_speak.onend = function(event) {
        setTimeout(() => {
            currentWordsDiv.classList.remove('styled-output'); // Remove the class when done
            currentWordsDiv.innerText = "";
        }, 300);
    };

    window.speechSynthesis.speak(text_speak);
}

function pauseSpeech() {
    if (text_speak && window.speechSynthesis.speaking) {
        window.speechSynthesis.pause();
        clearInterval(interval);
        isPaused = true;
    }
}

function resumeWordDisplay() {
    const words = text_speak.text.split(' ');
    interval = setInterval(() => {
        if (currentWordIndex < words.length) {
            currentWordsDiv.innerText = words.slice(0, currentWordIndex + 1).join(' ');
            currentWordIndex++;
        } else {
            clearInterval(interval);
        }
    }, 500);
}

function togglePause() {
    if (!text_speak) return;
    if (!window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        isPaused = true;
        clearInterval(interval);
    } else {
        window.speechSynthesis.resume();
        isPaused = false;
        resumeWordDisplay();
    }
}

//index

function basecmd() {
    console.log("basecmd function called");
    let targetDiv = document.getElementById("wordsbase");
    if (!targetDiv) {
        console.error("wordsbase element not found");
        return;
    }
    speak(
        "SQL is a programming language for managing data in relational databases, organizing information into tables for easy manipulation like a digital librarian.",
        targetDiv
    );
}


function aboutcmd() {
    console.log("aboutcmd function called");
    let targetDiv = document.getElementById("wordsabout");
    if (!targetDiv) {
        console.error("wordsabout element not found");
        return;
    }
    speak(
        "Donald and Raymond created SQL, a language for managing databases. It became a star, making data organization easy for everyone.",
        targetDiv
    );
}


//index

//DDL Command

function Createcmd() {
    console.log("Createcmd function called");
    let targetDiv = document.getElementById("wordsCreate");
    if (!targetDiv) {
        console.error("wordsCreate element not found");
        return;
    }
    speak(
        "We are creating a table using the CREATE command. In this example, we are creating a table named 'stud'. Here, varchar2 and number represent the datatypes. The numeric representations indicate the maximum length of each value.",
        targetDiv
    );
}

function Altercmd() {
    console.log("Altercmd function called");
    let targetDiv = document.getElementById("wordsAlter");
    if (!targetDiv) {
        console.error("wordsAlter element not found");
        return;
    }
    speak(
        "we are altering a table using the ALTER command. In this example, we have altered a table using MODIFY, and we are modifying the 'sage' column to have a maximum length of 10 characters",
        targetDiv
    );
}

function Dropcmd() {
    console.log("Dropcmd function called");
    let targetDiv = document.getElementById("wordsDrop");
    if (!targetDiv) {
        console.error("wordsDrop element not found");
        return;
    }
    speak(
        "Here, we are dropping a table using the DROP command. In this example, we have dropped a table named 'stud'. When dropping the entire table,would be deleted",      
        targetDiv
    );
}


function Truncatecmd() {
    console.log("Truncatecmd function called");
    let targetDiv = document.getElementById("wordsTruncate");
    if (!targetDiv) {
        console.error("wordsTruncate element not found");
        return;
    }
    speak(
       " Here, we are truncating a table using the TRUNCATE command. In this example, we have truncated a table named 'stud'. When truncating a table, the entire table's contents are deleted, not just specific values."   ,    targetDiv
    );
}



function Renamecmd() {
    console.log("Renamecmd function called");
    let targetDiv = document.getElementById("wordsRename");
    if (!targetDiv) {
        console.error("wordsRename element not found");
        return;
    }
    speak(
        "Here we are Rename a table using the Rename command. In this example, we have Rename a table name 'stud' into staff ",
        targetDiv
    );
}

//DDL Command


//DML


function Insertcmd() {
    console.log("Insertcmd function called");
    let targetDiv = document.getElementById("wordsInsert");
    if (!targetDiv) {
        console.error("wordsInsert element not found");
        return;
    }
    speak(
        "The INSERT command is used to insert values into a table. In this example, we are inserting values into the 'studs' table.",
        targetDiv
    );
}



function Updatecmd() {
    console.log("Updatecmd function called");
    let targetDiv = document.getElementById("wordsUpdate");
    if (!targetDiv) {
        console.error("wordsUpdate element not found");
        return;
    }
    speak(
        "The UPDATE command is used to update rows in a table. In this example, we are updating the 'spocket' column using the ID.",
        targetDiv
    );
}


function Deletecmd() {
    console.log("Deletecmd function called");
    let targetDiv = document.getElementById("wordsDelete");
    if (!targetDiv) {
        console.error("wordsDelete element not found");
        return;
    }
    speak(
        "The DELETE command is used to delete rows in a table. In this example, a row from the 'studs' table where 'sid' equals 101 is deleted.",
        targetDiv
    );
}

//DML

//DCL


function Grantcmd() {
    console.log("Grantcmd function called");
    let targetDiv = document.getElementById("wordsGrant");
    if (!targetDiv) {
        console.error("wordsGrant element not found");
        return;
    }
    speak(
        "Grant allows users or roles to access specified resources or perform certain actions within a database, providing them with the necessary privileges for specific operations.",
        targetDiv
    );
}


function Revokcmd() {
    console.log("Revokcmd function called");
    let targetDiv = document.getElementById("wordsRevok");
    if (!targetDiv) {
        console.error("wordsRevok element not found");
        return;
    }
    speak(
        "Revok removes previously granted privileges or access rights from a user or role, restricting their level of access to specified resources or actions.",
        targetDiv
    );
}


//DCL

//TCL 


function Commitcmd() {
    console.log("Commitcmd function called");
    let targetDiv = document.getElementById("wordsCommit");
    if (!targetDiv) {
        console.error("wordsCommit element not found");
        return;
    }
    speak(
        "Commit in SQL finalizes and permanently applies the changes made within a transaction to the database, ensuring their persistence and visibility to other transactions. This operation effectively ends the transaction, making its changes permanent.",
        targetDiv
    );
}



function Rollbackcmd() {
    console.log("Rollbackcmd function called");
    let targetDiv = document.getElementById("wordsRollback");
    if (!targetDiv) {
        console.error("wordsRollback element not found");
        return;
    }
    speak(
        "Rollback in SQL undoes all the changes made within a transaction, reverting the database to its state before the transaction began, ensuring data integrity and consistency. This operation effectively cancels the transaction, discarding any modifications made.",
        targetDiv
    );
}

function savepointcmd() {
    console.log("savepointcmd function called");
    let targetDiv = document.getElementById("wordssavepoint");
    if (!targetDiv) {
        console.error("wordssavepoint element not found");
        return;
    }
    speak(
        "'Savepoint' marks a specific point within a transaction, enabling targeted rollbacks if necessary, ensuring precise control over changes made within the transaction without affecting the entire operation.",
        targetDiv
    );
}


//TCL


//DQL Command
function Selectcmd() {
    console.log("Selectcmd function called");
    let targetDiv = document.getElementById("wordsSelect");
    if (!targetDiv) {
        console.error("wordsSelect element not found");
        return;
    }
    speak(
        "Select command used to select from the table.In these example studs table is select to show the id='101'. ",
        targetDiv
    );
}

//DQL COmmand


//ACID PROPERTIES

function Atomicitycmd() {
    console.log("Atomicitycmd function called");
    let targetDiv = document.getElementById("wordsAtomicity");
    if (!targetDiv) {
        console.error("wordsAtomicity element not found");
        return;
    }
    speak(
        "Atomicity means either all the actions in a transaction happen successfully or none of them happen at all.",
        targetDiv
    );
}

function Consistencycmd() {
    console.log("Consistencycmd function called");
    let targetDiv = document.getElementById("wordsConsistency");
    if (!targetDiv) {
        console.error("wordsConsistency element not found");
        return;
    }
    speak(
        "Consistency ensures that the database remains in a valid state both before and after a transaction. ",
        targetDiv
    );
}

function Isolationcmd() {
    console.log("Isolationcmd function called");
    let targetDiv = document.getElementById("wordsIsolation");
    if (!targetDiv) {
        console.error("wordsIsolation element not found");
        return;
    }
    speak(
        "Isolation ensures that the execution of multiple transactions concurrently does not interfere with each other, maintaining transaction integrity and preventing unwanted side effects. ",
        targetDiv
    );
}

function Durabilitycmd() {
    console.log("Durabilitycmd function called");
    let targetDiv = document.getElementById("wordsDurability");
    if (!targetDiv) {
        console.error("wordsDurability element not found");
        return;
    }
    speak(
        "Durability guarantees that once a transaction is committed, its changes are permanent and will persist, even if there's a system failure.",
        targetDiv
    );
}

//constraint
function Notnullcmd() {
    console.log("Notnullcmd function called");
    let targetDiv = document.getElementById("wordsNotnull");
    if (!targetDiv) {
        console.error("wordsNotnull element not found");
        return;
    }
    speak(
        "The NOT NULL ensures that a column cannot contain NULL values. In this example, the database won't accept NULL values for the 'Name' column due to this constraint.",
        targetDiv
    );
}

function Uniquecmd() {
    console.log("Uniquecmd function called");
    let targetDiv = document.getElementById("wordsUnique");
    if (!targetDiv) {
        console.error("wordsUnique element not found");
        return;
    }
    speak(
        "The UNIQUE ensures that a column can only contain unique values. In this example, the 'Email' column expects only unique values due to this constraint.",
        targetDiv
    );
}

function PRIMARYKEYcmd() {
    console.log("PRIMARYKEYcmd function called");
    let targetDiv = document.getElementById("wordsPRIMARYKEY");
    if (!targetDiv) {
        console.error("wordsPRIMARYKEY element not found");
        return;
    }
    speak(
        "The PRIMARY KEY constraint is similar to the UNIQUE constraint, but it also implies that the values in the column are unique and not null. In this example, the 'ID' column expects unique values and serves as the primary key for the table.",
        targetDiv
    );
}

function FOREIGNKEYcmd() {
    console.log("FOREIGNKEYcmd function called");
    let targetDiv = document.getElementById("wordsFOREIGNKEY");
    if (!targetDiv) {
        console.error("wordsFOREIGNKEY element not found");
        return;
    }
    speak(
        "The FOREIGN KEY constraint links a column to the primary key in another table, ensuring referential integrity. It doesn't mandate uniqueness on its own.In this Examples FOREIGN key is Used in ID it aspect the unqiue value alone",
        targetDiv
    );
}

function CheckKEYcmd() {
    console.log("CheckKEYcmd function called");
    let targetDiv = document.getElementById("wordsCheckKEY");
    if (!targetDiv) {
        console.error("wordsCheckKEY element not found");
        return;
    }
    speak(
        "The CHECK constraint imposes conditions on the values that can be inserted into a column. In this example, the constraint ensures that the employee's age is greater than or equal to 18.",
        targetDiv
    );
}

function DEFAULTKEYcmd() {
    console.log("DEFAULTKEYcmd function called");
    let targetDiv = document.getElementById("wordsDEFAULTKEY");
    if (!targetDiv) {
        console.error("wordsDEFAULTKEY element not found");
        return;
    }
    speak(
        "The DEFAULT constraint sets a default value for a column when a new record is inserted if no value is explicitly specified for that column.",
        targetDiv
    );
}



//constraint

//joins



function Innercmd() {
    console.log("Innercmd function called");
    let targetDiv = document.getElementById("wordsInner");
    if (!targetDiv) {
        console.error("wordsInner element not found");
        return;
    }
    speak(
        "Inner joins merge tables based on a specified foreign key. In this example, the 'class id' and 'classinfo id' being the same means the inner join will merge the tables using these IDs.",
        targetDiv
    );
}


function Naturalcmd() {
    console.log("Naturalcmd function called");
    let targetDiv = document.getElementById("wordsNatural");
    if (!targetDiv) {
        console.error("wordsNatural element not found");
        return;
    }
    speak(
        "Natural joins automatically join tables using columns with the same name, such as 'class id' and 'classinfo id' in this case. This way, the join is based on these matching IDs without explicitly specifying them.",
        targetDiv
    );
}




function leftcmd() {
    console.log("leftcmd function called");
    let targetDiv = document.getElementById("wordsleft");
    if (!targetDiv) {
        console.error("wordsleft element not found");
        return;
    }
    speak(
        "A left join merges two tables based on a shared key, prioritizing data from the left table. It includes all left table records, regardless of matches in the right table, filling unmatched entries with null values.",
        targetDiv
    );
}


function Rightcmd() {
    console.log("Rightcmd function called");
    let targetDiv = document.getElementById("wordsRight");
    if (!targetDiv) {
        console.error("wordsRight element not found");
        return;
    }
    speak(
        "A right join merges two tables based on a shared key, prioritizing data from the right table. It includes all right table records, regardless of matches in the left table, filling unmatched entries with null values. ",
        targetDiv
    );
}



function Fullcmd() {
    console.log("Fullcmd function called");
    let targetDiv = document.getElementById("wordsFull");
    if (!targetDiv) {
        console.error("wordsFull element not found");
        return;
    }
    speak(
        "A full join combines two tables, even if they lack the same foreign key. In this scenario, both the 'class' table and the 'classinfo' table are merged, disregarding matching foreign keys.",
        targetDiv
    );
}


//joins

// Add event listener to cancel speech synthesis before page is refreshed or unloaded
window.onbeforeunload = function() {
    if (text_speak && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
};

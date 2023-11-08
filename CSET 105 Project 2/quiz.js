const questions = [{
    q: "What is Pikachu's Secondary Type?",
    a: [{ text: "Fairy", isCorrect: true },
    { text: "Dark", isCorrect: false },
    { text: "Water", isCorrect: false },
    { text: "Dragon", isCorrect: false }
    ]
 
},
{
    q: "How do you evolve Haunter?",
    a: [{ text: "Leveling", isCorrect: false, isSelected: false },
    { text: "At Night", isCorrect: false },
    { text: "Stone", isCorrect: false },
    { text: "Trading", isCorrect: true }
    ]
 
},
{
    q: "Which Move Does No Damage?",
    a: [{ text: "Belly Drum", isCorrect: false },
    { text: "Coil", isCorrect: true },
    { text: "Mind Blown", isCorrect: false },
    { text: "Salt Cure", isCorrect: false }
    ]
 
}];

let questionPoint = 0;
let score = 0;

function quizStart() 
{
    const question = document.getElementById("inquiry");
    const opt = document.getElementById("choice");
 
    question.textContent = questions[questionPoint].q;
    opt.innerHTML = ""
 
    for (let i = 0; i < questions[questionPoint].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");
 
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
 
        choiceLabel.textContent = questions[questionPoint].a[i].text;
 
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}
quizStart();

function loadPoints() 
{
    const totalScore = document.getElementById("points");
    totalScore.textContent = `Your total is ${score} / ${questions.length}`;
}

function next() 
{
    if (questionPoint < questions.length - 1){
        questionPoint++;
        quizStart();
    } 
    else {
        document.getElementById("choice").remove();
        document.getElementById("inquiry").remove();
        document.getElementById("submit").remove();
        loadPoints();
    }
}

function verify() 
{
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
 
    if (questions[questionPoint].a[selectedAns].isCorrect){
        score++;
        console.log("True")
        next();
    } 
    else {
        next();
    }
}
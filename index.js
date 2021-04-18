var readLineSync = require('readline-sync')
const chalk = require('chalk');
var count = 0;

var highScores = [{
        name: "Vinay",
        score: "4"
    },
    {
        name: "Manav",
        score: "3"
    },
    {
        name: "Manish",
        score: "3"
    },
    {
        name: "Suraj",
        score: "4"
    }
]

var questions = [{
        question: chalk.green("1. Before becoming Vision, what is the name of Iron Man’s A.I. butler? "),
        answer: "jarvis"
    },
    {
        question: chalk.yellowBright("2. What is the real name of the Black Panther? "),
        answer: "tchalla"
    },
    {
        question: chalk.cyanBright("3. Who is Black Panther’s sister? "),
        answer: "shuri"
    },
    {
        question: chalk.magentaBright("4. What is the real name of the Scarlet Witch? "),
        answer: "wanda maximoff"
    }
];


function play(question, answer) {
    var userAnswer = readLineSync.question(question);
    if (userAnswer.toLowerCase() == answer) {
        console.log("Amazing, Correct Answer")
        count++;
        console.log(chalk.cyan("Score -->", count))
    } else {
        console.log("Oops, Wrong Answer");
        count--;
        console.log(chalk.cyan(count))
    }
    return (count);
}


function game() {
    var userName = (readLineSync.question("Hello user What's Your Name? "))
    if (userName != '') {
        console.log("--------------------------")
        console.log("Hello " + chalk.green(userName) + ", Welcome to the Marvel Cinematic Universe.")
        console.log("Let's test your knowledge......")
        console.log("--------------------------")
        for (i = 0; i < questions.length; i++) {
            play(questions[i].question, questions[i].answer);
        }

        highScores.push({
            name: userName,
            score: count
        })
        showScores();

    } else {
        console.log(chalk.red("Please Enter a Valid Name"));
        game();
    }

    function showScores() {
        console.log("");
        console.log("Result");
        console.log("------");
        console.log("Hurrah You Completed the Quiz");
        console.log("Your final score is " + chalk.green(count));
        console.log("------");
        console.log("Checkout the Score Board below!!!!!!!")
        highScores.map(score => console.log(score.name, " : ", chalk.green(score.score)));
    }
}

game();

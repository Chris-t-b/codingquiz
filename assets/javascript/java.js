const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userscore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');

let currentQuestion = 0;
var score = 0;

let questions = [
    {
        question: "HTML is needed to make any website.",
        answers: [
            {Option:"True",answer:true},
            {Option:"false",answer:false}
        ]
    },
    {
        question: "CSS adds decoration to a web page.",
        answers: [
            {Option:"True",answer:true},
            {Option:"false",answer:false}
        ]
    },
    {
        question: "Java makes the structure of a web page.",
        answers: [
            {Option:"True",answer:true},
            {Option:"false",answer:false}
        ]
    }
]

restartBtn.addEventListener('click', restart);
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
submitBtn.addEventListener('click',submit);

function beginQuiz(){
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].Option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userscore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].Option;
    falseBtn.onclick = () => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userscore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    prevBtn.classList.add('hide');
}

beginQuiz();

function restart(){
    currentQuestion = 0;
    prevBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score = 0;
    userscore.innerHTML = score;
    beginQuiz();
}

function next(){
    currentQuestion++;
    if(currentQuestion>=2){
        nextBtn.classList.add('hide');
        prevBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].Option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userscore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].Option;
    falseBtn.onclick = () => {
       let ano=1;
       if(questions[currentQuestion].answers[ano].answer){
           if(score<3){
               score++;
           }
       } 
       userscore.innerHTML = score;
       if(currentQuestion<2){
           next();
       }
    }
    prevBtn.classList.remove('hide');
}

function prev(){
    currentQuestion--;
    if(currentQuestion<=0){
        prevBtn.classList.add('hide');
        nextBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].Option;
    trueBtn.onclick = () => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer){
            if(score<3){
                score++;
            }
        }
        userscore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQuestion].answers[1].Option;
    falseBtn.onclick = () => {
       let ano=1;
       if(questions[currentQuestion].answers[ano].answer){
           if(score<3){
               score++;
           }
       } 
       userscore.innerHTML = score;
       if(currentQuestion<2){
           next();
       }
    }
    nextBtn.classList.remove('hide');
}

function submit(){
    prevBtn.classList.add('hide')
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');
    questionText.innerHTML = "submit quiz";
}


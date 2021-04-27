const quizData = [{
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "python",
        d: "Javascript",
        correct: "d",
    },
    {
        question: "A memory location that holds a single letter or number",
        a: "Double",
        b: "Int",
        c: "Char",
        d: "Word",
        correct: "c",
    },
    {
        question: "What dose this equation mean ?    a != t",
        a: "A is assinged t",
        b: "A and t are equal",
        c: "A is not equal to t",
        d: "A is add to a",
        correct: "c",
    },
    {
        question: "What is FIFO?",
        a: "First in Few Out",
        b: "Few In Few out",
        c: "First In First Out",
        d: "Few In First Out",
        correct: "c",
    },
    {
        question: "A Syntax Error is ?",
        a: "An error you will never find",
        b: "An error you find at the end when the program gives out a wrong value due to logic error",
        c: "An error caused by language rules being broken.",
        d: "An error due to user error",
        correct: "c",
    },
    {
        question: "Which data structure uses LIFO?",
        a: "Queues",
        b: "Stacks",
        c: "Int",
        d: "Array",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const answerEls = document.querySelectorAll('.answer')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    clearResponse()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}


function clearResponse() {
    answerEls.forEach(x => x.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(el => {
        if (el.checked) {
            answer = el.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered ${score} / ${quizData.length} questions correctly</h2>
            <button onclick ="location.reload()">Reload Quiz</button>`
        }
    }
})
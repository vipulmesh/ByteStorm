const questions = [
    { question: "Who is the father of Computers?", options: ["Charles Babbage ", "James Goslin", " Dennis Ritchie", "Bjarne Stroustrup"], answer: 0 },
    { question: " What is the full form of CPU?", options: ["Central Processing Unit", "Computer Processing Unit", "Core Processing Unit", "Command Processing Unit"], answer: 0 },
    { question: "Which of the following computer language is written in binary codes only?", options: ["Java", "C++", "Python", "machine code"], answer: 3 },
    { question: "Which of the following is the smallest unit of data in a computer?", options: ["GB", "Byte", "Kb", "Nibble"], answer: 1 },
    { question: "Which of the following monitor looks like a television and are normally used with non-portable computer systems?", options: ["Moniter", "Mouse", "Keyboard", "Printer"], answer: 0 },
    { question: "Which of the following is the brain of the computer?", options: ["CPU", "PRINTER", "MOUSE", "MONITER"], answer: 0 },
    { question: ". Which of the following are physical devices of a computer?", options: ["MS Word", "MS Paint", "Calculator", "Mouse"], answer: 3 },
    { question: "Which of the following devices provides the communication between a computer and the outer world?", options: ["I/O", "Drivers", "Graphics Card", "RAM"], answer: 0 },
    { question: "What is the square root of 64?", options: ["6", "7", "8", "9"], answer: 2 },
    { question: "Which device is used to input data into a computer?", options: ["Keyboard", "Printer", "Moniter", "Scanner"], answer: 0 }
];
let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    
    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";
    
    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(option);
        optionsElement.appendChild(button);
    });

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    
    questionElement.textContent = questions[currentQuestionIndex].question;
    optionsElement.innerHTML = "";
    
    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(option);
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    alert(selectedOption === questions[currentQuestionIndex].answer ? "Correct!" : "Wrong answer!");
    
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-container").innerHTML = "<h2>Quiz Over!</h2><p>Thanks for playing!</p>";
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

loadQuestion();

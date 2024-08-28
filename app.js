const paraguas = document.getElementById("paraguas");
const title_question = document.getElementById("question");
const front_options = [
    document.getElementById("option-1"),
    document.getElementById("option-2"),
    document.getElementById("option-3"),
    document.getElementById("option-4"),
];
current_answer=0;

const questions = [
    {
        question: "¿Dónde preferirías hacer un freetour?",
        options: [
            "/src/paris.jpeg",
            "/src/paris.jpeg",
            "/src/paris.jpeg",
            "/src/paris.jpeg",
        ]
    },
    {
        question: "¿Cuál es tu merchan favorito?",
        options: [
            "/src/.jpeg",
            "/src/.jpeg",
            "/src/.jpeg",
            "/src/.jpeg",
        ]
    },
    {
        question: "¿Con qué exturista harías dupla creativa?",
        options: [
            "/src/.jpeg",
            "/src/.jpeg",
            "/src/.jpeg",
            "/src/.jpeg",
        ]
    },
    {
        question: "¿Cuál es la cocina de tus sueños?",
        options: [
            "/src/.jpeg",
            "/src/.jpeg",
            "/src/.jpeg",
            "/src/.jpeg",
        ]
    },
    // Agrega más preguntas aquí
];

function startTest(hide_name, show_name){
    moveSticker(1);
    nextContainer(hide_name, show_name);
    showAnswer(); // Asegúrate de que `0` es el índice correcto para la primera pregunta
}

function moveSticker(i){
    if(paraguas){
        if(i == 1)
            paraguas.classList.add("paraguas2");
        else{
            paraguas.classList.remove("paraguas2");
            paraguas.classList.add("paraguas3");
        }
            
    }
}

function nextContainer(hide_name, show_name){
    document.getElementById(hide_name).style.display = "none";
    document.getElementById(show_name).style.display = "flex";
}

function showAnswer(){
    if (title_question){
        title_question.textContent = questions[current_answer].question;
    }
    for(let i = 0; i < front_options.length; i++){
        front_options[i].src = questions[current_answer].options[i];
    }
}
function showResult(){
    nextContainer("test-container", "result-container");


}

function nextAnswer(){
    console.log("antes de sumar: "+current_answer);
    current_answer++;
    console.log("despues de sumar: "+current_answer);
    console.log(questions.length);
    if(current_answer < questions.length)
        showAnswer();
    else{
        showResult();
        moveSticker(2);
    }
}

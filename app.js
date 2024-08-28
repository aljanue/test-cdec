const paraguas = document.getElementById("paraguas");
const title_question = document.getElementById("question");
const front_options = [
    document.getElementById("option-1"),
    document.getElementById("option-2"),
    document.getElementById("option-3"),
    document.getElementById("option-4"),
];
current_answer=0;
result = 0;

const questions = [
    {
        question: "¿Dónde preferirías hacer un freetour?",
        options: [
            {
                url: "/src/images/paris.jpeg",
                puntuation: 0.42
            },
            {
                url: "/src/images/paris.jpeg",
                puntuation: 1.19
            },
            {
                url: "/src/images/paris.jpeg",
                puntuation: 0.81
            },
            {
                url: "/src/images/paris.jpeg",
                puntuation: 2.5
            },
        ]
    },
    {
        question: "¿Cuál es tu merchan favorito?",
        options: [
            {
                url: "/src/images/paris.jpeg",
                puntuation: 1.82
            },
            {
                url: "/src/images/paris.jpeg",
                puntuation: 1.06
            },
            {
                url: "/src/images/paris.jpeg",
                puntuation: 1.76
            },
            {
                url: "/src/images/paris.jpeg",
                puntuation: 2.5
            },
        ]
    },
    {
        question: "¿Con qué exturista harías dupla creativa?",
        options: [
            {
                url: "/src/images/paris.jpeg",
                puntuation: 0.12
            },
            {
                url: "/src/images/paris.jpeg",
                puntuation: 0.65
            },
            {
                url: "/src/images/paris.jpeg",
                puntuation: 0.43
            },
            {
                url: "/src/images/paris.jpeg",
                puntuation: 2.5
            },
        ]
    },
    {
        question: "¿Cuál es la cocina de tus sueños?",
        options: [
            {
                url: "/src/images/paris.jpeg",
                puntuation: 0.2
            },
            {
                url: "/src/images/paris.jpeg",
                puntuation: 1.1
            },
            {
                url: "/src/images/paris.jpeg",
                puntuation: 0.3
            },
            {
                url: "/src/images/paris.jpeg",
                puntuation: 2.5
            },
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
        front_options[i].src = questions[current_answer].options[i].url;
    }
}
function showResult(){
    nextContainer("test-container", "result-container");
}

function nextAnswer(){
    current_answer++;
    if(current_answer < questions.length)
        showAnswer();
    else{
        showResult();
        moveSticker(2);
    }
}

function addResult(x){
    result+=questions[current_answer].options[x].puntuation;
    console.log(result);
}



function captureAndDownload() {
    html2canvas(document.body).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'soy_tour.png';
        
        link.click();
    });
}

const paraguas = document.getElementById("paraguas");
const title_question = document.getElementById("question");
const front_options = [
    document.getElementById("option-1"),
    document.getElementById("option-2"),
    document.getElementById("option-3"),
    document.getElementById("option-4"),
];
current_answer=0;
result = 90;

const questions = [
    {
        question: "¿Dónde preferirías hacer un freetour?",
        options: [
            {
                url: "/src/images/roma.jpg",
                puntuation: 0.42
            },
            {
                url: "/src/images/paris.jpg",
                puntuation: 1.19
            },
            {
                url: "/src/images/cannes.jpg",
                puntuation: 0.81
            },
            {
                url: "/src/images/oglivy.jpg",
                puntuation: 2
            },
        ]
    },
    {
        question: "¿Qué merchan prefieres?",
        options: [
            {
                url: "/src/images/pulsera.webp",
                puntuation: 1.82
            },
            {
                url: "/src/images/camiseta.jpg",
                puntuation: 1.06
            },
            {
                url: "/src/images/tote.jpg",
                puntuation: 1.76
            },
            {
                url: "/src/images/tote.jpg",
                puntuation: 2
            },
        ]
    },
    {
        question: "¿Con qué exturista harías dupla creativa?",
        options: [
            {
                url: "/src/images/mar.jpg",
                puntuation: 0.12
            },
            {
                url: "/src/images/pedro.jpg",
                puntuation: 0.65
            },
            {
                url: "/src/images/pol.jpg",
                puntuation: 0.43
            },
            {
                url: "/src/images/mariola.jpg",
                puntuation: 2
            },
        ]
    },
    {
        question: "¿Cuál es la cocina de tus sueños?",
        options: [
            {
                url: "/src/images/campestre.jpg",
                puntuation: 0.2
            },
            {
                url: "/src/images/moderna.jpg",
                puntuation: 1.1
            },
            {
                url: "/src/images/beige.jpg",
                puntuation: 0.3
            },
            {
                url: "/src/images/kitchen.jpg",
                puntuation: 1.9
            },
        ]
    }, 
    {
        question: "¿Qué Housetour preferirías ver? ",
        options: [
            {
                url: "/src/images/ibai.jpg",
                puntuation: 0.42
            },
            {
                url: "/src/images/lolalolita.jpg",
                puntuation: 1.19
            },
            {
                url: "/src/images/maria.jpg",
                puntuation: 0.81
            },
            {
                url: "/src/images/cdec.jpg",
                puntuation: 2
            },
        ]
    },
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
function showResult(container){
    nextContainer(container, "result-container");
    document.getElementById("result").textContent=result.toFixed(1)+'%';
}
function nextAnswer(){
    current_answer++;
    if(current_answer < questions.length)
        showAnswer();
    else{
        nextContainer('test-container', 'loading-result');
        moveSticker(2);
        setTimeout(function() {
            showResult('loading-result');
        }, 3000);
    }
}

function addResult(x){
    result+=questions[current_answer].options[x].puntuation;
}



function captureAndDownload() {
    html2canvas(document.body).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'soy_tour.png';
        
        link.click();
    });
}

let pergunta = [
    "Como você reage quando recebe uma crítica?",
    "Como você lida com trabalhos em equipe?",
    "O que você faz quando surge um conflito?",
    "Como você reage diante de uma tarefa difícil?",
    "Como você organiza suas tarefas?",
    "Como você lida com mudanças?",
    "Como você se comunica com outras pessoas?",
    "Como você reage quando comete um erro?",
    "Como você lida com pressão?",
    "Como você demonstra iniciativa?"
];

let resposta1 = [
    "Aceito e melhoro",
    "Colaboro bem",
    "Busco dialogar",
    "Busco soluções",
    "Planejo tudo",
    "Adapto-me rápido",
    "Sou claro e objetivo",
    "Aprendo com ele",
    "Mantenho a calma",
    "Procuro ajudar"
];

let resposta2 = [
    "Penso sobre ela",
    "Faço minha parte",
    "Aguardo o momento certo",
    "Tento aos poucos",
    "Organizo quando preciso",
    "Preciso de tempo",
    "Tento me expressar",
    "Tento corrigir",
    "Faço o possível",
    "Ajudo quando solicitado"
];

let resposta3 = [
    "Fico na defensiva",
    "Prefiro trabalhar sozinho",
    "Evito o problema",
    "Desisto facilmente",
    "Deixo para depois",
    "Resisto às mudanças",
    "Tenho dificuldade",
    "Culpo outras pessoas",
    "Fico muito estressado",
    "Espero receber ordens"
];

let perguntaID = document.getElementById("pergunta");
let r1 = document.getElementById("R1");
let r2 = document.getElementById("R2");
let r3 = document.getElementById("R3");
let resultado = document.getElementById("resultado");

let increment = 0;
let respostasSelecionadas = [];

function questionario(idPergunta) {
    perguntaID.innerHTML = pergunta[idPergunta];

    r1.innerHTML = resposta1[idPergunta];
    r2.innerHTML = resposta2[idPergunta];
    r3.innerHTML = resposta3[idPergunta];

    r1.style.display = "inline-block";
    r2.style.display = "inline-block";
    r3.style.display = "inline-block";

    resultado.innerHTML = "";
}

r1.addEventListener("click", function () {
    respostasSelecionadas[increment] = 2;
    avancar();
});

r2.addEventListener("click", function () {
    respostasSelecionadas[increment] = 1;
    avancar();
});

r3.addEventListener("click", function () {
    respostasSelecionadas[increment] = 0;
    avancar();
});

function avancar() {
    if (increment < pergunta.length - 1) {
        increment++;
        questionario(increment);
    } else {
        mostrarResultado();
    }
}

function voltar() {
    if (increment > 0) {
        increment--;
        questionario(increment);
    }
}

function calcularPontuacao() {
    let pontuacao = 0;

    for (let pontos of respostasSelecionadas) {
        if (pontos !== undefined) {
            pontuacao += pontos;
        }
    }

    return pontuacao;
}

function mostrarResultado() {
    let pontuacao = calcularPontuacao();

    perguntaID.innerHTML = "Resultado final";

    r1.style.display = "none";
    r2.style.display = "none";
    r3.style.display = "none";

    if (pontuacao >= 16) {
        resultado.innerHTML = `
            <div class="azul">
                🔵 <strong>Acima da expectativa</strong>
                <br>
                Pontuação: ${pontuacao}/20
            </div>
        `;
    } else if (pontuacao >= 11) {
        resultado.innerHTML = `
            <div class="verde">
                🟢 <strong>Dentro da expectativa</strong>
                <br>
                Pontuação: ${pontuacao}/20
            </div>
        `;
    } else if (pontuacao >= 6) {
        resultado.innerHTML = `
            <div class="amarelo">
                🟡 <strong>Abaixo da expectativa</strong>
                <br>
                Pontuação: ${pontuacao}/20
            </div>
        `;
    } else {
        resultado.innerHTML = `
            <div class="vermelho">
                🔴 <strong>Crítico</strong>
                <br>
                Pontuação: ${pontuacao}/20
            </div>
        `;
    }
}

questionario(0);
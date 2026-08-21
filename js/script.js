




let pergunta = [
    
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



let perguntaID = document.getElementById('pergunta')
let r1 = document.getElementById('R1')
let r2 = document.getElementById('R2')
let r3 = document.getElementById('R3')
 
let pontuacao = 0;

r1.addEventListener("click", function() {
    pontuacao += 2;
    avancar();
});

r2.addEventListener("click", function() {
    pontuacao += 1;
    avancar();
});

r3.addEventListener("click", function() {
    pontuacao += 0;
    avancar();
});

if(5>pontuacao){
    document.getElementById('ponto').innerHTML = pontuacao
    document.getElementById('nivel').innerHTML = "🔴Critico "
}else if( 5<=pontuacao && pontuacao<11){
    document.getElementById('ponto').innerHTML = pontuacao
    document.getElementById('nivel').innerHTML = "🟡abaixo da expectativa "
}

function mostrarpontuacao(){
document.getElementById('ponto').textContent = pontuacao

}

function questionario( IDpergunta){

    
    perguntaID.innerHTML = pergunta[IDpergunta]
    r1.innerHTML = resposta1[IDpergunta]
    r2.innerHTML = resposta2[IDpergunta]
    r3.innerHTML = resposta3[IDpergunta]
}


let increment = 0


function avancar(){

questionario(increment)

 increment++
mostrarpontuacao()
}




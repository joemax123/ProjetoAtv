

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



let perguntaID = document.getElementById('pergunta')
let r1 = document.getElementById('R1')
let r2 = document.getElementById('R2')
let r3 = document.getElementById('R3')
 



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


    
if(increment>9){
    increment = 0
}
 }




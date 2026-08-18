

let pergunta = ["Quando você precisa explicar uma tarefa complexa para alguém que não domina o assunto, como costuma fazer para garantir que a pessoa compreenda?"
    , "Conte sobre uma situação em que precisou trabalhar com alguém que tinha uma opinião ou forma de trabalhar muito diferente da sua. Como lidou com isso?",
     "Se você perceber um conflito entre dois colegas que está prejudicando o trabalho da equipe, qual seria sua atitude?",
    
    
    
    
    ]

let perguntaID = document.getElementById('pergunta')


function questionario( IDpergunta){

    IDpergunta = 0
    perguntaID.innerHTML = pergunta[0]
}

questionario(0)
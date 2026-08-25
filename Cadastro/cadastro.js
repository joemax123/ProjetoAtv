const cadastroForm = document.getElementById("cadastroForm");
const botaoLogin = document.getElementById("botaoLogin");

botaoLogin.addEventListener("click", function () {
    window.location.href = "../login/login.html";
});

cadastroForm.addEventListener("submit", function () {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    // verifica o nome
    if (nome.length < 3) {
        alert("Digite um nome válido.");
        return;
    }

    // verifica a senha
    if (senha.length < 6) {
        alert("A senha deve possuir pelo menos 6 caracteres.");
        return;
    }

    // verifica se as senhas são iguais
    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais.");
        return;
    }

    alert("Cadastro realizado com sucesso!");

    window.location.href = "../login/login.html";
});
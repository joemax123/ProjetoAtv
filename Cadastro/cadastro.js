const botaoLogin = document.getElementById("botaoLogin");

botaoLogin.addEventListener("click", function () {
    window.location.href = "login.html";
});

const cadastroForm = document.getElementById("cadastroForm");

cadastroForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;

    if (senha !== confirmarSenha) {
        alert("As senhas não são iguais!");
        return;
    }

    alert("Cadastro realizado com sucesso!");

    window.location.href = "../login/login.html";
});
const loginForm = document.getElementById("loginForm");
const botaoCadastro = document.getElementById("botaoCadastro");

botaoCadastro.addEventListener("click", function () {
    window.location.href = "../cadastro/cadastro.html";
});

loginForm.addEventListener("submit", function () {

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    // verifica a senha
    if (senha.length < 6) {
        alert("A senha deve possuir pelo menos 6 caracteres.");
        return;
    }

    alert("Login realizado com sucesso!");
});
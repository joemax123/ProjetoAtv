const botaoCadastro = document.getElementById("botaoCadastro");

botaoCadastro.addEventListener("click", function () {
    window.location.href = "cadastro.html";
});

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Login realizado com sucesso!");
});
// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var b_data = document.getElementById("b_data");
    var b_email = document.getElementById("b_email");
    var b_cpf = document.getElementById("b_cpf");
    var b_telefone = document.getElementById("b_telefone");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
        b_data.innerHTML = sessionStorage.DATA_CADASTRO;
        b_email.innerHTML = sessionStorage.EMAIL_USUARIO;
        b_cpf.innerHTML = sessionStorage.CPF_USUARIO;
        b_telefone.innerHTML = sessionStorage.TELEFONE_USUARIO;

    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}


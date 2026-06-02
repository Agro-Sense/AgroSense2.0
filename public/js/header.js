document.addEventListener("DOMContentLoaded", () => {

    const nomeUsuario = sessionStorage.NOME_USUARIO;

    const elemento = document.getElementById("nomeHeader");

    if (elemento && nomeUsuario) {
        elemento.innerHTML =
            `${nomeUsuario}! Bem-vindo à Sua Área Exclusiva`;
    }

});
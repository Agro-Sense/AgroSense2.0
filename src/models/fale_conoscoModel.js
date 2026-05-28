var database = require("../database/config");

function listar() {

    var instrucaoSql = `
        SELECT id_fale_conosco, nome, email, mensagem FROM fale_conosco;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, mensagem) {

    var instrucaoSql = `
        INSERT INTO fale_conosco (nome, email, mensagem) VALUES ('${nome}', '${email}', '${mensagem}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    cadastrar
};
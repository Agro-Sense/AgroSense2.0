const database = require("../database/config");

function buscarPerfil(idUsuario) {

    const instrucaoSql = `
        SELECT
            nome,
            email,
            cpf,
            telefone,
            data_cadastro
        FROM usuario
        WHERE id = ${idUsuario};
    `;

    console.log(instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarPerfil
};
var database = require("../database/config");

function buscarSensoresPorCliente(idCliente) {
    const instrucaoSql = `
        SELECT
            COUNT(s.id) AS total,
            SUM(CASE WHEN s.sts = TRUE  THEN 1 ELSE 0 END) AS ativos,
            SUM(CASE WHEN s.sts = FALSE THEN 1 ELSE 0 END) AS inativos
        FROM sensor s
        JOIN plantacao p ON s.fkPlantacao = p.id
        WHERE p.fkCliente = ${idCliente};
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarSensoresPorCliente
}
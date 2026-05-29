var database = require("../database/config");

function listar() {
    var instrucao = `
    SELECT 
    SUM(CASE WHEN s.sts= "Ativo" THEN 1 ELSE 0 END) AS ativos,
    SUM(CASE WHEN s.sts IN ('Inativo', 'Manutenção') THEN 1 ELSE 0 END) AS inativos
    FROM sensor s 
    JOIN plantacao p ON s.fkPlantacao = p.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    listar
};
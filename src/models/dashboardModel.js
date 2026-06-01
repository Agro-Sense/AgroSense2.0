var database = require("../database/config");

function ativoOuInativo() {
    var instrucao = `
    SELECT 
    SUM(CASE WHEN s.sts= TRUE THEN 1 ELSE 0 END) AS ativos,
    SUM(CASE WHEN s.sts = FALSE THEN 1 ELSE 0 END) AS inativos
    FROM sensor s 
    JOIN plantacao p ON s.fkPlantacao = p.id
    WHERE p.fkCliente = ${idCliente};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function analiseUmidade() {
    var instrucao = `
    SELECT
    SUM(CASE WHEN c.valor < 65 THEN 1 ELSE 0 END) AS seco,
    SUM(CASE WHEN c.valor BETWEEN 65 AND 75 THEN 1 ELSE 0 END) AS ideal,
    SUM(CASE WHEN c.valor > 75 THEN 1 ELSE 0 END) AS umido
    FROM captura c
    JOIN sensor s ON c.fkSensor = s.id
    JOIN plantacao p ON s.fkPlantacao = p.id
    WHERE p.fkCliente = ${idCliente};`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function horaMedicao() {
    var instrucao = `SELECT
    HOUR(c.data_horario_medicao) AS horario,
    c.valor
    FROM captura c
    JOIN sensor s ON c.fkSensor = s.id
    JOIN plantacao p ON s.fkPlantacao = p.id
    WHERE p;fkCliente = ${idCliente}
    ORDER BY c.data_horario_medicao;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function producaoPorMes() {
    var instrucao = `
    SELECT
    c.data_horario_medicao AS mes,
    c.data_horario_medicao AS nomeMes,
    AVG(c.valor) AS mediaUmidade
    FROM captura c
    JOIN sensor s ON c.fkSensor = s.id
    JOIN plantacao p ON s.fkPlantacao = p.id
    WHERE p.fkCliente = ${idCliente}
    GROUP BY mes, nomeMes
    ORDER BY mes;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiUmidade() {
    var instrucao = `
    SELECT
    MAX(valor) AS maiorUmidade,
    MIN(valor) AS menorUmidade
    FROM captura
    WHERE p.fkCliente = ${idCliente}; `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiAlertaUmidade() {
    var instrucao = `
    SELECT COUNT(*) AS totalBaixas
    FROM captura
    WHERE p.fkCliente = ${idCliente}
    AND valor < 65;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiSensores() {
    var instrucao = `
    SELECT id
    FROM sensor
    WHERE p.fkCliente = ${idCliente}
    AND sts = FALSE;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiMelhorMes() {
     var instrucao = `
    SELECT
    c.data_horario_medicao AS nomeMes,
    AVG(c.valor) AS mediaUmidade
    FROM captura c
    JOIN sensor s ON c.fkSensor = s.id
    JOIN plantacao p ON s.fkPlantacao = p.id
    WHERE p.fkCliente = ${idCliente}
    GROUP BY nomeMes
    ORDER BY mediaUmidade DESC
    LIMIT 1;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function kpiPiorMes() {
    var instrucao = `
    SELECT
    c.data_horario_medicao AS nomeMes,
    AVG(c.valor) AS mediaUmidade
    FROM captura c
    JOIN sensor s ON c.fkSensor = s.id
    JOIN plantacao p ON s.fkPlantacao = p.id
    WHERE p.fkCliente = ${idCliente}
    GROUP BY nomeMes
    ORDER BY mediaUmidade ASC
    LIMIT 1;`;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    ativoOuInativo,
    analiseUmidade,
    horaMedicao,
    kpiUmidade,
    kpiAlertaUmidade,
    kpiSensores,
    kpiMelhorMes,
    kpiPiorMes
};
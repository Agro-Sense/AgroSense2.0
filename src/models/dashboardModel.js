var database = require("../database/config");

// grafico 1

function horaMedicao(idCliente) {
var instrucao = `
select * from vw_grafico1
WHERE fkCliente = ${idCliente}
ORDER BY horario;`
;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

// grafico 2
function analiseUmidade(idCliente) {
var instrucao = `
select * from vw_grafico2
WHERE fkCliente = ${idCliente};`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

// grafico 3
function ativoOuInativo(idCliente) {
var instrucao = `
select * from vw_grafico3
WHERE fkCliente = ${idCliente};
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

// grafico 4
function producaoPorMes(idCliente) {
var instrucao = `
select * from vw_grafico4
WHERE fkCliente = ${idCliente}
ORDER BY mes;`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function kpiUmidade(idCliente) {
var instrucao = `
SELECT
MAX(c.valor) AS maiorUmidade,
MIN(c.valor) AS menorUmidade
FROM captura c
JOIN sensor s ON c.fkSensor = s.id
JOIN plantacao p ON s.fkPlantacao = p.id
WHERE p.fkCliente = ${idCliente};
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function kpiAlertaUmidade(idCliente) {
var instrucao = `
SELECT COUNT(*) AS totalBaixas
FROM captura c
JOIN sensor s ON c.fkSensor = s.id
JOIN plantacao p ON s.fkPlantacao = p.id
WHERE fkCliente = ${idCliente}
AND valor < 65;`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function kpiSensores(idCliente) {
var instrucao = `
SELECT id
FROM sensor
WHERE fkCliente = ${idCliente}
AND sts = FALSE;`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

function kpiMelhorMes(idCliente) {
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

function kpiPiorMes(idCliente) {
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
producaoPorMes,
kpiUmidade,
kpiAlertaUmidade,
kpiSensores,
kpiMelhorMes,
kpiPiorMes
};
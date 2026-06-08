var database = require("../database/config");

// grafico 1

function horaMedicao(idCliente) {
var instrucao = `select * from vw_grafico1
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

// kpi 1
function kpiUmidade(idCliente) {
var instrucao = `
select * from vw_kpi1
WHERE fkCliente = ${idCliente};
`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

// kpi 2
function kpiAlertaUmidade(idCliente) {
var instrucao = `
select * from vw_kpi2
WHERE fkCliente = ${idCliente};`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

// kpi 3
function kpiSensores(idCliente) {
var instrucao = `
select id FROM vw_kpi3 where fkCliente = ${idCliente};`
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}


// kpi 4
function kpiMelhorMes(idCliente) {
var instrucao = `
select * from vw_kpi4
WHERE fkCliente = ${idCliente};`;
console.log("Executando a instrução SQL: \n" + instrucao);
return database.executar(instrucao);
}

// kpi 5
function kpiPiorMes(idCliente) {
var instrucao = `
SELECT
CASE MONTH(c.data_horario_medicao)
  WHEN 1 THEN 'Janeiro'
  WHEN 2 THEN 'Fevereiro'
  WHEN 3 THEN 'Março'
  WHEN 4 THEN 'Abril'
  WHEN 5 THEN 'Maio'
  WHEN 6 THEN 'Junho'
  WHEN 7 THEN 'Julho'
  WHEN 8 THEN 'Agosto'
  WHEN 9 THEN 'Setembro'
  WHEN 10 THEN 'Outubro'
  WHEN 11 THEN 'Novembro'
  WHEN 12 THEN 'Dezembro'
END AS nomeMes,
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
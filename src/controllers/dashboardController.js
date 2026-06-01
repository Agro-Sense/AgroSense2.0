var dashboardModel = require("../models/dashboardModel");

function ativoOuInativo(req, res) {
    dashboardModel.ativoOuInativo(idCliente).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}
function analiseUmidade(req, res) {
    dashboardModel.analiseUmidade(idCliente).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}
function horaMedicao(req, res) {
    dashboardModel.horaMedicao(idCliente).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function producaoPorMes(req, res) {
    dashboardModel.producaoPorMes(idCliente).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function kpiUmidade(req, res) {
    dashboardModel.kpiUmidade(idCliente)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function kpiAlertaUmidade(req, res) {
    dashboardModel.kpiAlertaUmidade(idCliente)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function kpiSensores(req, res) {
    dashboardModel.kpiSensores(idCliente)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function kpiMelhorMes(req, res) {
    dashboardModel.kpiMelhorMes(idCliente)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function kpiPiorMes(req, res) {
    dashboardModel.kpiPiorMes(idCliente)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
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
}
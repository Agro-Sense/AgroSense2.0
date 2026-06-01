var dashboardModel = require("../models/dashboardModel");

function ativoOuInativo(req, res) {
    dashboardModel.ativoOuInativo().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}
function analiseUmidade(req, res) {
    dashboardModel.analiseUmidade().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}
function horaMedicao(req, res) {
    dashboardModel.horaMedicao().then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function producaoPorMes(req, res) {
    dashboardModel.producaoPorMes().then(function (resultado) {
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
    dashboardModel.kpiAlertaUmidade()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function kpiSensores(req, res) {
    dashboardModel.kpiSensores()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function kpiMelhorMes(req, res) {
    dashboardModel.kpiMelhorMes()
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function kpiPiorMes(req, res) {
    dashboardModel.kpiPiorMes()
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
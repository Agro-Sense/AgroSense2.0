var dashboardModel = require("../models/dashboardModel");

function ativoOuInativo(req, res) {
    const idCliente = req.params.idCliente;
    dashboardModel.ativoOuInativo(idCliente).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}
function analiseUmidade(req, res) {
    const idCliente = req.params.idCliente;
    dashboardModel.analiseUmidade(idCliente).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}
function horaMedicao(req, res) {
    const idCliente = req.params.idCliente;
    dashboardModel.horaMedicao(idCliente).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function producaoPorMes(req, res) {
    const idCliente = req.params.idCliente;
    dashboardModel.producaoPorMes(idCliente).then(function (resultado) {
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function kpiUmidade(req, res) {
    const idCliente = req.params.idCliente;
    dashboardModel.kpiUmidade(idCliente)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function kpiAlertaUmidade(req, res) {
    const idCliente = req.params.idCliente;
    dashboardModel.kpiAlertaUmidade(idCliente)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function kpiSensores(req, res) {
    const idCliente = req.params.idCliente;
    dashboardModel.kpiSensores(idCliente)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function kpiMelhorMes(req, res) {
    const idCliente = req.params.idCliente;
    dashboardModel.kpiMelhorMes(idCliente)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function kpiPiorMes(req, res) {
    const idCliente = req.params.idCliente;
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
var dashboardModel = require("../models/dashboardModel");

function listar(req, res) {
    dashboardModel.listar().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar
}
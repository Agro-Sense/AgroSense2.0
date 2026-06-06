var sensorModel = require("../models/sensorModel");

function buscarSensores(req, res) {
    const idCliente = req.params.idCliente;

    sensorModel.buscarSensoresPorCliente(idCliente)
        .then(resultado => {
            res.status(200).json(resultado[0]);
        })
        .catch(erro => {
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarSensores
}
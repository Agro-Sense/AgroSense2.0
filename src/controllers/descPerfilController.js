const descPerfilModel = require("../models/descPerfilModel");

function buscarPerfil(req, res) {

    const idUsuario = req.params.idUsuario;

    descPerfilModel.buscarPerfil(idUsuario)
        .then(resultado => {

            if (resultado.length > 0) {
                res.status(200).json(resultado[0]);
            } else {
                res.status(404).send("Usuário não encontrado");
            }

        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    buscarPerfil
};
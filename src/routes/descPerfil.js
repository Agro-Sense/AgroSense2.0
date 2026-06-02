const express = require("express");
const router = express.Router();

const descPerfilController = require("../controllers/descPerfilController");

router.get("/perfil/:idUsuario", function (req, res) {
    descPerfilController.buscarPerfil(req, res);
});

module.exports = router;
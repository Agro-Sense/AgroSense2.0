var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

//Recebendo os dados do html e direcionando para a função enviar de perfilController.js
router.post("/enviar", function (req, res) {
    perfilController.enviar(req, res);
});

module.exports = router;
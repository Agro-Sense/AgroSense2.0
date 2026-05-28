var express = require("express");
var router = express.Router();

var fale_conoscoController = require("../controllers/fale_conoscoController");

router.post("/cadastrar", function (req, res) {
    fale_conoscoController.cadastrar(req, res);
});

module.exports = router;
var express = require("express");
var router = express.Router();

var sensorController = require("../controllers/sensorController");

router.get("/sensores/:idCliente", function (req, res) {
    sensorController.buscarSensores(req, res);
});

module.exports = router;
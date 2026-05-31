var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/ativoOuInativo", function(req,res) {
    dashboardController.ativoOuInativo(req,res);
 }

);
router.get("/analiseUmidade", function(req,res) {
    dashboardController.analiseUmidade(req,res);
 }

);
router.get("/horaMedicao", function(req,res) {
    dashboardController.horaMedicao(req,res);
 }

);

router.get("/kpiUmidade", function(req,res) {
    dashboardController.kpiUmidade(req,res);
 }
 );

 router.get("/kpiAlertaUmidade", function(req,res) {
    dashboardController.kpiAlertaUmidade(req,res);
 }
);

 router.get("/kpiSensores", function(req,res) {
    dashboardController.kpiSensores(req,res);
 }
);
 




module.exports = router;
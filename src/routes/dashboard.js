var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/ativoOuInativo/:idCliente", 
function(req,res) {

    dashboardController.ativoOuInativo(req,res);
 }

);
router.get("/analiseUmidade/:idCliente", 
function(req,res) {
    dashboardController.analiseUmidade(req,res);
 }

);
router.get("/horaMedicao/:idCliente", function(req,res) {
    dashboardController.horaMedicao(req,res);
 }

);

router.get("/producaoPorMes/:idCliente", function(req,res) {
    dashboardController.producaoPorMes(req,res);
 }

);

router.get("/kpiUmidade/:idCliente", function(req,res) {
    dashboardController.kpiUmidade(req,res);
 }
 );

 router.get("/kpiAlertaUmidade/:idCliente", function(req,res) {
    dashboardController.kpiAlertaUmidade(req,res);
 }
);

 router.get("/kpiSensores/:idCliente", function(req,res) {
    dashboardController.kpiSensores(req,res);
 }
);

router.get("/kpiMelhorMes/:idCliente", function(req,res) {
    dashboardController.kpiMelhorMes(req,res);
 }

);

router.get("/kpiPiorMes/:idCliente", function(req,res) {
    dashboardController.kpiPiorMes(req,res);
 }

);
 

module.exports = router;
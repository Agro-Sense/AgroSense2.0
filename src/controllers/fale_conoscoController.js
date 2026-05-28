var fale_conoscoModel = require("../models/fale_conoscoModel");

function listar(req, res) {
    fale_conoscoModel.listar().then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var mensagem = req.body.mensagemServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome não está definido!");
    } else if (email == undefined) {
        res.status(400).send("Seu email não está definido!");
    } else if (mensagem == undefined) {
        res.status(400).send("Você não escreveu a sua mensagem!");
    } else {
        
        fale_conoscoModel.cadastrar(nome, email, mensagem)
            .then(function(resposta){
                res.status(200).send("Mensagem enviada com sucesso");
            }).catch(function(erro){
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}  

module.exports = {
    listar,
    cadastrar
};
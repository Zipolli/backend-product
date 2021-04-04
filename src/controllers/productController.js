// Define a utilização do model produto e a dependência http-status
const product = require('../models/product');
const status = require('http-status');
 
// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const descricao = req.body.descricao;
    const preco = req.body.preco;
    const qtd_estoque = req.body.qtd_estoque;
 
    // Popula cada um dos campos do model com os campos recebido na request
    product.create({
        nome: nome,
        descricao: descricao,
        preco: preco,
        qtd_estoque: qtd_estoque,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(product => {
            if (product) {
                res.status(status.OK).send(product);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    product.findAll()
        .then(product => {
            if (product) {
                res.status(status.OK).send(product);
            }
        })
        .catch(error => next(error));
}
exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;
 
    product.findByPk(id)
        .then(product => {
            if (product) {
                res.status(status.OK).send(product);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

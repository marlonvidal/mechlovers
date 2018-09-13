'use strict';

var Usuario = require('../models').Usuario;

module.exports = function (app) {

    app.get('/usuario/:id([0-9]+)', function (req, res) {
        /*Usuario.findById(req.params.id).then(item => {
            console.log(item);

            let response = {
                id: item.id,
                nome: item.nome,
                email: item.email,
                ativo: item.ativo
            }
            res.json(response);
        });*/
        
        let response = {
            id: 1,
            nome: 'teste',
            email: 'teste',
            ativo: true
        }
        res.json(response);        
    });
}
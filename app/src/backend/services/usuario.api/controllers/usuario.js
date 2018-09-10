'use strict';

var PerfilAcesso = require('../models').PerfilAcesso;

module.exports = function (app) {

    app.get('/usuario/:id', function (req, res) {
        PerfilAcesso.findById(1).then(item => {
            res.status(201).json(item);
        });
    });
}
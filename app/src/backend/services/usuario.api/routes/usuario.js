'use strict';

module.exports = function(app) {
    app.get('/usuario/:id', function(req, res) {
        res.send('ok');
    });
}
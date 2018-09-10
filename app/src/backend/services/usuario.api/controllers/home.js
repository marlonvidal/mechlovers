'use strict';

'use strict';

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.send('Bem-vindo a API de usuario')
    })
}
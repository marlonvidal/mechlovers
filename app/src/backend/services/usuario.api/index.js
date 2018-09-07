'use strict';

let app = require('./config/express-config')();

let port = process.env.PORT || 3000;
console.log(port);

app.listen(port, function() {
    console.log(`Servidor iniciado na porta: ${port}`);
});
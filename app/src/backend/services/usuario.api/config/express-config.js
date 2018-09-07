'use strict';

let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser')
var expressValidator = require('express-validator');

module.exports = function() {
    var app = express();

    app.use(bodyParser.json());
    app.use(expressValidator());

    consign()
      .include('routes')
      .into(app);

    return app;
}
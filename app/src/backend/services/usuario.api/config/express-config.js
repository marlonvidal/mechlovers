'use strict';

let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser')
var expressValidator = require('express-validator');

module.exports = function () {
  var app = express();

  app.use(bodyParser.json());
  app.use(expressValidator());

  consign()
    .include('models/index')
    .then('controllers')
    .then('utils')
    .into(app);

  return app;
}
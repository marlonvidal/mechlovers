'use strict';
const admin = require(`../config/config.json`)['administrador'];
let bcrypt = require('bcrypt');
let constantes = require('../utils/constantes');

module.exports = {
  up: (queryInterface, Sequelize) => {
    var senha = 'admin123';

    bcrypt.genSalt(constantes.seguranca.saltRounds, function (err, salt) {
      if(err) console.log(err);

      bcrypt.hash(senha, salt, function (err, hash) {
        if(err) console.log(err);
        console.log(hash);
      });
    });   
        
    return queryInterface.bulkInsert('usuario', [{
      id_perfil_acesso: 1,
      nome: 'Administrador Master',
      email: admin.email,
      senha: 'admin1234',
      ativo: true
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario', null, {});
  }
};

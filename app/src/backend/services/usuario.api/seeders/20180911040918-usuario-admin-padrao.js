'use strict';
const admin = require(`../config/config.json`)['administrador'];
let constantes = require('../utils/constantes');

module.exports = {
  up: (queryInterface, Sequelize) => {
            
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

'use strict';
let constantes = require('../utils/constantes');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('perfil_acesso', [{
      tipo: constantes.perfilAcesso.ADMIN,
      descricao: 'Usuario admin que possui permissao de acesso a todo o sistema'
    }, {
      tipo: constantes.perfilAcesso.OPERADOR,
      descricao: 'Usuario operador com permissao de acesso a funcionalidades basicas do sistema'
    }]);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('perfil_acesso', null, {});
  }
};

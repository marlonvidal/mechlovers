'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_perfil_acesso: {
        type: Sequelize.INTEGER,      
        allowNull: false,
        references: {
          model: 'perfil_acesso',
          key: 'id',
          as: 'id_perfil_acesso',
        },
      },
      nome: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      senha: {
        type: Sequelize.STRING(500),
        allowNull: false
      },
      ativo: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario');
  }
};
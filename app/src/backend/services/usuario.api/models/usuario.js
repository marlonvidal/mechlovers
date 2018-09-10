'use strict';
module.exports = (sequelize, DataTypes) => {

  const Usuario = sequelize.define('Usuario', {
    id_perfil_acesso: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    tableName: "Usuario"
  });
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};
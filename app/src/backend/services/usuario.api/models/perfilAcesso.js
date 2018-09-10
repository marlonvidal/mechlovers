'use strict';
module.exports = (sequelize, DataTypes) => {

  const PerfilAcesso = sequelize.define('PerfilAcesso', {
    tipo: DataTypes.STRING,
    descricao: DataTypes.STRING
  }, {
    tableName: "perfil_acesso"
  });
  PerfilAcesso.associate = function(models) {
    // associations can be defined here
  };

  return PerfilAcesso;
}